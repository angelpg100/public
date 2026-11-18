/* ===== Contenido del Área VIP (separado de la página · v1 · 18/11/2026) =====
   La página es fija. El contenido de cada día (fechas, enlaces, miniaturas y kit)
   vive en un archivo JSON en el almacenamiento de GHL. El backend de accesos dice
   qué versión está vigente (accion=contenido) y la página la carga.
   Orden: 1) copia incluida aquí  2) última versión guardada en este navegador
          3) versión vigente del servidor (sustituye a las anteriores).
   Vista de equipo: lee el canal «prueba»; admite ?contenido=<url> para probar un archivo. */
const EDICION='fp33';
const CONTENIDO_BASE=/*__CONTENIDO_BASE__*/null;
let CONTENIDO_VER=0, CONTENIDO_URL='';
function contenidoValido(c){ return !!(c&&c.formato===1&&c.edicion===EDICION&&c.dias&&c.dias[1]&&c.kit&&c.miniaturas); }
function aplicarContenido(c,url){
  if(!contenidoValido(c)) return false;
  [DAYS,THUMB,KIT].forEach(o=>Object.keys(o).forEach(k=>delete o[k]));
  Object.keys(c.dias).forEach(k=>{ DAYS[+k]=c.dias[k]; });
  Object.assign(THUMB,c.miniaturas);
  Object.keys(c.kit).forEach(k=>{ KIT[+k]=c.kit[k]; });
  SHOW_DAY6=!!c.mostrarDia6;
  CONTENIDO_VER=+c.version||0; CONTENIDO_URL=url||'';
  return true;
}
const CONTENIDO_LS='vipContenido_'+EDICION+(PREVIEW?'_prueba':'');
aplicarContenido(CONTENIDO_BASE,'');
(function(){ try{ const c=JSON.parse(LS.get(CONTENIDO_LS)||'null'); if(c&&c.version>=CONTENIDO_VER) aplicarContenido(c.datos||c,c.url||''); }catch(e){} })();
function cargarContenido(){
  const qp=PREVIEW?new URLSearchParams(location.search).get('contenido'):'';
  const traer=url=>{
    if(!/^https:\/\/files\.leadconnectorhq\.com\//.test(url||'')) return;
    if(url===CONTENIDO_URL) return;
    fetch(url,{credentials:'omit',cache:'force-cache'}).then(r=>r.json()).then(c=>{
      if(!contenidoValido(c)) return;
      const antes=JSON.stringify([DAYS,KIT,THUMB,SHOW_DAY6]);
      aplicarContenido(c,url);
      try{ LS.set(CONTENIDO_LS,JSON.stringify({version:c.version,url:url,datos:c})); }catch(e){}
      if(JSON.stringify([DAYS,KIT,THUMB,SHOW_DAY6])!==antes){ clock(); if(!(S.view>=1&&S.view<=NDAYS())) S.view=S.day; const y=scrollY; render(true); scrollTo(0,y); }
    }).catch(()=>{});
  };
  if(qp) return traer(qp);
  api({accion:'contenido',edicion:EDICION,canal:PREVIEW?'prueba':'publicada'},r=>{ if(r&&r.ok&&r.url) traer(r.url); });
}
