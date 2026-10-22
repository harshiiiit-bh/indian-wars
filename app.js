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
    campaigns: 'Campaign Library',
    kargil: 'Kargil War 1999',
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
    timeline: 'kargil',
    timelineCount: 'kargil',
    phaseFilters: 'kargil',
    timelineList: 'kargil',
    theatre: 'kargil',
    sectorSelector: 'kargil',
    sectorDetail: 'kargil',
    highwaysList: 'kargil',
    operations: 'kargil',
    opsGrid: 'kargil',
    people: 'kargil',
    sideSwitch: 'kargil',
    leadersGrid: 'kargil',
    heroesGrid: 'kargil',
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
  var savedIds = new Set(safeJSON(safeStoreGet('iw-field-saved', '[]'), []).filter(function (x) { return typeof x === 'string'; }));
  var activePhase = 'all';
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
    var target = document.getElementById(key);
    var view = target && (target.matches('[data-view]') ? target : target.closest('[data-view]'));
    return view && ROUTE_TITLES[view.dataset.view] ? view.dataset.view : 'home';
  }

  function syncRouteNavigation(route) {
    $$('.top-nav [data-route]').forEach(function (button) {
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
    document.body.dataset.route = route;
    $$('[data-view]').forEach(function (view) {
      var visible = view.dataset.view === route;
      view.hidden = !visible;
      view.classList.toggle('route-hidden', !visible);
      view.setAttribute('aria-hidden', visible ? 'false' : 'true');
    });
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

  function handleLocationChange() {
    var key = window.location.hash.replace(/^#/, '');
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
  function googleLink(query) {
    return 'https://www.google.com/search?q=' + encodeURIComponent(query);
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
    $('#timelineCount').textContent = filtered.length + ' / ' + TIMELINE.length + ' ENTRIES';
    $('#eventTotal').textContent = TIMELINE.length;
    if (!filtered.length) {
      list.innerHTML = '<div class="empty-state">No entries match that filter. Try a broader phrase or switch to “All phases”.</div>';
      return;
    }
    list.innerHTML = filtered.map(function (item) {
      var e = item.raw;
      var id = 'event:' + item.index;
      return '<article class="event" id="timeline-event-' + item.index + '">' +
        '<div class="event-date"><b>' + escapeHTML(e.date) + '</b><span>' + escapeHTML(PHASE_LABELS[e.phase] || e.phase) + '</span></div>' +
        '<div><h3>' + escapeHTML(shortHeadline(e.text)) + '</h3><p>' + escapeHTML(e.text) + '</p>' +
        '<div class="event-foot"><span class="tag ' + (e.phase === 'battles' ? 'orange' : e.phase === 'endgame' ? 'gold' : '') + '">' + escapeHTML(PHASE_LABELS[e.phase] || e.phase) + '</span>' +
        bookmarkButton(id, 'Save event') +
        '<a class="bookmark-btn" href="' + googleLink(e.date + ' Kargil War ' + shortHeadline(e.text)) + '" target="_blank" rel="noopener noreferrer">↗ Research web</a></div></div></article>';
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
      '<a class="bookmark-btn" href="' + googleLink('Kargil War ' + s.name + ' battlefield history') + '" target="_blank" rel="noopener noreferrer">↗ Research this sector</a></div>';
  }

  function renderCampaigns() {
    var grid = $('#campaignGrid');
    if (!grid || typeof CAMPAIGNS === 'undefined') return;
    var query = ($('#campaignSearch') ? $('#campaignSearch').value : '').trim().toLowerCase();
    var items = CAMPAIGNS.filter(function (campaign) {
      var byType = activeCampaignFilter === 'all' || campaign.type === activeCampaignFilter;
      var searchable = [campaign.title, campaign.period, campaign.dates, campaign.theatre, campaign.tag, campaign.summary, campaign.keyPoint, campaign.type].join(' ').toLowerCase();
      return byType && (!query || searchable.indexOf(query) !== -1);
    });
    $('#campaignSummary').textContent = items.length + ' OF ' + CAMPAIGNS.length + ' CAMPAIGNS · SOURCE LINKS INCLUDED';
    if (!items.length) {
      grid.innerHTML = '<div class="empty-state campaign-empty">No campaign matches this filter. Try a year, theatre, or operation name.</div>';
      return;
    }
    grid.innerHTML = items.map(function (campaign) {
      var core = campaign.id === 'kargil-1999';
      var id = 'campaign:' + campaign.id;
      var researchQuery = googleLink(campaign.title + ' ' + campaign.period + ' official history');
      return '<article class="campaign-card' + (core ? ' is-core' : '') + '" id="campaign-card-' + escapeHTML(campaign.id) + '">' +
        '<div class="card-top"><span class="tag ' + (campaign.type === 'war' ? '' : 'blue') + '">' + escapeHTML(campaign.type === 'war' ? 'War / conflict' : 'Military operation') + '</span><span class="smallcaps">' + escapeHTML(campaign.tag) + '</span></div>' +
        '<div class="campaign-year">' + escapeHTML(campaign.period) + '</div><h3>' + escapeHTML(campaign.title) + '</h3>' +
        '<div class="campaign-meta">' + escapeHTML(campaign.dates) + ' · ' + escapeHTML(campaign.theatre) + '</div>' +
        '<p>' + escapeHTML(campaign.summary) + '</p>' +
        '<div class="campaign-insight"><span>Why it matters</span>' + escapeHTML(campaign.keyPoint) + '</div>' +
        '<div class="campaign-links"><a href="' + escapeHTML(campaign.sourceUrl) + '" target="_blank" rel="noopener noreferrer">Primary / official source ↗</a>' +
        '<a href="' + escapeHTML(campaign.secondaryUrl) + '" target="_blank" rel="noopener noreferrer">Further reading ↗</a>' +
        (core ? '<button type="button" data-jump="timeline">Open deep-dive dossier ↗</button>' : '<a href="' + researchQuery + '" target="_blank" rel="noopener noreferrer">Web research ↗</a>') +
        '</div>' + bookmarkButton(id, 'Save campaign') + '</article>';
    }).join('');
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

  function getAtlasItems() {
    if (typeof OPERATIONS_ATLAS === 'undefined') return [];
    var query = ($('#atlasSearch') ? $('#atlasSearch').value : '').trim().toLowerCase();
    return OPERATIONS_ATLAS.filter(function (op) {
      var typeMatch = activeAtlasFilter === 'all' || op.type === activeAtlasFilter;
      var searchable = [op.title, op.period, op.type, op.service, op.place, op.scope, op.summary, op.plan, op.execution, op.friction, op.lessons].join(' ').toLowerCase();
      return typeMatch && (!query || searchable.indexOf(query) !== -1);
    });
  }

  function renderAtlas() {
    var grid = $('#atlasGrid');
    if (!grid || typeof OPERATIONS_ATLAS === 'undefined') return;
    var items = getAtlasItems();
    $('#atlasSummary').textContent = items.length + ' DOSSIERS MATCH · ' + OPERATIONS_ATLAS.length + ' IN THE OPEN-SOURCE INDEX';
    $('#atlasCount').textContent = OPERATIONS_ATLAS.filter(function (op) { return op.type !== 'research'; }).length;
    $('#atlasImageCount').textContent = OPERATIONS_ATLAS.filter(function (op) { return !!op.image; }).length;
    if (!items.length) {
      grid.innerHTML = '<div class="empty-state" style="grid-column:1/-1">No dossier matches your search. Try a shorter phrase, another location, or reset the category filter.</div>';
      renderAtlasMap();
      return;
    }
    grid.innerHTML = items.map(function (op) {
      var imageBlock = op.image
        ? '<img loading="lazy" src="' + escapeHTML(op.image.src) + '" alt="' + escapeHTML(op.image.alt) + '" onerror="this.remove();">'
        : atlasArtwork(op);
      var dateLabel = op.period + ' · ' + op.place;
      return '<article class="atlas-card" id="atlas-card-' + escapeHTML(op.id) + '">' +
        '<div class="atlas-thumb">' + imageBlock + '<span class="thumb-label">' + escapeHTML(op.type === 'research' ? 'EVIDENCE INDEX' : atlasTypeLabel(op.type)) + '</span></div>' +
        '<div class="atlas-card-body"><div class="atlas-card-tags"><span class="tag ' + (op.type === 'hadr' || op.type === 'evacuation' ? 'blue' : op.type === 'internal-security' ? 'orange' : op.type === 'peacekeeping' ? 'gold' : '') + '">' + escapeHTML(atlasTypeLabel(op.type)) + '</span>' +
        (op.image ? '<span class="atlas-chip">Photo / archive</span>' : '<span class="atlas-chip">Pictorial schematic</span>') + '</div>' +
        '<h3>' + escapeHTML(op.title) + '</h3><div class="atlas-card-meta">' + escapeHTML(dateLabel) + '</div>' +
        '<p>' + escapeHTML(op.summary) + '</p>' +
        '<div class="atlas-card-tags"><span class="atlas-chip">' + escapeHTML(op.service) + '</span><span class="atlas-chip">' + (op.sources || []).length + ' linked sources</span></div>' +
        '<div class="atlas-card-actions"><button class="primary" type="button" data-open-operation="' + escapeHTML(op.id) + '">Open full dossier ↗</button>' +
        bookmarkButton('atlas:' + op.id, 'Save') + '</div></div></article>';
    }).join('');
    renderAtlasMap();
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
      attribution:'&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap contributors</a>'
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
    var art = op.image
      ? '<figure class="atlas-detail-image"><img src="' + escapeHTML(op.image.src) + '" alt="' + escapeHTML(op.image.alt) + '"><figcaption>' + escapeHTML(op.image.caption) +
        '<br><strong>' + escapeHTML(op.image.credit) + '</strong><br><span>' + escapeHTML(op.image.license) + '</span><br><a href="' + escapeHTML(op.image.page) + '" target="_blank" rel="noopener noreferrer">Open image source and licence ↗</a></figcaption></figure>'
      : '<div class="atlas-detail-image"><svg viewBox="0 0 700 350" style="display:block;width:100%;height:280px" role="img" aria-label="Illustrative planning and terrain schematic, not a historical photograph">' +
        '<rect width="700" height="350" fill="#101916"/><g fill="none" stroke="' + atlasColor(op) + '" stroke-opacity=".32">' +
        '<path d="M-20 245 C65 120 135 285 225 170 S385 240 455 95 S600 205 730 60"/><path d="M-20 270 C65 145 135 310 225 195 S385 265 455 120 S600 230 730 85"/><path d="M-20 295 C65 170 135 335 225 220 S385 290 455 145 S600 255 730 110"/><path d="M60 40 L625 310 M130 5 L530 346" stroke-dasharray="6 8"/></g>' +
        '<circle cx="465" cy="140" r="32" fill="none" stroke="' + atlasColor(op) + '" stroke-width="2"/><circle cx="465" cy="140" r="10" fill="' + atlasColor(op) + '" fill-opacity=".45"/><g fill="#e9eee7" font-family="DM Mono,monospace" font-size="14" letter-spacing="2"><text x="25" y="35">VISUAL BRIEF / CONCEPTUAL</text><text x="25" y="320" font-size="11">NO TACTICAL POSITIONS · NOT A HISTORICAL IMAGE</text></g></svg><div style="padding:10px 12px;font-size:10px;color:var(--muted)">Pictorial teaching schematic created for this page; not a source photograph or map of operational positions.</div></div>';

    var chronology = (op.chronology || []).map(function (e) {
      return '<article class="atlas-event"><div class="atlas-event-date">' + escapeHTML(e.date) + '</div><div><h4>' + escapeHTML(e.title) + '</h4><p>' + escapeHTML(e.detail) + '</p></div></article>';
    }).join('');
    var sources = (op.sources || []).map(function (s) {
      return '<article class="atlas-source"><span>' + escapeHTML(s.kind || 'Source') + '</span><strong>' + escapeHTML(s.title) + '</strong><a href="' + escapeHTML(s.url) + '" target="_blank" rel="noopener noreferrer">Read source ↗</a></article>';
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
      '<a class="bookmark-btn" href="' + googleLink(op.title + ' ' + op.period + ' official history') + '" target="_blank" rel="noopener noreferrer">Further web research ↗</a></div></div>' + art + '</div>' +
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
        '<a class="bookmark-btn" href="' + googleLink(op.name + ' Kargil War official history') + '" target="_blank" rel="noopener noreferrer">↗ Web research</a></div></article>';
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
      return '<article class="source-card"><span class="tag ' + (/Primary|Parliamentary|memorial/i.test(s.kind) ? 'blue' : '') + '">' + escapeHTML(s.kind) + '</span><h3>' + escapeHTML(s.title) + '</h3><p>' + escapeHTML(s.summary) + '</p><div class="source-bottom"><a href="' + escapeHTML(s.url) + '" target="_blank" rel="noopener noreferrer">Open original ↗</a><small>' + escapeHTML(s.year) + '</small></div><div class="event-foot" style="margin-top:12px">' + bookmarkButton('source:' + s.id, 'Save source') + '<span class="smallcaps">' + escapeHTML(s.org) + '</span></div></article>';
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
    $$('quizOptions [data-quiz-answer]').forEach(function (button) {
      var index = Number(button.dataset.quizAnswer);
      button.disabled = true;
      if (index === q.answer) button.classList.add('correct');
      if (index === Number(answerIndex) && !correct) button.classList.add('wrong');
    });
    var feedback = $('#quizFeedback');
    feedback.hidden = false;
    feedback.className = 'quiz-feedback ' + (correct ? 'correct' : 'wrong');
    feedback.innerHTML = '<strong>' + (correct ? '✓ Correct answer' : 'Not quite — review this detail') + '</strong>' +
      escapeHTML(q.explain) + '<br><a href="' + escapeHTML(q.sourceUrl) + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(q.sourceLabel) + ' ↗</a>';
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
      return '<div class="quiz-review-item"><strong>' + escapeHTML(q.question) + '</strong><span class="miss">Your answer: ' + escapeHTML(q.options[response.chosen]) + '</span><br><span class="hit">Correct: ' + escapeHTML(q.options[q.answer]) + '</span><br>' + escapeHTML(q.explain) + '<br><a href="' + escapeHTML(q.sourceUrl) + '" target="_blank" rel="noopener noreferrer">' + escapeHTML(q.sourceLabel) + ' ↗</a></div>';
    }).join('') || '<div class="empty-state" style="margin-top:15px">Perfect run — no missed answers. Open the source links and challenge yourself with another topic.</div>';
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
      panel.innerHTML = '<div class="empty-state">No local match. <a class="inline-link" target="_blank" rel="noopener noreferrer" href="' + googleLink(rawQuery + ' Kargil War 1999') + '">Search the wider web for “' + escapeHTML(rawQuery) + '” ↗</a></div>';
      return;
    }
    panel.innerHTML = results.map(function (item) {
      return '<button type="button" class="search-hit" data-open-id="' + escapeHTML(item.id) + '"><span><strong>' + escapeHTML(item.title) + '</strong><small>' + escapeHTML(item.detail).slice(0, 126) + (item.detail.length > 126 ? '…' : '') + '</small></span><span class="type">' + escapeHTML(item.type) + '</span></button>';
    }).join('') + '<div style="padding:8px 11px;border-top:1px solid var(--line);font-size:10px;color:var(--muted)">Showing up to 8 local results · <a class="inline-link" target="_blank" rel="noopener noreferrer" href="' + googleLink(rawQuery + ' Kargil War 1999') + '">Search Google ↗</a></div>';
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
      activePhase = 'all';
      $('#timelineSearch').value = '';
      $$('#phaseFilters .filter-btn').forEach(function (b) { b.classList.toggle('active', b.dataset.phase === 'all'); });
      renderTimeline();
      var eventEl = $('#timeline-event-' + evIdx);
      if (eventEl) eventEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (item.id.indexOf('source:') === 0 && item.raw && item.raw.url) window.open(item.raw.url, '_blank', 'noopener');
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

  function wireEvents() {
    $$('[data-jump]').forEach(function (button) {
      button.addEventListener('click', function () { sectionJump(button.dataset.jump); });
    });
    $$('[data-route]').forEach(function (button) {
      button.addEventListener('click', function () { navigateRoute(button.dataset.route); });
    });
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    var navMore = $('#navMore');
    if (navMore) {
      navMore.addEventListener('click', function (event) {
        if (event.target.closest('button[data-route]')) navMore.open = false;
      });
    }

    $('#phaseFilters').addEventListener('click', function (event) {
      var button = event.target.closest('[data-phase]');
      if (!button) return;
      activePhase = button.dataset.phase;
      $$('#phaseFilters .filter-btn').forEach(function (b) { b.classList.toggle('active', b === button); });
      renderTimeline();
    });
    $('#timelineSearch').addEventListener('input', renderTimeline);

    $('#campaignFilters').addEventListener('click', function (event) {
      var button = event.target.closest('[data-campaign-filter]');
      if (!button) return;
      activeCampaignFilter = button.dataset.campaignFilter;
      $$('#campaignFilters [data-campaign-filter]').forEach(function (b) { b.classList.toggle('active', b === button); });
      renderCampaigns();
    });
    $('#campaignSearch').addEventListener('input', renderCampaigns);

    $('#atlasFilters').addEventListener('click', function (event) {
      var button = event.target.closest('[data-atlas-filter]');
      if (!button) return;
      activeAtlasFilter = button.dataset.atlasFilter;
      $$('#atlasFilters [data-atlas-filter]').forEach(function (b) { b.classList.toggle('active', b === button); });
      renderAtlas();
    });
    $('#atlasSearch').addEventListener('input', renderAtlas);
    $('#atlasClearFilters').addEventListener('click', function () {
      activeAtlasFilter = 'all';
      $('#atlasSearch').value = '';
      $$('#atlasFilters [data-atlas-filter]').forEach(function (b) { b.classList.toggle('active', b.dataset.atlasFilter === 'all'); });
      renderAtlas();
    });
    $('#atlasModalClose').addEventListener('click', closeOperationDetail);
    $('#atlasModalBackdrop').addEventListener('click', closeOperationDetail);

    $('#quizTopicFilters').addEventListener('click', function (event) {
      var button = event.target.closest('[data-quiz-topic]');
      if (!button) return;
      activeQuizTopic = button.dataset.quizTopic;
      $$('#quizTopicFilters [data-quiz-topic]').forEach(function (b) { b.classList.toggle('active', b === button); });
      $('#quizShell').hidden = true;
      renderQuizHome();
    });
    $('#quizStart').addEventListener('click', startQuiz);
    $('#quizOptions').addEventListener('click', function (event) {
      var button = event.target.closest('[data-quiz-answer]');
      if (button) answerQuiz(button.dataset.quizAnswer);
    });
    $('#quizNext').addEventListener('click', function () { if (!quizAnswered) return; quizPosition++; renderQuizQuestion(); });
    $('#quizRetake').addEventListener('click', startQuiz);
    $('#quizBackToTopics').addEventListener('click', function () { $('#quizShell').hidden = true; $('#quizStart').focus(); });

    $('#sectorSelector').addEventListener('click', function (event) {
      var button = event.target.closest('[data-sector]');
      if (!button) return;
      activeSector = button.dataset.sector;
      renderSectors();
    });
    $('#sideSwitch').addEventListener('click', function (event) {
      var button = event.target.closest('[data-side]');
      if (!button) return;
      activeSide = button.dataset.side;
      $$('#sideSwitch button').forEach(function (b) { b.classList.toggle('active', b === button); });
      renderLeaders();
    });

    document.addEventListener('click', function (event) {
      var saveBtn = event.target.closest('[data-save-id]');
      if (saveBtn) { toggleSaved(saveBtn.dataset.saveId); return; }
      var operationBtn = event.target.closest('[data-open-operation]');
      if (operationBtn) { openOperationDetail(operationBtn.dataset.openOperation); return; }
      var openBtn = event.target.closest('[data-open-id]');
      if (openBtn) { var id = openBtn.dataset.openId; closeVault(); openIndexed(id); }
    });

    $('#savedOpen').addEventListener('click', openVault);
    $('#savedClose').addEventListener('click', closeVault);
    $('#vaultOverlay').addEventListener('click', closeVault);
    $('#saveNotes').addEventListener('click', function () {
      safeStoreSet('iw-field-notes', $('#fieldNotes').value);
      showToast('Field notes saved in this browser');
    });
    $('#clearSaved').addEventListener('click', function () {
      if (!savedIds.size) { showToast('Your saved list is already empty'); return; }
      savedIds.clear();
      saveIds();
      renderVault(); renderTimeline(); renderSources(); renderSectors(); renderOperations();
      renderCampaigns(); renderAtlas(); renderLeaders(); renderHeroes(); renderReforms();
      showToast('Saved items cleared');
    });
    $('#themeToggle').addEventListener('click', function () {
      document.body.classList.toggle('light-mode');
      safeStoreSet('iw-theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    });
    if (safeStoreGet('iw-theme', 'dark') === 'light') document.body.classList.add('light-mode');
    $('#exportBtn').addEventListener('click', exportArchive);
    $('#printBtn').addEventListener('click', function () { window.print(); });

    $('#globalSearch').addEventListener('input', function () {
      renderSearchResults(this.value);
      $('#searchPanel').classList.add('show');
    });
    $('#globalSearch').addEventListener('focus', function () { $('#searchPanel').classList.add('show'); });
    $('#globalSearch').addEventListener('keydown', function (event) {
      if (event.key === 'Escape') hideSearch();
      if (event.key === 'Enter') {
        var first = $('.search-hit', $('#searchPanel'));
        if (first) openIndexed(first.dataset.openId);
        else window.open(googleLink(this.value + ' Indian military history'), '_blank', 'noopener');
      }
    });
    document.addEventListener('keydown', function (event) {
      var target = event.target;
      var typing = target && (/INPUT|TEXTAREA|SELECT/.test(target.tagName) || target.isContentEditable);
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); openSearch(); }
      else if (event.key === '/' && !typing) { event.preventDefault(); openSearch(); }
      else if (event.key === 'Escape') { hideSearch(); closeVault(); closeOperationDetail(); }
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

  function init() {
    addSearchButton();
    buildIndex();
    renderTimeline();
    renderCampaigns();
    renderAtlas();
    renderSectors();
    renderHighways();
    renderOperations();
    renderLeaders();
    renderHeroes();
    renderReforms();
    renderSources();
    renderVault();
    renderQuizHome();
    updateHomeMetrics();
    wireEvents();
    initOperationsMap();
    handleLocationChange();
    var stats = $$('.metric strong');
    if (stats.length) stats[0].setAttribute('title', 'Date range from first detection reported on 3 May to official end date on 26 July. Counting conventions vary.');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();