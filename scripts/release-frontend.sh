#!/usr/bin/env bash
set -euo pipefail

ENV_TARGET="${1:-}"
if [[ -z "$ENV_TARGET" ]]; then
  echo "Usage: $0 <uat|prod>" >&2
  exit 1
fi

echo "[frontend] Running release steps for env: $ENV_TARGET"

cd "$(dirname "$0")/../frontend"

echo "[frontend] Checking formatting (Prettier)..."
npm run format:check

echo "[frontend] Running ESLint..."
npm run lint

echo "[frontend] Building frontend..."
npm run build

# Ensure a changelog file exists
if [[ ! -f CHANGELOG.md ]]; then
  cat > CHANGELOG.md << 'EOF'
# Frontend Changelog

This file documents notable changes to the SIYB frontend.

EOF
  echo "[frontend] Created CHANGELOG.md (please add release notes)."
else
  echo "[frontend] CHANGELOG.md exists. Remember to add release notes."
fi

echo "[frontend] Release checks completed successfully."
