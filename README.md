# Maxence Tournaud, portfolio

Multi-page portfolio (React + Vite + React Router) with a small Express API
serving live server metrics. Designed to be self-hosted in Docker behind an
Nginx reverse proxy.

## Pages

- `/` Home: hero, skill domains, selected projects, journey, contact
- `/projects` All projects, filterable by technology
- `/homelab` Live server stats, hosted services, topology, roadmap

## Features

- Bold design with XXL display type (Space Grotesk) and one vivid accent
- Light/dark theme: automatic from Paris time (day 06:00-20:00) by default,
  manual toggle in the nav that persists in localStorage
- Typing animation, scroll-reveal, marquee strip
- Infra widget (bottom-right): live uptime / CPU / RAM from `/api/status`
- Uptime badges on projects and homelab services via `/api/uptime/:service`
- Footer "self-hosted" badge opening a stack modal
- `sudo` easter egg: type it anywhere outside a form field

## Local development

```bash
npm install
npm run api    # terminal 1: Express API on :3000
npm run dev    # terminal 2: Vite dev server on :5173 (proxies /api to :3000)
```

Open http://localhost:5173.

## Production with Docker

```bash
docker compose up -d --build
```

The site is served on port **8088** (mapped to 3000 in the container, change
it in `docker-compose.yml`). The same Express process serves the static build
and the API, with an SPA fallback so `/projects` and `/homelab` work on
direct load.

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

`api/server.js` already returns real metrics using the Node `os` module:

- `uptime`: `os.uptime()` formatted as `12d 4h 32m`
- `cpu`: sampled by diffing `os.cpus()` tick counters over 200 ms
- `ram`: `(totalmem - freemem) / totalmem`

Inside a Linux container these come from the host kernel, so the values are
genuine for your server. For richer metrics (disk, temperatures), two options:

1. **Node**: add [`systeminformation`](https://www.npmjs.com/package/systeminformation)
   and replace the handlers in `api/server.js`.
2. **Python/FastAPI**: equivalent endpoint with `psutil`:

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
(`homelab`, `vpn`, `genshinguess`, `games`) to a `{ host, port }` to TCP-ping.
Keys match the `service` fields in `src/data/content.js`.

## Content

All text content lives in **`src/data/content.js`**. Remaining placeholders
and verification notes are listed in **`CONTENT.md`**.
