// Extrae el contenido (DAYS, THUMB, SHOW_DAY6, KIT) del código antiguo de la página
// y lo deja como datos JSON. Uso: node extraer_contenido.mjs <pagina_antigua.html> <salida.json>
import fs from 'node:fs';
import vm from 'node:vm';
const [,, src, out] = process.argv;
const html = fs.readFileSync(src, 'utf8');
const js = html.slice(html.lastIndexOf('<script>') + 8, html.lastIndexOf('</script>'));
const start = js.indexOf('const SHOW_DAY6');
const end = js.indexOf('function apiJsonp');
let code = js.slice(start, end);
// quitamos lo que depende del navegador (solo nos interesan las constantes de contenido)
code = code.split('\n').filter(l => !/^(if\(PREVIEW\)|clock\(\);|S\.view=|if\(S\.tel\))/.test(l)).join('\n');
const ctx = { location: { search: '' }, URLSearchParams, localStorage: { getItem: () => '' } };
vm.createContext(ctx);
vm.runInContext(`const LS={get(){return ''}};const S={};` + code.replace(/^const (BRAIN_URL|SEC|API|LS|S)\b.*$/mg, '') +
  `;globalThis.__out={SHOW_DAY6,THUMB,DAYS,KIT};`, ctx);
const o = ctx.__out;
const fecha = n => `2026-11-${String(n).padStart(2, '0')}`;
const dias = {};
for (const [k, d] of Object.entries(o.DAYS)) dias[k] = { fecha: fecha(d.num), ...d };
const data = {
  formato: 1,
  edicion: 'fp33',
  version: 1,
  publicado: new Date().toISOString(),
  nota: 'Extraído del código de la página publicada (Días 1 y 2).',
  mostrarDia6: o.SHOW_DAY6,
  miniaturas: o.THUMB,
  dias,
  kit: o.KIT,
};
fs.writeFileSync(out, JSON.stringify(data, null, 1) + '\n');
console.log('OK', out, Object.keys(dias).length, 'días,', Object.keys(o.KIT).length, 'kits');
