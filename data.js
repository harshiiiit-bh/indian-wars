// ================= TIMELINE DATA =================
// phase: infiltration | detection | mobilization | battles | endgame
const TIMELINE = [
  { date: "Oct 1998", phase: "infiltration", text: "Pervez Musharraf is appointed Chief of Army Staff of Pakistan. Analysts believe planning for the Kargil infiltration, first proposed in earlier decades, is reactivated around this time." },
  { date: "Winter 1998–99", phase: "infiltration", text: "Musharraf designs the infiltration on a Napoleonic model — internally reported as Operation Koh Paima: breach through narrow, unguarded winter gaps, then expand rapidly in the rear. Pakistan Army Special Services Group commandos and 4–7 battalions of the Northern Light Infantry, in traditional civilian dress, bypass winter-vacated posts (including the Indian Army's Bajrang post) to covertly occupy up to 132 vantage points across Mushkoh, Dras, Kaksar, Batalik, Chorbat La and Turtuk. General Ved Malik later stated the bulk of infiltration occurred in April." },
  { date: "March 1999", phase: "infiltration", text: "Unprecedented heavy snowfall forces India's 121 Infantry Brigade to vacate several winter outposts earlier and more completely than usual, widening the gap Pakistani troops would exploit. Early April patrols fail to detect anything, hampered by severe avalanche conditions; India's winter air surveillance (WASO) flights hug the valleys rather than the ridgelines to stay at safe altitudes, missing the camouflaged igloo-tents of the infiltrators entirely." },
  { date: "11 Feb 1999", phase: "infiltration", text: "PM Vajpayee travels to Lahore; he and PM Nawaz Sharif sign the Lahore Declaration days later, pledging a peaceful, bilateral resolution of Kashmir — even as the Kargil plan is already underway inside the Pakistan Army." },
  { date: "3 May 1999", phase: "detection", text: "Local shepherds in the Batalik sector alert the Indian Army at Banju headquarters to unusual movement and unfamiliar structures on the ridgelines — the first tangible tip-off of the intrusion." },
  { date: "5 May 1999", phase: "detection", text: "An Indian Army patrol is sent to investigate. A patrol led by Capt. Saurabh Kalia is ambushed in the Batalik sector; five soldiers are killed, exposing the scale of the infiltration for the first time." },
  { date: "9 May 1999", phase: "detection", text: "Pakistani infiltrators shell an Indian artillery ammunition dump at Kargil overnight, then withdraw under cover of their own artillery fire." },
  { date: "10 May 1999", phase: "mobilization", text: "India formally launches Operation Vijay, mobilising forces to clear the intrusion. Initial estimates from the DGMO describe only \"some militants\" — the true scale is not yet understood." },
  { date: "12–15 May 1999", phase: "mobilization", text: "Army Chief Gen. V.P. Malik, on a visit to Poland, receives escalating reports; estimates of infiltrator numbers rise from a handful to 250–300. The 8 Mountain Division under Maj. Gen. Mohinder Puri is mobilised." },
  { date: "16 May 1999", phase: "infiltration", text: "Pakistan publicly claims its forces have seized five important Indian posts in the Kargil sector — an early, rare admission later downplayed." },
  { date: "18 May 1999", phase: "mobilization", text: "A Cabinet Committee on Security meeting in New Delhi finally reveals the true scale of the incursion. Heavy mobilisation begins; entire divisions are ordered to halt counter-insurgency duties and move to the front. India's High Commissioner in Pakistan publicly rules out full-scale war." },
  { date: "20 May 1999", phase: "mobilization", text: "The Indian Navy is placed on full alert — the opening move of Operation Talwar — well ahead of any public naval announcement, aiming to deter Pakistan from escalating into a wider war and to keep the Arabian Sea trade routes under threat." },
  { date: "21 May 1999", phase: "mobilization", text: "The Army diverts nearly three brigades — about 10,000 soldiers — from the Kashmir Valley to reinforce the Kargil Brigade. Infiltrator estimates climb past 1,000." },
  { date: "22 May 1999", phase: "battles", text: "18 Grenadiers, 1 Naga and Garhwal Rifles under Col. Kushal Thakur begin the assault on Tololing peak in the Dras sector, one of the war's most pivotal battles, grossly underestimating how deeply entrenched the Pakistani positions were." },
  { date: "25–26 May 1999", phase: "mobilization", text: "The Indian government clears limited use of air power, with the strict condition that IAF jets never cross the LoC. The Indian Air Force launches Operation Safed Sagar — the first air war ever fought globally at altitudes between 6,000 and 18,000 feet." },
  { date: "26 May 1999", phase: "battles", text: "During an early low-altitude daylight strafing run, a IAF MiG-27 flown by Flt. Lt. Kambampati Nachiketa suffers a flameout after being hit by a Pakistani Anza missile. Nachiketa ejects, fights off pursuers on the ground until out of ammunition, and is taken prisoner of war." },
  { date: "27 May 1999", phase: "battles", text: "During a search-and-rescue operation for Nachiketa, a IAF MiG-21 flown by Sqn. Ldr. Ajay Ahuja is shot down by a shoulder-fired Stinger missile over the Batalik sector. Ahuja ejects safely but is executed by his captors on the ground; his body is later returned bearing bullet wounds." },
  { date: "28 May 1999", phase: "battles", text: "The 'Nubra formation' tragedy: an unarmoured Mi-17 helicopter is struck by three Stinger missiles over Tololing. Sqn. Ldr. Rajiv Pundir, Flt. Lt. Muhilan and the entire crew are lost — the string of losses forces an immediate, total rethink of IAF tactics." },
  { date: "29 May 1999", phase: "battles", text: "Operations begin in the Batalik sector as 1 Bihar Regiment (70 Infantry Brigade) captures several posts, including Point 5203, in the western Batalik area, though the position is briefly lost again." },
  { date: "30 May 1999", phase: "mobilization", text: "The Mirage 2000 fleet flies its first sorties. Following the losses of 26–28 May, the IAF pivots entirely: strikes now come from above 30,000 feet, out of MANPADS range, using Israeli AN/AAQ-28 Litening targeting pods and Paveway laser-guided bombs — the first-ever combat use of commercial handheld GPS units by pilots to calculate lofted bomb trajectories in thin, high-altitude air. There are zero further IAF aircraft losses for the rest of the campaign." },
  { date: "31 May 1999", phase: "endgame", text: "Pakistani Foreign Secretary Shamshad Ahmad warns that escalation could lead Pakistan to use \"any weapon\" in its arsenal — widely read internationally as a veiled nuclear threat." },
  { date: "1 June 1999", phase: "battles", text: "Pakistan intensifies shelling of National Highway 1 in Kashmir and Ladakh. The international community increasingly holds Pakistan responsible for the military aggression." },
  { date: "6 June 1999", phase: "battles", text: "12 J&K Rifles and 5 Para Special Forces launch a renewed assault on Point 5203 in Batalik after first capturing Point 5390; the battle for 5203 becomes one of the bloodiest of the campaign." },
  { date: "6 June 1999", phase: "battles", text: "The Indian Army launches its first major coordinated offensive operations across the Kargil sector." },
  { date: "9 June 1999", phase: "battles", text: "The Indian Air Force launches sustained air campaigns over the Kargil and Batalik sectors in close coordination with ground assaults." },
  { date: "13 June 1999", phase: "battles", text: "Diplomatic talks between India and Pakistan yield no result; the same day, Indian forces secure Tololing peak in Dras after three weeks of brutal fighting — a turning point that finally tilts the campaign in India's favour. 13 JAK Rifles marches 12 hours from Dras to act as reserves and relieve 18 Grenadiers." },
  { date: "14 June 1999", phase: "battles", text: "Point 4590 on Tololing is recaptured — a significant gain, though the single battle results in the Indian Army's highest casualties of the entire war." },
  { date: "15 June 1999", phase: "endgame", text: "U.S. President Bill Clinton telephones PM Nawaz Sharif, directly urging Pakistan to withdraw its forces from Kargil." },
  { date: "Mid-June 1999", phase: "battles", text: "The IAF, now flying strictly from high altitude, identifies and repeatedly bombs Muntho Dhalo — a bowl-shaped valley housing Pakistan's main forward supply depot. A repeated recon-strike-assess cycle using MiG-25s and Canberras for reconnaissance and Mirage 2000s and MiG-27s for GPS-guided night bombing eventually demolishes more than 80 structures, permanently crippling the enemy's logistics chain into the Kargil sector." },
  { date: "17–21 June 1999", phase: "battles", text: "13 JAK Rifles under Lt. Col. Yogesh Kumar Joshi (56 Mountain Brigade) is tasked with capturing Point 5140. Captain Vikram Batra, commanding Delta Company under callsign 'Sher Shah', leads a Ghatak team up a sheer rock cliff facing the rear of the enemy bunkers rather than the expected approach; after killing three soldiers single-handedly and lobbing grenades into the bunker despite injuries, the point is captured by 04:35 on 20 June with zero Indian casualties, along with captured anti-aircraft machine guns. Batra's radio transmission, \"Yeh Dil Maange More,\" becomes a defining phrase of the war. Ladakh Scouts join the Batalik fighting and Point 5203 finally falls after a battle lasting since 6 June; Brigade Commander Brig. Devinder Singh is wounded." },
  { date: "21–22 June 1999", phase: "battles", text: "1 Naga captures Area Rocky and Black Tooth adjacent to Point 5140." },
  { date: "28–30 June 1999", phase: "battles", text: "18 Grenadiers clear regrouped infiltrators from Point 4700, previously evicted from Tololing. 2 Rajputana Rifles under Lt. Col. M.B. Ravindranath, after a personal briefing from Gen. Malik, recaptures Area Three Pimples (the Knoll, Lone Hill and Three Pimples) in a two-day battle. In Batalik, four battalions of 70 Infantry Brigade launch a multidirectional assault on the strategically vital Point 4812." },
  { date: "3–8 July 1999", phase: "battles", text: "The Battle of Tiger Hill — the highest and most iconic peak overlooking Dras, defended by well-entrenched Pakistani troops with mortars, US-supplied AN/TPQ-36 Firefinder radars and Stinger SAMs at sustained temperatures near -15°C. A 13-hour artillery barrage opens the assault. Instead of a frontal approach, a Ghatak commando platoon led by Grenadier Yogendra Singh Yadav scales a 1,000-foot vertical rear cliff in freezing rain over roughly 12 hours to strike from behind, while 8 Sikh attacks the adjoining western ridge, absorbing repeated counterattacks to split the Pakistani defence. Yadav sustains 17 bullet wounds neutralising three enemy bunkers with grenades in close-quarters combat, refuses evacuation, and crawls to his commanding officer with vital intelligence that enables the final assault — becoming, at 19, the youngest-ever Param Vir Chakra recipient. The peak falls completely to Indian forces by 8 July after eight ferocious Pakistani counterattacks; the battle is telecast live, the first in Indian history." },
  { date: "4 July 1999", phase: "endgame", text: "PM Nawaz Sharif meets President Clinton in Washington D.C. Clinton refuses support unless Pakistan withdraws fully from the Indian side of the LoC. Indian forces also capture points 5060 and 5100 near Tiger Hill around this period." },
  { date: "4–7 July 1999", phase: "battles", text: "Battle of Point 4875 (Area Flat Top), north-west of Mushkoh, directly overlooking NH-1A. On 4 July, 13 JAK Rifles begins its ascent under heavy sniper fire; the advance is pinned down by a fortified machine-gun bunker until Lt. Col. Joshi personally fires two Fagot anti-tank missiles from the firebase, scoring a direct hit that lets the infantry swarm the peak. Captain N.A. Nagappa's men capture Flat Top on 5 July but are pinned down by a fierce Pakistani counterattack. Ill with fever and still recovering from wounds, Capt. Vikram Batra volunteers to lead 25 men of Delta Company on a pitch-black night ascent, chanting the JAK Rifles battle cry 'Durga Mata Ki Jai.' Finding no possible flanking route, Batra charges the enemy bunker on a narrow ledge in broad daylight, killing five soldiers at point-blank range to clear the position; when a fellow soldier is shot, Batra exposes himself to drag him to safety alongside Subedar Raghunath Singh and is fatally struck in the chest by sniper fire and in the head by an RPG splinter on 7 July. Rifleman Sanjay Kumar, shot in the shoulder, separately crawls forward alone under fire to flank and clear a machine-gun sangar, then seizes the enemy's own weapon to rout the remaining defenders. Point 4875 is secured and later renamed Batra Top." },
  { date: "5 July 1999", phase: "endgame", text: "Sharif announces Pakistan's withdrawal from Kargil following the Clinton meeting. By this point nearly all of Mushkoh and Dras have been cleared of enemy forces; Indian forces take full control of Dras town." },
  { date: "6 July 1999", phase: "battles", text: "All four battalions attacking Point 4812 in Batalik complete their objectives and link up, securing one of the sector's most dominant positions." },
  { date: "Early July 1999", phase: "battles", text: "In the Batalik sector, 1/11 Gorkha Rifles clear Khalubar Ridge in a gruelling multi-night battle fought almost entirely in total daylight exposure, forcing brutal hand-to-hand and khukri combat to dislodge the entrenched Northern Light Infantry. Lt. Manoj Kumar Pandey, tasked with clearing positions during a vulnerable night advance, sustains grievous shoulder and leg wounds but launches a solitary charge, systematically clearing three bunkers with grenades and khukri strikes before being fatally struck in the forehead by machine-gun fire while assaulting the fourth — his actions secure the firm base needed to take Khalubar, earning a posthumous Param Vir Chakra. Nearby at Pimple 2, Captain Anuj Nayyar of 17 Jat leads a relentless two-night offensive that destroys three enemy bunkers and kills nine soldiers before he is fatally struck by an RPG; his actions secure the western flank of Tiger Hill, permanently reopening NH-1A to traffic, and earn him a posthumous Maha Vir Chakra." },
  { date: "7 July 1999", phase: "battles", text: "The Jubar peak in Batalik, the sector's final major objective, falls to 1 Bihar Regiment with air and artillery support." },
  { date: "9 July 1999", phase: "endgame", text: "The Indian Army's spokesman declares the Kargil area approximately 99% cleared of infiltrators." },
  { date: "11 July 1999", phase: "endgame", text: "Pakistani infiltrators begin their formal retreat; Indian forces take control of several remaining peaks in the Batalik region." },
  { date: "12 July 1999", phase: "endgame", text: "6 and 7 Para Special Forces, attacking Point 4700, suspend operations as an initial ceasefire takes effect — though it does not hold everywhere." },
  { date: "14 July 1999", phase: "endgame", text: "PM Atal Bihari Vajpayee publicly declares Operation Vijay a success and sets out conditions for future talks with Pakistan." },
  { date: "18 July 1999", phase: "endgame", text: "A ceasefire is arranged to allow the remaining Pakistani withdrawal to proceed." },
  { date: "22–25 July 1999", phase: "endgame", text: "After Pakistani forces fail to fully honour the ceasefire, Indian forces under Brig. M.P.S. Bajwa (192 Mountain Brigade) launch a final attack on the Zulu Spur, with 3 Gurkha Rifles and 9 Para Special Forces forcing the last Pakistani troops to retreat by 25 July." },
  { date: "26 July 1999", phase: "endgame", text: "The Kargil War officially ends. India announces the complete eviction of Pakistani forces from all occupied positions and full restoration of the Line of Control. India's final toll over roughly 83 days of intense fighting: 22 officers, 21 junior commissioned officers and 452 soldiers killed — 527 dead in total by the government's final count. The day is later commemorated annually as Kargil Vijay Diwas." },
  { date: "27 July 1999", phase: "endgame", text: "Pakistan requests a flag meeting to recover its dead; Maj. Gen. Mohinder Puri grants the request, and Pakistani forces formally agree to abide fully by the ceasefire." },
  { date: "29 July 1999", phase: "endgame", text: "The Government of India constitutes the Kargil Review Committee, mandated to rigorously review the events leading up to the intrusion and recommend systemic measures to safeguard national security — the report would later run to 14 chapters based on over 100 high-level meetings and unhindered access to former Prime Ministers and top military commanders." },
  { date: "12 October 1999", phase: "endgame", text: "Gen. Pervez Musharraf stages a bloodless coup, ousting PM Nawaz Sharif — a direct consequence of the civil-military rupture over who bore responsibility for Kargil." }
];

