# Indian Wars Field Archive — Navigation and UI Redesign

**Date:** 2026-10-22  
**Status:** Design proposal for review  
**Repository:** harshiiiit-bh/indian-wars

## 1. Problem statement

The current site is a very long single document with a Kargil-specific hero at the top. Its navigation uses in-page section jumps, several major features sit below one another, and a user landing on the site can reasonably mistake the entire archive for a Kargil-only product. The number of controls and filter groups also makes the primary actions hard to recognise, especially on mobile.

## 2. Goals and acceptance criteria

1. **Neutral home page:** the default route introduces the Indian Wars Field Archive as a whole. It does not lead with Kargil dates, Kargil casualty figures, Kargil-only metrics, or battle-specific content.
2. **Distinct destinations:** Home, Operations Atlas, Campaigns, Kargil dossier, Academy, Analysis, and Sources are individually navigable views. Only the requested destination is shown; changing destinations does not require scrolling past unrelated sections.
3. **Kargil remains intact:** the existing Kargil timeline, theatre/sector material, people, operations, and analysis stay available inside a clearly labelled Kargil dossier.
4. **Simple primary navigation:** concise labels, visible active state, accessible names, responsive desktop/mobile treatment, and working browser back/forward behavior.
5. **Clear controls:** search and filters are grouped, the result count is visible, and a reset action is easy to find wherever filters exist.
6. **Operation detail is focused:** the atlas remains searchable and map-led, and operation details open in the existing dossier dialog without corrupting the route. Close button, backdrop, and Escape work.
7. **Evidence is preserved:** do not rewrite source-backed historical data merely to accommodate the UI. Preserve source links, provenance and scope caveats.
8. **Responsive and accessible:** keyboard focus remains visible, interactive controls have explicit labels, mobile navigation does not overflow, reduced-motion preferences are respected, and route changes move focus/scroll position predictably.
9. **Verifiable changes:** add a small repeatable validation script for structural invariants and run JavaScript syntax checks. If browser automation is unavailable, state that limitation rather than claim visual end-to-end testing.

## 3. Proposed information architecture

- **Home** (#home): concise archive introduction, coverage summary sourced from the current catalogue, and prominent entry points to Operations Atlas, Campaigns, Kargil dossier, Academy, and Sources. This page contains no Kargil-only hero or Kargil metrics.
- **Operations** (#operations-atlas): map, compact filters, search, result count, operation cards, and dossier dialog.
- **Campaigns** (#campaigns): curated campaign library and its own search/category filters.
- **Kargil dossier** (#kargil): Kargil hero, campaign metrics, briefing, timeline, theatre, operations, people, and Kargil-specific analysis.
- **Academy** (#academy): learning mode and quiz.
- **Analysis** (#analysis): analytical/reform material.
- **Sources** (#sources): source archive and research caveats.
- **Saved notes / global search / export / theme** stay as utility features accessible from any route.

The first implementation may use the current static HTML/CSS/JavaScript stack with a small hash-based view router. This avoids introducing a build tool or framework into a static GitHub Pages repository. It will tag current top-level content blocks by destination and toggle them as a single view; historical data rendering stays in the existing scripts.

## 4. Interaction model

- The initial URL resolves to Home. Recognised hashes restore the matching view; unknown hashes safely fall back to Home.
- Primary navigation updates the hash and switches the visible view. Browser back/forward uses the same route handler.
- Internal links that point to a section inside another view first open the correct view, then focus/scroll to the requested section.
- Active navigation state is route-driven, not inferred from scroll position.
- A compact “More” navigation group may hold lower-priority destinations on narrow screens, but key route names remain easy to discover.
- Search, filters, saved items, export, theme, quiz and operation dossiers retain their current behavior.
- Operation dialog open/close should preserve the current view and restore focus to the initiating control when practical.
- The global reading-progress bar should be removed or adapted: a page-based archive should not show a progress indicator that implies one endless document.

## 5. Visual direction

A restrained, premium field-archive aesthetic: charcoal/ink backgrounds, muted olive and sand accents, readable body text, strong spacing, compact cards, consistent section headers, and high-contrast primary actions. Reduce the current density of boxed warnings, pill tags, and decorative controls. Maps and verified operation photography remain content-led; conceptual diagrams must be labelled as conceptual rather than presented as historic images.

The layout should prioritise:
- clear page title and one-sentence purpose;
- a small number of primary actions;
- one control group per content collection;
- consistent card metadata and action placement;
- comfortable line-lengths and spacing;
- mobile-first navigation and filters that wrap cleanly.

## 6. Scope boundaries

**Included:** page/view routing, neutral home dashboard, navigation redesign, destination grouping of existing sections, control hierarchy, responsive CSS refinements, direct-link behavior, route smoke tests, and brief README update if needed.

**Not included in this pass:** changing historical conclusions, mass-expanding operation coverage, scraping Google/the web dynamically, a backend/CMS, login/accounts, or replacing the existing data catalogue. These should be separate workstreams after navigation and usability are stable.

## 7. Implementation files

- index.html: new home dashboard, route metadata, navigation labels, primary page structure, accessible control labels.
- app.js: route resolver/switcher, hashchange handling, route-aware internal jumps, active navigation state, and safe fallbacks. Existing data renderers remain in place.
- README.md: document the new navigation model and local validation command.
- scripts/validate-archive.js (new): static structural checks for route groups, required destinations, no Kargil-only content on home, unique IDs, script ordering, and operation atlas references.

## 8. Validation plan

1. Run the new structural validation script and confirm it fails before implementation for the missing Home route and page grouping.
2. Implement the route/view behavior with the smallest coherent change.
3. Run the validation script and syntax-check app.js, campaigns.js, and data.js.
4. Check route table, duplicate IDs, and the preservation of source/data script ordering.
5. Inspect the final changed files and GitHub commit results.
6. If a browser is available, manually verify Home → Operations → dossier open/close → back to Home, direct hash entry, mobile layout, and Kargil sections. If not, report that end-to-end visual verification remains unperformed.

## 9. Main risks and mitigations

- **Broken internal anchors:** centralise route-aware navigation and preserve original section IDs.
- **Kargil data accidentally shown on Home:** keep the Kargil hero and metrics assigned exclusively to the Kargil route, with explicit automated checks.
- **Hidden interactive sections still running:** initialise map and renderers as today, and invalidate the Leaflet map after switching to the Operations view.
- **GitHub Pages deep links:** use hash routing rather than server-side paths.
- **Scope expansion:** keep this phase focused on information architecture and UI usability before adding more historical content.
