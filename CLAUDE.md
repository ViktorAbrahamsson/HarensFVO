# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands must be run from the `harensfvo/` subdirectory:

```bash
cd harensfvo
npm install        # install dependencies
npm run serve      # dev server with hot-reload (localhost:8080)
npm run build      # production build
npm run lint       # lint and auto-fix
```

There are no tests configured in this project.

## Architecture

This is a **Vue 2** single-page application for Härens Fiskevårdsförening (a Swedish fishing association). It uses **Vuetify 1.x** (Material Design) for UI components and **vue-router** for client-side routing.

Entry point: `src/main.js` → mounts `App.vue`, which wraps all routes with a persistent `Navbar` and `Footer`.

**Routing** (`src/router.js`) — five routes, each mapped to a view:
- `/` → `Hem.vue` (home: carousel + summary cards + lake fact table + depth map)
- `/fiskekort` → `FiskekortRegler.vue` (fishing permits and rules)
- `/fiskarter` → `Fiskarter.vue` (fish species)
- `/information` → `Information.vue` (association history/info)
- `/camping` → `Camping.vue` (camping information)

**Components** (`src/components/`):
- `Navbar.vue` — responsive toolbar with desktop link bar and mobile drawer; nav links are data-driven via a `links` array
- `Footer.vue` — site footer
- `Carousel.vue` — image slideshow used on the home page; images are hosted on Flickr

**Styling conventions:**
- Brand accent color is `#26d07c` (green-cyan), referenced both as a Vuetify theme key (`greenCyan`) and as a hex literal in scoped styles
- Global styles live in `App.vue`; component styles use `<style scoped>`
- Stylus is available but not heavily used; most styles are plain CSS inside `.vue` files
- Responsive breakpoints follow Vuetify 1.x helpers (`hidden-sm-and-down`, `hidden-md-and-up`) and manual `@media` queries

**Content** is hardcoded in component `data()` — there is no backend or CMS. To update text, prices, or facts, edit the relevant view's `data()` return value directly.

**Static assets** (lake depth map images) are served from `public/` and referenced with root-relative paths (e.g. `/djupkarta.png`).
