# -*- coding: utf-8 -*-
"""Chrome no implementa los contadores de página de CSS, así que los folios se
componen aparte —un PDF del mismo tamaño con solo el número— y se superponen."""
import io, os, subprocess, sys
import pypdf

CHROME = r'C:\Program Files\Google\Chrome\Application\chrome.exe'
BASE   = r'C:\Users\javie\Desktop\DelegacionCognitiva\DianaCognitiva'
TMP    = os.path.dirname(os.path.abspath(__file__))
URL    = 'https://mrpiay.github.io/DianaCognitiva/guia/'
SALIDA = os.path.join(BASE, 'guia', 'la-diana-cognitiva.pdf')

def chrome(url, destino, espera=15000):
    subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--no-pdf-header-footer',
                    '--virtual-time-budget=%d' % espera, '--print-to-pdf=' + destino, url],
                   check=True, capture_output=True)

# 1 · el cuadernillo
crudo = os.path.join(TMP, 'guia-sin-folios.pdf')
chrome(URL, crudo)
n = len(pypdf.PdfReader(crudo).pages)
print('páginas compuestas:', n)

# 2 · los folios, uno por página (la portada va sin número)
paginas = []
for i in range(1, n + 1):
    txt = '' if i == 1 else str(i)
    paginas.append(
        '<div class="p"><span>%s</span></div>' % txt)
html = ('<!doctype html><html lang="es"><head><meta charset="utf-8">'
        '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?'
        'family=IBM+Plex+Mono:wght@400&display=swap"><style>'
        '@page{size:200mm 250mm;margin:0}'
        '*{margin:0;padding:0;box-sizing:border-box}'
        '.p{width:200mm;height:250mm;position:relative;'
        'break-after:page;page-break-after:always}'
        '.p:last-child{break-after:auto;page-break-after:auto}'
        '.p span{position:absolute;bottom:13mm;left:0;right:0;text-align:center;'
        "font-family:'IBM Plex Mono',monospace;font-size:8.5pt;color:#696E80}"
        '</style></head><body>' + ''.join(paginas) + '</body></html>')
folios_html = os.path.join(TMP, 'folios.html')
io.open(folios_html, 'w', encoding='utf-8').write(html)

folios_pdf = os.path.join(TMP, 'folios.pdf')
chrome('file:///' + folios_html.replace('\\', '/'), folios_pdf, espera=6000)
nf = len(pypdf.PdfReader(folios_pdf).pages)
assert nf == n, 'descuadre: %d folios para %d páginas' % (nf, n)

# 3 · superponer
libro  = pypdf.PdfReader(crudo)
sellos = pypdf.PdfReader(folios_pdf)
out = pypdf.PdfWriter()
for i, pag in enumerate(libro.pages):
    pag.merge_page(sellos.pages[i])
    out.add_page(pag)
with open(SALIDA, 'wb') as f:
    out.write(f)

r = pypdf.PdfReader(SALIDA)
b = r.pages[0].mediabox
mm = lambda v: round(float(v) * 25.4 / 72, 1)
print('PDF final: %d páginas, %sx%s mm' % (len(r.pages), mm(b.width), mm(b.height)))
for i in (0, 1, len(r.pages) - 1):
    t = (r.pages[i].extract_text() or '').strip().split('\n')
    print('  p%-3d acaba en: %s' % (i + 1, (t[-1] if t else '')[:40]))
