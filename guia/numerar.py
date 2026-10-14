# -*- coding: utf-8 -*-
"""Compone el PDF del cuadernillo.

Chrome no implementa los contadores de página de CSS, así que hay dos pasadas:
la primera averigua en qué página cae cada sección —para rellenar el índice—,
y la segunda compone el documento definitivo. Los folios se componen aparte y
se superponen con pypdf, que además escribe los marcadores de navegación.
"""
import io, os, re, subprocess
import pypdf

CHROME = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
BASE   = r'C:\Users\javie\Desktop\DelegacionCognitiva\DianaCognitiva'
TMP    = os.path.dirname(os.path.abspath(__file__))
FUENTE = os.path.join(BASE, 'guia', 'index.html')
SALIDA = os.path.join(BASE, 'guia', 'la-diana-cognitiva.pdf')

SECCIONES = [
    ('01', 'Delegar trabajo no es transferir el criterio'),
    ('02', 'El test: ¿cómo trabajas con la IA?'),
    ('03', 'Tu posición en el plano'),
    ('04', '¿Hay un punto óptimo en el plano?'),
    ('05', 'Dos resultados que complican el diagnóstico'),
    ('06', 'Lo que sí cambia la conducta'),
    ('07', 'El problema de este test'),
    ('08', 'Dónde me ha dejado a mí'),
    ('09', 'La pregunta que queda'),
    ('10', 'La fuente y sus límites'),
]


def chrome(url, destino, espera=15000):
    subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--no-pdf-header-footer',
                    '--virtual-time-budget=%d' % espera, '--print-to-pdf=' + destino, url],
                   check=True, capture_output=True)


def componer(destino):
    chrome('file:///' + FUENTE.replace('\\', '/'), destino)


def plano(t):
    """El texto extraído parte palabras; se comparan solo letras y dígitos."""
    return re.sub(r'[^0-9a-záéíóúüñ]', '', (t or '').lower())


def paginas_de_seccion(pdf):
    """Primera página en que aparece el título de cada sección."""
    hojas = [plano(p.extract_text()) for p in pypdf.PdfReader(pdf).pages]
    sitio = {}
    for n, titulo in SECCIONES:
        aguja = plano(n + titulo)
        for i, hoja in enumerate(hojas):
            if i < 2:          # la portada y el propio indice no cuentan
                continue
            if aguja in hoja:
                sitio[n] = i          # índice base 0
                break
    return sitio, len(hojas)


# ── pasada 1: dónde cae cada sección ──
borrador = os.path.join(TMP, 'guia-borrador.pdf')
componer(borrador)
sitio, n = paginas_de_seccion(borrador)
faltan = [k for k, _ in SECCIONES if k not in sitio]
assert not faltan, 'secciones no localizadas: %s' % faltan
print('secciones localizadas:', ', '.join('%s en p%d' % (k, v + 1) for k, v in sorted(sitio.items())))

# ── rellenar el índice y recomponer ──
s = io.open(FUENTE, encoding='utf-8').read()
for k, v in sitio.items():
    s = re.sub(r'(<span class="pg" data-sec="%s">)[^<]*(</span>)' % k,
               r'\g<1>%d\g<2>' % (v + 1), s)
io.open(FUENTE, 'w', encoding='utf-8').write(s)

crudo = os.path.join(TMP, 'guia-sin-folios.pdf')
componer(crudo)
sitio, n = paginas_de_seccion(crudo)
print('páginas compuestas:', n)

# ── folios: la portada y el índice van sin número ──
html = ('<!doctype html><html lang="es"><head><meta charset="utf-8">'
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
        'family=IBM+Plex+Mono:wght@400&display=swap"><style>'
        '@page{size:200mm 250mm;margin:0}'
        '*{margin:0;padding:0;box-sizing:border-box}'
        '.p{width:200mm;height:250mm;position:relative;break-after:page;page-break-after:always}'
        '.p:last-child{break-after:auto;page-break-after:auto}'
        '.p span{position:absolute;bottom:13mm;left:0;right:0;text-align:center;'
        "font-family:'IBM Plex Mono',monospace;font-size:8.5pt;color:#696E80}"
        '</style></head><body>'
        + ''.join('<div class="p"><span>%s</span></div>' % ('' if i < 2 else i + 1)
                  for i in range(n))
        + '</body></html>')
folios_html = os.path.join(TMP, 'folios.html')
io.open(folios_html, 'w', encoding='utf-8').write(html)
folios_pdf = os.path.join(TMP, 'folios.pdf')
chrome('file:///' + folios_html.replace('\\', '/'), folios_pdf, espera=6000)
assert len(pypdf.PdfReader(folios_pdf).pages) == n, 'descuadre de folios'

# ── superponer y añadir marcadores ──
libro, sellos = pypdf.PdfReader(crudo), pypdf.PdfReader(folios_pdf)
out = pypdf.PdfWriter()
for i, pag in enumerate(libro.pages):
    pag.merge_page(sellos.pages[i])
    out.add_page(pag)
out.add_outline_item('Portada', 0)
out.add_outline_item('Contenido', 1)
for k, titulo in SECCIONES:
    out.add_outline_item('%s · %s' % (k, titulo), sitio[k])
with open(SALIDA, 'wb') as f:
    out.write(f)

r = pypdf.PdfReader(SALIDA)
b = r.pages[0].mediabox
mm = lambda v: round(float(v) * 25.4 / 72, 1)
print('PDF final: %d páginas, %sx%s mm, %d marcadores'
      % (len(r.pages), mm(b.width), mm(b.height), len(SECCIONES) + 2))
