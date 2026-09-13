# Deploy CommerceForce product website to www.commerceforce.uk on 187.77.101.178

## Context

The repo contains a single, already-built static site (`commerceforce-website.html`, ~329KB — a Vite/React build with all JS/CSS inlined, no build step needed, no backend calls). The site is hosted on a VPS at `187.77.101.178`, which already runs other projects, and is reachable at `www.commerceforce.uk` over HTTPS.

Ground truth confirmed on the VPS (via read-only checks before making changes):

- **SSH access**: `root@187.77.101.178` using the default key `~/.ssh/id_ed25519` (no special config needed). Note: the local SSH config has an alias `commerceforce-deploy` → `191.215.38.69` — that is a **different, unrelated server** and must not be used for this task.
- **OS**: Ubuntu 24.04.4 LTS. 86G disk free.
- **What's already running**: three unrelated projects as Docker containers, each exposed directly on a raw host port (`3000`, `3001`, `8000`, `8077`, plus a Hostinger agent on `32768`). There was no nginx, no reverse proxy, no certbot, and no `/var/www` on this box at all — every project was just a bare port, with no domain attached to any of them.
- **Firewall (ufw)**: only allowed `22`, `3000`, `3001`, `3002`, `3003`, `8000`, `8001`, `8077` — ports `80`/`443` were not open.
- More domains/subdomains will be needed for the other projects on this VPS eventually — this was the first domain-based site on the box.

**Why this approach**: since domain-based routing didn't exist yet on this VPS and more domains are expected later, nginx is installed directly on the host as a proper reverse-proxy/static-file layer (one server block per domain), rather than exposing the new site on yet another raw port. This establishes the pattern to reuse for future projects, and lets certbot manage per-domain TLS certs cleanly. The existing three containers are left untouched — they keep working exactly as before on their current ports.

## Steps

0. **Save this plan into the project** at `docs/deployment-plan.md`.

1. **Upload the site** — `scp` the local file to the server:
   `C:\Users\Admin\Projects\CommerceforceProductWebsite\commerceforce-website.html` → `/var/www/commerceforce-website/index.html`.

2. **Install nginx + certbot** on the VPS via `apt`:
   `apt update && apt install -y nginx certbot python3-certbot-nginx`

3. **Open the firewall** for web traffic: `ufw allow 80/tcp` and `ufw allow 443/tcp` (leave all existing rules for the other containers untouched).

4. **Create an nginx server block** at `/etc/nginx/sites-available/commerceforce-website.conf` for `www.commerceforce.uk`, `root /var/www/commerceforce-website;`, `index index.html;`, listening on port 80. Symlinked into `/etc/nginx/sites-enabled/`.

5. **DNS (user action)** — add at the registrar/DNS provider for `commerceforce.uk`:
   `Type: A, Host: www, Value: 187.77.101.178, TTL: default`

6. **Issue a TLS certificate** once DNS resolves correctly:
   `certbot --nginx -d www.commerceforce.uk` — this edits the nginx config to add the 443 server block and HTTP→HTTPS redirect automatically.

## Verification

- `nginx -t` succeeds and `systemctl status nginx` is active before and after changes.
- `curl -I https://www.commerceforce.uk` returns `200` with the site's content once DNS + cert are in place.
- Existing three containers remain reachable on their original ports (e.g. `curl -I http://187.77.101.178:3000`) — confirms nothing else on the box was disturbed.
