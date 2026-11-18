/* ===== Área VIP · Puntero de contenido (accion=contenido) · v1 · 18/11/2026 =====
   Pegar al final del Apps Script «AREA VIP · Accesos (backend)» y añadir UNA línea
   al principio de doGet(e) (ver PASO 2 del manual).

   Lee la pestaña «CONTENIDO» de la hoja «AREA VIP · Accesos». Cada publicación añade
   una fila; manda la ÚLTIMA fila de esa edición y canal:
     A fecha | B edicion | C canal (prueba / publicada) | D version | E url | F nota | G autor
   Volver atrás = añadir una fila nueva con la url de la versión anterior.
   Responde {ok:true, edicion, canal, version, url} (o JSONP si llega ?callback=). */
function contenidoVip_(e) {
  var p = (e && e.parameter) || {};
  var edicion = String(p.edicion || '').toLowerCase();
  var canal = p.canal === 'prueba' ? 'prueba' : 'publicada';
  var res = { ok: false, error: 'sin_contenido' };
  if (/^fp\d{2,3}$/.test(edicion)) {
    var key = 'contenido_' + edicion + '_' + canal;
    var cache = CacheService.getScriptCache();
    var hit = cache.get(key);
    if (hit) {
      res = JSON.parse(hit);
    } else {
      var sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('CONTENIDO');
      if (sh && sh.getLastRow() > 1) {
        var rows = sh.getRange(2, 1, sh.getLastRow() - 1, 5).getValues();
        for (var i = rows.length - 1; i >= 0; i--) {
          var r = rows[i];
          if (String(r[1]).toLowerCase() === edicion && String(r[2]).toLowerCase() === canal &&
              /^https:\/\/files\.leadconnectorhq\.com\//.test(String(r[4]))) {
            res = { ok: true, edicion: edicion, canal: canal, version: Number(r[3]) || 0, url: String(r[4]) };
            break;
          }
        }
      }
      cache.put(key, JSON.stringify(res), 60); // como mucho 1 minuto de retraso al publicar
    }
  }
  var body = JSON.stringify(res);
  if (p.callback && /^[A-Za-z_$][\w$]*$/.test(p.callback)) {
    return ContentService.createTextOutput(p.callback + '(' + body + ')').setMimeType(ContentService.MimeType.JAVASCRIPT);
  }
  return ContentService.createTextOutput(body).setMimeType(ContentService.MimeType.JSON);
}
