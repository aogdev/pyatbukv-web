## Команды (1 раз)

### A) webroot для certbot
```bash
sudo mkdir -p /var/www/letsencrypt
sudo chown -R www-data:www-data /var/www/letsencrypt
```

### B) Включить сайты
```bash
sudo ln -sf /etc/nginx/sites-available/pyatbukv.ru /etc/nginx/sites-enabled/pyatbukv.ru
sudo ln -sf /etc/nginx/sites-available/пятьбукв.рф /etc/nginx/sites-enabled/пятьбукв.рф
```

### C) Проверка + reload
```bash
sudo nginx -t
sudo systemctl reload nginx
```

### D) Выпустить сертификат для пятьбукв.рф
```bash
sudo certbot certonly --webroot \
  -w /var/www/letsencrypt \
  -d пятьбукв.рф -d www.пятьбукв.рф
```

### E) И снова
```bash
sudo nginx -t
sudo systemctl reload nginx
```
