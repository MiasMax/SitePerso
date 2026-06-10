import { useEffect, useState } from "react";
import { homelab, gameServers } from "../data/content.js";
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

/**
 * Interactive game-server panel: a grid of tiles. Click one to load its
 * details into a terminal-style readout. Live = always on, on-demand =
 * spun up on request.
 */
function GameServers() {
  const [selected, setSelected] = useState(0);
  const game = gameServers[selected];
  const liveCount = gameServers.filter((g) => g.status === "live").length;

  return (
    <div className="games-panel reveal">
      <div className="games-grid" role="tablist" aria-label="Game servers">
        {gameServers.map((g, i) => (
          <button
            key={g.name}
            role="tab"
            aria-selected={i === selected}
            className={`game-tile ${i === selected ? "active" : ""}`}
            onClick={() => setSelected(i)}
          >
            <span className="game-glyph" aria-hidden="true">
              {g.glyph}
            </span>
            <span className="game-name">{g.name}</span>
            <span className={`game-status game-${g.status}`}>
              <span className="game-dot" />
              {g.status === "live" ? "live" : "on demand"}
            </span>
          </button>
        ))}
      </div>

      <div className="game-detail mono">
        <div className="game-detail-bar">
          <span className="t-dot t-red" />
          <span className="t-dot t-yellow" />
          <span className="t-dot t-green" />
          <span className="game-detail-title">
            maxence@homelab: ~/games/{game.name.toLowerCase().replace(/\s+/g, "-")}
          </span>
        </div>
        <div className="game-detail-body">
          <p className="game-cmd">
            <span className="accent">$</span> status {game.name.toLowerCase().replace(/\s+/g, "")}
          </p>
          <p>
            <span className="game-key">name</span> {game.full}
          </p>
          <p>
            <span className="game-key">type</span> {game.genre}
          </p>
          <p>
            <span className="game-key">mode</span>{" "}
            <span className={`game-status game-${game.status}`}>
              <span className="game-dot" />
              {game.status === "live" ? "always on" : "on demand"}
            </span>
          </p>
          <p className="game-blurb">
            <span className="game-key">info</span> {game.blurb}
          </p>
          <p className="game-foot">
            <span className="accent">#</span> {gameServers.length} servers
            configured, {liveCount} always on
          </p>
        </div>
      </div>
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

      <h2 className="block-title reveal">Game servers</h2>
      <p className="page-sub reveal">
        Servers I run for friends. Click one for details. The heavy ones spin
        up on demand to spare the RAM.
      </p>
      <GameServers />
    </section>
  );
}
