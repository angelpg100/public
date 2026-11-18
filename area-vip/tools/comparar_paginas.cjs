// Comprueba que dos versiones de la página del Área VIP pintan lo mismo en todos los
// días, momentos y estilos (vista de equipo, sin red). Uso:
//   node comparar_paginas.cjs <a.html> <b.html> [contenido.json para servir como ?contenido=]
const { chromium } = require('playwright');
const fs = require('fs');
const [,, A, B, JSONF] = process.argv;
const ORIGIN = 'https://empieza.metapro.academy';
const JURL = 'https://files.leadconnectorhq.com/file/prueba/fp33.json';
async function estados(file, extraQ) {
  const browser = await chromium.launch();
  const out = {};
  const html = fs.readFileSync(file, 'utf8');
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await ctx.route('**/*', r => {
    const u = r.request().url();
    if (u.startsWith(ORIGIN + '/area-vip')) return r.fulfill({ contentType: 'text/html', body: html });
    if (JSONF && u === JURL) return r.fulfill({ contentType: 'application/json', body: fs.readFileSync(JSONF), headers: { 'access-control-allow-origin': '*' } });
    return r.abort();
  });
  const page = await ctx.newPage();
  const errs = []; page.on('pageerror', e => errs.push(String(e)));
  await page.clock.install({ time: new Date('2026-11-18T10:00:00+01:00') });
  await page.goto(ORIGIN + '/area-vip?revision=mp33equipo' + (extraQ || ''));
  for (const day of [1, 2, 3, 4, 5]) for (const ph of ['antes', 'directo', 'vip', 'despues']) for (const style of ['', 'activo', 'pragmatico']) {
    await page.evaluate(([d, p, s]) => { localStorage.setItem('pvDay', d); localStorage.setItem('pvPh', p); localStorage.setItem('vipTel', '+34600000000'); localStorage.setItem('vipStyle', s); }, [day, ph, style]);
    await page.reload();
    await page.waitForTimeout(150);
    for (const v of [1, 2, 3, 4, 5]) {
      await page.evaluate(v => setView(v), v);
      out[`d${day}-${ph}-${style || 'sin'}-v${v}`] = await page.evaluate(() => document.querySelector('#app').innerHTML + '|' + document.querySelector('#ticker').innerHTML.replace(/ style="--tkdur:[^"]*"/g, ''));
    }
  }
  await browser.close();
  return { out, errs };
}
(async () => {
  const a = await estados(A), b = await estados(B, JSONF ? '&contenido=' + encodeURIComponent(JURL) : '');
  let dif = 0;
  for (const k of Object.keys(a.out)) if (a.out[k] !== b.out[k]) { dif++; if (dif < 4) { const x = a.out[k], y = b.out[k]; let i = 0; while (x[i] === y[i]) i++; console.log('DIF', k, '\n A:', x.slice(i - 80, i + 120), '\n B:', y.slice(i - 80, i + 120)); } }
  console.log('estados comparados:', Object.keys(a.out).length, '· diferencias:', dif, '· errores JS A/B:', a.errs.length, b.errs.length);
  if (a.errs.length || b.errs.length) console.log(a.errs.slice(0, 3), b.errs.slice(0, 3));
  process.exit(dif || b.errs.length ? 1 : 0);
})();