// ================= SECTORS / LOCATIONS =================
const SECTORS = [
  {
    id: "mushkoh",
    name: "Mushkoh Valley",
    desc: "The westernmost sector of the conflict, a lower-altitude valley where Pakistani intrusion reached its deepest point into Indian territory.",
    peaks: [
      { name: "Point 4875 / Area Flat Top", note: "Directly overlooking NH-1A; captured 4–7 July by 13 JAK Rifles after Lt. Col. Joshi's anti-tank missile strike broke a machine-gun bunker and Capt. Vikram Batra led the final daylight assault along a fortified ledge; later renamed Batra Top in his honour." },
      { name: "Zulu Spur", note: "Final objective of the war, captured 22–25 July by 3 Gurkha Rifles and 9 Para SF after Pakistan breached the ceasefire." }
    ]
  },
  {
    id: "dras",
    name: "Dras Sector",
    desc: "Home to the war's most famous battles — Tololing and Tiger Hill — directly overlooking NH-1D near one of the coldest inhabited places on Earth. The sector's dominant feature is the Marpo La ridgeline, along which Pakistani troops of the Special Services Group and roughly seven NLI battalions climbed from February 1999, observing strict radio silence and moving in phases to avoid detection.",
    peaks: [
      { name: "Tololing", note: "Recaptured 13 June after three weeks of fighting by 18 Grenadiers, 2 Rajputana Rifles and 16 Grenadiers; widely seen as the turning point of the war." },
      { name: "Point 4590", note: "Captured 14 June; site of the Indian Army's heaviest single-battle casualties of the war." },
      { name: "Tiger Hill", note: "The war's most iconic peak, at ~5,062m; captured 3–8 July after a 13-hour artillery barrage, a 1,000-foot rear-cliff night climb by a Ghatak platoon led by Grenadier Yogendra Singh Yadav (PVC), and 8 Sikh absorbing eight Pakistani counterattacks on the western ridge. Almost 10 km north of the highway itself, but its height gave direct line of sight onto the 56 Brigade HQ and a 25 km stretch of NH-1D. An earlier attempt by 8 Sikh to retake it in late May 1999 was unsuccessful. First battle ever telecast live in India." },
      { name: "Points 5060 / 5100", note: "Captured around early July near Tiger Hill, tightening India's control of the Dras ridgeline." },
      { name: "Point 4700", note: "Cleared by 18 Grenadiers (28–30 June); final resistance overcome by 6/7 Para SF after the ceasefire collapsed." },
      { name: "Three Pimples Area", note: "The Knoll, Lone Hill and Three Pimples — recaptured 28–29 June by 2 Rajputana Rifles under Lt. Col. Ravindranath." },
      { name: "Point 5353 (Marpo La ridge)", note: "The highest point in the Dras–Kargil area. Indian and Pakistani accounts disagree sharply on this feature: Pakistani sources maintain their troops held — and continued to hold — a portion of this peak on their side of an ambiguous LoC alignment even after the war ended, giving observers a view over a long stretch of NH-1D; Indian accounts describe the ridge as secured. The exact post-war status of this specific feature remains one of the more disputed footnotes of the conflict." }
    ]
  },
  {
    id: "kaksar",
    name: "Kaksar",
    desc: "A sector near Kargil town itself, one of several points along the LoC where infiltrators established observation posts overlooking the highway between the Kaobal Gali pass to the west and the town of Kargil.",
    peaks: [
      { name: "Kaksar heights", note: "Part of the broad line of infiltrated posts near Kargil town; secured as part of the wider clearance of NH-1D overlooks." },
      { name: "Kaobal Gali", note: "Marks the western limit of the 168 km Kargil sector frontage along the LoC, running from here east to Chorbat La at heights between 4,000 and 5,000 metres." }
    ]
  },
  {
    id: "batalik",
    name: "Batalik Sector",
    desc: "East of the Indus River, the scene of the war's longest and often bloodiest engagements, spread across multiple isolated peaks 8–10 km deep into previously unheld ground, ranging from roughly 15,000 to 16,800 feet in altitude.",
    peaks: [
      { name: "Point 5203 (Churubar Po)", note: "Captured after a brutal battle from 6–21 June involving 12 J&K Rifles, 5 Para SF and Ladakh Scouts; Brig. Devinder Singh was wounded here." },
      { name: "Point 5390", note: "Captured 1 June by 12 J&K Rifles and 5 Para SF, opening the path to the assault on Point 5203." },
      { name: "Point 4812", note: "A dominant Pakistani position; captured by 6 July after a multidirectional assault by four battalions of 70 Infantry Brigade beginning 30 June." },
      { name: "Jubar Peak", note: "Isolated final objective in Batalik; captured 7 July by 1 Bihar Regiment with air and artillery support." },
      { name: "Point 5140", note: "Captured by 04:35 on 20 June by 13 JAK Rifles under Lt. Col. Y.K. Joshi. Capt. Vikram Batra's Ghatak team scaled a rear cliff face for a surprise assault, capturing the point with zero Indian casualties — made famous by his radio call \"Yeh Dil Maange More\" under callsign Sher Shah." },
      { name: "Khalubar Ridge", note: "Cleared by 1/11 Gorkha Rifles in brutal, largely daylight-exposed hand-to-hand fighting; Lt. Manoj Kumar Pandey (posthumous PVC) single-handedly cleared three bunkers before falling to machine-gun fire on the fourth." },
      { name: "Pimple 2", note: "Secured by Capt. Anuj Nayyar (17 Jat, posthumous MVC) in a two-night offensive that destroyed three bunkers, permanently reopening NH-1D traffic and supply lines." },
      { name: "Kukarthang", note: "One of the ridgeline features intruded upon in the 8–10 km deep Batalik penetration, alongside Jubar and Khalubar, requiring sustained clearance operations through June and early July." },
      { name: "Yaldor Sub-Sector", note: "A hamlet of Dah village on the Yaldor nullah in the Indus basin, near the Baltistan border. A shepherd from nearby Garkhun, Tashi Namgyal, searching for a missing yak, gave the Army its first report of infiltrators here on 3 May 1999 — the opening detection of the entire war." }
    ]
  },
  {
    id: "chorbatla",
    name: "Chorbat La",
    desc: "Where the Line of Control turns north near the Turtuk area, marking the eastern limit of the formally defined Kargil sector frontage — 168 km from Kaobal Gali in the west to this point — and held throughout the war by the Ladakh Scouts.",
    peaks: [
      { name: "Chorbat La heights", note: "Infiltrated posts on the high ground here marked the war's easternmost extent within the core sector, near the sensitive Siachen approach." }
    ]
  },
  {
    id: "turtuk",
    name: "Turtuk Area",
    desc: "South of the Siachen Glacier, the far eastern edge of the wider theatre described in several accounts of the intrusion — a reminder that Pakistani troops moved along the LoC well beyond the Kargil-Dras stretch that dominated media coverage.",
    peaks: [
      { name: "Turtuk approaches", note: "Lightly infiltrated positions here underscored the broad, multi-sector scale of Operation Badr along the LoC." }
    ]
  }
];

