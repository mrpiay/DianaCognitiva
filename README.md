# La diana cognitiva

Un test de veinte preguntas de sí o no que sitúa tus hábitos de trabajo con IA en un plano de dos ejes: **intensidad de uso** y **control crítico**.

→ **[Hacer el test](https://mrpiay.github.io/DianaCognitiva/)**  ·  **[Guía en PDF](https://mrpiay.github.io/DianaCognitiva/guia/la-diana-cognitiva.pdf)** (23 páginas)

La guía explica qué mide el test, de dónde sale y qué hacer con el resultado. Para evaluarte hace falta la herramienta: es ella la que lleva la cuenta y sitúa el punto.

## Qué mide

Delegar trabajo en una IA no es lo mismo que cederle el juicio que debería permitirte evaluar ese trabajo. En el fondo, delegación **con** supervisión frente a delegación **sin** supervisión. Las dos son delegación; lo único que cambia es si alguien mira el resultado.

Como son dos cosas independientes, hacen falta dos ejes y no una línea. Cruzarlos da cuatro posiciones, cada una con su propio riesgo:

| | Control crítico bajo | Control crítico alto |
|---|---|---|
| **Uso bajo** | Autonomía intuitiva | Apoyo puntual |
| **Uso alto** | Transferencia de criterio | Delegación de trabajo |

No hay un cuadrante al que convenga apuntar. Lo que debe cumplirse no es una posición sino una relación: el control tiene que ir al ritmo de la intensidad.

## Aviso

**Esto es una orientación, no un diagnóstico.** Es un autoinforme, y el fenómeno que intenta describir consiste precisamente en no advertir cuándo has cedido el control. Cada eje va de 0 a 5 y la división cae entre el 2 y el 3: una convención práctica de este test, no un punto de corte validado. Los cuatro cuadrantes no son categorías establecidas por ninguna investigación. Describen hábitos.

Nada de lo que respondas sale de tu navegador: el test se calcula entero en local y no guarda ni envía datos.

## Fuente

El marco conceptual parte de:

> Shaw, S. D. y Nave, G. *Thinking—Fast, Slow, and Artificial: How AI is Reshaping Human Reasoning and the Rise of Cognitive Surrender.* The Wharton School, University of Pennsylvania.

Tres experimentos preregistrados, 1.372 participantes y 9.593 ensayos. El preprint puede consultarse, entre otros sitios, en [PsyArXiv](https://osf.io/preprints/psyarxiv/yk25n_v1), [SSRN](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6097646) y [ResearchGate](https://www.researchgate.net/publication/399711077_Thinking-Fast_Slow_and_Artificial_How_AI_is_Reshaping_Human_Reasoning_and_the_Rise_of_Cognitive_Surrender).

Los autores declaran el preregistro y los datos en [osf.io/n84tx](https://osf.io/n84tx), proyecto que no era accesible públicamente a 14 de octubre de 2026.

Es un *preprint*, no un artículo revisado por pares, y sus experimentos se realizaron en condiciones de laboratorio con tareas de razonamiento de respuesta única.

**Los nombres de los cuadrantes, el cuestionario y el plano de dos ejes son elaboración propia**, no del estudio. Los autores distinguen dos conductas (*cognitive offloading* y *cognitive surrender*); el resto es una lectura personal.

## Cómo está hecho

Una sola página sin dependencias ni compilación: `index.html` lo lleva todo, salvo las tipografías, que vienen de Google Fonts. Para trabajar en ella basta abrirla en el navegador.

`articulo.md` es la guía en texto, extraída del HTML compuesto para que las dos versiones no se desvíen. `guia/index.html` es ese mismo texto compuesto como cuadernillo 4:5 (200×250 mm): el texto fluye y cada sección abre página. El PDF se compone desde el fichero local en dos pasadas —la primera averigua en qué página cae cada sección, para el índice— y lleva folios y marcadores:

```
python guia/numerar.py
```
