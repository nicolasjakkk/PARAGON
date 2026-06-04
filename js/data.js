/* ═══════════════════════════════════════
   PARAGON — Deck logic
   ═══════════════════════════════════════ */

/* ── TAB NAVIGATION ── */
function initTabs(navId, sectionClass) {
  const btns = document.querySelectorAll(`#${navId} .tab-btn`);
  const secs = document.querySelectorAll(`.${sectionClass}`);
  btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      secs.forEach(s => s.classList.remove('active'));
      btn.classList.add('active');
      secs[i].classList.add('active');
    });
  });
}

/* ── SECTION: PROBLEM ── */
function renderProblem() {
  const el = document.getElementById('problem-metrics');
  if (!el) return;
  el.innerHTML = DATA.problem.metrics.map(m => `
    <div class="card">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:38px;font-weight:700;color:${m.color};line-height:1;margin-bottom:6px;">${m.num}</div>
      <div style="font-size:13px;font-weight:500;margin-bottom:5px;">${m.title}</div>
      <div style="font-size:12px;color:var(--gray-500);line-height:1.6;">${m.desc}</div>
    </div>`).join('');

  const sym = document.getElementById('problem-symptoms');
  if (sym) sym.innerHTML = DATA.problem.symptoms.map(s => `
    <div style="padding:1rem;background:var(--gray-100);border-left:3px solid var(--blue);">
      <div style="font-size:12px;font-weight:500;margin-bottom:3px;">${s.title}</div>
      <div style="font-size:12px;color:var(--gray-500);">${s.desc}</div>
    </div>`).join('');
}

/* ── SECTION: MODULES ── */
let selectedModule = 0;
function renderModules() {
  const grid = document.getElementById('mod-grid');
  const detail = document.getElementById('mod-detail');
  if (!grid || !detail) return;

  grid.innerHTML = DATA.modules.map((m, i) => `
    <div class="card mod-card ${i === 0 ? 'selected' : ''}" onclick="selectModule(${i})" style="cursor:pointer;">
      <div style="font-size:20px;color:${m.color};margin-bottom:6px;"><i class="ti ${m.icon}"></i></div>
      <div style="font-size:12px;font-weight:500;margin-bottom:3px;">${m.name}</div>
      <span class="chip" style="background:${m.bg};color:${m.color};font-size:10px;">${m.tag}</span>
    </div>`).join('');

  selectModule(0);
}

function selectModule(idx) {
  selectedModule = idx;
  document.querySelectorAll('.mod-card').forEach((c, i) => {
    c.classList.toggle('selected', i === idx);
    c.style.borderColor = i === idx ? 'var(--blue-mid)' : 'var(--gray-200)';
    c.style.background  = i === idx ? 'var(--gray-50)'  : 'var(--white)';
  });
  const m = DATA.modules[idx];
  document.getElementById('mod-detail').innerHTML = `
    <div class="card" style="height:100%;">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid var(--gray-200);">
        <div style="width:40px;height:40px;border-radius:10px;background:${m.bg};display:flex;align-items:center;justify-content:center;font-size:20px;color:${m.color};flex-shrink:0;">
          <i class="ti ${m.icon}"></i>
        </div>
        <div>
          <div style="font-size:14px;font-weight:500;">${m.name}</div>
          <div style="font-size:12px;color:var(--gray-500);margin-top:2px;">${m.desc}</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:8px;">
        ${m.feats.map(f => `
          <div style="display:flex;align-items:flex-start;gap:8px;padding:9px 11px;background:var(--gray-100);border-radius:8px;">
            <i class="ti ${f.icon}" style="font-size:15px;color:${m.color};flex-shrink:0;margin-top:1px;"></i>
            <div>
              <div style="font-size:12px;font-weight:500;">${f.title}</div>
              <div style="font-size:11px;color:var(--gray-500);margin-top:1px;line-height:1.4;">${f.desc}</div>
            </div>
          </div>`).join('')}
      </div>
    </div>`;
}

