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
  }
];
