# Release Process

This document describes how releases are done for this project using Git branches and the shell scripts in the `scripts/` directory.

---

## Branching Model

We use a Git‑flow–style model with these long‑lived branches:

- `develop`: default integration branch for day‑to‑day development.
- `uat`: stabilization branch used for User Acceptance Testing.
- `main`: production branch.

Short‑lived branches are:

- `feature/*`: new features or non‑urgent changes, branched from `develop`.
- `release/*`: release candidate branches prepared from `develop` for a specific version. **This is where the release script is run.**
- `hotfix/*`: urgent fixes branched from `main`.

---

## Release Scripts Overview

All release helpers live in `scripts/` and are designed to be run from the **repository root**.

### `scripts/release.sh`

This is the orchestration script you run on the `release/*` branch.

Usage:

```bash
./scripts/release.sh <version>
```

Example:

```bash
./scripts/release.sh 1.2.0
```

Behavior:

- Validates you are on a `release/*` branch.
- Ensures the working tree is **clean** (no uncommitted changes).
- Runs:
  - `scripts/release-frontend.sh <version>`
  - `scripts/release-backend.sh <version>`
- Creates (if missing) Git tags:
  - `frontend-v<version>`
  - `backend-v<version>`
- Prints next steps as a reminder.

### `scripts/release-frontend.sh`

Behavior (called via `release.sh`):

- Runs Prettier format check, ESLint, and Vite build.
- Generates changelog entries from commits touching `frontend/` since the last `frontend-v*` tag.
- Prepends a new section to `frontend/CHANGELOG.md`.

### `scripts/release-backend.sh`

Behavior (called via `release.sh`):

- Runs Django system check and tests (requires `.venv/` at repo root).
- Generates changelog entries from commits touching `backend/` since the last `backend-v*` tag.
- Prepends a new section to `backend/CHANGELOG.md`.

---

## Versioning Conventions

- Use **Semantic Versioning**: `MAJOR.MINOR.PATCH` (e.g. `1.2.3`).
- The version is used to label changelog sections and name Git tags.
- The scripts do **not** automatically bump `package.json` or Python metadata — keep those in sync manually if needed.

---

## Standard Release Flow

### 1. Merge features into `develop`

- Branch from `develop` (e.g. `feature/my-feature`).
- Open a PR into `develop` and merge once CI passes.

### 2. Create a release branch from `develop`

```bash
git checkout develop
git pull
git checkout -b release/1.2.0
git push -u origin release/1.2.0
```

### 3. Run the release script

From the **repo root** on the `release/1.2.0` branch:

```bash
./scripts/release.sh 1.2.0
```

This will:

- Run all checks (lint, format, build, Django tests).
- Generate changelogs from commit history since the last tag.
- Create tags `frontend-v1.2.0` and `backend-v1.2.0`.

### 4. Commit changelogs and push

```bash
cd frontend && npm run format && cd ..
git add backend/CHANGELOG.md frontend/CHANGELOG.md
git commit -m "chore: release 1.2.0 - update changelogs"
git push origin release/1.2.0 --tags
```

### 5. Promote through environments via PRs

The changelog travels with the branch as it merges up:

```text
release/1.2.0 → develop → uat → main
```

- PR `release/1.2.0` → `develop`
- PR `develop` → `uat`
- PR `uat` → `main` (after UAT sign-off)

No need to re-run the release script on `uat` or `main` — the changelog and tags are already in place.

---

## Hotfix Flow

For urgent production fixes that cannot wait for the normal cycle:

### 1. Create a hotfix branch from `main`

```bash
git checkout main && git pull
git checkout -b hotfix/1.2.1
```

### 2. Implement and test the fix

Make minimal, focused changes and run relevant tests locally.

### 3. Run the release script

The hotfix branch also follows the `release/*` pattern — but since it's named `hotfix/*`, you'll need to run from the branch directly. Alternatively rename it `release/1.2.1` or adjust as needed.

### 4. Merge back

- PR `hotfix/1.2.1` → `main`
- PR `hotfix/1.2.1` → `develop` (to keep develop in sync)

---

## Guidelines and Conventions

- **Branch naming**: `feature/<desc>`, `release/x.y.z`, `hotfix/x.y.z`
- **Changelogs**: `frontend/CHANGELOG.md` and `backend/CHANGELOG.md` — generated from Git commit messages; write clear subjects.
- **Tags**: `frontend-v<version>` and `backend-v<version>` — created on the release branch, pushed with `--tags`.
- **Direct pushes** to `develop`, `uat`, and `main` should be restricted; use PRs.

---

## Quick Summary

```text
feature/* → develop → release/x.y.z (run ./scripts/release.sh x.y.z)
                          ↓
                       develop → uat → main
```