// ================= HIGHWAYS & ACCESS ROUTES =================
const HIGHWAYS = [
  {
    name: "National Highway 1D (then numbering) — the Srinagar–Leh Highway",
    length: "422 km, Srinagar to Leh",
    desc: "The single land artery connecting the Kashmir Valley to Ladakh and onward to the Siachen Glacier — now renumbered National Highway 1. From Srinagar the road climbs over the Zoji La pass (which can receive up to 18 m of snowfall and closes the road for roughly six months a year), descends into Dras, follows the Dras River valley to Kargil, then the Wakha Rong valley to the Fotu La pass (4,108 m) before dropping into the Indus valley near Khalatse en route to Leh. The 25 km stretch of highway directly beneath Tiger Hill and the Kargil-Dras corridor was the single most contested piece of ground in the war: any force holding the ridgelines above it could direct artillery fire onto convoys, army camps and the 56 Brigade's headquarters below."
  },
  {
    name: "Zoji La Pass",
    length: "3,528 m",
    desc: "The gateway between the Kashmir Valley and Ladakh on NH1D; heavy winter snow closes it for months, meaning both militaries historically vacated the highest posts each winter — the very gap Pakistani forces exploited in 1998–99."
  },
  {
    name: "Fotu La Pass",
    length: "4,108 m",
    desc: "The highest point on the old NH1D between Kargil and Leh, crossing the Ladakh Range; less snowbound than Zoji La but still a critical chokepoint for resupply convoys during the war."
  },
  {
    name: "Kargil–Dras corridor (the contested 25 km)",
    length: "~25 km",
    desc: "The stretch of highway directly overlooked by Tololing, Tiger Hill and the Marpo La ridgeline — this segment came under direct observed artillery fire for weeks, forcing convoys to move only at night or under smoke cover until the ridgelines were recaptured."
  }
];
const OPERATIONS = [
  {
    side: "pak",
    name: "Operation Badr",
    who: "Pakistan Army — winter 1998 to spring 1999",
    desc: "The covert infiltration plan that started the war. Special Services Group commandos and Northern Light Infantry battalions occupied over 130 vacated Indian posts along the LoC, aiming to cut the Srinagar–Leh highway, threaten India's grip on Siachen, and internationalise the Kashmir dispute. Pakistan initially denied army involvement, attributing the intrusion to independent Kashmiri militants."
  },
  {
    side: "india",
    name: "Operation Vijay",
    who: "Indian Army — ground campaign, 10 May – 26 July 1999",
    desc: "India's main ground operation to evict the infiltrators, mobilising around 200,000 troops nationally with roughly 30,000 engaged directly in the Kargil-Dras sector. Commanded through XV Corps under Lt. Gen. Kishan Pal, it proceeded battalion by battalion and peak by peak — Tololing, Point 5140, Tiger Hill, Point 4875, and the Batalik heights — using around 250 artillery guns, including the Bofors FH-77B howitzer, to support infantry assaults uphill into fortified positions."
  },
  {
    side: "india",
    name: "Operation Safed Sagar",
    who: "Indian Air Force — air campaign from 26 May 1999",
    desc: "The IAF's 49-day air campaign in direct support of ground troops — the first air war ever fought globally at altitudes between roughly 6,000 and 18,000 feet (1,800–5,500 m), a regime India had never used combat air power in before, not even in 1962 against China or during the Siachen standoff. The IAF flew 7,831 total sorties across the campaign: 44.9% transport (An-32/Il-76), 32.4% helicopter (Mi-17/Cheetah, mostly casualty evacuation), and 22.7% combat aircraft — roughly 550 strike missions, 150 reconnaissance missions and 500+ escort flights, plus 2,185 helicopter sorties logging 925 flying hours. Early low-altitude daylight strafing runs on 26–28 May cost the IAF a MiG-27, a MiG-21 and an Mi-17 helicopter to Pakistani Anza and Stinger missiles. The IAF immediately pivoted: from 30 May, Mirage 2000s and MiG-27s struck from above 30,000 feet using Israeli Litening targeting pods, Paveway laser-guided bombs, and — a first in combat — handheld commercial GPS units to calculate lofted bomb trajectories in the thin air. MiG-25s flew Mach 1.3 reconnaissance at 42,000 feet, and MiG-29s flew R-77 beyond-visual-range escort to keep Pakistani F-16s, restricted to combat air patrol within their own airspace, from intervening. The destruction of the Muntho Dhalo supply depot — over 80 structures demolished via a repeated recon-strike-assess cycle — crippled Pakistani logistics into the sector. Indian jets were strictly ordered never to cross the LoC, and the IAF suffered zero further losses after its tactical pivot, facing no aerial opposition from the Pakistan Air Force throughout."
  },
  {
    side: "india",
    name: "Operation Talwar",
    who: "Indian Navy — naval posture from 20 May 1999",
    desc: "A deliberate departure from India's traditional naval restraint: the Indian Navy's Western and Eastern Fleets were merged for the first time to establish barrier patrols off Dwarka and Saurashtra, in what became the largest deployment of combat ships in the Arabian Sea, integrating 33+ frontline warships, submarines and Coast Guard assets to threaten a blockade of Pakistani ports — chiefly Karachi — and cut off Pakistan's sea-based oil and trade flows. Outgunned roughly 7-to-1, the Pakistan Navy was largely confined to harbour or dispersed to smaller Makran coast ports, frantically diverting assets to escort oil tankers from the Strait of Hormuz. In a psychological operation later called the 'Cochin Photo Drop,' the Indian Navy lined up its destroyers at Cochin, photographed them, and strategically leaked the images to Middle Eastern dailies to signal an unstoppable blockade. A squadron of Naval Electronic Warfare Dornier aircraft flew extensively along the LoC providing signals intelligence to the Army, while Indian warships also intercepted a North Korean vessel attempting to smuggle missile components bound for Pakistan. Nawaz Sharif later disclosed that Pakistan had only six days of fuel reserves left had a full-scale war broken out — a silent, non-kinetic pressure that broke Pakistan's economic capacity to sustain the conflict without a single shot fired at sea."
  }
];

