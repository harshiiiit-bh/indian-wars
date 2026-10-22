/* Curated campaign library for the Indian Wars Field Archive.
   Summaries are editorial orientation notes; each campaign links to a source record.
   This is a static catalogue, not automatic web ingestion. */
const CAMPAIGNS = [
  {
    id: "kashmir-1947",
    title: "Jammu & Kashmir Conflict",
    period: "1947–1949",
    dates: "Oct 1947 – Jan 1949",
    theatre: "Jammu & Kashmir",
    type: "war",
    tag: "Post-independence",
    summary: "The first India–Pakistan conflict over the princely state of Jammu & Kashmir. Indian troops were airlifted into Srinagar on 27 October 1947; fighting continued for fourteen months before the ceasefire took effect on 1 January 1949.",
    keyPoint: "A formative campaign in airlift, mountain logistics, and the history of the Line of Control.",
    sourceLabel: "National War Memorial — conflict record",
    sourceUrl: "https://nationalwarmemorial.gov.in/murals/totem_details/1",
    secondaryLabel: "Government official-history catalogue",
    secondaryUrl: "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=177064"
  },
  {
    id: "goa-1961",
    title: "Operation Vijay — Goa Liberation",
    period: "1961",
    dates: "17–19 Dec 1961",
    theatre: "Goa, Daman & Diu",
    type: "operation",
    tag: "Tri-service operation",
    summary: "Indian armed forces carried out a short military operation that ended Portuguese colonial rule in Goa, Daman and Diu. Do not confuse this 1961 operation with the ground campaign called Operation Vijay during the Kargil War in 1999.",
    keyPoint: "A distinct operation with the same codename as the 1999 Kargil ground campaign.",
    sourceLabel: "Government official-history catalogue",
    sourceUrl: "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=177064",
    secondaryLabel: "National War Memorial — 1947 to 1962",
    secondaryUrl: "https://nationalwarmemorial.gov.in/war-depictions/details/3"
  },
  {
    id: "sino-indian-1962",
    title: "Sino-Indian War",
    period: "1962",
    dates: "20 Oct – 21 Nov 1962",
    theatre: "Ladakh & NEFA (now Arunachal Pradesh)",
    type: "war",
    tag: "Himalayan frontier",
    summary: "A war fought across disputed Himalayan border areas in the western and eastern sectors. The conflict became a major strategic shock for India and prompted lasting debate about defence preparedness, intelligence, communications, and sustaining forces in remote mountain terrain.",
    keyPoint: "Read the conflict with contemporaneous Indian records and a range of historical perspectives; border narratives and political interpretations differ.",
    sourceLabel: "National War Memorial — historical context",
    sourceUrl: "https://nationalwarmemorial.gov.in/war-depictions/details/3",
    secondaryLabel: "Nehru Archive — contemporaneous correspondence",
    secondaryUrl: "https://nehruarchive.in/documents/to-heads-of-government-26-october-1962-y6yqq"
  },
  {
    id: "indo-pak-1965",
    title: "India–Pakistan War",
    period: "1965",
    dates: "Aug – Sep 1965",
    theatre: "Western front & Jammu",
    type: "war",
    tag: "Air–land coordination",
    summary: "The 1965 war included fighting in the Rann of Kutch, Kashmir, and the western front. An Indian Air Force retrospective notes that Pakistan's Operation Grand Slam began in the Chhamb–Jaurian sector on 1 September and discusses the impact of air-ground coordination.",
    keyPoint: "Official histories of the 1965 war are listed by India's Ministry of Defence; the government catalogue is a useful research starting point.",
    sourceLabel: "PIB — IAF retrospective on the 1965 war",
    sourceUrl: "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=109364",
    secondaryLabel: "Official-history catalogue",
    secondaryUrl: "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=177064"
  },
  {
    id: "indo-pak-1971",
    title: "India–Pakistan War & Bangladesh Liberation",
    period: "1971",
    dates: "3–16 Dec 1971 · major interstate fighting",
    theatre: "Eastern & western fronts",
    type: "war",
    tag: "Joint operations",
    summary: "After a wider political and humanitarian crisis in East Pakistan, open interstate war began in December. Indian forces operated on eastern and western fronts; the surrender in Dhaka on 16 December and the emergence of Bangladesh became defining outcomes of the conflict.",
    keyPoint: "A major example of coordinated land, air, sea, and diplomatic efforts. The wider Bangladesh Liberation War context began well before December.",
    sourceLabel: "PIB — 50th anniversary official account",
    sourceUrl: "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=228559",
    secondaryLabel: "MEA publication — The Indo-Pak War 1971",
    secondaryUrl: "https://www.mea.gov.in/Uploads/PublicationDocs/23460_IWM_Book__11-06-2014_.pdf"
  },
  {
    id: "operation-meghdoot",
    title: "Operation Meghdoot",
    period: "1984–present context",
    dates: "Launched 13 Apr 1984",
    theatre: "Siachen Glacier & Saltoro Ridge",
    type: "operation",
    tag: "Extreme-altitude operations",
    summary: "The Indian Army and Indian Air Force advanced to secure strategic heights on the Siachen Glacier and Saltoro Ridge. Airlift and helicopter support were critical to moving personnel and sustaining activity in one of the world's most demanding high-altitude environments.",
    keyPoint: "A logistics-intensive, high-altitude operation—not a conventional fixed-duration war. The operational context continues beyond its launch date.",
    sourceLabel: "PIB / Ministry of Defence — IAF in Operation Meghdoot",
    sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2017834&lang=2&noshow=1&reg=48",
    secondaryLabel: "PIB — Operation Meghdoot commemorated",
    secondaryUrl: "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=118215"
  },
  {
    id: "operation-cactus",
    title: "Operation Cactus",
    period: "1988",
    dates: "3–4 Nov 1988 · primary intervention",
    theatre: "Malé & the Maldives",
    type: "operation",
    tag: "Regional response",
    summary: "At the Maldivian government's request, India deployed armed forces in response to a coup attempt. The operation is a distinct example of rapid, joint-service action outside India's mainland; it belongs in a broader military-history archive but is not an India–Pakistan war.",
    keyPoint: "Use diplomatic and institutional records to study the request for assistance, deployment, and regional context.",
    sourceLabel: "MEA — Responding First, Leading Power",
    sourceUrl: "https://www.mea.gov.in/Portal/IndiaArticleAll/636548965437648101_Responding_First_Leading_Pow.pdf",
    secondaryLabel: "PIB — Indian Navy response to Maldives crisis",
    secondaryUrl: "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=112783"
  },
  {
    id: "kargil-1999",
    title: "Kargil War",
    period: "1999",
    dates: "May – 26 Jul 1999",
    theatre: "Kargil, Dras, Batalik & Mushkoh",
    type: "war",
    tag: "Core dossier",
    summary: "The existing deep-dive dossier covers the infiltration, high-altitude battles, recovery of occupied positions, Operation Vijay, Operation Safed Sagar, Operation Talwar, gallantry, diplomacy, and the Kargil Review Committee.",
    keyPoint: "Open the dedicated dossier sections for the full date-by-date timeline, sector profiles, commanders, and source caveats.",
    sourceLabel: "National War Memorial — Operation Vijay",
    sourceUrl: "https://nationalwarmemorial.gov.in/war-depictions/details/8",
    secondaryLabel: "PIB — Ministry of Defence IAF retrospective",
    secondaryUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2033075&lang=2&reg=48"
  }
];

