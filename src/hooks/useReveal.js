import { useEffect } from "react";

/**
 * Scroll-reveal: every element with the .reveal class fades in with a slight
 * upward translate when it enters the viewport (see global.css).
 * A MutationObserver picks up elements added after mount (page changes,
 * filtered lists), so this runs once at the App level.
 */
export default function useReveal() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    function arm(root) {
      const els = root.matches?.(".reveal")
        ? [root]
        : root.querySelectorAll?.(".reveal:not(.revealed)") || [];
      els.forEach((el) => {
        if (reduced) el.classList.add("revealed");
        else io.observe(el);
      });
    }

    arm(document.body);

    const mo = new MutationObserver((mutations) => {
      mutations.forEach((m) => m.addedNodes.forEach((n) => {
        if (n.nodeType === 1) arm(n);
      }));
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);
}
