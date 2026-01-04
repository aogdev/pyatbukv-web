# /etc/nginx/sites-available/pyatbukv.ru

# --- HTTP: сразу на https://пятьбукв.рф ---
server {
    listen 80;
    server_name pyatbukv.ru www.pyatbukv.ru;

    return 301 https://пятьбукв.рф$request_uri;
}

# --- HTTPS: тоже сразу на https://пятьбукв.рф ---
server {
    listen 443 ssl http2;
    server_name pyatbukv.ru www.pyatbukv.ru;

    ssl_certificate     /etc/letsencrypt/live/pyatbukv.ru/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/pyatbukv.ru/privkey.pem;
    include             /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam         /etc/letsencrypt/ssl-dhparams.pem;

    return 301 https://пятьбукв.рф$request_uri;
}
