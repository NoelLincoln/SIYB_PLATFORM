# Backend Dockerfile
FROM python:3.12-slim AS base

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    PIP_NO_CACHE_DIR=1

WORKDIR /app

# System deps (PostgreSQL client libs, build tools)
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
       build-essential \
       libpq-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Python dependencies
COPY backend/requirements.txt ./requirements.txt
RUN pip install --upgrade pip \
    && pip install -r requirements.txt

# Copy project
COPY backend/ .

# Collect static files (safe if no static configured)
RUN python manage.py collectstatic --noinput || true

EXPOSE 8000

# Default command (override in production if needed)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
