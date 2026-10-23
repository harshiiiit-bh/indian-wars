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
  },
{
    id: "wwii-indian-army",
    title: "Indian Army in the Second World War",
    period: "1939–1945",
    dates: "1939–1945",
    theatre: "South-East Asia, North Africa, East Africa, Western Asia & Italy",
    type: "war",
    tag: "Pre-independence history",
    summary: "The pre-independence Indian Army expanded into a mass wartime force and served across several theatres. The term here means the British Indian Army of the period, not the post-1947 Republic of India's Army.",
    keyPoint: "A global military history of Indian soldiers, logistics, imperial command, coalition warfare and the transition toward independence.",
    sourceLabel: "Government catalogue of official military histories",
    sourceUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48",
    secondaryLabel: "National Army Museum — Indian Army in the Second World War",
    secondaryUrl: "https://www.nam.ac.uk/explore/indian-army-second-world-war"
  },
  {
    id: "arakan-campaign-1942",
    title: "Arakan Campaign",
    period: "1942–1945",
    dates: "1942–1945",
    theatre: "Arakan coast, Burma (now Myanmar)",
    type: "war",
    tag: "World War II",
    summary: "Indian formations took part in Allied campaigns in the Arakan region, where jungle, monsoon weather, disease and coastal terrain shaped movement and sustainment.",
    keyPoint: "Study adaptation to jungle warfare and the limits imposed by terrain, health and supply—not just the line on a campaign map.",
    sourceLabel: "Government catalogue of official military histories",
    sourceUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48",
    secondaryLabel: "Imperial War Museums — Burma campaign collections",
    secondaryUrl: "https://www.iwm.org.uk/history"
  },
  {
    id: "burma-imphal-kohima-1944",
    title: "Burma Campaign and the Battles of Imphal & Kohima",
    period: "1942–1945",
    dates: "1942–1945; Imphal–Kohima turning point in 1944",
    theatre: "North-East India and Burma",
    type: "war",
    tag: "World War II",
    summary: "Indian Army formations fought in the Allied Burma campaign, including the defensive battles that halted the 1944 Japanese offensive toward Imphal and Kohima.",
    keyPoint: "A major study in mountain roads, air supply, prepared positions, intelligence, coalition command and endurance under isolation.",
    sourceLabel: "Government catalogue of official military histories",
    sourceUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48",
    secondaryLabel: "Commonwealth War Graves Commission — Imphal and Kohima",
    secondaryUrl: "https://www.cwgc.org/"
  },
  {
    id: "east-africa-campaign-1940",
    title: "East African Campaign",
    period: "1940–1941",
    dates: "1940–1941",
    theatre: "Italian East Africa and adjoining territories",
    type: "war",
    tag: "World War II",
    summary: "British Indian Army formations served in the Allied campaign against Italian forces in East Africa, a theatre involving long-distance movement, varied terrain and dispersed supply lines.",
    keyPoint: "Expand the archive beyond the Himalayan and South Asian theatres while distinguishing colonial-era forces from today's Indian Army.",
    sourceLabel: "Government catalogue of official military histories",
    sourceUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48",
    secondaryLabel: "Imperial War Museums — Second World War archive",
    secondaryUrl: "https://www.iwm.org.uk/collections"
  },
  {
    id: "north-africa-campaign-1940",
    title: "North African Campaign",
    period: "1940–1943",
    dates: "1940–1943",
    theatre: "Egypt, Libya and the Western Desert",
    type: "war",
    tag: "World War II",
    summary: "Indian Army formations served in Allied North African operations in a desert environment where maintenance, water, transport, armoured mobility and long supply lines were central constraints.",
    keyPoint: "Read India's military history in the context of a wider coalition war, not only wars fought on today's borders.",
    sourceLabel: "Government catalogue of official military histories",
    sourceUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48",
    secondaryLabel: "Imperial War Museums — North Africa",
    secondaryUrl: "https://www.iwm.org.uk/history"
  },
  {
    id: "italian-campaign-1943",
    title: "Italian Campaign",
    period: "1943–1945",
    dates: "1943–1945",
    theatre: "Italy",
    type: "war",
    tag: "World War II",
    summary: "Indian formations fought in the Allied Italian campaign, including operations through mountainous terrain, river lines and defended urban areas.",
    keyPoint: "Compare mountain movement, engineering, combined arms and coalition logistics with post-independence Indian campaigns.",
    sourceLabel: "Government catalogue of official military histories",
    sourceUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48",
    secondaryLabel: "Commonwealth War Graves Commission — Italy",
    secondaryUrl: "https://www.cwgc.org/"
  },
  {
    id: "rezang-la-1962",
    title: "Battle of Rezang La",
    period: "1962",
    dates: "18 November 1962",
    theatre: "Chushul sector, Ladakh",
    type: "operation",
    tag: "Himalayan frontier",
    summary: "A company of 13 Kumaon defended the Rezang La area during the Sino-Indian War. The battle became a prominent case study of isolated high-altitude defence and extraordinary loss.",
    keyPoint: "Use unit histories and memorial records to study the action while avoiding unsupported exact tactical detail or inflated claims.",
    sourceLabel: "National War Memorial — war depictions",
    sourceUrl: "https://nationalwarmemorial.gov.in/war-depictions",
    secondaryLabel: "Wikimedia Commons — Rezang La memorial image and provenance",
    secondaryUrl: "https://commons.wikimedia.org/wiki/File:Rezang_La.jpg"
  },
  {
    id: "battle-nathu-la-1967",
    title: "Nathu La Clashes",
    period: "1967",
    dates: "September–October 1967",
    theatre: "Nathu La, Sikkim",
    type: "operation",
    tag: "Himalayan frontier",
    summary: "Indian and Chinese forces clashed around Nathu La amid disputed border alignments. Public accounts describe intense exchanges and Indian positions holding in the area.",
    keyPoint: "Use the case to examine border signalling, escalation, field fortification and the difference between contemporary reporting and retrospective narratives.",
    sourceLabel: "Government catalogue of official military histories",
    sourceUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48",
    secondaryLabel: "Public historical record — corroborate dates and casualty figures across accounts",
    secondaryUrl: "https://www.nam.ac.uk/"
  },
  {
    id: "battle-cho-la-1967",
    title: "Cho La Clashes",
    period: "1967",
    dates: "October 1967",
    theatre: "Cho La, Sikkim",
    type: "operation",
    tag: "Himalayan frontier",
    summary: "The Cho La clashes followed the Nathu La fighting during a tense period along the Himalayan frontier. The accessible record is less uniform than for larger conventional wars.",
    keyPoint: "A compact case in frontier escalation and evidentiary discipline: mark gaps and disputed detail instead of forcing false precision.",
    sourceLabel: "Government catalogue of official military histories",
    sourceUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48",
    secondaryLabel: "Public historical reference — cross-check accounts",
    secondaryUrl: "https://www.nam.ac.uk/"
  },
  {
    id: "battle-asal-uttar-1965",
    title: "Battle of Asal Uttar",
    period: "1965",
    dates: "8–10 September 1965",
    theatre: "Khem Karan sector, Punjab",
    type: "operation",
    tag: "India–Pakistan War",
    summary: "The battle was fought near Khem Karan during the 1965 war. The National War Memorial describes Indian resistance and the defeat of a major Pakistani armoured thrust in the area.",
    keyPoint: "A strong armour-and-defence case study, including terrain preparation, weapon coordination and the risk of reducing complex battles to a single heroic anecdote.",
    sourceLabel: "National War Memorial — War Depictions",
    sourceUrl: "https://nationalwarmemorial.gov.in/war-depictions",
    secondaryLabel: "Government catalogue of official military histories",
    secondaryUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48"
  },
  {
    id: "battle-phillora-1965",
    title: "Battle of Phillora",
    period: "1965",
    dates: "10–12 September 1965",
    theatre: "Sialkot sector",
    type: "operation",
    tag: "Armoured warfare",
    summary: "Indian armoured and infantry formations attacked in the Phillora area during the 1965 war. The National War Memorial's account records hard fighting and the withdrawal of Pakistani forces from the immediate area.",
    keyPoint: "Read armoured operations alongside fuel, recovery, route capacity, infantry support and artillery—not as a tank-count contest alone.",
    sourceLabel: "National War Memorial — Battle of Phillora",
    sourceUrl: "https://nationalwarmemorial.gov.in/war-depictions/details/6",
    secondaryLabel: "Government catalogue of official military histories",
    secondaryUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48"
  },
  {
    id: "battle-chawinda-1965",
    title: "Battle of Chawinda",
    period: "1965",
    dates: "September 1965",
    theatre: "Sialkot sector",
    type: "operation",
    tag: "Armoured warfare",
    summary: "Chawinda became a focal point of armoured fighting during the 1965 war. Accounts differ on tactical assessments and losses; the campaign must be read in the context of the wider front and ceasefire.",
    keyPoint: "An opportunity to test claims against primary and official histories, particularly when figures and descriptions of battlefield outcomes conflict.",
    sourceLabel: "Government catalogue of official military histories",
    sourceUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48",
    secondaryLabel: "National War Memorial — War Depictions",
    secondaryUrl: "https://nationalwarmemorial.gov.in/war-depictions"
  },
  {
    id: "battle-basantar-1971",
    title: "Battle of Basantar",
    period: "1971",
    dates: "15–17 December 1971",
    theatre: "Shakargarh Bulge",
    type: "operation",
    tag: "India–Pakistan War",
    summary: "The battle was fought between the Degh and Basantar rivers during the western-front campaign. The National War Memorial describes the capture of Jarpal and Lohal and repeated counterattacks that were repelled.",
    keyPoint: "A combined-arms case involving infantry, armour, minefields, engineers and bridgehead sustainment under pressure.",
    sourceLabel: "National War Memorial — Battles which led to Indian Victory in 1971",
    sourceUrl: "https://nationalwarmemorial.gov.in/war-depictions/details/5",
    secondaryLabel: "Government catalogue of official military histories",
    secondaryUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48"
  },
  {
    id: "battle-chhamb-1971",
    title: "Battle of Chhamb",
    period: "1971",
    dates: "3–8 December 1971 and the subsequent campaign",
    theatre: "Chhamb sector",
    type: "operation",
    tag: "India–Pakistan War",
    summary: "Chhamb was important because control of the area affected approaches toward Akhnoor and a major communication link. The National War Memorial records the opening action on 3 December and later Indian air and artillery involvement.",
    keyPoint: "Study defence in depth, delaying actions, route security and joint coordination without treating an individual source as the full campaign history.",
    sourceLabel: "National War Memorial — Battle of Chhamb",
    sourceUrl: "https://nationalwarmemorial.gov.in/war-depictions/details/5",
    secondaryLabel: "Government catalogue of official military histories",
    secondaryUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48"
  },
  {
    id: "battle-longewala-1971",
    title: "Battle of Longewala",
    period: "1971",
    dates: "4–7 December 1971",
    theatre: "Thar Desert, Rajasthan",
    type: "operation",
    tag: "Desert warfare",
    summary: "A small Indian Army post at Longewala became the site of a major engagement during the 1971 war. The battle is often simplified into a story of air power alone; a balanced account distinguishes the ground defence, communications, terrain and later air action.",
    keyPoint: "Compare service roles and source accounts; don't confuse a popular narrative with a complete operational history.",
    sourceLabel: "Government catalogue of official military histories",
    sourceUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48",
    secondaryLabel: "National War Memorial — 1971 war depictions",
    secondaryUrl: "https://nationalwarmemorial.gov.in/war-depictions"
  },
  {
    id: "indo-china-peacekeeping-1954",
    title: "Indian Army and the Indo-China Peace Mission",
    period: "1954–1975",
    dates: "1954–1975 (mandate and involvement varied by period)",
    theatre: "Vietnam, Laos and Cambodia",
    type: "operation",
    tag: "Peacekeeping & diplomacy",
    summary: "India participated in international supervisory and peace arrangements in Indo-China. The official history catalogue includes an Indian Army peace mission history under Operation Shanti and a related work covering 1954–75.",
    keyPoint: "Military history also includes monitoring, logistics, observation, negotiation and the limits of mandates—not only battlefield combat.",
    sourceLabel: "Government catalogue of official military histories",
    sourceUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48",
    secondaryLabel: "Historical overview",
    secondaryUrl: "https://peacekeeping.un.org/en/past-peacekeeping-operations"
  },
  {
    id: "ipkf-sri-lanka-1987",
    title: "Indian Peace Keeping Force in Sri Lanka",
    period: "1987–1990",
    dates: "1987–1990",
    theatre: "Sri Lanka",
    type: "operation",
    tag: "Overseas deployment",
    summary: "The Indian Peace Keeping Force deployed following the 1987 Indo-Sri Lanka Accord. Its mission evolved amid conflict and political strain; the record includes combat, civil-military challenges, and a contested legacy.",
    keyPoint: "A critical case for studying mandate clarity, local knowledge, political objectives, intelligence and the challenge of translating a peacekeeping label into a feasible mission.",
    sourceLabel: "Government of India — Indo-Sri Lanka Accord",
    sourceUrl: "https://www.mea.gov.in/Portal/ForeignRelation/India-Sri_Lanka_Relations.pdf",
    secondaryLabel: "Government catalogue of official military histories",
    secondaryUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48"
  },
  {
    id: "india-un-peacekeeping",
    title: "India in United Nations Peacekeeping",
    period: "1950s–present",
    dates: "From 1950s onward; individual missions have separate mandates and dates",
    theatre: "Africa, Europe, Middle East and Asia",
    type: "operation",
    tag: "Peacekeeping",
    summary: "Indian military and medical personnel have served in UN missions across multiple continents. Different deployments had different command arrangements and should not be merged into one continuous Army operation.",
    keyPoint: "Study mandate, civilian protection, medical work, engineering, host-state consent and multinational command structures.",
    sourceLabel: "United Nations Peacekeeping — India",
    sourceUrl: "https://peacekeeping.un.org/en/india",
    secondaryLabel: "United Nations — Where we operate",
    secondaryUrl: "https://peacekeeping.un.org/en/where-we-operate/"
  },
  {
    id: "operation-khukri-2000",
    title: "Operation Khukri",
    period: "2000",
    dates: "June–July 2000",
    theatre: "Sierra Leone",
    type: "operation",
    tag: "UN peacekeeping",
    summary: "Indian peacekeepers participated in Operation Khukri to extract a surrounded contingent during the Sierra Leone conflict under the UN mission. The operation became a prominent example of a multinational peacekeeping force under pressure.",
    keyPoint: "Explore the relationship between UN mandate, force protection, coordination with neighbouring contingents and the risks of a rescue mission.",
    sourceLabel: "UN Peacekeeping — India",
    sourceUrl: "https://peacekeeping.un.org/en/india",
    secondaryLabel: "Government catalogue of official military histories",
    secondaryUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48"
  },
  {
    id: "operation-sarp-vinash-2003",
    title: "Operation Sarp Vinash",
    period: "2003",
    dates: "April–May 2003",
    theatre: "Hill Kaka, Poonch region, Jammu & Kashmir",
    type: "operation",
    tag: "Counter-insurgency",
    summary: "A major counter-insurgency operation in the Hill Kaka area aimed at dismantling militant sanctuaries. Public accounts vary in their detail and terminology, so this card stays at the broad, publicly described campaign level.",
    keyPoint: "Study intelligence preparation, terrain, civilian considerations and after-action evaluation without assuming all tactical details are public.",
    sourceLabel: "Public historical accounts — verify against official records",
    sourceUrl: "https://www.pib.gov.in/",
    secondaryLabel: "Government catalogue of official military histories",
    secondaryUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48"
  },
  {
    id: "operation-all-clear-2003",
    title: "Operation All Clear",
    period: "2003",
    dates: "December 2003",
    theatre: "Southern Bhutan",
    type: "operation",
    tag: "Cross-border cooperation",
    summary: "An operation led by Bhutan against militant camps, with reported Indian Army support and coordination. It must be labelled Bhutan-led: describing it as an exclusively Indian Army campaign would misstate command responsibility.",
    keyPoint: "A case in partner-force coordination, national sovereignty, border security and the need to describe command roles accurately.",
    sourceLabel: "Government of India — regional security context",
    sourceUrl: "https://www.mea.gov.in/",
    secondaryLabel: "Public historical record — cross-check command attribution",
    secondaryUrl: "https://www.pib.gov.in/"
  },
  {
    id: "operation-rahat-yemen-2015",
    title: "Operation Raahat — Yemen Evacuation",
    period: "2015",
    dates: "March–April 2015",
    theatre: "Yemen and regional transit points",
    type: "operation",
    tag: "Evacuation · whole of government",
    summary: "India organised a large evacuation from Yemen during the conflict. The operation was a whole-of-government and multi-service effort, with major roles for the Navy, Air Force, diplomats and civilian agencies; it is not presented here as Army-led.",
    keyPoint: "Study consular coordination, humanitarian access, multi-agency command and the distinction between military operations and citizen evacuation.",
    sourceLabel: "Ministry of External Affairs — evacuation guidance and releases",
    sourceUrl: "https://www.mea.gov.in/press-releases.htm",
    secondaryLabel: "Government of India — Operation Raahat",
    secondaryUrl: "https://www.pib.gov.in/"
  },
  {
    id: "operation-safe-homecoming-2011",
    title: "Operation Safe Homecoming",
    period: "2011",
    dates: "February–March 2011",
    theatre: "Libya to India and transit hubs",
    type: "operation",
    tag: "Evacuation · whole of government",
    summary: "India evacuated citizens during the 2011 crisis in Libya, using a mix of air and sea movements and diplomatic coordination. The entry is included to show the wider security and relief ecosystem; it was not an Army-only campaign.",
    keyPoint: "Study risk assessment, transport capacity, consular lists and the complexity of evacuations during rapidly changing crises.",
    sourceLabel: "Ministry of External Affairs — press release archive",
    sourceUrl: "https://www.mea.gov.in/press-releases.htm",
    secondaryLabel: "Government of India — official history catalogue",
    secondaryUrl: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48"
  },
  {
    id: "operation-sukoon-2006",
    title: "Operation Sukoon",
    period: "2006",
    dates: "July–August 2006",
    theatre: "Lebanon and evacuation sea routes",
    type: "operation",
    tag: "Evacuation · Navy-led",
    summary: "During the 2006 Lebanon conflict, India evacuated nationals through a maritime effort commonly known as Operation Sukoon. It belongs in a wider Indian military history atlas but is labelled Navy-led, not Army-led.",
    keyPoint: "Compare how naval platforms and diplomatic arrangements support citizens beyond India's land borders.",
    sourceLabel: "Ministry of External Affairs — press release archive",
    sourceUrl: "https://www.mea.gov.in/press-releases.htm",
    secondaryLabel: "Public historical record",
    secondaryUrl: "https://www.pib.gov.in/"
  },
  {
    id: "operation-sankat-mochan-2016",
    title: "Operation Sankat Mochan",
    period: "2016",
    dates: "July 2016",
    theatre: "South Sudan",
    type: "operation",
    tag: "Evacuation · Air Force-led",
    summary: "India evacuated citizens from South Sudan during fighting in 2016. The mission was mainly an Air Force and government evacuation effort; it is included as contextual joint-services history and not as an Army-led operation.",
    keyPoint: "Learn to distinguish the service that owns the principal transport task from the wider national operation and its diplomatic support.",
    sourceLabel: "Ministry of External Affairs — press releases",
    sourceUrl: "https://www.mea.gov.in/press-releases.htm",
    secondaryLabel: "UN Mission in South Sudan — background",
    secondaryUrl: "https://unmiss.unmissions.org/"
  },
  {
    id: "unifil-india-1978",
    title: "Indian Contingents in UNIFIL",
    period: "1998–present",
    dates: "India's contingent deployed from 1998; current mandate and force composition change over time",
    theatre: "Southern Lebanon",
    type: "operation",
    tag: "UN peacekeeping",
    summary: "Indian personnel have served with UNIFIL under a UN Security Council mandate in southern Lebanon. Mission mandates, deployments and national contingent numbers change over time, so this is a broad institutional overview.",
    keyPoint: "Study impartiality, monitoring, civilian protection and multinational coordination without confusing the UN mission with a unilateral Indian campaign.",
    sourceLabel: "United Nations Peacekeeping — where we operate",
    sourceUrl: "https://peacekeeping.un.org/en/where-we-operate/",
    secondaryLabel: "United Nations Peacekeeping — India",
    secondaryUrl: "https://peacekeeping.un.org/en/india"
  },
  {
    id: "unmiss-india-2011",
    title: "Indian Contingents in UNMISS",
    period: "2011–present",
    dates: "UNMISS established in 2011; India's contingent roles vary by rotation",
    theatre: "South Sudan",
    type: "operation",
    tag: "UN peacekeeping",
    summary: "Indian military and medical personnel have served in the United Nations Mission in South Sudan, including engineering, protection and humanitarian support tasks described in official UN material.",
    keyPoint: "A modern peacekeeping case involving protection of civilians, mandate limits, engineering, medical support and cooperation with local institutions.",
    sourceLabel: "United Nations Peacekeeping — India",
    sourceUrl: "https://peacekeeping.un.org/en/india",
    secondaryLabel: "UN Mission in South Sudan",
    secondaryUrl: "https://unmiss.unmissions.org/"
  },
  {
    id: "operation-calm-down-2016",
    title: "Operation Calm Down",
    period: "2016",
    dates: "July–August 2016",
    theatre: "Kashmir Valley",
    type: "internal-security",
    tag: "Domestic security context",
    summary: "Public accounts use the name Operation Calm Down for an Army deployment during unrest in Kashmir in 2016. The entry stays at the strategic and public-record level; individual incidents and responsibility require case-specific sourcing.",
    keyPoint: "A case for civil-military boundaries, public order, civilian harm, humanitarian law and careful use of evidence in a contested security environment.",
    sourceLabel: "Public historical accounts — further archival verification needed",
    sourceUrl: "https://www.pib.gov.in/",
    secondaryLabel: "Government records and parliamentary material",
    secondaryUrl: "https://sansad.in/"
  },
  {
    id: "operation-snow-leopard-2020",
    title: "Operation Snow Leopard / Eastern Ladakh Standoff",
    period: "2020–present",
    dates: "2020 onward; public detail evolves",
    theatre: "Eastern Ladakh",
    type: "stabilisation",
    tag: "Border standoff",
    summary: "Operation Snow Leopard is publicly associated with India's military response to the 2020 eastern Ladakh crisis. This dossier confines itself to publicly disclosed, high-level context and does not include tactical deployments, vulnerabilities or live operational details.",
    keyPoint: "Study deterrence, crisis management, logistics, diplomacy and de-escalation based on public statements, not speculation about current force posture.",
    sourceLabel: "Ministry of Defence / PIB public releases",
    sourceUrl: "https://www.pib.gov.in/",
    secondaryLabel: "Ministry of External Affairs — India–China relations",
    secondaryUrl: "https://www.mea.gov.in/india-china-relations.htm"
  }
];


