import { about } from "../data/content.js";

export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title reveal">About</h2>

      <p className="about-bio reveal">{about.bio}</p>

      <div className="about-values">
        {about.values.map((v) => (
          <div key={v.title} className="value-card reveal">
            <h3>{v.title}</h3>
            <p>{v.text}</p>
          </div>
        ))}
      </div>

      <div className="fun-facts reveal">
        {about.funFacts.map((f) => (
          <span key={f.text} className="fun-fact">
            <span aria-hidden="true">{f.icon}</span> {f.text}
          </span>
        ))}
      </div>
    </section>
  );
}
