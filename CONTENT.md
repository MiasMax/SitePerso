# CONTENT.md — Remaining placeholders

Everything that could be filled from the three AI context files has been filled
directly in `src/data/content.js`. Below is what's still missing or uncertain —
edit `src/data/content.js` (and `api/server.js` for services) to complete them.

## Placeholders to fill

| Placeholder | Where | What's needed |
|---|---|---|
| `[GITHUB_URL]` | `contact.github` + each project's `github` field | Your GitHub profile URL and per-project repo URLs. None of the context files contained them. Project GitHub buttons stay hidden until filled. |
| `[LINKEDIN_URL]` | `contact.linkedin` | Your LinkedIn profile URL. |
| `[CONTACT_EMAIL]` | `contact.email` | Public contact email (only used if you decide to display it). |
| `[DOMAIN]` | `footer.stack` / `footer.domain` | Your custom domain name, shown in the footer "Under the hood" modal. |
| `[DATES]` (Suez) | `journey` — Suez Smart Solutions entry | Exact internship dates. Context files only say "before September 2024". |
| `[DATES]` + `[INSTITUTION]` (BUT) | `journey` — BUT Informatique entry | Which IUT, and which years. Context files only say you completed 2 years of a BUT Informatique. |

## To verify (filled, but inferred)

- **Skill levels** — estimated by merging the three context files (they
  disagree in places, e.g. Git "advanced" vs "level unspecified"). Adjust the
  `level` values (1–5) in `src/data/content.js` to taste.
- **Bio wording** — synthesized in English from three French draft bios.
- **CMDB project** — described as professional/in-progress (late 2025 → mid
  2026 per the Gemini export); check the wording is OK to publish publicly
  (it names your employer).
- **Genshinguess** — no URL was in the context files; add a live link or an
  uptime `service` mapping if it's still hosted.

## Functional TODOs

- **Contact form** — UI-only. Wire it to Formspree: see the TODO comment in
  `src/components/Contact.jsx`.
- **Uptime badges** — `api/server.js` has an empty `SERVICES` map; add
  `host`/`port` entries for `homelab`, `vpn`, `genshinguess` to turn the
  gray "unknown" badges green/red.
