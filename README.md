# Indian Wars — Historical Military Atlas

An independent, source-led educational project exploring major publicly documented Indian Army operations and selected joint-service, peacekeeping, evacuation, and disaster-response missions. The original Kargil War dossier remains intact; the Operations Atlas adds broad coverage across more periods and theatres.

## Explore

### Operations Atlas
The map-led catalogue currently covers major open-source examples including Operation Polo (1948), Operation Bison / Zoji La (1948), Goa's Operation Vijay (1961), Operation Blue Star (1984), Operation Meghdoot (launched 1984), Operation Pawan / the IPKF deployment in Sri Lanka (1987–90), Operation Cactus (1988), Operations Bajrang and Rhino (1990–91), Operation Rakshak (broad campaign context), Operation Sadbhavana (1998 onward), Operation Khukri (Sierra Leone, 2000), Operation Parakram (2001–02), Operation Sarp Vinash (2003), Operation All Clear (Bhutan-led, 2003), Operation Sea Wave (2004), Operation Surya Hope (2013), Operation Megh Rahat (2014), Operation Maitri (2015), Operation Devi Shakti (2021), Operation Ganga (2022), Operation Dost (2023), Operation Kaveri (2023), Operation Ajay (2023), Operation Sindoor (2025), and Operation Sindhu (2025). It also includes index entries for the Congo / ONUC mission and Custodian Force India in Korea.

This is a curated open-source index of major publicly documented missions, not a claim that every Indian Army operation, small-unit action, classified activity or incomplete archival record is exhaustively listed. Some entries are Army-led; others are joint, whole-of-government, host-nation-led or UN missions. Each entry labels its scope.

### Each operation dossier
- Theatre marker on an interactive OpenStreetMap-based map using Leaflet.
- Clear separation between plan, documented execution, friction / mistakes / evidence gaps, and lessons for future study.
- Dated chronology entries where linked public sources support them.
- Primary/official and secondary source links with image attribution and licence notes where a photo is included.
- Original pictorial teaching schematics when an event-specific photograph is not available or would misrepresent the event.
- Search/filter by name, period, location, category, and lesson; browser-local bookmarks; source-linked global search; JSON export.

### Existing learning features
- Kargil War 1999 deep-dive: chronology, sector profiles, operations, leadership, gallantry records, aftermath, and comparative analysis.
- Campaign library: 1947–49, 1961, 1962, 1965, 1971, Meghdoot, Cactus and Kargil.
- Academy mode: 15 multiple-choice questions with immediate explanations, source links, topic filters, missed-question review and local best score.
- Neutral archive Home with distinct hash-routed destinations: Operations, Campaigns, Kargil dossier, Academy, Analysis and Sources.
- Clear search/filter groups with visible reset controls, global search, dark/light modes, field notes, and print/save as PDF.

## Important chronology rule

“Day-by-day” means day-level entries where a dated public source supports a specific milestone. For operations with only a short official retrospective, the dossier says so instead of inventing daily events. A campaign may last years or be an ongoing deployment; its initial launch date is not the end date of the mission.

The sections titled “Friction, mistakes & evidence gaps” separate documented constraints or critiques from general analytical questions. A failed outcome alone does not prove which decision was mistaken; a lesson should be traceable to evidence and, when accounts differ, attributed to its source.

## Image policy

Images are used when their provenance and context are clear. Each photographic exhibit links to its Commons source page and displays the stated author, caption and licence. Creative Commons images are attributed under their licence; Government Open Data Licence (India) material is linked with attribution; a modern contextual image is explicitly labelled as such and not portrayed as a historic combat photograph. If no appropriate historical photo is available, the interface shows a clearly labelled conceptual SVG diagram. A picture is removed if its context could mislead readers.

## Source and data integrity

The source register is in SOURCES.md. The site includes official Indian government/service sources, parliamentary material, disaster-response reports, UN history, contemporary diplomatic documents and selected secondary historical analysis. This is an educational project, not a Government of India publication.

The Kargil dossier visibly flags that the long-cited 527 Indian fatalities figure differs from the 674 stated on the National War Memorial's Operation Vijay page. Consult each source's wording and scope before citing either number. Official air-operation sortie counts also vary by category definition; those totals should not be treated as interchangeable.

For recent or contested episodes, distinguish an official statement from independently verified facts. Operational details may be disputed, not public, or incomplete. Do not infer classified information.

## Navigation and usability

The homepage introduces the whole archive and does not lead with Kargil-specific metrics. Kargil remains a focused case-study destination; the Operations Atlas and Campaign Library open as separate views so visitors do not need to scroll through the entire archive. Navigation uses hash routes compatible with GitHub Pages. Legacy links such as #timeline, #theatre, #overview and #atlas resolve into the correct destination. Browser Back/Forward follow route changes, and the map refreshes after the Operations view becomes visible.

Run the structural regression checks from a local checkout with Node.js:

```sh
node scripts/validate-archive.js
```

The validator checks unique HTML IDs, route controls and view groups, legacy routing hooks, key interactive elements, and script load order.

## Technical stack

- index.html — responsive UI, map section, teaching view, modal dossiers and styles.
- app.js — search, rendering, map interaction, saved items, study mode and JSON export.
- data.js — original Kargil dossier dataset, retained unchanged.
- campaigns.js — campaign summaries, quiz question bank, and the extended operations atlas.
- SOURCES.md — source register, image provenance, research and chronology policy.
- Leaflet 1.9.4 and OpenStreetMap — third-party map library and basemap. Network access is needed for the interactive map and remotely hosted images.

The site is static and works without a build step. Open index.html through a static server or publish the repository through GitHub Pages. Scripts load in this order: data.js, campaigns.js, app.js. The interactive basemap uses third-party network services; if they are unavailable, the operation cards and dossier content remain available.

## Live research limitation

Search covers the content committed to this repository. Google links open external research queries; the website does not scrape Google or automatically ingest all webpages. Automated ingestion would require a selected provider/API, server-side fetching, attribution, source validation, duplicate detection, freshness checks, rate-limit handling and secret API keys kept outside this public frontend.

## Credits

Independent educational project by Harshit Chaubey. Check original sources before citing any specific number or interpreting a disputed historical event.