// ================= LEADERS =================
const LEADERS_INDIA = [
  { name: "Atal Bihari Vajpayee", role: "Prime Minister of India", desc: "Directed India's political and diplomatic strategy, balancing military firmness with restraint — most notably the order that IAF jets never cross the LoC — while securing broad international support for India's position." },
  { name: "Gen. Ved Prakash Malik", role: "Chief of the Army Staff, Indian Army", desc: "Oversaw the entire military campaign from the first confused reports of infiltration through to victory; personally engaged with field commanders before key assaults such as the recapture of Three Pimples." },
  { name: "Lt. Gen. Kishan Pal", role: "General Officer Commanding, XV Corps", desc: "Commanded the corps directly responsible for repelling the Pakistani intrusion across the Kargil-Dras theatre." },
  { name: "Maj. Gen. Mohinder Puri", role: "GOC, 8 Mountain Division", desc: "Mobilised his division as the scale of infiltration became clear in mid-May; later granted Pakistan's request for a flag meeting to recover its dead on 27 July." },
  { name: "Brig. Surinder Singh", role: "Commander, 121 (Independent) Infantry Brigade (pre-war)", desc: "Commanded the Kargil sector before the intrusion was discovered; dismissed from his post afterward, though later press reports disputed the finding that he had failed to give early warning." },
  { name: "Air Chief Marshal A.Y. Tipnis", role: "Chief of the Air Staff, IAF", desc: "Directed Operation Safed Sagar's air campaign; later publicly stated the Army had initially been reluctant to authorise full IAF strike capability." }
];

