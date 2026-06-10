import { useState } from "react";
import { contact } from "../data/content.js";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire this form to Formspree —
    //   1. Create a form at https://formspree.io and get its endpoint ID
    //   2. Replace this handler with: <form action="https://formspree.io/f/YOUR_ID" method="POST">
    // For now the form is UI-only and just shows a confirmation message.
    setSent(true);
  }

  const showGithub = !contact.github.startsWith("[");
  const showLinkedin = !contact.linkedin.startsWith("[");

  return (
    <section id="contact" className="section">
      <h2 className="section-title reveal">Contact</h2>

      <div className="contact-wrap reveal">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input type="text" name="name" required autoComplete="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" required autoComplete="email" />
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
          <button type="submit" className="btn btn-primary" disabled={sent}>
            {sent ? "Thanks! (form not wired yet)" : "Send"}
          </button>
        </form>

        <div className="contact-links">
          <p>Or find me here:</p>
          <a
            href={showGithub ? contact.github : "#"}
            className="btn btn-ghost"
            target="_blank"
            rel="noreferrer"
            aria-disabled={!showGithub}
          >
            GitHub {showGithub ? "↗" : "— coming soon"}
          </a>
          <a
            href={showLinkedin ? contact.linkedin : "#"}
            className="btn btn-ghost"
            target="_blank"
            rel="noreferrer"
            aria-disabled={!showLinkedin}
          >
            LinkedIn {showLinkedin ? "↗" : "— coming soon"}
          </a>
        </div>
      </div>
    </section>
  );
}
