#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

ENV_FILE=".env"
SKIP_BUILD=false

for arg in "$@"; do
  case "$arg" in
    --skip-build|--no-build)
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

VERSION=$(node --input-type=module -e 'import fs from "node:fs"; const match = fs.readFileSync(process.argv[1], "utf8").match(/define\(\s*\x27NEXTORA_VERSION\x27\s*,\s*\x27([^\x27]+)\x27\s*\)/); if (!match || !/^[0-9A-Za-z._-]+$/.test(match[1])) process.exit(1); console.log(match[1]);' "$SCRIPT_DIR/inc/bootstrap/version.php")
ZIP_FILE="$SCRIPT_DIR/nextora-v${VERSION}.zip"
if [ ! -f "$ZIP_FILE" ]; then
  echo "✗ [$ENV_LABEL] No nextora-v*.zip found after build"; exit 1
fi
ZIP_NAME=$(basename "$ZIP_FILE")
if unzip -Z1 "$ZIP_FILE" | grep -E '(^|/)\.env[^/]*(/|$)' >/dev/null; then
  echo "✗ Package contains environment files or backups; refusing upload"; exit 1
fi
unzip -tq "$ZIP_FILE" >/dev/null
REMOTE_TMP="/tmp/${ZIP_NAME%.zip}-$$.zip"

echo "▶ [$ENV_LABEL] Uploading $ZIP_NAME to $VPS_HOST..."
scp -o BatchMode=yes -i "$SSH_KEY" -P "${VPS_PORT:-22}" "$ZIP_FILE" "$VPS_USER@$VPS_HOST:$REMOTE_TMP"

echo "▶ [$ENV_LABEL] Deploying to $THEME_DIR..."
if [[ ! "$THEME_DIR" =~ ^/[a-zA-Z0-9_./-]+/wp-content/themes/nextora$ ]] || [[ "$THEME_DIR" == *".."* ]]; then
  echo "✗ Unsafe Nextora destination"; exit 1
fi
ssh -o BatchMode=yes -i "$SSH_KEY" -p "${VPS_PORT:-22}" "$VPS_USER@$VPS_HOST" bash -s -- "$THEME_DIR" "$REMOTE_TMP" <<'EOF'
  set -euo pipefail
  theme_dir="$1"
  archive="$2"
  parent_dir="$(dirname "$theme_dir")"
  stage="$(mktemp -d "$parent_dir/.nextora-deploy.XXXXXX")"
  trap 'rm -f "$archive"; rm -rf "$stage"' EXIT
  unzip -q "$archive" -d "$stage"
  test -f "$stage/nextora/style.css"
  test -f "$stage/nextora/functions.php"
  backup=""
  if [ -e "$theme_dir" ] || [ -L "$theme_dir" ]; then
    backup_root="$(dirname "$(dirname "$(dirname "$parent_dir")")")/.theme-deploy-backups"
    mkdir -p "$backup_root"
    chmod 700 "$backup_root"
    backup="$backup_root/nextora-$(date +%Y%m%d-%H%M%S)-$$"
    mv "$theme_dir" "$backup"
    echo "▶ Previous theme saved to $backup"
  fi
  if ! mv "$stage/nextora" "$theme_dir"; then
    if [ -n "$backup" ]; then mv "$backup" "$theme_dir"; fi
    echo "✗ Install failed; previous theme restored"
    exit 1
  fi
EOF

echo "✓ [$ENV_LABEL] Deployed to $VPS_HOST:$THEME_DIR"

if [ -n "${SLACK_API_TOKEN:-}" ]; then
  MESSAGE="Theme \`nextora\` [${ENV_LABEL}] deployed to \`$VPS_HOST\` → \`$THEME_DIR\`"
  echo "▶ [$ENV_LABEL] Sending notification..."
  curl --fail -sS --connect-timeout 10 --max-time 20 -o /dev/null -X POST https://post-message-cms.beplus-agency.cloud/api/v1/messages \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer ${SLACK_API_TOKEN}" \
    -d "{\"text\": \"${MESSAGE}\", \"branch\": \"alert-beplus-services-noti\"}" \
    && echo "" || echo "  ([$ENV_LABEL] notification skipped — curl failed)"
fi