const LEADERS_PAK = [
  { name: "Nawaz Sharif", role: "Prime Minister of Pakistan", desc: "Publicly claimed he was unaware of the Kargil plan's scale until receiving Vajpayee's call, and ultimately ordered the withdrawal under intense diplomatic and military pressure after meeting President Clinton on 4 July." },
  { name: "Gen. Pervez Musharraf", role: "Chief of Army Staff, Pakistan Army", desc: "Widely identified as the principal architect of the infiltration plan alongside a small circle of generals — the so-called 'Gang of Four.' Designed the operation on a Napoleonic infiltration model (Koh Paima), kept the Pakistan Navy and Air Force chiefs and parliamentary oversight completely in the dark, and later staged a coup against Sharif in October 1999." },
  { name: "Lt. Gen. Mohammad Aziz Khan", role: "Chief of General Staff, Pakistan Army", desc: "One of the small group of generals who planned Operation Badr; based in Rawalpindi during the operation." },
  { name: "Gen. Ashraf Rashid", role: "Commander of paramilitary infiltration forces", desc: "Led the Pakistani paramilitary and Northern Light Infantry forces that carried out the covert occupation of Indian posts." },
  { name: "Lt. Gen. Shahid Aziz", role: "Head of ISI Analysis Wing", desc: "Later publicly confirmed no mujahideen were involved — only regular Pakistan Army soldiers — contradicting Pakistan's initial official denials." },
  { name: "Admiral Fasih Bokhari", role: "Chief of Naval Staff, Pakistan Navy", desc: "Kept in the dark about Operation Badr along with the Air Force; clashed bitterly with Musharraf at a national security meeting and later called for his court-martial." }
];

