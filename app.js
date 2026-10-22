/* Indian Wars / Field Archive — interaction layer
   Keeps the original Kargil data.js as the historical content source. */
(function () {
  'use strict';

  var $ = function (selector, root) { return (root || document).querySelector(selector); };
  var $$ = function (selector, root) { return Array.prototype.slice.call((root || document).querySelectorAll(selector)); };
  var PHASE_LABELS = { infiltration: 'Infiltration', detection: 'Detection', mobilization: 'Mobilization', battles: 'Key battle', endgame: 'Endgame' };
  var ROUTE_TITLES = {
    home: 'Home',
    'operations-atlas': 'Operations Atlas',
    campaigns: 'War Studies',
    kargil: 'Kargil War 1999',
    'kargil-timeline': 'Kargil Timeline',
    'kargil-theatre': 'Kargil Theatre',
    'kargil-operations': 'Kargil Operations',
    'kargil-people': 'Kargil People',
    academy: 'Academy',
    analysis: 'Analysis',
    sources: 'Sources'
  };
  var sectionRouteMap = {
    home: 'home',
    'operations-atlas': 'operations-atlas',
    atlas: 'operations-atlas',
    campaigns: 'campaigns',
    kargil: 'kargil',
    overview: 'kargil',
    'overview-brief': 'kargil',
    timeline: 'kargil-timeline',
    timelineCount: 'kargil-timeline',
    phaseFilters: 'kargil-timeline',
    timelineList: 'kargil-timeline',
    theatre: 'kargil-theatre',
    sectorSelector: 'kargil-theatre',
    sectorDetail: 'kargil-theatre',
    highwaysList: 'kargil-theatre',
    operations: 'kargil-operations',
    opsGrid: 'kargil-operations',
    people: 'kargil-people',
    sideSwitch: 'kargil-people',
    leadersGrid: 'kargil-people',
    heroesGrid: 'kargil-people',
    academy: 'academy',
    intelligence: 'analysis',
    analysis: 'analysis',
    sources: 'sources'
  };
  var currentRoute = 'home';
  var SOURCE_LIBRARY = [
    { id: 'nwm-operation-vijay', title: 'Operation Vijay — War Depictions', org: 'National War Memorial', kind: 'Official memorial record', year: 'Government of India', url: 'https://nationalwarmemorial.gov.in/war-depictions/details/8', summary: 'Official memorial overview of the Kargil operation, the recapture of heights, gallantry awards, and the Indian fatality figure stated on this page.' },
    { id: 'pib-2009-kargil', title: 'The Nation Remembers Kargil War Heroes', org: 'Press Information Bureau · Ministry of Defence', kind: 'Government release', year: '26 Jul 2009', url: 'https://www.pib.gov.in/newsite/erelcontent.aspx?lang=2&reg=48&relid=50974', summary: 'Government overview of Operation Vijay and Operation Safed Sagar, aircraft employed, high-altitude missions, and the Line of Control restriction.' },
    { id: 'pib-2024-iaf', title: 'Kargil Vijay Diwas Rajat Jayanti — IAF Operations', org: 'Press Information Bureau · Ministry of Defence', kind: 'Government release', year: '14 Jul 2024', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2033075&lang=2&reg=48', summary: 'Indian Air Force retrospective describing high-altitude challenges and its reported categories of strike, reconnaissance/ELINT, escort, and helicopter missions.' },
    { id: 'iaf-history', title: 'History of the Indian Air Force', org: 'Indian Air Force', kind: 'Official service history', year: 'Government of India', url: 'https://careerairforce.gov.in/indian-air-force-history', summary: 'Institutional overview of Operation Safed Sagar and the challenges of combat air operations at unprecedented altitude.' },
    { id: 'krc-sansad', title: 'Kargil Review Committee papers', org: 'Sansad eLibrary', kind: 'Parliamentary archive', year: '2000 papers', url: 'https://elibrary.sansad.in/items/94154a2c-a144-4ab4-a8bc-94c76e834c04', summary: 'Parliamentary catalogue for the Kargil Review Committee report, executive summary, and government action-taken report.' },
    { id: 'rs-debate-krc', title: 'Report of the Kargil Review Committee and action taken', org: 'Rajya Sabha Official Debates', kind: 'Parliamentary record', year: '28 Feb 2000', url: 'https://rsdebate.nic.in/handle/123456789/110129', summary: 'Official parliamentary record with links to documents concerning the committee report and follow-up measures.' },
    { id: 'white-house-statement', title: 'Clinton–Sharif Joint Statement on Kashmir', org: 'The White House archive', kind: 'Primary diplomatic document', year: '4 Jul 1999', url: 'https://clintonwhitehouse6.archives.gov/1999/07/1999-07-04-joint-statement-by-president-and-pakistan-prime-minister.html', summary: 'Contemporaneous text on respecting the Line of Control, restoration of the line, and the diplomatic understanding reached in Washington.' },
    { id: 'state-history', title: 'History of the Department of State — Kashmir conflict', org: 'U.S. Department of State archive', kind: 'Government historical account', year: 'Clinton-era archive', url: 'https://1997-2001.state.gov/about_state/history/ch13.html', summary: 'U.S. diplomatic history explaining the administration response to the Kargil crisis and the July 1999 meeting.' },
    { id: 'clinton-library', title: 'Kargil War records — finding aid', org: 'William J. Clinton Presidential Library', kind: 'Presidential archival finding aid', year: 'Archival catalogue', url: 'https://www.clintonlibrary.gov/research/archives/finding-aids/kargil-war', summary: 'Catalogue of declassified Kargil-era records, press materials, correspondence, and diplomatic context preserved by the Clinton Library.' },
    { id: 'nwm-kashmir-1947', title: 'India–Pakistan Conflict, 1947–48', org: 'National War Memorial', kind: 'Official memorial record', year: '1947–49', url: 'https://nationalwarmemorial.gov.in/murals/totem_details/1', summary: 'Memorial account of the first post-independence conflict, airlift to Srinagar, ceasefire date, and the memorial page’s stated sacrifice and award figures.' },
    { id: 'nwm-1947-1962', title: 'Moments of Military Pride: 1947 to 1962', org: 'National War Memorial', kind: 'Official memorial record', year: '1947–62', url: 'https://nationalwarmemorial.gov.in/war-depictions/details/3', summary: 'Memorial histories of early post-independence operations including the recapture of Zoji La and Operation Bison.' },
    { id: 'official-military-histories', title: 'Official History of Indian Armed Forces', org: 'Press Information Bureau · Ministry of Defence', kind: 'Government historical catalogue', year: '7 Mar 2018', url: 'https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=177064', summary: 'Government catalogue of published official histories, including Jammu & Kashmir 1947–48, Goa Liberation 1961, and the India–Pakistan wars of 1965 and 1971.' },
    { id: 'pib-1965-iaf', title: '1965 India–Pakistan War: Role of IAF', org: 'Press Information Bureau · Ministry of Defence', kind: 'Government retrospective', year: '5 Sep 2014', url: 'https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=109364', summary: 'IAF retrospective describing Operation Grand Slam in the Chhamb–Jaurian sector and the importance of air-ground coordination.' },
    { id: 'pib-1971-war', title: '50th anniversary of the 1971 war', org: 'Press Information Bureau · Ministry of Defence', kind: 'Government retrospective', year: '2021', url: 'https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=228559', summary: 'Government account of the December 1971 war on eastern and western fronts, the surrender in Dhaka, and Bangladesh’s emergence as an independent nation.' },
    { id: 'mea-1971-war', title: 'The Indo-Pak War 1971', org: 'Ministry of External Affairs', kind: 'Government historical publication', year: 'India’s Wars Since Independence', url: 'https://www.mea.gov.in/Uploads/PublicationDocs/23460_IWM_Book__11-06-2014_.pdf', summary: 'Historical chapter on the political, humanitarian, military, and diplomatic context of the 1971 war.' },
    { id: 'pib-trident', title: '22 Killer Squadron and Operation Trident', org: 'Press Information Bureau · Ministry of Defence', kind: 'Government naval history', year: '2021', url: 'https://www.pib.gov.in/Pressreleaseshare.aspx?PRID=1778234&lang=2&reg=48', summary: 'Official naval account of the missile-boat attack on the night of 4–5 December 1971.' },
    { id: 'pib-meghdoot', title: 'IAF in Operation Meghdoot', org: 'Press Information Bureau · Ministry of Defence', kind: 'Government retrospective', year: '13 Apr 2024', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2017834&lang=2&noshow=1&reg=48', summary: 'Government account of the operation’s launch on 13 April 1984, high-altitude deployment, and airlift support around Siachen.' },
    { id: 'mea-cactus', title: 'Responding First, Leading Power', org: 'Ministry of External Affairs', kind: 'Government policy publication', year: 'Modern retrospective', url: 'https://www.mea.gov.in/Portal/IndiaArticleAll/636548965437648101_Responding_First_Leading_Pow.pdf', summary: 'MEA account describing India’s response to a request for assistance from the Maldives government during Operation Cactus in 1988.' },
    { id: 'pib-maldives', title: 'Indian Navy response during Maldives crisis', org: 'Press Information Bureau · Ministry of Defence', kind: 'Government naval history', year: '2014', url: 'https://www.pib.gov.in/newsite/PrintRelease.aspx?lang=2&reg=48&relid=112783', summary: 'Official Navy summary of the response to the 1988 coup attempt and the evacuation of people from fleeing mercenaries.' },
    { id: 'nehru-archive-1962', title: 'To Heads of Government, 26 October 1962', org: 'The Nehru Archive', kind: 'Contemporaneous archival document', year: '26 Oct 1962', url: 'https://nehruarchive.in/documents/to-heads-of-government-26-october-1962-y6yqq', summary: 'A contemporaneous document from the 1962 border conflict, useful for studying the political and diplomatic framing of events in the words of the time.' }
  ];

  function escapeHTML(value) {
    return String(value == null ? '' : value).replace(/[&<>"']/g, function (ch) {
      return ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch];
    });
  }
  function safeStoreGet(key, fallback) {
    try { var value = localStorage.getItem(key); return value === null ? fallback : value; }
    catch (e) { return fallback; }
  }
  function safeStoreSet(key, value) {
    try { localStorage.setItem(key, value); return true; }
    catch (e) { showToast('Browser storage is unavailable. Your changes may not persist.'); return false; }
  }
  function safeJSON(value, fallback) {
    try { return JSON.parse(value); } catch (e) { return fallback; }
  }
  var storedSavedIds = safeJSON(safeStoreGet('iw-field-saved', '[]'), []);
  var savedIds = new Set((Array.isArray(storedSavedIds) ? storedSavedIds : []).filter(function (x) { return typeof x === 'string'; }));
  var storedStudiedWarIds = safeJSON(safeStoreGet('iw-studied-wars', '[]'), []);
  var studiedWarIds = new Set((Array.isArray(storedStudiedWarIds) ? storedStudiedWarIds : []).filter(function (x) { return typeof x === 'string'; }));
  var activePhase = 'all';
  var TIMELINE_PAGE_SIZE = 10;
  var CAMPAIGN_PAGE_SIZE = 6;
  var ATLAS_PAGE_SIZE = 9;
  var ATLAS_COMPARE_LIMIT = 3;
  var atlasSortMode = 'catalogue';
  var atlasViewMode = 'cards';
  var comparisonIds = [];
  var timelinePage = 1;
  var campaignPage = 1;
  var atlasPage = 1;
  var activeSector = (typeof SECTORS !== 'undefined' && SECTORS.length) ? SECTORS[0].id : '';
  var activeSide = 'india';
  var activeCampaignFilter = 'all';
  var activeQuizTopic = 'all';
  var quizQuestions = [];
  var quizPosition = 0;
  var quizScore = 0;
  var quizAnswered = false;
  var quizResponses = [];
  var globalIndex = [];
  var toastTimer = null;

  function showToast(message) {
    var toast = $('#toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toast.classList.remove('show'); }, 2400);
  }
  function saveIds() { safeStoreSet('iw-field-saved', JSON.stringify(Array.from(savedIds))); }
  function bookmarkButton(id, label) {
    var yes = savedIds.has(id);
    return '<button type="button" class="bookmark-btn' + (yes ? ' saved' : '') + '" data-save-id="' + escapeHTML(id) + '" aria-pressed="' + yes + '">' + (yes ? '★ Saved' : '☆ ' + (label || 'Save')) + '</button>';
  }
  function toggleSaved(id) {
    if (savedIds.has(id)) { savedIds.delete(id); showToast('Removed from field notes'); }
    else { savedIds.add(id); showToast('Added to field notes'); }
    saveIds();
    renderTimeline();
    renderCampaigns();
    renderAtlas();
    renderAtlasMap();
    renderSectors();
    renderOperations();
    renderLeaders();
    renderHeroes();
    renderReforms();
    renderSources();
    renderVault();
    renderSearchResults($('#globalSearch') ? $('#globalSearch').value : '');
  }

  function resolveRoute(hash) {
    var key = String(hash || '').replace(/^#/, '').split('?')[0];
    if (ROUTE_TITLES[key]) return key;
    if (sectionRouteMap[key]) return sectionRouteMap[key];
    if (key.indexOf('timeline-event-') === 0) return 'kargil-timeline';
    if (key.indexOf('campaign-card-') === 0) return 'campaigns';
    if (key.indexOf('atlas-card-') === 0) return 'operations-atlas';
    var target = document.getElementById(key);
    var view = target && (target.matches('[data-view]') ? target : target.closest('[data-view]'));
    return view && ROUTE_TITLES[view.dataset.view] ? view.dataset.view : 'home';
  }
  function syncRouteNavigation(route) {
    var isKargilRoute = route === 'kargil' || route.indexOf('kargil-') === 0;
    $$('.top-nav [data-route]').forEach(function (button) {
      var active = button.dataset.route === route || (button.dataset.route === 'kargil' && isKargilRoute);
      button.classList.toggle('active', active);
      if (active) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    $$('#kargilChapterNav [data-route]').forEach(function (button) {
      var active = button.dataset.route === route;
      button.classList.toggle('active', active);
      if (active) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    var more = $('#navMore');
    if (more) {
      var moreActive = route === 'analysis' || route === 'sources';
      var summary = $('summary', more);
      if (summary) summary.classList.toggle('active', moreActive);
      if (!moreActive) more.open = false;
    }
  }

  function activateRoute(route, options) {
    options = options || {};
    route = ROUTE_TITLES[route] ? route : 'home';
    currentRoute = route;
    var isKargilRoute = route === 'kargil' || route.indexOf('kargil-') === 0;
    document.body.dataset.route = route;
    $$('[data-view]').forEach(function (view) {
      var visible = view.dataset.view === route;
      view.hidden = !visible;
      view.classList.toggle('route-hidden', !visible);
      view.setAttribute('aria-hidden', visible ? 'false' : 'true');
    });
    var chapterNav = $('#kargilChapterNav');
    if (chapterNav) {
      var showChapterNav = isKargilRoute || route === 'analysis' || route === 'sources';
      chapterNav.hidden = !showChapterNav;
      chapterNav.setAttribute('aria-hidden', showChapterNav ? 'false' : 'true');
    }
    syncRouteNavigation(route);
    document.title = ROUTE_TITLES[route] + ' — Indian Wars Field Archive';
    if (route === 'operations-atlas' && atlasMap && typeof atlasMap.invalidateSize === 'function') {
      window.setTimeout(function () { if (atlasMap) atlasMap.invalidateSize({ pan: false }); }, 70);
    }
    if (options.scrollTo) {
      var target = document.getElementById(options.scrollTo);
      if (target) target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'auto' });
      if (options.focus && target && target.matches('h1,h2,h3')) target.focus({ preventScroll: true });
    } else if (options.resetScroll) {
      window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      if (options.focus) {
        var title = $('[data-view="' + route + '"] h1, [data-view="' + route + '"] h2');
        if (title) {
          title.setAttribute('tabindex', '-1');
          title.focus({ preventScroll: true });
        }
      }
    }
  }

  function prepareDynamicAnchor(key) {
    if (!key) return;
    var eventMatch = /^timeline-event-(\d+)$/.exec(key);
    if (eventMatch && typeof TIMELINE !== 'undefined') {
      activePhase = 'all';
      if ($('#timelineSearch')) $('#timelineSearch').value = '';
      $$('#phaseFilters [data-phase]').forEach(function (button) { button.classList.toggle('active', button.dataset.phase === 'all'); });
      var orderedTimeline = TIMELINE.map(function (event, index) { return { raw: event, index: index, sort: parseDateKey(event.date, index / 1000) }; }).sort(function (a, b) { return a.sort - b.sort; });
      var eventPosition = orderedTimeline.findIndex(function (item) { return item.index === Number(eventMatch[1]); });
      timelinePage = eventPosition >= 0 ? Math.floor(eventPosition / TIMELINE_PAGE_SIZE) + 1 : 1;
      renderTimeline();
      return;
    }
    if (key.indexOf('campaign-card-') === 0 && typeof CAMPAIGNS !== 'undefined') {
      activeCampaignFilter = 'all';
      campaignPage = 1;
      if ($('#campaignSearch')) $('#campaignSearch').value = '';
      $$('#campaignFilters [data-campaign-filter]').forEach(function (button) { button.classList.toggle('active', button.dataset.campaignFilter === 'all'); });
      var campaignId = key.slice('campaign-card-'.length);
      var campaignPosition = CAMPAIGNS.findIndex(function (campaign) { return campaign.id === campaignId; });
      if (campaignPosition >= 0) campaignPage = Math.floor(campaignPosition / CAMPAIGN_PAGE_SIZE) + 1;
      renderCampaigns();
      return;
    }
    if (key.indexOf('atlas-card-') === 0 && typeof OPERATIONS_ATLAS !== 'undefined') {
      activeAtlasFilter = 'all';
      atlasPage = 1;
      if ($('#atlasSearch')) $('#atlasSearch').value = '';
      $$('#atlasFilters [data-atlas-filter]').forEach(function (button) { button.classList.toggle('active', button.dataset.atlasFilter === 'all'); });
      var operationId = key.slice('atlas-card-'.length);
      var atlasItems = getAtlasItems();
      var atlasPosition = atlasItems.findIndex(function (operation) { return operation.id === operationId; });
      if (atlasPosition >= 0) atlasPage = Math.floor(atlasPosition / ATLAS_PAGE_SIZE) + 1;
      renderAtlas();
    }
  }

  function handleLocationChange() {
    var key = window.location.hash.replace(/^#/, '');
    prepareDynamicAnchor(key);
    var route = resolveRoute(key);
    var target = key ? document.getElementById(key) : null;
    var targetView = target && (target.matches('[data-view]') ? target : target.closest('[data-view]'));
    var scrollTo = target && targetView && targetView.dataset.view === route ? key : null;
    activateRoute(route, { scrollTo: scrollTo, resetScroll: !scrollTo && !!key, focus: !!key && !scrollTo });
  }
  function navigateRoute(route) {
    if (!ROUTE_TITLES[route]) route = 'home';
    hideSearch();
    var nextHash = '#' + route;
    if (window.location.hash !== nextHash) window.location.hash = route;
    else activateRoute(route, { resetScroll: true, focus: true });
  }

  function sectionJump(id) {
    var target = document.getElementById(id);
    var view = target && (target.matches('[data-view]') ? target : target.closest('[data-view]'));
    var route = view && ROUTE_TITLES[view.dataset.view] ? view.dataset.view : (sectionRouteMap[id] || 'home');
    var nextHash = '#' + id;
    if (window.location.hash !== nextHash) window.history.pushState(null, '', nextHash);
    activateRoute(route, { scrollTo: target ? id : null, resetScroll: !target, focus: !!target });
    hideSearch();
  }
  function shortHeadline(text) {
    var clean = String(text || '').replace(/\s+/g, ' ').trim();
    var sentence = clean.split(/(?<=[.!?])\s+/)[0] || clean;
    if (sentence.length > 128) sentence = sentence.slice(0, 125).replace(/\s+\S*$/, '') + '…';
    return sentence;
  }
  function parseDateKey(dateText, fallbackIndex) {
    var t = String(dateText || '').toLowerCase();
    var monthNames = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];
    var month = -1;
    monthNames.forEach(function (m, i) { if (t.indexOf(m) !== -1) month = i; });
    if (month < 0) {
      if (t.indexOf('winter') !== -1) month = 10;
      else if (t.indexOf('spring') !== -1) month = 2;
      else month = 0;
    }
    var yMatch = t.match(/(?:19|20)\d{2}/);
    var year = yMatch ? Number(yMatch[0]) : 1999;
    var dMatch = t.match(/^\s*(\d{1,2})(?:\s*[–-]\s*\d{1,2})?\s+[a-z]/i);
    var day = dMatch ? Number(dMatch[1]) : 1;
    return new Date(year, month, day).getTime() + (fallbackIndex || 0);
  }

  function buildIndex() {
    globalIndex = [];
    if (typeof TIMELINE !== 'undefined') TIMELINE.forEach(function (e, i) {
      globalIndex.push({ id: 'event:' + i, type: 'Timeline', title: shortHeadline(e.text), detail: e.date + ' · ' + PHASE_LABELS[e.phase] + ' · ' + e.text, target: 'timeline', phase: e.phase, raw: e });
    });
    if (typeof SECTORS !== 'undefined') SECTORS.forEach(function (s) {
      globalIndex.push({ id: 'sector:' + s.id, type: 'Theatre sector', title: s.name, detail: s.desc + ' ' + s.peaks.map(function (p) { return p.name + ' ' + p.note; }).join(' '), target: 'theatre', raw: s });
      s.peaks.forEach(function (p, i) { globalIndex.push({ id: 'peak:' + s.id + ':' + i, type: 'Named height', title: p.name, detail: s.name + ' · ' + p.note, target: 'theatre', sectorId: s.id, raw: p }); });
    });
    if (typeof OPERATIONS !== 'undefined') OPERATIONS.forEach(function (o, i) {
      globalIndex.push({ id: 'operation:' + i, type: 'Operation', title: o.name, detail: o.who + ' · ' + o.desc, target: 'operations', raw: o });
    });
    if (typeof LEADERS_INDIA !== 'undefined') LEADERS_INDIA.forEach(function (p, i) {
      globalIndex.push({ id: 'leader:india:' + i, type: 'Commander', title: p.name, detail: p.role + ' · ' + p.desc, target: 'people', side: 'india', raw: p });
    });
    if (typeof LEADERS_PAK !== 'undefined') LEADERS_PAK.forEach(function (p, i) {
      globalIndex.push({ id: 'leader:pak:' + i, type: 'Commander', title: p.name, detail: p.role + ' · ' + p.desc, target: 'people', side: 'pak', raw: p });
    });
    if (typeof HEROES !== 'undefined') HEROES.forEach(function (p, i) {
      globalIndex.push({ id: 'hero:' + i, type: 'Gallantry profile', title: p.name, detail: p.unit + ' · ' + p.theatre + ' · ' + p.bio + ' ' + p.action + ' ' + p.legacy, target: 'people', raw: p });
    });
    if (typeof REFORMS !== 'undefined') REFORMS.forEach(function (r, i) {
      globalIndex.push({ id: 'reform:' + i, type: 'Reform', title: r.title, detail: r.period + ' · ' + r.desc, target: 'intelligence', raw: r });
    });
    if (typeof STRATEGIC_COMPARISON !== 'undefined') STRATEGIC_COMPARISON.forEach(function (r, i) {
      globalIndex.push({ id: 'analysis:' + i, type: 'Comparative history', title: r.label, detail: r.year + ' · ' + r.desc, target: 'intelligence', raw: r });
    });
    SOURCE_LIBRARY.forEach(function (s) {
      globalIndex.push({ id: 'source:' + s.id, type: 'Source archive', title: s.title, detail: s.org + ' · ' + s.summary, target: 'sources', url: s.url, raw: s });
    });
    if (typeof CAMPAIGNS !== 'undefined') CAMPAIGNS.forEach(function (campaign) {
      globalIndex.push({ id: 'campaign:' + campaign.id, type: campaign.type === 'war' ? 'War dossier' : 'Operation dossier', title: campaign.title, detail: campaign.period + ' · ' + campaign.theatre + ' · ' + campaign.summary, target: 'campaigns', raw: campaign });
    });
    if (typeof OPERATIONS_ATLAS !== 'undefined') OPERATIONS_ATLAS.forEach(function (operation) {
      var chronologyText = (operation.chronology || []).map(function (entry) { return [entry.date, entry.title, entry.detail].join(' '); }).join(' ');
      globalIndex.push({
        id: 'atlas:' + operation.id, type: 'Operations Atlas dossier', title: operation.title,
        detail: [operation.period, operation.place, operation.scope, operation.service, operation.summary, operation.plan, operation.execution, operation.friction, operation.lessons, chronologyText].join(' '),
        target: 'operations-atlas', raw: operation
      });
    });
    if (typeof WAR_STUDIES !== 'undefined') WAR_STUDIES.forEach(function (study) {
      var leadersText = (study.commanders || []).map(function (leader) { return [leader.name, leader.role, leader.contribution].join(' '); }).join(' ');
      var eventText = (study.timeline || []).map(function (entry) { return [entry.date, entry.title, entry.detail].join(' '); }).join(' ');
      var reviewText = (study.friction || []).map(function (item) { return [item.label, item.detail, item.type].join(' '); }).concat((study.lessons || []).map(function (item) { return [item.label, item.detail].join(' '); })).join(' ');
      globalIndex.push({
        id: 'study:' + study.id, type: 'Full War Study', title: study.title,
        detail: [study.period, study.theatre, study.thesis, (study.context || []).join(' '), leadersText, eventText, study.planning, study.execution, reviewText].join(' '),
        target: 'campaigns', raw: study
      });
    });
  }

  function clampPage(currentPage, totalItems, pageSize) {
    var totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
    return Math.max(1, Math.min(currentPage, totalPages));
  }

  function renderPagination(containerId, listName, currentPage, totalItems, pageSize) {
    var container = $('#' + containerId);
    if (!container) return 1;
    var totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
    currentPage = Math.max(1, Math.min(currentPage, totalPages));
    if (totalPages <= 1) {
      container.hidden = true;
      container.innerHTML = '';
      return 1;
    }
    container.hidden = false;
    container.innerHTML =
      '<button type="button" data-page-action="previous" data-page-list="' + listName + '" aria-label="Previous page"' + (currentPage <= 1 ? ' disabled' : '') + '><span aria-hidden="true">←</span> Previous</button>' +
      '<span class="pagination-status" id="' + listName + 'PageStatus" data-page="' + currentPage + '" data-pages="' + totalPages + '" aria-live="polite">Page ' + currentPage + ' of ' + totalPages + ' · ' + totalItems + ' results</span>' +
      '<button type="button" data-page-action="next" data-page-list="' + listName + '" aria-label="Next page"' + (currentPage >= totalPages ? ' disabled' : '') + '>Next <span aria-hidden="true">→</span></button>';
    return currentPage;
  }

  function renderTimeline() {
    var list = $('#timelineList');
    var query = ($('#timelineSearch') ? $('#timelineSearch').value : '').trim().toLowerCase();
    if (!list || typeof TIMELINE === 'undefined') return;
    var ordered = TIMELINE.map(function (e, i) { return { raw: e, index: i, sort: parseDateKey(e.date, i / 1000) }; }).sort(function (a, b) { return a.sort - b.sort; });
    var filtered = ordered.filter(function (item) {
      var e = item.raw;
      return (activePhase === 'all' || e.phase === activePhase) && (!query || (e.date + ' ' + e.text + ' ' + PHASE_LABELS[e.phase]).toLowerCase().indexOf(query) !== -1);
    });
    timelinePage = renderPagination('timelinePagination', 'timeline', timelinePage, filtered.length, TIMELINE_PAGE_SIZE);
    var totalPages = Math.max(1, Math.ceil(filtered.length / TIMELINE_PAGE_SIZE));
    $('#timelineCount').textContent = filtered.length + ' / ' + TIMELINE.length + ' ENTRIES · PAGE ' + timelinePage + ' / ' + totalPages;
    $('#eventTotal').textContent = TIMELINE.length;
    if (!filtered.length) {
      list.innerHTML = '<div class="empty-state">No entries match that filter. Try a broader phrase or switch to “All phases”.</div>';
      return;
    }
    var pageItems = filtered.slice((timelinePage - 1) * TIMELINE_PAGE_SIZE, timelinePage * TIMELINE_PAGE_SIZE);
    list.innerHTML = pageItems.map(function (item) {
      var e = item.raw;
      var id = 'event:' + item.index;
      return '<article class="event" id="timeline-event-' + item.index + '">' +
        '<div class="event-date"><b>' + escapeHTML(e.date) + '</b><span>' + escapeHTML(PHASE_LABELS[e.phase] || e.phase) + '</span></div>' +
        '<div><h3>' + escapeHTML(shortHeadline(e.text)) + '</h3><p>' + escapeHTML(e.text) + '</p>' +
        '<div class="event-foot"><span class="tag ' + (e.phase === 'battles' ? 'orange' : e.phase === 'endgame' ? 'gold' : '') + '">' + escapeHTML(PHASE_LABELS[e.phase] || e.phase) + '</span>' +
        bookmarkButton(id, 'Save event') +
        '<button type="button" class="bookmark-btn" data-route="sources">In-page evidence notes</button></div></div></article>';
    }).join('');
  }
  function renderSectors() {
    if (typeof SECTORS === 'undefined') return;
    var selector = $('#sectorSelector');
    selector.innerHTML = SECTORS.map(function (s) {
      return '<button class="sector-btn' + (activeSector === s.id ? ' active' : '') + '" data-sector="' + escapeHTML(s.id) + '">' + escapeHTML(s.name) + '<small>' + s.peaks.length + ' recorded features</small></button>';
    }).join('');
    var s = SECTORS.find(function (x) { return x.id === activeSector; }) || SECTORS[0];
    if (!s) return;
    $('#sectorDetail').innerHTML = '<div class="card-top"><span class="tag blue">Sector dossier</span><span class="smallcaps">' + escapeHTML(s.id.replace(/([a-z])([A-Z])/g, '$1 $2')) + '</span></div>' +
      '<h3>' + escapeHTML(s.name) + '</h3><p>' + escapeHTML(s.desc) + '</p>' +
      '<ul class="peak-list">' + s.peaks.map(function (p) {
        return '<li><span class="peak-name">' + escapeHTML(p.name) + '</span><span>' + escapeHTML(p.note) + '</span></li>';
      }).join('') + '</ul>' +
      '<div class="event-foot" style="margin-top:16px">' + bookmarkButton('sector:' + s.id, 'Save sector') +
      '<button type="button" class="bookmark-btn" data-route="sources">Read evidence notes</button></div>';
  }

  function findWarStudy(campaignId) {
    if (typeof WAR_STUDIES === 'undefined') return null;
    return WAR_STUDIES.find(function (study) { return study.id === campaignId || study.campaignId === campaignId; }) || null;
  }

  function findWarStudyForAtlasOperation(operationId) {
    var relatedIds = {
      'goa-vijay-1961': 'goa-1961',
      'meghdoot-1984': 'operation-meghdoot',
      'pawan-1987': 'operation-pawan',
      'pawan-peacekeeping': 'operation-pawan',
      'cactus-1988': 'operation-cactus'
    };
    return findWarStudy(relatedIds[operationId] || operationId);
  }

  function renderCampaigns() {
    var grid = $('#campaignGrid');
    if (!grid || typeof CAMPAIGNS === 'undefined') return;
    var query = ($('#campaignSearch') ? $('#campaignSearch').value : '').trim().toLowerCase();
    var items = CAMPAIGNS.filter(function (campaign) {
      var byType = activeCampaignFilter === 'all' || campaign.type === activeCampaignFilter;
      var study = findWarStudy(campaign.id);
      var searchable = [campaign.title, campaign.period, campaign.dates, campaign.theatre, campaign.tag, campaign.summary, campaign.keyPoint, campaign.type,
        study ? study.thesis : '', study ? study.context.join(' ') : '', study ? study.commanders.map(function (leader) { return leader.name + ' ' + leader.role; }).join(' ') : ''].join(' ').toLowerCase();
      return byType && (!query || searchable.indexOf(query) !== -1);
    });
    campaignPage = renderPagination('campaignPagination', 'campaigns', campaignPage, items.length, CAMPAIGN_PAGE_SIZE);
    var totalPages = Math.max(1, Math.ceil(items.length / CAMPAIGN_PAGE_SIZE));
    var coveredStudies = items.filter(function (campaign) { return !!findWarStudy(campaign.id); }).length;
    $('#campaignSummary').textContent = items.length + ' CAMPAIGNS · ' + coveredStudies + ' FULL IN-PAGE STUDIES · PAGE ' + campaignPage + ' / ' + totalPages;
    if (!items.length) {
      grid.innerHTML = '<div class="empty-state campaign-empty">No campaign matches this filter. Try a year, theatre, leader, or lesson.</div>';
      return;
    }
    var pageItems = items.slice((campaignPage - 1) * CAMPAIGN_PAGE_SIZE, campaignPage * CAMPAIGN_PAGE_SIZE);
    grid.innerHTML = pageItems.map(function (campaign) {
      var study = findWarStudy(campaign.id);
      var core = campaign.id === 'kargil-1999';
      var savedId = 'campaign:' + campaign.id;
      var studyMeta = study
        ? '<div class="campaign-study-stats"><span>' + (study.timeline || []).length + ' milestones</span><span>' + (study.commanders || []).length + ' leadership profiles</span><span>' + (study.sources || []).length + ' references</span></div>'
        : '<div class="campaign-study-stats"><span>Overview and source links</span></div>';
      var studyButton = study
        ? '<button class="campaign-read-btn" type="button" data-open-study="' + escapeHTML(study.id) + '">' + (studiedWarIds.has(study.id) ? '↻ Revisit study' : 'Read full study') + ' ↗</button>'
        : '<button class="campaign-read-btn" type="button" data-open-study="' + escapeHTML(campaign.id) + '">Read campaign record ↗</button>';
      return '<article class="campaign-card' + (core ? ' is-core' : '') + '" id="campaign-card-' + escapeHTML(campaign.id) + '">' +
        '<div class="card-top"><span class="tag ' + (campaign.type === 'war' ? '' : 'blue') + '">' + escapeHTML(campaign.type === 'war' ? 'War / conflict' : 'Military operation') + '</span><span class="smallcaps">' + escapeHTML(campaign.tag) + '</span></div>' +
        '<div class="campaign-year">' + escapeHTML(campaign.period) + '</div><h3>' + escapeHTML(campaign.title) + '</h3>' +
        '<div class="campaign-meta">' + escapeHTML(campaign.dates) + ' · ' + escapeHTML(campaign.theatre) + '</div>' +
        '<p>' + escapeHTML(campaign.summary) + '</p>' +
        '<div class="campaign-insight"><span>Why it matters</span>' + escapeHTML(campaign.keyPoint) + '</div>' +
        studyMeta +
        '<div class="campaign-links">' + studyButton + '<span class="campaign-source-hint">Read the explanation here; sources are listed inside.</span></div>' +
        bookmarkButton(savedId, 'Save campaign') + '</article>';
    }).join('');
  }
function closeWarStudy() {
    var backdrop = $('#warStudyBackdrop');
    var shell = $('#warStudyShell');
    var wasOpen = !!(shell && !shell.hidden);
    if (backdrop) backdrop.hidden = true;
    if (shell) shell.hidden = true;
    if (wasOpen) {
      var anotherModalOpen = ($('#atlasModalShell') && !$('#atlasModalShell').hidden) || ($('#atlasCompareShell') && !$('#atlasCompareShell').hidden);
      document.body.style.overflow = anotherModalOpen ? 'hidden' : '';
      if (warStudyReturnFocus && document.contains(warStudyReturnFocus)) warStudyReturnFocus.focus({ preventScroll: true });
      warStudyReturnFocus = null;
    }
  }

  var warStudyReturnFocus = null;

  function openWarStudy(studyId) {
    var study = findWarStudy(studyId);
    var body = $('#warStudyBody');
    var backdrop = $('#warStudyBackdrop');
    var shell = $('#warStudyShell');
    if (!study || !body || !backdrop || !shell) {
      showToast('This study is not yet in the in-page library.');
      return;
    }
    warStudyReturnFocus = document.activeElement;
    var context = (study.context || []).map(function (paragraph) { return '<p>' + escapeHTML(paragraph) + '</p>'; }).join('');
    var commanders = (study.commanders || []).map(function (leader) {
      return '<article class="war-study-card war-study-leader"><span class="war-study-tag">' + escapeHTML(leader.tag || 'Leadership') + '</span><h4>' + escapeHTML(leader.name) + '</h4><div class="war-study-role">' + escapeHTML(leader.role) + '</div><p>' + escapeHTML(leader.contribution) + '</p></article>';
    }).join('');
    var phases = (study.phases || []).map(function (phase, index) {
      return '<article class="war-study-card"><div class="war-study-date">PHASE ' + String(index + 1).padStart(2, '0') + ' · ' + escapeHTML(phase.dates) + '</div><h4>' + escapeHTML(phase.title) + '</h4><p>' + escapeHTML(phase.detail) + '</p></article>';
    }).join('');
    var timeline = (study.timeline || []).map(function (entry) {
      return '<article class="war-study-event"><div class="war-study-event-date">' + escapeHTML(entry.date) + '</div><div class="war-study-event-dot" aria-hidden="true"></div><div><span class="war-study-tag">' + escapeHTML(entry.status || 'Public milestone') + '</span><h4>' + escapeHTML(entry.title) + '</h4><p>' + escapeHTML(entry.detail) + '</p></div></article>';
    }).join('');
    var friction = (study.friction || []).map(function (item) {
      return '<article class="war-study-card war-study-friction"><span class="war-study-tag">' + escapeHTML(item.type || 'Review point') + '</span><h4>' + escapeHTML(item.label) + '</h4><p>' + escapeHTML(item.detail) + '</p></article>';
    }).join('');
    var lessons = (study.lessons || []).map(function (item, index) {
      return '<article class="war-study-card war-study-lesson"><div class="war-study-date">LESSON ' + String(index + 1).padStart(2, '0') + '</div><h4>' + escapeHTML(item.label) + '</h4><p>' + escapeHTML(item.detail) + '</p></article>';
    }).join('');
    var sources = (study.sources || []).map(function (source) {
      return '<article class="war-study-source"><span class="war-study-tag">' + escapeHTML(source.kind || 'Reference') + '</span><h4>' + escapeHTML(source.title) + '</h4><p><strong>' + escapeHTML(source.publisher || 'Publisher not stated') + '</strong><br>' + escapeHTML(source.supports || 'Reference note for this study.') + '</p><div class="war-study-source-local">Reference summary included in this study · ' + escapeHTML(source.kind || 'Historical reference') + '</div></article>';
    }).join('');
    var done = studiedWarIds.has(study.id);
    var studyHtml = '<header class="war-study-hero"><div><div class="kicker">Field study / ' + escapeHTML(study.period) + '</div><h2 id="warStudyTitle">' + escapeHTML(study.title) + '</h2><div class="study-period">' + escapeHTML(study.theatre) + '</div><p class="war-study-thesis">' + escapeHTML(study.thesis) + '</p></div>' +
      '<aside class="war-study-hero-aside"><div class="smallcaps">Study snapshot</div><div class="war-study-stats"><div class="war-study-stat"><strong>' + (study.timeline || []).length + '</strong><span>Dated milestones</span></div><div class="war-study-stat"><strong>' + (study.commanders || []).length + '</strong><span>Leader profiles</span></div><div class="war-study-stat"><strong>' + (study.sources || []).length + '</strong><span>Evidence links</span></div></div>' +
      '<p style="font-size:11px;line-height:1.7;color:var(--muted)">Article content is on this page. Sources are supporting evidence, not a substitute for the explanation.</p><button type="button" class="quiet-btn war-study-complete' + (done ? ' is-complete' : '') + '" data-study-complete="' + escapeHTML(study.id) + '" aria-pressed="' + (done ? 'true' : 'false') + '">' + (done ? '✓ Marked as studied' : 'Mark study as completed') + '</button></aside></header>' +
      '<nav class="war-study-toc" aria-label="War study contents">' +
      '<button type="button" data-study-jump="war-study-context">Context</button><button type="button" data-study-jump="war-study-phases">Campaign phases</button><button type="button" data-study-jump="war-study-commanders">Leadership</button><button type="button" data-study-jump="war-study-timeline">Timeline</button><button type="button" data-study-jump="war-study-planning">Planning</button><button type="button" data-study-jump="war-study-execution">Execution</button><button type="button" data-study-jump="war-study-friction">Mistakes & constraints</button><button type="button" data-study-jump="war-study-lessons">Lessons</button><button type="button" data-study-jump="war-study-sources">Sources</button></nav>' +
      '<section class="war-study-section" id="war-study-context"><div class="war-study-section-head"><div><div class="smallcaps">01 / Background and stakes</div><h3>What happened—and why it mattered</h3></div></div><div class="war-study-prose">' + context + '</div></section>' +
      '<section class="war-study-section" id="war-study-phases"><div class="war-study-section-head"><div><div class="smallcaps">02 / Campaign structure</div><h3>Understand the phases</h3></div></div><div class="war-study-grid">' + phases + '</div></section>' +
      '<section class="war-study-section" id="war-study-commanders"><div class="war-study-section-head"><div><div class="smallcaps">03 / Command and leadership</div><h3>Leaders and their actual roles</h3></div></div><div class="war-study-grid">' + commanders + '</div><p class="war-study-events-note">Leadership profiles distinguish political authority, senior service command, theatre command and front-line leadership. A name appearing in an article does not by itself prove that the person directed every event described.</p></section>' +
      '<section class="war-study-section" id="war-study-timeline"><div class="war-study-section-head"><div><div class="smallcaps">04 / Chronology</div><h3>Key events in date order</h3></div></div><div class="war-study-timeline">' + timeline + '</div><p class="war-study-events-note">This is a dated milestone chronology based on the public sources linked below. It is not a fabricated account for every calendar day. When daily orders, unit diaries or exact sequence are not publicly verifiable from the cited record, the page says so.</p></section>' +
      '<section class="war-study-section" id="war-study-planning"><div class="war-study-section-head"><div><div class="smallcaps">05 / Intent and preparation</div><h3>Planning: the problem decision-makers faced</h3></div></div><div class="war-study-prose"><p>' + escapeHTML(study.planning) + '</p></div></section>' +
      '<section class="war-study-section" id="war-study-execution"><div class="war-study-section-head"><div><div class="smallcaps">06 / What happened</div><h3>Implementation and execution</h3></div></div><div class="war-study-prose"><p>' + escapeHTML(study.execution) + '</p></div></section>' +
      '<section class="war-study-section" id="war-study-friction"><div class="war-study-section-head"><div><div class="smallcaps">07 / Critical review</div><h3>Mistakes, constraints and evidence gaps</h3></div></div><div class="war-study-grid">' + friction + '</div><p class="war-study-events-note">The review labels separate documented facts from analytical questions and evidence caveats. Where the sources do not establish that an individual made a specific mistake, the page will not invent one.</p></section>' +
      '<section class="war-study-section" id="war-study-lessons"><div class="war-study-section-head"><div><div class="smallcaps">08 / After-action study</div><h3>What future leaders can learn</h3></div></div><div class="war-study-grid">' + lessons + '</div></section>' +
      '<section class="war-study-section" id="war-study-sources"><div class="war-study-section-head"><div><div class="smallcaps">09 / Evidence trail</div><h3>Sources and further reading</h3></div></div><div class="war-study-source-grid">' + sources + '</div></section>' +
      '<div class="war-study-evidence-note"><strong>Research standard.</strong> This is an independent educational synthesis, not an official government history. Sources are summarised in our own words. Official releases, memorial pages, academic studies, memoirs and records may differ in scope or interpretation; check the original text for disputed dates, casualty counts and claims about individual decisions. Some operational records remain unavailable or classified.</div>';
    body.innerHTML = studyHtml;
    backdrop.hidden = false;
    shell.hidden = false;
    document.body.style.overflow = 'hidden';
    shell.scrollTop = 0;
    $('#warStudyClose').focus();
  }

  function toggleWarStudyCompleted(studyId) {
    var study = findWarStudy(studyId);
    if (!study) return;
    if (studiedWarIds.has(study.id)) studiedWarIds.delete(study.id);
    else studiedWarIds.add(study.id);
    safeStoreSet('iw-studied-wars', JSON.stringify(Array.from(studiedWarIds)));
    renderCampaigns();
    openWarStudy(study.id);
    showToast(studiedWarIds.has(study.id) ? 'Study marked as completed on this device' : 'Study progress cleared');
  }

    function atlasColor(op) {
    if (op.type === 'hadr' || op.type === 'evacuation') return '#8bc9e8';
    if (op.type === 'peacekeeping' || op.type === 'stabilisation') return '#e3be72';
    if (op.type === 'internal-security') return '#ee835b';
    return '#d8f36a';
  }
  function atlasTypeLabel(type) {
    return ({
      combat:'Combat / campaign',
      'internal-security':'Internal security',
      peacekeeping:'Peacekeeping',
      hadr:'Disaster relief',
      evacuation:'Evacuation',
      stabilisation:'Civic action',
      joint:'Joint / regional',
      mobilisation:'Mobilisation',
      research:'Research index'
    })[type] || type;
  }
  function atlasArtwork(op) {
    var color = atlasColor(op);
    return '<svg class="atlas-thumb-art" viewBox="0 0 640 300" role="img" aria-label="Illustrative topographic teaching graphic, not a historical photograph">' +
      '<defs><linearGradient id="fieldFade" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + color + '" stop-opacity=".15"/><stop offset="1" stop-color="#101916" stop-opacity=".1"/></linearGradient></defs>' +
      '<rect width="640" height="300" fill="url(#fieldFade)"/>' +
      '<g fill="none" stroke="' + color + '" stroke-opacity=".27" stroke-width="1.2">' +
      '<path d="M-20 204 C65 112 112 251 198 158 S319 191 392 103 S522 170 675 57"/>' +
      '<path d="M-20 224 C65 132 112 271 198 178 S319 211 392 123 S522 190 675 77"/>' +
      '<path d="M-20 244 C65 152 112 291 198 198 S319 231 392 143 S522 210 675 97"/>' +
      '<path d="M-20 264 C65 172 112 311 198 218 S319 251 392 163 S522 230 675 117"/>' +
      '<path d="M40 32 L594 279 M-10 90 L500 -15 M155 -12 L365 322" stroke-dasharray="5 9"/>' +
      '</g><g fill="none" stroke="' + color + '" stroke-width="2"><circle cx="405" cy="119" r="24"/><circle cx="405" cy="119" r="9" fill="' + color + '" fill-opacity=".18"/><path d="M405 102 L405 135 M388 119 L422 119"/></g>' +
      '<g fill="#e9eee7" font-family="DM Mono,monospace" font-size="12" letter-spacing="2"><text x="24" y="34">FIELD DIAGRAM / CONCEPTUAL</text><text x="24" y="272">NOT A HISTORICAL PHOTOGRAPH OR OPERATIONAL MAP</text></g></svg>';
  }

  function sortAtlasItems(items) {
    var mode = ($('#atlasSort') && $('#atlasSort').value) || atlasSortMode;
    var ranked = items.map(function (item, index) {
      var match = String(item.period || '').match(/\b(?:18|19|20|21)\d{2}\b/);
      return { item: item, index: index, year: match ? Number(match[0]) : null, sources: (item.sources || []).length };
    });
    if (mode === 'title') {
      ranked.sort(function (a, b) { return String(a.item.title || '').localeCompare(String(b.item.title || '')) || a.index - b.index; });
    } else if (mode === 'sources') {
      ranked.sort(function (a, b) { return b.sources - a.sources || String(a.item.title || '').localeCompare(String(b.item.title || '')) || a.index - b.index; });
    } else if (mode === 'newest' || mode === 'oldest') {
      ranked.sort(function (a, b) {
        if (a.year === null && b.year !== null) return 1;
        if (b.year === null && a.year !== null) return -1;
        if (a.year !== null && b.year !== null && a.year !== b.year) return mode === 'newest' ? b.year - a.year : a.year - b.year;
        return a.index - b.index;
      });
    }
    return ranked.map(function (entry) { return entry.item; });
  }

  function getAtlasItems() {
    if (typeof OPERATIONS_ATLAS === 'undefined') return [];
    var query = ($('#atlasSearch') ? $('#atlasSearch').value : '').trim().toLowerCase();
    var filtered = OPERATIONS_ATLAS.filter(function (op) {
      var typeMatch = activeAtlasFilter === 'all' || op.type === activeAtlasFilter;
      var searchable = [op.title, op.period, op.type, op.service, op.place, op.scope, op.summary, op.plan, op.execution, op.friction, op.lessons].join(' ').toLowerCase();
      return typeMatch && (!query || searchable.indexOf(query) !== -1);
    });
    return sortAtlasItems(filtered);
  }

  function renderAtlas() {
    var grid = $('#atlasGrid');
    if (!grid || typeof OPERATIONS_ATLAS === 'undefined') return;
    grid.classList.toggle('atlas-list-view', atlasViewMode === 'list');
    syncAtlasViewControls();
    renderAtlasCompareTray();
    var items = getAtlasItems();
    atlasPage = renderPagination('atlasPagination', 'atlas', atlasPage, items.length, ATLAS_PAGE_SIZE);
    var totalPages = Math.max(1, Math.ceil(items.length / ATLAS_PAGE_SIZE));
    $('#atlasSummary').textContent = items.length + ' DOSSIERS MATCH · PAGE ' + atlasPage + ' / ' + totalPages + ' · ' + OPERATIONS_ATLAS.length + ' IN THE OPEN-SOURCE INDEX';
    $('#atlasCount').textContent = OPERATIONS_ATLAS.filter(function (op) { return op.type !== 'research'; }).length;
    $('#atlasImageCount').textContent = OPERATIONS_ATLAS.filter(function (op) { return !!op.image; }).length;
    if (!items.length) {
      grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1">No dossier matches your search. Try a shorter phrase, another location, or reset the category filter.</div>';
      renderAtlasMap();
      return;
    }
    var pageItems = items.slice((atlasPage - 1) * ATLAS_PAGE_SIZE, atlasPage * ATLAS_PAGE_SIZE);
    grid.innerHTML = pageItems.map(function (op) {
      var imageBlock = op.image
        ? '<img loading="lazy" src="' + escapeHTML(op.image.src) + '" alt="' + escapeHTML(op.image.alt) + '" onerror="this.remove();">'
        : atlasArtwork(op);
      var dateLabel = op.period + ' · ' + op.place;
      var isCompared = comparisonIds.indexOf(op.id) !== -1;
      var compareDisabled = !isCompared && comparisonIds.length >= ATLAS_COMPARE_LIMIT;
      return '<article class="atlas-card" id="atlas-card-' + escapeHTML(op.id) + '">' +
        '<div class="atlas-thumb">' + imageBlock + '<span class="thumb-label">' + escapeHTML(op.type === 'research' ? 'EVIDENCE INDEX' : atlasTypeLabel(op.type)) + '</span></div>' +
        '<div class="atlas-card-body"><div class="atlas-card-tags"><span class="tag ' + (op.type === 'hadr' || op.type === 'evacuation' ? 'blue' : op.type === 'internal-security' ? 'orange' : op.type === 'peacekeeping' ? 'gold' : '') + '">' + escapeHTML(atlasTypeLabel(op.type)) + '</span>' +
        (op.image ? '<span class="atlas-chip">Photo / archive</span>' : '<span class="atlas-chip">Pictorial schematic</span>') + '</div>' +
        '<h3>' + escapeHTML(op.title) + '</h3><div class="atlas-card-meta">' + escapeHTML(dateLabel) + '</div>' +
        '<p>' + escapeHTML(op.summary) + '</p>' +
        '<div class="atlas-card-tags"><span class="atlas-chip">' + escapeHTML(op.service) + '</span><span class="atlas-chip">' + (op.sources || []).length + ' linked sources</span></div>' +
        '<div class="atlas-card-actions"><button type="button" class="' + (isCompared ? 'compare-selected' : '') + '" data-compare-operation="' + escapeHTML(op.id) + '" aria-pressed="' + (isCompared ? 'true' : 'false') + '"' + (compareDisabled ? ' disabled' : '') + '>' + (isCompared ? '✓ Selected' : '＋ Compare') + '</button>' +
        '<button class="primary" type="button" data-open-operation="' + escapeHTML(op.id) + '">Open full dossier ↗</button>' +
        bookmarkButton('atlas:' + op.id, 'Save') + '</div></div></article>';
    }).join('');
    renderAtlasMap();
  }
function syncAtlasViewControls() {
    var cards = $('#atlasViewCards');
    var list = $('#atlasViewList');
    if (cards) { cards.classList.toggle('active', atlasViewMode === 'cards'); cards.setAttribute('aria-pressed', atlasViewMode === 'cards' ? 'true' : 'false'); }
    if (list) { list.classList.toggle('active', atlasViewMode === 'list'); list.setAttribute('aria-pressed', atlasViewMode === 'list' ? 'true' : 'false'); }
  }

  function getComparedOperations() {
    if (typeof OPERATIONS_ATLAS === 'undefined') return [];
    return comparisonIds.map(function (id) {
      return OPERATIONS_ATLAS.find(function (op) { return op.id === id; });
    }).filter(Boolean);
  }

  function renderAtlasCompareTray() {
    var tray = $('#atlasCompareTray');
    if (!tray) return;
    var selected = getComparedOperations();
    tray.hidden = selected.length === 0;
    var count = $('#atlasCompareCount');
    var selectedWrap = $('#atlasCompareSelected');
    var runButton = $('#atlasCompareRun');
    var clearButton = $('#atlasCompareClear');
    if (count) count.textContent = selected.length + ' / ' + ATLAS_COMPARE_LIMIT + ' selected';
    if (selectedWrap) {
      selectedWrap.innerHTML = selected.map(function (op) {
        return '<span class="atlas-compare-chip"><span title="' + escapeHTML(op.title) + '">' + escapeHTML(op.title) + '</span><button type="button" data-remove-compare="' + escapeHTML(op.id) + '" aria-label="Remove ' + escapeHTML(op.title) + ' from comparison" title="Remove">×</button></span>';
      }).join('');
    }
    if (runButton) {
      runButton.disabled = selected.length < 2;
      runButton.textContent = selected.length < 2 ? 'Select 2 to compare' : 'Compare ' + selected.length + ' dossiers';
    }
    if (clearButton) clearButton.disabled = selected.length === 0;
  }

  function toggleAtlasCompare(operationId) {
    var position = comparisonIds.indexOf(operationId);
    if (position >= 0) {
      comparisonIds.splice(position, 1);
    } else {
      if (comparisonIds.length >= ATLAS_COMPARE_LIMIT) {
        showToast('Compare up to ' + ATLAS_COMPARE_LIMIT + ' dossiers at once. Remove one to add another.');
        return;
      }
      var exists = typeof OPERATIONS_ATLAS !== 'undefined' && OPERATIONS_ATLAS.some(function (op) { return op.id === operationId; });
      if (!exists) return;
      comparisonIds.push(operationId);
    }
    renderAtlas();
    showToast(position >= 0 ? 'Dossier removed from comparison' : 'Dossier added to comparison');
  }

  function setAtlasView(mode) {
    if (mode !== 'cards' && mode !== 'list') return;
    atlasViewMode = mode;
    renderAtlas();
  }

  function clearAtlasComparison() {
    comparisonIds = [];
    renderAtlas();
    showToast('Comparison selection cleared');
  }

  function renderAtlasComparison() {
    var body = $('#atlasCompareBody');
    var selected = getComparedOperations();
    if (!body || selected.length < 2) return false;
    var rows = [
      { label: 'Type', value: function (op) { return escapeHTML(atlasTypeLabel(op.type)); } },
      { label: 'Period', value: function (op) { return escapeHTML(op.period || 'Not stated'); } },
      { label: 'Theatre', value: function (op) { return escapeHTML(op.place || 'Not stated'); } },
      { label: 'Participation', value: function (op) { return escapeHTML(op.service || 'Not stated'); } },
      { label: 'Scope', value: function (op) { return escapeHTML(op.scope || 'Not stated'); } },
      { label: 'Overview', value: function (op) { return escapeHTML(op.summary || 'No overview recorded.'); } },
      { label: 'Planning', value: function (op) { return escapeHTML(op.plan || 'No planning summary recorded.'); } },
      { label: 'Execution record', value: function (op) { return escapeHTML(op.execution || 'No execution summary recorded.'); } },
      { label: 'Friction & evidence gaps', value: function (op) { return escapeHTML(op.friction || 'No specific friction summary recorded.'); } },
      { label: 'Lessons for study', value: function (op) { return escapeHTML(op.lessons || 'No lesson summary recorded.'); } },
      { label: 'Dated milestones', value: function (op) {
        var entries = (op.chronology || []).slice(0, 4);
        if (!entries.length) return '<span class="atlas-compare-muted">No dated milestones in this dossier.</span>';
        return '<ul>' + entries.map(function (entry) { return '<li><strong>' + escapeHTML(entry.date || 'Date not stated') + '</strong> — ' + escapeHTML(entry.title || entry.detail || 'Recorded milestone') + '</li>'; }).join('') + '</ul><p class="atlas-compare-muted">' + (op.chronology || []).length + ' dated entries in the full dossier.</p>';
      } },
      { label: 'Source notes', value: function (op) {
        var sources = op.sources || [];
        if (!sources.length) return '<span class="atlas-compare-muted">No reference notes recorded in this dossier.</span>';
        return '<ul>' + sources.map(function (source) {
          return '<li><strong>' + escapeHTML(source.title || 'Historical reference') + '</strong>' + (source.kind ? '<br><span class="atlas-compare-muted">' + escapeHTML(source.kind) + '</span>' : '') + '</li>';
        }).join('') + '</ul>';
      } },
      { label: 'Evidence count', value: function (op) { return (op.sources || []).length + ' linked source' + ((op.sources || []).length === 1 ? '' : 's') + ' · ' + (op.chronology || []).length + ' dated entries'; } }
    ];
    var head = '<thead><tr><th scope="col">Comparison</th>' + selected.map(function (op) {
      return '<th scope="col"><span class="tag">' + escapeHTML(atlasTypeLabel(op.type)) + '</span><h3>' + escapeHTML(op.title) + '</h3><p class="atlas-compare-period">' + escapeHTML(op.period || 'Period not stated') + ' · ' + escapeHTML(op.place || 'Theatre not stated') + '</p></th>';
    }).join('') + '</tr></thead>';
    var bodyRows = rows.map(function (row) {
      return '<tr><th scope="row">' + escapeHTML(row.label) + '</th>' + selected.map(function (op) {
        return '<td>' + row.value(op) + '</td>';
      }).join('') + '</tr>';
    }).join('');
    body.innerHTML = '<p class="atlas-compare-intro">A side-by-side reading aid for the archive summaries. Interpretive notes are editorial; use the linked source documents for claims and exact wording.</p>' +
      '<div class="atlas-compare-table-wrap"><table class="atlas-compare-table">' + head + '<tbody>' + bodyRows + '</tbody></table></div>' +
      '<p class="atlas-compare-muted" style="margin:12px 0 0">Chronology rows show up to four milestones per operation; reference notes are included on this page and do not open another website.</p>';
    return true;
  }

  function openAtlasComparison() {
    if (getComparedOperations().length < 2) {
      showToast('Select at least two dossiers to compare');
      return;
    }
    if (!renderAtlasComparison()) return;
    var backdrop = $('#atlasCompareBackdrop');
    var shell = $('#atlasCompareShell');
    if (!backdrop || !shell) return;
    backdrop.hidden = false;
    shell.hidden = false;
    document.body.style.overflow = 'hidden';
    shell.scrollTop = 0;
    $('#atlasCompareClose').focus();
  }

  function closeAtlasComparison() {
    var backdrop = $('#atlasCompareBackdrop');
    var shell = $('#atlasCompareShell');
    var wasOpen = !!(shell && !shell.hidden);
    if (backdrop) backdrop.hidden = true;
    if (shell) shell.hidden = true;
    if (wasOpen) {
      document.body.style.overflow = $('#atlasModalShell') && !$('#atlasModalShell').hidden ? 'hidden' : '';
      var trigger = $('#atlasCompareRun');
      if (trigger && !trigger.disabled) trigger.focus({ preventScroll: true });
    }
  }

    function initOperationsMap() {
    var el = $('#operationsMap');
    if (!el) return;
    if (typeof L === 'undefined') {
      el.innerHTML = '<div class="empty-state" style="margin:18px">Interactive map could not load. The operation cards and their theatre names are still available below.</div>';
      return;
    }
    if (atlasMap) return;
    atlasMap = L.map('operationsMap', { scrollWheelZoom:false, preferCanvas:true }).setView([24, 58], 3);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom:18,
      attribution:'© OpenStreetMap contributors'
    }).addTo(atlasMap);
    atlasMarkerLayer = L.layerGroup().addTo(atlasMap);
    renderAtlasMap();
    setTimeout(function () { if (atlasMap) atlasMap.invalidateSize(); }, 150);
  }

  function renderAtlasMap() {
    if (!atlasMap || !atlasMarkerLayer || typeof OPERATIONS_ATLAS === 'undefined') return;
    atlasMarkerLayer.clearLayers();
    var items = getAtlasItems().filter(function (op) { return op.type !== 'research' && Number.isFinite(op.lat) && Number.isFinite(op.lng); });
    items.forEach(function (op) {
      var color = atlasColor(op);
      var marker = L.circleMarker([op.lat, op.lng], {
        radius:7, color:'#0b100f', weight:2, fillColor:color, fillOpacity:.96
      });
      marker.bindPopup('<strong>' + escapeHTML(op.title) + '</strong><small>' + escapeHTML(op.period + ' · ' + op.place) + '</small><br><button type="button" data-open-operation="' + escapeHTML(op.id) + '">Open dossier ↗</button>');
      marker.addTo(atlasMarkerLayer);
    });
  }

  function closeOperationDetail() {
    var backdrop = $('#atlasModalBackdrop');
    var shell = $('#atlasModalShell');
    if (backdrop) backdrop.hidden = true;
    if (shell) shell.hidden = true;
    document.body.style.overflow = '';
  }

  function openOperationDetail(operationId) {
    if (typeof OPERATIONS_ATLAS === 'undefined') return;
    var op = OPERATIONS_ATLAS.find(function (item) { return item.id === operationId; });
    if (!op) return;
    var relatedStudy = findWarStudyForAtlasOperation(op.id);
    var art = op.image
      ? '<figure class="atlas-detail-image"><img src="' + escapeHTML(op.image.src) + '" alt="' + escapeHTML(op.image.alt) + '"><figcaption>' + escapeHTML(op.image.caption) +
        '<br><strong>' + escapeHTML(op.image.credit) + '</strong><br><span>' + escapeHTML(op.image.license) + '</span><br><span class="atlas-image-provenance">Credit and licence notes are shown here; no external navigation required.</span></figcaption></figure>'
      : '<div class="atlas-detail-image"><svg viewBox="0 0 700 350" style="display:block;width:100%;height:280px" role="img" aria-label="Illustrative planning and terrain schematic, not a historical photograph">' +
        '<rect width="700" height="350" fill="#101916"/><g fill="none" stroke="' + atlasColor(op) + '" stroke-opacity=".32">' +
        '<path d="M-20 245 C65 120 135 285 225 170 S385 240 455 95 S600 205 730 60"/><path d="M-20 270 C65 145 135 310 225 195 S385 265 455 120 S600 230 730 85"/><path d="M-20 295 C65 170 135 335 225 220 S385 290 455 145 S600 255 730 110"/><path d="M60 40 L625 310 M130 5 L530 346" stroke-dasharray="6 8"/></g>' +
        '<circle cx="465" cy="140" r="32" fill="none" stroke="' + atlasColor(op) + '" stroke-width="2"/><circle cx="465" cy="140" r="10" fill="' + atlasColor(op) + '" fill-opacity=".45"/><g fill="#e9eee7" font-family="DM Mono,monospace" font-size="14" letter-spacing="2"><text x="25" y="35">VISUAL BRIEF / CONCEPTUAL</text><text x="25" y="320" font-size="11">NO TACTICAL POSITIONS · NOT A HISTORICAL IMAGE</text></g></svg><div style="padding:10px 12px;font-size:10px;color:var(--muted)">Pictorial teaching schematic created for this page; not a source photograph or map of operational positions.</div></div>';

    var chronology = (op.chronology || []).map(function (e) {
      return '<article class="atlas-event"><div class="atlas-event-date">' + escapeHTML(e.date) + '</div><div><h4>' + escapeHTML(e.title) + '</h4><p>' + escapeHTML(e.detail) + '</p></div></article>';
    }).join('');
    var sources = (op.sources || []).map(function (s) {
      return '<article class="atlas-source"><span>' + escapeHTML(s.kind || 'Reference') + '</span><strong>' + escapeHTML(s.title) + '</strong><p>In-page citation · supports the dossier chronology and analysis.</p></article>';
    }).join('');
    var steps = [
      {n:'01 / INTENT',title:'Plan',body:'What problem did planners seek to solve?'},
      {n:'02 / RECORD',title:'Execution',body:'What do dated public sources actually confirm?'},
      {n:'03 / FRICTION',title:'Constraints',body:'What was uncertain, unavailable or contested?'},
      {n:'04 / REVIEW',title:'Lessons',body:'What can responsibly be learned from the evidence?'}
    ];
    var body = '<div class="atlas-detail-head"><div><div class="atlas-card-tags"><span class="tag">' + escapeHTML(atlasTypeLabel(op.type)) + '</span><span class="atlas-chip">' + escapeHTML(op.service) + '</span></div>' +
      '<h2 id="atlasModalTitle">' + escapeHTML(op.title) + '</h2><div class="atlas-detail-sub">' + escapeHTML(op.period) + '<br>' + escapeHTML(op.place) + '<br>' + escapeHTML(op.scope) + '</div>' +
      '<p class="atlas-detail-summary">' + escapeHTML(op.summary) + '</p><div class="event-foot">' + bookmarkButton('atlas:' + op.id,'Save dossier') +
      (relatedStudy ? '<button type="button" class="primary-btn" data-open-study="' + escapeHTML(relatedStudy.id) + '" data-related-study="' + escapeHTML(relatedStudy.id) + '">Read expanded study ↗</button>' : '') +
      '<button type="button" class="bookmark-btn" data-route="sources">Browse in-page evidence notes</button></div></div>' + art + '</div>' +
      '<div class="atlas-anatomy"><div class="atlas-anatomy-head"><div><div class="smallcaps">Pictorial teaching / after-action lens</div><h3>From decision to lesson</h3></div><span class="pill">Source-led analysis</span></div>' +
      '<div class="atlas-steps">' + steps.map(function (step) { return '<div class="atlas-step"><div class="n">' + step.n + '</div><strong>' + step.title + '</strong><span>' + step.body + '</span></div>'; }).join('') + '</div></div>' +
      '<div class="atlas-detail-grid"><article class="atlas-analysis-card plan"><h3>01 · Planning</h3><p>' + escapeHTML(op.plan) + '</p></article>' +
      '<article class="atlas-analysis-card execution"><h3>02 · Implementation / what is documented</h3><p>' + escapeHTML(op.execution) + '</p></article>' +
      '<article class="atlas-analysis-card friction"><h3>03 · Mistakes, friction &amp; evidence gaps</h3><p>' + escapeHTML(op.friction) + '</p></article>' +
      '<article class="atlas-analysis-card lesson"><h3>04 · Lessons for future study</h3><p>' + escapeHTML(op.lessons) + '</p></article></div>' +
      '<section class="atlas-detail-section"><div class="atlas-detail-section-head"><div><div class="smallcaps">Chronology / documented milestones</div><h3>Day-by-day where the record supports it</h3></div><span class="head-count">' + (op.chronology || []).length + ' dated entries</span></div>' +
      '<div class="atlas-chronology">' + chronology + '</div><p class="atlas-disclaimer">Scope note: this is a source-backed milestone timeline, not a fabricated log for every calendar day. Short public releases often omit daily unit movements, internal planning papers and disputed details. Use the linked primary sources for exact wording and consult fuller archives before making a firm claim about an operational mistake.</p></section>' +
      '<section class="atlas-detail-section"><div class="atlas-detail-section-head"><div><div class="smallcaps">Source trail / provenance</div><h3>Read the evidence</h3></div><span class="tag blue">' + (op.sources || []).length + ' references</span></div>' +
      '<div class="atlas-source-grid">' + sources + '</div></section>' +
      '<div class="atlas-research-prompts"><h4>Questions for an after-action review</h4><div class="atlas-prompts-grid">' +
      '<div><strong>What was known at the time?</strong><br>Separate information available to decision-makers from facts learned later.</div>' +
      '<div><strong>What was the real constraint?</strong><br>Test terrain, weather, intelligence, communications, logistics, mandate and civilian risk.</div>' +
      '<div><strong>Which lesson is evidenced?</strong><br>Distinguish a documented failure from a counterfactual or hindsight opinion.</div></div></div>';
    $('#atlasModalBody').innerHTML = body;
    $('#atlasModalBackdrop').hidden = false;
    $('#atlasModalShell').hidden = false;
    document.body.style.overflow = 'hidden';
    $('#atlasModalShell').scrollTop = 0;
    $('#atlasModalClose').focus();
  }

  function renderHighways() {
    var list = $('#highwaysList');
    if (!list || typeof HIGHWAYS === 'undefined') return;
    list.innerHTML = HIGHWAYS.map(function (h) {
      return '<div class="highway-item"><h4>' + escapeHTML(h.name) + '</h4><span>' + escapeHTML(h.length) + '</span><p>' + escapeHTML(h.desc) + '</p></div>';
    }).join('');
  }

  function operationTag(name) {
    if (name.indexOf('Safed') !== -1) return '<span class="tag blue">Air Force</span>';
    if (name.indexOf('Talwar') !== -1) return '<span class="tag gold">Navy</span>';
    if (name.indexOf('Badr') !== -1) return '<span class="tag orange">Pakistan Army</span>';
    return '<span class="tag">Indian Army</span>';
  }
  function renderOperations() {
    if (typeof OPERATIONS === 'undefined') return;
    $('#opsGrid').innerHTML = OPERATIONS.map(function (op, i) {
      return '<article class="operation-card" data-index="0' + (i + 1) + '"><div class="card-top">' + operationTag(op.name) + '<span class="smallcaps">OP / 0' + (i + 1) + '</span></div><h3>' +
        escapeHTML(op.name) + '</h3><div class="op-meta">' + escapeHTML(op.who) + '</div><p>' + escapeHTML(op.desc) + '</p>' +
        '<div class="event-foot" style="margin-top:15px">' + bookmarkButton('operation:' + i, 'Save operation') +
        '<button type="button" class="bookmark-btn" data-route="sources">In-page evidence notes</button></div></article>';
    }).join('');
  }

  function renderLeaders() {
    var source = activeSide === 'india' ? LEADERS_INDIA : LEADERS_PAK;
    if (typeof source === 'undefined') return;
    $('#leaderCount').textContent = source.length + ' PROFILES';
    $('#leadersGrid').innerHTML = source.map(function (leader, i) {
      var id = 'leader:' + activeSide + ':' + i;
      return '<article class="leader-card"><div class="card-top"><span class="tag ' + (activeSide === 'india' ? '' : 'orange') + '">' + (activeSide === 'india' ? 'India' : 'Pakistan') + '</span>' + bookmarkButton(id, 'Save profile') + '</div><h3>' +
        escapeHTML(leader.name) + '</h3><div class="leader-role">' + escapeHTML(leader.role) + '</div><p>' + escapeHTML(leader.desc) + '</p></article>';
    }).join('');
  }

  function renderHeroes() {
    if (typeof HEROES === 'undefined') return;
    $('#heroesGrid').innerHTML = HEROES.map(function (hero, i) {
      var isPak = /Pakistan|Nishan-e-Haider/i.test(hero.name);
      return '<article class="hero-card"><div class="card-top"><span class="tag ' + (isPak ? 'orange' : 'gold') + '">' + (isPak ? 'Pakistan gallantry' : 'Indian gallantry') + '</span>' + bookmarkButton('hero:' + i, 'Save profile') + '</div>' +
        '<h3>' + escapeHTML(hero.name) + '</h3><div class="unit">' + escapeHTML(hero.unit) + '</div><p style="font-size:12px;color:var(--muted)">' + escapeHTML(hero.theatre) + '</p>' +
        '<details><summary>Background</summary><p>' + escapeHTML(hero.bio) + '</p></details>' +
        '<details><summary>Action in the campaign</summary><p>' + escapeHTML(hero.action) + '</p></details>' +
        '<details><summary>Award citation &amp; record</summary><p>' + escapeHTML(hero.citation) + '</p></details>' +
        '<details><summary>Legacy</summary><p>' + escapeHTML(hero.legacy) + '</p></details></article>';
    }).join('');
  }

  function renderReforms() {
    if (typeof REFORMS === 'undefined') return;
    $('#reformsList').innerHTML = REFORMS.map(function (r, i) {
      return '<div class="reform-row"><div class="reform-time">' + escapeHTML(r.period) + '</div><div><h4>' + escapeHTML(r.title) + '</h4><p>' + escapeHTML(r.desc) + '</p><div class="event-foot">' + bookmarkButton('reform:' + i, 'Save finding') + '</div></div></div>';
    }).join('');
    if (typeof VULNERABILITY_FRAMEWORK !== 'undefined') {
      $('#vulnList').innerHTML = VULNERABILITY_FRAMEWORK.map(function (v) { return '<div class="vuln"><b>' + escapeHTML(v.pillar) + '</b><p>' + escapeHTML(v.desc) + '</p></div>'; }).join('');
    }
    if (typeof STRATEGIC_COMPARISON !== 'undefined') {
      $('#analysisList').innerHTML = STRATEGIC_COMPARISON.map(function (v, i) {
        return '<div class="analysis-row"><div class="analysis-year">' + escapeHTML(v.year) + '</div><div><h4>' + escapeHTML(v.label) + '</h4><p>' + escapeHTML(v.desc) + '</p><div class="event-foot">' + bookmarkButton('analysis:' + i, 'Save comparison') + '</div></div></div>';
      }).join('');
    }
  }

  function renderSources() {
    var el = $('#sourceGrid');
    if (!el) return;
    el.innerHTML = SOURCE_LIBRARY.map(function (s) {
      return '<article class="source-card" id="source-card-' + escapeHTML(s.id) + '"><span class="tag ' + (/Primary|Parliamentary|memorial/i.test(s.kind) ? 'blue' : '') + '">' + escapeHTML(s.kind) + '</span><h3>' + escapeHTML(s.title) + '</h3><p>' + escapeHTML(s.summary) + '</p><div class="source-bottom"><span class="source-local-note">In-page reference</span><small>' + escapeHTML(s.year) + '</small></div><div class="event-foot" style="margin-top:12px">' + bookmarkButton('source:' + s.id, 'Save source') + '<span class="smallcaps">' + escapeHTML(s.org) + '</span></div></article>';
    }).join('');
  }

  function renderQuizHome() {
    if (typeof QUIZ_QUESTIONS === 'undefined') return;
    var questions = QUIZ_QUESTIONS.filter(function (q) { return activeQuizTopic === 'all' || q.topic === activeQuizTopic; });
    $('#academyQuestionTotal').textContent = questions.length;
    var best = Number(safeStoreGet('iw-quiz-best:' + activeQuizTopic, '0')) || 0;
    $('#academyBestScore').textContent = best ? best + '/' + questions.length : '—';
    $('#quizTopicLabel').textContent = activeQuizTopic === 'all' ? 'Mixed campaign test' : activeQuizTopic;
  }

  function startQuiz() {
    if (typeof QUIZ_QUESTIONS === 'undefined') return;
    quizQuestions = QUIZ_QUESTIONS.filter(function (q) { return activeQuizTopic === 'all' || q.topic === activeQuizTopic; });
    if (!quizQuestions.length) { showToast('No questions available for this topic yet'); return; }
    for (var i = quizQuestions.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = quizQuestions[i]; quizQuestions[i] = quizQuestions[j]; quizQuestions[j] = tmp;
    }
    quizPosition = 0; quizScore = 0; quizAnswered = false; quizResponses = [];
    $('#quizShell').hidden = false;
    $('#quizQuestionStage').hidden = false;
    $('#quizResultStage').hidden = true;
    $('#quizScoreText').textContent = 'Score: 0';
    $('#quizTopicLabel').textContent = activeQuizTopic === 'all' ? 'Mixed campaign test' : activeQuizTopic;
    renderQuizQuestion();
    $('#quizShell').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function renderQuizQuestion() {
    var q = quizQuestions[quizPosition];
    if (!q) { finishQuiz(); return; }
    quizAnswered = false;
    $('#quizQuestionStage').hidden = false;
    $('#quizResultStage').hidden = true;
    $('#quizQuestionNumber').textContent = String(quizPosition + 1).padStart(2, '0');
    $('#quizProgressText').textContent = 'QUESTION ' + (quizPosition + 1) + ' / ' + quizQuestions.length;
    $('#quizProgressBar').style.width = (((quizPosition) / quizQuestions.length) * 100) + '%';
    $('#quizTopicMeta').textContent = (q.topic || 'CAMPAIGN').toUpperCase() + ' / FIELD TEST';
    $('#quizQuestion').textContent = q.question;
    $('#quizOptions').innerHTML = q.options.map(function (option, i) {
      return '<button type="button" class="quiz-option" data-quiz-answer="' + i + '"><span class="letter">' + String.fromCharCode(65 + i) + '</span><span>' + escapeHTML(option) + '</span></button>';
    }).join('');
    $('#quizFeedback').hidden = true;
    $('#quizFeedback').className = 'quiz-feedback';
    $('#quizFeedback').innerHTML = '';
    $('#quizNext').disabled = true;
    $('#quizNext').textContent = quizPosition === quizQuestions.length - 1 ? 'See results →' : 'Next question →';
    $('#quizScoreText').textContent = 'Score: ' + quizScore;
  }

  function answerQuiz(answerIndex) {
    if (quizAnswered) return;
    var q = quizQuestions[quizPosition];
    if (!q) return;
    quizAnswered = true;
    var correct = Number(answerIndex) === q.answer;
    if (correct) quizScore++;
    quizResponses.push({ question: q, chosen: Number(answerIndex), correct: correct });
    $$('#quizOptions [data-quiz-answer]').forEach(function (button) {
      var index = Number(button.dataset.quizAnswer);
      button.disabled = true;
      if (index === q.answer) button.classList.add('correct');
      if (index === Number(answerIndex) && !correct) button.classList.add('wrong');
    });
    var feedback = $('#quizFeedback');
    feedback.hidden = false;
    feedback.className = 'quiz-feedback ' + (correct ? 'correct' : 'wrong');
    feedback.innerHTML = '<strong>' + (correct ? '✓ Correct answer' : 'Not quite — review this detail') + '</strong>' +
      '<p>' + escapeHTML(q.explain) + '</p><div class="quiz-source-note">Reference used: ' + escapeHTML(q.sourceLabel) + '. The explanation is included here; no external page is required.</div>';
    $('#quizScoreText').textContent = 'Score: ' + quizScore;
    $('#quizNext').disabled = false;
  }

  function finishQuiz() {
    $('#quizQuestionStage').hidden = true;
    $('#quizResultStage').hidden = false;
    $('#quizProgressText').textContent = 'TEST COMPLETE';
    $('#quizProgressBar').style.width = '100%';
    var total = quizQuestions.length;
    var percent = total ? Math.round(quizScore / total * 100) : 0;
    var key = 'iw-quiz-best:' + activeQuizTopic;
    var best = Number(safeStoreGet(key, '0')) || 0;
    if (quizScore > best) { safeStoreSet(key, String(quizScore)); best = quizScore; }
    $('#quizResultNumber').textContent = quizScore + ' / ' + total;
    $('#quizResultTitle').textContent = percent >= 85 ? 'Excellent field awareness.' : percent >= 60 ? 'Solid start. Sharpen the details.' : 'Good first pass. Review the sources.';
    $('#quizResultText').textContent = percent + '% correct · Best for this topic on this device: ' + best + '/' + total + '. Review missed questions below, then retake the test when ready.';
    $('#quizReview').innerHTML = quizResponses.filter(function (response) { return !response.correct; }).map(function (response) {
      var q = response.question;
      return '<div class="quiz-review-item"><strong>' + escapeHTML(q.question) + '</strong><span class="miss">Your answer: ' + escapeHTML(q.options[response.chosen]) + '</span><br><span class="hit">Correct: ' + escapeHTML(q.options[q.answer]) + '</span><br>' + escapeHTML(q.explain) + '<div class="quiz-source-note">Reference used: ' + escapeHTML(q.sourceLabel) + '</div></div>';
    }).join('') || '<div class="empty-state" style="margin-top:15px">Perfect run — no missed answers. Review the evidence notes and challenge yourself with another topic.</div>';
    renderQuizHome();
  }

  function findEntry(id) {
    var indexed = globalIndex.find(function (entry) { return entry.id === id; });
    if (indexed) return indexed;
    if (id.indexOf('sector:') === 0 && typeof SECTORS !== 'undefined') {
      var sec = SECTORS.find(function (s) { return 'sector:' + s.id === id; });
      if (sec) return { id: id, type: 'Theatre sector', title: sec.name, detail: sec.desc, target: 'theatre', raw: sec };
    }
    if (id.indexOf('operation:') === 0 && typeof OPERATIONS !== 'undefined') {
      var oi = Number(id.split(':')[1]); if (OPERATIONS[oi]) return { id: id, type: 'Operation', title: OPERATIONS[oi].name, detail: OPERATIONS[oi].who, target: 'operations', raw: OPERATIONS[oi] };
    }
    if (id.indexOf('campaign:') === 0 && typeof CAMPAIGNS !== 'undefined') {
      var campaign = CAMPAIGNS.find(function (c) { return 'campaign:' + c.id === id; });
      if (campaign) return { id: id, type: campaign.type === 'war' ? 'War dossier' : 'Operation dossier', title: campaign.title, detail: campaign.summary, target: 'campaigns', raw: campaign };
    }
    return null;
  }
  function renderVault() {
    var ids = Array.from(savedIds);
    var list = $('#savedList');
    if (!ids.length) list.innerHTML = '<div class="empty-state">Nothing saved yet. Use ☆ Save on an event, source, sector, or profile to build your personal research list.</div>';
    else list.innerHTML = ids.map(function (id) {
      var item = findEntry(id);
      if (!item) {
        if (id.indexOf('source:') === 0) {
          var s = SOURCE_LIBRARY.find(function (x) { return 'source:' + x.id === id; });
          if (s) item = { id: id, title: s.title, type: 'Source archive', target: 'sources', detail: s.org };
        }
      }
      if (!item) return '';
      return '<div class="saved-item"><strong>' + escapeHTML(item.title) + '</strong><small>' + escapeHTML(item.type || 'Saved item') + ' · ' + escapeHTML(String(item.detail || '').slice(0, 180)) + '</small><div style="display:flex;gap:7px"><button class="bookmark-btn" data-open-id="' + escapeHTML(id) + '">Open item ↗</button><button class="bookmark-btn" data-save-id="' + escapeHTML(id) + '">Remove</button></div></div>';
    }).join('');
    $('#fieldNotes').value = safeStoreGet('iw-field-notes', '');
  }

  function renderSearchResults(rawQuery) {
    var panel = $('#searchPanel');
    if (!panel) return;
    var query = String(rawQuery || '').trim().toLowerCase();
    if (query.length < 2) {
      panel.innerHTML = '<div class="empty-state">Type at least two characters to search the archive. Try “Tiger Hill”, “Vikram Batra”, “Safed Sagar”, or “Review Committee”.</div>';
      return;
    }
    var results = globalIndex.filter(function (item) { return (item.title + ' ' + item.detail + ' ' + item.type).toLowerCase().indexOf(query) !== -1; }).slice(0, 8);
    if (!results.length) {
      panel.innerHTML = '<div class="empty-state">No match in this archive yet. Try a shorter phrase, a different spelling, a campaign year, a leader, or a topic such as “logistics” or “terrain”.</div>';
      return;
    }
    panel.innerHTML = results.map(function (item) {
      return '<button type="button" class="search-hit" data-open-id="' + escapeHTML(item.id) + '"><span><strong>' + escapeHTML(item.title) + '</strong><small>' + escapeHTML(item.detail).slice(0, 126) + (item.detail.length > 126 ? '…' : '') + '</small></span><span class="type">' + escapeHTML(item.type) + '</span></button>';
    }).join('') + '<div style="padding:8px 11px;border-top:1px solid var(--line);font-size:10px;color:var(--muted)">Showing up to 8 matches from the on-site archive.</div>';
  }
  function openSearch() {
    $('#globalSearchWrap').style.display = 'block';
    renderSearchResults($('#globalSearch').value);
    $('#globalSearch').focus();
    $('#searchPanel').classList.add('show');
  }
  function hideSearch() {
    var wrap = $('#globalSearchWrap');
    if (wrap) wrap.style.display = 'none';
    if ($('#searchPanel')) $('#searchPanel').classList.remove('show');
  }

  function openVault() {
    $('#vaultOverlay').classList.add('show');
    $('#vaultDrawer').classList.add('show');
    $('#vaultDrawer').setAttribute('aria-hidden', 'false');
    renderVault();
  }
  function closeVault() {
    $('#vaultOverlay').classList.remove('show');
    $('#vaultDrawer').classList.remove('show');
    $('#vaultDrawer').setAttribute('aria-hidden', 'true');
  }
  function openIndexed(id) {
    var item = findEntry(id);
    if (!item) return;
    if (item.sectorId) activeSector = item.sectorId;
    if (item.side) activeSide = item.side;
    if (item.id.indexOf('sector:') === 0) activeSector = item.raw.id;
    if (item.id.indexOf('peak:') === 0) activeSector = item.sectorId;
    if (item.id.indexOf('study:') === 0 && item.raw) {
      closeVault();
      openWarStudy(item.raw.id);
      return;
    }
    if (item.id.indexOf('campaign:') === 0 && item.raw) {
      var campaignStudy = findWarStudy(item.raw.id);
      if (campaignStudy) {
        closeVault();
        openWarStudy(campaignStudy.id);
      } else {
        closeVault();
        sectionJump('campaigns');
      }
      return;
    }
    if (item.id.indexOf('atlas:') === 0 && item.raw) {
      sectionJump('atlas');
      closeVault();
      openOperationDetail(item.raw.id);
      return;
    }
    renderSectors();
    renderLeaders();
    sectionJump(item.target || 'overview');
    if (item.id.indexOf('event:') === 0) {
      var evIdx = item.id.split(':')[1];
      prepareDynamicAnchor('timeline-event-' + evIdx);
      var eventEl = $('#timeline-event-' + evIdx);
      if (eventEl) eventEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (item.id.indexOf('source:') === 0 && item.raw) {
      var sourceCard = document.getElementById('source-card-' + item.raw.id);
      if (sourceCard) sourceCard.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'center' });
    }
  }

  function exportArchive() {
    var payload = {
      title: 'Indian Wars — Historical Military Atlas',
      exportedAt: new Date().toISOString(),
      scopeNote: 'Research export from a static educational dossier. Verify claims against the listed original sources.',
      chronology: typeof TIMELINE !== 'undefined' ? TIMELINE : [],
      sectors: typeof SECTORS !== 'undefined' ? SECTORS : [],
      operations: typeof OPERATIONS !== 'undefined' ? OPERATIONS : [],
      IndianLeaders: typeof LEADERS_INDIA !== 'undefined' ? LEADERS_INDIA : [],
      PakistaniLeaders: typeof LEADERS_PAK !== 'undefined' ? LEADERS_PAK : [],
      gallantryProfiles: typeof HEROES !== 'undefined' ? HEROES : [],
      operationsAtlas: typeof OPERATIONS_ATLAS !== 'undefined' ? OPERATIONS_ATLAS : [],
      reforms: typeof REFORMS !== 'undefined' ? REFORMS : [],
      analysis: typeof STRATEGIC_COMPARISON !== 'undefined' ? STRATEGIC_COMPARISON : [],
      sourceLibrary: SOURCE_LIBRARY,
      savedItems: Array.from(savedIds),
      fieldNotes: safeStoreGet('iw-field-notes', '')
    };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a'); a.href = url; a.download = 'indian-wars-archive.json'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    showToast('Dossier exported as JSON');
  }

  function addSearchButton() {
    var host = $('.top-actions');
    if (!host || $('#searchToggle')) return;
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'quiet-btn utility-btn'; btn.id = 'searchToggle'; btn.title = 'Search the archive (Ctrl/⌘ + K)'; btn.setAttribute('aria-label', 'Search the archive'); btn.innerHTML = '<span aria-hidden="true">⌕</span><span class="label">Search</span>';
    host.insertBefore(btn, $('#savedOpen'));
    btn.addEventListener('click', function () {
      if ($('#globalSearchWrap').style.display === 'block') hideSearch(); else openSearch();
    });
  }

  function listen(selector, eventName, handler, options) {
    var element = $(selector);
    if (!element) {
      console.warn('[Indian Wars] Interaction target is missing:', selector);
      return false;
    }
    var guardedHandler = function (event) {
      try {
        return handler.call(this, event);
      } catch (error) {
        console.error('[Indian Wars] Control action failed:', selector, eventName, error);
        try { showToast('A control hit an error. Please try again.'); } catch (toastError) { /* keep the page responsive */ }
        return false;
      }
    };
    element.addEventListener(eventName, guardedHandler, options);
    return true;
  }

  function wireEvents() {
    document.addEventListener('click', function (event) {
      try {
      var pageButton = event.target.closest('[data-page-action][data-page-list]');
      if (pageButton) {
        if (pageButton.disabled) return;
        var listName = pageButton.dataset.pageList;
        var direction = pageButton.dataset.pageAction === 'next' ? 1 : -1;
        var pageStatus = document.getElementById(listName + 'PageStatus');
        var visiblePages = pageStatus ? Number(pageStatus.dataset.pages) : 1;
        if (listName === 'timeline') { timelinePage = clampPage(timelinePage + direction, visiblePages, 1); renderTimeline(); }
        else if (listName === 'campaigns') { campaignPage = clampPage(campaignPage + direction, visiblePages, 1); renderCampaigns(); }
        else if (listName === 'atlas') { atlasPage = clampPage(atlasPage + direction, visiblePages, 1); renderAtlas(); }
        var targetId = listName === 'timeline' ? 'timelineList' : (listName === 'campaigns' ? 'campaignGrid' : 'atlasGrid');
        var pageTarget = document.getElementById(targetId);
        if (pageTarget) pageTarget.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
        return;
      }
      var studyOpenBtn = event.target.closest('[data-open-study]');
      if (studyOpenBtn) { openWarStudy(studyOpenBtn.dataset.openStudy); return; }
      var studyCloseBtn = event.target.closest('[data-close-study]');
      if (studyCloseBtn) { closeWarStudy(); return; }
      var studyCompleteBtn = event.target.closest('[data-study-complete]');
      if (studyCompleteBtn) { toggleWarStudyCompleted(studyCompleteBtn.dataset.studyComplete); return; }
      var studyJumpBtn = event.target.closest('[data-study-jump]');
      if (studyJumpBtn) {
        var studyTarget = document.getElementById(studyJumpBtn.dataset.studyJump);
        if (studyTarget) studyTarget.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
        return;
      }
      var jumpButton = event.target.closest('[data-jump]');
      if (jumpButton) { sectionJump(jumpButton.dataset.jump); return; }
      var routeButton = event.target.closest('[data-route]');
      if (routeButton) { navigateRoute(routeButton.dataset.route); return; }
      var saveBtn = event.target.closest('[data-save-id]');
      if (saveBtn) { toggleSaved(saveBtn.dataset.saveId); return; }
      var compareBtn = event.target.closest('[data-compare-operation]');
      if (compareBtn) { if (!compareBtn.disabled) toggleAtlasCompare(compareBtn.dataset.compareOperation); return; }
      var removeCompareBtn = event.target.closest('[data-remove-compare]');
      if (removeCompareBtn) { toggleAtlasCompare(removeCompareBtn.dataset.removeCompare); return; }
      var runCompareBtn = event.target.closest('[data-run-comparison]');
      if (runCompareBtn) { if (!runCompareBtn.disabled) openAtlasComparison(); return; }
      var clearCompareBtn = event.target.closest('[data-clear-comparison]');
      if (clearCompareBtn) { clearAtlasComparison(); return; }
      var closeCompareBtn = event.target.closest('[data-close-comparison]');
      if (closeCompareBtn) { closeAtlasComparison(); return; }
      var operationBtn = event.target.closest('[data-open-operation]');
      if (operationBtn) { openOperationDetail(operationBtn.dataset.openOperation); return; }
      var openBtn = event.target.closest('[data-open-id]');
      if (openBtn) { var id = openBtn.dataset.openId; closeVault(); openIndexed(id); }
      } catch (error) {
        console.error('[Indian Wars] Delegated click action failed:', error);
        try { showToast('This control hit an error. Navigation remains available.'); } catch (toastError) { /* preserve other controls */ }
      }
    });

    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    var navMore = $('#navMore');
    if (navMore) {
      navMore.addEventListener('click', function (event) {
        if (event.target.closest('button[data-route]')) navMore.open = false;
      });
    }

    listen('#phaseFilters', 'click', function (event) {
      var button = event.target.closest('[data-phase]');
      if (!button) return;
      activePhase = button.dataset.phase;
      timelinePage = 1;
      $$('#phaseFilters .filter-btn').forEach(function (b) { b.classList.toggle('active', b === button); });
      renderTimeline();
    });
    listen('#timelineSearch', 'input', function () { timelinePage = 1; renderTimeline(); });
    listen('#timelineClearFilters', 'click', function () {
      activePhase = 'all';
      timelinePage = 1;
      $('#timelineSearch').value = '';
      $$('#phaseFilters .filter-btn').forEach(function (button) { button.classList.toggle('active', button.dataset.phase === 'all'); });
      renderTimeline();
    });

    listen('#campaignFilters', 'click', function (event) {
      var button = event.target.closest('[data-campaign-filter]');
      if (!button) return;
      activeCampaignFilter = button.dataset.campaignFilter;
      campaignPage = 1;
      $$('#campaignFilters [data-campaign-filter]').forEach(function (b) { b.classList.toggle('active', b === button); });
      renderCampaigns();
    });
    listen('#campaignSearch', 'input', function () { campaignPage = 1; renderCampaigns(); });
    listen('#campaignClearFilters', 'click', function () {
      activeCampaignFilter = 'all';
      campaignPage = 1;
      $('#campaignSearch').value = '';
      $$('#campaignFilters [data-campaign-filter]').forEach(function (button) { button.classList.toggle('active', button.dataset.campaignFilter === 'all'); });
      renderCampaigns();
    });

    listen('#atlasFilters', 'click', function (event) {
      var button = event.target.closest('[data-atlas-filter]');
      if (!button) return;
      activeAtlasFilter = button.dataset.atlasFilter;
      atlasPage = 1;
      $$('#atlasFilters [data-atlas-filter]').forEach(function (b) { b.classList.toggle('active', b === button); });
      renderAtlas();
    });
    listen('#atlasSearch', 'input', function () { atlasPage = 1; renderAtlas(); });
    listen('#atlasSort', 'change', function () { atlasSortMode = this.value; atlasPage = 1; renderAtlas(); });
    listen('#atlasViewCards', 'click', function () { setAtlasView('cards'); });
    listen('#atlasViewList', 'click', function () { setAtlasView('list'); });
    listen('#atlasClearFilters', 'click', function () {
      activeAtlasFilter = 'all';
      atlasPage = 1;
      $('#atlasSearch').value = '';
      $$('#atlasFilters [data-atlas-filter]').forEach(function (b) { b.classList.toggle('active', b.dataset.atlasFilter === 'all'); });
      renderAtlas();
    });
    listen('#atlasModalClose', 'click', closeOperationDetail);
    listen('#atlasModalBackdrop', 'click', closeOperationDetail);

    listen('#quizTopicFilters', 'click', function (event) {
      var button = event.target.closest('[data-quiz-topic]');
      if (!button) return;
      activeQuizTopic = button.dataset.quizTopic;
      $$('#quizTopicFilters [data-quiz-topic]').forEach(function (b) { b.classList.toggle('active', b === button); });
      $('#quizShell').hidden = true;
      renderQuizHome();
    });
    listen('#quizStart', 'click', startQuiz);
    listen('#quizOptions', 'click', function (event) {
      var button = event.target.closest('[data-quiz-answer]');
      if (button) answerQuiz(button.dataset.quizAnswer);
    });
    listen('#quizNext', 'click', function () { if (!quizAnswered) return; quizPosition++; renderQuizQuestion(); });
    listen('#quizRetake', 'click', startQuiz);
    listen('#quizBackToTopics', 'click', function () { $('#quizShell').hidden = true; $('#quizStart').focus(); });

    listen('#sectorSelector', 'click', function (event) {
      var button = event.target.closest('[data-sector]');
      if (!button) return;
      activeSector = button.dataset.sector;
      renderSectors();
    });
    listen('#sideSwitch', 'click', function (event) {
      var button = event.target.closest('[data-side]');
      if (!button) return;
      activeSide = button.dataset.side;
      $$('#sideSwitch button').forEach(function (b) { b.classList.toggle('active', b === button); });
      renderLeaders();
    });



    listen('#savedOpen', 'click', openVault);
    listen('#savedClose', 'click', closeVault);
    listen('#vaultOverlay', 'click', closeVault);
    listen('#saveNotes', 'click', function () {
      safeStoreSet('iw-field-notes', $('#fieldNotes').value);
      showToast('Field notes saved in this browser');
    });
    listen('#clearSaved', 'click', function () {
      if (!savedIds.size) { showToast('Your saved list is already empty'); return; }
      savedIds.clear();
      saveIds();
      renderVault(); renderTimeline(); renderSources(); renderSectors(); renderOperations();
      renderCampaigns(); renderAtlas(); renderLeaders(); renderHeroes(); renderReforms();
      showToast('Saved items cleared');
    });
    listen('#themeToggle', 'click', function () {
      document.body.classList.toggle('light-mode');
      safeStoreSet('iw-theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    });
    if (safeStoreGet('iw-theme', 'dark') === 'light') document.body.classList.add('light-mode');
    listen('#exportBtn', 'click', exportArchive);
    listen('#printBtn', 'click', function () { window.print(); });

    listen('#globalSearch', 'input', function () {
      renderSearchResults(this.value);
      $('#searchPanel').classList.add('show');
    });
    listen('#globalSearch', 'focus', function () { $('#searchPanel').classList.add('show'); });
    listen('#globalSearch', 'keydown', function (event) {
      if (event.key === 'Escape') hideSearch();
      if (event.key === 'Enter') {
        var first = $('.search-hit', $('#searchPanel'));
        if (first) openIndexed(first.dataset.openId);
        else showToast('No matching entry in the on-site archive. Try another term.');
      }
    });
    document.addEventListener('keydown', function (event) {
      var target = event.target;
      var typing = target && (/INPUT|TEXTAREA|SELECT/.test(target.tagName) || target.isContentEditable);
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); openSearch(); }
      else if (event.key === '/' && !typing) { event.preventDefault(); openSearch(); }
      else if (event.key === 'Escape') { hideSearch(); closeVault(); closeOperationDetail(); closeAtlasComparison(); closeWarStudy(); }
    });
    document.addEventListener('click', function (event) {
      var wrap = $('#globalSearchWrap');
      if (wrap && wrap.style.display === 'block' && !wrap.contains(event.target) && event.target.id !== 'searchToggle') {
        $('#searchPanel').classList.remove('show');
      }
    });
  }

  function updateHomeMetrics() {
    var operationsCount = $('#homeOperationCount');
    var campaignsCount = $('#homeCampaignCount');
    if (operationsCount) operationsCount.textContent = typeof OPERATIONS_ATLAS !== 'undefined' ? OPERATIONS_ATLAS.filter(function (item) { return item.type !== 'research'; }).length : '—';
    if (campaignsCount) campaignsCount.textContent = typeof CAMPAIGNS !== 'undefined' ? CAMPAIGNS.length : '—';
  }

  function runInitStep(label, task) {
    try {
      task();
      return true;
    } catch (error) {
      console.error('[Indian Wars] Initialisation step failed:', label, error);
      try { showToast(label + ' could not load; other controls remain available.'); } catch (toastError) { /* keep startup alive */ }
      return false;
    }
  }

  function init() {
    runInitStep('Search control', addSearchButton);
    runInitStep('Button and navigation wiring', wireEvents);
    [
      ['Search index', buildIndex],
      ['Timeline', renderTimeline],
      ['War Studies', renderCampaigns],
      ['Operations Atlas', renderAtlas],
      ['Terrain sectors', renderSectors],
      ['Highways', renderHighways],
      ['Kargil operations', renderOperations],
      ['Commanders', renderLeaders],
      ['Gallantry profiles', renderHeroes],
      ['Reforms', renderReforms],
      ['Source register', renderSources],
      ['Saved items', renderVault],
      ['Quiz academy', renderQuizHome],
      ['Home metrics', updateHomeMetrics],
      ['Operation map', initOperationsMap],
      ['Route navigation', handleLocationChange]
    ].forEach(function (step) { runInitStep(step[0], step[1]); });
    var stats = $('.metric strong');
    if (stats.length) stats[0].setAttribute('title', 'Date range from first detection reported on 3 May to official end date on 26 July. Counting conventions vary.');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();