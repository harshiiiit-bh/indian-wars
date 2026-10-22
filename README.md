# Indian Wars — Field Archive

An interactive, source-led educational archive for Indian military history. The Kargil War (1999) remains the deep-dive dossier; the campaign library now links concise historical guides across earlier conflicts and operations.

## What's included

### Campaign library
- Jammu & Kashmir conflict (1947–49)
- Operation Vijay — Goa liberation (1961)
- Sino-Indian War (1962)
- India–Pakistan War (1965)
- India–Pakistan War / Bangladesh Liberation context (1971)
- Operation Meghdoot (launched 1984)
- Operation Cactus (1988)
- Kargil War (1999), with the original in-depth dossier

Each guide identifies its period, theatre, category, key point, and direct official/archival source links. Campaign summaries are orientation notes rather than substitutes for full source documents.

### Interactive tools
- Responsive interface with dark/light themes and reading-progress bar.
- Global archive search across the timeline, campaigns, theatre features, operations, leadership, gallantry profiles, reforms, and sources.
- Timeline phase filters and keyword search.
- Campaign filter/search for wars vs. operations, year, theatre, and subject.
- Interactive sector navigator, named battlefield features, and logistics / highway references.
- Switchable Indian/Pakistani leadership profiles and expandable gallantry records.
- **Academy study mode**: 15 multiple-choice questions spanning the campaign library, immediate answer feedback, source citations, shuffled order, topic filters, review of incorrect responses, score and local best score.
- Browser-local saved field items and personal notes.
- Export the curated archive as JSON, or print/save the website as PDF.
- Keyboard archive search: Ctrl/Command + K or /. Press Esc to close search or the field-notes drawer.

## Files

- index.html — layout, styles, campaign library, quiz interface, source and evidence panels.
- app.js — rendering and interaction layer, local search, saved items, and study scoring.
- data.js — original Kargil chronology, theatre sectors, operations, people, reforms, and analysis.
- campaigns.js — campaign catalogue and the source-linked quiz question bank.
- README.md — setup and product documentation.
- SOURCES.md — source register, provenance, and data-integrity notes.

## Research and source policy

The source library prioritises official Indian government/service records, parliamentary catalogues, and contemporaneous diplomatic/archival documents where available. Interpretive summaries are identified as such; consult the linked original materials for details.

Two scope issues are deliberately visible rather than silently reconciled:

1. The long-cited Kargil fatality figure of 527 differs from the 674 stated on the National War Memorial's Operation Vijay page. Check the source wording and scope before citing either figure.
2. Official IAF summaries group missions differently (strike, reconnaissance/ELINT, escort, helicopter, air transport, casualty evacuation). Totals with different category definitions should not be compared as if they measured the same activity.

This is an independent educational project, not an official government publication. Historical conflicts may have contested narratives; the archive favours careful wording, citations, and explicit scope labels.

## Live research vs. static content

This is a static GitHub Pages application. Archive search queries the committed local dataset and source catalogue; “Web research” links open Google queries and source cards open original institutions. The site does **not** scrape Google or ingest arbitrary pages automatically.

For automated research ingestion, choose an API or licensed source with documented access, create a server-side retrieval and citation pipeline, deduplicate and date sources, validate claims, respect rate limits and copyright, and keep secret API credentials out of this public frontend.

## Local development

Open index.html in a browser or serve this folder with a static web server. No package installation or build step is required. Scripts must load in this order: data.js, campaigns.js, app.js.

## Credits

Independent educational project by Harshit Chaubey. Use the linked sources to verify claims before relying on the material for publication or exam reference.
