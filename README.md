# Maxence — Portfolio

Single-page portfolio (React + Vite) with a small Express API serving live
server metrics. Designed to be self-hosted in Docker behind an Nginx reverse
proxy.

## Features

- Minimalist light design with a **day/night background shift** driven by
  Europe/Paris time (warm off-white 06:00–20:00, near-black otherwise)
- Typing animation, scroll-reveal sections, anchor navigation
- **Infra widget** (bottom-right): live uptime / CPU / RAM from `/api/status`
- **Uptime badges** on project cards via `/api/uptime/:service`
- Footer "self-hosted" badge → stack modal
- `sudo` easter egg — type it anywhere outside a form field

## Local development

```bash
npm install
npm run api    # terminal 1 — Express API on :3000
npm run dev    # terminal 2 — Vite dev server on :5173 (proxies /api to :3000)
```

Open http://localhost:5173.

## Production with Docker

```bash
docker compose up -d --build
```

The site is served on port **8088** (mapped to 3000 in the container — change
it in `docker-compose.yml`). The same Express process serves both the static
build and the API.

### Nginx reverse proxy example

```nginx
server {
    server_name yourdomain.example;

    location / {
        proxy_pass http://127.0.0.1:8088;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

Then add HTTPS with certbot: `certbot --nginx -d yourdomain.example`.

## Wiring `/api/status` to real metrics

`api/server.js` already returns **real metrics** using the Node `os` module:

- `uptime` — `os.uptime()` formatted as `12d 4h 32m`
- `cpu` — sampled by diffing `os.cpus()` tick counters over 200 ms
- `ram` — `(totalmem - freemem) / totalmem`

⚠️ **Inside a container these reflect the container/host kernel** — on Linux,
`os.uptime()` and memory figures come from the host kernel, so the values are
genuine for your server. If you ever want richer metrics (disk, temperatures,
per-service stats), two options:

1. **Node**: add [`systeminformation`](https://www.npmjs.com/package/systeminformation)
   and replace the handlers in `api/server.js`.
2. **Python/FastAPI**: equivalent stub with `psutil`:

   ```python
   import psutil, time
   from fastapi import FastAPI

   app = FastAPI()

   @app.get("/api/status")
   def status():
       up = int(time.time() - psutil.boot_time())
       return {
           "uptime": f"{up//86400}d {up%86400//3600}h {up%3600//60}m",
           "cpu": f"{psutil.cpu_percent(interval=0.2):.0f}%",
           "ram": f"{psutil.virtual_memory().percent:.0f}%",
           "status": "online",
       }
   ```

## Wiring the uptime badges

Edit the `SERVICES` map at the top of `api/server.js` and map each service key
(`homelab`, `vpn`, `genshinguess`) to a `{ host, port }` to TCP-ping. Keys
match the `service` field on project cards in `src/data/content.js`.

## Content

All text content lives in **`src/data/content.js`**. Remaining placeholders
and verification notes are listed in **`CONTENT.md`**.