// ================= HEROES & GALLANTRY PROFILES =================
const HEROES = [
  {
    name: "Captain Vikram Batra, PVC (posthumous)",
    unit: "13 Jammu & Kashmir Rifles · Callsign 'Sher Shah'",
    theatre: "Point 5140 and Point 4875, Mushkoh Valley",
    bio: "Born 9 September 1974 in Palampur, Himachal Pradesh, the elder of twin brothers 'Luv' and 'Kush.' Best NCC Air Wing cadet, paratrooping-trained, a green belt in karate, he turned down a Merchant Navy offer to join the Army. Commissioned from the Indian Military Academy in December 1997 into 13 JAK Rifles; earned an Instructor's Grade in the Commando Course at Belgaum in early 1999 and had already survived a militant ambush in Sopore, Kashmir.",
    action: "After capturing Point 5140 on 20 June via a rear-cliff assault (radio call: \"Yeh Dil Maange More\"), Batra volunteered to lead a daylight assault to relieve soldiers trapped at Area Flat Top (Point 4875). Charging a fortified ledge under heavy fire while shouting \"Durga Mata Ki Jai,\" he killed five enemy soldiers in close-quarters combat to breach the position. While exposing himself to drag a wounded junior officer to safety, he was fatally struck by sniper fire and an RPG splinter on 7 July 1999.",
    citation: "Awarded the Param Vir Chakra posthumously on 15 August 1999 by President K.R. Narayanan. Citation excerpt: \"...in a daredevil assault, pounced on the enemy and killed four of them in a hand-to-hand fight... he again assaulted the enemy position along a narrow ridge... killed five enemy soldiers at point blank range. Despite sustaining grave injuries, he crawled towards the enemy, hurling grenades... displaying the highest order of personal bravery and leadership.\"",
    legacy: "Point 4875 was renamed 'Batra Top' in his honour; the Vikram Batra Mess was established at the Indian Military Academy."
  },
  {
    name: "Grenadier Yogendra Singh Yadav, PVC",
    unit: "18 Grenadiers",
    theatre: "Tiger Hill, Dras sector",
    bio: "At just 19 years old, became the youngest-ever recipient of the Param Vir Chakra.",
    action: "Led the Ghatak commando platoon scout team up a vertical rear cliff face using fixed ropes under heavy enemy fire, opening the surprise rear assault that split the Pakistani defence of Tiger Hill.",
    citation: "Sustained 17 bullet wounds while neutralising three enemy bunkers with grenades in close-quarters combat. Refused evacuation, crawled to his commanding officer to deliver vital intelligence on enemy deployments that enabled the final, successful assault on the peak.",
    legacy: "His survival despite 17 wounds and his refusal to be evacuated before reporting intelligence became one of the most cited acts of individual valour in the campaign."
  },
  {
    name: "Lieutenant Manoj Kumar Pandey, PVC (posthumous)",
    unit: "1/11 Gorkha Rifles",
    theatre: "Khalubar Ridge, Batalik sector",
    bio: "Tasked with clearing enemy positions during a vulnerable night advance to prevent his battalion from being caught exposed in daylight.",
    action: "Despite sustaining grievous shoulder and leg injuries, launched a solitary charge, systematically clearing three enemy bunkers with grenades and khukri strikes.",
    citation: "Led the assault on the fourth and final bunker, destroying it with a grenade just as he was fatally struck in the forehead by a machine-gun burst. His actions provided the critical firm base needed to capture Khalubar Ridge.",
    legacy: "One of four Param Vir Chakras awarded for the war, commemorating the ferocious, largely hand-to-hand fighting in the Batalik sector."
  },
  {
    name: "Rifleman Sanjay Kumar, PVC",
    unit: "13 Jammu & Kashmir Rifles",
    theatre: "Area Flat Top, Point 4875",
    bio: "Operating as lead scout during the push to clear Area Flat Top, his column was pinned down by machine-gun fire from an elevated enemy bunker.",
    action: "Shot in the shoulder and bleeding heavily, crawled forward alone to flank the bunker, killing its occupants in close combat.",
    citation: "Out of ammunition, seized the enemy's own abandoned machine gun and charged a secondary depth position, killing fleeing soldiers and causing the remaining defence to collapse — ensuring capture of the ridge.",
    legacy: "One of the war's four Param Vir Chakra recipients, and among a small number who survived their citation action."
  },
  {
    name: "Captain Anuj Nayyar, MVC (posthumous)",
    unit: "17 Jat Regiment",
    theatre: "Pimple 2, western flank of Tiger Hill",
    bio: "Led a relentless two-night offensive to secure the western approaches to Tiger Hill.",
    action: "Destroyed three enemy bunkers and personally killed nine soldiers before being fatally struck by an RPG.",
    citation: "Awarded the Maha Vir Chakra posthumously; his actions permanently secured the flank, allowing traffic and supply lines to resume safely on NH-1A.",
    legacy: "His life after his death was portrayed in the 2003 Hindi film Dhoop, focused on his parents' grief and pride."
  },
  {
    name: "Capt. Karnal Sher Khan, Nishan-e-Haider (posthumous)",
    unit: "27th Battalion, Sind Regiment, Pakistan Army",
    theatre: "Tiger Hill counterattack",
    bio: "Personally led one of eight ferocious Pakistani counterattacks against Indian positions after the fall of Tiger Hill.",
    action: "Led a desperate daylight counterattack against entrenched Indian troops.",
    citation: "Posthumously awarded Pakistan's highest military honour, the Nishan-e-Haider — reportedly based in part on the citation the Indian brigade commander, Brig. M.P.S. Bajwa, left in his pocket when returning his body as a mark of respect for his bravery.",
    legacy: "One of only two Nishan-e-Haider recipients of the war, alongside Havildar Lalak Jan of the Northern Light Infantry."
  }
];

