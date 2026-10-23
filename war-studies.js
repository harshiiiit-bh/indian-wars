/* First-party campaign studies for the Indian Wars Field Archive.
   Research summaries are editorial syntheses. Use linked sources for exact language and disputed details.
   Timeline entries are dated public milestones, not invented daily logs. */
const WAR_STUDIES = [
  {
    id: "kashmir-1947",
    campaignId: "kashmir-1947",
    title: "Jammu & Kashmir Conflict",
    period: "1947–1949",
    theatre: "Jammu & Kashmir · mountains, valley approaches and road corridors",
    thesis: "A crisis of accession became a prolonged campaign whose outcome depended on a combination of political decisions, rapid airlift, small-unit delaying actions, and the ability to sustain forces in difficult terrain.",
    context: [
      "At the end of British rule in 1947, Jammu and Kashmir was a princely state whose ruler had not initially acceded to either dominion. The crisis escalated when armed tribal forces entered from the west in October. The Maharaja sought military assistance and signed the Instrument of Accession to India on 26 October 1947; Indian troops began flying into Srinagar the following morning. The conflict then expanded well beyond the first defence of the valley, involving multiple sectors and a front that changed over more than a year.",
      "The conflict must be read in its political and human context as well as its military chronology. Competing national narratives, displacement, communal violence, and the later ceasefire arrangements all shaped the legacy. A battlefield summary alone cannot explain the entire Kashmir dispute."
    ],
    commanders: [
      { name: "Maharaja Hari Singh", role: "Ruler of Jammu and Kashmir", contribution: "Signed the Instrument of Accession on 26 October 1947 after the crisis escalated. This was a political decision, not a battlefield command.", tag: "Political authority" },
      { name: "Brigadier Rajinder Singh", role: "Chief of Staff, Jammu and Kashmir State Forces", contribution: "Led a delaying action against the advancing force on the approaches to the valley. He is remembered for buying time during the early crisis; the exact movement-by-movement sequence should be checked against fuller histories.", tag: "Early defensive leadership" },
      { name: "Lieutenant Colonel Dewan Ranjit Rai", role: "Commanding officer, 1 Sikh", contribution: "Led troops flown into Srinagar and moved to contest the advance toward the valley. His death in the opening phase is a reminder that the airlift created a foothold, not an instant resolution.", tag: "Front-line command" },
      { name: "Major Somnath Sharma", role: "4 Kumaon", contribution: "Led his company during the Battle of Badgam on 3 November 1947. The National War Memorial lists him among the earliest recipients of the Param Vir Chakra.", tag: "Battle of Badgam" },
      { name: "Indian Army and air transport crews", role: "Airlift and multi-sector campaign", contribution: "The rapid movement of troops and continued sustainment by air and road turned a vulnerable initial response into a campaign that could be reinforced.", tag: "Joint logistics" }
    ],
    phases: [
      { title: "1 · State crisis and invasion", dates: "August–October 1947", detail: "The unresolved accession question became an urgent security crisis as armed forces entered from the west. State forces fought delaying actions while political authorities weighed their options." },
      { title: "2 · Secure the valley", dates: "Late October–November 1947", detail: "Accession and the 27 October airlift gave Indian forces a basis to defend Srinagar and contest the approaches. Battles such as Badgam and Shalateng were decisive to the immediate defence of the valley." },
      { title: "3 · Wider campaign and ceasefire", dates: "Late 1947–1 January 1949", detail: "Operations continued across multiple sectors, including the mountain approaches toward Leh and the recapture of localities and passes. The conflict ended in a UN-associated ceasefire, not a comprehensive political settlement." }
    ],
    timeline: [
      { date: "22 Oct 1947", title: "Armed incursion escalates the crisis", detail: "The National War Memorial's official conflict narrative describes Pakistan's attempt to occupy Jammu and Kashmir by force immediately after independence. The onset of the invasion is the critical context for the accession and request for assistance.", status: "Documented milestone" },
      { date: "26 Oct 1947", title: "Instrument of Accession signed", detail: "The Maharaja signed the Instrument of Accession to India. Read the original instrument and surrounding political correspondence for legal and political context rather than relying on a one-sentence summary.", status: "Documented milestone" },
      { date: "27 Oct 1947", title: "Indian troops airlifted into Srinagar", detail: "The airlift established a rapid defensive presence when road movement alone could not meet the urgency. The operation still required follow-on reinforcement, intelligence, and sustainment.", status: "Documented milestone" },
      { date: "3 Nov 1947", title: "Battle of Badgam", detail: "Major Somnath Sharma and 4 Kumaon fought at Badgam. The stand is part of the documented defence of Srinagar's approaches and is commemorated in India's gallantry record.", status: "Documented milestone" },
      { date: "7 Nov 1947", title: "Shalateng counter-attack", detail: "Indian forces counter-attacked in the Shalateng area after the immediate threat to Srinagar had become acute. This date is useful for studying how the initial defensive phase developed into an offensive response.", status: "Major campaign milestone" },
      { date: "1 Jan 1949", title: "Ceasefire takes effect", detail: "The ceasefire ended active fighting along the agreed line at that time. It did not settle the underlying political dispute or the question of final status.", status: "Documented milestone" }
    ],
    planning: "The immediate military problem was to prevent the loss of Srinagar and keep routes open long enough to bring in more troops. The political decision to accede and the decision to airlift forces were linked but distinct: one established the government's stated legal basis, while the other established a military foothold. A useful planning study asks what decision-makers knew on each date, how much time was available, and which routes and airfields could actually be used.",
    execution: "The early response relied on air transport, small units resisting or delaying the advance, and the rapid commitment of reinforcements. Badgam and Shalateng illustrate different demands: a determined local defence can buy time, while a counter-attack can change the immediate threat picture. The broader campaign then required operations across a dispersed and mountainous theatre. For later phases, this reader gives significant milestones rather than making up a unit diary for every day.",
    friction: [
      { label: "Compressed decision time", detail: "The political crisis and rapidly changing situation limited the time available for a deliberate response. Reconstruct the sequence from dated correspondence and operational histories before blaming a single individual.", type: "Context / constraint" },
      { label: "Airlift versus sustainment", detail: "Getting the first force into Srinagar was only the opening problem; maintaining ammunition, food, medical support, communications and follow-on forces over time was a separate challenge.", type: "Operational lesson" },
      { label: "Contested political narrative", detail: "Different parties describe accession, the conflict's causes and the ceasefire differently. Present the documented instrument, dates and competing accounts separately rather than collapsing them into a slogan.", type: "Evidence caveat" }
    ],
    lessons: [
      { label: "First response must create time", detail: "A fast initial move is valuable when it preserves a critical node; follow-on logistics and force generation determine whether that foothold lasts." },
      { label: "Political authority and military action interact", detail: "Military action sits inside legal, diplomatic and civil decision-making. Record the decision chain without confusing political authority with tactical command." },
      { label: "Study leaders at their actual echelon", detail: "A ruler, senior commander and company commander influence different parts of a campaign. Compare their decisions at the scale they could control." },
      { label: "Keep human consequences in view", detail: "Territorial changes are not the whole story. Civilian harm, displacement, communal violence and long-term political effects deserve their own sourced account." }
    ],
    sources: [
      { title: "National War Memorial — India–Pakistan Conflict, 1947–48", publisher: "Government of India", kind: "Official memorial record", url: "https://nationalwarmemorial.gov.in/murals/totem_details/1", supports: "Airlift date, ceasefire date, conflict overview and gallantry names." },
      { title: "Official History of Indian Armed Forces", publisher: "Press Information Bureau · Ministry of Defence", kind: "Official-history catalogue", url: "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=177064", supports: "Confirms the government-listed official history for operations in Jammu and Kashmir, 1947–48." },
      { title: "Samar Abhilekh — History Division collections", publisher: "Ministry of Defence / IIT Kanpur", kind: "Historical archive portal", url: "https://samar.iitk.ac.in/about", supports: "Explains the History Division's role and the availability of declassified military records." }
    ]
  },
  {
    id: "goa-1961",
    campaignId: "goa-1961",
    title: "Operation Vijay — Goa Liberation",
    period: "17–19 December 1961",
    theatre: "Goa, Daman and Diu · land, air and sea",
    thesis: "A short tri-service operation concluded Portuguese colonial rule in Goa, Daman and Diu. Its brevity should not obscure the diplomatic context, combined-service planning, civilian implications and transition that followed military surrender.",
    context: [
      "Portuguese rule continued in Goa after British rule ended in 1947. India pursued diplomatic efforts, but by December 1961 the government decided to use force. The operation is called Operation Vijay, a name later used for the Indian Army's 1999 Kargil campaign; the two should never be conflated.",
      "The operation lasted roughly 36 hours in the official memorial account. India's three services supported land advances and actions at sea and in the air. The 19 December surrender and transfer of control were the military end state; the political incorporation and post-operation administration are separate topics."
    ],
    commanders: [
      { name: "Jawaharlal Nehru", role: "Prime Minister of India", contribution: "Led the political government that decided to end Portuguese rule after a long dispute and a period of diplomatic efforts.", tag: "Political decision" },
      { name: "Major General K. P. Candeth", role: "Indian Army ground command", contribution: "Commonly identified in published histories as the commander of the ground campaign. This profile is about command responsibility, not a claim that one commander alone produced the result.", tag: "Ground operations" },
      { name: "Manuel António Vassalo e Silva", role: "Portuguese Governor-General", contribution: "The Portuguese authority who accepted surrender. His decision marked the end of organised Portuguese military resistance in the territories.", tag: "Opposing command" },
      { name: "Indian Army, Navy and Air Force commanders", role: "Joint operation", contribution: "The operation involved 17 Infantry Division, 50 Parachute Brigade and supporting elements of the Navy and Air Force, as stated by the National War Memorial.", tag: "Joint action" }
    ],
    phases: [
      { title: "1 · Decision and preparation", dates: "Before 17 December 1961", detail: "Political aims, diplomatic breakdown, service plans, routes and the post-surrender end state shaped the decision to act. The public source record does not expose every internal order." },
      { title: "2 · Joint action", dates: "17–18 December 1961", detail: "Land columns advanced while air and naval actions formed part of the wider operation. Different locations and services had distinct tasks within one political objective." },
      { title: "3 · Surrender and transition", dates: "19 December 1961 onward", detail: "Portuguese forces surrendered and control changed hands. Military success and the subsequent civil-administrative transition should be studied as related but separate phases." }
    ],
    timeline: [
      { date: "17 Dec 1961", title: "Operation begins", detail: "Indian Armed Forces commenced the operation to end Portuguese control in Goa, Daman and Diu. Public histories describe a coordinated land, sea and air action.", status: "Documented milestone" },
      { date: "17–18 Dec 1961", title: "Land and supporting-service actions", detail: "Ground forces advanced across the theatre with naval and air support. Available summary sources do not provide an equally complete daily record for every axis; unit-level claims should be sourced separately.", status: "Campaign phase" },
      { date: "19 Dec 1961", title: "Portuguese surrender", detail: "The National War Memorial's account describes the decisive end of Portuguese rule and the incorporation of Goa, Daman and Diu into India.", status: "Documented milestone" }
    ],
    planning: "The central planning task was to align a short operation with a clear political end state: end Portuguese military control, coordinate three services, avoid unnecessary delay, and then enable administration to assume responsibility. A study should separate the strategic decision to act, the military concept, the service-specific plans, and the arrangements after surrender.",
    execution: "The official memorial describes a roughly 36-hour tri-service operation involving 17 Infantry Division, 50 Parachute Brigade and supporting naval and air elements. This is best understood as a coordinated campaign rather than a single battle. The short duration also means the public record is more useful for major phases than for a fabricated 'every hour' narrative.",
    friction: [
      { label: "Diplomatic and legal debate", detail: "The decision to use force generated international and legal debate. A balanced study should preserve both India's stated position and the reactions of other governments rather than assuming military outcome ended diplomatic argument.", type: "Strategic context" },
      { label: "Joint planning is more than parallel service plans", detail: "A joint operation must coordinate timing, communications, identification, medical support, and responsibilities at handover. The public summary demonstrates joint participation but is not detailed enough to audit every coordination issue.", type: "Analyst question" },
      { label: "Post-surrender transition", detail: "A surrender is not the end of governance. Civil administration, public order, services and the protection of civilians form part of the end-state design.", type: "Operational lesson" }
    ],
    lessons: [
      { label: "Define the political end state", detail: "Military action is only one phase of achieving a national objective; the handover and administration after action should be planned from the start." },
      { label: "Jointness needs common timing and command relationships", detail: "Land, air and naval participation should be studied as one operation with separate supporting functions, not as three unrelated stories." },
      { label: "Short operations still require evidence-led analysis", detail: "A rapid result does not establish that every decision was optimal. Use official histories, diplomatic records and civilian accounts to test claims." }
    ],
    sources: [
      { title: "National War Memorial — Liberation of Goa", publisher: "Government of India", kind: "Official memorial record", url: "https://nationalwarmemorial.gov.in/war-depictions/details/3", supports: "Duration, service participation and surrender on 19 December 1961." },
      { title: "Official History of Indian Armed Forces", publisher: "Press Information Bureau · Ministry of Defence", kind: "Official-history catalogue", url: "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=177064", supports: "Confirms Operation Vijay — Goa as a published official history." },
      { title: "National Archives of India — Public Records", publisher: "Government of India", kind: "Research guide", url: "https://nationalarchives.nic.in/en/public-records-holdings/public-records", supports: "A path to broader civil and administrative records beyond the operational summary." }
    ]
  },
  {
    id: "sino-indian-1962",
    campaignId: "sino-indian-1962",
    title: "Sino-Indian War",
    period: "20 October–21 November 1962",
    theatre: "Ladakh and the North-East Frontier Agency (now Arunachal Pradesh)",
    thesis: "The 1962 defeat exposed a mismatch between political aims, strategic assessment, force posture, high-altitude sustainment and operational command. Specific blame requires care because the complete official review remains classified.",
    context: [
      "The war grew from a disputed boundary and a deterioration of India–China relations. Fighting took place in two widely separated theatres: the western sector around Ladakh and the eastern sector then known as NEFA. A single narrative centred on one battle misses the different geography, communications and command problems in those sectors.",
      "The public record includes official commemorations and memoirs but does not provide unrestricted access to the entire post-war review. In a 2014 statement, the Ministry of Defence reiterated that the Henderson Brooks–Bhagat report was classified. Therefore, this study separates widely documented outcomes from disputed accounts of internal decisions."
    ],
    commanders: [
      { name: "Jawaharlal Nehru", role: "Prime Minister of India", contribution: "Head of government during the conflict; political direction and public expectations form part of the strategic context.", tag: "Political authority" },
      { name: "General P. N. Thapar", role: "Chief of Army Staff", contribution: "The Army chief during the war. Study the institutional chain between political direction, Army Headquarters and field formations rather than assigning every outcome to a single person.", tag: "Army leadership" },
      { name: "Lieutenant General B. M. Kaul", role: "IV Corps command in the eastern theatre", contribution: "A central and contested figure in the eastern campaign. His decisions are widely discussed in post-war literature; claims about individual responsibility should be attributed to a specific source.", tag: "Operational command" },
      { name: "Brigadier John Dalvi", role: "7 Infantry Brigade at Namka Chu", contribution: "Commanded the brigade caught in the initial eastern offensive and later wrote a prominent account of the campaign. Treat memoir and official evidence as related but distinct sources.", tag: "Front-line formation" },
      { name: "Major Shaitan Singh", role: "C Company, 13 Kumaon at Rezang La", contribution: "Led his company during the battle of Rezang La on 18 November 1962 and became a major figure in India's gallantry history.", tag: "Rezang La" }
    ],
    phases: [
      { title: "1 · Border crisis and forward deployments", dates: "Before October 1962", detail: "Political and military decisions placed isolated posts in difficult terrain. The key question is whether the deployed posture, stated objectives and available reinforcement matched the actual threat and logistics." },
      { title: "2 · Coordinated offensives in two theatres", dates: "20 October–mid-November", detail: "Chinese attacks struck eastern and western sectors. Sparse roads, altitude, weather and communications made reinforcement and command-and-control difficult; local units experienced very different tactical conditions." },
      { title: "3 · Final attacks and unilateral ceasefire", dates: "18–21 November 1962", detail: "Severe fighting continued in places such as Rezang La and Walong before China announced a unilateral ceasefire. A ceasefire announcement did not erase the operational and institutional questions exposed by the defeat." }
    ],
    timeline: [
      { date: "20 Oct 1962", title: "Major offensive begins", detail: "Large-scale fighting opened in the eastern sector and in Ladakh. The separated theatres should be analysed independently before comparing how the national command system supported each.", status: "Documented milestone" },
      { date: "Late Oct 1962", title: "The eastern positions come under heavy pressure", detail: "The initial offensive overwhelmed forward positions in the Namka Chu area. Public histories and memoirs differ in their explanations of orders, command decisions and the feasibility of holding the positions.", status: "Campaign phase" },
      { date: "14–18 Nov 1962", title: "Renewed fighting in the eastern sector and at Walong", detail: "The fighting intensified in several localities as the conflict entered a new phase. Unit histories are needed for accurate day-level reconstruction rather than a single whole-front summary.", status: "Campaign phase" },
      { date: "18 Nov 1962", title: "Battle of Rezang La", detail: "C Company, 13 Kumaon, under Major Shaitan Singh defended the Chushul area. The National War Memorial identifies the battle as a notable last stand; details should be read alongside unit histories.", status: "Documented milestone" },
      { date: "20–21 Nov 1962", title: "Unilateral ceasefire announced", detail: "China announced a unilateral ceasefire to take effect on 21 November. The ending of major combat did not constitute a mutually negotiated settlement of the border dispute.", status: "Documented milestone" }
    ],
    planning: "A sound mountain campaign plan must connect political objectives and the chosen defensive posture to roads, acclimatisation, clothing, weapons, air support, reserves, communications and medical evacuation. A post-war review should ask whether the objectives assigned to units were achievable with what they could actually receive, not merely whether they followed orders.",
    execution: "The conflict was fought across high, remote and dissimilar terrain. Some units faced severe isolation; others fought determined actions under overwhelming pressure. The overall outcome reflected problems beyond the courage of front-line soldiers. Any reconstruction should compare the eastern and western sectors, show the chain of orders where sources permit, and identify where historians disagree.",
    friction: [
      { label: "Ends and means", detail: "A recurring question in military histories is whether political and military objectives matched the forces and logistics available in the terrain. This is an analytical issue, not a substitute for documenting the actual orders.", type: "Strategic assessment" },
      { label: "Logistics and acclimatisation", detail: "At high altitude, road access, winter equipment, shelter, ammunition and casualty evacuation are operational necessities. Unsupported positions can become tactically untenable regardless of individual bravery.", type: "Operational constraint" },
      { label: "Command-and-control", detail: "The relationship between political direction, Army Headquarters, corps and brigade command remains central to the historical debate. Attribute assessments of individual leaders rather than presenting one memoir's view as settled fact.", type: "Contested interpretation" },
      { label: "Classified review material", detail: "The Ministry of Defence stated in 2014 that the Henderson Brooks–Bhagat report was classified. Do not present leaked excerpts or internet claims as a complete official finding.", type: "Evidence caveat" }
    ],
    lessons: [
      { label: "Do not assign impossible tasks", detail: "Orders must be tested against terrain, available force, reinforcement time and sustainment. A map distance is not a measure of practical mobility in the Himalayas." },
      { label: "Intelligence must drive force posture", detail: "Indicators, uncertainty, alternative explanations and the cost of being wrong should be recorded explicitly in the decision process." },
      { label: "A brave local defence cannot repair a broken system", detail: "Front-line courage can delay an advance or protect a position, but institutional preparedness and feasible orders remain strategic responsibilities." },
      { label: "Use evidence hierarchies", detail: "Official statements, unit histories, memoirs, parliamentary records and later scholarship answer different questions. Their disagreements should be shown, not hidden." }
    ],
    sources: [
      { title: "National War Memorial — Battle of Rezang La and 1947–62 conflicts", publisher: "Government of India", kind: "Official memorial record", url: "https://nationalwarmemorial.gov.in/war-depictions/details/3", supports: "Rezang La on 18 November 1962 and the role of C Company, 13 Kumaon." },
      { title: "Ministry of Defence statement on Henderson Brooks report", publisher: "Press Information Bureau", kind: "Official statement", url: "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=3&relid=104633", supports: "The government's 2014 statement that the report remains classified." },
      { title: "Official History of Indian Armed Forces", publisher: "Press Information Bureau · Ministry of Defence", kind: "Official-history catalogue", url: "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=177064", supports: "History Division's wider official-history holdings and institutional context." }
    ]
  },
  {
    id: "indo-pak-1965",
    campaignId: "indo-pak-1965",
    title: "India–Pakistan War",
    period: "August–September 1965",
    theatre: "Jammu and Kashmir, Punjab and the western front",
    thesis: "The 1965 war widened from infiltration and local fighting into a multi-front interstate conflict. It shows how political choices, armour, infantry, artillery and air support interact when an operation's original assumptions fail.",
    context: [
      "The war followed earlier border clashes and a disputed Kashmir situation. Pakistan's Operation Gibraltar sought to infiltrate forces into Jammu and Kashmir and generate an uprising; the expected political-military effect did not materialise as intended. Operation Grand Slam then attacked toward Akhnoor, a communication link of importance to Indian-held Kashmir.",
      "India expanded the geography of the war by crossing the international border in Punjab on 6 September. The conflict included major armoured action, air operations and local battles such as Asal Uttar and Phillora. A ceasefire took effect in late September; the Tashkent Declaration followed in January 1966."
    ],
    commanders: [
      { name: "Lal Bahadur Shastri", role: "Prime Minister of India", contribution: "Provided the political direction during the conflict, including the decision to expand the theatre beyond the Kashmir front.", tag: "Political leadership" },
      { name: "General J. N. Chaudhuri", role: "Chief of Army Staff", contribution: "Army chief during the war. His role belongs in the study of national-level command, force employment and decisions across multiple fronts.", tag: "Army leadership" },
      { name: "Air Chief Marshal Arjan Singh", role: "Chief of the Air Staff", contribution: "Led the Indian Air Force during the conflict. Official retrospectives describe the IAF's response to the Grand Slam offensive and its contribution across fronts.", tag: "Air–land context" },
      { name: "Major Ranjit Singh Dayal", role: "1 PARA", contribution: "The National War Memorial highlights his leadership in the Haji Pir operations and the personal example he set for his men.", tag: "Front-line leadership" },
      { name: "Major General G. S. Gill and formations at Asal Uttar", role: "Defence around Khem Karan", contribution: "The battle involved a deliberate horseshoe-shaped defensive position and coordinated infantry, armour and anti-tank action. Study unit-level commanders in the linked battle histories.", tag: "Asal Uttar" }
    ],
    phases: [
      { title: "1 · Infiltration and local counter-action", dates: "August 1965", detail: "Operation Gibraltar attempted to change the situation in Kashmir through infiltration. Indian responses, including action around Haji Pir, disrupted the campaign's assumptions and shaped the next phase." },
      { title: "2 · Grand Slam and widening war", dates: "1–7 September", detail: "The attack toward Akhnoor threatened a key line of communication. India brought air power into the conflict and opened a front across the international border in Punjab, transforming the scale of the war." },
      { title: "3 · Armoured battles and ceasefire", dates: "8–23 September", detail: "Asal Uttar, Phillora and other battles tested armour, anti-tank defence, artillery and air support. The ceasefire ended the main fighting but did not resolve the underlying political dispute." }
    ],
    timeline: [
      { date: "5 Aug 1965", title: "Operation Gibraltar infiltration phase", detail: "Pakistan launched an infiltration campaign in Jammu and Kashmir, aiming to foster local unrest and alter the political situation. Official Indian accounts and Pakistani accounts describe the objective differently; read both before drawing conclusions.", status: "Campaign milestone" },
      { date: "1 Sep 1965", title: "Operation Grand Slam attacks toward Akhnoor", detail: "Pakistan's attack in the Chhamb–Akhnoor sector threatened a critical communication route. The Indian Air Force was called into action; its official retrospective discusses the rapid response on the first day.", status: "Documented milestone" },
      { date: "6 Sep 1965", title: "War expands across the international border", detail: "India opened a front in Punjab as part of the effort to relieve pressure on Akhnoor. The decision changed the conflict from a Kashmir-focused crisis to a wider war.", status: "Documented milestone" },
      { date: "8–10 Sep 1965", title: "Battle of Asal Uttar", detail: "Indian forces adopted a horseshoe-shaped defensive position near Khem Karan. The use of terrain and wet fields disrupted the attacking armoured force, while Indian armour and infantry engaged it at close range.", status: "Documented battle" },
      { date: "10 Sep 1965", title: "Battle of Phillora", detail: "Major armoured fighting took place in the Sialkot sector. This battle should be studied alongside Asal Uttar, not as an isolated tank duel.", status: "Documented battle" },
      { date: "23 Sep 1965", title: "Ceasefire", detail: "A UN-backed ceasefire took effect, ending the main fighting. The conflict's military outcome and its post-war diplomatic settlement are different questions.", status: "Documented milestone" }
    ],
    planning: "The initial infiltration concept depended on assumptions about local response and the ability to keep the conflict geographically limited. Once the operation failed to create the expected political effect, decisions by both governments broadened the campaign. The attack on Akhnoor made the protection of communications central, while crossing the international border created pressure on Pakistan's wider front and generated new risks of escalation.",
    execution: "The campaign combined infantry, armour, artillery and air operations across multiple sectors. At Asal Uttar, Indian troops used a defensive layout and the saturated agricultural ground to constrain armoured movement. In other sectors, armoured formations and air power played different roles. It is incorrect to describe the war as decided by one platform or one battle alone.",
    friction: [
      { label: "Assumptions about local support", detail: "The infiltration campaign depended on a political response that did not occur at the scale anticipated in the official Indian account. A rigorous study should compare public, military and Pakistani histories rather than assuming every account uses the same framing.", type: "Strategic miscalculation to investigate" },
      { label: "Escalation beyond the initial theatre", detail: "Opening another front relieved pressure in one area but enlarged the war, increasing the demands on command, logistics and air defence. It was a strategic trade-off, not a consequence-free fix.", type: "Strategic trade-off" },
      { label: "Combined-arms coordination", detail: "Asal Uttar demonstrates how terrain, infantry, armour, artillery and anti-tank weapons interact. The lesson is not that one tank type or one tactic guarantees victory; circumstances matter.", type: "Operational lesson" }
    ],
    lessons: [
      { label: "Test the political assumptions behind a plan", detail: "A plan that requires a population to behave in a particular way is fragile if that assumption has not been verified." },
      { label: "A supporting front can create both leverage and risk", detail: "Widening a theatre can change an opponent's choices, but it also expands logistics, casualties and escalation pathways." },
      { label: "Terrain changes platform performance", detail: "Armour, infantry and anti-tank weapons perform differently in open ground, built-up areas and waterlogged fields; the environment is part of the plan." },
      { label: "Read battlefield claims comparatively", detail: "Official accounts are essential records, but a full evaluation also compares adversary sources, independent scholarship and post-war diplomatic documents." }
    ],
    sources: [
      { title: "National War Memorial — Battle of Asal Uttar", publisher: "Government of India", kind: "Official battle record", url: "https://nationalwarmemorial.gov.in/war-depictions/details/7", supports: "Dates, defensive layout, named formations and the interaction of terrain and armour." },
      { title: "Seminar: 1965 India–Pakistan War — Role of IAF", publisher: "Press Information Bureau · Ministry of Defence", kind: "Official service retrospective", url: "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=109364", supports: "IAF response to Operation Grand Slam and air–land coordination." },
      { title: "Commemorating the ceasefire of the 1965 war", publisher: "Press Information Bureau · Ministry of Defence", kind: "Official retrospective", url: "https://www.pib.gov.in/PressReleasePage.aspx?PRID=2171328&lang=2&reg=48", supports: "The September 2025 government retrospective and ceasefire context." },
      { title: "Official History of Indian Armed Forces", publisher: "Press Information Bureau · Ministry of Defence", kind: "Official-history catalogue", url: "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=177064", supports: "Listing of the official history of the 1965 war." }
    ]
  },
  {
    id: "indo-pak-1971",
    campaignId: "indo-pak-1971",
    title: "India–Pakistan War & Bangladesh Liberation",
    period: "March–December 1971 · interstate war in December",
    theatre: "Eastern and western fronts · land, air and sea",
    thesis: "The December campaign's rapid outcome rested on a much longer political, humanitarian and military crisis. Its study requires separating the Bangladesh Liberation War from the thirteen-day interstate war while showing how political aims, theatre priorities and joint service action aligned.",
    context: [
      "The crisis in East Pakistan preceded the interstate war. The 25 March 1971 Operation Searchlight and the violence that followed drove a mass refugee crisis and a liberation struggle. The December war began after Pakistan launched air strikes on Indian bases on 3 December. India's military response operated on both eastern and western fronts while the wider political and humanitarian context shaped the war's aims.",
      "On 16 December 1971, Lieutenant General A. A. K. Niazi signed the Instrument of Surrender in Dhaka, accepted by Lieutenant General Jagjit Singh Aurora for the Indian and Bangladesh forces in the eastern theatre. The surrender and the emergence of Bangladesh were the decisive outcomes. The western front, maritime operations, refugees, diplomacy and the preceding nine months remain essential to the full story."
    ],
    commanders: [
      { name: "Indira Gandhi", role: "Prime Minister of India", contribution: "Led the national government through the refugee crisis, diplomacy and the decision to respond to the December attacks. Political objectives shaped the campaign's scope.", tag: "National strategy" },
      { name: "Field Marshal Sam Manekshaw", role: "Chief of Army Staff", contribution: "Army chief during the war. His leadership and advice are often studied in relation to readiness, timing and the need to prepare before committing to a major campaign.", tag: "Army leadership" },
      { name: "Lieutenant General Jagjit Singh Aurora", role: "GOC-in-C, Eastern Command", contribution: "Signed the Instrument of Surrender on 16 December on behalf of the Indian and Bangladesh forces in the eastern theatre.", tag: "Eastern theatre commander" },
      { name: "Lieutenant General Sagat Singh", role: "IV Corps", contribution: "Associated with the eastern campaign's rapid manoeuvre and the Meghna crossing, which helped Indian forces advance toward Dhaka.", tag: "Front-level manoeuvre" },
      { name: "Lieutenant General A. A. K. Niazi", role: "Pakistani Eastern Command", contribution: "Signed the surrender instrument in Dhaka, marking the collapse of the Pakistani military position in the eastern theatre.", tag: "Opposing command" }
    ],
    phases: [
      { title: "1 · Political and humanitarian crisis", dates: "March–November 1971", detail: "The liberation struggle, repression and refugee movement formed the wider context. India's diplomacy, training and preparation unfolded over months; the war did not begin from a blank slate on 3 December." },
      { title: "2 · War opens on two fronts", dates: "3–8 December 1971", detail: "Pakistani air strikes on 3 December were followed by Indian military action in the eastern and western theatres. Eastern operations focused on defeating organised resistance and reaching Dhaka; western actions guarded against threats and sought operational advantage." },
      { title: "3 · Rapid advance and surrender", dates: "9–16 December 1971", detail: "Joint action, operational manoeuvre and pressure on the eastern theatre accelerated the campaign. The surrender in Dhaka on 16 December ended major fighting in the east, while negotiations and the ceasefire context on other fronts remained important." }
    ],
    timeline: [
      { date: "25 Mar 1971", title: "Operation Searchlight begins", detail: "The Pakistani military crackdown in East Pakistan escalated the political and humanitarian crisis. It is contextual background to the war, not an Indian operation.", status: "Essential context" },
      { date: "Spring–Autumn 1971", title: "Refugee crisis, liberation struggle and preparation", detail: "The crisis and movement of millions of refugees affected Indian policy. Military preparation, diplomatic engagement and support for the Bangladesh liberation struggle occurred before interstate war began.", status: "Campaign phase" },
      { date: "3 Dec 1971", title: "Pakistani air strikes; interstate war begins", detail: "Pakistan launched pre-emptive air strikes against Indian air bases. India responded with operations on the eastern and western fronts.", status: "Documented milestone" },
      { date: "4–8 Dec 1971", title: "Multi-front operations intensify", detail: "Land, air and naval operations shaped the campaign. The National War Memorial records battles including Chhamb and Basantar, showing that the western front also required serious combat.", status: "Campaign phase" },
      { date: "9 Dec 1971", title: "Meghna crossing shapes eastern manoeuvre", detail: "The eastern campaign included rapid movement across major river barriers. The crossing associated with IV Corps illustrates the importance of initiative, engineers, helicopter lift and adaptation to geography.", status: "Major operational milestone" },
      { date: "15–17 Dec 1971", title: "Battle of Basantar", detail: "The National War Memorial records the battle during 15–17 December and the defence of captured positions through repeated counter-attacks.", status: "Documented battle" },
      { date: "16 Dec 1971", title: "Surrender in Dhaka", detail: "Lieutenant General Jagjit Singh Aurora accepted the Instrument of Surrender from Lieutenant General A. A. K. Niazi in Dhaka. The eastern theatre's military outcome was decisive.", status: "Documented milestone" }
    ],
    planning: "The war illustrates the value of aligning political purpose, preparation time, theatre priorities, diplomacy and joint planning. The eastern theatre's political objective was not simply to occupy terrain: it was connected to the Bengali liberation struggle and the crisis created by the crackdown and refugee flow. A complete study must also include the western front, the sea war, air operations and the diplomatic setting.",
    execution: "The campaign's eastern outcome developed through coordinated ground manoeuvre, air operations, river crossings, and pressure on the command system centred on Dhaka. The official government retrospective emphasises jointness among the Army, Navy and Air Force. The western theatre saw significant battles too; a Dhaka-only narrative would obscure the broader war and risks to Indian forces on other fronts.",
    friction: [
      { label: "A thirteen-day war followed months of crisis", detail: "Counting only the days of interstate war can erase the political violence, displacement and preparations that preceded it. Always state what date range a chronology is measuring.", type: "Chronology caveat" },
      { label: "Multiple fronts demanded balanced decisions", detail: "The eastern objective was decisive, but western front security and maritime action could not be ignored. The commander’s problem was a theatre-level allocation problem, not simply an east-only race.", type: "Operational challenge" },
      { label: "Humanitarian context is not a footnote", detail: "The refugee crisis and violence in East Pakistan shaped the political setting. A military assessment should not reduce civilians to background scenery.", type: "Historical responsibility" }
    ],
    lessons: [
      { label: "Align political objectives with military design", detail: "A clearly defined end state makes it easier to prioritise theatres, resources and the required pace of action." },
      { label: "Preparation and timing matter", detail: "Readiness, diplomacy, logistics and weather/terrain planning precede the moment a campaign appears to begin." },
      { label: "Jointness must be visible in the record", detail: "Land, air and sea operations should be studied as interconnected efforts with distinct tasks and shared objectives." },
      { label: "Do not erase the people behind the campaign", detail: "Civilian suffering, displacement and post-war reconciliation deserve evidence-led coverage alongside commanders and battles." }
    ],
    sources: [
      { title: "1971 War commemorative release", publisher: "Press Information Bureau · Ministry of Defence", kind: "Official retrospective", url: "https://www.pib.gov.in/newsite/erelcontent.aspx?lang=2&reg=48&relid=228559", supports: "The surrender ceremony, participating commanders, jointness and the official account of the war's outcome." },
      { title: "National War Memorial — Battles of 1971", publisher: "Government of India", kind: "Official battle record", url: "https://nationalwarmemorial.gov.in/war-depictions/details/5", supports: "Chhamb, Basantar and the western front's dated battles." },
      { title: "The India–Pakistan War 1971", publisher: "Ministry of External Affairs / official-history publication", kind: "Long-form history", url: "https://www.mea.gov.in/Uploads/PublicationDocs/23460_IWM_Book__11-06-2014_.pdf", supports: "A longer institutional history for following the campaign beyond short commemorative summaries." },
      { title: "Official History of Indian Armed Forces", publisher: "Press Information Bureau · Ministry of Defence", kind: "Official-history catalogue", url: "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=177064", supports: "Official history catalogue and wider archival context." }
    ]
  },
  {
    id: "operation-meghdoot",
    campaignId: "operation-meghdoot",
    title: "Operation Meghdoot",
    period: "Launched 13 April 1984 · continuing Siachen context",
    theatre: "Siachen Glacier and Saltoro Ridge, Ladakh",
    thesis: "Meghdoot is best understood as a high-altitude positioning operation whose opening move became a long logistics and sustainment commitment. The first occupation of key heights was only the beginning of the operational problem.",
    context: [
      "The Siachen region's disputed cartographic and expedition history sharpened concern that the other side might establish control over strategic heights and passes. India launched Operation Meghdoot on 13 April 1984. Airlift and helicopter support were central because troops had to reach and sustain positions at extreme altitude.",
      "Public histories often celebrate the surprise of the opening deployment, but a fuller military study includes acclimatisation, weather windows, load limits, casualty evacuation, shelter, communication, medical risk and the repeated delivery of necessities to posts. The operation's long duration means a start date is not an end date; its subsequent history contains many separate incidents and policy decisions."
    ],
    commanders: [
      { name: "General A. S. Vaidya", role: "Chief of Army Staff at launch", contribution: "Provided the Army's senior service leadership during the launch period.", tag: "Service leadership" },
      { name: "Lieutenant General M. L. Chibber", role: "GOC-in-C, Northern Command", contribution: "Named in published histories as a senior commander involved in planning the operation and the Northern Command war-game process.", tag: "Theatre leadership" },
      { name: "Lieutenant General P. N. Hoon", role: "GOC, XV Corps", contribution: "Associated with the corps-level planning discussions for securing the glacier and key passes.", tag: "Corps planning" },
      { name: "Lieutenant General C. N. Somanna", role: "Director General of Military Operations", contribution: "Identified in published accounts as one of the important planners. His role is a useful reminder that operation design often involves staff work that is less visible than the first troops on a feature.", tag: "Operational design" },
      { name: "Brigadier Jal Master and Brigadier V. Channa", role: "Infantry brigade / sector command", contribution: "Listed in retrospective histories among the commanders involved in the deployment. Exact unit responsibilities should be matched to the dated source being cited.", tag: "Formation leadership" }
    ],
    phases: [
      { title: "1 · Reconnaissance and planning", dates: "Before April 1984", detail: "The Army examined the implications of the cartographic and mountaineering context, and planned to secure important heights and passes before the competing move could succeed. A March 1984 war-game is described in published retrospectives." },
      { title: "2 · Opening deployment", dates: "13 April 1984", detail: "Army troops were moved to key high-altitude features with important IAF airlift and helicopter support. Altitude, weather and the availability of landing/drop zones made the lift and follow-on support demanding." },
      { title: "3 · Sustainment and recurring risk", dates: "1984 onward", detail: "The operation's duration made logistics, casualty prevention, rotations, medical care and weather-driven movement a recurring operational system. It cannot be accurately represented as a single short battle." }
    ],
    timeline: [
      { date: "Oct 1978", title: "IAF helicopter reaches the glacier", detail: "The Ministry of Defence states that the first IAF helicopter to land on the glacier was a Chetak in October 1978. This early presence predates the named operation and matters for understanding reconnaissance and access.", status: "Documented precursor" },
      { date: "26 Mar 1984", title: "Exercise Walnut Cracker war-game", detail: "Published retrospectives describe a corps-level war-game ahead of the launch to refine the move and its logistics. This illustrates that an apparently sudden operation was supported by prior staff preparation.", status: "Reported planning milestone" },
      { date: "13 Apr 1984", title: "Operation Meghdoot launches", detail: "The Army and IAF advanced to secure strategic heights on the Siachen Glacier and Saltoro Ridge. Troops were airlifted and dropped at glacial heights; the date is commemorated as the operation's launch.", status: "Documented milestone" },
      { date: "13 Apr 1984", title: "First troops reach key passes", detail: "Official commemorative material notes that Lieutenant General Sanjay Kulkarni was the first to reach Bilafond La on the launch date. Use the cited service record for exact unit-level details.", status: "Documented leadership milestone" },
      { date: "1984 onward", title: "Sustainment becomes the defining task", detail: "Public summaries describe a continuing high-altitude deployment. A complete daily history requires unit diaries and records not contained in commemorative releases; this page does not invent a daily log.", status: "Continuing operational context" }
    ],
    planning: "The planning problem was to reach and hold terrain where altitude, weather and access could be more difficult than the opposition itself. An operation-design study should include the intelligence basis for timing, the sequence of occupation, weather windows, helicopter performance, acclimatisation, supply loads, medical plans and how posts would be sustained after the initial move. Published retrospectives refer to Exercise Walnut Cracker as a war-game before launch.",
    execution: "The Army and IAF combined ground occupation with lift and resupply. Once posts were established, daily success depended on safe flying conditions, suitable clothing, shelter, ration and fuel delivery, communications, rotations and medical evacuation. Attrition from environment and accident risk must be considered alongside any direct combat. Because the operation continues in a broader form, the reader should distinguish the 1984 launch from later years and events.",
    friction: [
      { label: "Environment as a persistent adversary", detail: "Extreme altitude, cold, wind and snow can damage people, equipment and aircraft even without enemy action. Logistics and medical care are part of combat power.", type: "Operational constraint" },
      { label: "Opening success can hide lifecycle cost", detail: "Securing terrain may create a long commitment. Evaluation must include the cost of holding it, the duty cycles imposed on personnel, and the supply chain needed over years.", type: "Long-term trade-off" },
      { label: "Commemorative accounts are not a full daily history", detail: "Official releases establish dates and broad intent, but do not itemise every incident. Use formation histories and memoirs with clear provenance for further detail.", type: "Evidence caveat" }
    ],
    lessons: [
      { label: "The first move and the long hold are different problems", detail: "Planning must include the full sustainment lifecycle rather than treating occupation as the end of the task." },
      { label: "Logistics is an operational capability", detail: "Ammunition, food, fuel, shelter, acclimatisation, medical evacuation and communications determine how long high-altitude forces can operate." },
      { label: "Jointness is practical", detail: "Army and Air Force cooperation must be designed around payload, weather, landing/drop limitations, risk and medical needs." },
      { label: "Use named commanders at the correct level", detail: "Senior planners, corps commanders, brigade commanders and soldiers at the post have different roles. The story should connect staff decisions with what troops experienced without conflating their responsibilities." }
    ],
    sources: [
      { title: "IAF in Operation Meghdoot", publisher: "Press Information Bureau · Ministry of Defence", kind: "Official service history", url: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=2017834&lang=2&reg=48", supports: "Launch date, Army–IAF lift, the first helicopter landing in 1978 and the broad official rationale." },
      { title: "Operation Meghdoot commemorated", publisher: "Press Information Bureau · Ministry of Defence", kind: "Official commemorative release", url: "https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=118215", supports: "Launch date and the Bilafond La milestone." },
      { title: "Remembering Operation Meghdoot", publisher: "The Indian Express", kind: "Journalistic historical retrospective", url: "https://indianexpress.com/article/explained/explained-history/operation-meghdoot-siachen-army-9268157/", supports: "Published account of the senior planning group and Exercise Walnut Cracker." },
      { title: "Samar Abhilekh — History Division collections", publisher: "Ministry of Defence / IIT Kanpur", kind: "Historical archive portal", url: "https://samar.iitk.ac.in/about", supports: "Research route into declassified operational and historical records." }
    ]
  },
  {
    id: "operation-cactus",
    campaignId: "operation-cactus",
    title: "Operation Cactus",
    period: "3–4 November 1988 · withdrawal phase followed",
    theatre: "Malé and the Maldives · Indian Ocean",
    thesis: "Cactus was a rapid Indian response to a coup attempt at the request of the Maldivian government. Its short execution window, parachute force deployment, naval interception and diplomatic coordination make it a distinct case of regional intervention.",
    context: [
      "On 3 November 1988, armed coup plotters attacked key points in Malé. Maldivian President Maumoon Abdul Gayoom sought external help, and India's government decided to intervene. The mission unfolded while Indian troops were already committed to the IPKF in Sri Lanka, adding strategic and resource context.",
      "Operation Cactus involved rapid movement of the 50th Independent Parachute Brigade to the Maldives, followed by naval action at sea as the coup plotters attempted to escape. The operation's success is often narrated in terms of speed, but a serious study also asks how the request for assistance was verified, how forces were authorised, how the naval and air elements worked together, and what the intervention meant for regional policy."
    ],
    commanders: [
      { name: "Rajiv Gandhi", role: "Prime Minister of India", contribution: "Led the political decision to respond to the Maldivian government's request for assistance.", tag: "National decision" },
      { name: "Brigadier Farukh F. Bulsara", role: "Commander, 50th Independent Parachute Brigade", contribution: "Led the parachute brigade element deployed to Malé. Published accounts describe the brigade's rapid activation and deployment.", tag: "Force commander" },
      { name: "Arun Kumar Banerjee", role: "Indian High Commissioner to the Maldives", contribution: "Diplomatic representative involved during the crisis and in the arrival of Indian forces, according to published historical analysis.", tag: "Diplomatic coordination" },
      { name: "Captain Hari Gokhale and Captain Gopalachari", role: "Indian Navy ship commanders", contribution: "Published accounts describe the roles of INS Betwa and INS Godavari in the maritime interception phase. This illustrates the wider tri-service operation beyond the airborne arrival.", tag: "Maritime component" },
      { name: "Maumoon Abdul Gayoom", role: "President of the Maldives", contribution: "The Maldivian leader who requested assistance as the coup unfolded.", tag: "Host-nation authority" }
    ],
    phases: [
      { title: "1 · Coup attempt and request", dates: "3 November 1988", detail: "Armed plotters seized key locations in Malé. The Maldivian leadership appealed for help; a fast decision was required while the situation was still changing." },
      { title: "2 · Rapid force deployment", dates: "3–4 November", detail: "Indian airborne forces were moved to the Maldives. The intervention depended on rapid activation, air transport, a clear task and coordination with the host government." },
      { title: "3 · Maritime interception and withdrawal", dates: "4–16 November", detail: "Indian naval units pursued the fleeing plotters and mercenaries at sea. The principal action was short, but headquarters and remaining troops withdrew later; intervention and withdrawal should not be collapsed into a single date." }
    ],
    timeline: [
      { date: "3 Nov 1988 · early morning", title: "Coup attempt begins", detail: "Armed plotters entered Malé and seized important locations. President Gayoom escaped capture and sought international assistance.", status: "Documented milestone" },
      { date: "3 Nov 1988", title: "India authorises intervention", detail: "A crisis meeting in New Delhi led to the decision to send forces in response to the Maldivian request. Exact internal deliberation timelines should be supported by the memoir or history being cited.", status: "Reported decision milestone" },
      { date: "Night of 3–4 Nov 1988", title: "Indian airborne forces reach Malé", detail: "The parachute brigade was flown to the Maldives and helped secure key locations and restore the government's position.", status: "Documented operation phase" },
      { date: "4 Nov 1988", title: "Naval pursuit at sea", detail: "Indian naval units moved to intercept vessels associated with the fleeing plotters. This part of the operation shows why Cactus cannot be described as an airborne action alone.", status: "Documented operation phase" },
      { date: "16 Nov 1988", title: "Remaining force elements withdraw", detail: "An academic retrospective describes the withdrawal of the brigade headquarters and remaining companies by this date. Distinguish it from the main 3–4 November crisis response.", status: "Reported withdrawal milestone" }
    ],
    planning: "The mission required a verified request from the recognised host government, an urgent political decision, force readiness, long-distance transport, a practical task on arrival and arrangements to deal with fleeing coup plotters. Because the crisis was geographically concentrated, speed mattered; because it occurred in an island state, maritime tracking and coordination with diplomacy were equally important.",
    execution: "The parachute brigade's arrival in Malé was followed by efforts to secure the government's position. The Navy's role in the pursuit phase showed the need to coordinate airlift, ground security, ships, intelligence and diplomacy. Published historical analysis describes a brief principal action but a longer withdrawal period; the distinction matters for reconstructing the operation.",
    friction: [
      { label: "Speed versus verification", detail: "An urgent request for intervention requires rapid validation of who is asking, what authority they represent, the mandate, the intended end state and the risks to civilians.", type: "Decision challenge" },
      { label: "Cross-service command relationships", detail: "The deployed force needed clear command and coordination across Army, Air Force, Navy and diplomatic channels. Operational success should not prevent a review of who could direct whom and under what authority.", type: "Analyst question" },
      { label: "Political success and legal context", detail: "A successful intervention does not eliminate the need to record consent, mandate, sovereignty and the host government's role. Those are part of the operation's legitimacy and historical assessment.", type: "Strategic context" }
    ],
    lessons: [
      { label: "Prepared readiness turns warning into action", detail: "A force that can deploy quickly still needs transport, communications, a defined task and a plan for follow-on decisions." },
      { label: "The sea is part of an island crisis", detail: "The deployment, interception and withdrawal phases required different services and different geographic tools." },
      { label: "Diplomacy is an operational enabler", detail: "The host nation's request and coordination with its officials were central to the intervention's purpose and legitimacy." },
      { label: "Record the whole operation, not just the dramatic hour", detail: "The response, stabilisation, maritime pursuit and eventual withdrawal are separate phases and should have their own dated evidence." }
    ],
    sources: [
      { title: "Responding First, Leading Power", publisher: "Ministry of External Affairs", kind: "Diplomatic / strategic publication", url: "https://www.mea.gov.in/Portal/IndiaArticleAll/636548965437648101_Responding_First_Leading_Pow.pdf", supports: "India's regional intervention context and Operation Cactus." },
      { title: "India's military conflicts and diplomacy: an inside view", publisher: "Institute for Defence Studies and Analyses", kind: "Academic analysis", url: "https://www.idsa.in/system/files/JDS_8_2_GautamSen.pdf", supports: "Published analysis of the request, brigade commander, maritime pursuit and withdrawal phase." },
      { title: "Operation Cactus: how India helped Maldives thwart the coup bid", publisher: "The Indian Express", kind: "Journalistic historical retrospective", url: "https://indianexpress.com/article/research/operation-cactus-how-india-helped-maldives-end-a-coup-backed-by-lankan-militants-7605322/lite/", supports: "The naval interception and the roles of Indian ships." }
    ]
  },
  {
    id: "kargil-1999",
    campaignId: "kargil-1999",
    title: "Kargil War · Operation Vijay",
    period: "May–26 July 1999",
    theatre: "Dras, Kargil, Batalik, Mushkoh and nearby sectors",
    thesis: "Kargil was a high-altitude campaign to evict intruding forces from positions on India's side of the Line of Control. It combined infantry assaults, artillery, air operations under political and geographic constraints, naval pressure and diplomacy. Its after-action record helped trigger broader national-security reforms.",
    context: [
      "In spring 1999, Pakistani forces, including personnel of the Northern Light Infantry as documented in India's official memorial narrative, occupied positions on the Indian side of the Line of Control. The geography gave the occupiers observation and firing advantages over important roads and surrounding heights. Indian forces had to identify the extent of the intrusion, reinforce the theatre, and retake positions in steep high-altitude terrain.",
      "Operation Vijay was the Army's ground campaign; the Indian Air Force's Operation Safed Sagar began in late May, while the Navy deployed in support of the broader strategic effort. India did not cross the Line of Control during the campaign. The conflict ended in July 1999, but the Kargil Review Committee's assessment of intelligence, coordination and national-security management made the post-war phase part of the story."
    ],
    commanders: [
      { name: "Atal Bihari Vajpayee", role: "Prime Minister of India", contribution: "Led the government through the crisis, including the decision to keep the campaign within the Line of Control while combining military action with diplomacy.", tag: "National direction" },
      { name: "General V. P. Malik", role: "Chief of Army Staff", contribution: "Army chief during the war. His public account and the Kargil Review process are important to understanding force mobilisation, campaign priorities and the post-war review.", tag: "Army leadership" },
      { name: "Lieutenant General Krishan Pal", role: "XV Corps", contribution: "Corps-level commander associated with the Kashmir theatre during the campaign. Use formation histories for more detailed command boundaries and date-specific orders.", tag: "Theatre command" },
      { name: "Captain Vikram Batra", role: "13 JAK Rifles", contribution: "Led assaults during the recapture of key heights and became one of the best-known front-line leaders of the war. Separate documented actions from later popular retelling.", tag: "Front-line leader" },
      { name: "Lieutenant Manoj Kumar Pandey", role: "1/11 Gorkha Rifles", contribution: "Led an assault in the Batalik sector and was posthumously awarded the Param Vir Chakra.", tag: "Front-line leader" },
      { name: "Grenadier Yogendra Singh Yadav", role: "18 Grenadiers", contribution: "Participated in the Tiger Hill assault and received the Param Vir Chakra for gallantry.", tag: "Tiger Hill" },
      { name: "Rifleman Sanjay Kumar", role: "13 JAK Rifles", contribution: "Fought at Point 4875 and was awarded the Param Vir Chakra.", tag: "Point 4875" }
    ],
    phases: [
      { title: "1 · Detect and define the intrusion", dates: "Early–late May 1999", detail: "Patrols and subsequent reconnaissance revealed that the intrusion was more extensive than a handful of local posts. The size and location of the occupation shaped the force requirement and sector-by-sector campaign." },
      { title: "2 · Reinforce and evict", dates: "Late May–early July", detail: "The Army reinforced the theatre and fought to recapture dominant heights. Artillery support was extensive; the IAF joined the campaign while operating under constraints, including the Line of Control." },
      { title: "3 · Peak-by-peak recovery and termination", dates: "June–26 July", detail: "Tololing, Tiger Hill, Point 4875 and other objectives marked stages in the recovery of positions. Diplomatic pressure and the decision to withdraw affected the final phase; 26 July is commemorated as Kargil Vijay Diwas." }
    ],
    timeline: [
      { date: "Early May 1999", title: "Intrusions confirmed", detail: "Reports from local observers and patrols led to the discovery that positions on the Indian side of the Line of Control had been occupied. Different accounts assign different dates to specific sightings and patrols; check the cited chronology before attaching an exact date to one report.", status: "Evidence-sensitive milestone" },
      { date: "26 May 1999", title: "Operation Safed Sagar air operations begin", detail: "The IAF joined the campaign. High altitude and the Line of Control constrained how air power could be employed; the role was significant but not a substitute for ground recapture.", status: "Documented milestone" },
      { date: "13 Jun 1999", title: "Tololing recaptured", detail: "The recapture of Tololing was a major breakthrough in Dras. It improved the outlook for further operations but did not instantly clear every occupied height.", status: "Documented battle milestone" },
      { date: "4 Jul 1999", title: "Tiger Hill recaptured", detail: "Tiger Hill became one of the defining victories of the campaign. The assault demonstrated the extraordinary physical and tactical demands of recapturing steep, defended heights.", status: "Documented battle milestone" },
      { date: "July 1999", title: "Withdrawal and recovery of positions", detail: "Diplomacy and the military position interacted as Pakistan agreed to withdraw and Indian forces continued to clear remaining occupied positions. Different sources report differing dates for individual sectors and posts.", status: "Campaign phase" },
      { date: "26 Jul 1999", title: "Kargil Vijay Diwas", detail: "India commemorates this date as the end of the campaign. The official memorial records the eviction of intruding forces by 26 July.", status: "Documented milestone" }
    ],
    planning: "The campaign required determining the number and spread of occupied positions, prioritising heights that affected key communications, reinforcing infantry and artillery, and planning repeated assaults in terrain that favoured the defender. Decisions were also constrained by the international border/Line of Control framework and the political choice not to widen the war across it. A source-led review should distinguish what planners knew early in May from what became clear after reconnaissance and combat.",
    execution: "The Army recaptured positions in a series of costly assaults supported by artillery. The Air Force's Safed Sagar missions added a joint dimension under altitude and political constraints, while the Navy's deployment contributed to strategic pressure. The battles were not one continuous attack: each sector and feature had distinct terrain, units and dates. Tololing and Tiger Hill were milestones within a larger campaign that continued until the end-of-July declaration.",
    friction: [
      { label: "Surveillance and detection", detail: "The intrusion raised questions about routine surveillance, patrol patterns, intelligence fusion and how early warnings were assessed. Treat official-review findings and later analysis separately; a hindsight account does not automatically prove what was known at the time.", type: "Post-war review topic" },
      { label: "High-altitude assault against prepared positions", detail: "Attacking upward against fortified positions imposes severe physical cost and makes movement, communications and casualty evacuation difficult. The campaign's bravery should not obscure the tactical difficulty.", type: "Documented constraint" },
      { label: "Joint operations within political limits", detail: "The IAF was used within constraints tied to the Line of Control and high-altitude conditions. Joint effectiveness should be evaluated against the mission's actual rules and context, not a hypothetical unrestricted air campaign.", type: "Operational constraint" },
      { label: "Evidence quality and casualty counts", detail: "Different public sources can report different totals and dates because they count different categories or reflect later corrections. The study reader links records and avoids implying that one short page resolves every discrepancy.", type: "Source comparison" }
    ],
    lessons: [
      { label: "Connect routine surveillance to decision-making", detail: "Collecting a report is not the same as fusing, validating and acting on it. A review should reconstruct the chain from observation to assessment to order." },
      { label: "Terrain changes the cost of recapture", detail: "The height, slope, weather, line of sight and approach routes can dominate the campaign. Logistics and medical evacuation shape the tempo as much as firepower." },
      { label: "Joint action works within political objectives", detail: "The Army, Air Force and Navy contributed differently. Their actions must be assessed against the operational design and restrictions in force." },
      { label: "A battle can end before institutional learning does", detail: "The Kargil Review Committee and subsequent national-security reforms are part of the campaign's legacy; identify recommendations and later implementation separately." },
      { label: "Recognise named front-line leadership accurately", detail: "Tie a soldier's action to the relevant feature, unit and source. Avoid collapsing different assaults or using one hero's story to stand in for the whole campaign." }
    ],
    sources: [
      { title: "National War Memorial — Operation Vijay, 1999", publisher: "Government of India", kind: "Official memorial record", url: "https://nationalwarmemorial.gov.in/war-depictions/details/8", supports: "Official campaign overview, broad outcome and commemorative framing." },
      { title: "Kargil Vijay Diwas: campaign account and major battles", publisher: "Press Information Bureau · Ministry of Defence", kind: "Official campaign retrospective", url: "https://www.pib.gov.in/PressNoteDetails.aspx?ModuleId=3&NoteId=159313&lang=2&reg=48", supports: "Operation Vijay, Safed Sagar, Tololing, Tiger Hill and the public campaign chronology." },
      { title: "Kargil Review Committee papers", publisher: "Sansad eLibrary", kind: "Parliamentary archive catalogue", url: "https://elibrary.sansad.in/items/94154a2c-a144-4ab4-a8bc-94c76e834c04", supports: "Catalogue for the Kargil Review Committee report, summary and action-taken documents." },
      { title: "Chief of Defence Staff — historical background", publisher: "Press Information Bureau", kind: "Official policy history", url: "https://www.pib.gov.in/factsheetdetails.aspx?id=148566&lang=2&reg=48", supports: "The linkage between the Kargil Review Committee and later discussions of defence decision-making and jointness." }
    ]
  },
  {
    id: "operation-pawan",
    campaignId: "operation-pawan",
    title: "Operation Pawan · IPKF in Sri Lanka",
    period: "1987–1990 · major Jaffna fighting in October 1987",
    theatre: "Northern and eastern Sri Lanka",
    thesis: "Pawan demonstrates how an intervention can shift from a peacekeeping/interposition mission into fighting with a former partner when the mandate, local politics and end state change. It is a case study in political clarity, command relationships, intelligence and civilian protection.",
    context: [
      "The Indo-Sri Lanka Accord of July 1987 created the framework for Indian involvement and the Indian Peace Keeping Force (IPKF). The mission was not originally framed as a conventional war against the Liberation Tigers of Tamil Eelam (LTTE). Relations deteriorated as the LTTE resisted disarmament and the political situation changed; the IPKF began major operations around Jaffna in October 1987.",
      "Published military retrospectives describe strict initial rules of engagement and difficult fighting in fortified, mined urban terrain. The intervention became a prolonged counter-insurgency campaign and remains contested in both countries. The reader distinguishes the Accord, the initial mandate, Operation Pawan's major fighting, the broader IPKF deployment and the eventual withdrawal."
    ],
    commanders: [
      { name: "Rajiv Gandhi", role: "Prime Minister of India", contribution: "Led the Indian government during the Accord and intervention. The political objectives and their changes are central to understanding the mission.", tag: "Political authority" },
      { name: "J. R. Jayewardene", role: "President of Sri Lanka", contribution: "Sri Lankan president associated with the Indo-Sri Lanka Accord, the political framework for the Indian deployment.", tag: "Host-nation authority" },
      { name: "Lieutenant General Depinder Singh", role: "Overall Force Commander, IPKF", contribution: "Appointed overall force commander, with the three services' contingent arrangements forming part of the command debate described in published professional analysis.", tag: "Joint command" },
      { name: "Lieutenant General A. S. Kalkat", role: "IPKF field command", contribution: "Took over as GOC IPKF during the major fighting phase according to published retrospectives. Use the dated account to distinguish the command arrangements before and after October 1987.", tag: "Field command" },
      { name: "Velupillai Prabhakaran", role: "LTTE leadership", contribution: "The LTTE leader whose organisation rejected the path to disarmament and fought the IPKF. His role must be studied in the political context of Tamil militancy and the Accord.", tag: "Opposing leadership" }
    ],
    phases: [
      { title: "1 · Accord and deployment", dates: "July–September 1987", detail: "Indian forces entered under a political framework intended to support the Accord. The distinction between a negotiated mandate and the practical conditions on the ground soon became central." },
      { title: "2 · Mission changes and Jaffna fighting", dates: "October 1987 onward", detail: "The LTTE and IPKF moved into open conflict. Operation Pawan involved intense urban and close-quarter fighting around Jaffna, with constraints on heavy weapons and air support reported in service histories." },
      { title: "3 · Prolonged operations and withdrawal", dates: "1988–March 1990", detail: "The IPKF remained in Sri Lanka in a complex political-military environment and withdrew in 1990. The operation's assessment must include political outcomes as well as tactical engagements." }
    ],
    timeline: [
      { date: "29 Jul 1987", title: "Indo-Sri Lanka Accord", detail: "The Accord established the political framework for the Indian Peace Keeping Force. The later campaign should be assessed against the original text and the expectations of the parties.", status: "Documented political milestone" },
      { date: "Late Jul–Aug 1987", title: "IPKF deployment begins", detail: "Indian forces entered Sri Lanka under the agreed framework. This deployment was initially different in purpose and rules from the later fight against the LTTE.", status: "Mission phase" },
      { date: "Early Oct 1987", title: "Relationship with LTTE deteriorates", detail: "The process of disarmament and relations with the LTTE broke down. Published Air Force and military retrospectives describe a shift toward a forceful decision to disarm militants.", status: "Campaign turning point" },
      { date: "Night of 11–12 Oct 1987", title: "Operation Pawan begins", detail: "A published IPKF aviation history identifies this as the start of the major operation around Jaffna. It records strict rules on artillery, heavy weapons and offensive air support at the outset.", status: "Reported operational milestone" },
      { date: "Mid-Oct 1987", title: "Command arrangements change", detail: "Published retrospective accounts describe a change in IPKF field command after the early Jaffna fighting. Command responsibility should be dated and sourced carefully because the joint-force relationship was complicated.", status: "Command milestone" },
      { date: "Mar 1990", title: "IPKF withdrawal completed", detail: "The Indian deployment ended in 1990. Withdrawal marks the end of the intervention, not a resolution of Sri Lanka's underlying conflict.", status: "Documented phase end" }
    ],
    planning: "The operation's central planning question is whether the political mandate, command authority, intelligence picture, rules of engagement and end state matched the situation that troops encountered. A peacekeeping or interposition task is fundamentally different from forcing a well-organised armed group to disarm in built-up terrain. When the mission changed, the political strategy and military plan needed to change in a coordinated way.",
    execution: "The initial force was transformed into a fighting force operating in urban and rural areas. Published service histories describe the difficulty of fighting a prepared opponent familiar with local conditions, mines and fortified positions, while restrictions intended to reduce civilian harm constrained certain weapons and support. The eventual withdrawal highlights that tactical performance and strategic outcome are different measures.",
    friction: [
      { label: "Mandate drift", detail: "When the practical task shifts from monitoring/interposition to coercive disarmament, the political authority, rules, force design and public communication need explicit review.", type: "Strategic lesson" },
      { label: "Command unity across services", detail: "Professional analysis records tensions between the overall force commander and service-specific headquarters. A joint force requires real command authority and clear responsibilities, not just liaison titles.", type: "Documented organisational issue" },
      { label: "Urban operations and civilian protection", detail: "Dense terrain, mines, booby traps, restricted fire support and civilian presence complicate intelligence and tempo. The human consequences must be part of any evaluation.", type: "Operational constraint" },
      { label: "Tactical successes do not guarantee strategic success", detail: "A force can seize ground or inflict losses and still fall short of the political end state if the mandate, local legitimacy or long-term settlement is not achievable.", type: "After-action assessment" }
    ],
    lessons: [
      { label: "Define the mandate before deployment—and revalidate it after change", detail: "Peacekeeping, peace enforcement and counter-insurgency require different tools and public expectations. Do not let mission drift remain implicit." },
      { label: "Unity of command has to work in practice", detail: "Clear authority across Army, Navy and Air Force elements is essential when decisions must be made rapidly in the field." },
      { label: "Local intelligence and legitimacy are decisive", detail: "Understanding communities, language, politics and armed-group organisation matters alongside tactical intelligence." },
      { label: "Civilian constraints are part of the plan", detail: "Rules limiting weapons or air support are not external nuisances; they define the means available and require a realistic concept of operations." },
      { label: "Judge both tactical and strategic outcomes", detail: "Measure the objectives actually achieved, the costs incurred and the political settlement left behind—not only the ground held." }
    ],
    sources: [
      { title: "At Odds in Sri Lanka", publisher: "Institute for Defence Studies and Analyses", kind: "Professional military analysis", url: "https://idsa.in/system/files/JDS1%281%292007_0.pdf", supports: "Command relationships and the overall force commander role in the IPKF." },
      { title: "Overview: Indian Peace Keepers in Sri Lanka", publisher: "Bharat Rakshak · IAF history", kind: "Service-history retrospective", url: "https://www.bharat-rakshak.com/IAF/history/1987ipkf/overview-peacekeepers/", supports: "Operation Pawan start, initial rules of engagement and difficult urban fighting." },
      { title: "India's IPKF intervention in Sri Lanka: a study in retrospect", publisher: "Indian Defence Review", kind: "Military historical analysis", url: "https://indiandefencereview.com/indias-ipkf-intervention-in-sri-lanka-a-study-in-retrospect/", supports: "The IPKF's formation, field command changes and mandate complications." }
    ]
  },
{
    id: "wwii-indian-army",
    campaignId: "wwii-indian-army",
    title: "Indian Army in the Second World War",
    period: "1939–1945",
    theatre: "South-East Asia, East Africa, North Africa, Western Asia and Italy",
    thesis: "The wartime Indian Army became a large, multi-theatre force. Its experience connects recruitment and training, coalition command, transport, medical support, logistics and fighting in environments very different from the Himalayan frontier most commonly associated with modern Indian Army history.",
    context: [
      "This study concerns the British Indian Army before independence. Its soldiers served under imperial command across several theatres during the Second World War; it should not be collapsed into the history of the post-1947 Republic of India's Army, even though personnel, regimental traditions and institutions form part of a longer lineage.",
      "Official histories listed by the Government of India include campaigns in Burma, Arakan, East Africa, North Africa and Italy, as well as wider material on defence, logistics and service organisations. This catalogue entry is a map into those histories, not a claim that every unit's campaign can be reconstructed from one web page."
    ],
    commanders: [
      { name: "Field Marshal Claude Auchinleck", role: "Commander-in-Chief, India during part of the war", contribution: "Oversaw the Indian Army's wartime expansion and wider command system. The role needs to be distinguished from front-line command of individual battles.", tag: "Theatre and institutional command" },
      { name: "Field Marshal William Slim", role: "Commander, Fourteenth Army", contribution: "Led the Allied force in the Burma theatre during the campaign's decisive later phase, in which Indian formations played major roles.", tag: "Coalition theatre command" }
    ],
    phases: [
      { dates: "1939–1941", title: "Expansion and deployment", detail: "The Army expanded and sent formations to multiple theatres. Training, shipping, equipment and command capacity became major constraints." },
      { dates: "1942–1943", title: "Retreat and adaptation", detail: "Defeats and retreats in South-East Asia exposed severe problems of disease, terrain, communication and sustainment." },
      { dates: "1944–1945", title: "Allied recovery", detail: "Improved planning, air supply, intelligence and coalition coordination supported the return to offensive operations in Burma and other theatres." }
    ],
    timeline: [
      { date: "1939", title: "War begins for British India", detail: "The Indian Army entered the global war as part of the British Empire's armed forces; the political status of India differs from that of today's independent state.", status: "Historical context" },
      { date: "1942", title: "Burma campaign crisis", detail: "The retreat and subsequent reorganisation made jungle, road, air and medical support central to operational survival.", status: "Publicly documented milestone" },
      { date: "1944", title: "Imphal–Kohima battles", detail: "The Japanese offensive toward north-east India was stopped after hard fighting and a major logistics effort by Allied forces, including Indian formations.", status: "Major campaign milestone" },
      { date: "1945", title: "Allied reconquest continues", detail: "Operations in Burma moved toward the end of the war; exact unit chronology must be read from the relevant official theatre histories.", status: "Campaign endpoint" }
    ],
    planning: "The central challenge was not one plan but a global mobilisation system: recruitment, officer and NCO development, equipment, transport, medical support, air-ground coordination and coalition command had to scale across multiple theatres. A fair assessment separates institutional planning decisions from constraints of the period, including shipping, industrial capacity, imperial priorities and the rapid changes in enemy strategy.",
    execution: "The experience varied sharply by theatre. In Burma and Arakan, jungle, monsoon and disease affected movement; in desert and African theatres, distances and water supply mattered; in Italy, mountains, river lines and defended towns shaped manoeuvre. Indian formations served as part of coalitions, so contributions should be connected to specific units and battles rather than attributed to a generic national force.",
    friction: [
      { type: "Documented constraint", label: "Sustainment often determined tempo", detail: "Roads, pack transport, disease prevention, food, ammunition, medical evacuation and air supply directly affected what forces could do. A battlefield account that omits these factors is incomplete." },
      { type: "Historical context", label: "Imperial command and Indian agency", detail: "The Army fought for an empire while India's independence movement continued. The political setting, recruitment conditions and the agency of Indian soldiers require attention alongside operational history." },
      { type: "Evidence gap", label: "One web synopsis cannot cover every theatre", detail: "The Government's official-history catalogue contains separate volumes. Detailed claims about casualties, unit movements or individual decisions need the appropriate volume and corroborating records." }
    ],
    lessons: [
      { label: "Logistics is operational power", detail: "A force's ability to move and fight depends on supply systems, transport capacity, medical support, maintenance and communications." },
      { label: "Doctrine must fit the environment", detail: "Desert, jungle, mountain and urban campaigns demand different equipment, training and sustainment plans." },
      { label: "Coalition command needs clarity", detail: "Shared goals do not remove the need for clear authority, interoperable communications and a common operational picture." },
      { label: "History needs political context", detail: "The identity and purpose of the force, the civil population and the larger political conflict shape how a campaign should be interpreted." }
    ],
    sources: [
      { title: "Official History of Indian Armed Forces", publisher: "Press Information Bureau, Ministry of Defence", kind: "Government historical catalogue", url: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48", supports: "The published official-history series for Burma, Arakan, East Africa, North Africa and Italy." },
      { title: "Second World War collections", publisher: "Imperial War Museums", kind: "Museum archive", url: "https://www.iwm.org.uk/collections", supports: "Photographs, oral histories, objects and records for cross-checking campaign context." }
    ]
  },
  {
    id: "burma-imphal-kohima-1944",
    campaignId: "burma-imphal-kohima-1944",
    title: "Burma Campaign and Imphal–Kohima",
    period: "1942–1945",
    theatre: "North-East India and Burma",
    thesis: "The Imphal–Kohima fighting demonstrated that the outcome of mountain and jungle campaigns depends on sustainment and endurance as much as on the immediate ground action. Indian formations fought inside a multinational Allied force whose supply problem was shaped by roads, monsoon and air support.",
    context: [
      "The Burma theatre connected the defence of north-east India with the wider Allied effort in South-East Asia. After the 1942 retreat, both sides adapted to jungle, weather, disease and difficult transport routes.",
      "The Japanese offensive toward Imphal and Kohima in 1944 threatened key roads and positions. The Allied defence and subsequent recovery involved Indian formations, British troops and other coalition elements; a complete account must identify the specific unit and phase instead of attributing all actions to one force."
    ],
    commanders: [
      { name: "Field Marshal William Slim", role: "Commander, Fourteenth Army", contribution: "Led the Allied army in the Burma theatre during the critical campaign period.", tag: "Theatre command" },
      { name: "Lieutenant General Geoffrey Scoones", role: "Commander, IV Corps", contribution: "Commanded the corps responsible for the Imphal defence in the 1944 campaign; detailed judgements should be tied to operational histories.", tag: "Corps command" }
    ],
    phases: [
      { dates: "1942–1943", title: "Retreat and rebuilding", detail: "The Allied force withdrew from Burma and reorganised, with lessons about health, transport and jungle training becoming urgent." },
      { dates: "March–July 1944", title: "Imphal–Kohima defence", detail: "Japanese forces attacked toward Imphal and Kohima; the Allied force had to hold positions while keeping garrisons supplied." },
      { dates: "Late 1944–1945", title: "Allied offensive", detail: "Following the failure of the Japanese offensive, the Allies resumed operations to recover Burma. Dates and local actions vary by axis and unit." }
    ],
    timeline: [
      { date: "1942", title: "Retreat from Burma", detail: "The retreat exposed the costs of inadequate transport, disease control and communications in jungle terrain.", status: "Campaign milestone" },
      { date: "March 1944", title: "Japanese offensive begins", detail: "The assault aimed at Imphal and Kohima created a major threat to north-east India; this broad milestone is not a substitute for unit war diaries.", status: "Publicly documented milestone" },
      { date: "June–July 1944", title: "Sieges are relieved", detail: "Allied forces recovered freedom of movement around the threatened positions and began the next phase of the campaign.", status: "Campaign turning point" },
      { date: "1945", title: "Campaign moves through Burma", detail: "The Allies advanced south through Burma; local chronologies must be checked against official theatre histories.", status: "Campaign milestone" }
    ],
    planning: "Plans had to account for the enemy's ability to move through difficult terrain, the vulnerability of road links and the possibility of isolated garrisons. Air supply, medical support, route repair, intelligence and reserve positioning were not background services; they were central to whether the defence could continue.",
    execution: "The campaign involved fighting at Imphal, Kohima and many nearby locations, often in terrain that restricted visibility and manoeuvre. Public summaries compress a complex series of engagements; this study keeps to documented campaign phases rather than inventing a single uniform daily story.",
    friction: [
      { type: "Operational constraint", label: "Roads and weather restricted movement", detail: "Monsoon conditions, hills and limited road capacity made supply and casualty evacuation difficult." },
      { type: "Operational constraint", label: "Disease and exhaustion mattered", detail: "Combat strength depended on health, rest, medical support and replacement systems as well as battlefield casualties." },
      { type: "Evidence gap", label: "Coalition and unit details vary", detail: "Specific claims should be tied to the named formation and source; the broad phrase 'the Allied force' can conceal different responsibilities." }
    ],
    lessons: [
      { label: "Defence includes the supply chain", detail: "Holding an isolated position is only possible when food, ammunition, health care and replacements can continue to arrive." },
      { label: "Train for the actual terrain", detail: "Jungle, hills, heat, rain and disease change the practical value of equipment and tactics." },
      { label: "Coalition operations need shared logistics", detail: "Air, ground, medical and engineering efforts must support a coherent plan." }
    ],
    sources: [
      { title: "Official History of Indian Armed Forces", publisher: "Press Information Bureau, Ministry of Defence", kind: "Government historical catalogue", url: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48", supports: "Official history volumes for the retreat and reconquest of Burma and the Arakan campaign." },
      { title: "Imphal and Kohima", publisher: "Commonwealth War Graves Commission", kind: "Memorial and historical overview", url: "https://www.cwgc.org/", supports: "The campaign's geographic and memorial context." }
    ]
  },
  {
    id: "rezang-la-1962",
    campaignId: "rezang-la-1962",
    title: "Rezang La, 1962",
    period: "1962",
    theatre: "Chushul sector, Ladakh",
    thesis: "Rezang La is a case study in isolated high-altitude defence during the Sino-Indian War. The action should be read from unit histories and memorial sources, while carefully distinguishing the well-established outline from details repeated with different wording or unsupported precision.",
    context: [
      "During the 1962 war, the Chushul sector in Ladakh was strategically important because the area connected to wider defensive positions in eastern Ladakh. Indian forces defended high-altitude ground under severe environmental constraints.",
      "The action at Rezang La is associated with C Company of 13 Kumaon and Major Shaitan Singh. Its legacy is shaped by the scale of resistance and losses, but operational analysis should also consider the isolation of positions, communications, fire support, terrain and the broader campaign."
    ],
    commanders: [
      { name: "Major Shaitan Singh", role: "13 Kumaon", contribution: "Led the company at Rezang La and was posthumously awarded the Param Vir Chakra. The account is best checked against official gallantry and unit histories.", tag: "Front-line leadership" },
      { name: "Brigadier T. N. Raina", role: "Formation commander in Ladakh", contribution: "Part of the broader command context in the 1962 Ladakh campaign; specific decisions should be tied to documented orders rather than retrospective attribution.", tag: "Campaign context" }
    ],
    phases: [
      { dates: "October 1962", title: "War spreads across the frontier", detail: "The eastern and western sectors became active, and units faced severe constraints of distance, communications and preparation." },
      { dates: "18 November 1962", title: "Battle at Rezang La", detail: "The company fought at high altitude in the Chushul sector; exact local tactical sequences should be verified against primary and unit records." },
      { dates: "After the battle", title: "Recovery and remembrance", detail: "The action entered India's military memory and later memorials; remembrance is important but does not replace critical operational study." }
    ],
    timeline: [
      { date: "20 October 1962", title: "Sino-Indian War opens", detail: "Fighting began in multiple frontier sectors; the western theatre included Ladakh.", status: "War milestone" },
      { date: "18 November 1962", title: "Rezang La action", detail: "C Company, 13 Kumaon, fought in the Chushul sector. This date is the accepted date for the battle; event-by-event details need unit-history verification.", status: "Dated battle" },
      { date: "21 November 1962", title: "China announces ceasefire", detail: "The ceasefire altered the immediate military situation while leaving the boundary dispute unresolved.", status: "War milestone" }
    ],
    planning: "A high-altitude defensive position requires more than courage: acclimatisation, ammunition and food stocks, medical evacuation, communications and the relationship between forward posts and supporting formations determine how long a force can resist. The sources do not permit every planning decision to be reconstructed from a short summary.",
    execution: "The action is remembered for fierce resistance at high altitude. A careful study identifies what the garrison did, but does not use a single celebrated action to erase the wider operational and institutional failures exposed in 1962.",
    friction: [
      { type: "Documented constraint", label: "Isolation and high altitude", detail: "Thin air, cold, distance and limited route capacity affected movement, health and resupply." },
      { type: "Review question", label: "Support and communications", detail: "Which support options were available, and what was known at the time? Answer from records where possible rather than inventing a counterfactual." },
      { type: "Evidence caveat", label: "Memorial accounts are not the complete operational record", detail: "Casualty figures, exact sequences and some details can differ by account. Attribute numbers and wording to a named source." }
    ],
    lessons: [
      { label: "High-altitude preparation is a system", detail: "Training, logistics, health, equipment and communications work together; an isolated position can become unsustainable even when personnel fight resolutely." },
      { label: "Remember courage and examine institutions", detail: "Respect for sacrifice is compatible with critical study of the command, preparation and support context." },
      { label: "Use memorials as entry points", detail: "Memorial accounts provide valuable public history, but deeper judgements need fuller records and context." }
    ],
    sources: [
      { title: "National War Memorial — War Depictions", publisher: "Government of India", kind: "Official memorial record", url: "https://nationalwarmemorial.gov.in/war-depictions", supports: "The broader 1947–62 military context and official memorial catalogue." },
      { title: "Official History of Indian Armed Forces", publisher: "Press Information Bureau, Ministry of Defence", kind: "Government historical catalogue", url: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48", supports: "The official history series for the 1962 war." },
      { title: "Rezang La memorial photograph", publisher: "Wikimedia Commons", kind: "Image provenance", url: "https://commons.wikimedia.org/wiki/File:Rezang_La.jpg", supports: "Illustrates the memorial, not the battle itself." }
    ]
  },
  {
    id: "battle-asal-uttar-1965",
    campaignId: "battle-asal-uttar-1965",
    title: "Asal Uttar and the 1965 War",
    period: "1965",
    theatre: "Khem Karan sector, Punjab",
    thesis: "Asal Uttar is often described through armour losses, but the battle is more instructive when read through defensive preparation, terrain, infantry and artillery support, command decisions and the wider front.",
    context: [
      "The India–Pakistan War of 1965 involved multiple fronts and a rapidly changing political and military situation. The Khem Karan sector became the site of a major armoured engagement in September.",
      "The National War Memorial records the battle as lasting from 8 to 10 September 1965. Other accounts may present the broader sector fighting over longer windows, so the scope of a claimed date range should be stated."
    ],
    commanders: [
      { name: "Major General Gurbaksh Singh", role: "Indian formation commander in the sector", contribution: "Associated in historical accounts with the Indian defensive effort around Khem Karan; source-specific responsibility should be distinguished from popular battlefield summaries.", tag: "Formation context" },
      { name: "Company and battalion commanders", role: "Infantry, armour and artillery", contribution: "The battle's outcome depended on coordinated positions and fire support as well as individual leadership; specific names and actions need corroborating records.", tag: "Combined arms" }
    ],
    phases: [
      { dates: "Early September 1965", title: "Frontier fighting widens", detail: "The sector became part of the wider war in Punjab; operational tasks were affected by the enemy's armoured strength and the need to protect approaches." },
      { dates: "8–10 September", title: "Asal Uttar fighting", detail: "The NWM account gives this period for the battle. The tactical sequence should be read with unit histories and sources that identify their scope." },
      { dates: "After the engagement", title: "Campaign continues", detail: "Asal Uttar was one engagement in a multi-front war; it did not by itself determine the political outcome or ceasefire." }
    ],
    timeline: [
      { date: "8 September 1965", title: "Battle begins", detail: "The National War Memorial dates the battle's opening to this period of fighting near Khem Karan.", status: "Official memorial date" },
      { date: "8–10 September 1965", title: "Defence and armour engagements", detail: "Indian resistance and coordinated action stopped the advance in the area; claims about individual vehicle losses must be attributed to the source reporting them.", status: "Battle phase" },
      { date: "September 1965", title: "Wider war continues", detail: "Operations across Punjab and other sectors continued beyond the battle's local chronology.", status: "Campaign context" }
    ],
    planning: "Defence against an armoured thrust calls for terrain assessment, obstacle preparation, fields of fire, infantry protection, artillery coordination, reserves, communications and rehearsed withdrawal or reinforcement conditions. Public summaries do not reveal every order or intelligence estimate, so planning claims should not exceed their sources.",
    execution: "The battle is associated with Indian resistance in the Khem Karan area. An accurate narrative must separate the specific 8–10 September battle from the wider sector operations and the 1965 war as a whole.",
    friction: [
      { type: "Analysis question", label: "Terrain and obstacles", detail: "Study how the local ground shaped armoured movement, while checking the specific details against official and unit histories." },
      { type: "Evidence caveat", label: "Loss numbers vary by source and category", detail: "Vehicle losses, damaged equipment and captured vehicles are not interchangeable measures. Never repeat an unsupported single number as settled fact." },
      { type: "Context", label: "One battle is not the entire war", detail: "The campaign included several fronts, a ceasefire and a diplomatic aftermath. Tactical results need to be evaluated against operational objectives." }
    ],
    lessons: [
      { label: "Terrain can shape a stronger defender", detail: "Ground, obstacles, weather, observation and fire support can change the effective balance between forces." },
      { label: "Combined arms matters", detail: "Infantry, armour, artillery, engineers and command communications need to support one another in a defensive engagement." },
      { label: "Report numbers with scope", detail: "Keep source attribution and distinguish destroyed, abandoned, captured and damaged vehicles." }
    ],
    sources: [
      { title: "Battle of Asal Uttar", publisher: "National War Memorial", kind: "Official memorial record", url: "https://nationalwarmemorial.gov.in/war-depictions", supports: "The 8–10 September battle outline and memorial account." },
      { title: "Official History of Indian Armed Forces", publisher: "Press Information Bureau, Ministry of Defence", kind: "Government historical catalogue", url: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48", supports: "Official history of the India–Pakistan War of 1965." }
    ]
  },
  {
    id: "battle-basantar-1971",
    campaignId: "battle-basantar-1971",
    title: "Basantar: Engineers, Armour and the Western Front",
    period: "1971",
    theatre: "Shakargarh Bulge",
    thesis: "Basantar is a useful combined-arms case because bridgeheads and obstacle belts exposed the interdependence of infantry, engineers, armour, artillery and follow-on logistics during the final days of the 1971 war.",
    context: [
      "The Shakargarh Bulge contained routes and ground that mattered to both sides. The western-front offensive began in early December, and Basantar became one of the prominent battles between 15 and 17 December.",
      "The National War Memorial account records the capture of Jarpal and Lohal by 3 Grenadiers and describes counterattacks that were repelled. A full account needs the wider formation history and engineering context alongside individual gallantry narratives."
    ],
    commanders: [
      { name: "Major Hoshiar Singh", role: "3 Grenadiers", contribution: "Awarded the Param Vir Chakra for leadership during the Battle of Basantar. His action should be read as part of the unit's defence and not as a substitute for the whole battle chronology.", tag: "Front-line command" },
      { name: "Brigade and regiment commanders", role: "Infantry, armour and engineer formations", contribution: "The battle depended on connecting infantry positions, obstacle-crossing tasks and armoured response; names and exact responsibilities need to be tied to unit records.", tag: "Combined arms" }
    ],
    phases: [
      { dates: "4 December 1971", title: "Offensive begins", detail: "The National War Memorial places the opening of the broader Shakargarh offensive in early December between the Degh and Basantar rivers." },
      { dates: "15–17 December", title: "Battle of Basantar", detail: "Indian troops captured and defended key positions as Pakistani counterattacks were repelled." },
      { dates: "16 December and after", title: "War ends in the east; west-front fighting continues", detail: "The surrender in Dhaka preceded the end of all fighting everywhere; western-front actions still require their own dated chronology." }
    ],
    timeline: [
      { date: "4 December 1971", title: "Western-front offensive opens", detail: "The NWM account places the Shakargarh offensive between the Degh and Basantar rivers in early December.", status: "Official memorial record" },
      { date: "15–17 December 1971", title: "Basantar battle", detail: "The battle involved the capture of Jarpal and Lohal and the repulse of counterattacks, according to the National War Memorial account.", status: "Dated battle" },
      { date: "December 1971", title: "Western-front operations conclude", detail: "The war's political outcome followed on 16 December in the east, while local ceasefire and operational conditions differed by sector.", status: "Campaign context" }
    ],
    planning: "For an offensive across defended ground, plan around routes, minefields, bridge and crossing capacity, engineers, armour availability, resupply and the ability to hold the ground seized. The key question is not merely who reached a position first, but whether the force could make and sustain a bridgehead under counterattack.",
    execution: "The battle's publicly described outline includes Indian infantry capture and defence of positions against counterattacks. More exact phase-by-phase and unit-level claims require the relevant official history, regimental sources and casualty-record scope.",
    friction: [
      { type: "Operational constraint", label: "Obstacle belts and river crossings", detail: "Engineering and crossing tasks can set the tempo of an offensive; the assaulting force must keep combat units and support elements moving together." },
      { type: "Operational constraint", label: "Holding ground is a second task", detail: "Capturing a position is only the first stage. Ammunition, communications, casualty evacuation and reserve support are needed to survive counterattacks." },
      { type: "Evidence caveat", label: "Gallantry narratives are not full battle histories", detail: "Individual citations describe specific actions and are valuable primary evidence, but do not describe every unit's role or the entire operation." }
    ],
    lessons: [
      { label: "Engineering is combat power", detail: "Route clearance and crossing support can determine the success or failure of armoured and infantry movement." },
      { label: "A bridgehead must be sustained", detail: "Follow-on forces, logistics, communications and reserves must be planned at the same time as the initial assault." },
      { label: "Use several source types", detail: "The NWM synopsis, official campaign history, unit records and gallantry citations answer different questions." }
    ],
    sources: [
      { title: "Battles which led to Indian Victory in 1971", publisher: "National War Memorial", kind: "Official memorial record", url: "https://nationalwarmemorial.gov.in/war-depictions/details/5", supports: "Basantar's broad chronology and the positions named in the public account." },
      { title: "Official History of Indian Armed Forces", publisher: "Press Information Bureau, Ministry of Defence", kind: "Government historical catalogue", url: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48", supports: "Official history of the 1971 war." }
    ]
  },
  {
    id: "battle-chhamb-1971",
    campaignId: "battle-chhamb-1971",
    title: "Chhamb: A Test of the Western Front",
    period: "1971",
    theatre: "Chhamb sector and the approaches toward Akhnoor",
    thesis: "Chhamb illustrates how local territorial objectives can have operational consequences for roads and bridges further behind the front. It also shows why chronology and service attribution matter when ground and air actions overlap.",
    context: [
      "The Chhamb area was significant because the Akhnoor Bridge and associated communications had importance for Jammu. The battle began as the 1971 war opened on the western front.",
      "The National War Memorial records the first action on the night of 3 December 1971, the participation of Pakistan's air force, and later Indian air and artillery involvement. A broader evaluation should consult the official campaign history to understand the entire sector."
    ],
    commanders: [
      { name: "Indian brigade and division commanders", role: "Western-front formations", contribution: "Commanded units tasked to delay and defend against the attack. Name-specific judgements require the official history and unit-level records.", tag: "Formation command" },
      { name: "Ground and air commanders", role: "Army–Air Force coordination", contribution: "The public account records the involvement of both artillery and the Air Force, showing that the sector cannot be studied in a purely ground-combat frame.", tag: "Joint support" }
    ],
    phases: [
      { dates: "3–4 December 1971", title: "Initial attack and defence", detail: "The National War Memorial describes attacks on posts and Indian delaying actions at the start of the battle." },
      { dates: "8 December 1971", title: "Indian air contribution noted", detail: "The same account dates IAF participation to 8 December; individual sorties and tasking need service histories." },
      { dates: "December 1971", title: "Sector's larger operational result", detail: "The fight affected communications and territorial control but must be evaluated against the broader war and ceasefire outcome." }
    ],
    timeline: [
      { date: "Night of 3 December 1971", title: "Battle opens", detail: "The National War Memorial records an attack on Pir Jamal Post as an opening event.", status: "Official memorial record" },
      { date: "4 December 1971", title: "Defence delays the advance", detail: "The public account credits Indian 191 Infantry Brigade with delaying the advance; a full chronology requires the official war history.", status: "Dated milestone" },
      { date: "8 December 1971", title: "Indian Air Force joins the battle", detail: "The memorial account records IAF involvement on this date and notes the role of air action and artillery.", status: "Service contribution" }
    ],
    planning: "The defensive problem involved protecting the approach to Akhnoor and the communications behind it. Planning questions include delaying positions, reserve movement, the ability to reinforce threatened routes, artillery coordination and when air support could be employed.",
    execution: "Public memorial summaries describe repeated attacks, delaying action and later air support. This is a broad chronology, not a substitute for unit war diaries or the official history of the 1971 war.",
    friction: [
      { type: "Operational constraint", label: "Communications and terrain mattered", detail: "A battle for one sector can threaten a bridge or road far behind the immediate line; local ground must be connected to the operational map." },
      { type: "Joint coordination", label: "Support roles changed during the battle", detail: "The date of a service's involvement should be cited precisely and not generalized to the entire campaign." },
      { type: "Evidence gap", label: "Public synopsis has limits", detail: "The NWM account is concise; more detailed claims about command decisions and casualty totals need additional records." }
    ],
    lessons: [
      { label: "Defend communications, not just ground", detail: "Evaluate the purpose of a position in terms of the roads, bridges and reserves that depend on it." },
      { label: "Joint support has to fit the time and place", detail: "Artillery and air support depend on coordination, communication and the changing situation on the ground." },
      { label: "Keep operational scope explicit", detail: "The battle's local outcome, the full western-front campaign and the war's political outcome are different analytical levels." }
    ],
    sources: [
      { title: "Battle of Chhamb", publisher: "National War Memorial", kind: "Official memorial record", url: "https://nationalwarmemorial.gov.in/war-depictions/details/5", supports: "Opening dates and the public account of Army and Air Force involvement." },
      { title: "Official History of Indian Armed Forces", publisher: "Press Information Bureau, Ministry of Defence", kind: "Government historical catalogue", url: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48", supports: "Official history of the 1971 war." }
    ]
  },
  {
    id: "ipkf-sri-lanka-1987",
    campaignId: "ipkf-sri-lanka-1987",
    title: "IPKF in Sri Lanka: Mandate, Conflict and Withdrawal",
    period: "1987–1990",
    theatre: "Sri Lanka",
    thesis: "The IPKF experience shows why mission mandates, political aims and practical military tasks must remain aligned. The force's role shifted after deployment, and the intervention's strategic legacy remains contested.",
    context: [
      "The Indo-Sri Lanka Accord of July 1987 created the diplomatic setting for India's deployment. The stated mission and conditions on the ground changed over time, and the IPKF became involved in a conflict with the Liberation Tigers of Tamil Eelam after the initial peacekeeping framework broke down.",
      "India's intervention had consequences for India, Sri Lanka and local communities. A careful account should describe the political objectives, command arrangements and humanitarian consequences, rather than either treating the mission as a simple success story or reducing it to a single failure."
    ],
    commanders: [
      { name: "Lieutenant General A. S. Kalkat", role: "Commander, Indian Peace Keeping Force", contribution: "Held the theatre-level command role during the IPKF deployment. Operational judgements should be grounded in professional histories and the mandate context.", tag: "Theatre command" },
      { name: "Prime Minister Rajiv Gandhi", role: "Political authority at deployment", contribution: "The Accord and deployment were political decisions; political authority must be separated from tactical command of forces in Sri Lanka.", tag: "Political decision" }
    ],
    phases: [
      { dates: "July–October 1987", title: "Accord and initial deployment", detail: "The deployment began under a peace framework and involved expectations of disarmament and stabilisation." },
      { dates: "Late 1987–1989", title: "Mission shifts into sustained combat", detail: "Fighting with the LTTE grew more intense; the mandate, local context and requirements for intelligence and joint command became more difficult." },
      { dates: "1989–1990", title: "Political change and withdrawal", detail: "The mission moved toward withdrawal; the public historical record debates its strategic and political outcome." }
    ],
    timeline: [
      { date: "29 July 1987", title: "Indo-Sri Lanka Accord signed", detail: "The Accord provided the political setting for India's deployment and the intended peace framework.", status: "Primary diplomatic milestone" },
      { date: "1987", title: "IPKF deployment begins", detail: "The force entered under a peacekeeping rationale; conditions evolved rapidly after disagreements over disarmament and political aims.", status: "Mission milestone" },
      { date: "1990", title: "IPKF withdrawal completed", detail: "The withdrawal ended India's direct deployment; the wider Sri Lankan conflict continued.", status: "Mission endpoint" }
    ],
    planning: "A peace-support mission requires a clear political end state, an enforceable mandate, realistic assumptions about armed actors, intelligence about local factions, command relationships and a strategy for changing conditions. If the mission changes from monitoring to sustained combat, political authorities must revisit objectives, force structure, rules and the definition of success.",
    execution: "The IPKF's experience included disarmament expectations, conflict with the LTTE, urban and jungle combat, civil-military work and eventual withdrawal. Public summaries compress complex phases; detailed conclusions should use official histories and professional military analysis rather than relying on single anecdotes.",
    friction: [
      { type: "Mandate issue", label: "Mission purpose changed in practice", detail: "A force designed for a peacekeeping role can become engaged in combat if the political assumptions collapse. That change demands explicit direction and review." },
      { type: "Command issue", label: "Joint and local coordination", detail: "Clear responsibilities across services, headquarters and local partners matter when the political and tactical situation shifts." },
      { type: "Strategic question", label: "Tactical performance versus political outcome", detail: "A unit may win engagements while the overall mission fails to secure a lasting political settlement. Evaluate both levels." }
    ],
    lessons: [
      { label: "Write a feasible mandate", detail: "The mission should identify what force can achieve, the conditions required, and who can authorize a change." },
      { label: "Keep political aims and military tasks aligned", detail: "Military activity cannot compensate indefinitely for an unclear or changing political settlement." },
      { label: "Assess local knowledge and legitimacy", detail: "Language, factional dynamics and community experience shape intelligence, security and the long-term result." }
    ],
    sources: [
      { title: "Indo-Sri Lanka Accord", publisher: "Ministry of External Affairs", kind: "Primary diplomatic document", url: "https://www.mea.gov.in/Portal/ForeignRelation/India-Sri_Lanka_Relations.pdf", supports: "The political agreement that formed the context for deployment." },
      { title: "At Odds in Sri Lanka", publisher: "Institute for Defence Studies and Analyses", kind: "Professional military analysis", url: "https://idsa.in/system/files/JDS1%281%292007_0.pdf", supports: "Command structure and the evolution of the IPKF's role." },
      { title: "India's official-history catalogue", publisher: "Press Information Bureau, Ministry of Defence", kind: "Government historical catalogue", url: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48", supports: "The wider series of official military histories." }
    ]
  },
  {
    id: "india-un-peacekeeping",
    campaignId: "india-un-peacekeeping",
    title: "India and UN Peacekeeping: Service Beyond the Front Line",
    period: "1950s–present",
    theatre: "Africa, Europe, the Middle East and Asia",
    thesis: "Indian military contributions to UN peacekeeping have included infantry, medical personnel, engineers and support elements. These missions are not one continuous operation; each has its own mandate, host-state context, command arrangement and political end state.",
    context: [
      "India began contributing to UN peacekeeping in the early decades of the UN system and has served in missions across several continents. Deployments have included medical support, engineering, protection of civilians and help to create conditions for political transitions.",
      "The UN lists active and former missions separately; mission names and mandates change over time. This study is a guide to the range of India's peacekeeping experience rather than a complete catalogue of every contingent, unit rotation or casualty."
    ],
    commanders: [
      { name: "UN Force Commanders", role: "Mission leadership", contribution: "Exercise mission-level command within the mandate and arrangements authorized by the United Nations; national governments retain important responsibilities over their contingents.", tag: "Multinational command" },
      { name: "Indian contingent commanders", role: "National unit leadership", contribution: "Lead Indian personnel within UN rules and mission orders; responsibilities vary with the country, date and unit assigned.", tag: "National contingent command" }
    ],
    phases: [
      { dates: "1950s–1960s", title: "Early missions and medical service", detail: "Indian personnel contributed to early UN operations, including the Congo mission and the Custodian Force in Korea." },
      { dates: "1970s–2000s", title: "Long-term multinational deployments", detail: "Indian personnel served in multiple countries and roles; a mission-by-mission view is needed to preserve context." },
      { dates: "2010s–present", title: "Protection, engineering and stability support", detail: "Modern missions include civilian protection and assistance to political transitions under distinct UN mandates." }
    ],
    timeline: [
      { date: "1950s", title: "India contributes to early peace missions", detail: "Indian personnel served in early UN missions, including medical personnel and the Custodian Force in Korea.", status: "Historical milestone" },
      { date: "1960–1963", title: "Congo operation", detail: "Indian troops served in ONUC during the crisis in the newly independent Republic of the Congo.", status: "Official-history period" },
      { date: "2000", title: "Operation Khukri in Sierra Leone", detail: "Indian peacekeepers took part in the extraction operation during UNAMSIL.", status: "Named operation" },
      { date: "Present", title: "Multiple missions remain distinct", detail: "UN mandates and deployments change; current mission details should be checked against the current UN and Government of India records.", status: "Ongoing / changing" }
    ],
    planning: "Peacekeeping planning starts with the UN mandate and the resources provided to execute it. Force protection, rules of engagement, local consent, civilian protection, medical evacuation, sustainment, language and liaison need to be built into the mission concept. A peacekeeping mission must not be treated as interchangeable with peace enforcement or counter-insurgency.",
    execution: "Indian personnel have served as part of multinational mission structures. Mission-specific studies should identify the UN resolution, mandate, period, troop role and command system rather than treating national contributions as unilateral campaigns.",
    friction: [
      { type: "Mandate constraint", label: "Force and authority are bounded", detail: "UN missions operate within Security Council mandates and host-state arrangements; the responsibilities and legal powers differ from a national combat operation." },
      { type: "Operational constraint", label: "Protection and impartiality can conflict", detail: "Commanders may face difficult choices when protecting civilians while working under rules, information gaps and limited resources." },
      { type: "Evidence gap", label: "A single total can hide mission differences", detail: "Personnel contributions, casualty counts and mission duration must be attributed to the exact time period and definition used by the source." }
    ],
    lessons: [
      { label: "Mandate literacy is essential", detail: "Personnel need to understand what the mission is authorized to do and how authority changes by task." },
      { label: "Medical and engineering roles matter", detail: "Peacekeeping includes sustaining safe movement, treating people and rebuilding basic systems as well as patrols." },
      { label: "Use mission-by-mission evidence", detail: "A general claim about UN peacekeeping should be supported by the relevant UN mission page or report." }
    ],
    sources: [
      { title: "India and UN Peacekeeping", publisher: "United Nations Peacekeeping", kind: "Institutional overview", url: "https://peacekeeping.un.org/en/india", supports: "India's contribution history and mission roles." },
      { title: "Where we operate", publisher: "United Nations Peacekeeping", kind: "Current mission catalogue", url: "https://peacekeeping.un.org/en/where-we-operate/", supports: "The current UN mission list; statuses and mandates change over time." },
      { title: "Official History of Indian Armed Forces", publisher: "Press Information Bureau, Ministry of Defence", kind: "Government historical catalogue", url: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48", supports: "Official histories of the Congo operation and Custodian Force India in Korea." }
    ]
  },
  {
    id: "operation-khukri-2000",
    campaignId: "operation-khukri-2000",
    title: "Operation Khukri: Sierra Leone",
    period: "2000",
    theatre: "Sierra Leone",
    thesis: "Operation Khukri is a distinctive Indian contribution to UN peacekeeping history. The operation involved an extraction under difficult circumstances and demonstrates that peacekeeping can include high-risk emergency action while remaining under a UN mandate.",
    context: [
      "Indian troops served in the United Nations Mission in Sierra Leone during a civil conflict. In 2000, a contingent was surrounded and the UN mission faced a serious crisis. Operation Khukri became the name associated with the effort to recover the Indian contingent and restore freedom of movement.",
      "The operation's chronology should be read in the context of the UN mandate and the multinational mission. This study avoids unsupported details about exact routes, unit movements or tactical sequencing where the accessible public record does not provide a complete daily log."
    ],
    commanders: [
      { name: "Indian contingent commanders", role: "National unit leadership within UNAMSIL", contribution: "Were responsible for their unit and its coordination with the UN mission; exact individual roles should be attributed to the relevant official account.", tag: "Contingent command" },
      { name: "UNAMSIL mission leadership", role: "Multinational mission command", contribution: "Managed the wider peacekeeping crisis and coordination with contributing nations under the UN mandate.", tag: "UN mission command" }
    ],
    phases: [
      { dates: "1999–2000", title: "UNAMSIL deployment", detail: "Indian contingents served in the UN mission as it attempted to implement the peace agreement and disarmament process." },
      { dates: "May–June 2000", title: "Contingent crisis", detail: "The surrounding and detention of UN personnel escalated the mission crisis; exact dates should be checked against the mission history." },
      { dates: "June–July 2000", title: "Operation Khukri", detail: "The extraction operation became a major episode in India's peacekeeping record. This public timeline deliberately avoids unsupported tactical detail." }
    ],
    timeline: [
      { date: "1999", title: "UNAMSIL established", detail: "The UN Mission in Sierra Leone was established to support the peace process and disarmament, demobilisation and reintegration tasks.", status: "UN mandate milestone" },
      { date: "2000", title: "Mission crisis", detail: "UN peacekeepers faced a serious crisis in which Indian contingents were among the affected personnel.", status: "Public mission record" },
      { date: "2000", title: "Operation Khukri", detail: "The operation is remembered as the effort to recover an Indian contingent under pressure. The date-level chronology should be read with official military and UN records.", status: "Named operation" }
    ],
    planning: "An extraction in a UN mission requires a clear mandate, shared situational awareness, contingency planning, coordination among contingents and an understanding of the mission's political setting. Tactical detail should come from authorized historical sources; an educational overview should not fill gaps with an invented route or sequence.",
    execution: "Public accounts describe the extraction as a successful recovery. The mission context matters: UN force command, national command, neighbouring contingents and the broader security situation were connected. This study retains the broad account and marks where a full after-action record would be necessary for finer detail.",
    friction: [
      { type: "Mandate constraint", label: "Peacekeeping conditions can change rapidly", detail: "A mission designed for monitoring and supporting a settlement can face a sudden security crisis that tests force protection and contingency planning." },
      { type: "Command issue", label: "National and UN authority overlap", detail: "The relationship between national contingent command and UN operational direction must be understood in its specific legal and organizational context." },
      { type: "Evidence gap", label: "Avoid false precision", detail: "A summary of the event does not establish every tactical movement or individual decision; those claims require a source that actually documents them." }
    ],
    lessons: [
      { label: "Build contingencies before a crisis", detail: "Protection and recovery tasks must be considered before a mission's security assumptions fail." },
      { label: "Coordination matters across contingents", detail: "Multinational missions need liaison, interoperable communications and understood command relationships." },
      { label: "A successful extraction has strategic context", detail: "Evaluate not just the recovered contingent but also the effect on the mandate, credibility and safety of the wider mission." }
    ],
    sources: [
      { title: "India and UN Peacekeeping", publisher: "United Nations Peacekeeping", kind: "Institutional overview", url: "https://peacekeeping.un.org/en/india", supports: "India's long-standing peacekeeping contribution." },
      { title: "Past peacekeeping operations — UNAMSIL", publisher: "United Nations Peacekeeping", kind: "Mission archive", url: "https://peacekeeping.un.org/en/mission/past", supports: "The mandate and historical context of the UN Mission in Sierra Leone." },
      { title: "Official History of Indian Armed Forces", publisher: "Press Information Bureau, Ministry of Defence", kind: "Government history catalogue", url: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48", supports: "The Government's catalogue of histories of military operations and peace missions." }
    ]
  },
  {
    id: "operation-sarp-vinash-2003",
    campaignId: "operation-sarp-vinash-2003",
    title: "Operation Sarp Vinash",
    period: "2003",
    theatre: "Hill Kaka, Poonch region, Jammu & Kashmir",
    thesis: "Operation Sarp Vinash is commonly described as a major effort to dismantle militant sanctuaries in the Hill Kaka area. The case can be studied through public reporting on area security, intelligence, terrain, civilian protection and the limits of a summary account.",
    context: [
      "The operation took place in Jammu and Kashmir during a long period of counter-insurgency. Public accounts place it in the Hill Kaka area of Poonch and describe a campaign against militant infrastructure and hideouts.",
      "Counter-insurgency records require careful attention to civilians, source scope and the difference between official claims, press reports and retrospective assessments. This study does not imply that every reported camp, casualty or result has been independently verified by the available citation."
    ],
    commanders: [
      { name: "Formation and unit commanders", role: "Indian Army in the Poonch region", contribution: "Led units involved in the publicly described operation; individual decisions should only be assigned when a source directly identifies the person and role.", tag: "Command context" },
      { name: "Local civil authorities", role: "Civilian administration", contribution: "Civilian security, access and the wider political environment form part of the operational context, even where public summaries focus mainly on the force itself.", tag: "Civil-military context" }
    ],
    phases: [
      { dates: "Before April 2003", title: "Public reporting identifies Hill Kaka", detail: "The area was described in public accounts as a difficult mountainous locality associated with militant presence." },
      { dates: "April–May 2003", title: "Operation takes place", detail: "Accounts describe a sustained operation against militant sanctuaries. Exact unit-level sequence is not reconstructed here without a dated source." },
      { dates: "After the operation", title: "Security and civilian effects", detail: "Public reporting described changes in the area, but durable outcomes require a longer horizon and more than a single operational release." }
    ],
    timeline: [
      { date: "2003", title: "Operation Sarp Vinash", detail: "Public accounts associate the operation with Hill Kaka in Poonch and an effort to dismantle militant sanctuaries; the accessible source set does not support a complete day-by-day log.", status: "Broad public chronology" },
      { date: "After 2003", title: "Longer-term assessment required", detail: "A sound evaluation should compare follow-on security, civilian impact and subsequent incidents rather than equating a short-term operation with a permanent outcome.", status: "Assessment horizon" }
    ],
    planning: "The high-level planning problem involved a mountainous area, the quality of available intelligence, mobility, sustainment and the need to account for civilians. An educational account can examine those planning dimensions without publishing or speculating about tactical route details.",
    execution: "The operation is described publicly as a campaign to dismantle militant sanctuaries. Its execution should be assessed from sources that disclose the mandate, date range and methodology of any reported totals. This dossier does not convert one reported account into an unquestioned total.",
    friction: [
      { type: "Evidence caveat", label: "Reported totals can vary", detail: "Claims about camps, militants or weapons need a source and clear definition; different reports may cover different periods and counting criteria." },
      { type: "Operational constraint", label: "Mountain access and endurance", detail: "Difficult terrain can restrict movement and medical evacuation, increasing the importance of planning and sustainment." },
      { type: "Civilian-protection question", label: "Security outcomes must include human consequences", detail: "Evaluate civilian safety, movement, access to services and rights rather than treating the operation only as a count of targets." }
    ],
    lessons: [
      { label: "Distinguish activity from durable outcome", detail: "An operation can disrupt a network without proving that the underlying security problem has been permanently resolved." },
      { label: "Use transparent metrics", detail: "State what a reported number measures, who reported it and whether independent corroboration exists." },
      { label: "Treat civilians as part of the operational environment", detail: "Civilian protection, trust and access are relevant both ethically and strategically." }
    ],
    sources: [
      { title: "Official History of Indian Armed Forces — catalogue", publisher: "Press Information Bureau, Ministry of Defence", kind: "Government catalogue", url: "https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1522933&lang=2&reg=48", supports: "The official history framework and related military-history records; it does not itself provide a full Sarp Vinash chronology." },
      { title: "Public historical record on Operation Sarp Vinash", publisher: "Government and professional military archives", kind: "Research lead / scope caveat", url: "https://www.pib.gov.in/", supports: "A starting point for corroboration; specific claims must be checked against the dated item used." }
    ]
  },
  {
    id: "operation-rahat-yemen-2015",
    campaignId: "operation-rahat-yemen-2015",
    title: "Operation Raahat and the Yemen Evacuation",
    period: "2015",
    theatre: "Yemen and regional transit points",
    thesis: "Operation Raahat shows how a state evacuates citizens during a conflict through diplomacy, air and sea transport, transit hubs and coordination across agencies. The mission was not solely an Army operation and should be labelled as a whole-of-government effort.",
    context: [
      "In 2015, conflict in Yemen created risks for Indian nationals and other civilians seeking to leave. India mounted a multi-agency evacuation involving diplomatic missions and different transport services.",
      "The Navy and Air Force played major roles in transport and extraction; the diplomatic task and assistance from regional authorities were essential. This study is included as part of the wider Indian security and military-support record, not as a claim that the Army owned every task."
    ],
    commanders: [
      { name: "Government evacuation coordinators", role: "Multi-agency mission", contribution: "Aligned consular information, transport availability and coordination with other governments; exact tasking varied by route and day.", tag: "Whole-of-government coordination" },
      { name: "Naval and Air Force commanders", role: "Transport and evacuation support", contribution: "Provided maritime and air transport roles documented in the broader evacuation account; the service responsibility should not be incorrectly attributed to the Army.", tag: "Joint-services support" }
    ],
    phases: [
      { dates: "March 2015", title: "Crisis and evacuation preparation", detail: "Diplomatic and transport planning responded to the changing security environment and the need to assemble passenger manifests." },
      { dates: "March–April 2015", title: "Air and sea movements", detail: "Evacuees were moved through regional airports and sea routes as feasible; route and daily counts should be attributed to specific government releases." },
      { dates: "April 2015", title: "Evacuation winds down", detail: "The main evacuation effort ended as people were transferred to safety; individual travel timelines differed." }
    ],
    timeline: [
      { date: "March 2015", title: "Evacuation efforts begin", detail: "India organised transport and consular support for nationals affected by the conflict in Yemen.", status: "Government mission milestone" },
      { date: "March–April 2015", title: "Air and sea evacuation", detail: "Different agencies and services contributed; the exact breakdown of transport modes should be taken from the specific official release.", status: "Execution period" },
      { date: "April 2015", title: "Main evacuation concludes", detail: "The operation demonstrated the need for diplomatic coordination, manifest control and safe transit arrangements.", status: "Mission endpoint" }
    ],
    planning: "The planning problem was to move citizens out of an active conflict zone without a simple, stable exit corridor. That requires up-to-date passenger information, safe embarkation areas, regional permission, transport capacity, medical contingency and the ability to change routes quickly. Public reporting will not provide the full day-by-day operational picture.",
    execution: "The evacuation involved multiple services and government agencies. A balanced account should be careful about exactly who carried which group and when; aggregate passenger figures cannot by themselves explain how each movement was accomplished.",
    friction: [
      { type: "Logistical constraint", label: "Transport capacity and safe routes", detail: "Airfield access, port access, passenger assembly and onward travel can become bottlenecks during a crisis." },
      { type: "Coordination issue", label: "Diplomacy is part of the operation", detail: "Permission, transit arrangements, lists and information sharing are central to evacuation success." },
      { type: "Classification of mission", label: "Not Army-led", detail: "The operation belongs in a broad Indian military-history archive, but service attribution must reflect the major Navy, Air Force and diplomatic roles." }
    ],
    lessons: [
      { label: "Build a common passenger picture", detail: "Consular lists, contact channels and priority cases should be coordinated across agencies." },
      { label: "Maintain route flexibility", detail: "Air and maritime options, transit hubs and regional partners create resilience when conditions change." },
      { label: "Attribute service contributions precisely", detail: "A national operation may be joint or civilian-agency-led; do not label it Army-led if the record says otherwise." }
    ],
    sources: [
      { title: "Ministry of External Affairs — press release archive", publisher: "Government of India", kind: "Government source catalogue", url: "https://www.mea.gov.in/press-releases.htm", supports: "Official statements about evacuation policy and citizen assistance." },
      { title: "Government of India public reporting", publisher: "Press Information Bureau", kind: "Government source catalogue", url: "https://www.pib.gov.in/", supports: "Official announcements and service-specific mission information; individual statements should be cited by date." }
    ]
  },
  {
    id: "operation-snow-leopard-2020",
    campaignId: "operation-snow-leopard-2020",
    title: "Operation Snow Leopard and the Eastern Ladakh Standoff",
    period: "2020–present",
    theatre: "Eastern Ladakh",
    thesis: "The eastern Ladakh standoff is a contemporary case in deterrence, crisis management, diplomacy and sustaining forces at altitude. Public records are incomplete and evolve over time, so this study intentionally avoids live tactical detail.",
    context: [
      "Events in eastern Ladakh in 2020 created a prolonged standoff along the India–China border. Public statements and reporting describe military mobilisation, talks and phases of disengagement, but a full operational record is not publicly available.",
      "A public learning archive should separate verified official statements from secondary reporting and analysis. It should not infer exact force positions, vulnerabilities or current tactical intentions from images and incomplete data."
    ],
    commanders: [
      { name: "Senior Army leadership", role: "Publicly reported institutional command", contribution: "The military context changed over successive rounds of talks and disengagement; any named individual attribution should be limited to a public source that confirms the role and date.", tag: "Institutional command" },
      { name: "Diplomatic and military representatives", role: "Bilateral engagement", contribution: "The situation involved both military and diplomatic mechanisms; the public chronology should reflect that the political dialogue and ground-level arrangements were linked.", tag: "Crisis-management coordination" }
    ],
    phases: [
      { dates: "2020", title: "Standoff emerges", detail: "The crisis became a sustained issue involving military and diplomatic channels. This page does not specify sensitive tactical deployments." },
      { dates: "2020–2024", title: "Negotiation and disengagement phases", detail: "Public statements recorded multiple rounds of talks and arrangements; each location and agreement needs its own dated source." },
      { dates: "2024 onward", title: "Continuing border management", detail: "A contemporary situation can change. This study should be reviewed whenever new official statements alter the public record." }
    ],
    timeline: [
      { date: "2020", title: "Eastern Ladakh crisis", detail: "Publicly reported incidents and deployments created a prolonged standoff along the border.", status: "Public milestone" },
      { date: "2020–2024", title: "Military and diplomatic talks", detail: "The two sides used military commander-level meetings and diplomatic channels; the chronology is a high-level outline, not a tactical diary.", status: "Crisis-management phase" },
      { date: "Present", title: "Use the latest official record", detail: "Current details evolve and should be assessed from the most recent public statements rather than an old static description.", status: "Ongoing context" }
    ],
    planning: "At the broad level, a protracted high-altitude standoff requires force sustainment, medical and engineering support, clear communication channels and diplomatic options for reducing risk. This study does not analyse current tactical positions, exact logistics patterns or exploitable vulnerabilities.",
    execution: "The publicly documented story involves a combination of military readiness, local arrangements, and political dialogue. Public statements do not disclose the full operational picture; unknowns are left explicitly unresolved rather than filled with speculation.",
    friction: [
      { type: "Current-information caveat", label: "Situation may change", detail: "This is an educational outline, not a live operational update. Consult current government statements for the latest public milestones." },
      { type: "Evidence gap", label: "Public statements are selective", detail: "They communicate agreed steps and positions but do not constitute a full after-action history or reveal every operational assessment." },
      { type: "Security boundary", label: "No tactical position reconstruction", detail: "The archive will not map current unit positions or identify vulnerabilities from partial information. Historical and policy analysis can be pursued without exposing sensitive detail." }
    ],
    lessons: [
      { label: "Deterrence includes communication", detail: "Military readiness and political channels both shape how a border crisis develops." },
      { label: "High-altitude sustainment is a long-duration problem", detail: "Health, shelter, engineering, transport and rotation systems affect endurance over time." },
      { label: "Separate public fact from intelligence claims", detail: "An educational history should mark what is officially confirmed, what is attributed to reporting and what is not known." }
    ],
    sources: [
      { title: "Ministry of External Affairs — India–China relations", publisher: "Government of India", kind: "Official diplomatic resource", url: "https://www.mea.gov.in/india-china-relations.htm", supports: "Official public context for bilateral relations and dialogue." },
      { title: "Republic Day 2026 honours and operations", publisher: "Press Information Bureau, Ministry of Defence", kind: "Official public record", url: "https://www.pib.gov.in/newsite/erelcontent.aspx?lang=2&reg=48&relid=282739", supports: "Public recognition mentioning Operation Snow Leopard among current operational service records." }
    ]
  }
];
