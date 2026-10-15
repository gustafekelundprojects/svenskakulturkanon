// Skapar Instagram-inlägg (1080 × 1350) för Svenska Kulturkanon.
// Per vecka: ett inlägg "Veckans verk" (3 bilder) och två quizinlägg (fråga + svar).
// Körs: node instagram/render.mjs 43 44   (veckonummer, år 2026 som standard)
// Kräver: npm i playwright  (Chromium)
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '..');
globalThis.window = {};
await import(pathToFileURL(path.join(root, 'data/kanon.js')).href);
const K = globalThis.window.KANON;

const year = Number(process.env.AR || 2026);
const weeks = process.argv.slice(2).map(Number);
if (!weeks.length) { console.error('Ange veckonummer, t.ex. node instagram/render.mjs 43'); process.exit(1); }

const works = {};
K.AVSNITT.forEach(a => a[3].forEach(w => { works[w[0]] = { t: w[1], by: w[2], av: a[1] }; }));
const font = f => pathToFileURL(path.join(here, 'fonts', f)).href;
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

const CSS = `
@font-face{font-family:Corm;src:url("${font('CormorantGaramond[wght].ttf')}");font-weight:300 700}
@font-face{font-family:Corm;font-style:italic;src:url("${font('CormorantGaramond-Italic[wght].ttf')}");font-weight:300 700}
@font-face{font-family:EBG;src:url("${font('EBGaramond[wght].ttf')}");font-weight:400 800}
@font-face{font-family:EBG;font-style:italic;src:url("${font('EBGaramond-Italic[wght].ttf')}");font-weight:400 800}
*{box-sizing:border-box;margin:0}
html,body{width:1080px;height:1350px}
body{background:#F3F1ED;color:#1D2433;font-family:EBG,serif;font-variant-numeric:lining-nums;position:relative;overflow:hidden}
.label{font-family:EBG;font-weight:600;font-size:24px;letter-spacing:.2em;text-transform:uppercase;color:#1E3566}
.label i{font-weight:400;text-transform:none;letter-spacing:.02em;font-size:1.1em}
.copper{color:#B48D6B}
.foot{position:absolute;left:90px;right:90px;bottom:70px;display:flex;justify-content:space-between;align-items:center}
.brand{font-family:Corm;font-weight:500;font-size:30px;letter-spacing:.3em;text-transform:uppercase;color:#B48D6B}
.url{font-family:EBG;font-size:24px;color:#5D6270;letter-spacing:.04em}
.tab{position:absolute;left:-150px;top:-150px;width:420px;height:420px;border-radius:50%;background:#FBFAF7}
.tabn{position:absolute;left:70px;top:58px}
.tabn small{display:block;font-family:EBG;font-size:22px;letter-spacing:.3em;color:#5D6270}
.tabn b{display:block;font-family:Corm;font-weight:400;font-size:150px;line-height:.9;color:#1E3566}
`;

function page(body) { return `<!doctype html><html><head><meta charset="utf-8"><style>${CSS}</style></head><body>${body}</body></html>`; }

function titleCard(v, w) {
  const len = w.t.length, size = len > 28 ? 92 : len > 18 ? 112 : 132;
  return page(`<div class="tab"></div><div class="tabn"><small>NUMMER</small><b>${esc(v.nr)}</b></div>
  <div style="position:absolute;top:140px;right:90px" class="label">Veckans verk · <i>vecka</i> ${v.vecka}</div>
  <div style="position:absolute;left:90px;right:90px;top:470px;display:grid;gap:34px;text-align:center;justify-items:center">
    <h1 data-fit="420" style="width:900px;overflow-wrap:normal;font-family:Corm;font-weight:500;font-size:${size}px;line-height:1.02;text-transform:uppercase;color:#1E3566;letter-spacing:.02em">${esc(w.t)}</h1>
    <p style="font-size:34px;font-style:italic;color:#1D2433">av ${esc(w.by.replace(/,\s*\d{4}.*$/, ''))}</p>
    ${v.hook ? `<p class="label copper" style="font-size:28px;letter-spacing:.32em;max-width:820px;line-height:1.6">${esc(v.hook)}</p>` : ''}
  </div>
  <div class="foot"><span class="brand">Svenska Kulturkanon</span><span class="url">${esc(w.av)}</span></div>`);
}
function imageCard(v) {
  const img = pathToFileURL(path.join(root, 'images/verk', v.nr.replace('.', '-') + '.jpg')).href;
  return page(`<img src="${img}" style="position:absolute;inset:0;width:1080px;height:1350px;object-fit:cover">`);
}
function textCard(v, w) {
  const n = v.ingress.length, size = n > 560 ? 36 : n > 420 ? 40 : 44;
  return page(`<div style="position:absolute;left:90px;right:90px;top:120px;display:grid;gap:40px">
    <span class="label">Ur boken · <i>sidan</i> ${v.bokSida}–${v.bokSida + 1}</span>
    <h2 data-fit="160" style="width:900px;font-family:Corm;font-weight:500;font-size:64px;line-height:1.05;text-transform:uppercase;color:#1E3566">${esc(w.t)}</h2>
    <p style="font-size:${size}px;line-height:1.5">${esc(v.ingress)}</p>
  </div>
  <div class="foot"><span class="brand">Svenska Kulturkanon</span><span class="url">svenskakulturkanon.se</span></div>`);
}
function quizQ(q, i, v) {
  const len = q[0].length, size = len > 95 ? 58 : len > 70 ? 66 : 74;
  return page(`<div style="position:absolute;left:90px;right:90px;top:110px;display:grid;gap:46px">
    <div style="display:flex;justify-content:space-between"><span class="label">Kanonquiz · <i>svår nivå</i></span><span class="label copper">${i + 1} <i>av</i> 2</span></div>
    <p style="font-family:Corm;font-weight:500;font-size:${size}px;line-height:1.15;color:#1D2433">${esc(q[0])}</p>
    <div style="display:grid;gap:18px">${q[1].map((o, j) => `<div style="display:grid;grid-template-columns:64px 1fr;align-items:baseline;border:2px solid #DAD5CC;background:#FBFAF7;padding:22px 28px;font-size:38px"><b style="font-family:Corm;font-weight:600;font-size:44px;color:#8E6A48">${'ABCD'[j]}</b><span>${esc(o)}</span></div>`).join('')}</div>
  </div>
  <div class="foot"><span class="url">Svara i kommentarerna · svep för svaret</span><span class="brand" style="font-size:24px">Vecka ${v.vecka}</span></div>`);
}
function quizA(q) {
  return page(`<div style="position:absolute;left:90px;right:90px;top:150px;display:grid;gap:44px">
    <span class="label">Rätt svar</span>
    <div style="display:flex;align-items:baseline;gap:34px"><b style="font-family:Corm;font-weight:500;font-size:220px;line-height:.8;color:#B48D6B">${'ABCD'[q[2]]}</b><span data-fit="300" style="flex:1;min-width:0;font-family:Corm;font-weight:500;font-size:84px;line-height:1.05;color:#1E3566">${esc(q[1][q[2]])}</span></div>
    <p style="font-size:44px;line-height:1.45;border-left:4px solid #B48D6B;padding-left:34px">${esc(q[3])}</p>
  </div>
  <div class="foot"><span class="url">Hela quizet på svenskakulturkanon.se</span><span class="brand" style="font-size:24px">Kanonquiz</span></div>`);
}
function tags(w) {
  const base = ['#svenskakulturkanon', '#kulturkanon', '#kulturarv', '#svenskhistoria', '#coffeetablebook', '#bokstagram'];
  const extra = { 'Film & scenkonst': ['#svenskfilm', '#scenkonst'], 'Musik': ['#svenskmusik', '#klassiskmusik'], 'Bild & form': ['#svenskkonst', '#konst'], 'Uppfinningar': ['#svenskauppfinningar', '#teknikhistoria'], 'Ekonomi': ['#ekonomihistoria'], 'Litteratur – prosa': ['#svenskalitteratur'], 'Litteratur – dikter': ['#poesi', '#svenskpoesi'] }[w.av] || [];
  return base.concat(extra).join(' ');
}