// ================= POST-WAR REFORMS =================
const REFORMS = [
  {
    title: "Kargil Review Committee",
    period: "Constituted 29 July 1999",
    desc: "Chaired by strategic affairs analyst K. Subrahmanyam, with power to interview anyone connected to Indian security including former Prime Ministers. Its report — 14 chapters based on over 100 high-level meetings — found that intelligence collection was deeply siloed with no institutionalised mechanism to task or cross-check agencies; that extreme nuclear secrecy had kept the Army itself in the dark about India's own capability, creating a cognitive disadvantage; and that India lacked high-altitude UAVs, satellite imagery and advanced SIGINT, relying instead on inefficient helicopter patrols. The full report was published, an unusual step, though classified annexures on the nuclear programme were withheld."
  },
  {
    title: "Creation of the Chief of Defence Staff (CDS)",
    period: "Recommended 1999-2001; implemented 2019",
    desc: "The Kargil Review Committee's call for a single-point military adviser to the government, ending the fragmented 'Lord Ismay 1947 model' in which the Army, Navy and Air Force operated entirely outside the apex governmental structure with only a part-time National Security Adviser and segmented briefings."
  },
  {
    title: "Department of Military Affairs (DMA)",
    period: "Established 2019",
    desc: "Bureaucratic streamlining that integrated the three services more directly into government decision-making, replacing the old ad-hoc arrangement that had left India's National Security Adviser working part-time with fragmented intelligence flows into the Cabinet Committee on Security."
  },
  {
    title: "Agnipath recruitment scheme",
    period: "Introduced 2022",
    desc: "Addressed a core problem Kargil exposed: prolonged Army deployment in counter-insurgency duty degrading external defence readiness and inflating pension costs. Reduced typical 'colour service' from roughly 17 years to 7–10 years, aiming to keep the frontline Army younger and more combat-ready while streaming trained ex-soldiers into border security and paramilitary forces."
  },
  {
    title: "Technological modernisation drive",
    period: "Ongoing since 2000s, accelerated post-2014",
    desc: "Direct response to the Committee's finding of a 'gross lack of indigenous surveillance tech' — funding for satellite imagery, high-altitude UAVs with thermal imaging, and centralised SIGINT. India's defence budget roughly tripled from ₹2.53 lakh crore (2013–14) to ₹7.85 lakh crore (2026–27); defence exports grew 56-fold over the same period, reaching 80+ countries; and domestic production now covers an estimated 65% of equipment needs, up sharply from historic import dependence."
  },
  {
    title: "End of 'ad-hoc restraint'",
    period: "Doctrinal shift, post-1999",
    desc: "India moved away from the unsustainable, reactive policy of manning every inch of uninhabitable high-altitude terrain ('Siachenisation') toward a more credible declaratory policy: that deliberate LoC infringement would meet prompt, tri-service retaliation at a time, place and domain of India's choosing — treating land, air and sea as a single integrated response rather than three separate services acting in isolation."
  }
];

