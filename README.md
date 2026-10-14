# La diana cognitiva

Un test de ocho afirmaciones que sitúa tus hábitos de trabajo con IA en un plano de dos ejes: **intensidad de uso** y **control crítico**.

→ **[Hacer el test](https://mrpiay.github.io/DianaCognitiva/)**  ·  **[Guía en PDF](https://mrpiay.github.io/DianaCognitiva/guia/la-diana-cognitiva.pdf)** (20 páginas)

## De qué va

Delegar trabajo en una IA no es lo mismo que cederle el juicio que debería permitirte evaluar ese trabajo. En el fondo, delegación **con** supervisión frente a delegación **sin** supervisión. Las dos son delegación; lo único que cambia es si alguien mira el resultado.

Como son dos cosas independientes, hacen falta dos ejes y no una línea. Cruzarlos da cuatro posiciones, cada una con su propio riesgo:

| | Control crítico bajo | Control crítico alto |
|---|---|---|
| **Uso bajo** | Autonomía intuitiva | Apoyo puntual |
| **Uso alto** | Transferencia de criterio | Delegación de trabajo |

No hay un cuadrante al que convenga apuntar. Lo que debe cumplirse no es una posición sino una relación: el control tiene que ir al ritmo de la intensidad.

## Aviso

**Esto es una orientación, no un diagnóstico.** Es un autoinforme, y el fenómeno que intenta describir consiste precisamente en no advertir cuándo has cedido el control. El umbral de 7 sobre 12 es una convención práctica de este test, no un punto de corte validado, y los cuatro cuadrantes no son categorías establecidas por ninguna investigación. Describen hábitos.

Nada de lo que respondas sale de tu navegador: el test se calcula entero en local y no guarda ni envía datos.

## Fuente

El marco conceptual parte de:

> Shaw, S. D. y Nave, G. *Thinking—Fast, Slow, and Artificial: How AI is Reshaping Human Reasoning and the Rise of Cognitive Surrender.* The Wharton School, University of Pennsylvania.

Tres experimentos preregistrados, 1.372 participantes y 9.593 ensayos. El preprint puede consultarse, entre otros sitios, en [PsyArXiv](https://osf.io/preprints/psyarxiv/yk25n_v1), [SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6097646) y [ResearchGate](https://www.researchgate.net/publication/399711077_Thinking-Fast_Slow_and_Artificial_How_AI_is_Reshaping_Human_Reasoning_and_the_Rise_of_Cognitive_Surrender).

Es un *preprint*, no un artículo revisado por pares, y sus experimentos se realizaron en condiciones de laboratorio con tareas de razonamiento de respuesta única.

**Los nombres de los cuadrantes, el cuestionario y el plano de dos ejes son elaboración propia**, no del estudio. Los autores distinguen dos conductas (*cognitive offloading* y *cognitive surrender*); el resto es una lectura personal.

## Cómo está hecho

Una sola página sin dependencias ni compilación: `index.html` lo lleva todo, salvo las tipografías, que vienen de Google Fonts. Para trabajar en ella basta abrirla en el navegador.

`guia/index.html` es el artículo completo compuesto como cuadernillo 4:5 (200×250 mm): el texto fluye y cada sección abre página. El PDF se regenera desde la página publicada:

```
chrome --headless=new --no-pdf-header-footer --print-to-pdf=guia/la-diana-cognitiva.pdf https://mrpiay.github.io/DianaCognitiva/guia/
```
