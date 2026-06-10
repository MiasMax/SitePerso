import { NavLink } from "react-router-dom";
import useTheme from "../hooks/useTheme.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/homelab", label: "Homelab" },
];

export default function Nav() {
  const { theme, toggle } = useTheme();

  return (
    <header className="nav">
      <NavLink to="/" className="nav-brand">
        MT<span className="accent">/</span>
      </NavLink>
      <nav className="nav-links">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === "/"}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {l.label}
          </NavLink>
        ))}
        <button
          className="theme-toggle"
          onClick={toggle}
          title={
            theme === "day" ? "Switch to dark mode" : "Switch to light mode"
          }
          aria-label="Toggle theme"
        >
          {theme === "day" ? "☾" : "☀"}
        </button>
      </nav>
    </header>
  );
}
