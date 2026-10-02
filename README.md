# Samyak Ceramics

Marketing site for **Samyak Ceramics**, a 25,000 sq. ft tile showroom in Davanagere, Karnataka. Static front-end built with React + Vite — three pages, client-side routing, and no backend.

## Stack

| Concern | Choice |
| --- | --- |
| UI library | React 19 |
| Build / dev server | Vite 6 (`@vitejs/plugin-react`) |
| Routing | react-router-dom 7 (`BrowserRouter`) |
| Styling | Hand-written CSS, one stylesheet per component/page |
| Fonts | Google Fonts (KoHo, Jura, Kaisei HarunoUmi, Kiwi Maru, Dhyana, Jacques Francois) |

No CSS framework, no UI kit, no icon library. Icons are either exported PNGs in `public/assets/` or inline SVG.

## Requirements

- **Node.js 20+** (verified on v24.12.0)
- npm 10+

## Getting Started

```bash
npm install     # dependencies are not committed
npm run dev     # dev server with HMR
```

Open <http://localhost:5173/>.

The dev server binds to `host: true`, so it is also reachable on your LAN address (`http://192.168.x.x:5173/`) — useful for previewing on a phone.

### Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start dev server on port 5173 with hot reload |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the built `dist/` locally to verify output |

## Project Structure

```
.
├── index.html                  # Vite entry, <title>, Google Fonts <link>
├── vite.config.js              # react plugin, port 5173, host true
├── public/
│   └── assets/                 # 47 static images (logos, banners, icons, catalogue covers)
├── dist/                       # build output (generated)
└── src/
    ├── main.jsx                # React root + BrowserRouter
    ├── App.jsx                 # route table
    ├── index.css               # global reset + design tokens
    ├── components/
    │   ├── Header.jsx / .css
    │   └── Footer.jsx / .css
    └── pages/
        ├── HomePage.jsx / .css
        ├── AboutPage.jsx / .css
        └── DownloadPage.jsx / .css
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home — hero, three product pillars, category sections, lookbook banner, tag ticker, FAQ accordion |
| `/about` | About — intro, "We offer", stats, vision & mission, partners, testimonials, associate brand carousel |
| `/download` | Download — catalogue filter dropdown, 2×2 catalogue grid, email subscribe banner |
| `*` | Redirects to `/` |

`BrowserRouter` is used, so **any unknown path must fall back to `index.html`** on the host. `vite preview` and most static hosts (Netlify, Vercel, Cloudflare Pages) handle this via a rewrite rule; if you deploy to a plain static server, add an SPA fallback.

## Conventions

Follow these to stay consistent with the existing code.

**One stylesheet per component/page.** Each `.jsx` imports its sibling `.css` directly. `index.css` holds only the reset and `:root` tokens — page-specific rules never go there.

**Design tokens come from `src/index.css`.** Colors, font stacks, and the global reset live in `:root` as custom properties:

```css
--bg-primary, --bg-sand-light, --bg-sand-warm, --bg-sand-golden, --bg-dark
--text-dark, --text-title, --text-light, --text-muted, --text-dim
--font-jura, --font-kaisei, --font-koho, --font-kiwi, --font-dhyana, --font-jacques
```

Reach for a token before hardcoding a hex value or font stack.

**Class names are prefixed by page or component.** `home-*` for `HomePage`, `about-*` for `AboutPage`, `download-*` for `DownloadPage`, `footer-*` for `Footer`. The pattern is `block__element` via hyphenation (`.about-hero-tiles-left`, `.pillar-icon-box`) with modifier suffixes where needed (`.bg-gold`, `.card-center`, `.quote-warm`). Prefer extending this over introducing a utility-class or BEM-notation system.

**Pages wrap themselves in `.figma-page-container`** (see `HomePage.jsx:45`). Keep this wrapper.

**`Header` takes a `variant` prop.** `variant="home"` renders the transparent overlay header used on the hero; the default renders the pill-style header used on `/about` and `/download`. It also auto-detects the home route (`Header.jsx:7`).

**`Footer` takes a `showTopSection` prop.** Pass `false` to suppress the large logo block — `/download` does this because the subscribe banner already sits above the footer.

**Hardcoded content lives in arrays at the top of the page file.** `FAQ_ITEMS` in `HomePage.jsx:6`, `BRANDS` in `AboutPage.jsx:6`, `CATALOGUES` in `DownloadPage.jsx:6`. There is no CMS or API layer, so content edits happen in these literals.

## Figma Workflow

UI in this project is built from Figma designs, and `.agents/` contains the tooling and rules for that:

- `.agents/skills/figma-to-ui/SKILL.md` — the workflow to load when implementing a Figma frame
- `.agents/rules/figma-fidelity.md` — **always-on** fidelity rules
- `.agents/agents/figma-ui-engineer/agent.md` — subagent definition

The short version: **Figma is the source of truth.** Do not substitute assets or icons, invent or delete visible copy, normalize unusual dimensions to "nicer" values, or restyle anything. Match geometry, typography, and color exactly, then render at the Figma viewport size and compare against the reference before calling the work done. If Figma and your assumption disagree, Figma wins.

## Current State

The front-end renders end to end. These pieces are scaffolded but not wired to anything real:

- **Catalogue downloads are dead links.** All four `CATALOGUES` entries use `fileUrl: "#"` (`DownloadPage.jsx`). No PDFs are in the repo.
- **The subscribe form is UI-only.** It flips to a thank-you state via `setTimeout` and never sends anything (`DownloadPage.jsx:39`).
- **The associate brand carousel arrows do nothing.** `brandOffset` is updated by `handlePrevBrand` / `handleNextBrand` (`AboutPage.jsx:14`) but is never bound to `associates-logos-track`, so the track never moves.
- **The three home category CTAs are labelled `"Button"`** (`HomePage.jsx:134`, `157`, `174`) — placeholder copy.
- **Social links are placeholders** pointing at bare `instagram.com`, `facebook.com`, etc. (`Footer.jsx:46`).
- **Copy needs a proofread.** Existing typos include "Elavate", "guanite", "durable an easy", and "expectational functionality". Note that Figma fidelity rules say not to change visible text — get sign-off before editing copy that came from the design.

A `dist/` build is committed and currently up to date with `src/`. Re-run `npm run build` whenever you change source, and refresh the deploy artifact before shipping.
