## NGINX

```bash
sudo nano /etc/nginx/sites-available/pyatbukv.ru
```

```text
# /etc/nginx/sites-available/pyatbukv.ru

# --- HTTP: редиректим всё на HTTPS ---
server {
    listen 80;
    listen [::]:80;
    server_name pyatbukv.ru www.pyatbukv.ru;

    # certbot обычно сам правит этот блок, но редирект безопасен
    return 301 https://pyatbukv.ru$request_uri;
}

# --- HTTPS: основной домен ---
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name pyatbukv.ru;

    # SSL (Let’s Encrypt)
    ssl_certificate     /etc/letsencrypt/live/pyatbukv.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/pyatbukv.ru/privkey.pem;
    include             /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam         /etc/letsencrypt/ssl-dhparams.pem;

    # Security headers (мягкие и безопасные)
    add_header X-Content-Type-Options nosniff always;
    add_header X-Frame-Options DENY always;
    add_header Referrer-Policy strict-origin-when-cross-origin always;
    add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;

    # Логи (по желанию)
    access_log /var/log/nginx/pyatbukv.access.log;
    error_log  /var/log/nginx/pyatbukv.error.log warn;

    # Прокси на Next.js (docker published on 127.0.0.1:3000)
    location / {
        proxy_pass http://127.0.0.1:3000;

        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;

        # для websocket/upgrade
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";

        # таймауты (чтобы не рвало долгие ответы)
        proxy_read_timeout 60s;
        proxy_connect_timeout 15s;
        proxy_send_timeout 60s;
    }
}

# --- HTTPS: www → редирект на без www ---
server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name www.pyatbukv.ru;

    ssl_certificate     /etc/letsencrypt/live/pyatbukv.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/pyatbukv.ru/privkey.pem;
    include             /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam         /etc/letsencrypt/ssl-dhparams.pem;

    return 301 https://pyatbukv.ru$request_uri;
}

```

## SSL (Let’s Encrypt)

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d pyatbukv.ru -d www.pyatbukv.ru
```

Проверка автообновления:
```bash
sudo apt ins
sudo certbot renew --dry-run
```


```bash
rsync -avz \
  --exclude node_modules \
  --exclude .next \
  --exclude .git \
  --exclude .env \
  /mnt/e/projects/pyatbukv-web/ \
  aog@89.169.21.57:/srv/web/
```