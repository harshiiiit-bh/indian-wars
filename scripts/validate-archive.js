#!/usr/bin/env node
'use strict';

const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const read = (name) => fs.readFileSync(path.join(root, name), 'utf8');
const html = read('index.html');
const app = read('app.js');
const campaigns = read('campaigns.js');
const data = read('data.js');
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
check(duplicates.length === 0, `Duplicate HTML IDs: ${[...new Set(duplicates)].join(', ')}`);
check(/<section\b[^>]*id="home"[^>]*data-view="home"/.test(html), 'Neutral Home view is missing.');
check(/<section\b[^>]*id="overview"[^>]*data-view="kargil"/.test(html), 'Kargil hero must be confined to the Kargil view.');
check(/<div\b[^>]*class="metrics"[^>]*data-view="kargil"/.test(html), 'Kargil-only metrics must be confined to the Kargil view.');
for (const route of ['home', 'operations-atlas', 'campaigns', 'kargil', 'academy', 'analysis', 'sources']) {
  check(new RegExp(`data-view="${route}"`).test(html), `Missing view container/section for route: ${route}`);
  check(new RegExp(`data-route="${route}"`).test(html), `Missing primary route control: ${route}`);
}
check(/function\s+resolveRoute\s*\(/.test(app), 'Route resolver is missing.');
check(/Array\.isArray\(storedSavedIds\)/.test(app), 'Saved browser state must be type-checked before filtering to avoid crashing startup.');
check(/function\s+activateRoute\s*\(/.test(app), 'Route activation is missing.');
check(/addEventListener\(['"]hashchange['"]/.test(app), 'Hash navigation handler is missing.');
check(/sectionRouteMap/.test(app), 'Legacy section-to-route map is missing.');
check(!/nav\.classList\.toggle\(['"]active['"],\s*nav\.dataset\.jump\s*===\s*current\)/.test(app), 'Scroll-based navigation state still competes with route state.');
check(/id="operationsMap"/.test(html) && /function\s+initOperationsMap\s*\(/.test(app), 'Operations map hook is missing.');
check(/id="atlasModalClose"/.test(html) && /function\s+closeOperationDetail\s*\(/.test(app), 'Operation dossier close flow is missing.');
check(/OPERATIONS_ATLAS/.test(campaigns) && /OPERATIONS_ATLAS/.test(app), 'Operations Atlas data/render path is missing.');
const scripts = [...html.matchAll(/<script\s+src="([^"]+)"/g)].map((match) => match[1]);
const dataPos = scripts.indexOf('data.js'); const campaignsPos = scripts.indexOf('campaigns.js'); const appPos = scripts.indexOf('app.js');
check(dataPos >= 0 && campaignsPos > dataPos && appPos > campaignsPos, 'Script dependency order must be data.js → campaigns.js → app.js.');
check(/id="campaignSearch"/.test(html) && /id="atlasSearch"/.test(html) && /id="timelineSearch"/.test(html), 'Campaign, operations, or timeline search controls are missing.');
check(/id="campaignClearFilters"/.test(html) && /id="timelineClearFilters"/.test(html) && /id="atlasClearFilters"/.test(html), 'Each searchable collection should have a clear/reset control.');
check(/id="globalSearch"/.test(html) && /id="savedOpen"/.test(html), 'Global search or saved-notes utility is missing.');
check(/id="overview"[^>]*data-view="kargil"[\s\S]{0,800}1999/i.test(html), 'The dedicated Kargil view must identify its historical scope and year.');
for (const route of ['kargil-timeline', 'kargil-theatre', 'kargil-operations', 'kargil-people']) {
  check(html.includes(`data-view="${route}"`), `Missing focused Kargil chapter view: ${route}`);
  check(html.includes(`data-route="${route}"`), `Missing Kargil chapter navigation control: ${route}`);
}
check(/id="kargilChapterNav"[^>]*hidden/.test(html) && !/<div class="kargil-chapter-nav"[^>]*data-view=/.test(html), 'Kargil chapter bar must persist independently of a single view.');
check(/var chapterNav = \$\('#kargilChapterNav'\)/.test(app), 'Kargil chapter bar route visibility is not wired.');
check(/var isKargilRoute = route === 'kargil' \|\| route.indexOf\('kargil-'\) === 0/.test(app), 'Top-level Kargil navigation should remain active across subviews.');
for (const [section, route] of Object.entries({timeline:'kargil-timeline',theatre:'kargil-theatre',operations:'kargil-operations',people:'kargil-people'})) {
  check(new RegExp(section + `:\\s*'` + route + `'`).test(app), `Legacy hash ${section} does not route to ${route}.`);
}
for (const id of ['timelinePagination', 'campaignPagination', 'atlasPagination']) {
  check(html.includes(`id="${id}"`), `Missing pagination control: ${id}`);
}
check(/function\s+renderPagination\s*\(/.test(app), 'Pagination renderer is missing.');
check(['timelinePage', 'campaignPage', 'atlasPage'].every(name => app.includes(name)), 'A result-list page state is missing.');
check(/data-page-action/.test(app) && /data-page-list/.test(app), 'Previous/Next pagination controls are not handled.');
const wireEventsStart = app.indexOf('function wireEvents()');
const delegatedClickStart = app.indexOf("var pageButton = event.target.closest('[data-page-action][data-page-list]');", wireEventsStart);
const firstSpecificListener = app.indexOf("window.addEventListener('hashchange'", wireEventsStart);
check(wireEventsStart >= 0 && delegatedClickStart > wireEventsStart && delegatedClickStart < firstSpecificListener, 'Core delegated click handling must be installed before individual listeners can fail.');
const initStart = app.indexOf('function init()');
const wireCall = app.indexOf('wireEvents();', initStart);
const firstRenderStep = app.indexOf('buildIndex();', initStart);
check(initStart >= 0 && wireCall > initStart && wireCall < firstRenderStep, 'Button and navigation listeners must be attached before archive rendering begins.');
check(app.includes("var routeButton = event.target.closest('[data-route]');"), 'Global delegated route-button handling is missing.');

check(/function\s+prepareDynamicAnchor\s*\(/.test(app), 'Dynamic list anchor resolver is missing.');
check(/timeline-event-'\) === 0\) return 'kargil-timeline'/.test(app) && /campaign-card-'\) === 0\) return 'campaigns'/.test(app) && /atlas-card-'\) === 0\) return 'operations-atlas'/.test(app), 'Direct list-item hashes must resolve to their destination views.');
check(/var eventPosition = orderedTimeline\.findIndex/.test(app) && /var campaignPosition = CAMPAIGNS\.findIndex/.test(app) && /var atlasPosition = atlasItems\.findIndex/.test(app), 'Direct links must select the page containing the linked record.');
check(/prepareDynamicAnchor\('timeline-event-' \+ evIdx\)/.test(app), 'Saved timeline entries must navigate to the page containing the saved event.');
check(!/^\s*\$\([^;\n]+\)\.forEach/m.test(app), 'A single-element query is incorrectly used as a collection.');
check((app.match(/var pageItems = (?:filtered|items)\.slice\(/g) || []).length >= 3, 'The three paginated lists must render only the current page.');
check(/timelinePage = 1;[\s\S]{0,100}renderTimeline\(\)/.test(app) && /campaignPage = 1;[\s\S]{0,100}renderCampaigns\(\)/.test(app) && /atlasPage = 1;[\s\S]{0,100}renderAtlas\(\)/.test(app), 'Search/filter changes should reset result lists to page one.');
if (failures.length) { console.error(`Archive validation failed (${failures.length}):`); for (const failure of failures) console.error(` - ${failure}`); process.exitCode = 1; }
else { console.log(`Archive validation passed. ${ids.length} HTML IDs are unique; 7 routes, legacy routing, core controls and script order are present.`); }