import { useEffect, useState } from "react";

const POLL_MS = 30_000;

/**
 * "Powered by my own server" badge — fixed bottom-right.
 * Polls GET /api/status every 30s; falls back to an "offline" pill if the
 * API is unreachable (e.g. static-only deployments).
 */
export default function InfraWidget() {
  const [status, setStatus] = useState(null); // null = loading
  const [online, setOnline] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function poll() {
      try {
        const res = await fetch("/api/status");
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        if (!cancelled) {
          setStatus(data);
          setOnline(true);
        }
      } catch {
        if (!cancelled) setOnline(false);
      }
    }

    poll();
    const id = setInterval(poll, POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, []);

  if (!online) {
    return (
      <div className="infra-widget mono" title="Server metrics unavailable">
        <span className="infra-dot infra-dot-off" />
        server: unreachable
      </div>
    );
  }

  if (!status) return null; // first fetch in flight — render nothing yet

  return (
    <div className="infra-widget mono" title="Live metrics from my home server">
      <span className="infra-dot" />
      <span className="infra-label">my server</span>
      <span>up {status.uptime}</span>
      <span>cpu {status.cpu}</span>
      <span>ram {status.ram}</span>
    </div>
  );
}
