#!/usr/bin/env bash
# Spin up a local test site (wp-now) for the theme in this repo.
set -euo pipefail
cd "$(dirname "$0")/.."

if [[ -f .env ]]; then set -a; source .env; set +a; fi

PORT="${PORT:-8881}"; PHP="${PHP:-8.2}"; WP="${WP:-latest}"

# npm cache containing root-owned files causes npx EACCES errors
NPM_CACHE="${npm_config_cache:-$HOME/.npm}"
if [[ -d "$NPM_CACHE" ]] && find "$NPM_CACHE" -user root -print -quit 2>/dev/null | grep -q .; then
  echo "⚠  npm cache ($NPM_CACHE) contains root-owned files — npx will fail with EACCES."
  read -rp "   Fix permissions now with sudo? [y/N] " ans
  if [[ "$ans" =~ ^[Yy]$ ]]; then
    sudo chown -R "$(id -u):$(id -g)" "$NPM_CACHE"
    echo "✓ Permissions fixed."
  else
    echo "   Skipped. Run manually:  sudo chown -R \$(id -u):\$(id -g) \"$NPM_CACHE\""
    exit 1
  fi
fi

STYLE="$(grep -rls "Theme Name:" . --include=style.css | head -n1 || true)"
[[ -z "$STYLE" ]] && { echo "No style.css with 'Theme Name:' found."; exit 1; }
cd "$(dirname "$STYLE")"

echo "→ http://localhost:$PORT  (admin / password)"
exec npx --yes @wp-now/wp-now start --php="$PHP" --wp="$WP" --port="$PORT" "$@"