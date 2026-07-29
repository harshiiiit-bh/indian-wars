// ============ TAB SWITCHING ============
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// ============ CAUSES ACCORDION ============
document.querySelectorAll('.cause-q').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    const wasOpen = item.classList.contains('open');
    // keep single-open behavior optional; here allow multi-open, just toggle clicked
    item.classList.toggle('open');
  });
});

// ============ TIMELINE RENDER ============
const phaseLabels = {
  infiltration: "Infiltration",
  detection: "Detection",
  mobilization: "Mobilization",
  battles: "Key Battle",
  endgame: "Endgame"
};

function renderTimeline(filter) {
  const list = document.getElementById('timelineList');
  list.innerHTML = '';
  TIMELINE.forEach(ev => {
    const entry = document.createElement('div');
    entry.className = 'tl-entry';
    entry.dataset.phase = ev.phase;
    if (filter !== 'all' && ev.phase !== filter) entry.classList.add('hide');
    entry.innerHTML = `
      <span class="tl-date">${ev.date}</span><span class="tl-phase-tag">${phaseLabels[ev.phase]}</span>
      <div class="tl-text">${ev.text}</div>
    `;
    list.appendChild(entry);
  });
}
renderTimeline('all');

document.querySelectorAll('.tl-filter').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tl-filter').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    renderTimeline(btn.dataset.phase);
  });
});

// ============ SECTORS RENDER ============
const mapStrip = document.getElementById('sectorMapStrip');
const sectorTabs = document.getElementById('sectorTabs');
const sectorPanels = document.getElementById('sectorPanels');

SECTORS.forEach((s, i) => {
  // map strip node
  const node = document.createElement('div');
  node.className = 'mapnode' + (i === 0 ? ' active' : '');
  node.textContent = s.name;
  node.dataset.id = s.id;
  mapStrip.appendChild(node);
  if (i < SECTORS.length - 1) {
    const line = document.createElement('div');
    line.className = 'mapline';
    mapStrip.appendChild(line);
  }

  // tab button
  const tabBtn = document.createElement('button');
  tabBtn.className = 'sector-btn' + (i === 0 ? ' active' : '');
  tabBtn.textContent = s.name;
  tabBtn.dataset.id = s.id;
  sectorTabs.appendChild(tabBtn);

  // panel
  const panel = document.createElement('div');
  panel.className = 'sector-panel' + (i === 0 ? ' active' : '');
  panel.id = 'sector-' + s.id;
  panel.innerHTML = `
    <div class="panel">
      <h3 class="h">${s.name}</h3>
      <p class="body-text">${s.desc}</p>
      <ul class="peak-list">
        ${s.peaks.map(p => `<li><span class="h8 mono">${p.name}</span><span>${p.note}</span></li>`).join('')}
      </ul>
    </div>
  `;
  sectorPanels.appendChild(panel);
});

function selectSector(id) {
  document.querySelectorAll('.mapnode').forEach(n => n.classList.toggle('active', n.dataset.id === id));
  document.querySelectorAll('.sector-btn').forEach(n => n.classList.toggle('active', n.dataset.id === id));
  document.querySelectorAll('.sector-panel').forEach(n => n.classList.toggle('active', n.id === 'sector-' + id));
}
mapStrip.addEventListener('click', e => {
  const n = e.target.closest('.mapnode');
  if (n) selectSector(n.dataset.id);
});
sectorTabs.addEventListener('click', e => {
  const n = e.target.closest('.sector-btn');
  if (n) selectSector(n.dataset.id);
});

// ============ OPERATIONS RENDER ============
const opsList = document.getElementById('opsList');
const opIcons = {
  "Operation Safed Sagar": `<svg class="op-anim jet-svg" viewBox="0 0 70 40"><g class="body"><path d="M5,20 L45,17 L60,20 L45,23 Z" fill="#c99a3d"/><path d="M25,20 L15,10 L20,20 Z" fill="#c99a3d"/><path d="M25,20 L15,30 L20,20 Z" fill="#c99a3d"/><path d="M50,20 L58,14 L58,20 Z" fill="#c99a3d"/><path d="M50,20 L58,26 L58,20 Z" fill="#c99a3d"/></g></svg>`,
  "Operation Talwar": `<svg class="op-anim ship-svg" viewBox="0 0 70 40"><g class="hull"><path d="M10,26 L60,26 L54,33 L16,33 Z" fill="#4c7a8c"/><rect x="28" y="14" width="14" height="12" fill="#4c7a8c"/><line x1="35" y1="14" x2="35" y2="6" stroke="#4c7a8c" stroke-width="2"/></g><g class="wave"><path d="M0,33 Q10,29 20,33 T40,33 T60,33 T80,33" stroke="#3a4130" stroke-width="2" fill="none"/></g></svg>`
};
OPERATIONS.forEach(op => {
  const card = document.createElement('div');
  card.className = 'op-card' + (op.side === 'pak' ? ' pak' : '');
  const icon = opIcons[op.name] || '';
  card.innerHTML = `
    <div class="op-card-head">${icon}<div><h4>${op.name}</h4><div class="who">${op.who}</div></div></div>
    <p>${op.desc}</p>
  `;
  opsList.appendChild(card);
});

