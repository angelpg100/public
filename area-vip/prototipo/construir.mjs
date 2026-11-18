// Monta el prototipo con el contenido real (fp33.json) y las miniaturas incrustadas.
// Uso: node construir.mjs <thumbs.json> <logo.b64> <salida.html>
import fs from 'node:fs';
const [,, thumbs, logo, out, tpl = 'plantilla.html'] = process.argv;
const f = JSON.parse(fs.readFileSync(new URL('../fp33.json', import.meta.url)));
const pick = ({ fecha, short, wd, num, long, title, vip }) => ({ fecha, short, wd, num, long, title, vip });
const dias = {}; for (const i of [1, 2, 3, 4, 5]) dias[i] = pick(f.dias[i]);
const kit = {};
for (const i of [1, 2]) { kit[i] = {}; for (const s of ['clase', 'vip']) { const K = f.kit[i][s]; if (!K) continue;
  kit[i][s] = { dur: K.dur, videos: K.videos.map(({ kind, t, d }) => ({ kind, t, d })), ideas: K.ideas || [], nota: K.nota || [], quiz: K.quiz || [], enlaces: K.enlaces || [], descargas: K.descargas || [], checklist: K.checklist || [] }; } }
const j = o => JSON.stringify(o).replace(/<\//g, '<\\/');
let h = fs.readFileSync(new URL(tpl, import.meta.url), 'utf8');
h = h.replace('/*__DATA__*/null', j({ dias, kit })).replace('/*__THUMBS__*/null', fs.readFileSync(thumbs, 'utf8')).replace("/*__LOGO__*/''", JSON.stringify(fs.readFileSync(logo, 'utf8').trim()));
fs.writeFileSync(out, h); console.log('OK', out, Math.round(h.length / 1024), 'KB');
