# Military History Archive Expansion Plan

> For agentic workers: follow a test-first workflow; keep each section independently verifiable.

**Goal:** Expand the Indian Wars Field Archive into a broad, source-led learning atlas with substantially more campaigns, operation dossiers, historical imagery, deeper case studies, and accessible analytical graphs.

**Architecture:** Retain the static GitHub Pages stack. Extend the existing campaign, operations, and war-study datasets; add curated image provenance data in campaigns.js; add hash-routed Visual Library and History Lab views; render graphs as responsive, accessible SVG from local catalogue data.

**Tech stack:** HTML5, embedded CSS, vanilla JavaScript, data files, GitHub Actions validation; no new runtime dependency.

**Evidence standard:** Major publicly documented operations and campaigns first; mark joint, Army-led, Navy/Air Force-led, UN and whole-of-government missions accurately. Dated chronologies are only as detailed as the sources permit. Never invent daily events to make a timeline look full. Every image has a caption, credit, source page, and licence/provenance note; reference imagery is clearly identified as illustrative.

## Work items

- [ ] Expand Campaign Library from 8 to at least 20 researched campaigns.
- [ ] Expand Operations Atlas from 35 to at least 55 researched dossiers.
- [ ] Expand in-page War Studies from 9 to at least 18 substantial studies.
- [ ] Add 12+ curated image exhibits covering terrain, commanders, historical events, rescue missions and peacekeeping, each with readable provenance.
- [ ] Add a Visual Library route with category filtering and searchable image cards.
- [ ] Add a History Lab route with redesigned decade, mission-type, theatre and campaign-category charts, all sourced from archive data and with explicit sample-size/scope notes.
- [ ] Fix known image-to-operation mismatches.
- [ ] Strengthen automated validator checks before implementation and run CI + GitHub Pages deployment afterward.

## Acceptance checks

- The original Kargil chronology and data.js remain intact.
- Campaign and operation records use stable, unique IDs and have source notes.
- Newly added gallery images do not imply an illustrative image depicts a particular event when it does not.
- Graphs are responsive, accessible, use local catalogue counts, and state that catalogue counts measure indexed records—not military intensity, casualties or success.
- Search, sorting, comparisons, saved items, direct hashes, legacy hashes, internal study reading, and existing Kargil subviews remain functional.
- No full browser/device screenshot review is claimed unless actually performed.
