// Bygger egna sidor för svenskakulturkanon.se från index.html (mallen) och data/kanon.js.
// Körs: node build.mjs   – skriver om-boken.html, verken.html, verken-<avsnitt>.html, …,
// 404.html, sitemap.xml och QR-reglerna i vercel.json.
// Ändra alltid i index.html eller data/kanon.js och kör sedan om skriptet.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const SITE = 'https://svenskakulturkanon.se';
globalThis.window = {};
await import(pathToFileURL(path.join(root, 'kanon.js')).href);
const K = globalThis.window.KANON;
const tpl = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const order = ['Litteratur – prosa', 'Litteratur – dikter', 'Bild & form', 'Musik', 'Film & scenkonst', 'Lärdom & sakprosa', 'Lag & rätt', 'Religion', 'Ekonomi', 'Uppfinningar', 'Offentlighet'];
const roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
const AV = K.AVSNITT.slice().sort((a, b) => order.indexOf(a[1]) - order.indexOf(b[1]));
const slugOf = a => K.KAPITEL[a[1]].slug;
const count = a => a[1] === 'Litteratur – dikter' ? 'Verk nummer 10: en antologi med tio dikter.' : a[3].length + ' verk.';

const BASE_DESC = 'Svenska Kulturkanon – 100 verk som skapade Sverige. En coffee table-bok om hela den svenska kulturkanonen, ett verk per uppslag.';
const pages = [
  { file: 'om-boken.html', path: '/om-boken', id: 'om', title: 'Om boken', desc: 'Bakgrunden till den svenska kulturkanonen, utredningen SOU 2025:92 och hur boken Svenska Kulturkanon är gjord.' },
  { file: 'verken.html', path: '/verken', id: 'verken', title: 'Verken', desc: 'Alla 100 verk i den svenska kulturkanonen, i elva avsnitt från prosa och poesi till lagar, uppfinningar och offentliga rum.' },
  { file: 'veckans-verk.html', path: '/veckans-verk', id: 'veckans', title: 'Veckans verk', desc: 'Ett verk ur Svenska Kulturkanon i veckan – med text ur boken och nya inlägg på Instagram.' },
  { file: 'quiz.html', path: '/quiz', id: 'quiz', title: 'Kanonquiz', desc: 'Tio slumpade frågor på svår nivå om verken i den svenska kulturkanonen. Hur väl känner du kanon?' },
  { file: 'bestall.html', path: '/bestall', id: 'bestall', title: 'Beställ boken', desc: 'Beställ Svenska Kulturkanon – inbunden, 272 sidor, 240 × 300 mm. Första upplagan levereras i december 2026.' },
  { file: 'foretagsgava.html', path: '/foretagsgava', id: 'foretag', title: 'Företagsgåva', desc: 'Svenska Kulturkanon som gåva till kunder, medarbetare och internationella gäster. Rabatt från 25 exemplar och tryckt hälsning.' },
  { file: 'press.html', path: '/press', id: 'press', title: 'Press och handel', desc: 'Pressmaterial och information för återförsäljare om Svenska Kulturkanon.' },
  { file: 'kontakt.html', path: '/kontakt', id: 'kontakt', title: 'Kontakt', desc: 'Kontakta Kaffeförlaget AB om boken Svenska Kulturkanon.' },
  { file: 'rattelser.html', path: '/rattelser', id: 'rattelser', title: 'Rättelser', desc: 'Rättelser till boken Svenska Kulturkanon.' },
  { file: 'kopvillkor.html', path: '/kopvillkor', id: 'villkor', title: 'Köpvillkor', desc: 'Köpvillkor för beställningar på svenskakulturkanon.se.' },
  { file: 'integritet.html', path: '/integritet', id: 'integritet', title: 'Integritetspolicy', desc: 'Så hanterar Kaffeförlaget AB personuppgifter på svenskakulturkanon.se.' },
  { file: '404.html', path: '/404', id: 'saknas', title: 'Sidan finns inte', desc: BASE_DESC, noindex: true },
];

function kapitelHtml(a, i) {
  const kap = K.KAPITEL[a[1]];
  const pv = AV[(i + AV.length - 1) % AV.length], nx = AV[(i + 1) % AV.length];
  return {
    crumb: esc(a[1]),
    label: `Avsnitt ${roman[i]} · <i>${count(a).replace('.', '')}</i>`,
    title: esc(a[1]),
    lede: esc(a[2]),
    intro: kap.text.map(t => `<p>${esc(t)}</p>`).join(''),
    list: a[3].map(w => {
      const b = K.BESKRIVNING[w[0]] || {};
      return `<li id="verk-${w[0].replace('.', '-')}"><span class="n"><small>NUMMER</small>${esc(w[0])}</span><span class="hitlabel">Du skannade det här verket</span><h3>${esc(w[1])}</h3>${w[2] ? `<span class="by">${esc(w[2])}</span>` : ''}${b.text ? `<p>${esc(b.text)}</p>` : ''}${b.sida ? `<span class="sida">Sidan ${b.sida} i boken</span>` : ''}</li>`;
    }).join(''),
    prev: [`/verken-${slugOf(pv)}`, `← ${esc(pv[1])}`],
    next: [`/verken-${slugOf(nx)}`, `${esc(nx[1])} →`],
  };
}
AV.forEach((a, i) => {
  const kap = K.KAPITEL[a[1]];
  pages.push({ file: `verken-${kap.slug}.html`, path: `/verken-${kap.slug}`, id: 'kapitel', nav: '/verken', title: a[1],
    desc: `${a[1]} i Svenska Kulturkanon: ${a[2]} ${a[3].map(w => w[1]).slice(0, 4).join(', ')} med flera.`, kapitel: kapitelHtml(a, i) });
});

