# Indian Wars Archive Redesign Implementation Plan

> For agentic workers: REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Replace the Kargil-first endless-scroll experience with a neutral home dashboard and distinct, navigable archive views while preserving the source-led historical content.

**Architecture:** Keep the static GitHub Pages stack (HTML, CSS, vanilla JS and existing data files). Use hash-based client-side routing to group existing sections into view destinations; use route-aware internal links and existing renderers instead of adding a framework. Add a small Node validation script for stable structural and syntax checks.

**Tech Stack:** HTML5, embedded CSS, vanilla JavaScript, Node.js built-ins; current Leaflet map dependency retained.

**Spec:** docs/superpowers/specs/2026-10-22-archive-redesign-design.md

## Global Constraints
- The default Home route must not contain the Kargil-specific hero or Kargil-only metrics.
- Preserve the current Kargil timeline, sectors, people, operations, quiz, sources, operation data and image provenance.
- Use hash routing compatible with GitHub Pages; do not add a framework or backend.
- Show one primary destination at a time and preserve deep links to existing section IDs.
- Accessible keyboard focus, reduced-motion behavior, responsive controls, and visible focus states must remain supported.
- Do not claim live internet scraping or exhaustive historical coverage.

## Review Focus
- Direct entry to unknown or old hashes must land in a valid destination, never a blank screen — test route resolver fallback and legacy-hash aliases.
- Internal links to hidden sections must switch destination before scrolling — test a route-aware destination mapping for section IDs.
- Mobile navigation must be reachable without horizontal overflow — validate responsive nav CSS and structural hooks.
- Leaflet must still render after its view is made visible — test that route activation invalidates the map size when available.
- Initializing controls must not rely on null elements from hidden or moved content — run syntax and structure validations and retain existing IDs.

---

### Task 1: Add structural regression checks

Files: create scripts/validate-archive.js; test with node scripts/validate-archive.js.

Produces a zero-dependency validator using Node.js fs and source checks; returns exit code 1 with clear diagnostics when invariants fail.

- [ ] Write checks for route sections, Home/Kargil separation, unique IDs, required key controls, and script order.
- [ ] Run it before the implementation and confirm it fails because route grouping/Home separation do not yet exist.
- [ ] Keep checks specific to the design requirements rather than brittle exact text snapshots.

### Task 2: Build Home and destination grouping

File: index.html.

- Add data-view grouping to top-level content; existing element IDs stay stable.
- Add a neutral #home dashboard with archive intro, catalogue coverage signals, and clear links to Operations, Campaigns, Kargil, Academy and Sources.
- Treat existing #overview, #overview-brief, #timeline, #theatre, #operations, #people as Kargil dossier sections, not Home.
- Put #atlas under the Operations destination; preserve Campaigns, Academy, Analysis and Sources as their own destinations.
- Replace sprawling nav with Home, Operations, Campaigns, Kargil, Academy and a compact More menu containing Analysis and Sources; utilities remain visible and labelled.
- Remove the long-document progress indicator and styles that imply one continuous reading page.
- [ ] Write/adjust validator conditions first and run to see expected failures.
- [ ] Implement the neutral Home and wrap existing sections in route view containers without deleting data or changing the source catalogue.
- [ ] Add a clear Kargil landing heading/context that explicitly labels Kargil War 1999.
- [ ] Check IDs remain unique and existing IDs/controls remain available.

### Task 3: Add hash-based view routing

File: app.js.

- resolveRoute(hash) returns a valid route ID, defaulting to home.
- activateRoute(routeId, options) toggles route containers, active nav state, page title and focus, and invalidates Leaflet map dimensions when Operations becomes visible.
- sectionRouteMap explicitly maps legacy section IDs to destination routes, keeping old bookmarks working.
- navigateToSection(id) changes route first, then safely scrolls/focuses a destination section.
- Handle hashchange, direct links, legacy section hashes, and unknown hashes. Route state, not scroll position, controls active navigation.
- [ ] Add checks for resolver aliases, unknown fallback, route containers and active nav state before production implementation.
- [ ] Implement routing helpers with explicit mappings and safe DOM guards.
- [ ] Wire primary nav, Home action cards and route-aware internal jumps to the router.
- [ ] Ensure operation dossier/modal, global search, saved notes, export, theme and quiz remain usable.
- [ ] Remove the old scroll-driven active-nav handler; preserve normal internal scrolling within a destination.

### Task 4: Simplify control hierarchy and responsive UX

Files: index.html embedded CSS and navigation markup.

- Navigation uses clear labels, high-contrast active state, keyboard access and a mobile More menu.
- Each collection keeps its own search and filter group; add/update reset controls only where missing.
- Home cards and section headers provide visible destinations rather than pushing all controls into the header.
- [ ] Add small-screen styles for a usable route bar and More menu.
- [ ] Reduce density of unnecessary chip/pill treatment in navigation and control groups without restyling all historic content.
- [ ] Verify the route menu closes predictably and focus remains visible.

### Task 5: Verify, document and commit

Files: README.md; verify scripts/validate-archive.js, index.html, app.js, campaigns.js, data.js.

- [ ] Update README with destination routing and validation command.
- [ ] Run validator and syntax checks on all JavaScript files.
- [ ] Check unique IDs, script order, home/Kargil content separation, and preserved catalogue hooks.
- [ ] Inspect final repository files and commit results; report any end-to-end visual checks that could not be performed.