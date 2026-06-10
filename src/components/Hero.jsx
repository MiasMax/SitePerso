import { identity } from "../data/content.js";
import useTyping from "../hooks/useTyping.js";

export default function Hero() {
  const typed = useTyping(identity.typingRoles);

  return (
    <section id="top" className="hero">
      <div className="hero-inner">
        <p className="hero-hello">Hi, I'm</p>
        <h1 className="hero-name">{identity.name}</h1>
        <p className="hero-subtitle">{identity.subtitle}</p>
        <p className="hero-typing" aria-label={identity.typingRoles.join(", ")}>
          <span className="mono">{typed}</span>
          <span className="cursor" aria-hidden="true">
            ▍
          </span>
        </p>
        <a href="#projects" className="btn btn-primary hero-cta">
          See my projects ↓
        </a>
      </div>
    </section>
  );
}
