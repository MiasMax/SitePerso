import { useEffect, useState } from "react";

const TRIGGER = "sudo";

/**
 * Easter egg: typing "sudo" anywhere on the page (outside form fields)
 * pops a terminal-style window. Dismissed with click or Escape.
 */
export default function SudoEasterEgg() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let buffer = "";

    function onKeydown(e) {
      // Ignore typing inside inputs, textareas or contenteditable elements.
      const t = e.target;
      if (
        t.tagName === "INPUT" ||
        t.tagName === "TEXTAREA" ||
        t.isContentEditable
      ) {
        return;
      }

      if (e.key === "Escape") {
        setVisible(false);
        return;
      }

      if (e.key.length !== 1) return; // skip modifiers, arrows, etc.
      buffer = (buffer + e.key.toLowerCase()).slice(-TRIGGER.length);
      if (buffer === TRIGGER) {
        setVisible(true);
        buffer = "";
      }
    }

    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, []);

  if (!visible) return null;

  return (
    <div className="terminal-overlay" onClick={() => setVisible(false)}>
      <div className="terminal mono" role="dialog" aria-label="terminal easter egg">
        <div className="terminal-bar">
          <span className="t-dot t-red" />
          <span className="t-dot t-yellow" />
          <span className="t-dot t-green" />
          <span className="terminal-title">visitor@portfolio: ~</span>
        </div>
        <pre className="terminal-body">
          {`$ sudo make me a sandwich
[sudo] password for visitor:
Sorry, user visitor is not in the sudoers file.
This incident will be reported.`}
          <span className="cursor">▍</span>
        </pre>
      </div>
    </div>
  );
}
