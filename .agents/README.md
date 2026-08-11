# AI Agent Guide

Instructions and context for AI agents (Claude Code, etc.) working in this repository.

## What this repo is

`peteresculley.github.io` — Peter Sculley's personal website, served via GitHub
Pages. It is a **plain static site**: hand-written HTML and CSS with a small
sprinkle of vanilla JS. There is **no build step, no framework, and no package
manager**. Keep it that way unless the owner explicitly asks otherwise.

## Layout

```
index.html          Home page — the main landing page
test-area.html      A sandbox / experiment page (kept intentionally)
css/main.css        All styles (single stylesheet, CSS custom properties)
js/                 Vanilla JS used only by the test area
resources/          Committed static assets (e.g. profile.jpg)
data/               Git-ignored working data — see below
.agents/            This folder
```

## The `data/` folder (git-ignored)

`data/` is **not committed** (see `.gitignore`). It is a scratch area for AI
agents to download and analyze source material locally without polluting the
repo. Notably it holds `data/resume.pdf`, exported from the owner's Google Doc:

```
https://docs.google.com/document/d/1mswR6N4ckdVPCdbN8gLryVkcq0-0Ko37YXFxhvEl7QA/export?format=pdf
```

Re-download it when the résumé may have changed, so on-site content stays in
sync with the CV:

```
curl -sL "https://docs.google.com/document/d/1mswR6N4ckdVPCdbN8gLryVkcq0-0Ko37YXFxhvEl7QA/export?format=pdf" -o data/resume.pdf
```

## Conventions

- **Stay static.** No bundlers, no dependencies, no external CDNs. The site
  must work opened straight from disk or served as flat files.
- **Self-contained.** Prefer inline SVG and system fonts over remote assets so
  the site has no third-party network requests.
- **Theme-aware.** Styles support light and dark via `prefers-color-scheme`;
  keep both looking good when editing CSS.
- **Keep résumé-derived content truthful** and in sync with `data/resume.pdf`.

## Running locally

```
python3 -m http.server --bind 127.0.0.1 8000
```

Then open http://127.0.0.1:8000
