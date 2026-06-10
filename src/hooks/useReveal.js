import { useEffect } from "react";

/**
 * Scroll-reveal: every element with the .reveal class fades in with a slight
 * upward translate when it enters the viewport (see global.css).
 * Attach once at the App level; a MutationObserver is unnecessary here since
 * all sections are rendered on mount.
 */
export default function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");

    // Respect users who prefer reduced motion: show everything immediately.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.classList.add("revealed"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
