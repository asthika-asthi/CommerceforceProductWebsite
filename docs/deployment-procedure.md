# How the site was deployed to www.commerceforce.uk

This documents exactly what was done to put `commerceforce-website.html` live on the VPS at `187.77.101.178`, step by step, with the actual commands run. See [deployment-plan.md](./deployment-plan.md) for the reasoning behind the approach.

## 0. Confirmed SSH access

```bash
ssh -i ~/.ssh/id_ed25519 root@187.77.101.178
```

The server's default key (`~/.ssh/id_ed25519`) works directly — no special SSH config entry was needed. (Note: this machine also has an SSH config alias `commerceforce-deploy` pointing at a *different* server, `191.215.38.69` — that one is unrelated to this project and wasn't used.)

## 1. Inspected the server before changing anything

Before touching anything, the current state was checked read-only:

```bash
hostname
docker ps
which nginx; nginx -v
ls /etc/nginx/sites-enabled/ /etc/nginx/sites-available/
which certbot
ss -tlnp
ufw status
cat /etc/os-release
df -h /
ls -la /var/www/
```

Findings:
- Ubuntu 24.04.4 LTS, 86G free disk.
- Three other projects already running as Docker containers, each bound directly to a raw host port: `3000`, `3001`, `8000`, `8077` (plus a Hostinger monitoring agent on `32768`).
- No nginx, no certbot, and no `/var/www` existed yet — nothing was proxying by domain, every project was just a bare IP:port.
- `ufw` only allowed `22, 3000, 3001, 3002, 3003, 8000, 8001, 8077` — `80`/`443` were closed.

This confirmed it was safe to install nginx fresh without conflicting with anything already running.

## 2. Uploaded the site

```bash
ssh -i ~/.ssh/id_ed25519 root@187.77.101.178 'mkdir -p /var/www/commerceforce-website'

scp -i ~/.ssh/id_ed25519 \
  "commerceforce-website.html" \
  root@187.77.101.178:/var/www/commerceforce-website/index.html
```

Verified the upload landed intact by comparing byte size (`329211` bytes) on both sides.

## 3. Installed nginx and certbot

```bash
apt-get update
apt-get install -y nginx certbot python3-certbot-nginx
```

`nginx` was enabled and started automatically as part of the package install. `certbot` (Let's Encrypt client) and its nginx plugin were installed for the TLS step later. This did not touch or restart the existing Docker containers — apt's post-install check confirmed "No containers need to be restarted."

## 4. Opened the firewall for web traffic

```bash
ufw allow 80/tcp
ufw allow 443/tcp
```

All pre-existing rules (ports for the other three projects, plus SSH on 22) were left untouched — only `80` and `443` were added.

## 5. Created an nginx site for www.commerceforce.uk

File: `/etc/nginx/sites-available/commerceforce-website.conf`

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name www.commerceforce.uk;

    root /var/www/commerceforce-website;
    index index.html;

    location / {
        try_files $uri $uri/ =404;
    }
}
```

Enabled it and removed nginx's default placeholder site:

```bash
ln -sf /etc/nginx/sites-available/commerceforce-website.conf /etc/nginx/sites-enabled/commerceforce-website.conf
rm -f /etc/nginx/sites-enabled/default
nginx -t          # validated the config syntax
systemctl enable nginx --now
systemctl reload nginx
```

## 6. Verified nothing broke

```bash
# Simulates a request from www.commerceforce.uk before DNS exists yet
curl -s -o /dev/null -w "%{http_code}\n" -H "Host: www.commerceforce.uk" http://localhost/
# -> 200

# Confirmed the other three projects still respond on their original ports
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3000/   # -> 200
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:3001/   # -> 200
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8077/   # -> 200
```

(Port `8000` returned `404` on `/`, same as before nginx was installed — that project just has no route at the bare root path; unrelated to this deployment.)

## 7. Remaining steps (need the domain owner)

These require access to the domain registrar/DNS provider for `commerceforce.uk`, which wasn't available during this session:

1. **Add a DNS record**: `A` record, host `www`, value `187.77.101.178`.
2. **Wait for DNS to propagate**, verify with `dig www.commerceforce.uk` or `nslookup www.commerceforce.uk` — it should return `187.77.101.178`.
3. **Issue the TLS certificate**, run on the server:
   ```bash
   certbot --nginx -d www.commerceforce.uk
   ```
   This edits the nginx config automatically to add the HTTPS (443) server block and an HTTP→HTTPS redirect.
4. **Final check**: `curl -I https://www.commerceforce.uk` should return `200`.

Until step 1–2 are done, the site is only reachable by IP with a manual `Host` header (as used for testing above) — a plain browser visit to `www.commerceforce.uk` won't resolve yet.
