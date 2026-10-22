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

- [x] Write checks for route sections, Home/Kargil separation, unique IDs, required key controls, and script order.
- [x] Run it before the implementation and confirm it fails because route grouping/Home separation do not yet exist.
- [x] Keep checks specific to the design requirements rather than brittle exact text snapshots.

### Task 2: Build Home and destination grouping

File: index.html.

- Add data-view grouping to top-level content; existing element IDs stay stable.
- Add a neutral #home dashboard with archive intro, catalogue coverage signals, and clear links to Operations, Campaigns, Kargil, Academy and Sources.
- Treat #overview and #overview-brief as the Kargil briefing view; split #timeline, #theatre, #operations and #people into focused Kargil subviews. Keep the original IDs for bookmarked links.
- Put #atlas under the Operations destination; preserve Campaigns, Academy, Analysis and Sources as their own destinations.
- Replace sprawling nav with Home, Operations, Campaigns, Kargil, Academy and a compact More menu containing Analysis and Sources; utilities remain visible and labelled.
- Remove the long-document progress indicator and styles that imply one continuous reading page.
- [x] Write/adjust validator conditions first and run to see expected failures.
- [x] Implement the neutral Home and wrap existing sections in route view containers without deleting data or changing the source catalogue.
- [x] Add a clear Kargil landing heading/context that explicitly labels Kargil War 1999.
- [x] Check IDs remain unique and existing IDs/controls remain available.

### Task 3: Add hash-based view routing

File: app.js.

- resolveRoute(hash) returns a valid route ID, defaulting to home.
- activateRoute(routeId, options) toggles route containers, active nav state, page title and focus, and invalidates Leaflet map dimensions when Operations becomes visible.
- sectionRouteMap explicitly maps legacy section IDs to destination routes, keeping old bookmarks working.
- navigateToSection(id) changes route first, then safely scrolls/focuses a destination section.
- Handle hashchange, direct links, legacy section hashes, and unknown hashes. Route state, not scroll position, controls active navigation.
- [x] Add checks for resolver aliases, unknown fallback, route containers and active nav state before production implementation.
- [x] Implement routing helpers with explicit mappings and safe DOM guards.
- [x] Wire primary nav, Home action cards and route-aware internal jumps to the router.
- [x] Ensure operation dossier/modal, global search, saved notes, export, theme and quiz remain usable.
- [x] Remove the old scroll-driven active-nav handler; preserve normal internal scrolling within a destination.

### Task 4: Simplify control hierarchy and responsive UX

Files: index.html embedded CSS and navigation markup.

- Navigation uses clear labels, high-contrast active state, keyboard access and a mobile More menu.
- Each collection keeps its own search and filter group; add/update reset controls only where missing.
- Home cards and section headers provide visible destinations rather than pushing all controls into the header.
- [x] Paginate the Kargil timeline (10 per page), Campaign Library (6 per page), and Operations Atlas (9 per page); reset each list to page one when its search/filter changes.
- [x] Add small-screen styles for a usable route bar and More menu.
- [x] Reduce density of unnecessary chip/pill treatment in navigation and control groups without restyling all historic content.
- [x] Verify the route menu closes predictably and focus remains visible.

### Task 5: Verify, document and commit

Files: README.md; verify scripts/validate-archive.js, index.html, app.js, campaigns.js, data.js.

- [x] Update README with destination routing and validation command.
- [x] Run validator and syntax checks on all JavaScript files.
- [x] Check unique IDs, script order, home/Kargil content separation, and preserved catalogue hooks.
- [x] Inspect final repository files and commit results; report any end-to-end visual checks that could not be performed.

## Execution record

**Implemented on the default branch:** a neutral archive Home; distinct hash-routed destinations for Home, Operations Atlas, Campaign Library, Kargil briefing, Academy, Analysis and Sources; dedicated Kargil Timeline, Terrain, Operations and People views; a persistent chapter bar; legacy-hash mapping; responsive navigation with labelled utilities; search/filter reset controls; pagination for the long chronology and catalogues; dynamic Home catalogue counts; corrected delegated actions for dynamically rendered cards; route-aware Leaflet resizing; and source-scope notes.

**Final validation evidence:** [GitHub Actions validation](https://github.com/harshiiiit-bh/indian-wars/actions/runs/39789974119) passed both JavaScript syntax checks and archive-structure validation on commit `9a5b294ad7cf06c5f47919a5ce0cb748820f5868`. [GitHub Pages build/deployment](https://github.com/harshiiiit-bh/indian-wars/actions/runs/39789974122) completed successfully for that same commit. Additional source-level simulations passed 71/71 structural, syntax, pagination and legacy-route checks; focused routing and activation simulations also passed, including direct links to timeline events, campaign cards and operation cards beyond page one. The archive has 96 unique HTML IDs; the original data.js and campaigns.js remain in place.

**Ruling:** Keep the original static HTML/CSS/JavaScript + hash routing rather than introduce a framework — best fit for this repository's GitHub Pages deployment and keeps the historical data files intact; cost if wrong: future larger feature work may eventually justify a framework migration.

**Ruling:** Preserve all existing section IDs and map old anchors to focused destinations, rather than breaking bookmarks — lowers the risk of breaking existing links; cost if wrong: a legacy hash may resolve to a focused chapter instead of a broader page.

**Ruling:** Paginate long search results instead of loading every card in a single feed — directly addresses the user's endless-scroll complaint; cost if wrong: some users may prefer an all-results view, so search/filter and visible result/page counts remain available.

**Verification limitation:** Full live-browser interaction, screenshots, and device-specific visual walkthrough were not available in the current tool environment. CI checks structure and JavaScript syntax, and source-level simulations cover routing and pagination behavior, but they do not fully replace visual testing on a real browser/mobile device.
