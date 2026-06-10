# CONTENT.md, remaining placeholders

Most content is now filled in `src/data/content.js`. What's left:

## Placeholders to fill

| Placeholder | Where | What's needed |
|---|---|---|
| `[GITHUB_URL]` | each project's `github` field | Per-project repo URLs on github.com/MiasMax. Buttons stay hidden until filled. |

## To verify

- The CV at `public/cv.pdf` (compiled from `CV_latex_maxence.tex`) contains
  your **phone number and home town**. It's downloadable by anyone visiting
  the site, and the .tex source is in the (future public?) GitHub repo.
  Remove the phone line from the .tex if that bothers you.
- The CV lists GitHub as `MaxenceTournaud` but the site links to `MiasMax`.
  Pick one and align both.
- Homelab hardware: board and RAM are in, add CPU/storage if you want.
- **Game server statuses** (`gameServers` in `content.js`): I guessed which
  are always-on vs on-demand. Currently live = Minecraft Vanilla + Terraria;
  on-demand = Empyrion, Palworld, Minecraft Modded, Hytale. Adjust the
  `status` field per game ("live" or "on-demand").
- **Hytale**: included as you asked, marked on-demand. Double-check the wording
  you want since the game isn't publicly released.

## Functional TODOs

- **Uptime badges**: the `SERVICES` map in `api/server.js` is empty; add
  `host`/`port` entries for `homelab`, `vpn`, `genshinguess`, `games` to turn
  the gray "unknown" badges green/red.
- **GitHub push**: remote is `git@github.com:MiasMax/SitePerso.git` but your
  SSH key isn't registered on that account. Add `~/.ssh/id_ed25519.pub` at
  https://github.com/settings/keys then `git push -u origin main`.
- **CV regeneration**: after editing `CV_latex_maxence.tex`, run
  `pdflatex -output-directory=public CV_latex_maxence.tex` twice and rename
  the PDF to `public/cv.pdf`.
