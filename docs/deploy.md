# WordPress Theme Deployment Script

## Goal

Implement a one-command local deploy script (`npm run deploy`) that builds a WordPress theme into a zip package, uploads it to a VPS over SSH, and extracts it into the theme directory. All VPS connection details live in a `.env` file (never committed).

## Context

- The source is a WordPress theme.
- A build script (`npm run build`) already exists and generates a zip file (e.g. `my-theme.zip`).
- Deployment is run manually from a developer's local machine — no CI/CD pipeline required.
- Authentication to the VPS uses an SSH private key.

## Deliverables

Create the following files:

1. `.env` — configuration (added to `.gitignore`, not committed)
2. `.env.example` — a template with placeholder values (committed)
3. `deploy.sh` — the deploy script
4. Update `.gitignore` to exclude `.env`
5. Add a `deploy` script to `package.json`

## Implementation

### 1. `.env`

Holds VPS connection info and paths. Real values, never committed.

```bash
VPS_USER=deploy
VPS_HOST=123.45.67.89
VPS_PORT=22
SSH_KEY=~/.ssh/deploy_key
THEME_DIR=/var/www/html/wp-content/themes/my-theme
ZIP=my-theme.zip
```

### 2. `.env.example`

Same keys as `.env` but with placeholder values. Committed so other developers know what to fill in.

```bash
VPS_USER=
VPS_HOST=
VPS_PORT=22
SSH_KEY=~/.ssh/your_deploy_key
THEME_DIR=/var/www/html/wp-content/themes/my-theme
ZIP=my-theme.zip
```

### 3. `.gitignore`

Ensure `.env` is excluded:

```
.env
```

### 4. `deploy.sh`

```bash
#!/usr/bin/env bash
set -euo pipefail

# Load config from .env
if [ ! -f .env ]; then
  echo "✗ Missing .env file"; exit 1
fi
set -a
source .env
set +a

# Expand ~ in SSH_KEY path to the user's home directory
SSH_KEY="${SSH_KEY/#\~/$HOME}"

# Safety guard: never run rm -rf on an empty/undefined path
if [ -z "${THEME_DIR:-}" ]; then
  echo "✗ THEME_DIR is not set in .env"; exit 1
fi

echo "▶ Building..."
npm run build

echo "▶ Uploading $ZIP..."
scp -i "$SSH_KEY" -P "$VPS_PORT" "$ZIP" "$VPS_USER@$VPS_HOST:/tmp/$ZIP"

echo "▶ Deploying to $THEME_DIR..."
ssh -i "$SSH_KEY" -p "$VPS_PORT" "$VPS_USER@$VPS_HOST" bash -s <<EOF
  set -e
  rm -rf "$THEME_DIR"
  mkdir -p "$THEME_DIR"
  unzip -o /tmp/$ZIP -d "$THEME_DIR"
  rm /tmp/$ZIP
EOF

echo "✓ Done"
```

### 5. `package.json`

Add the deploy script:

```json
{
  "scripts": {
    "deploy": "bash deploy.sh"
  }
}
```

## How It Works (Flow)

1. `npm run deploy` runs `deploy.sh`.
2. The script loads VPS config from `.env`.
3. `npm run build` generates the theme zip.
4. `scp` uploads the zip to `/tmp` on the VPS.
5. Over SSH, the remote commands wipe the existing theme directory, recreate it, extract the zip into it, then delete the temporary zip.

## Important Notes for the Implementer

- **Zip structure matters.** Verify what the zip contains with `unzip -l my-theme.zip`:
  - If theme files (`style.css`, `functions.php`, ...) are at the zip root → extract directly into `THEME_DIR` (as shown above).
  - If the zip already contains a parent folder (`my-theme/style.css`, ...) → extract into the parent of the theme directory instead: `unzip -o /tmp/$ZIP -d /var/www/html/wp-content/themes/`.

- **Heredoc variable expansion.** The heredoc uses `<<EOF` (unquoted), so `$THEME_DIR` and `$ZIP` are expanded on the **local** machine before the commands are sent to the VPS. This is intended, since the values come from the local `.env`. Any variable that should be expanded on the VPS side must be escaped as `\$`.

- **File permissions.** WordPress typically runs as `www-data`. If `VPS_USER` differs and the web server cannot read the theme files, append a chown step (requires passwordless sudo for that command):
  ```bash
  sudo chown -R www-data:www-data "$THEME_DIR"
  ```

- **`unzip` availability.** Most VPS images include it; if not, install once with `sudo apt install unzip`.

- **Clean deploy.** `rm -rf "$THEME_DIR"` before extraction ensures no stale files remain. This is fine for themes, which should not hold runtime/user data.

- **Optional confirmation prompt.** If a safety prompt before deploying is desired, add a `read -p "Deploy to $VPS_HOST? (y/N) "` check near the top.

## Optional: Reuse in CI Later

This same `deploy.sh` can later be invoked from GitHub Actions if automated deploys are wanted — the CI job would just provide the SSH key via a secret and the config via environment variables, with no need to rewrite the logic.