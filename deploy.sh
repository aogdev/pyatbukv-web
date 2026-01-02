#!/usr/bin/env bash
set -euo pipefail

APP_DIR="/srv/web/pyatbukv-web"
SERVICE="web"
CONTAINER="pyatbukv-web"
LOCAL_PORT="3000"

cd "${APP_DIR}"

echo "==> Pulling info"
echo "PWD=$(pwd)"
echo "Docker: $(docker --version)"
echo "Compose: $(docker compose version)"

echo "==> Git pull"
git pull

echo "==> Build"
docker compose build --no-cache "${SERVICE}"

echo "==> Up"
docker compose up -d "${SERVICE}"

echo "==> Status"
docker ps --filter "name=${CONTAINER}" --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"

echo "==> Health (local)"
curl -sS -I "http://127.0.0.1:${LOCAL_PORT}/" | head -n 1 || true
curl -sS -I "http://127.0.0.1:${LOCAL_PORT}/privacy" | head -n 1 || true

echo "==> Done"
echo "Open: https://pyatbukv.ru/"
