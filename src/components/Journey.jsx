import { journey } from "../data/content.js";

export default function Journey() {
  return (
    <section id="journey" className="section">
      <h2 className="section-title reveal">Journey</h2>
      <div className="timeline">
        {journey.map((item) => (
          <div key={item.title} className="timeline-item reveal">
            <div className="timeline-marker">
              <span className="timeline-dot" aria-hidden="true" />
            </div>
            <div className="timeline-content">
              <span className="timeline-period mono">{item.period}</span>
              <span className={`timeline-type type-${item.type}`}>
                {item.type === "work" ? "Work" : "Education"}
              </span>
              <h3>{item.title}</h3>
              <p className="timeline-org">{item.org}</p>
              <ul>
                {item.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