// ================= STRATEGIC ANALYSIS: THE "OPERATION BADR" PATTERN =================
const STRATEGIC_COMPARISON = [
  {
    year: "1973",
    label: "Egypt's Operation Badr (Yom Kippur War)",
    desc: "A surprise Suez Canal crossing exploiting a Yom Kippur holiday and routine-looking mobilisation exercises as cover. Water pumps breached Israeli sand embankments; integrated air-defence networks neutralised Israeli air superiority over the bridgehead. Militarily contained after early gains, but achieved Egypt's underlying political objective: forcing Israel to the negotiating table, ultimately leading to the 1979 peace treaty and return of Sinai."
  },
  {
    year: "1985",
    label: "Iran's Operation Badr (Iran–Iraq War)",
    desc: "A surprise night infiltration by roughly 100,000 Iranian troops through the reed-choked Hawizeh Marshes, bypassing Iraqi armour to reach the Baghdad–Basra highway. Iranian logistics failed once forces emerged onto dry land; Iraq's 4th Corps and Republican Guard, with total air superiority, mobilised from three directions and used Tabun and mustard gas against exposed Iranian positions. Iran was forced back into the marshes with up to 17,000 Iranian and 5,000 Iraqi casualties and zero territorial change — a case study in surprise devolving into pure attrition."
  },
  {
    year: "1999",
    label: "Pakistan's Operation Badr (Kargil War)",
    desc: "A high-altitude infiltration disguised as Kashmiri militancy, intended to sever the Kashmir–Ladakh link and force international attention onto the Kashmir dispute. Tactically achieved complete surprise and occupied dominant terrain — but was tactically defeated by Operation Vijay and globally isolated for violating the Line of Control, becoming, by most Western and Pakistani military historians' own assessment, Pakistan's most damaging military defeat since 1971."
  }
];

const VULNERABILITY_FRAMEWORK = [
  { pillar: "Intelligence fragmentation", desc: "Collection was deeply siloed across agencies with no institutionalised mechanism for objective-oriented interaction or cross-tasking between them." },
  { pillar: "Doctrinal blind spots", desc: "A two-decade military consensus assumed the harsh Kargil terrain was entirely unsuitable for a large-scale conventional intrusion; extreme secrecy around India's own nuclear programme meant even the Army was kept from context that might have sharpened threat assessment." },
  { pillar: "Technological deficiencies", desc: "A gross lack of indigenous surveillance technology — inefficient helicopter patrols flown along valleys rather than ridgelines, and a critical absence of high-altitude UAVs, satellite imagery, and advanced SIGINT capability." }
];
