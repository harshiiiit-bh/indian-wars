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
const wireCall = app.indexOf("runInitStep('Button and navigation wiring', wireEvents);", initStart);
const firstRenderStep = app.indexOf("['Search index', buildIndex]", initStart);
check(initStart >= 0 && wireCall > initStart && wireCall < firstRenderStep, 'Button and navigation listeners must be attached before archive rendering begins.');
check(app.includes('function runInitStep(') && app.includes('function listen('), 'Startup and control binding need fault-isolation guards.');
check(app.includes('var guardedHandler = function (event)') && app.includes('Delegated click action failed'), 'Click failures must be logged and reported without disabling the rest of the interface.');
check(app.includes("var routeButton = event.target.closest('[data-route]');"), 'Global delegated route-button handling is missing.');

check(/function\s+prepareDynamicAnchor\s*\(/.test(app), 'Dynamic list anchor resolver is missing.');
check(/timeline-event-'\) === 0\) return 'kargil-timeline'/.test(app) && /campaign-card-'\) === 0\) return 'campaigns'/.test(app) && /atlas-card-'\) === 0\) return 'operations-atlas'/.test(app), 'Direct list-item hashes must resolve to their destination views.');
check(/var eventPosition = orderedTimeline\.findIndex/.test(app) && /var campaignPosition = CAMPAIGNS\.findIndex/.test(app) && /var atlasPosition = atlasItems\.findIndex/.test(app), 'Direct links must select the page containing the linked record.');
check(/prepareDynamicAnchor\('timeline-event-' \+ evIdx\)/.test(app), 'Saved timeline entries must navigate to the page containing the saved event.');
check(!/^\s*\$\([^;\n]+\)\.forEach/m.test(app), 'A single-element query is incorrectly used as a collection.');
check((app.match(/var pageItems = (?:filtered|items)\.slice\(/g) || []).length >= 3, 'The three paginated lists must render only the current page.');
check(/timelinePage = 1;[\s\S]{0,100}renderTimeline\(\)/.test(app) && /campaignPage = 1;[\s\S]{0,100}renderCampaigns\(\)/.test(app) && /atlasPage = 1;[\s\S]{0,100}renderAtlas\(\)/.test(app), 'Search/filter changes should reset result lists to page one.');

for (const id of ['atlasSort', 'atlasViewCards', 'atlasViewList', 'atlasCompareTray', 'atlasCompareCount', 'atlasCompareSelected', 'atlasCompareRun', 'atlasCompareClear', 'atlasCompareBackdrop', 'atlasCompareShell', 'atlasCompareTitle', 'atlasCompareClose', 'atlasCompareBody']) {
  check(html.includes(`id="${id}"`), `Missing Operations Atlas refinement control: ${id}`);
}
check(app.includes('function sortAtlasItems('), 'Operations Atlas sort logic is missing.');
check(app.includes('function toggleAtlasCompare('), 'Operation selection for comparison is missing.');
check(app.includes('function renderAtlasCompareTray('), 'Comparison tray renderer is missing.');
check(app.includes('function renderAtlasComparison('), 'Side-by-side operation comparison is missing.');
check(app.includes('function openAtlasComparison(') && app.includes('function closeAtlasComparison('), 'Comparison modal open/close controls are missing.');
check(/data-compare-operation/.test(app) && /data-remove-compare/.test(app) && /data-run-comparison/.test(app) && /data-clear-comparison/.test(app) && /data-close-comparison/.test(app), 'Comparison actions are not fully delegated.');
check(/atlas-list-view/.test(html), 'Responsive operations list view styles are missing.');
check(/var ATLAS_COMPARE_LIMIT = 3/.test(app), 'Operation comparison limit must be explicit and bounded.');

check(html.includes('<script src="war-studies.js"></script>'), 'The first-party war-study knowledge base must load before the app.');
check(app.includes('id="warStudyTitle"'), 'The war-study reader must set a live accessible title.');
for (const id of ['warStudyBackdrop', 'warStudyShell', 'warStudyBody', 'warStudyClose']) {
  check(html.includes(`id="${id}"`), `Missing in-page war study reader control: ${id}`);
}
check(app.includes('data-open-study'), 'Campaign cards must open an on-site study instead of depending on outbound links.');
check(app.includes('function openWarStudy(') && app.includes('function closeWarStudy('), 'In-page war study reader open/close flow is missing.');
const campaignRendererStart = app.indexOf('function renderCampaigns(');
const campaignRendererEnd = app.indexOf('function atlasColor(', campaignRendererStart);
check(campaignRendererStart >= 0 && app.slice(campaignRendererStart, campaignRendererEnd).includes('data-open-study'), 'Campaign Library must provide an internal Read study action.');
check(app.includes('WAR_STUDIES') && read('war-studies.js').includes('WAR_STUDIES'), 'Curated war-study content is not connected to the reader.');
for (const field of ['context:', 'commanders:', 'phases:', 'timeline:', 'planning:', 'execution:', 'friction:', 'lessons:', 'sources:']) {
  check(read('war-studies.js').includes(field), `War-study content model is missing the ${field.replace(':', '')} field.`);
}
check((read('war-studies.js').match(/campaignId: "/g) || []).length >= 8, 'The in-page war-study library should cover all eight flagship campaigns.');
check(app.includes('data-study-complete') && app.includes('iw-studied-wars'), 'Reading progress must be savable locally.');

check(html.includes('.kargil-chapter-nav[hidden]{display:none!important}'), 'The Kargil chapter bar must be fully hidden on unrelated routes such as Academy.');
check(app.includes('function findWarStudyForAtlasOperation('), 'Operations Atlas is missing cross-links to relevant first-party war studies.');
check(app.includes('data-related-study'), 'Linked operation dossiers must identify their expanded on-site study action.');
const directListenerIds = [...app.matchAll(/listen\(['"]#([\w-]+)['"],\s*['"]/g)].map((match) => match[1]);
check(directListenerIds.length >= 25, 'Core control bindings must use the guarded listener helper.');
for (const id of directListenerIds) { check(ids.includes(id), 'Event wiring targets missing element #' + id + '; this can break control setup.'); }
const staticExternalAnchors = [...html.matchAll(/<a\b[^>]*href=["']https?:/gi)];
check(staticExternalAnchors.length === 0, 'Static learning pages must not send readers to external websites.');
check(!app.includes('window.open(item.raw.url'), 'Choosing a search result must open its source note in-page, not a new website.');
check(!app.includes('Open original ↗'), 'The source library must not use outbound source-opening buttons.');
check(!app.includes('Further web research ↗'), 'Operation dossiers must not route readers away for the main explanation.');
check(!app.includes('Read source ↗') && !app.includes('Open source ↗'), 'War study and comparison citations must be displayed as in-page reference notes, not outbound links.');
check(!app.includes('Open image source and licence ↗'), 'Image credits and licence information must be readable without leaving the dossier.');
check(app.includes("id: 'atlas:' + operation.id"), 'Global search must index complete Operations Atlas dossiers.');
check(app.includes("id: 'study:' + study.id"), 'Global search must index first-party War Studies content.');
check(app.includes("item.id.indexOf('study:') === 0"), 'Selecting a War Studies search result must open the on-site study.');
check(app.includes("item.id.indexOf('campaign:') === 0"), 'Selecting a campaign search result must open its in-page study when available.');

const sourceRendererStart = app.indexOf('function renderSources()');
const sourceRendererEnd = app.indexOf('function renderQuizHome()', sourceRendererStart);
check(sourceRendererStart >= 0 && sourceRendererEnd > sourceRendererStart && !app.slice(sourceRendererStart, sourceRendererEnd).includes('<a href="'), 'Source register entries must be presented as local citation cards.');
check(app.includes("source-card-' + escapeHTML(s.id)"), 'Source cards need stable in-page targets so search can navigate to them.');

check(!/target=["']_blank["']/.test(app) && !app.includes('window.open(') && !app.includes('googleLink('), 'Application controls must not navigate to external research or search pages.');
check(/function renderSources\(\)[\s\S]*source-card-/.test(app), 'The on-site source register needs stable scroll targets for search results.');
const campaignDataStart = campaigns.indexOf('const CAMPAIGNS = [');
const atlasDataStart = campaigns.indexOf('const OPERATIONS_ATLAS = [');
const visualDataStart = campaigns.indexOf('const VISUAL_LIBRARY = [');
const quizDataStart = campaigns.indexOf('const QUIZ_QUESTIONS = [');
const campaignData = campaigns.slice(campaignDataStart, atlasDataStart);
const atlasData = campaigns.slice(atlasDataStart, visualDataStart >= 0 ? visualDataStart : quizDataStart);
const visualData = visualDataStart >= 0 ? campaigns.slice(visualDataStart, quizDataStart) : '';
const recordCount = (source) => (source.match(/^\s*id:\s*["']/gm) || []).length;
const campaignCount = recordCount(campaignData);
const operationCount = recordCount(atlasData);
const visualCount = recordCount(visualData);
const studyStart = read('war-studies.js').indexOf('const WAR_STUDIES = [');
const studyCount = (read('war-studies.js').slice(studyStart).match(/^\s*id:\s*["']/gm) || []).length;
check(campaignCount >= 20, `Campaign Library needs at least 20 researched entries; found ${campaignCount}.`);
check(operationCount >= 55, `Operations Atlas needs at least 55 documented dossiers; found ${operationCount}.`);
check(studyCount >= 18, `War Studies needs at least 18 in-page learning studies; found ${studyCount}.`);
check(visualCount >= 12, `Visual Library needs at least 12 cited exhibits; found ${visualCount}.`);
check(/data-view="history-lab"/.test(html) && /data-route="history-lab"/.test(html), 'History Lab route is missing.');
check(/data-view="visual-library"/.test(html) && /data-route="visual-library"/.test(html), 'Visual Library route is missing.');
for (const id of ['historyLabDataset', 'historyLabSummary', 'decadeChart', 'missionTypeChart', 'theatreChart', 'campaignTypeChart']) check(html.includes(`id="${id}"`), `Missing redesigned chart element #${id}.`);
check(/function\s+renderHistoryLab\s*\(/.test(app) && /function\s+renderResponsiveBarChart\s*\(/.test(app), 'History Lab chart rendering functions are missing.');
check(/function\s+renderVisualLibrary\s*\(/.test(app) && /VISUAL_LIBRARY/.test(app), 'Curated Visual Library renderer is missing.');
check(/aria-label="[^"]*(?:chart|graph|distribution|decade)[^"]*"/i.test(app), 'Generated charts need accessible labels.');
check(/sourceUrl:\s*"https:\/\/commons\.wikimedia\.org\/wiki\/File:/.test(visualData), 'Visual exhibits need explicit source/credit pages.');
check(/Operation Blue Star/.test(campaigns) && /goa-vijay-1961/.test(campaigns), 'Historical image-provenance audit anchors are missing.');
if (failures.length) { console.error(`Archive validation failed (${failures.length}):`); for (const failure of failures) console.error(` - ${failure}`); process.exitCode = 1; }
else { console.log(`Archive validation passed. ${ids.length} HTML IDs are unique; 7 routes, legacy routing, core controls and script order are present.`); }