/* Open-source operation dossiers.
   Chronology contains verified public milestones; it is deliberately not a fabricated daily log.
   "Friction" distinguishes documented constraints from analyst questions and uncertain records. */
const OPERATIONS_ATLAS = [
  {
    id:"polo-1948", title:"Operation Polo", period:"13–18 Sep 1948", type:"combat", service:"Indian Army-led · joint support",
    place:"Hyderabad State, India", lat:17.3850, lng:78.4867, scope:"Inside India · integration of Hyderabad",
    summary:"A five-day military campaign that ended the Nizam's independent status and brought Hyderabad into the Indian Union. The National War Memorial describes a plan with thrusts from Vijayawada in the east and Solapur in the west, supported by infantry, armour, artillery and engineers.",
    plan:"The official memorial summary names the Goddard Plan and two principal approaches. East and west thrusts reduced reliance on one line of advance; combined-arms task forces included infantry, armour, artillery, engineers and support elements.",
    execution:"The operation began on 13 September. The accessible official summary records Hyderabad forces surrendering on 18 September; it does not provide a verified daily unit diary for every intervening date. This atlas therefore presents the dated milestones and does not invent a battle for each day.",
    friction:"The five-day campaign's tactical sequence, civilian experience, casualties and political context need to be studied from the full official history and multiple accounts. A short memorial summary alone cannot establish every operational mistake or all consequences.",
    lessons:"Operational planning: multiple approaches can reduce dependence on one corridor. Joint functions: armour, engineers, artillery, infantry and civil administration need transition plans. Historical judgement: separate the operational chronology from contested political and humanitarian interpretations.",
    chronology:[
      {date:"13 Sep 1948",title:"Operation begins",detail:"The National War Memorial records the start date and describes eastern and western thrusts."},
      {date:"14–17 Sep 1948",title:"Campaign continues",detail:"The public memorial summary does not itemise each day's movements. Consult the full official history before assigning date-specific tactical events."},
      {date:"18 Sep 1948",title:"Surrender recorded",detail:"The same official account records Hyderabad forces surrendering and the operation terminating."}
    ],
    image:{src:"https://upload.wikimedia.org/wikipedia/commons/f/f0/OperationPolo1948-Tanks_People.jpg",alt:"Archival black-and-white photograph of Indian Army tanks during Operation Polo",caption:"Civilians view Indian Army tanks rolling into Hyderabad, September 1948.",credit:"Unknown author · Public Domain Mark on Wikimedia Commons",page:"https://commons.wikimedia.org/wiki/File:OperationPolo1948-Tanks_People.jpg",license:"Public domain status asserted by Wikimedia Commons (verify jurisdictional terms)."},
    sources:[
      {title:"National War Memorial — Capture of Hyderabad",url:"https://nationalwarmemorial.gov.in/war-depictions/details/3",kind:"Official memorial account"},
      {title:"Official History of Indian Armed Forces — PIB",url:"https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=177064",kind:"Government history catalogue"}
    ]
  },
  {
    id:"bison-1948",title:"Operation Bison",period:"1 Nov 1948",type:"combat",service:"Indian Army",
    place:"Zoji La Pass, Ladakh",lat:34.28,lng:75.43,scope:"Inside India · mountain warfare",
    summary:"The operation to recapture Zoji La, a critical pass on the route toward Leh, after it fell to Pakistani raiders in 1948. The National War Memorial documents tanks being dismantled for transport and engineers improving the route before the surprise attack.",
    plan:"The official account records a logistics-and-engineering preparation: Stuart Mk-V light tanks were moved dismantled through Srinagar to Baltal; Madras Sappers improved the mule track toward Ghumri to take the armour.",
    execution:"On 1 November 1948, 77 Para Brigade, supported by armour and infantry including 3 Jat and 9 Jat, attacked and recaptured the pass, pushing Pakistani troops back toward Matayan according to the memorial account.",
    friction:"The key problem documented in the account was terrain and route capacity: a track designed for pack animals had to support armoured vehicles. Detailed unit-level losses, timings, and every decision are not set out in the short public memorial text.",
    lessons:"Mobility may depend as much on engineers, route preparation and equipment movement as on the combat platform itself. Surprise was coupled with a physical capability that the opponent may not have expected on that terrain. Use the full campaign history before presenting a single-cause explanation.",
    chronology:[
      {date:"Before 1 Nov 1948",title:"Route and equipment preparation",detail:"Armour was transported dismantled to Baltal while engineers improved the route toward Ghumri."},
      {date:"1 Nov 1948",title:"Surprise attack and recapture",detail:"77 Para Brigade, armour, 3 Jat and 9 Jat took Zoji La and pushed opposing troops toward Matayan, as described by the memorial."}
    ],
    image:{src:"https://upload.wikimedia.org/wikipedia/commons/4/49/Siachen_warriors.jpg",alt:"Indian troops wearing high-altitude winter clothing in the Himalayas",caption:"High-altitude soldiering visual reference; this photograph is from 2023 and is not a photograph of Operation Bison.",credit:"Arshsangh · CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:Siachen_warriors.jpg",license:"Creative Commons Attribution-ShareAlike 4.0; attribution required."},
    sources:[
      {title:"National War Memorial — Battle of Zoji La, 1948",url:"https://nationalwarmemorial.gov.in/war-depictions/details/3",kind:"Official memorial account"},
      {title:"Official History of Indian Armed Forces — PIB",url:"https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=177064",kind:"Government history catalogue"}
    ]
  },
  {
    id:"goa-vijay-1961",title:"Operation Vijay — Goa Liberation",period:"17–19 Dec 1961",type:"combat",service:"Indian Armed Forces · Army-led land campaign",
    place:"Goa, Daman and Diu",lat:15.2993,lng:74.1240,scope:"Inside India · end of Portuguese rule",
    summary:"A tri-service military operation that ended Portuguese colonial rule in Goa, Daman and Diu. The same codename was later used for the Indian Army's 1999 Kargil ground campaign; the two events are separate.",
    plan:"The official memorial says the campaign included land, air and sea action and names 17 Infantry Division and 50 Parachute Brigade with Navy and Air Force support. A retrospective in the US diplomatic archive records Indian troop movements beginning on the night of 17–18 December.",
    execution:"The official memorial dates liberation to 19 December 1961. The Nehru Archive contains a 1962 note on the transition from military to civil administration; the US State Department archive records international diplomatic reactions as well as the surrender.",
    friction:"This was not only a battlefield problem: diplomatic legitimacy, civilians, the transition to administration, and international reaction form part of the record. Contemporary governments disagreed over the use of force, so the archive should present those positions with attribution.",
    lessons:"A campaign's success criteria include the political end-state and the handover to civil administration, not merely reaching objectives. Tri-service cooperation and clear transition responsibilities are essential subjects for study; avoid treating contemporary diplomatic criticism as if it were an uncontested judgement.",
    chronology:[
      {date:"11 Dec 1961",title:"Army advance orders reported",detail:"A published historical account records orders for 17 Infantry Division and attached troops to advance toward Panjim and Marmugao."},
      {date:"17–18 Dec 1961",title:"Military action begins",detail:"The US State Department's historical record places troop movements at midnight on 17–18 December."},
      {date:"18 Dec 1961",title:"Main land thrusts",detail:"The National War Memorial describes northern and eastern land thrusts supported by the other services."},
      {date:"19 Dec 1961",title:"Portuguese surrender",detail:"Portuguese forces surrendered in Goa, Daman and Diu, according to the US diplomatic archive and the memorial."}
    ],
    sources:[
      {title:"National War Memorial — Liberation of Goa",url:"https://nationalwarmemorial.gov.in/war-depictions/details/3",kind:"Official memorial account"},
      {title:"US Office of the Historian — Goa, December 1961",url:"https://history.state.gov/historicaldocuments/frus1961-63v19/d76",kind:"Contemporaneous diplomatic archive"},
      {title:"Nehru Archive — Military to civil administration in Goa",url:"https://nehruarchive.in/documents/g-k-handoo-to-k-p-candeth-military-to-civil-administration-in-goa-11-february-1962-6j2on",kind:"Archival document"}
    ]
  },
  {
    id:"blue-star-1984",title:"Operation Blue Star",period:"5–7 Jun 1984 (main operation)",type:"internal-security",service:"Indian Army · internal security",
    place:"Amritsar, Punjab",lat:31.6340,lng:74.8730,scope:"Inside India · operation at a major religious site",
    summary:"A highly consequential and contested military operation conducted at the Harmandir Sahib (Golden Temple) complex in Amritsar in June 1984. The main operation is described in a UK government historical review as taking place from 5 to 7 June. It must be studied alongside the religious, civilian, political and long-term consequences.",
    plan:"A UK Cabinet Secretary review published in 2014 says planning responsibilities and the concept changed between a British military adviser's visit in February and the operation in June. The review describes the final assault as a ground assault without surprise or a helicopter-borne element; the Indian commander publicly disputed that British advice had helped plan or execute the operation. The differences should be read as attributed retrospective accounts.",
    execution:"The UK government record places the operation from 5 to 7 June 1984. A historical photograph held on Wikimedia Commons is captioned as Indian Army 1 Para (SF) during the operation on 8 June; the image is credited and labelled as archival evidence rather than used as a complete narrative.",
    friction:"The record is contested. Do not collapse civilian deaths, military casualties, religious-site damage, intelligence and planning criticism into one supposedly settled account. The UK review is a specific retrospective about UK advice and the Indian operation, not a complete independent inquiry into every aspect.",
    lessons:"Commanders must account for civilian protection, religious and cultural significance, intelligence confidence, the political mandate, contingency options, and consequences after the assault. Where outside advice and command accounts conflict, state who made each claim. A 'mistakes' section should be evidence-based, not a verdict inferred from outcome alone.",
    chronology:[
      {date:"Feb 1984",title:"Earlier advisory visit",detail:"The later UK Cabinet Secretary review says an adviser visited in February and the Indian planning concept subsequently changed. This is a retrospective account, not a full Indian planning file."},
      {date:"5 Jun 1984",title:"Main operation begins",detail:"The UK government review dates the Indian operation to 5–7 June."},
      {date:"6 Jun 1984",title:"Assault continues",detail:"The operation was a ground assault at a major religious complex. Exact sequences and casualty totals vary among published accounts."},
      {date:"7 Jun 1984",title:"End of the period stated in the UK review",detail:"The review's stated 5–7 June period describes the military operation it assessed; wider unrest and aftermath continued beyond those dates."}
    ],
    image:{src:"https://upload.wikimedia.org/wikipedia/commons/5/55/Operation_Blue_Star.jpg",alt:"Indian Army 1 Para Special Forces pictured during Operation Blue Star",caption:"Archive photo captioned “1 Para (SF) during Operation Blue Star”, dated 8 June 1984.",credit:"Indian Army · Ministry of Defence, Government of India",page:"https://commons.wikimedia.org/wiki/File:Operation_Blue_Star.jpg",license:"Government Open Data License — India as recorded on Commons; this particular Commons entry notes that licence validity has not been reviewed by an administrator."},
    sources:[
      {title:"UK Government — Statement on the Indian operation at Sri Harmandir Sahib in 1984",url:"https://www.gov.uk/government/speeches/statement-on-the-indian-operation-at-sri-harmandir-sahib-in-1984",kind:"Government historical review"},
      {title:"Wikimedia Commons — Operation Blue Star photograph and licence notes",url:"https://commons.wikimedia.org/wiki/File:Operation_Blue_Star.jpg",kind:"Image provenance"}
    ]
  },
  {
    id:"meghdoot-1984",title:"Operation Meghdoot",period:"Launched 13 Apr 1984 · continuing context",type:"combat",service:"Indian Army + Indian Air Force",
    place:"Siachen Glacier / Saltoro Ridge",lat:35.40,lng:77.20,scope:"Inside India · extreme-altitude deployment",
    summary:"A continuing high-altitude operation to secure strategically important heights on the Siachen Glacier and Saltoro Ridge. The Ministry of Defence describes the 13 April 1984 launch as a combined Army–Air Force effort, with airlift placing soldiers on glacial heights.",
    plan:"Public Ministry of Defence material links the decision to concern about the strategic status of the uncharted glacier and information suggesting a possible opposing move. Air mobility, acclimatisation, equipment, routes, weather and continuous resupply were central to sustaining forces at altitude.",
    execution:"The operation began on 13 April 1984. In a later action on the glacier, the National War Memorial records an assault on the Quaid-e-Azam post from 23 to 26 June 1987 under extreme cold and blizzards; the post was later renamed Bana Top. This is a later episode in the continuing Siachen deployment, not the start of Meghdoot.",
    friction:"Official public summaries emphasise the natural environment and sustainment burden but do not provide a complete, daily operational log. Weather, altitude sickness, evacuation limits, equipment reliability and the cost of resupply are appropriate analytical dimensions; specific incident claims require a source.",
    lessons:"Terrain is a persistent logistics system, not just a tactical obstacle. Endurance requires acclimatisation, medical evacuation, weather windows, redundant supply methods and engineering. For a continuing deployment, distinguish the launch date from later battles and long-term costs.",
    chronology:[
      {date:"Oct 1978",title:"Early helicopter presence",detail:"The Ministry of Defence says an IAF Chetak first landed on the glacier in October 1978."},
      {date:"13 Apr 1984",title:"Operation launches",detail:"The Army and Air Force move to secure strategic heights; IAF airlift is part of the plan."},
      {date:"23–26 Jun 1987",title:"Assault on Quaid-e-Azam post",detail:"The National War Memorial records a three-day-and-night high-altitude assault ending on 26 June; the post was later named Bana Top."},
      {date:"Present-day historical context",title:"Long-duration sustainment",detail:"The operation continues beyond its initial seizure of heights; long-term resupply, medicine, acclimatisation and casualty evacuation shape the record."}
    ],
    image:{src:"https://upload.wikimedia.org/wikipedia/commons/4/49/Siachen_warriors.jpg",alt:"Indian soldiers in white high-altitude clothing in the Himalayas",caption:"Indian troops at Siachen, 2023; a modern image of the environment, not a 1984 combat photograph.",credit:"Arshsangh · CC BY-SA 4.0",page:"https://commons.wikimedia.org/wiki/File:Siachen_warriors.jpg",license:"Creative Commons Attribution-ShareAlike 4.0 International."},
    sources:[
      {title:"PIB / Ministry of Defence — IAF in Operation Meghdoot",url:"https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=2017834&lang=2&reg=48",kind:"Official operation retrospective"},
      {title:"National War Memorial — Operation Meghdoot / Bana Top",url:"https://nationalwarmemorial.gov.in/murals/details/13",kind:"Official memorial account"},
      {title:"Wikimedia Commons — Siachen warriors, licence details",url:"https://commons.wikimedia.org/wiki/File:Siachen_warriors.jpg",kind:"Image provenance"}
    ]
  },
  {
    id:"pawan-1987",title:"Operation Pawan / IPKF in Sri Lanka",period:"1987–1990",type:"peacekeeping",service:"Indian Peace Keeping Force · Army-heavy deployment",
    place:"Jaffna and northern/eastern Sri Lanka",lat:9.6615,lng:80.0255,scope:"Outside India · peace accord and subsequent fighting",
    summary:"The Indian Peace Keeping Force deployment followed the July 1987 Indo–Sri Lanka Accord. The mission's original peacekeeping/disarmament context changed after fighting with the LTTE; Operation Pawan is most closely associated with the attempt to secure Jaffna in October 1987.",
    plan:"The accord created a diplomatic and political objective, but an operation on the ground depended on reliable intelligence, a shared understanding of the mandate, local consent, inter-agency coordination and a clear plan for what to do if key actors refused to disarm.",
    execution:"Public retrospectives describe a night heliborne action near Jaffna University on 11 October 1987 that met heavy resistance and suffered serious losses, followed by protracted fighting to secure Jaffna and a much longer IPKF campaign. The mission concluded with withdrawal in 1990. The timeline here keeps major milestones and does not simulate a daily war diary.",
    friction:"The changing relationship between peacekeeping and combat, intelligence and local knowledge, communications across dispersed units, and the difficulty of defining an achievable end-state appear repeatedly in historical assessments. Exact narratives of the first Jaffna actions differ across participants and later accounts.",
    lessons:"A peace agreement is not the same as operational consent. A peacekeeping force needs a clearly understood mandate, robust contingency plans, accurate urban intelligence, coordination between air and ground elements, casualty evacuation and a politically achievable exit condition. Attribute retrospective blame rather than presenting one account as complete.",
    chronology:[
      {date:"29 Jul 1987",title:"Indo–Sri Lanka Accord",detail:"The deployment's political framework was created by the bilateral accord."},
      {date:"11–12 Oct 1987",title:"Jaffna University action",detail:"Secondary historical accounts describe a heliborne move encountering heavy resistance; the episode is widely discussed as an early operational shock."},
      {date:"Oct 1987 onward",title:"Campaign expands",detail:"Fighting continued as the IPKF moved from attempted disarmament into a sustained conflict with the LTTE."},
      {date:"1990",title:"IPKF withdrawal",detail:"The Indian deployment ended in 1990; its aims, costs and conduct remain subjects of historical debate."}
    ],
    sources:[
      {title:"Operation Pawan — detailed retrospective",url:"https://www.moneycontrol.com/defence/operation-pawan-1987-90-how-the-ipkf-learnt-the-hard-way-to-fight-the-ltte-article-13781472.html",kind:"Secondary military-history analysis"},
      {title:"Official History of Indian Armed Forces — PIB catalogue",url:"https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=177064",kind:"Government history catalogue"}
    ]
  },
  {
    id:"cactus-1988",title:"Operation Cactus",period:"3–4 Nov 1988",type:"joint",service:"Indian Army airborne forces · joint support",
    place:"Malé, Maldives",lat:4.1755,lng:73.5093,scope:"Outside India · response to coup attempt",
    summary:"India responded to a request for assistance from the Maldives government during a coup attempt in November 1988. The operation involved a rapid long-range response, securing access to Malé, protecting the government and preventing the coup group from consolidating power.",
    plan:"The response depended on moving troops rapidly over a long distance, securing an airfield, coordinating the arriving force with the Maldivian government and maintaining a route to recover or intercept fleeing coup participants.",
    execution:"The coup attempt and Indian response unfolded on 3–4 November. Public historical accounts describe Indian airborne forces arriving at Malé, securing key sites and the elected government; fleeing participants were later intercepted at sea. This account sticks to public milestones rather than reproducing a tactical plan.",
    friction:"Rapid response across distance creates common coordination risks: intelligence uncertainty, navigation and landing arrangements, time pressure, unfamiliar terrain, host-government liaison and a plan for maritime escape. Public accounts do not reveal every internal decision log.",
    lessons:"Strategic lift, rehearsed joint coordination and a clear host-nation request can shorten reaction time. Securing initial access points is not the same as completing the mission: information sharing, civilian protection, and coordination with maritime forces remain important.",
    chronology:[
      {date:"3 Nov 1988",title:"Coup attempt and request for help",detail:"The Maldives government sought Indian assistance as armed insurgents attempted to seize control."},
      {date:"Night of 3–4 Nov 1988",title:"Rapid deployment",detail:"Indian airborne forces reached Malé and secured key locations, according to public historical accounts."},
      {date:"4 Nov 1988",title:"Government restored; escape route pursued",detail:"The coup attempt failed; public accounts describe fleeing participants being intercepted by Indian naval forces."}
    ],
    sources:[
      {title:"MEA — Responding First, Leading Power",url:"https://www.mea.gov.in/Portal/IndiaArticleAll/636548965437648101_Responding_First_Leading_Pow.pdf",kind:"Government policy publication"},
      {title:"Indian Express — Operation Cactus history",url:"https://indianexpress.com/article/research/operation-cactus-how-india-helped-maldives-end-a-coup-backed-by-lankan-militants-7605322/",kind:"Secondary historical research"}
    ]
  },
  {
    id:"bajrang-1990",title:"Operation Bajrang",period:"Nov 1990 – Apr 1991",type:"internal-security",service:"Indian Army",
    place:"Assam, India",lat:26.1445,lng:91.7362,scope:"Inside India · counter-insurgency",
    summary:"A major Army operation against ULFA during the period of serious insurgent violence and President's Rule in Assam. Secondary studies and US government human-rights reporting describe the operation as beginning in late 1990 and being halted in April 1991 ahead of elections.",
    plan:"The central problem was restoring security while operating under civilian and political authority. Planning has to include intelligence quality, protection of civilians, detention and search procedures, information flow, and coordination with local police and administration.",
    execution:"Public accounts place the beginning in late November 1990 and the halt in April 1991. The operation was followed by a further Army campaign, Operation Rhino, in September 1991 as ULFA activity resumed.",
    friction:"Counter-insurgency histories document repeated cycles of operations, arrests, surrenders and renewed insurgent activity. Counts vary by report and time period. The existence of an operation should not be taken as proof that political, social and policing problems were resolved.",
    lessons:"Security effects can be temporary unless joined to credible local governance, legal accountability, intelligence validation and a political path out of conflict. Reported arrests and weapons recovered are outputs, not by themselves evidence of lasting strategic resolution.",
    chronology:[
      {date:"28 Nov 1990",title:"Army operation begins",detail:"Public histories place the opening of Operation Bajrang in late November 1990 after the imposition of President's Rule."},
      {date:"Apr 1991",title:"Operation halted",detail:"A US government human-rights report and secondary histories state the operation was called off in April 1991 ahead of elections."},
      {date:"Jun–Sep 1991",title:"Insurgency resumes; new operation follows",detail:"The subsequent political and security context led to renewed Army operations under Operation Rhino."}
    ],
    sources:[
      {title:"US Department of State — Country Report on Human Rights Practices, 1991",url:"https://www.ecoi.net/en/document/1140831.html",kind:"Government human-rights report"},
      {title:"South Asia Terrorism Portal — Assam backgrounder",url:"https://satp.org/satporgtp/countries/india/states/assam/backgrounder/index.html",kind:"Secondary security history"}
    ]
  },
  {
    id:"rhino-1991",title:"Operation Rhino",period:"Launched 15 Sep 1991 · early phase through 1992",type:"internal-security",service:"Indian Army · in aid of civil authority",
    place:"Assam, India",lat:26.1445,lng:91.7362,scope:"Inside India · counter-insurgency",
    summary:"Operation Rhino was launched after the Army was reinducted into Assam in September 1991. The Ministry of Home Affairs' 1991–92 report records arrests, weapons seizures and a unilateral ULFA ceasefire announcement in December 1991; Army operations were suspended in January 1992 as amnesty and surrender processes were pursued.",
    plan:"The publicly documented campaign involved Army action in aid of civil authority. Its full plan and daily unit logs are not reproduced here; the analysis focuses on dated policy and campaign milestones from the official Home Affairs report.",
    execution:"The Home Affairs report states that by 31 December 1991 security forces had apprehended activists, seized weapons and recovered funds; it records ULFA announcing a unilateral ceasefire on 17 December and release of remaining hostages. Secondary accounts describe suspension of Army operations in January 1992.",
    friction:"The public annual report records measured enforcement outputs, but repeated insurgent activity and the subsequent political process show why metrics must be separated from durable outcomes. Arrest and seizure figures are government-reported statistics for a specified period, not an independent assessment of overall success.",
    lessons:"Measure the security environment over time, not only the first campaign's activity. Pair enforcement with lawful custody, civilian safety, reliable local intelligence, negotiation channels and a defined transition back to civil administration.",
    chronology:[
      {date:"15 Sep 1991",title:"Operation Rhino launched",detail:"The Ministry of Home Affairs records the Army's reinduction and launch in September 1991."},
      {date:"17 Dec 1991",title:"ULFA ceasefire announcement",detail:"The Home Affairs report records a unilateral ceasefire announcement and release of the remaining hostages on that date."},
      {date:"31 Dec 1991",title:"First-phase figures published",detail:"The MHA report gives cumulative arrests and seizures through the end of December; figures are quoted only within that scope."},
      {date:"Jan 1992",title:"Operations suspended",detail:"Secondary histories describe an amnesty and surrender phase following suspension of Army operations."}
    ],
    sources:[
      {title:"Ministry of Home Affairs — Annual Report 1991–92",url:"https://www.mha.gov.in/sites/default/files/REPORT_1991_92_12022021.pdf",kind:"Government annual report"},
      {title:"South Asia Terrorism Portal — Assam backgrounder",url:"https://satp.org/satporgtp/countries/india/states/assam/backgrounder/index.html",kind:"Secondary security history"}
    ]
  },
  {
    id:"rakshak",title:"Operation Rakshak",period:"1990s onward · broad campaign label",type:"internal-security",service:"Indian Army and attached security units",
    place:"Jammu & Kashmir, India",lat:34.0837,lng:74.7973,scope:"Inside India · long-running counter-insurgency context",
    summary:"Operation Rakshak is used in public official material for Army activity in Jammu & Kashmir. The archive treats it as a broad campaign context rather than one short, date-bounded battle. Current or unit-level details are intentionally not presented as a tactical log.",
    plan:"At this level of public detail, the appropriate analytic lens is the relationship between border security, intelligence quality, inter-agency coordination, civilian protection, law and political conditions. Particular missions need their own source-backed records.",
    execution:"Official award citations and releases refer to units operating under the Operation Rakshak umbrella. For example, a 2018 Ministry of Defence release describes a 2017 counter-insurgency action in Bandipora involving an IAF Garud detachment attached to 13 Rashtriya Rifles; this is one episode, not a full chronology of the campaign.",
    friction:"This is a continuing and broad operational label. There is no complete public daily chronology in this dataset, and publishing a guessed log would be misleading. Individual actions and claims should be tied to dated official releases or independent reporting.",
    lessons:"For long-running security deployments, separate verified incidents from the overall campaign label. Track lawful conduct, civilian harm, intelligence provenance, coordination, and political outcomes alongside tactical results.",
    chronology:[
      {date:"1990s onward",title:"Broad operational context",detail:"Public sources use the name for long-running Army activity in Jammu & Kashmir; the scope of the umbrella varies by source."},
      {date:"18 Nov 2017",title:"One cited joint action",detail:"A 2018 PIB release describes an action in Bandipora involving an IAF Garud detachment attached to 13 Rashtriya Rifles; it is a specific episode, not a full campaign timeline."}
    ],
    sources:[
      {title:"PIB — Ashok Chakra award citation / Operation Rakshak episode",url:"https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=175890",kind:"Official award citation"},
      {title:"Official History of Indian Armed Forces — PIB catalogue",url:"https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=177064",kind:"Government history catalogue"}
    ]
  },
  {
    id:"sadbhavana-1998",title:"Operation Sadbhavana",period:"Launched 1998 · ongoing programme context",type:"stabilisation",service:"Indian Army · civic action",
    place:"Jammu & Kashmir and North-East India",lat:34.0837,lng:74.7973,scope:"Inside India · civil-military development programme",
    summary:"A military civic-action and development programme aimed at improving socio-economic conditions and access to education, health, infrastructure and community activities. It is not a conventional battle or a single fixed-duration operation.",
    plan:"The Ministry of Defence describes projects as being identified with local administration and communities. Programme design, local demand, continuity, transparent delivery and coordination with civil authorities are therefore core to the documented purpose.",
    execution:"The Army launched Operation Sadbhavana in Jammu & Kashmir in 1998; official material also describes similar work under Operation Samaritan in the North-East. Activities include infrastructure, healthcare, education, skills development and national integration tours.",
    friction:"Civil-military development projects can be difficult to evaluate: expenditure and completed assets do not automatically demonstrate trust, fairness or durable impact. Local ownership and transparent outcome measures matter, and causal claims require evaluation data.",
    lessons:"Assess programmes using locally defined needs, access and quality measures, sustained maintenance and independent feedback. Keep humanitarian/development programming distinct from combat claims and distinguish correlation from evidence of trust or security effects.",
    chronology:[
      {date:"1998",title:"Programme launched",detail:"PIB states the Army's Northern Command launched Operation Sadbhavana in 1998."},
      {date:"2013 public account",title:"Programme scope described",detail:"A further PIB release lists infrastructure, healthcare, education, human-resource development and national integration tours."}
    ],
    sources:[
      {title:"PIB — Army in the Development of Jammu & Kashmir",url:"https://www.pib.gov.in/newsite/erelcontent.aspx?lang=1&reg=3&relid=33374",kind:"Official Ministry of Defence overview"},
      {title:"PIB — Operation Sadbhavana and related activities",url:"https://www.pib.gov.in/newsite/erelcontent.aspx?lang=2&reg=48&relid=93711",kind:"Official Ministry of Defence overview"}
    ]
  },
  {
    id:"pawan-peacekeeping",title:"IPKF withdrawal and peacekeeping context",period:"1987–1990",type:"peacekeeping",service:"Indian Army-heavy peacekeeping deployment",
    place:"Sri Lanka",lat:7.8731,lng:80.7718,scope:"Outside India · broad peacekeeping mission",
    summary:"The broader Indian Peace Keeping Force deployment in Sri Lanka ran beyond the Jaffna fighting often labelled Operation Pawan. It is included separately as a campaign-level study so the initial assault is not confused with the entire three-year deployment.",
    plan:"The political accord, disarmament expectations and security guarantees created the initial framework. The operational problem evolved as cooperation deteriorated and combat with the LTTE replaced parts of the anticipated peacekeeping role.",
    execution:"The Indian deployment followed the July 1987 Indo–Sri Lanka Accord and ended with withdrawal in 1990. Daily episodes differed by location and phase; this dossier does not claim a complete day-by-day order of events for the whole mission.",
    friction:"Mandate ambiguity, changing local consent, operational intelligence, urban combat, force protection and an attainable political end-state are recurring themes in published analyses. They require multiple sources rather than a single battle narrative.",
    lessons:"Mandate, political objective and military task must remain aligned. When the political assumptions change, commanders need clear authority to reassess the mission, and governments need measurable conditions for continuation or withdrawal.",
    chronology:[
      {date:"29 Jul 1987",title:"Bilateral accord signed",detail:"The Indo–Sri Lanka Accord framed the mission."},
      {date:"Oct 1987",title:"Jaffna fighting escalates",detail:"The IPKF moves into sustained combat with the LTTE; Operation Pawan is a key part of this phase."},
      {date:"1990",title:"Withdrawal completed",detail:"The Indian deployment ended in 1990."}
    ],
    sources:[
      {title:"Operation Pawan retrospective",url:"https://www.moneycontrol.com/defence/operation-pawan-1987-90-how-the-ipkf-learnt-the-hard-way-to-fight-the-ltte-article-13781472.html",kind:"Secondary military-history analysis"},
      {title:"Official History of Indian Armed Forces — PIB catalogue",url:"https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=177064",kind:"Government history catalogue"}
    ]
  },
  {
    id:"parakram-2001",title:"Operation Parakram",period:"Dec 2001 – Oct 2002",type:"mobilisation",service:"Indian Army-led mobilisation · joint services",
    place:"India–Pakistan border",lat:32.73,lng:74.86,scope:"Inside India / border mobilisation",
    summary:"A large military mobilisation following the attack on the Indian Parliament on 13 December 2001. The extended standoff is studied as a crisis-mobilisation case rather than a conventional war, because large forces were deployed but full-scale war did not occur.",
    plan:"Mobilisation aimed to signal resolve and prepare forces while government leaders managed diplomatic pressure and escalation risk. A complete analysis must include readiness, assembly, mine/obstacle issues, sustainment, intelligence, political signalling and alternatives to prolonged deployment.",
    execution:"Forces were mobilised over the following weeks and remained on the border through much of 2002. The Kaluchak attack in May 2002 became another major crisis point. Withdrawal proceeded in October 2002 after months of deployment and diplomacy.",
    friction:"The operation involved a lengthy deployment, financial and readiness costs, and pressure to convert mobilisation into a credible political result. Exact unit diaries and some readiness details are not contained in the public high-level sources linked here.",
    lessons:"Mobilisation is a political signal as well as a military movement. Evaluation should compare the intended coercive effect with time, cost, readiness, accident risk, and escalation. Maintain a clear review threshold and an exit plan when deployments become prolonged.",
    chronology:[
      {date:"13 Dec 2001",title:"Parliament attack",detail:"The attack triggered a major crisis and subsequent military mobilisation."},
      {date:"Late Dec 2001 – early 2002",title:"Mobilisation and deployment",detail:"Indian forces deployed along the western border; the crisis remained subject to diplomatic engagement."},
      {date:"14 May 2002",title:"Kaluchak attack",detail:"The attack created another major escalation point during the standoff."},
      {date:"Oct 2002",title:"Withdrawal phase",detail:"The prolonged mobilisation was progressively wound down after diplomatic engagement."}
    ],
    sources:[
      {title:"US State Department archive — South Asia crisis background",url:"https://1997-2001.state.gov/regions/sa/index.html",kind:"Government archival context"},
      {title:"Search official records and scholarly retrospectives on Operation Parakram",url:"https://www.google.com/search?q=Operation+Parakram+2001+2002+official+history+lessons",kind:"Further research"}
    ]
  },
  {
    id:"surya-hope-2013",title:"Operation Surya Hope",period:"17 Jun 2013 onward · Uttarakhand disaster response",type:"hadr",service:"Indian Army · joint disaster response",
    place:"Uttarakhand Himalaya, India",lat:30.7346,lng:79.0669,scope:"Inside India · flood and landslide rescue",
    summary:"The Army's response to the June 2013 floods and landslides in Uttarakhand. The National Institute of Disaster Management's after-action report documents the first assessments, route and bridge losses, weather constraints, and an adaptive planning process; PIB reported daily rescue and engineering work.",
    plan:"The initial task was to establish where people were stranded while roads and bridges were destroyed and flying weather was poor. The NIDM report says inputs arrived piecemeal on 17 June; authorities built an initial situation matrix, then adopted adaptive planning as the severity became clearer.",
    execution:"The NIDM account says the Army was formally requisitioned by the Rudraprayag district administration on the evening of 17 June and Operation Surya Hope was launched as estimates developed over 17–18 June. On 20 June, PIB reported 8,100 troops deployed, engineering and medical support, boats and helicopters, plus roughly 10,500 people rescued by road and Army aviation at that reporting time.",
    friction:"The NIDM report records washed-out bridges, blocked routes, poor flying weather, piecemeal early reports and an incomplete initial picture of the disaster. These are documented information and access constraints—not proof that every delay was a planning error.",
    lessons:"Disaster response benefits from pre-agreed request pathways, redundant communications, shared situation maps, engineer reconnaissance, ground alternatives when aviation is weathered out, and clear prioritisation of stranded people. Update decisions as new information arrives and record what was known at each time.",
    chronology:[
      {date:"17 Jun 2013",title:"Initial assessment and request",detail:"The NIDM report records heavy rains and cloudbursts, cut routes, poor flying conditions, piecemeal reports and a formal requisition from the Rudraprayag administration in the evening."},
      {date:"18 Jun 2013",title:"Adaptive plan and deployment",detail:"The NIDM account says formations mobilised as the scale of the disaster became clearer."},
      {date:"19 Jun 2013",title:"Joint relief operation expands",detail:"PIB reported widespread Army and Air Force rescue activity across Uttarakhand and Himachal Pradesh."},
      {date:"20 Jun 2013",title:"Public operational status update",detail:"PIB reported 8,100 troops deployed and approximately 10,500 people rescued by road and Army helicopters as of its 17:00 update."},
      {date:"26 Jun 2013",title:"Engineering and evacuation continue",detail:"Army engineers reported building a steel bridge at Lambagar; evacuation from Harsil and Badrinath continued."}
    ],
    image:{src:"https://upload.wikimedia.org/wikipedia/commons/b/b9/Army_personnel_busy_in_rescue_operations_in_Pindari_glacier%2C_in_Uttarakhand_%282%29.jpg",alt:"Indian Army personnel during a 2013 Uttarakhand mountain rescue operation",caption:"Army personnel during a Uttarakhand rescue operation in 2013; the photograph is a visual reference to the wider disaster response, not a depiction of a particular Surya Hope mission.",credit:"Ministry of Defence, Government of India · GODL-India",page:"https://commons.wikimedia.org/wiki/File:Army_personnel_busy_in_rescue_operations_in_Pindari_glacier,_in_Uttarakhand_(2).jpg",license:"Government Open Data License — India; attribution required."},
    sources:[
      {title:"NIDM — Uttarakhand Flash Floods, June 2013",url:"https://nidm.gov.in/pdf/pubs/india%20disaster%20report%202013.pdf",kind:"Disaster after-action report"},
      {title:"PIB — Armed Forces mount massive relief operations, 19 June 2013",url:"https://www.pib.gov.in/newsite/PrintRelease.aspx?relid=96637",kind:"Official operational update"},
      {title:"PIB — Army website and rescue update, 26 June 2013",url:"https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=96805",kind:"Official operational update"}
    ]
  },
  {
    id:"megh-rahat-2014",title:"Operation Megh Rahat",period:"Launched 2 Sep 2014 · J&K floods",type:"hadr",service:"Indian Army-led with IAF, Navy, NDRF and civil agencies",
    place:"Jammu & Kashmir, India",lat:34.0837,lng:74.7973,scope:"Inside India · flood rescue and relief",
    summary:"The Army's large-scale response to the September 2014 Jammu & Kashmir floods. The Ministry of Defence's annual report describes 298 Army columns, boats, aviation, medical support and restoration of road connectivity; disaster-response records note that early rescues were hindered by bad weather and shortages of suitable boats.",
    plan:"The task required moving rescue teams and boats into flooded towns, reaching people cut off by damaged routes, treating patients and restoring connectivity. Civil administration, Army columns, the Air Force and NDRF each had different access and rescue capabilities.",
    execution:"The Ministry of Defence records Operation Megh Rahat launching on 2 September 2014 and reports approximately 160,000 civilians rescued by the Army, alongside shelter, food, medical aid and bridge/road restoration. The NDRF records its own mobilisation beginning on 4 September; those figures describe NDRF teams and should not be conflated with the Army's figures.",
    friction:"The disaster-management report notes early shortages of boats and bad weather; some standard military boats were not ideal for civilian flood rescue. This is a documented capability mismatch worth studying, rather than treating the response as a single undifferentiated effort.",
    lessons:"Match equipment to the task, not only to the institution. Pre-position rescue boats and personal flotation equipment; share live maps of flooded streets and hospitals; allocate by capability; make requests for specialised assets early; and separate Army, IAF, Navy and NDRF totals in public reporting.",
    chronology:[
      {date:"2 Sep 2014",title:"Operation launched",detail:"The Ministry of Defence annual report identifies 2 September as the launch date."},
      {date:"4–5 Sep 2014",title:"NDRF mobilises",detail:"NDRF records teams mobilising on 4 September and reaching Jammu on 5 September; this is its own deployment timeline."},
      {date:"First days",title:"Equipment and weather constraints",detail:"The disaster-management report describes shortages of boats and poor weather hindering early rooftop and floodwater rescues."},
      {date:"19 Sep 2014",title:"Major rescue phase ends",detail:"A national disaster report records Megh Rahat ending on 19 September, followed by relief and medical-assistance activity."}
    ],
    sources:[
      {title:"Ministry of Defence Annual Report 2014–15",url:"https://www.ddpmod.gov.in/sites/default/files/2023-12/Annual%20report%202014-2015_0.pdf",kind:"Government annual report"},
      {title:"NDRF — J&K flood rescue and relief operations, September 2014",url:"https://www.ndrf.gov.in/en/operations/jammu-kashmir-flood-rescue-and-relief-operations-sep-2014",kind:"Official disaster-response record"},
      {title:"NIDM — India Disaster Report 2014–17",url:"https://nidm.gov.in/PDF/pubs/IDR2014-17.pdf",kind:"Disaster after-action report"}
    ]
  },
  {
    id:"maitri-2015",title:"Operation Maitri",period:"25 Apr – 4 Jun 2015",type:"hadr",service:"Indian Army + Indian Air Force + NDRF + MEA",
    place:"Nepal earthquake response",lat:27.7172,lng:85.3240,scope:"Outside India · humanitarian relief",
    summary:"A whole-of-government relief mission after Nepal's 25 April 2015 earthquake. The Indian Army deployed engineer task forces, medical teams, field hospitals and helicopters in coordination with Nepal Army; the IAF moved rescue teams and relief cargo.",
    plan:"The response needed to coordinate with Nepalese authorities, establish a common operating picture, identify cut-off communities, move engineering equipment, set medical priorities, and maintain a chain for supplies and patient evacuation across difficult mountain terrain.",
    execution:"The Army announced Operation Maitri on 26 April. PIB's 3–4 May updates record engineers clearing tracks and debris, medical teams conducting surgery, Army Aviation moving relief material and casualties, and coordination with Nepal Army. The Government later recorded the wider Army–IAF relief operation winding up on 4 June.",
    friction:"Road cuts, remote villages, aftershocks, limited landing areas, weather, debris clearance and rapidly shifting medical demand were major coordination challenges. Published daily updates are snapshots at particular times; their numbers should not be added without checking whether later totals include earlier work.",
    lessons:"International HADR requires host-nation coordination, common maps, medical triage, engineering access, interoperable communications and a disciplined supply chain. Track cumulative versus daily numbers explicitly, and design the handover/recovery phase from the start.",
    chronology:[
      {date:"25 Apr 2015",title:"Earthquake and initial response",detail:"The earthquake triggered an immediate Indian national relief effort."},
      {date:"26 Apr 2015",title:"Army launches Operation Maitri",detail:"PIB records the Army coordinating with Nepal Army, deploying senior officers and organising a multinational coordination centre."},
      {date:"3–4 May 2015",title:"Engineering and medical work",detail:"Daily Army updates record track clearing, debris removal, surgery, patient treatment, helicopter sorties and delivery of essential stores."},
      {date:"20 May 2015",title:"Longer relief and reconstruction phase",detail:"The Army reported continuing sorties, treatment, debris clearance and shelter reconstruction in the 15–20 May update."},
      {date:"4 Jun 2015",title:"Major armed forces relief operation winds up",detail:"The government reported the broader Army–IAF humanitarian operation winding up on 4 June."}
    ],
    image:{src:"https://upload.wikimedia.org/wikipedia/commons/5/50/Army_Medical_Team_of_60_Para_Field_Hospital_providing_first_aid_treatment%2C_at_Sinamangal%2C_in_Nepal_on_May_14%2C_2015.jpg",alt:"Indian Army medical personnel treating a patient in Nepal in May 2015",caption:"60 Para Field Hospital medical team in Sinamangal, Nepal, May 2015—an operation-specific image from the relief period.",credit:"Ministry of Defence, Government of India · GODL-India",page:"https://commons.wikimedia.org/wiki/File:Army_Medical_Team_of_60_Para_Field_Hospital_providing_first_aid_treatment,_at_Sinamangal,_in_Nepal_on_May_14,_2015.jpg",license:"Government Open Data License — India; attribution required."},
    sources:[
      {title:"PIB — Army launches Operation Maitri, 26 April 2015",url:"https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=118739",kind:"Official launch notice"},
      {title:"PIB — Operation Maitri daily update, 3 May 2015",url:"https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=121124",kind:"Official daily update"},
      {title:"PIB — Operation Maitri daily update, 20 May 2015",url:"https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=121886",kind:"Official daily update"},
      {title:"PIB — Armed forces wind up relief operations, 5 June 2015",url:"https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=122332",kind:"Official completion summary"}
    ]
  },
  {
    id:"seawave-2004",title:"Operation Sea Wave",period:"From 26 Dec 2004 · tsunami response",type:"hadr",service:"Indian Armed Forces · tri-service / Coast Guard response",
    place:"Andaman & Nicobar Islands and Indian Ocean region",lat:11.6234,lng:92.7265,scope:"Inside India and regional humanitarian assistance",
    summary:"The armed forces' response to the December 2004 Indian Ocean tsunami. Official government material describes joint Army, Navy, Air Force and Coast Guard relief, evacuation, search-and-rescue and logistics across the islands and neighbouring countries.",
    plan:"The scale and geographic spread of the disaster required distributed rescue bases, transport by air and sea, medical support, and prioritisation of isolated communities. This is a tri-service disaster-response case, not an Army-only operation.",
    execution:"The government describes immediate search-and-rescue from 26 December 2004 and subsequent daily relief and evacuation activity, with airlift of supplies and survivors and assistance to Sri Lanka and the Maldives.",
    friction:"Island geography, damaged infrastructure, communication loss and the distance between communities and supply bases create persistent common operating picture and logistics problems. Detailed individual-day entries should be sourced to unit logs or situation reports, which are not reproduced in the government summary linked here.",
    lessons:"Pre-positioning, multi-modal transport, shared casualty reporting and a transition from urgent rescue to sustained relief are fundamental. In disaster operations, measure the full service contribution and avoid assigning tri-service totals to just one service.",
    chronology:[
      {date:"26 Dec 2004",title:"Immediate response begins",detail:"Government retrospective describes immediate search-and-rescue and relief activity after the tsunami."},
      {date:"Following days",title:"Joint relief and evacuation",detail:"The response extended across Indian islands and neighbouring countries using air, sea and land assets."}
    ],
    sources:[
      {title:"PIB — Armed forces disaster-relief missions retrospective",url:"https://www.pib.gov.in/PressNoteDetails.aspx?ModuleId=3&NoteId=157371&lang=13&reg=22",kind:"Government retrospective"}
    ]
  },
  {
    id:"bajrang",title:"Operation Bajrang",period:"Sep 1990 – Apr 1991",type:"internal-security",service:"Indian Army",
    place:"Assam, India",lat:27.4728,lng:94.9120,scope:"Inside India · counter-insurgency",
    summary:"An earlier Army operation against ULFA, launched after a worsening security situation in Assam. Public retrospective accounts put the campaign between September 1990 and April 1991; the Army subsequently launched Operation Rhino in September 1991.",
    plan:"The open-source record identifies an internal-security deployment. Research should examine the political decision to deploy, the police–Army relationship, intelligence reliability, legal oversight and how security activity was linked to restoring civil government.",
    execution:"Secondary accounts describe the operation as starting in late 1990 and being halted in April 1991 in the run-up to elections. The Army's next named campaign, Operation Rhino, followed later in 1991.",
    friction:"Reports differ in how they quantify arrests, seizures and the restoration of order. Those immediate outputs should not be confused with lasting political settlement or prevention of renewed insurgent activity.",
    lessons:"Track outcomes over years, not just a campaign window. Maintain lawful processes, civilian protection, reliable local intelligence and an explicit transition back to civil policing and politics.",
    chronology:[
      {date:"Sep–Nov 1990",title:"Operation begins",detail:"Public histories place Operation Bajrang in late 1990 during a period of heightened insurgent violence."},
      {date:"Apr 1991",title:"Operations halted",detail:"Secondary and US government reporting state the operation was suspended/ended in April 1991 ahead of state elections."},
      {date:"Sep 1991",title:"Operation Rhino follows",detail:"The Army returned to a campaign under the name Operation Rhino after insurgent activity resumed."}
    ],
    sources:[
      {title:"US Department of State — 1991 human-rights report",url:"https://www.ecoi.net/en/document/1140831.html",kind:"Government report archive"},
      {title:"South Asia Terrorism Portal — Assam backgrounder",url:"https://satp.org/satporgtp/countries/india/states/assam/backgrounder/index.html",kind:"Secondary research"}
    ]
  },
  {
    id:"congo-onuc",title:"Congo Operation / ONUC",period:"1960–1963",type:"peacekeeping",service:"Indian Army and Indian Armed Forces under UN command",
    place:"Democratic Republic of the Congo",lat:-4.4419,lng:15.2663,scope:"Outside India · United Nations peacekeeping",
    summary:"India's military contribution to the United Nations Operation in the Congo, listed in the Government of India's official-history catalogue. UN operations of this period involved peacekeeping, protection and support tasks under a multinational mandate.",
    plan:"The key planning frame is a UN mandate executed by national contingents within an international chain of command. Rules of engagement, coordination with other national contingents, logistics, legitimacy and the limits of force are core research themes.",
    execution:"The Ministry of Defence catalogue lists the Congo Operation, 1960–63, among official military histories. This page is a mission overview; it does not claim to reconstruct each day of a multi-year multinational mission.",
    friction:"A complete record would require UN situation reports, national contingent histories and mandate changes. It would be misleading to compress all contingents and the shifting situation into a single daily Indian Army narrative.",
    lessons:"Multinational missions require interoperable command procedures, clear mandates, impartial reporting, civilian protection, and a plan for how a peacekeeping presence adapts when the political situation changes.",
    chronology:[
      {date:"1960",title:"UN mission begins",detail:"The UN launched ONUC in the Congo; India contributed personnel and military capabilities."},
      {date:"1960–1963",title:"Multinational mission",detail:"India's contribution is recorded in the official military-history catalogue as the Congo Operation, 1960–63."}
    ],
    sources:[
      {title:"PIB — Official History of Indian Armed Forces",url:"https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=177064",kind:"Government history catalogue"},
      {title:"United Nations Peacekeeping — ONUC",url:"https://peacekeeping.un.org/mission/past/onuc.htm",kind:"UN mission history"}
    ]
  },
  {
    id:"korea-custodian-1953",title:"Custodian Force India in Korea",period:"1953–1954",type:"peacekeeping",service:"Indian Army / Indian Armed Forces under neutral repatriation arrangements",
    place:"Korean Peninsula",lat:37.9563,lng:126.6682,scope:"Outside India · post-armistice repatriation",
    summary:"A neutral repatriation and custody mission following the Korean Armistice. The Government of India's official-history catalogue lists the History of the Custodian Force (India) in Korea, 1953–54.",
    plan:"The mission required neutral custody and repatriation processes within an armistice framework. Research should focus on mandate interpretation, procedures for protected persons, multinational coordination, and safeguards for neutrality.",
    execution:"The public catalogue gives the mission period as 1953–54. This atlas does not invent a full daily task log; individual phases should be researched using the historical publication and UN/armistice records.",
    friction:"Neutral missions can face competing political pressures and difficult consent questions. Daily procedural records and the source text are needed before attributing a specific error or decision to the contingent.",
    lessons:"Neutrality needs transparent procedures, documentation, clear rules, language and liaison support, and auditable treatment of people under custody. The mission shows that Army history outside India includes non-combat and peace-support tasks.",
    chronology:[
      {date:"1953",title:"Post-armistice mission period begins",detail:"India's custodian force undertook repatriation-related responsibilities following the Korean Armistice."},
      {date:"1953–1954",title:"Custodian Force mission",detail:"The Ministry of Defence catalogue lists the force's official history for this period."}
    ],
    sources:[
      {title:"PIB — Official History of Indian Armed Forces",url:"https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=177064",kind:"Government history catalogue"},
      {title:"UN Command — Korean Armistice Agreement context",url:"https://www.usfk.mil/Resources/Armistice-Agreement/",kind:"Armistice reference"}
    ]
  },
  {
    id:"bhutan-all-clear-2003",title:"Operation All Clear (Bhutan-led)",period:"From 15 Dec 2003 · about three weeks",type:"joint",service:"Royal Bhutan Army-led · India provided requested logistical support",
    place:"Southern Bhutan",lat:26.85,lng:90.45,scope:"Outside India · neighbouring-state security operation",
    summary:"This operation was launched by the Royal Bhutan Army against insurgent camps in Bhutan. The Ministry of External Affairs' 2003–04 Annual Report says India supported Bhutan with logistical assistance requested by its government; it was not an Indian Army-led operation.",
    plan:"Bhutan's government decided to act after peaceful efforts failed. The Indian role, as recorded by MEA, was to provide logistical support requested by Bhutan rather than take operational command of the Bhutanese campaign.",
    execution:"MEA records the Royal Bhutan Army beginning military operations against the camps on 15 December 2003 and destroying 30 camps and observation posts over about three weeks.",
    friction:"This case is frequently mislabelled as an Indian operation. Clear attribution of national command and responsibility is essential when studying cross-border cooperation.",
    lessons:"Record who held command, what support was requested, and what the supporting state actually provided. Distinguish host-nation operations from foreign assistance; doing otherwise obscures accountability and the political relationship.",
    chronology:[
      {date:"15 Dec 2003",title:"Royal Bhutan Army launches operation",detail:"MEA states the Bhutanese army initiated operations against 30 camps and observation posts."},
      {date:"Late Dec 2003 – early Jan 2004",title:"Bhutan-led campaign concludes",detail:"MEA reports the Royal Bhutan Army destroyed the camps over about three weeks, with Indian logistical support requested by Bhutan."}
    ],
    sources:[
      {title:"MEA Annual Report 2003–2004 — Bhutan",url:"https://www.mea.gov.in/Uploads/PublicationDocs/165_Annual-Report-2003-2004.pdf",kind:"Government annual report"}
    ]
  },
  {
    id:"devi-shakti-2021",title:"Operation Devi Shakti",period:"Aug 2021 onward · evacuation phase",type:"evacuation",service:"Whole-of-government · Indian Armed Forces airlift support",
    place:"Kabul, Afghanistan",lat:34.5553,lng:69.2075,scope:"Outside India · evacuation during state collapse",
    summary:"India's evacuation operation in Afghanistan after the rapid change in control of Kabul in August 2021. The Ministry of External Affairs annual report records the evacuation of Indian nationals, Afghan nationals and third-country nationals.",
    plan:"Evacuating people from a rapidly changing airport environment required diplomatic coordination, passenger prioritisation, secure movement to departure points, flight clearances and coordination across government agencies. Public details do not amount to an Army ground-operation log.",
    execution:"MEA's 2021–22 Annual Report states that the operation evacuated a total of 565 people including Indians, Afghans and foreign nationals, with six flights cited for part of the evacuation.",
    friction:"Access to the airport, identity verification, rapidly changing routes, documentation and family reunification are recurring challenges in crisis evacuation. Numbers in annual reports may describe subsets or stages of a larger effort; state the scope of each number.",
    lessons:"Keep evacuation plans current, make eligibility rules clear, coordinate lists across agencies, build redundancies in routes and flight capacity, and communicate the limits of what can safely be promised to people in a crisis.",
    chronology:[
      {date:"Aug 2021",title:"Evacuation begins",detail:"MEA records the operation as India's response to the rapidly changing security situation in Afghanistan."},
      {date:"Aug 2021",title:"Multiple groups evacuated",detail:"The MEA annual report records Indian nationals, Afghans and nationals of third countries among those evacuated."}
    ],
    sources:[
      {title:"MEA Annual Report 2021–22 — Operation Devi Shakti",url:"https://fsi.mea.gov.in/Uploads/PublicationDocs/34894_MEA_Annual_Report_English.pdf",kind:"Government annual report"}
    ]
  },
  {
    id:"ganga-2022",title:"Operation Ganga",period:"Feb–Mar 2022",type:"evacuation",service:"Whole-of-government · military airlift and civil aviation",
    place:"Ukraine and neighbouring transit countries",lat:50.4501,lng:30.5234,scope:"Outside India · evacuation during war",
    summary:"A national evacuation effort for Indian citizens stranded by the war in Ukraine. The Ministry of External Affairs describes a whole-of-government approach involving MEA, Civil Aviation, Defence, NDRF, state governments and private-sector partners.",
    plan:"The plan had to adapt to moving front lines, airspace closure, border congestion, varying routes out of different regions and coordination with neighbouring countries. The operation combined ground movement to transit points with flight capacity from outside Ukraine.",
    execution:"The MEA annual report records daily high-level review meetings and 24-hour monitoring, with evacuation and repatriation continuing through February and March 2022.",
    friction:"The main public challenges were rapidly changing access and logistics, fragmented passenger locations, border crossing queues, and flight coordination. A complete individual-day record of every person's route is not public and is not reconstructed here.",
    lessons:"Crisis evacuation needs redundant transit routes, current traveller registration, multilingual communications, transparent prioritisation, embassy coordination and a central dashboard with privacy safeguards. Publish numbers with their cut-off dates.",
    chronology:[
      {date:"Feb 2022",title:"Evacuation begins",detail:"MEA records the operation following the beginning of the war and the urgent need to assist Indian citizens."},
      {date:"Feb–Mar 2022",title:"Whole-of-government response",detail:"The MEA annual report describes daily reviews and cooperation with civil aviation, defence, NDRF, state governments and private partners."}
    ],
    sources:[
      {title:"MEA Annual Report 2021–22 — Operation Ganga",url:"https://meacms.mea.gov.in/Uploads/PublicationDocs/36286_MEA_Annual_Report_2022_English_web.pdf",kind:"Government annual report"},
      {title:"MEA — operation-wise evacuation figures",url:"https://www.mea.gov.in/Images/CPV/LS988En01.pdf",kind:"Government parliamentary answer"}
    ]
  },
  {
    id:"dost-2023",title:"Operation Dost",period:"Feb 2023 · earthquake relief",type:"hadr",service:"Indian Armed Forces / NDRF / medical teams",
    place:"Türkiye and Syria",lat:36.2021,lng:36.1600,scope:"Outside India · international disaster response",
    summary:"India's emergency response following the February 2023 Türkiye–Syria earthquakes. The operation included search-and-rescue and medical assistance. The Indian Army's field-hospital role is part of the wider national response, not a unilateral Army campaign.",
    plan:"The immediate tasks were search-and-rescue, triage, medical stabilisation and moving specialist teams and supplies into affected areas quickly. Coordination with the host governments, airlift, local access and medical logistics were essential.",
    execution:"Indian emergency response teams, including NDRF and an Army field hospital, were deployed during February 2023. The source linked below provides current research entry points; detailed daily movement data should be taken from the official situation reports rather than invented.",
    friction:"Earthquake response creates unstable buildings, aftershocks, damaged roads, severe cold, overwhelmed hospitals and uncertain casualty locations. Teams must prioritise safety, triage and handover to local services.",
    lessons:"Urban search-and-rescue requires technical rescue capability and clear safety limits. Field hospitals must connect to evacuation and onward referral systems; relief operations need a planned transition to local authorities rather than merely arriving quickly.",
    chronology:[
      {date:"6 Feb 2023",title:"Earthquakes trigger international response",detail:"The major earthquakes in Türkiye and Syria led to international search-and-rescue and medical assistance."},
      {date:"Feb 2023",title:"Indian teams deploy",detail:"India sent rescue, medical and relief support under the name Operation Dost. Consult linked official records for dated deployment details."}
    ],
    sources:[
      {title:"Search official Government of India records for Operation Dost",url:"https://www.google.com/search?q=site%3Apib.gov.in+Operation+Dost+India+2023+Army+field+hospital",kind:"Official-source search"}
    ]
  },
  {
    id:"kaveri-2023",title:"Operation Kaveri",period:"Apr–May 2023",type:"evacuation",service:"Whole-of-government · IAF and Indian Navy transport",
    place:"Sudan / Port Sudan / Jeddah",lat:19.6158,lng:37.2164,scope:"Outside India · evacuation from conflict",
    summary:"India's evacuation of nationals from conflict-affected Sudan. The Ministry of External Affairs annual report records crisis monitoring, a control room, relocation of the mission to Port Sudan, and onward travel using Indian Air Force, Indian Navy, chartered and commercial capacity.",
    plan:"A safe evacuation required a viable collection point, communications with people dispersed across Sudan, onward movement to Port Sudan, safe transport across the Red Sea and a reception and onward travel chain from Jeddah.",
    execution:"The MEA annual report describes a crisis-management group and 24-hour control room beginning 17 April. It records the evacuation of thousands of Indians and some foreign nationals through a mix of air and sea legs.",
    friction:"A conflict-zone evacuation depends on changing security conditions, road safety, passenger manifests, visas, medical support and coordination across multiple transport modes. Reported totals differ depending on whether a source counts Indians only or includes foreign nationals.",
    lessons:"Build a single passenger manifest with privacy controls, communicate collection-point risks, retain alternate routes, pre-arrange onward transport and clearly date/categorise each count.",
    chronology:[
      {date:"15 Apr 2023",title:"Crisis begins",detail:"The MEA annual report dates the Sudan crisis to 15 April."},
      {date:"17 Apr 2023",title:"Control room established",detail:"The MEA records a 24-hour control room and a crisis-management group."},
      {date:"Late Apr–May 2023",title:"Air and sea evacuation",detail:"People moved from Port Sudan toward Jeddah and onward to India through a combination of naval, air, chartered and commercial links."}
    ],
    sources:[
      {title:"MEA Annual Report 2023 — Operation Kaveri",url:"https://www.mea.gov.in/Images/CPV/38005_Final-MEA-AR-2023-English.pdf",kind:"Government annual report"},
      {title:"MEA — operation-wise evacuation figures",url:"https://www.mea.gov.in/Images/CPV/LS988En01.pdf",kind:"Government parliamentary answer"}
    ]
  },
  {
    id:"ajay-2023",title:"Operation Ajay",period:"12–22 Oct 2023",type:"evacuation",service:"Whole-of-government · special flights",
    place:"Israel / Tel Aviv",lat:32.0853,lng:34.7818,scope:"Outside India · evacuation after conflict escalation",
    summary:"An Indian evacuation operation after the October 2023 attacks and escalation in Israel. MEA's official records describe special flights and 1,300-plus people evacuated, including non-Indian passengers in the total reported in a later parliamentary answer.",
    plan:"The operation required registering citizens, prioritising those seeking evacuation, coordinating airport operations and flight slots, and communicating schedules as conditions changed.",
    execution:"The MEA records six special flights between 12 and 22 October 2023. A later parliamentary answer gives the aggregate as 1,343 evacuees, with the stated inclusion of OCI card holders and foreign nationals.",
    friction:"Airspace, flight capacity, rapidly changing security advice, passenger manifests and mixed nationality counts must be kept current. The operation itself is not an Army ground combat mission; it belongs in the archive as a whole-of-government evacuation.",
    lessons:"A good evacuation process publishes eligibility and flight information clearly, coordinates manifests among missions and airlines, and separates citizens from total passengers when communicating results.",
    chronology:[
      {date:"12 Oct 2023",title:"Special flight phase begins",detail:"MEA's later account records flights beginning on 12 October."},
      {date:"12–22 Oct 2023",title:"Evacuation flights",detail:"Six special flights were used according to the MEA's later bilateral-relations report."}
    ],
    sources:[
      {title:"MEA Annual Report / Israel relations update",url:"https://www.mea.gov.in/Images/CPV/LS988En01.pdf",kind:"Government parliamentary answer"},
      {title:"MEA — Israel relations (Feb 2026)",url:"https://www.fsi.mea.gov.in/Portal/ForeignRelation/Israel_February_2026_1_.pdf",kind:"Government annual relations brief"}
    ]
  },
  {
    id:"sindoor-2025",title:"Operation Sindoor",period:"From 7 May 2025 · public milestones",type:"joint",service:"Indian Armed Forces · Army, Air Force, Navy and air-defence network",
    place:"Northern and western India / cross-border crisis",lat:33.90,lng:75.20,scope:"Cross-border military operation; location pin is a broad theatre marker",
    summary:"An Indian Armed Forces operation announced on 7 May 2025. The Ministry of Defence said nine sites were targeted and described the action as focused and non-escalatory; follow-up government releases described subsequent air-defence activity and a later strategic assessment. Claims here are attributed to official Indian statements and are not presented as independent verification of every battlefield claim.",
    plan:"Official releases frame the operation as a response to the April 2025 Pahalgam attack. Public material discusses target selection, cross-service coordination, air defence and escalation management. The detailed planning cycle and targeting decision records are not public in this archive.",
    execution:"The first official release was posted at 01:44 IST on 7 May 2025, stating that nine sites were targeted. A later government document describes attempts to engage Indian military targets with drones and missiles on the night of 7–8 May and subsequent action; the CDS conducted a strategic review on 25 May. These dates are sourced public milestones, not a complete classified operational log.",
    friction:"Operational claims in an active regional crisis can be disputed by parties and independent investigators. Public official releases do not provide all targeting data, damage assessments or rules-of-engagement documentation. This dossier avoids speculation about unreleased capabilities or tactical details.",
    lessons:"Study multi-domain coordination, identification confidence, protection of civilians, air-defence integration, escalation control and public-information discipline. Separate a government's stated intent from independent verification of effects; date every claim and keep disputed details explicitly attributed.",
    chronology:[
      {date:"7 May 2025 · 01:44 IST",title:"Initial operation statement",detail:"The Ministry of Defence announced Operation Sindoor, stating nine sites had been targeted and describing the action as focused and non-escalatory."},
      {date:"Night of 7–8 May 2025",title:"Air-defence incident described",detail:"A PIB paper published later in May described attempted drone and missile engagements at military targets in northern and western India."},
      {date:"8 May 2025",title:"Further response described in official release",detail:"Government material says air-defence radars and systems at locations in Pakistan were targeted on the morning of 8 May; attribute this as the Indian government's account."},
      {date:"25 May 2025",title:"Strategic review",detail:"The CDS visited Northern and Western Commands for an operational assessment after Operation Sindoor, according to the Ministry of Defence."}
    ],
    sources:[
      {title:"PIB / Ministry of Defence — Operation Sindoor initial statement, 7 May 2025",url:"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2127370&lang=2&reg=48",kind:"Official statement"},
      {title:"PIB — Operation Sindoor: technology and air defence, 14 May 2025",url:"https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/may/doc2025514554901.pdf",kind:"Government retrospective"},
      {title:"PIB — CDS strategic review following Operation Sindoor, 25 May 2025",url:"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2131197&lang=2&reg=48",kind:"Official assessment"}
    ]
  },
  {
    id:"sindhu-2025",title:"Operation Sindhu",period:"22–25 Jun 2025",type:"evacuation",service:"Whole-of-government · evacuation assistance",
    place:"Israel / transit through Jordan and Egypt",lat:31.95,lng:35.93,scope:"Outside India · civilian evacuation during regional conflict",
    summary:"An evacuation operation for Indian nationals during the June 2025 Israel–Iran conflict, distinct from Operation Ajay in October 2023. An MEA publication states that people were evacuated via land routes through Jordan and Egypt and then flown onward.",
    plan:"The evacuation required route flexibility while airspace was constrained, diplomatic coordination with transit states, passenger identification and onward flight arrangements.",
    execution:"The MEA's February 2026 Israel relations brief states that around 818 Indians were evacuated through land routes via Jordan and Egypt from 22 to 25 June 2025, followed by flights from Amman and Sharm el-Sheikh.",
    friction:"When airspace closes, evacuation shifts pressure onto land borders, buses, visas and onward flight capacity. A route can be legally open but operationally slow; travellers need transparent updates and contingency options.",
    lessons:"Plan for route substitution, pre-coordinate border processes, separate safe movement from onward flight capacity, and issue dated advice with explicit confidence levels. This is an evacuation, not an Army combat operation.",
    chronology:[
      {date:"22 Jun 2025",title:"Evacuation phase begins",detail:"MEA states that the operation's land-route evacuation ran from 22 to 25 June."},
      {date:"22–25 Jun 2025",title:"Transit through Jordan and Egypt",detail:"The later MEA brief records flights from Amman and Sharm el-Sheikh after land movement."}
    ],
    sources:[
      {title:"MEA — Israel relations update, February 2026",url:"https://www.fsi.mea.gov.in/Portal/ForeignRelation/Israel_February_2026_1_.pdf",kind:"Government brief"}
    ]
  },
  {
    id:"khukri-2000",title:"Operation Khukri",period:"15–16 Jul 2000",type:"peacekeeping",service:"Indian Army-led contingent under UNAMSIL · IAF / UN aviation support",
    place:"Kailahun and Daru, Sierra Leone",lat:8.28,lng:-10.57,scope:"Outside India · UN peacekeeping rescue operation",
    summary:"A UNAMSIL operation to restore freedom of movement to Indian troops and military observers besieged by the Revolutionary United Front (RUF) near Kailahun. India's Lok Sabha answer states the rescue operation ran from 15 to 16 July 2000 and records the Indian casualty and injury figures reported to Parliament.",
    plan:"The published retrospective by the then Force Commander, Lt Gen V.K. Jetley, describes a build-up on 13–14 July using contracted and Indian aviation, with the operation order issued on 12 July. Public accounts stress secrecy, weather-aware airlift, links between dispersed groups, and a clear humanitarian objective: extract the besieged UN personnel and re-establish freedom of movement.",
    execution:"The Lok Sabha reply dated 16 August 2000 says UNAMSIL launched the operation under Maj Gen V.K. Jetley on 15 July and completed it on 16 July 2000. The UN Force included Indian troops and military observers; the parliamentary answer states that seven Indian soldiers received minor injuries and one Indian soldier, Havildar Krishan Kumar, died. Different published sources use different shorthand totals for the personnel involved, so this dossier retains the parliamentary wording.",
    friction:"The Force Commander's published after-action account documents bad weather delaying some helicopter tasks, coordination between ground movement and aviation, the difficulty of extracting dispersed and besieged peacekeepers, and the need to conceal the timing of the operation. These are documented operational constraints; a full assessment should compare the commander's account, UN reports and the parliamentary answer.",
    lessons:"Peacekeeping does not guarantee consent or safety. Contingency planning must address the possibility that a peacekeeping force becomes besieged; aviation and ground elements need rehearsed communications and alternate weather plans; a rescue mission must stay aligned to the UN mandate and civilian risk. Use after-action evidence to separate adaptation under pressure from preventable planning error.",
    chronology:[
      {date:"12 Jul 2000",title:"Operational order issued",detail:"The published Force Commander account says the order was issued on 12 July, after the plan had been developed."},
      {date:"13–14 Jul 2000",title:"Build-up and movement",detail:"The Force Commander describes a staged build-up using Indian and UN-contracted aviation; weather and secrecy shaped the movement."},
      {date:"15 Jul 2000",title:"Operation begins",detail:"The official parliamentary reply records the start of the UNAMSIL rescue operation to restore freedom of movement to besieged Indian troops and observers."},
      {date:"16 Jul 2000",title:"Rescue operation completed",detail:"The Lok Sabha answer records completion on 16 July. It reports seven minor injuries among Indian soldiers and the death of Havildar Krishan Kumar."}
    ],
    sources:[
      {title:"Lok Sabha answer — Injury to Indian Soldiers, 16 Aug 2000",url:"https://eparlib.sansad.in/bitstream/123456789/465566/1/10002.pdf",kind:"Official parliamentary answer"},
      {title:"Op Khukri — The United Nations Operation Fought in Sierra Leone, Part I",url:"https://usiofindia.org/pdf/USI-Journal-Jan-Mar-2007-89-102.pdf",kind:"After-action account by the former Force Commander"},
      {title:"Op Khukri — The United Nations Operation Fought in Sierra Leone, Part II",url:"https://usiofindia.org/pdf/USI-Journal-Apr-Jun-2007-74-85.pdf",kind:"After-action account by the former Force Commander"},
      {title:"MEA Annual Report 2000–01 — Sierra Leone",url:"https://www.mea.gov.in/uploads/publicationdocs/163_annual-report-2000-2001.pdf",kind:"Government annual report"}
    ]
  },
  {
    id:"sarp-vinash-2003",title:"Operation Sarp Vinash",period:"Apr–May 2003 · reported dates vary",type:"internal-security",service:"Indian Army / Rashtriya Rifles",
    place:"Hill Kaka, Surankote, Poonch, Jammu & Kashmir",lat:33.55,lng:74.32,scope:"Inside India · counter-insurgency in mountainous terrain",
    summary:"A major counter-insurgency operation in the Hill Kaka area of Poonch, where armed groups had established camps in rugged, forested terrain south of the Pir Panjal range. Public sources give differing duration and casualty / hideout figures; the dossier preserves those differences instead of choosing one aggregate as definitive.",
    plan:"The Indian Express retrospective says preparations began in January 2003 after intelligence indicated that armed groups had established bases in the area; it describes a roughly 150-square-kilometre mountainous area bounded by ridges and a concern about the threat to movement and supply lines. The public record does not contain a full daily operations order or a complete after-action inquiry.",
    execution:"Accounts place the operation between April and May 2003, with one contemporary report giving 21 April–18 May and a later DRDO news compilation describing operations from April onward and a duration of around two weeks. Reports cited by the press give differing force strengths and totals for militants or hideouts; the scope and wording of each report must travel with the figure.",
    friction:"The sources document rugged ground, forested ridgelines, dispersed hideouts and the difficulty of establishing lasting control after a clearance. Counts differ between contemporary Army statements and later retrospectives; those differences make it inappropriate to present one casualty or hideout total without attribution. The public sources here do not establish a complete day-by-day list of incidents.",
    lessons:"Mountain counter-insurgency requires dependable local intelligence, sustainment across difficult routes, civilian protection, careful evidence collection, and an explicit plan for holding and administering terrain after a clearance. Track immediate activity separately from lasting security outcomes; avoid converting a reported count into proof of overall success.",
    chronology:[
      {date:"Jan 2003",title:"Preparations reported",detail:"The Indian Express retrospective says preparations began in January after intelligence indicated the presence of established militant camps in the Hill Kaka area."},
      {date:"21 Apr 2003",title:"Reported start date",detail:"A contemporary report records the Rashtriya Rifles operation as starting on 21 April. Other public accounts describe the period more broadly as April–May."},
      {date:"Apr–May 2003",title:"Clearance operations",detail:"Reports describe activity across rugged, forested terrain; a full daily source-backed log is not available in the linked public accounts."},
      {date:"18 May 2003",title:"End date in one contemporary account",detail:"A contemporary report gives 18 May as the end of the main operation, while another report describes a longer April–June period. The differing scopes remain visible here."},
      {date:"Jul 2003",title:"Public claims debated",detail:"Contemporary Army statements and media coverage debated casualty and hideout totals. Figures should be quoted with the source and date rather than combined."}
    ],
    sources:[
      {title:"Indian Express — Operation Sarp Vinash / Hill Kaka historical explainer",url:"https://indianexpress.com/article/explained/jammu-kashmir-poonch-encounter-army-militants-search-operation-7582447/",kind:"Secondary research / campaign context"},
      {title:"DRDO News — Sarp Vinash retrospective",url:"https://www.drdo.gov.in/drdo/sites/default/files/drdo-news-documents/NPC25Jan2024.pdf",kind:"Government research publication carrying a retrospective"},
      {title:"Army defends Operation Sarp Vinash — Times of India, 9 Jul 2003",url:"https://timesofindia.indiatimes.com/india/army-defends-operation-sarp-vinash/articleshow/66259.cms",kind:"Contemporary reporting of Army statements"}
    ]
  },
  {
    id:"steeplechase-1971",title:"Operation Steeplechase",period:"Jul–Aug 1971",type:"internal-security",service:"Indian Army with civil / paramilitary law-enforcement elements",
    place:"Eastern India · West Bengal and adjoining areas",lat:23.6850,lng:87.7070,scope:"Inside India · counter-insurgency during President's Rule",
    summary:"A joint campaign against Naxalite insurgency in eastern India in July and August 1971, led by the Army with police and paramilitary participation under the political context of President's Rule in West Bengal. The atlas treats it as an internal-security case with major legal, political and civilian dimensions.",
    plan:"A U.S. Army War College strategic study describes the use of Army elements alongside police during President's Rule, with rural operations focused on areas including Birbhum. The public record is not a single complete Indian after-action file; this overview therefore sticks to the broad stated period and political context.",
    execution:"The cited historical study places the main campaign in July–August 1971 and says the rural component of the insurgency was suppressed while urban political violence continued into later years. This is a secondary historical interpretation; the page does not treat its summary as a full daily operational chronology.",
    friction:"The episode sits at the intersection of military aid to civil authority, policing, political violence and civil liberties. A responsible review must examine arrest and detention procedures, civilian impact, source bias and what happened after the campaign. The sources linked here do not establish a comprehensive, independently verified incident-by-incident list.",
    lessons:"Domestic security operations need clear lawful authority, accountable detention processes, reliable intelligence and coordination with civil administration. Measures of immediate disruption should be separated from long-term political and public-safety outcomes; a campaign's military result does not resolve its social or political causes.",
    chronology:[
      {date:"Jul 1971",title:"Main campaign begins",detail:"The U.S. Army War College study places the beginning of Operation Steeplechase in July 1971 under President's Rule in West Bengal."},
      {date:"Jul–Aug 1971",title:"Joint security campaign",detail:"The cited study describes Army-led action with police in the rural component of the Naxalite insurgency. It does not supply a fully sourced daily log."},
      {date:"After Aug 1971",title:"Insurgency and political violence continue",detail:"The same study states that urban violence continued beyond the rural campaign; this cautions against equating the end of an operation with a total end to the broader conflict."}
    ],
    sources:[
      {title:"U.S. Army War College / Strategic Studies Institute — strategic history of the Naxalite insurgency",url:"https://www.govinfo.gov/content/pkg/GOVPUB-D5-PURL-gpo74311/pdf/GOVPUB-D5-PURL-gpo74311.pdf",kind:"Secondary military-strategic study"},
      {title:"Official History of Indian Armed Forces — government history catalogue",url:"https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=177064",kind:"Government history catalogue"}
    ]
  },
  {
    id:"snow-leopard-2020",title:"Operation Snow Leopard",period:"2020 · Eastern Ladakh crisis",type:"combat",service:"Indian Army · high-altitude border deployment",
    place:"Eastern Ladakh / Line of Actual Control",lat:34.20,lng:78.05,scope:"Inside India · public record of the 2020 border crisis; marker is a broad theatre only",
    summary:"Operation Snow Leopard is named in official Ladakh administration records concerning Army personnel killed or injured in action in June 2020. It is used here as a broad public campaign label for the 2020 Eastern Ladakh crisis—not as a complete list of deployments or tactical positions.",
    plan:"The Defence Minister's 15 September 2020 statement says Indian and Chinese senior commanders met on 6 June and agreed to a disengagement process; the statement describes prior buildup, contested LAC perceptions and the need for military and diplomatic channels. This is the Indian government's account and should be read alongside the Chinese position and independent reporting.",
    execution:"The official Indian timeline publicly identifies a violent clash at Galwan on 15 June 2020 and later reports military movements on the southern bank of Pangong Tso on the night of 29–30 August. These are public milestones; the exact plans, units, orders and all tactical details are not reproduced in open sources here.",
    friction:"The public record confirms that a disengagement understanding preceded the June clash and that the boundary alignment is not commonly delineated in all sectors. A rigorous review must distinguish the government's public narrative from each side's position, the evidence independently available, and the unknown details of tactical decisions.",
    lessons:"For high-altitude border crises, analyse agreement verification, reliable communications, shared understanding of disengagement terms, medical evacuation, escalation management and diplomatic channels. When sources are contested, attribute each claim and avoid inventing a single definitive account of events that the public evidence cannot resolve.",
    chronology:[
      {date:"Apr–May 2020",title:"Build-up and face-offs described",detail:"The Defence Minister's statement to Parliament describes a buildup and face-offs in several parts of Eastern Ladakh during April and May."},
      {date:"6 Jun 2020",title:"Senior commanders agree a disengagement process",detail:"The Indian government's statement says both sides agreed on reciprocal actions and respecting the LAC."},
      {date:"15–16 Jun 2020",title:"Galwan clash",detail:"Official Ladakh administration records refer to Army personnel killed or injured in enemy action during Operation Snow Leopard on the night of 15/16 June."},
      {date:"29–30 Aug 2020",title:"Southern Pangong Tso public update",detail:"An Indian Army spokesperson's PIB update says Indian troops took measures after movements by PLA troops on the southern bank of Pangong Tso."},
      {date:"15 Sep 2020",title:"Government statement to Parliament",detail:"The Defence Minister laid out India's account of the boundary dispute, prior agreements, commander meetings and subsequent developments."}
    ],
    sources:[
      {title:"PIB / Ministry of Defence — Situation Update: Eastern Ladakh, 31 Aug 2020",url:"https://www.pib.gov.in/PressReleasePage.aspx?PRID=1649940&lang=2&reg=48",kind:"Official Indian Army update"},
      {title:"PIB — Defence Minister's statement in Lok Sabha, 15 Sep 2020",url:"https://www.pib.gov.in/PressReleasePage.aspx?PRID=1654484&lang=2&reg=48",kind:"Official parliamentary statement"},
      {title:"Ladakh Administration — Operation Snow Leopard ex-gratia orders",url:"https://ladakh.gov.in/document/order-no-29-home-of-2023-grant-of-ex-gratia-relief-of-rs-600000-rupees-six-lakhs-only-in-favour-of-army-personnel-who-weredisabled-in-enemy-actionduringoperation-snow-leopard-on-15-1/",kind:"Official local-government record"}
    ]
  },
  {
    id:"brahma-2025",title:"Operation Brahma",period:"From 29 Mar 2025 · Myanmar earthquake relief",type:"hadr",service:"Indian Army field hospital + tri-service / whole-of-government support",
    place:"Myanmar · Yangon and earthquake-affected areas",lat:21.9588,lng:96.0891,scope:"Outside India · humanitarian assistance and disaster relief",
    summary:"India's relief response after the 28 March 2025 earthquake in Myanmar. The Army deployed medical responders and a field hospital, while the wider operation integrated MEA coordination, the Armed Forces, NDRF and relief delivered by air and sea.",
    plan:"The Ministry of Defence's 29 March announcement described a 118-member Army medical response team and an initial 60-bed treatment centre for trauma, emergency surgery and medical care. Coordination with Myanmar authorities and the MEA was an explicit part of the deployment.",
    execution:"The initial Army announcement was made on 29 March 2025; Navy relief ships sailed on 29–30 March. A later PIB government overview states that the Army field hospital treated over 2,500 earthquake victims within two weeks, while six aircraft and five Navy ships delivered approximately 750 tonnes of relief material.",
    friction:"Early-response constraints in a major earthquake include damaged access routes, uncertain casualty locations, overwhelmed local health facilities, power/communications disruption and the challenge of combining medical teams with heavy logistics. The public releases provide dated snapshots, not a complete daily clinical or movement log.",
    lessons:"Rapid deployment needs a medical logistics chain, triage and onward referral, coordination with local health authorities, reliable supply lists, a clear shift from emergency care to handover, and a way to reconcile figures across Army, Navy, Air Force and civilian relief agencies.",
    chronology:[
      {date:"28 Mar 2025",title:"Earthquake strikes Myanmar",detail:"The government identifies the earthquake as the triggering event for Operation Brahma."},
      {date:"29 Mar 2025",title:"Army medical team announced",detail:"The Ministry of Defence announces a 118-member medical response team and an initial 60-bed treatment centre."},
      {date:"29–30 Mar 2025",title:"Maritime relief begins",detail:"The Ministry of Defence reports Indian Navy ships sailing with food, water, medicines and emergency stores for Yangon."},
      {date:"Early–mid Apr 2025",title:"Medical treatment and supplies continue",detail:"The later government overview reports more than 2,500 people treated over two weeks and approximately 750 tonnes of relief delivered by air and sea."}
    ],
    image:{src:"https://static.pib.gov.in/WriteReadData/userfiles/image/Image-23KWD.jpg",alt:"Indian Army personnel loading emergency relief supplies into a C-17 transport aircraft for Operation Brahma",caption:"Indian Army personnel and humanitarian supplies inside a C-17 during the Myanmar earthquake response, published by PIB on 29 March 2025.",credit:"Press Information Bureau / Ministry of Defence, Government of India",page:"https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2116635&lang=2&reg=48",license:"Official government press image; attribution is provided. Check applicable PIB reuse terms before redistribution."},
    sources:[
      {title:"PIB / Ministry of Defence — Operation Brahma: Army medical assistance, 29 Mar 2025",url:"https://www.pib.gov.in/PressReleaseIframePage.aspx?PRID=2116635&lang=2&reg=48",kind:"Official operation announcement"},
      {title:"PIB / Ministry of Defence — Navy ships sail with relief material, 30 Mar 2025",url:"https://www.pib.gov.in/pressreleasepage.aspx?lang=2&prid=2116801&reg=48",kind:"Official maritime relief update"},
      {title:"PIB — Beyond Battlefield: Indian Armed Forces in HADR, 15 Feb 2026",url:"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2228319&lang=1&reg=3",kind:"Government after-action overview"}
    ]
  },
  {
    id:"sagar-bandhu-2025",title:"Operation Sagar Bandhu",period:"From 28 Nov 2025 · Sri Lanka cyclone relief",type:"hadr",service:"Indian Army engineers + tri-service / whole-of-government response",
    place:"Sri Lanka · Mahiyanganaya and northern connectivity routes",lat:7.8731,lng:80.7718,scope:"Outside India · disaster relief and infrastructure restoration",
    summary:"India's humanitarian response after Cyclone Ditwah in Sri Lanka, launched on 28 November 2025. The Army's publicly described role included engineering support for bridges and connectivity, alongside wider naval logistics, Air Force evacuation and medical response.",
    plan:"The public government overview describes a combined response involving relief supplies, emergency medical care, evacuation of stranded people and restoration of critical connectivity. For the Army engineering component, the central task is to restore routes that relief teams and affected communities depend on without compromising bridge-site safety.",
    execution:"The PIB's 2026 retrospective says that by 9 December 2025 about 1,058 tonnes of relief had been delivered and over 2,500 stranded Indians evacuated. It reports a 120-foot dual-carriageway Bailey bridge opened on 23 December 2025 in Kilinochchi District, with bridge equipment and Army engineers supporting the recovery effort.",
    friction:"Cyclone damage affects roads, bridges, hospitals and communications at the same time. Restoring one connection does not itself prove the whole network is safe; work needs engineering assessment, load control, weather monitoring, coordination with Sri Lankan authorities and clear prioritisation of essential routes.",
    lessons:"Disaster operations need an end-to-end logistics picture: supplies, medical access, evacuation, bridge/road restoration and handover. Report daily versus cumulative tonnes and evacuees separately, coordinate with the host government, and measure restoration by safe access for communities—not simply by structures completed.",
    chronology:[
      {date:"28 Nov 2025",title:"Operation launched",detail:"The PIB retrospective dates the launch of Operation Sagar Bandhu to 28 November following Cyclone Ditwah."},
      {date:"By 9 Dec 2025",title:"Relief and evacuation totals published",detail:"The same government account reports roughly 1,058 tonnes of relief and more than 2,500 stranded Indians evacuated by the stated cut-off."},
      {date:"23 Dec 2025",title:"Bailey bridge opened",detail:"The PIB account states that a 120-foot dual-carriageway Bailey bridge opened in Kilinochchi District, restoring a critical connection."}
    ],
    sources:[
      {title:"PIB — Beyond Battlefield: Indian Armed Forces in HADR, 15 Feb 2026",url:"https://www.pib.gov.in/PressReleasePage.aspx?PRID=2228319&lang=1&reg=3",kind:"Government retrospective with dated milestones"},
      {title:"Ministry of External Affairs — Operation Sagar Bandhu statement",url:"https://www.mea.gov.in/press-releases.htm?dtl%2F40354%2FIndia+Undertakes+Operation+Sagar+Bandhu+for+Emergency+HADR+Assistance+to+Sri+Lanka+following+Cyclone+Ditwah",kind:"Government diplomatic record"},
      {title:"High Commission of India, Colombo — Sagar Bandhu relief materials",url:"https://www.hcicolombo.gov.in/section/press-releases/2under-operation-sagar-bandhu-1000-tonnes-of-relief-material-fromtamil-nadu-arrives-in-sri-lanka",kind:"Official mission update"}
    ]
  },
  {
    id:"official-history-catalogue",title:"Official-history index / campaign gaps",period:"Multiple conflicts and operations",type:"research",service:"Research collection · Government of India",
    place:"India and overseas missions",lat:22.9734,lng:78.6569,scope:"Evidence index, not a single operation",
    summary:"The Government of India's official-history catalogue includes not only wars but also Operation Polo, Goa's Operation Vijay, the Congo Operation, India's Custodian Force in Korea, Jammu & Kashmir 1947–48 and peace-mission history. It is an essential route into more complete archival research.",
    plan:"A research atlas needs to preserve the difference between an operation's codename, a war, a continuing deployment, a UN mission, a relief response and an official history volume. The index helps identify subjects that deserve their own dossier.",
    execution:"The Ministry of Defence's History Division is identified by the Government as responsible for researching and compiling military-operation histories. This card exists as a transparent index to keep the website's scope honest.",
    friction:"A single public webpage cannot be assumed to list every named Army action, internal-security operation, local engagement, peacekeeping deployment or classified mission. An inventory needs sustained archive work and source-by-source verification.",
    lessons:"Record source title, edition, date range, issuing institution and access route for every dossier. Mark unavailable records instead of guessing. Expand the catalogue only when the source trail supports a useful summary.",
    chronology:[
      {date:"7 Mar 2018",title:"Government history catalogue published",detail:"The PIB release names official histories across World War II and post-independence conflicts and describes the role of the Ministry of Defence History Division."}
    ],
    sources:[
      {title:"PIB — Official History of Indian Armed Forces, 7 March 2018",url:"https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=177064",kind:"Government history catalogue"}
    ]
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