// ============ HIGHWAYS RENDER ============
const highwaysList = document.getElementById('highwaysList');
if (highwaysList) {
  HIGHWAYS.forEach(hw => {
    const item = document.createElement('div');
    item.className = 'hw-item';
    item.innerHTML = `<h4>${hw.name}</h4><div class="len">${hw.length}</div><p>${hw.desc}</p>`;
    highwaysList.appendChild(item);
  });
}

// ============ LEADERS RENDER ============
function renderLeaders(containerId, leaders) {
  const container = document.getElementById(containerId);
  leaders.forEach(l => {
    const div = document.createElement('div');
    div.className = 'leader';
    div.innerHTML = `<b>${l.name}</b><div class="role">${l.role}</div><p>${l.desc}</p>`;
    container.appendChild(div);
  });
}
renderLeaders('indiaLeaders', LEADERS_INDIA);
renderLeaders('pakLeaders', LEADERS_PAK);

// ============ HEROES RENDER ============
const heroesList = document.getElementById('heroesList');
const marchSvg = `<svg class="hero-card-icon marchfig" viewBox="0 0 24 24"><path d="M12,4 a2,2 0 1,0 0.1,0 M12,7 L12,15 M12,9 L7,12 M12,9 L18,7 M12,15 L8,22 M12,15 L16,21" stroke="#c99a3d" stroke-width="1.6" fill="none" stroke-linecap="round"/></svg>`;
if (heroesList) {
  HEROES.forEach(h => {
    const card = document.createElement('div');
    card.className = 'hero-card' + (h.name.includes('Pakistan') || h.name.includes('Nishan-e-Haider') ? ' pak' : '');
    card.innerHTML = `
      ${marchSvg}
      <h4>${h.name}</h4>
      <div class="unit">${h.unit}</div>
      <div class="theatre">${h.theatre}</div>
      <div class="hb"><div class="hb-label">Background</div><div class="hb-text">${h.bio}</div></div>
      <div class="hb"><div class="hb-label">The Action</div><div class="hb-text">${h.action}</div></div>
      <div class="hb"><div class="hb-label">Citation</div><div class="hb-text">${h.citation}</div></div>
      <div class="hb"><div class="hb-label">Legacy</div><div class="hb-text">${h.legacy}</div></div>
    `;
    heroesList.appendChild(card);
  });
}

// ============ REFORMS RENDER ============
const reformsList = document.getElementById('reformsList');
if (reformsList) {
  REFORMS.forEach(r => {
    const item = document.createElement('div');
    item.className = 'reform-item';
    item.innerHTML = `
      <div><div class="rt">${r.period}</div></div>
      <div><h4>${r.title}</h4><p>${r.desc}</p></div>
    `;
    reformsList.appendChild(item);
  });
}

// ============ STRATEGIC ANALYSIS RENDER ============
const badrComparison = document.getElementById('badrComparison');
if (badrComparison) {
  STRATEGIC_COMPARISON.forEach(c => {
    const row = document.createElement('div');
    row.className = 'badr-row';
    row.innerHTML = `
      <div class="yr">${c.year}</div>
      <div><h4>${c.label}</h4><p>${c.desc}</p></div>
    `;
    badrComparison.appendChild(row);
  });
}

const vulnFramework = document.getElementById('vulnFramework');
if (vulnFramework) {
  VULNERABILITY_FRAMEWORK.forEach(v => {
    const item = document.createElement('div');
    item.className = 'vuln-item';
    item.innerHTML = `<b>${v.pillar}</b><p>${v.desc}</p>`;
    vulnFramework.appendChild(item);
  });
}

// ============ SCROLL TO TOP ============
const totop = document.getElementById('totopBtn');
window.addEventListener('scroll', () => {
  totop.classList.toggle('show', window.scrollY > 500);
});
totop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
