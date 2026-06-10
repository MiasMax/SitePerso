import { Link } from "react-router-dom";
import {
  identity,
  about,
  skillDomains,
  projects,
  journey,
  contact,
} from "../data/content.js";
import useTyping from "../hooks/useTyping.js";
import ProjectCard from "../components/ProjectCard.jsx";

function Hero() {
  const typed = useTyping(identity.typingRoles);

  return (
    <section className="hero">
      <div className="hero-inner">
        <p className="hero-kicker mono">
          {identity.location} · {new Date().getFullYear()}
        </p>
        <h1 className="hero-name">
          {identity.firstName}
          <br />
          <span className="hero-lastname">{identity.lastName}</span>
        </h1>
        <p className="hero-typing mono">
          &gt; {typed}
          <span className="cursor">▍</span>
        </p>
        <div className="hero-ctas">
          <Link to="/projects" className="btn btn-primary">
            Projects
          </Link>
          <Link to="/homelab" className="btn btn-outline">
            My homelab
          </Link>
          <a href="/cv.pdf" className="btn btn-outline" download="CV_Maxence_Tournaud.pdf">
            Download CV ↓
          </a>
        </div>
      </div>
    </section>
  );
}

/** Full-width scrolling strip, pure CSS animation. */
function Marquee() {
  const items = Array(8).fill(identity.tagline);
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i}>{t} · </span>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <section className="section">
      <h2 className="section-title reveal">
        <span className="title-num mono">01</span> Who
      </h2>
      <p className="about-intro reveal">{about.intro}</p>
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

function Skills() {
  return (
    <section className="section">
      <h2 className="section-title reveal">
        <span className="title-num mono">02</span> What I do
      </h2>
      <div className="domain-grid">
        {skillDomains.map((d) => (
          <div key={d.title} className="domain-card reveal">
            <span className="domain-num mono">{d.num}</span>
            <h3>{d.title}</h3>
            <p>{d.text}</p>
            <div className="domain-stack mono">{d.stack.join(" · ")}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  return (
    <section className="section">
      <h2 className="section-title reveal">
        <span className="title-num mono">03</span> Selected work
      </h2>
      <div className="projects-grid">
        {featured.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
      <div className="section-more reveal">
        <Link to="/projects" className="btn btn-outline">
          All projects →
        </Link>
      </div>
    </section>
  );
}

function Journey() {
  return (
    <section className="section">
      <h2 className="section-title reveal">
        <span className="title-num mono">04</span> Journey
      </h2>
      <div className="journey-list">
        {journey.map((item) => (
          <div key={item.title} className="journey-row reveal">
            <span className="journey-period mono">{item.period}</span>
            <div className="journey-body">
              <h3>
                {item.title}
                <span className={`journey-type type-${item.type}`}>
                  {item.type === "work" ? "work" : "school"}
                </span>
              </h3>
              <p className="journey-org">{item.org}</p>
              <p className="journey-text">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  const channels = [
    {
      label: "GitHub",
      value: "@MiasMax",
      href: contact.github,
      arrow: "↗",
      external: true,
    },
    {
      label: "LinkedIn",
      value: "Maxence Tournaud",
      href: contact.linkedin,
      arrow: "↗",
      external: true,
    },
    {
      label: "Email",
      value: contact.email,
      href: `mailto:${contact.email}`,
      arrow: "→",
    },
    {
      label: "CV",
      value: "PDF, 2 pages",
      href: "/cv.pdf",
      arrow: "↓",
      download: "CV_Maxence_Tournaud.pdf",
    },
  ];

  return (
    <section className="section" id="contact">
      <h2 className="section-title reveal">
        <span className="title-num mono">05</span> Contact
      </h2>
      <p className="contact-pitch reveal">
        Apprenticeship, homelab talk or just saying hi. Pick a channel:
      </p>
      <div className="contact-list">
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            className="contact-row reveal"
            target={c.external ? "_blank" : undefined}
            rel={c.external ? "noreferrer" : undefined}
            download={c.download}
          >
            <span className="contact-label mono">{c.label}</span>
            <span className="contact-value">{c.value}</span>
            <span className="contact-arrow" aria-hidden="true">
              {c.arrow}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <FeaturedProjects />
      <Journey />
      <Contact />
    </>
  );
}
