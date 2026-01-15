#!/usr/bin/env bash
set -euo pipefail

ENV_TARGET="${1:-}"
VERSION="${2:-}"

if [[ -z "$ENV_TARGET" || -z "$VERSION" ]]; then
  echo "Usage: $0 <uat|prod> <version>" >&2
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

echo "[release] Starting $ENV_TARGET release on branch $CURRENT_BRANCH (version $VERSION)..."

"$SCRIPT_DIR/release-frontend.sh" "$ENV_TARGET" "$VERSION"
"$SCRIPT_DIR/release-backend.sh" "$ENV_TARGET" "$VERSION"

echo "[release] Frontend and backend checks completed."

# Create tags for this release if they do not already exist
FRONTEND_TAG="frontend-v$VERSION"
BACKEND_TAG="backend-v$VERSION"

if git rev-parse -q --verify "refs/tags/$FRONTEND_TAG" >/dev/null; then
  echo "[release] Tag $FRONTEND_TAG already exists, not creating."
else
  git tag "$FRONTEND_TAG"
  echo "[release] Created tag $FRONTEND_TAG."
fi

if git rev-parse -q --verify "refs/tags/$BACKEND_TAG" >/dev/null; then
  echo "[release] Tag $BACKEND_TAG already exists, not creating."
else
  git tag "$BACKEND_TAG"
  echo "[release] Created tag $BACKEND_TAG."
fi

echo "[release] Release $VERSION complete. Push tags with 'git push --tags' if desired."
