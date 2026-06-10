import { useEffect, useState } from "react";

/**
 * Typewriter effect cycling through a list of phrases:
 * type → pause → erase → next phrase.
 */
export default function useTyping(
  phrases,
  { typeMs = 70, eraseMs = 40, pauseMs = 1800 } = {}
) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [erasing, setErasing] = useState(false);

  useEffect(() => {
    const phrase = phrases[phraseIndex];
    let timeout;

    if (!erasing && text === phrase) {
      timeout = setTimeout(() => setErasing(true), pauseMs);
    } else if (erasing && text === "") {
      setErasing(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    } else {
      timeout = setTimeout(
        () => {
          setText(
            erasing
              ? phrase.slice(0, text.length - 1)
              : phrase.slice(0, text.length + 1)
          );
        },
        erasing ? eraseMs : typeMs
      );
    }

    return () => clearTimeout(timeout);
  }, [text, erasing, phraseIndex, phrases, typeMs, eraseMs, pauseMs]);

  return text;
}