/* ── SECTION: ROLES ── */
function renderRoles() {
  const grid = document.getElementById('roles-grid');
  if (!grid) return;
  grid.innerHTML = DATA.roles.map((r, i) => `
    <div class="role-card ${i === 0 ? 'selected' : ''}" onclick="selectRole(${i})"
      style="background:var(--white);border:1px solid var(--gray-200);border-radius:var(--radius-lg);padding:1rem;cursor:pointer;transition:background .12s;">
      <div style="width:34px;height:34px;border-radius:8px;background:${r.iconBg};display:flex;align-items:center;justify-content:center;font-size:17px;color:${r.iconColor};margin-bottom:8px;">
        <i class="ti ${r.icon}"></i>
      </div>
      <div style="font-size:12px;font-weight:500;margin-bottom:2px;">${r.name}</div>
      <div style="font-size:11px;color:var(--gray-500);line-height:1.4;">${r.goal}</div>
      <span class="chip" style="background:${r.levelBg};color:${r.levelColor};margin-top:6px;">${r.level}</span>
    </div>`).join('');
  selectRole(0);
}

function selectRole(idx) {
  document.querySelectorAll('.role-card').forEach((c, i) => {
    c.classList.toggle('selected', i === idx);
    c.style.background = i === idx ? 'var(--gray-50)' : 'var(--white)';
  });
  const r = DATA.roles[idx];
  const chips = r.modules.map((m, i) => {
    const on = r.access[i];
    return `<span class="chip" style="background:${on ? r.levelBg : 'var(--gray-100)'};color:${on ? r.levelColor : 'var(--gray-500)'};border:1px solid ${on ? 'transparent' : 'var(--gray-200)'};">
      ${on ? '<i class="ti ti-check" style="font-size:10px;margin-right:2px;"></i>' : ''}${m}</span>`;
  }).join('');

  document.getElementById('role-detail').innerHTML = `
    <div class="card">
      <div style="display:flex;align-items:center;gap:12px;margin-bottom:1rem;padding-bottom:1rem;border-bottom:1px solid var(--gray-200);">
        <div style="width:44px;height:44px;border-radius:10px;background:${r.iconBg};display:flex;align-items:center;justify-content:center;font-size:22px;color:${r.iconColor};flex-shrink:0;">
          <i class="ti ${r.icon}"></i>
        </div>
        <div>
          <div style="font-size:14px;font-weight:500;">${r.name}</div>
          <div style="font-size:12px;color:var(--gray-500);">${r.goal}</div>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(175px,1fr));gap:8px;margin-bottom:1rem;">
        ${r.perms.map((p, i) => `
          <div style="display:flex;align-items:flex-start;gap:8px;padding:8px 10px;background:var(--gray-100);border-radius:8px;">
            <i class="ti ${r.permIcons[i]}" style="font-size:14px;color:${r.iconColor};flex-shrink:0;margin-top:1px;"></i>
            <span style="font-size:12px;color:var(--gray-500);">${p}</span>
          </div>`).join('')}
      </div>
      <div>
        <div class="label" style="margin-bottom:6px;">Acceso a módulos</div>
        <div style="display:flex;flex-wrap:wrap;gap:6px;">${chips}</div>
      </div>
    </div>`;
}

/* ── SECTION: FLOW ── */
function renderFlow() {
  const steps = document.getElementById('flow-steps');
  if (steps) steps.innerHTML = DATA.flow.steps.map(s => `
    <div style="background:var(--white);border:1px solid var(--gray-200);padding:1.1rem;flex:1;min-width:120px;">
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:32px;font-weight:700;color:${s.numColor};line-height:1;margin-bottom:5px;">${s.num}</div>
      <div style="font-size:12px;font-weight:500;text-transform:uppercase;letter-spacing:.04em;margin-bottom:4px;">${s.title}</div>
      <div style="font-size:11px;color:var(--gray-500);line-height:1.5;margin-bottom:8px;">${s.desc}</div>
      <span class="chip" style="background:${s.whoBg};color:${s.whoColor};font-size:10px;">${s.who}</span>
    </div>`).join('');

  const rules = document.getElementById('flow-rules');
  if (rules) rules.innerHTML = DATA.flow.rules.map(r => `
    <div style="display:flex;align-items:flex-start;gap:10px;padding:10px 12px;background:var(--gray-100);border-radius:8px;">
      <i class="ti ${r.icon}" style="font-size:16px;color:var(--blue);flex-shrink:0;margin-top:1px;"></i>
      <div>
        <div style="font-size:12px;font-weight:500;margin-bottom:2px;">${r.title}</div>
        <div style="font-size:11px;color:var(--gray-500);line-height:1.4;">${r.desc}</div>
      </div>
    </div>`).join('');
}

