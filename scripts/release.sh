#!/usr/bin/env bash
set -euo pipefail

ENV_TARGET="${1:-}"
if [[ -z "$ENV_TARGET" ]]; then
  echo "Usage: $0 <uat|prod>" >&2
  exit 1
fi

if [[ "$ENV_TARGET" != "uat" && "$ENV_TARGET" != "prod" ]]; then
  echo "Invalid env: $ENV_TARGET (expected 'uat' or 'prod')" >&2
  exit 1
fi

# Map env to expected branch
if [[ "$ENV_TARGET" == "uat" ]]; then
  EXPECTED_BRANCH="uat"
else
  EXPECTED_BRANCH="main"
fi

# Ensure we are in repo root
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
cd "$REPO_ROOT"

CURRENT_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
if [[ "$CURRENT_BRANCH" != "$EXPECTED_BRANCH" ]]; then
  echo "You are on branch '$CURRENT_BRANCH'. For a $ENV_TARGET release, checkout '$EXPECTED_BRANCH' first." >&2
  exit 1
fi

# Ensure working tree is clean
if [[ -n "$(git status --porcelain)" ]]; then
  echo "Working tree is not clean. Commit or stash changes before running a release." >&2
  exit 1
fi

echo "[release] Starting $ENV_TARGET release on branch $CURRENT_BRANCH..."

"$SCRIPT_DIR/release-frontend.sh" "$ENV_TARGET"
"$SCRIPT_DIR/release-backend.sh" "$ENV_TARGET"

echo "[release] Frontend and backend checks completed."
echo "[release] Now update CHANGELOGs with release notes and create a git tag if desired."
