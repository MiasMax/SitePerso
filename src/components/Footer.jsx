import { useEffect, useState } from "react";
import { footer } from "../data/content.js";

/** Modal revealing the self-hosting stack, opened from the footer badge. */
function StackModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h3>Under the hood</h3>
        <p>This site runs at home, on my own hardware:</p>
        <ul className="stack-list mono">
          {footer.stack.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <button className="btn btn-ghost" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default function Footer() {
  const [open, setOpen] = useState(false);
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <button className="selfhosted-badge" onClick={() => setOpen(true)}>
        Self-hosted with <span className="heart">♥</span> on my own server
      </button>
      <p className="footer-copy">© {year} Maxence</p>
      {open && <StackModal onClose={() => setOpen(false)} />}
    </footer>
  );
}
