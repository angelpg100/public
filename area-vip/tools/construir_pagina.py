"""Transforma el código antiguo del Área VIP (contenido dentro del código) en la
página fija que lee el contenido de un JSON. Se usó una sola vez para el FP33;
se deja como registro de qué se cambió exactamente.
Uso: python3 -I construir_pagina.py <original.html> <contenido.json> <salida.html>"""
import json, sys

src, cjson, out = sys.argv[1:4]
L = open(src, encoding='utf-8').read().split('\n')
base = json.load(open(cjson, encoding='utf-8'))

def idx(prefix, start=0):
    for i in range(start, len(L)):
        if L[i].startswith(prefix):
            return i
    raise SystemExit('no encontrado: ' + prefix)

def replace_line(prefix, new):
    i = idx(prefix); L[i] = new

# 1) constantes de contenido -> contenedores vacíos que rellena el JSON
replace_line('const SHOW_DAY6=', 'let SHOW_DAY6=false; /* lo fija el contenido (mostrarDia6) */')
replace_line('const THUMB=', 'const THUMB={}; /* lo rellena el contenido (miniaturas) */')
i = idx('const DAYS={'); j = idx('};', i)
L[i:j+1] = ['const DAYS={}; /* lo rellena el contenido (dias) */']

# 2) bloques D1/D2 escritos a mano -> cargador de contenido
i = idx('/* ===== Día 1 · Sesión VIP real'); j = idx('if(!KIT[2])', i)
base_js = json.dumps(base, ensure_ascii=False, separators=(',', ':')).replace('</', '<\\/')
LOADER = open(__file__.replace('construir_pagina.py', 'cargador.js'), encoding='utf-8').read().rstrip('\n')
L[i:j+1] = [LOADER.replace('/*__CONTENIDO_BASE__*/null', base_js)]

# 3) calendario: sale de las fechas del contenido, no del código
s = '\n'.join(L)
def sub(old, new):
    global s
    assert s.count(old) == 1, old
    s = s.replace(old, new)
sub("const map={20261116:1,20261117:2,20261118:3,20261119:4,20261120:5};",
    "const map={}; for(let i=1;i<=NDAYS();i++) map[+DAYS[i].fecha.replace(/-/g,'')]=i; const last=+DAYS[NDAYS()].fecha.replace(/-/g,'');")
sub("} else if(key>20261120){ day=5; phase=hasKit(5)?'despues':'clase'; tick='fin'; }",
    "} else if(key>last){ day=NDAYS(); phase=hasKit(day)?'despues':'clase'; tick='fin'; }")
sub("function utcFor(day,h,m){ return '2026-11-'+DAYS[day].num+'T'",
    "function utcFor(day,h,m){ return DAYS[day].fecha+'T'")
sub("[[0,'Real (hora actual)'],[1,'Lun 16'],[2,'Mar 17'],[3,'Mié 18'],[4,'Jue 19'],[5,'Vie 20']]",
    "[[0,'Real (hora actual)']].concat(Array.from({length:NDAYS()},(_,k)=>[k+1,DAYS[k+1].short+' '+DAYS[k+1].num]))")
# 4) arranque: pedir la versión vigente después del primer pintado
sub("\nrender();\nif(S.tel) api({accion:'check'",
    "\nrender();\ncargarContenido();\nif(S.tel) api({accion:'check'")
open(out, 'w', encoding='utf-8').write(s)
print('OK', out, len(s), 'bytes')