function build(pg) {
  let h = tpl;
  const full = pg.id === 'start' ? 'Svenska Kulturkanon – 100 verk som skapade Sverige' : `${pg.title} · Svenska Kulturkanon`;
  const url = SITE + (pg.path === '/' ? '/' : pg.path);
  const sub = (re, val) => { if (!re.test(h)) throw new Error('Hittar inte ' + re + ' i mallen'); h = h.replace(re, val); };
  sub(/<title>[^<]*<\/title>/, `<title>${esc(full)}</title>`);
  sub(/<meta name="description" content="[^"]*">/, `<meta name="description" content="${esc(pg.desc)}">${pg.noindex ? '\n<meta name="robots" content="noindex">' : ''}`);
  sub(/<meta property="og:title" content="[^"]*">/, `<meta property="og:title" content="${esc(full)}">`);
  sub(/<meta property="og:description" content="[^"]*">/, `<meta property="og:description" content="${esc(pg.desc)}">`);
  const OG = { start: 'bokhylla', om: 'gustaviansk', verken: 'soffbord', kapitel: 'soffbord', bestall: 'lasning', foretag: 'julklapp', veckans: 'lasning', quiz: 'bokhylla' };
  sub(/<meta property="og:image" content="[^"]*">/, `<meta property="og:image" content="${SITE}/${OG[pg.id] ? 'miljo-' + OG[pg.id] + '-dela.jpg' : 'images/omslag.jpg'}">`);
  sub(/<link rel="canonical" href="[^"]*">/, `<link rel="canonical" href="${url}">`);
  sub(/<meta property="og:url" content="[^"]*">/, `<meta property="og:url" content="${url}">`);
  // visa rätt sektion utan JavaScript
  h = h.replace(/<section class="(page[^"]*)" id="([^"]+)"( data-part="([^"]+)")?( hidden)?>/g, (m, cls, id, dp, part) => {
    const key = part || id;
    return `<section class="${cls}" id="${id}"${dp || ''}${key === pg.id ? '' : ' hidden'}>`;
  });
  h = h.replace(/<div class="band"( hidden)?/, pg.id === 'start' ? '<div class="band"' : '<div class="band" hidden');
  h = h.replace(/<body([^>]*?)( data-page="[^"]*")?>/, `<body$1 data-page="${pg.id}">`);
  const navKey = pg.nav || pg.path;
  h = h.replace(/(<nav class="main"[\s\S]*?<\/nav>)/, nav => nav.replace(/ aria-current="page"/g, '').replace(`href="${navKey}"`, `href="${navKey}" aria-current="page"`));
  if (pg.kapitel) {
    const k = pg.kapitel;
    const put = (id, html) => sub(new RegExp(`(<[a-z0-9]+[^>]*id="${id}"[^>]*>)[\\s\\S]*?(</(?:span|h2|p|div|ol)>)`), `$1${html}$2`);
    put('k-crumb', k.crumb); put('k-label', k.label); put('k-title', k.title); put('k-lede', k.lede); put('k-intro', k.intro); put('k-list', k.list);
    sub(/<a id="k-prev" href="[^"]*"><\/a>/, `<a id="k-prev" href="${k.prev[0]}">${k.prev[1]}</a>`);
    sub(/<a id="k-next" href="[^"]*"><\/a>/, `<a id="k-next" href="${k.next[0]}">${k.next[1]}</a>`);
  }
  const out = path.join(root, pg.file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, h);
}
pages.forEach(build);

// startsidan skrivs sist, till mallen själv (ändrar bara titel, metadata och synlighet)
build({ file: 'index.html', path: '/', id: 'start', title: 'Svenska Kulturkanon', desc: BASE_DESC });

// sitemap
const urls = ['/', ...pages.filter(p => !p.noindex).map(p => p.path)];
fs.writeFileSync(path.join(root, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `  <url><loc>${SITE}${u}</loc></url>`).join('\n')}\n</urlset>\n`);
fs.writeFileSync(path.join(root, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);

// vercel.json: QR- och verkadresser pekar på rätt avsnittssida
const vpath = path.join(root, 'vercel.json');
const vj = JSON.parse(fs.readFileSync(vpath, 'utf8'));
const special = new Set((vj.redirects || []).filter(r => r.source.startsWith('/qr/')).map(r => r.source));
vj.rewrites = [];
vj.redirects = (vj.redirects || []).filter(r => !r.source.startsWith('/verken/'));
AV.forEach(a => vj.redirects.push({ source: `/verken/${slugOf(a)}`, destination: `/verken-${slugOf(a)}`, permanent: false }));
AV.forEach(a => a[3].forEach(w => {
  const nr = w[0].replace(".", "-"), dest = `/verken-${slugOf(a)}`;
  if (!special.has(`/qr/${nr}`)) vj.rewrites.push({ source: `/qr/${nr}`, destination: dest });
  vj.rewrites.push({ source: `/verk/${nr}`, destination: dest });
  if (w[0].includes('.')) vj.rewrites.push({ source: `/verk/${w[0]}`, destination: dest });
}));
fs.writeFileSync(vpath, JSON.stringify(vj, null, 2) + '\n');
console.log(`${pages.length} sidor, ${urls.length} adresser i sitemap, ${vj.rewrites.length} QR/verk-regler`);
