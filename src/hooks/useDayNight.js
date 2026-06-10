import { useEffect, useState } from "react";

const TIMEZONE = "Europe/Paris";
const DAY_START = 6; // 06:00
const DAY_END = 20; // 20:00

/** Current hour (0-23) in Europe/Paris, regardless of the visitor's timezone. */
function parisHour() {
  return Number(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: TIMEZONE,
      hour: "numeric",
      hour12: false,
    }).format(new Date())
  );
}

function currentTheme() {
  const h = parisHour();
  return h >= DAY_START && h < DAY_END ? "day" : "night";
}

/**
 * Day/night background shift: warm off-white between 06:00–20:00 Paris time,
 * near-black otherwise. Sets data-theme on <html>; CSS variables do the rest,
 * with a smooth transition defined in global.css.
 */
export default function useDayNight() {
  const [theme, setTheme] = useState(currentTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    // Re-check once a minute so the switch happens live at 06:00 / 20:00.
    const id = setInterval(() => setTheme(currentTheme()), 60_000);
    return () => clearInterval(id);
  }, []);

  return theme;
}
