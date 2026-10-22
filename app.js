/* Indian Wars / Field Archive — interaction layer
   Keeps the original Kargil data.js as the historical content source. */
(function () {
  'use strict';

  var $ = function (selector, root) { return (root || document).querySelector(selector); };
  var $$ = function (selector, root) { return Array.prototype.slice.call((root || document).querySelectorAll(selector)); };
  var PHASE_LABELS = { infiltration: 'Infiltration', detection: 'Detection', mobilization: 'Mobilization', battles: 'Key battle', endgame: 'Endgame' };
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
    { id: 'pib-2024-vijay', title: 'Kargil Vijay Diwas Rajat Jayanti 2024', org: 'Press Information Bureau', kind: 'Government release', year: '2024', url: 'https://www.pib.gov.in/PressReleasePage.aspx?PRID=2033075&lang=2&reg=48', summary: 'Official 25-year commemoration source describing the IAF legacy and the specific mission categories used in its account.' }
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
    renderSectors();
    renderOperations();
    renderLeaders();
    renderHeroes();
    renderReforms();
    renderSources();
    renderVault();
    renderSearchResults($('#globalSearch') ? $('#globalSearch').value : '');
  }
  function sectionJump(id) {
    var target = document.getElementById(id);
    if (target) target.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    $$('.nav-link').forEach(function (nav) { nav.classList.toggle('active', nav.dataset.jump === id); });
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
    renderSectors();
    renderLeaders();
    sectionJump(item.target || 'overview');
    if (item.id.indexOf('event:') === 0) {
      var evIdx = item.id.split(':')[1];
      activePhase = 'all';
      $('#timelineSearch').value = '';
      $('#phaseFilters .filter-btn').forEach(function (b) { b.classList.toggle('active', b.dataset.phase === 'all'); });
      renderTimeline();
      var eventEl = $('#timeline-event-' + evIdx);
      if (eventEl) eventEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    if (item.id.indexOf('source:') === 0 && item.raw && item.raw.url) window.open(item.raw.url, '_blank', 'noopener');
  }

  function exportArchive() {
    var payload = {
      title: 'Indian Wars — Kargil War Field Archive',
      exportedAt: new Date().toISOString(),
      scopeNote: 'Research export from a static educational dossier. Verify claims against the listed original sources.',
      chronology: typeof TIMELINE !== 'undefined' ? TIMELINE : [],
      sectors: typeof SECTORS !== 'undefined' ? SECTORS : [],
      operations: typeof OPERATIONS !== 'undefined' ? OPERATIONS : [],
      IndianLeaders: typeof LEADERS_INDIA !== 'undefined' ? LEADERS_INDIA : [],
      PakistaniLeaders: typeof LEADERS_PAK !== 'undefined' ? LEADERS_PAK : [],
      gallantryProfiles: typeof HEROES !== 'undefined' ? HEROES : [],
      reforms: typeof REFORMS !== 'undefined' ? REFORMS : [],
      analysis: typeof STRATEGIC_COMPARISON !== 'undefined' ? STRATEGIC_COMPARISON : [],
      sourceLibrary: SOURCE_LIBRARY,
      savedItems: Array.from(savedIds),
      fieldNotes: safeStoreGet('iw-field-notes', '')
    };
    var blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a'); a.href = url; a.download = 'indian-wars-kargil-dossier.json'; document.body.appendChild(a); a.click(); a.remove(); URL.revokeObjectURL(url);
    showToast('Dossier exported as JSON');
  }

  function addSearchButton() {
    var host = $('.top-actions');
    if (!host || $('#searchToggle')) return;
    var btn = document.createElement('button');
    btn.type = 'button'; btn.className = 'icon-btn'; btn.id = 'searchToggle'; btn.title = 'Search the archive (Ctrl/⌘ + K)'; btn.setAttribute('aria-label', 'Search the archive'); btn.textContent = '⌕';
    host.insertBefore(btn, $('#savedOpen'));
    btn.addEventListener('click', function () {
      if ($('#globalSearchWrap').style.display === 'block') hideSearch(); else openSearch();
    });
  }

  function wireEvents() {
    $$('[data-jump]').forEach(function (button) { button.addEventListener('click', function () { sectionJump(button.dataset.jump); }); });
    $$('.nav-link').forEach(function (button) { button.addEventListener('click', function () { sectionJump(button.dataset.jump); }); });

    $('#phaseFilters').addEventListener('click', function (event) {
      var button = event.target.closest('[data-phase]');
      if (!button) return;
      activePhase = button.dataset.phase;
      $$('#phaseFilters .filter-btn').forEach(function (b) { b.classList.toggle('active', b === button); });
      renderTimeline();
    });
    $('#timelineSearch').addEventListener('input', renderTimeline);
    $('#sectorSelector').addEventListener('click', function (event) {
      var button = event.target.closest('[data-sector]');
      if (!button) return;
      activeSector = button.dataset.sector; renderSectors();
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
      var openBtn = event.target.closest('[data-open-id]');
      if (openBtn) { var id = openBtn.dataset.openId; closeVault(); openIndexed(id); }
    });
    $('#savedOpen').addEventListener('click', openVault);
    $('#savedClose').addEventListener('click', closeVault);
    $('#vaultOverlay').addEventListener('click', closeVault);
    $('#saveNotes').addEventListener('click', function () { safeStoreSet('iw-field-notes', $('#fieldNotes').value); showToast('Field notes saved in this browser'); });
    $('#clearSaved').addEventListener('click', function () {
      if (!savedIds.size) { showToast('Your saved list is already empty'); return; }
      savedIds.clear(); saveIds(); renderVault(); renderTimeline(); renderSources(); renderSectors(); renderOperations(); renderLeaders(); renderHeroes(); renderReforms(); showToast('Saved items cleared');
    });
    $('#themeToggle').addEventListener('click', function () {
      document.body.classList.toggle('light-mode');
      safeStoreSet('iw-theme', document.body.classList.contains('light-mode') ? 'light' : 'dark');
    });
    if (safeStoreGet('iw-theme', 'dark') === 'light') document.body.classList.add('light-mode');
    $('#exportBtn').addEventListener('click', exportArchive);
    $('#printBtn').addEventListener('click', function () { window.print(); });
    $('#globalSearch').addEventListener('input', function () { renderSearchResults(this.value); $('#searchPanel').classList.add('show'); });
    $('#globalSearch').addEventListener('focus', function () { $('#searchPanel').classList.add('show'); });
    $('#globalSearch').addEventListener('keydown', function (event) {
      if (event.key === 'Escape') hideSearch();
      if (event.key === 'Enter') {
        var first = $('.search-hit', $('#searchPanel'));
        if (first) openIndexed(first.dataset.openId);
        else window.open(googleLink(this.value + ' Kargil War 1999'), '_blank', 'noopener');
      }
    });
    document.addEventListener('keydown', function (event) {
      var target = event.target;
      var typing = target && (/INPUT|TEXTAREA|SELECT/.test(target.tagName) || target.isContentEditable);
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); openSearch(); }
      else if (event.key === '/' && !typing) { event.preventDefault(); openSearch(); }
      else if (event.key === 'Escape') { hideSearch(); closeVault(); }
    });
    window.addEventListener('scroll', function () {
      var scrollable = document.documentElement.scrollHeight - window.innerHeight;
      var percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      $('#readingProgress').style.width = Math.min(100, Math.max(0, percent)) + '%';
      var sections = ['overview', 'timeline', 'theatre', 'operations', 'people', 'intelligence', 'sources'];
      var current = 'overview';
      sections.forEach(function (id) { var element = document.getElementById(id); if (element && element.getBoundingClientRect().top < 180) current = id; });
      $$('.nav-link').forEach(function (nav) { nav.classList.toggle('active', nav.dataset.jump === current); });
    }, { passive: true });
    document.addEventListener('click', function (event) {
      var wrap = $('#globalSearchWrap');
      if (wrap && wrap.style.display === 'block' && !wrap.contains(event.target) && event.target.id !== 'searchToggle') $('#searchPanel').classList.remove('show');
    });
  }

  function init() {
    addSearchButton();
    buildIndex();
    renderTimeline();
    renderSectors();
    renderHighways();
    renderOperations();
    renderLeaders();
    renderHeroes();
    renderReforms();
    renderSources();
    renderVault();
    wireEvents();
    var stats = $$('.metric strong');
    if (stats.length) stats[0].setAttribute('title', 'Date range from first detection reported on 3 May to official end date on 26 July. Counting conventions vary.');
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();