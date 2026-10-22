# Indian Wars — Kargil Dossier Source Register

This register records the principal public sources linked from the website's Source Library. The application is a static GitHub Pages site: it does **not** scrape Google or retrieve new articles automatically. It provides local search over the curated dataset, direct links to original sources, and a Google web-search fallback for research beyond the built-in archive.

## Primary and official records

| Source | Institution | Useful for |
|---|---|---|
| [Operation Vijay — War Depictions](https://nationalwarmemorial.gov.in/war-depictions/details/8) | National War Memorial, Government of India | Official memorial overview, campaign narrative, gallantry awards, and the casualty figure stated on that page. |
| [The Nation Remembers Kargil War Heroes](https://www.pib.gov.in/newsite/erelcontent.aspx?lang=2&reg=48&relid=50974) | Press Information Bureau, Ministry of Defence | Government retrospective on Operation Vijay and Operation Safed Sagar, aircraft used, high-altitude missions, and the LoC restriction. |
| [Kargil Vijay Diwas Rajat Jayanti — IAF operations](https://www.pib.gov.in/PressReleasePage.aspx?PRID=2033075&lang=2&reg=48) | Press Information Bureau, Ministry of Defence | The IAF's 2024 official retrospective and how it describes mission categories. |
| [History of the Indian Air Force](https://careerairforce.gov.in/indian-air-force-history) | Indian Air Force | Service history and the IAF's summary of Operation Safed Sagar. |
| [Kargil Review Committee papers](https://elibrary.sansad.in/items/94154a2c-a144-4ab4-a8bc-94c76e834c04) | Sansad eLibrary | Catalogue entry for the committee report, executive summary, and action-taken report. |
| [Committee report and action-taken parliamentary record](https://rsdebate.nic.in/handle/123456789/110129) | Rajya Sabha Official Debates | Parliamentary record connecting the report with follow-up documents. |

## Diplomatic and archival sources

| Source | Institution | Useful for |
|---|---|---|
| [Joint statement by President Clinton and Prime Minister Sharif](https://clintonwhitehouse6.archives.gov/1999/07/1999-07-04-joint-statement-by-president-and-pakistan-prime-minister.html) | White House archive | Contemporaneous wording on respect for the Line of Control and restoration of the line. |
| [History of the Department of State — Kashmir conflict](https://1997-2001.state.gov/about_state/history/ch13.html) | U.S. Department of State historical archive | U.S. diplomatic context and the July 1999 response. |
| [Kargil War records — finding aid](https://www.clintonlibrary.gov/research/archives/finding-aids/kargil-war) | William J. Clinton Presidential Library | Finding aid for declassified records and correspondence relating to the Kargil crisis. |

## Editorial and data-integrity notes

- The site keeps its original chronology, theatre-sector notes, operation summaries, leadership profiles, gallantry biographies, reforms, and strategic comparison dataset.
- The site explicitly flags the difference between the long-cited figure of **527** Indian fatalities and **674** stated on the National War Memorial's Operation Vijay page. These figures should not be combined or treated as directly equivalent without checking the source scope and wording.
- The IAF's source summaries use distinct categories (for example, strike, reconnaissance/ELINT, escort, helicopter, air transport and casualty evacuation). Totals with different definitions should not be assumed to count the same kind of sortie.
- Detailed descriptions of battlefield actions and strategic intent in the site are secondary summaries unless a linked primary source says otherwise. The website does not claim to be an official government publication.
- External links were checked while making this UI/data-source upgrade on 22 October 2026. Online documents, URLs, and archived pages may change over time.

## Runtime and future data retrieval

The site is static HTML/CSS/JavaScript suitable for GitHub Pages. Search is local to the committed data and source catalogue; the **Search the web** links open an external Google query in a new tab. True automated ingestion from search APIs, news archives, or knowledge bases would require a clearly defined API/service, rate-limit handling, source extraction, deduplication, attribution, and (for most providers) an API key stored outside client-side code. Do not put private API keys in this public repository.