/* ── SECTION: GANTT ── */
function renderGantt() {
  const root = document.getElementById('gantt-root');
  if (!root) return;
  const W = DATA.gantt.weeks;
  const LW = 160;

  let h = `<div style="display:grid;grid-template-columns:${LW}px repeat(${W},1fr);margin-bottom:5px;min-width:480px;">
    <div></div>`;
  for (let w = 1; w <= W; w++)
    h += `<div style="font-size:10px;text-align:center;color:var(--gray-500);font-weight:500;padding:2px 0;">S${w}</div>`;
  h += '</div>';

  DATA.gantt.phases.forEach(phase => {
    const phaseStart = phase.rows[0].start;
    const phaseEnd   = phase.rows[phase.rows.length - 1].start + phase.rows[phase.rows.length - 1].dur;
    h += `<div style="display:grid;grid-template-columns:${LW}px repeat(${W},1fr);align-items:center;margin-top:10px;margin-bottom:3px;min-width:480px;">
      <div style="font-size:10px;font-weight:500;text-transform:uppercase;letter-spacing:.07em;color:var(--gray-500);">${phase.label}</div>`;
    for (let w = 0; w < W; w++) {
      const inP = w >= phaseStart && w < phaseEnd;
      h += `<div style="height:2px;background:${inP ? phase.color : 'var(--gray-200)'};"></div>`;
    }
    h += '</div>';

    phase.rows.forEach(row => {
      const rowColor = row.color || phase.color;
      h += `<div style="display:grid;grid-template-columns:${LW}px repeat(${W},1fr);align-items:center;margin-bottom:3px;min-width:480px;">
        <div style="padding-right:8px;">
          <div style="font-size:12px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${row.name}</div>
          <div style="font-size:10px;color:var(--gray-500);">${row.sub}</div>
        </div>`;
      for (let w = 0; w < W; w++) {
        const active = w >= row.start && w < row.start + row.dur;
        const isFirst = w === row.start;
        const isLast  = w === row.start + row.dur - 1;
        const br = `border-radius:${isFirst ? '4px' : '0'} ${isLast ? '4px' : '0'} ${isLast ? '4px' : '0'} ${isFirst ? '4px' : '0'}`;
        h += active
          ? `<div style="height:26px;background:${rowColor};${br};margin:0 1px;"></div>`
          : `<div style="height:26px;background:var(--gray-100);border-radius:3px;margin:0 1px;"></div>`;
      }
      h += '</div>';
    });
  });

  root.innerHTML = h;
}

/* ── SECTION: ROADMAP ── */
function renderRoadmap() {
  const el = document.getElementById('roadmap-phases');
  if (!el) return;
  el.innerHTML = DATA.roadmap.map(phase => `
    <div class="card">
      <div style="margin-bottom:.75rem;padding-bottom:.75rem;border-bottom:1px solid var(--gray-200);">
        <div style="font-size:10px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;color:${phase.labelColor};margin-bottom:3px;">${phase.label}</div>
        <div style="font-family:'Barlow Condensed',sans-serif;font-size:18px;font-weight:700;text-transform:uppercase;">${phase.title}</div>
      </div>
      <div style="display:flex;flex-direction:column;gap:6px;">
        ${phase.milestones.map((m, i) => `
          <div style="display:flex;align-items:center;gap:8px;padding:7px 10px;background:var(--gray-100);border-radius:8px;">
            <div style="width:8px;height:8px;border-radius:50%;background:${phase.dots[i]};flex-shrink:0;"></div>
            <div style="font-size:12px;color:var(--gray-700);flex:1;">${m.text}</div>
            <span class="chip" style="background:${phase.tagBg};color:${phase.tagColor};white-space:nowrap;">${m.tag}</span>
          </div>`).join('')}
      </div>
    </div>`).join('');
}

