#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

ENV_FILE=".env"
SKIP_BUILD=false

for arg in "$@"; do
  case "$arg" in
    --skip-build)
      SKIP_BUILD=true
      ;;
    *)
      if [ -f "$SCRIPT_DIR/$arg" ] || [ -f "$arg" ]; then
        ENV_FILE="$arg"
      elif [[ "$arg" == *.env* ]]; then
        ENV_FILE="$arg"
      fi
      ;;
  esac
done

if [[ "$ENV_FILE" = /* ]]; then
  RESOLVED_ENV="$ENV_FILE"
else
  RESOLVED_ENV="$SCRIPT_DIR/$ENV_FILE"
fi

if [ ! -f "$RESOLVED_ENV" ]; then
  echo "✗ Missing env file: $RESOLVED_ENV"; exit 1
fi
set -a
source "$RESOLVED_ENV"
set +a

ENV_LABEL="$(basename "$RESOLVED_ENV")"

SSH_KEY="${SSH_KEY/#\~/$HOME}"

if [ -z "${VPS_USER:-}" ] || [ -z "${VPS_HOST:-}" ]; then
  echo "✗ [$ENV_LABEL] VPS_USER and VPS_HOST must be set in $RESOLVED_ENV"; exit 1
fi

if [ -z "${THEME_DIR:-}" ] || [ "$THEME_DIR" = "/" ]; then
  echo "✗ [$ENV_LABEL] THEME_DIR is not set or is unsafe in $RESOLVED_ENV"; exit 1
fi
if [ "$(dirname "$THEME_DIR")" = "/" ]; then
  echo "✗ [$ENV_LABEL] THEME_DIR parent is / — refusing to run"; exit 1
fi

if [ "$SKIP_BUILD" = false ]; then
  echo "▶ [$ENV_LABEL] Building..."
  (cd "$SCRIPT_DIR" && npm run build && npm run build:package)
fi

ZIP_FILE=$(ls "$SCRIPT_DIR"/nextora-v*.zip 2>/dev/null | sort -V | tail -1)
if [ -z "${ZIP_FILE:-}" ]; then
  echo "✗ [$ENV_LABEL] No nextora-v*.zip found after build"; exit 1
fi
ZIP_NAME=$(basename "$ZIP_FILE")
REMOTE_TMP="/tmp/${ZIP_NAME%.zip}-$$.zip"

echo "▶ [$ENV_LABEL] Uploading $ZIP_NAME to $VPS_HOST..."
scp -i "$SSH_KEY" -P "${VPS_PORT:-22}" "$ZIP_FILE" "$VPS_USER@$VPS_HOST:$REMOTE_TMP"

PARENT_DIR="$(dirname "$THEME_DIR")"
echo "▶ [$ENV_LABEL] Deploying to $THEME_DIR..."
ssh -i "$SSH_KEY" -p "${VPS_PORT:-22}" "$VPS_USER@$VPS_HOST" bash -s <<EOF
  set -e
  if [ -n "${THEME_DIR:-}" ] && [ "$THEME_DIR" != "/" ]; then
    rm -rf "$THEME_DIR"
  fi
  mkdir -p "$PARENT_DIR"
  unzip -o "$REMOTE_TMP" -d "$PARENT_DIR"
  rm "$REMOTE_TMP"
EOF

echo "✓ [$ENV_LABEL] Deployed to $VPS_HOST:$THEME_DIR"

if [ -n "${SLACK_API_TOKEN:-}" ]; then
  MESSAGE="Theme \`nextora\` [${ENV_LABEL}] deployed to \`$VPS_HOST\` → \`$THEME_DIR\`"
  echo "▶ [$ENV_LABEL] Sending notification..."
  curl -sS -X POST https://post-message-cms.beplus-agency.cloud/api/v1/messages \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer ${SLACK_API_TOKEN}" \
    -d "{\"text\": \"${MESSAGE}\", \"branch\": \"alert-beplus-services-noti\"}" \
    && echo "" || echo "  ([$ENV_LABEL] notification skipped — curl failed)"
fi
