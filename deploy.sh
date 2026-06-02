#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

if [ ! -f "$SCRIPT_DIR/.env" ]; then
  echo "✗ Missing .env file"; exit 1
fi
set -a
source "$SCRIPT_DIR/.env"
set +a

SSH_KEY="${SSH_KEY/#\~/$HOME}"

if [ -z "${VPS_USER:-}" ] || [ -z "${VPS_HOST:-}" ]; then
  echo "✗ VPS_USER and VPS_HOST must be set in .env"; exit 1
fi

if [ -z "${THEME_DIR:-}" ] || [ "$THEME_DIR" = "/" ]; then
  echo "✗ THEME_DIR is not set or is unsafe in .env"; exit 1
fi
if [ "$(dirname "$THEME_DIR")" = "/" ]; then
  echo "✗ THEME_DIR parent is / — refusing to run"; exit 1
fi

echo "▶ Building..."
(cd "$SCRIPT_DIR" && npm run build && npm run build:package)

ZIP_FILE=$(ls "$SCRIPT_DIR"/nextora-v*.zip 2>/dev/null | sort -V | tail -1)
if [ -z "${ZIP_FILE:-}" ]; then
  echo "✗ No nextora-v*.zip found after build"; exit 1
fi
ZIP_NAME=$(basename "$ZIP_FILE")

echo "▶ Uploading $ZIP_NAME..."
scp -i "$SSH_KEY" -P "${VPS_PORT:-22}" "$ZIP_FILE" "$VPS_USER@$VPS_HOST:/tmp/$ZIP_NAME"

PARENT_DIR="$(dirname "$THEME_DIR")"
echo "▶ Deploying to $THEME_DIR..."
ssh -i "$SSH_KEY" -p "${VPS_PORT:-22}" "$VPS_USER@$VPS_HOST" bash -s <<EOF
  set -e
  if [ -n "${THEME_DIR:-}" ] && [ "$THEME_DIR" != "/" ]; then
    rm -rf "$THEME_DIR"
  fi
  mkdir -p "$PARENT_DIR"
  unzip -o "/tmp/$ZIP_NAME" -d "$PARENT_DIR"
  rm "/tmp/$ZIP_NAME"
EOF

echo "✓ Deployed to $VPS_HOST:$THEME_DIR"
