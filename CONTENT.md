# CONTENT.md, remaining placeholders

Everything that could be filled from the AI context files is already in
`src/data/content.js`. Below is what's still missing. Edit
`src/data/content.js` (and `api/server.js` for the uptime services).

## Placeholders to fill

| Placeholder | Where | What's needed |
|---|---|---|
| `[GITHUB_URL]` | `contact.github` + each project's `github` field | GitHub profile URL and per-project repo URLs. Project GitHub buttons stay hidden until filled. |
| `[LINKEDIN_URL]` | `contact.linkedin` | LinkedIn profile URL. |
| `[CONTACT_EMAIL]` | `contact.email` | Public contact email (only used if you decide to display it). |
| `[DOMAIN]` | `footer.stack` / `footer.domain` | Custom domain, shown in the footer "Under the hood" modal. |
| `[DATES]` (Suez) | `journey`, Suez Smart Solutions entry | Exact internship dates. Context files only said "before September 2024". |
| `[DATES]` + `[INSTITUTION]` (BUT) | `journey`, BUT Informatique entry | Which IUT, and which years. |

## To verify (filled, but inferred)

- Copy was rewritten in a more direct tone; check it sounds like you.
- The CMDB project names your employer. Check that's OK to publish.
- Homelab page hardware specs are generic ("recycled desktop PC"); add real
  specs (CPU, RAM, storage) in `homelab.hardware` if you want.

## Functional TODOs

- **Contact form**: UI-only. Wire it to Formspree, see the TODO in
  `src/pages/Home.jsx`.
- **Uptime badges**: the `SERVICES` map in `api/server.js` is empty; add
  `host`/`port` entries for `homelab`, `vpn`, `genshinguess`, `games` to turn
  the gray "unknown" badges green/red.
- **GitHub push**: remote is set to `git@github.com:MiasMax/SitePerso.git`
  but your SSH key isn't registered on that account yet. Add the key from
  `~/.ssh/id_ed25519.pub` at https://github.com/settings/keys then run
  `git push -u origin main`.