const QUIZ_QUESTIONS = [
  {
    question: "Which name was used for the Indian Army's main ground campaign during the 1999 Kargil War?",
    options: ["Operation Vijay", "Operation Bison", "Operation Cactus", "Operation Grand Slam"],
    answer: 0,
    explain: "Operation Vijay was the Indian ground campaign to clear the Kargil intrusion. The 1961 Goa liberation also used the codename Operation Vijay, so context and year matter.",
    sourceLabel: "National War Memorial — Operation Vijay",
    sourceUrl: "https://nationalwarmemorial.gov.in/war-depictions/details/8",
    topic: "Kargil"
  },
  {
    question: "Which operation name is associated with the Indian Air Force's air campaign during Kargil?",
    options: ["Operation Talwar", "Operation Safed Sagar", "Operation Meghdoot", "Operation Pawan"],
    answer: 1,
    explain: "Operation Safed Sagar is the IAF campaign associated with the Kargil conflict. Operation Talwar refers to the Indian Navy's posture during the same crisis.",
    sourceLabel: "PIB — Ministry of Defence IAF retrospective",
    sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2033075&lang=2&reg=48",
    topic: "Kargil"
  },
  {
    question: "Operation Talwar in 1999 was associated with which service?",
    options: ["Indian Army", "Indian Air Force", "Indian Navy", "Border Security Force"],
    answer: 2,
    explain: "Operation Talwar was the Indian Navy's maritime posture during the Kargil crisis, complementing the ground campaign and air operation.",
    sourceLabel: "Existing Kargil dossier + official background references",
    sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2033075&lang=2&reg=48",
    topic: "Kargil"
  },
  {
    question: "According to the National War Memorial's 1947–48 conflict summary, when were Indian troops flown into Srinagar?",
    options: ["15 August 1947", "27 October 1947", "1 January 1949", "26 January 1950"],
    answer: 1,
    explain: "The memorial summary records the airlift into Srinagar on 27 October 1947, at the beginning of the first India–Pakistan conflict over Jammu & Kashmir.",
    sourceLabel: "National War Memorial — India–Pakistan Conflict, 1947–48",
    sourceUrl: "https://nationalwarmemorial.gov.in/murals/totem_details/1",
    topic: "1947–48"
  },
  {
    question: "Which operation recaptured Zoji La in November 1948?",
    options: ["Operation Polo", "Operation Bison", "Operation Cactus", "Operation Vijay (Kargil)"],
    answer: 1,
    explain: "Operation Bison was launched to recapture Zoji La. The National War Memorial describes the use of Stuart tanks brought in dismantled form and a surprise attack on 1 November 1948.",
    sourceLabel: "National War Memorial — Moments of Military Pride, 1947 to 1962",
    sourceUrl: "https://nationalwarmemorial.gov.in/war-depictions/details/3",
    topic: "1947–48"
  },
  {
    question: "Which operation brought an end to Portuguese colonial rule in Goa in 1961?",
    options: ["Operation Meghdoot", "Operation Trident", "Operation Vijay", "Operation Safed Sagar"],
    answer: 2,
    explain: "Operation Vijay was the name of the 1961 military operation for the liberation of Goa and other Portuguese colonies in India. It is separate from the 1999 Kargil campaign that shared the codename.",
    sourceLabel: "PIB — Official History of Indian Armed Forces",
    sourceUrl: "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=177064",
    topic: "1961"
  },
  {
    question: "Which Indian Air Force retrospective discusses Operation Grand Slam in the Chhamb–Jaurian sector on 1 September 1965?",
    options: ["The 1965 India–Pakistan War retrospective", "The Operation Meghdoot retrospective", "The Kargil 25-year retrospective", "The Goa liberation catalogue"],
    answer: 0,
    explain: "The Ministry of Defence's 2014 IAF retrospective describes the start of Operation Grand Slam and India's air response in the Chhamb–Jaurian sector.",
    sourceLabel: "PIB — Seminar on 1965 India–Pakistan War: Role of IAF",
    sourceUrl: "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=109364",
    topic: "1965"
  },
  {
    question: "Which date is observed as Vijay Diwas for the 1971 war?",
    options: ["26 July", "13 April", "16 December", "4 December"],
    answer: 2,
    explain: "India observes 16 December as Vijay Diwas, marking the 1971 victory and the surrender in Dhaka.",
    sourceLabel: "PIB — 50th anniversary of the 1971 war",
    sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=1765917&lang=2&reg=48",
    topic: "1971"
  },
  {
    question: "Which Indian Navy operation on the night of 4–5 December 1971 struck Pakistani naval targets using missile boats?",
    options: ["Operation Trident", "Operation Talwar", "Operation Cactus", "Operation Pawan"],
    answer: 0,
    explain: "Operation Trident took place on the night of 4–5 December 1971. The Ministry of Defence credits the missile boats with striking Pakistani naval targets and records no Indian casualties in the action.",
    sourceLabel: "PIB — 22 Killer Squadron / Operation Trident",
    sourceUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1778234&lang=2&reg=48",
    topic: "1971"
  },
  {
    question: "Operation Meghdoot, launched on 13 April 1984, was focused on which area?",
    options: ["Goa and Daman", "The Siachen Glacier and Saltoro Ridge", "The Maldives", "Kargil and Dras"],
    answer: 1,
    explain: "Operation Meghdoot was launched to secure strategic heights on the Siachen Glacier and Saltoro Ridge, with airlift and high-altitude sustainment playing key roles.",
    sourceLabel: "PIB — IAF in Operation Meghdoot",
    sourceUrl: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2017834&lang=2&noshow=1&reg=48",
    topic: "1984"
  },
  {
    question: "Operation Cactus in November 1988 took place in response to a coup attempt in which country?",
    options: ["Sri Lanka", "Nepal", "The Maldives", "Bangladesh"],
    answer: 2,
    explain: "India activated Operation Cactus after a request for assistance from the Maldives government during the 1988 coup attempt.",
    sourceLabel: "Ministry of External Affairs — Responding First, Leading Power",
    sourceUrl: "https://www.mea.gov.in/Portal/IndiaArticleAll/636548965437648101_Responding_First_Leading_Pow.pdf",
    topic: "1988"
  },
  {
    question: "Which body was established after the Kargil conflict to review the events that led to the intrusion and recommend security reforms?",
    options: ["States Reorganisation Commission", "Kargil Review Committee", "Sarkaria Commission", "Finance Commission"],
    answer: 1,
    explain: "The Government constituted the Kargil Review Committee after the conflict. Parliament's digital and debate archives catalogue the report and the related action-taken material.",
    sourceLabel: "Sansad eLibrary — Kargil Review Committee papers",
    sourceUrl: "https://elibrary.sansad.in/items/94154a2c-a144-4ab4-a8bc-94c76e834c04",
    topic: "Kargil"
  },
  {
    question: "What did the 4 July 1999 Clinton–Sharif joint statement emphasize in relation to Kargil?",
    options: ["A new military alliance", "Respect for the Line of Control and its restoration", "A change to India's national boundaries", "Immediate entry into a third-party war"],
    answer: 1,
    explain: "The contemporaneous joint statement emphasized the importance of respecting the Line of Control and restoring it, providing primary-source context for the diplomatic endgame.",
    sourceLabel: "White House archive — Joint Statement, 4 July 1999",
    sourceUrl: "https://clintonwhitehouse6.archives.gov/1999/07/1999-07-04-joint-statement-by-president-and-pakistan-prime-minister.html",
    topic: "Kargil"
  },
  {
    question: "The official casualty totals for Kargil can differ across published sources. What is the responsible research approach?",
    options: ["Pick the largest figure without noting the source", "Average the numbers", "Record each source's figure and wording, then compare the scope", "Delete all figures from the historical record"],
    answer: 2,
    explain: "Numbers may describe different scopes or use different counting conventions. The dossier flags this explicitly: retain the source, wording, and scope rather than silently treating the numbers as equivalent.",
    sourceLabel: "National War Memorial — Operation Vijay",
    sourceUrl: "https://nationalwarmemorial.gov.in/war-depictions/details/8",
    topic: "Research skills"
  },
  {
    question: "What does the Indian Wars website's Google research link do?",
    options: ["It runs an invisible live scrape of all websites", "It opens an external Google search; the built-in search covers committed local data", "It guarantees every claim is verified", "It retrieves private files from Google Drive"],
    answer: 1,
    explain: "The current site is static. Its archive search queries data committed to the repository; web-search links open a Google query. Automated ingestion would need a dedicated API or backend and source-validation safeguards.",
    sourceLabel: "Indian Wars project README",
    sourceUrl: "https://github.com/harshiiiit-bh/indian-wars/blob/main/README.md",
    topic: "Research skills"
  }
];
