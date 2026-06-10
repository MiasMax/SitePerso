import { useEffect, useState } from "react";
import { homelab } from "../data/content.js";
import { UptimeBadge } from "../components/ProjectCard.jsx";

const POLL_MS = 30_000;

/** Big live stats panel, same /api/status source as the corner widget. */
function LiveStats() {
  const [status, setStatus] = useState(null);
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

  const cells = online && status
    ? [
        { label: "STATUS", value: "online", live: true },
        { label: "UPTIME", value: status.uptime },
        { label: "CPU", value: status.cpu },
        { label: "RAM", value: status.ram },
      ]
    : [
        { label: "STATUS", value: "unreachable" },
        { label: "UPTIME", value: "--" },
        { label: "CPU", value: "--" },
        { label: "RAM", value: "--" },
      ];

  return (
    <div className="stats-panel reveal">
      {cells.map((c) => (
        <div key={c.label} className="stat-cell">
          <span className="stat-label mono">{c.label}</span>
          <span className="stat-value mono">
            {c.live && <span className="infra-dot" />} {c.value}
          </span>
        </div>
      ))}
    </div>
  );
}

export default function Homelab() {
  return (
    <section className="section page-top">
      <h1 className="page-title reveal">HOMELAB</h1>
      <p className="page-sub reveal">{homelab.intro}</p>

      <LiveStats />

      <div className="homelab-grid">
        <div className="reveal">
          <h2 className="block-title">The box</h2>
          <dl className="hardware-list">
            {homelab.hardware.map((h) => (
              <div key={h.label} className="hardware-row">
                <dt className="mono">{h.label}</dt>
                <dd>{h.value}</dd>
              </div>
            ))}
          </dl>

          <h2 className="block-title">Next on the list</h2>
          <ul className="roadmap-list">
            {homelab.roadmap.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>

        <div className="reveal">
          <h2 className="block-title">Topology</h2>
          <pre className="diagram mono">{homelab.diagram}</pre>
        </div>
      </div>

      <h2 className="block-title reveal">Running services</h2>
      <div className="services-grid">
        {homelab.services.map((s) => (
          <div key={s.name} className="service-card reveal">
            <div className="service-head">
              <h3>{s.name}</h3>
              <UptimeBadge service={s.service} />
            </div>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
