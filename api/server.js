/**
 * Portfolio API — serves real server metrics + optional per-service uptime
 * checks, and (in production) the built front-end from ../dist.
 *
 * Endpoints:
 *   GET /api/status            → { uptime, cpu, ram, status }
 *   GET /api/uptime/:service   → { status: "up"|"down"|"unknown", latency }
 */
import express from "express";
import os from "node:os";
import net from "node:net";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;

/* ------------------------------------------------------------------
 * Uptime checks — map a service key (used on project cards) to a
 * host:port to TCP-ping. Fill these in with your real services, e.g.:
 *   homelab:      { host: "192.168.0.51", port: 9443 },  // Portainer
 *   genshinguess: { host: "192.168.0.51", port: 8080 },
 * Unconfigured services return { status: "unknown" }.
 * ------------------------------------------------------------------ */
const SERVICES = {
  // homelab:      { host: "127.0.0.1", port: 9443 },  // Portainer
  // vpn:          { host: "127.0.0.1", port: 51820 }, // WireGuard
  // genshinguess: { host: "127.0.0.1", port: 80 },    // Apache
  // cockpit:      { host: "127.0.0.1", port: 9090 },  // Cockpit web console
};

/* ---------- /api/status — real metrics via the Node os module ---------- */

function formatUptime(seconds) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  return `${d}d ${h}h ${m}m`;
}

/**
 * CPU usage sampled over a short interval by diffing os.cpus() tick
 * counters (Node has no instantaneous CPU API).
 */
function cpuSnapshot() {
  return os.cpus().reduce(
    (acc, cpu) => {
      const total = Object.values(cpu.times).reduce((a, b) => a + b, 0);
      return { idle: acc.idle + cpu.times.idle, total: acc.total + total };
    },
    { idle: 0, total: 0 }
  );
}

function cpuUsagePercent(sampleMs = 200) {
  return new Promise((resolve) => {
    const start = cpuSnapshot();
    setTimeout(() => {
      const end = cpuSnapshot();
      const idle = end.idle - start.idle;
      const total = end.total - start.total;
      resolve(total > 0 ? Math.round((1 - idle / total) * 100) : 0);
    }, sampleMs);
  });
}

app.get("/api/status", async (_req, res) => {
  const cpu = await cpuUsagePercent();
  const ram = Math.round(((os.totalmem() - os.freemem()) / os.totalmem()) * 100);
  res.json({
    uptime: formatUptime(os.uptime()),
    cpu: `${cpu}%`,
    ram: `${ram}%`,
    status: "online",
  });
});

/* ---------- /api/uptime/:service — TCP check with latency ---------- */

function tcpPing(host, port, timeoutMs = 2000) {
  return new Promise((resolve) => {
    const start = Date.now();
    const socket = net.createConnection({ host, port });
    socket.setTimeout(timeoutMs);

    const done = (status) => {
      socket.destroy();
      resolve({ status, latency: `${Date.now() - start}ms` });
    };

    socket.on("connect", () => done("up"));
    socket.on("timeout", () => done("down"));
    socket.on("error", () => done("down"));
  });
}

app.get("/api/uptime/:service", async (req, res) => {
  const svc = SERVICES[req.params.service];
  if (!svc) {
    return res.json({ status: "unknown", latency: null });
  }
  const result = await tcpPing(svc.host, svc.port);
  res.json(result);
});

/* ---------- Static front-end (production build) ---------- */

const distDir = path.join(__dirname, "..", "dist");
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));
  // SPA fallback — anchors are client-side, but keep deep links working.
  app.get("*", (_req, res) => res.sendFile(path.join(distDir, "index.html")));
}

app.listen(PORT, () => {
  console.log(`Portfolio server listening on http://0.0.0.0:${PORT}`);
});
