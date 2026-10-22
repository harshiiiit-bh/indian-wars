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
if (failures.length) { console.error(`Archive validation failed (${failures.length}):`); for (const failure of failures) console.error(` - ${failure}`); process.exitCode = 1; }
else { console.log(`Archive validation passed. ${ids.length} HTML IDs are unique; 7 routes, legacy routing, core controls and script order are present.`); }