const browser = await chromium.launch(process.env.CHROMIUM ? { executablePath: process.env.CHROMIUM } : {});
const pg = await browser.newPage({ viewport: { width: 1080, height: 1350 } });
const tmp = path.join(here, '.render.html');
async function shot(html, file) {
  fs.writeFileSync(tmp, html);
  await pg.goto(pathToFileURL(tmp).href, { waitUntil: 'load' });
  await pg.evaluate(async () => {
    await document.fonts.ready;
    document.querySelectorAll('[data-fit]').forEach(el => {
      let s = parseFloat(getComputedStyle(el).fontSize);
      while ((el.scrollWidth > el.clientWidth || el.scrollHeight > Number(el.dataset.fit)) && s > 40) { s -= 2; el.style.fontSize = s + 'px'; }
    });
  });
  await pg.screenshot({ path: file, type: 'png' });
}

for (const wk of weeks) {
  const v = K.VECKOR.find(x => x.vecka === wk && x.ar === year);
  if (!v) { console.error(`Vecka ${wk} saknas i data/kanon.js`); continue; }
  const w = works[v.nr];
  const dir = path.join(here, `vecka-${wk}`); fs.mkdirSync(dir, { recursive: true });
  await shot(titleCard(v, w), path.join(dir, '1-veckans-verk-a.png'));
  await shot(imageCard(v), path.join(dir, '1-veckans-verk-b.png'));
  await shot(textCard(v, w), path.join(dir, '1-veckans-verk-c.png'));
  const qs = v.quiz.map(s => K.QUIZ.find(q => q[0].includes(s))).filter(Boolean);
  for (let i = 0; i < qs.length; i++) {
    await shot(quizQ(qs[i], i, v), path.join(dir, `${i + 2}-quiz-${i + 1}-fraga.png`));
    await shot(quizA(qs[i]), path.join(dir, `${i + 2}-quiz-${i + 1}-svar.png`));
  }
  const first = v.ingress.split(/(?<=\.)\s/)[0];
  const md = `# Instagram vecka ${wk}, ${year}

## Måndag – Veckans verk (karusell: 1-veckans-verk-a, b, c)

Veckans verk: ${w.t}${v.hook ? ` – ${v.hook.toLowerCase()}` : ''}

${first}

Nummer ${v.nr} i Svenska Kulturkanon, sidan ${v.bokSida}–${v.bokSida + 1}. Läs mer och beställ boken via länken i bion.

Bild: ${v.credit}

${tags(w)}

${qs.map((q, i) => `## ${i === 0 ? 'Onsdag' : 'Fredag'} – Kanonquiz ${i + 1} (karusell: ${i + 2}-quiz-${i + 1}-fraga, svar)

Kanonquiz, svår nivå: ${q[0]}

A ${q[1][0]} · B ${q[1][1]} · C ${q[1][2]} · D ${q[1][3]}

Skriv ditt svar i kommentarerna och svep för facit. Tio nya frågor varje gång på svenskakulturkanon.se.

#kanonquiz #svenskakulturkanon #kulturkanon #quiz #allmänbildning
`).join('\n')}`;
  fs.writeFileSync(path.join(dir, 'texter.md'), md);
  console.log(`Vecka ${wk}: ${w.t} + ${qs.length} quiz`);
}
fs.rmSync(tmp, { force: true });
await browser.close();
