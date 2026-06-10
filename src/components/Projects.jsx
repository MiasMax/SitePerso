import { useEffect, useState } from "react";
import { projects } from "../data/content.js";

const UPTIME_POLL_MS = 60_000;

/**
 * Optional live uptime badge for self-hosted services.
 * Green = up, red = down, gray = unknown/unreachable.
 */
function UptimeBadge({ service }) {
  const [state, setState] = useState({ status: "unknown", latency: null });

  useEffect(() => {
    let cancelled = false;

    async function poll() {
      try {
        const res = await fetch(`/api/uptime/${service}`);
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        if (!cancelled) setState(data);
      } catch {
        if (!cancelled) setState({ status: "unknown", latency: null });
      }
    }

    poll();
    const id = setInterval(poll, UPTIME_POLL_MS);
    return () => {
      cancelled = true;
      clearInterval(id);
    };
  }, [service]);

  return (
    <span className={`uptime-badge uptime-${state.status}`}>
      <span className="uptime-dot" />
      {state.status}
      {state.latency ? ` · ${state.latency}` : ""}
    </span>
  );
}

function ProjectCard({ project }) {
  const hasGithub = project.github && !project.github.startsWith("[");

  return (
    <article className="project-card reveal">
      <div className="project-head">
        <h3>{project.title}</h3>
        <span
          className={`status-badge ${
            project.status === "Done" ? "status-done" : "status-progress"
          }`}
        >
          {project.status}
        </span>
      </div>

      <p className="project-desc">{project.description}</p>

      <div className="project-tags">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>

      <div className="project-foot">
        {/* GitHub link stays hidden until the [GITHUB_URL] placeholder is filled in content.js */}
        {hasGithub && (
          <a
            className="btn btn-ghost"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        )}
        {project.service && <UptimeBadge service={project.service} />}
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title reveal">Projects — Homelab & Personal</h2>
      <div className="projects-grid">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
