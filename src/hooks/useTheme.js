import { useCallback, useEffect, useState } from "react";

const TIMEZONE = "Europe/Paris";
const DAY_START = 6;
const DAY_END = 20;
const STORAGE_KEY = "theme"; // "day" | "night"; absent = follow Paris time

function parisHour() {
  return Number(
    new Intl.DateTimeFormat("en-GB", {
      timeZone: TIMEZONE,
      hour: "numeric",
      hour12: false,
    }).format(new Date())
  );
}

function autoTheme() {
  const h = parisHour();
  return h >= DAY_START && h < DAY_END ? "day" : "night";
}

/**
 * Theme = manual override (localStorage) if the visitor ever toggled,
 * otherwise automatic day/night based on Paris time (06:00-20:00 = day).
 */
export default function useTheme() {
  const [override, setOverride] = useState(
    () => localStorage.getItem(STORAGE_KEY) || null
  );
  const [auto, setAuto] = useState(autoTheme);

  const theme = override || auto;

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  // Keep the auto value fresh so the 06:00 / 20:00 switch happens live.
  useEffect(() => {
    const id = setInterval(() => setAuto(autoTheme()), 60_000);
    return () => clearInterval(id);
  }, []);

  const toggle = useCallback(() => {
    const next = theme === "day" ? "night" : "day";
    localStorage.setItem(STORAGE_KEY, next);
    setOverride(next);
  }, [theme]);

  return { theme, toggle };
}