/* ── SECTION: PRICING ── */
function renderPricing() {
  const plans = document.getElementById('pricing-plans');
  if (plans) plans.innerHTML = DATA.pricing.plans.map(p => `
    <div class="card" style="position:relative;${p.featured ? 'border:2px solid var(--blue-mid);' : ''}">
      ${p.featured ? `<div style="position:absolute;top:-11px;left:50%;transform:translateX(-50%);font-size:10px;font-weight:500;padding:2px 10px;border-radius:20px;background:var(--blue-light);color:var(--blue-dark);white-space:nowrap;">Más vendido</div>` : ''}
      <div style="font-size:13px;font-weight:500;margin-bottom:2px;">${p.name}</div>
      <div style="font-size:11px;color:var(--gray-500);margin-bottom:.75rem;padding-bottom:.75rem;border-bottom:1px solid var(--gray-200);">${p.target}</div>
      <div style="font-family:'Barlow Condensed',sans-serif;font-size:28px;font-weight:700;color:${p.color};line-height:1;margin-bottom:2px;">USD ${p.price.toLocaleString()}<span style="font-size:13px;font-weight:400;color:var(--gray-500);">/mes</span></div>
      <div style="font-size:11px;color:var(--gray-500);margin-bottom:.75rem;">${p.users}</div>
      <div style="display:flex;flex-direction:column;gap:5px;margin-bottom:.75rem;">
        ${p.includes.map(f => `<div style="display:flex;align-items:flex-start;gap:6px;font-size:11px;color:var(--gray-500);"><i class="ti ti-check" style="font-size:13px;color:var(--green);flex-shrink:0;margin-top:1px;"></i>${f}</div>`).join('')}
        ${p.excludes.map(f => `<div style="display:flex;align-items:flex-start;gap:6px;font-size:11px;color:var(--gray-300);"><i class="ti ti-minus" style="font-size:13px;flex-shrink:0;margin-top:1px;"></i>${f}</div>`).join('')}
      </div>
      <div style="font-size:11px;font-weight:500;padding:4px 8px;border-radius:6px;text-align:center;background:${p.marginBg};color:${p.marginColor};">${p.margin}</div>
      <div style="font-size:10px;color:var(--gray-500);margin-top:5px;text-align:center;">${p.note}</div>
    </div>`).join('');

  buildProjTable();
  recalcProj();
}

function recalcProj() {
  const n1 = +document.getElementById('sl-s')?.value || 0;
  const n2 = +document.getElementById('sl-p')?.value || 0;
  const n3 = +document.getElementById('sl-e')?.value || 0;
  if (document.getElementById('v-s')) document.getElementById('v-s').textContent = n1;
  if (document.getElementById('v-p')) document.getElementById('v-p').textContent = n2;
  if (document.getElementById('v-e')) document.getElementById('v-e').textContent = n3;
  const [ps, pp, pe] = DATA.pricing.plans.map(p => p.price);
  const mrr  = n1 * ps + n2 * pp + n3 * pe;
  const cost = DATA.pricing.baseCost + Math.max(0, (n1 + n2 + n3 - 3) * 50);
  const mgn  = mrr - cost;
  const pct  = mrr > 0 ? Math.round(mgn / mrr * 100) : 0;
  const set  = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('proj-mrr',    'USD ' + mrr.toLocaleString());
  set('proj-arr',    'USD ' + (mrr * 12).toLocaleString());
  set('proj-cost',   'USD ' + cost.toLocaleString());
  set('proj-margin', 'USD ' + mgn.toLocaleString() + ' (' + pct + '%)');
}

function buildProjTable() {
  const tbody = document.getElementById('proj-tbody');
  if (!tbody) return;
  const [ps, pp, pe] = DATA.pricing.plans.map(p => p.price);
  const maxMRR = Math.max(...DATA.pricing.scenarios.map(s => s.s * ps + s.p * pp + s.e * pe));
  tbody.innerHTML = DATA.pricing.scenarios.map((s, i) => {
    const mrr  = s.s * ps + s.p * pp + s.e * pe;
    const cost = DATA.pricing.baseCost + Math.max(0, (s.s + s.p + s.e - 3) * 50);
    const pct  = mrr > 0 ? Math.round((mrr - cost) / mrr * 100) : 0;
    const bw   = Math.round(mrr / maxMRR * 70);
    return `<tr style="background:${i === 1 ? 'var(--gray-50)' : 'transparent'};">
      <td style="padding:7px 8px;border-bottom:1px solid var(--gray-200);font-weight:${i === 1 ? 500 : 400};">${s.label}</td>
      <td style="padding:7px 8px;border-bottom:1px solid var(--gray-200);color:var(--gray-500);">${s.s}S · ${s.p}P · ${s.e}E</td>
      <td style="padding:7px 8px;border-bottom:1px solid var(--gray-200);font-weight:500;">USD ${mrr.toLocaleString()}</td>
      <td style="padding:7px 8px;border-bottom:1px solid var(--gray-200);color:var(--blue);">USD ${(mrr * 12).toLocaleString()}</td>
      <td style="padding:7px 8px;border-bottom:1px solid var(--gray-200);color:var(--green);">${pct}%<div style="height:5px;border-radius:3px;background:var(--blue);width:${bw}px;margin-top:3px;"></div></td>
    </tr>`;
  }).join('');
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  renderProblem();
  renderModules();
  renderRoles();
  renderFlow();
  renderGantt();
  renderRoadmap();
  renderPricing();
});
