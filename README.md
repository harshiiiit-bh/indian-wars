# Indian Wars — Kargil War Field Archive

An interactive, source-led educational dossier about the 1999 Kargil conflict. The site preserves the original historical dataset while presenting it in a responsive research interface.

## Experience

- Responsive field-archive UI with dark/light themes and a reading progress indicator.
- Global search across the curated timeline, theatre sectors and named heights, operations, commanders, gallantry profiles, reforms, and sources.
- Timeline filters for infiltration, detection, mobilisation, battles, and endgame, plus event-level web research links.
- Interactive sector selector, battlefield-feature notes, and logistics / highway reference cards.
- Switchable Indian and Pakistani leadership lists and expandable gallantry profiles.
- Source library linked to official Indian records, parliamentary archives, and contemporary diplomatic material.
- Browser-local field notes and saved items; export the curated dossier as JSON; print or save the page as PDF.
- Keyboard search: Ctrl/Command + K or /. Press Esc to close the search or notes drawer.

## Files

- index.html — layout, styling, responsive UI, and evidence/source panels.
- app.js — rendering and interaction layer.
- data.js — original structured Kargil chronology, sectors, operations, people, reforms, and analysis.
- SOURCES.md — source register and notes on provenance and data integrity.

## Research and source policy

The UI prioritises primary/official records where available and identifies interpretive summaries as such. See the on-page Sources section and SOURCES.md for source links and editorial caveats.

Two scope issues are deliberately visible instead of silently reconciled:

1. The long-cited figure of 527 Indian fatalities differs from the 674 stated on the National War Memorial's Operation Vijay page. Check each source's wording and scope before citing either.
2. Official IAF summaries group missions differently (strike, reconnaissance/ELINT, escort, helicopter, air transport, casualty evacuation). Totals with different category definitions should not be compared as if they measured the same thing.

The website does not claim to be an official government publication.

## Live web research vs. static content

This is a static GitHub Pages application. Global search searches the dataset committed to the repository. The Search the web links open a Google query for additional research; the source cards link to original institutions. The site does not scrape Google or ingest arbitrary pages automatically.

For future automated research ingestion, select a source/API with documented access, set attribution and deduplication rules, validate factual claims, handle rate limits, and keep private API credentials on a server—not in this public frontend.

## Local development

Open index.html in a browser or serve this directory with any static web server. No package installation or build step is required. data.js must load before app.js.

## Credits

Independent educational project by Harshit Chaubey. Historical summaries are provided for study and should be checked against the linked original records.
