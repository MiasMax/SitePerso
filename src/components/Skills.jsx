import { skillGroups } from "../data/content.js";

const MAX_LEVEL = 5;

/** Subtle 5-dot level indicator inside each skill pill. */
function LevelDots({ level }) {
  return (
    <span className="level-dots" aria-label={`level ${level} of ${MAX_LEVEL}`}>
      {Array.from({ length: MAX_LEVEL }, (_, i) => (
        <span key={i} className={`dot ${i < level ? "filled" : ""}`} />
      ))}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title reveal">Skills</h2>
      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div key={group.category} className="skill-group reveal">
            <h3>{group.category}</h3>
            <div className="skill-pills">
              {group.skills.map((skill) => (
                <span key={skill.name} className="skill-pill">
                  {skill.name}
                  {skill.note && <em className="skill-note"> · {skill.note}</em>}
                  <LevelDots level={skill.level} />
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
