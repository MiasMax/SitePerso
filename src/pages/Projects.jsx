import { useMemo, useState } from "react";
import { projects } from "../data/content.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  const [filter, setFilter] = useState(null);

  // Unique tag list, ordered by how often each tag appears.
  const tags = useMemo(() => {
    const counts = new Map();
    projects.forEach((p) =>
      p.tags.forEach((t) => counts.set(t, (counts.get(t) || 0) + 1))
    );
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([tag]) => tag);
  }, []);

  const visible = filter
    ? projects.filter((p) => p.tags.includes(filter))
    : projects;

  return (
    <section className="section page-top">
      <h1 className="page-title reveal">PROJECTS</h1>
      <p className="page-sub reveal">
        Homelab experiments, school projects and work stuff I can show.
      </p>

      <div className="filter-bar reveal">
        <button
          className={`filter-chip ${filter === null ? "active" : ""}`}
          onClick={() => setFilter(null)}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`filter-chip ${filter === tag ? "active" : ""}`}
            onClick={() => setFilter(filter === tag ? null : tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="projects-grid" key={filter || "all"}>
        {visible.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
