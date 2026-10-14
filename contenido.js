/* ═══════════════════════════════════════════════════════════════════════
   LOS TRES MODOS

   El motor es el mismo para los tres y vive en index.html: veinte preguntas
   barajadas, cinco por bloque, tres directas y dos al revés, la posición solo
   con las de hechos y la división en 2,5. Aquí solo hay contenido.

   En cada banco:
     cl  d te pide que te describas · e te pide un hecho que ocurrió
     ej  a cuánto la usas · b cuánto la revisas
     s   +1 el sí suma · −1 el sí resta (la pregunta va al revés a propósito)

   Las cuatro claves de cuadrante son fijas —apoyo, delegacion, transferencia,
   intuitiva— y cada modo solo les cambia el nombre.
   ═══════════════════════════════════════════════════════════════════════ */

const MODOS = {

/* ───────────────────────────── PROFESIONAL ───────────────────────────── */
profesional:{
  rotulo:'Profesional',
  pie:'Para quien usa la IA en su trabajo',
  titulo:'¿Delegas trabajo o <em>transfieres el criterio</em>?',
  lede:'Delegar trabajo en una IA no es lo mismo que cederle el juicio que debería permitirte evaluar ese trabajo. Dicho rápido: delegación <em>con</em> supervisión frente a delegación <em>sin</em> supervisión.',
  como:[
    'Las veinte preguntas tratan de lo mismo: cuánto entra la IA en tu trabajo y qué haces con lo que te devuelve. Unas te piden que te describas y otras que recuerdes una ocasión concreta.',
    '<b>Contesta cada una por su cuenta, sin intentar que encajen entre sí:</b> ninguna puntúa por separado y el resultado no sale de sumarlas, sino de cruzarlas al final.',
    'Cuando una pregunta se refiera a algo que ocurrió, piensa en la experiencia más cercana que recuerdes. No hay respuestas buenas ni malas — hay respuestas tuyas y respuestas que te gustaría dar, y solo las primeras sirven de algo. Nada sale de tu navegador.'
  ],
  datos:null,
  ejes:{a:'Intensidad de uso', b:'Control crítico'},
  ejesPlano:{a:'INTENSIDAD DE USO →', b:'CONTROL CRÍTICO →'},
  ejesCorto:{a:'intensidad', b:'control'},
  tres:[
    {q:'¿Podrías explicar tu última entrega sin la IA delante?',
     d:'Casi todo el mundo dice que sí hasta que lo intenta. No va de memoria: va de si el razonamiento llegó a ser tuyo en algún momento.'},
    {q:'¿Cuándo fue la última vez que le llevaste la contraria a la IA?',
     d:'Si no recuerdas la última vez que descartaste una respuesta suya, puede que no te haya dado ninguna mala. O que hayas dejado de mirar.'},
    {q:'¿Qué pasaría mañana en tu trabajo si la IA no estuviera?',
     d:'No es una pregunta sobre productividad. Es sobre cuánto de lo que entregas depende de algo que no controlas del todo.'}
  ],
  banco:[
    {cl:'d', ej:'a', s:+1, t:'Utilizo la IA en tareas centrales de mi trabajo, no solo en actividades accesorias.'},
    {cl:'d', ej:'a', s:+1, t:'Delego en la IA parte del razonamiento necesario para resolver mis tareas, no solo la redacción o la ejecución.'},
    {cl:'d', ej:'a', s:+1, t:'Si dejara de disponer de IA, mi forma habitual de trabajar cambiaría considerablemente.'},
    {cl:'d', ej:'a', s:-1, t:'Hay tareas importantes de mi trabajo que prefiero resolver sin IA porque quiero conservar el control del razonamiento.'},
    {cl:'d', ej:'a', s:-1, t:'Podría desarrollar una primera solución razonada a mis tareas habituales sin que la IA me indique por dónde empezar.'},

    {cl:'e', ej:'a', s:+1, t:'La última vez que me enfrenté a una tarea nueva, recurrí a la IA antes de intentar resolverla por mi cuenta.'},
    {cl:'e', ej:'a', s:+1, t:'Recientemente hubo una tarea importante que no habría terminado a tiempo sin la ayuda de la IA.'},
    {cl:'e', ej:'a', s:+1, t:'La última vez que utilicé la IA para resolver un problema, acepté una propuesta suya sin desarrollar antes una alternativa propia.'},
    {cl:'e', ej:'a', s:-1, t:'Recientemente terminé una tarea relevante sin recurrir a la IA en ninguna fase del proceso.'},
    {cl:'e', ej:'a', s:-1, t:'La última vez que me atasqué en un problema, salí adelante sin consultar a la IA.'},

    {cl:'d', ej:'b', s:+1, t:'Antes de dar por buena una respuesta de la IA que puede tener consecuencias, compruebo si está bien fundamentada.'},
    {cl:'d', ej:'b', s:+1, t:'Normalmente distingo entre una respuesta de la IA bien fundamentada y otra que solo lo parece.'},
    {cl:'d', ej:'b', s:+1, t:'Cuando utilizo la IA, distingo entre lo que puedo aceptar directamente y lo que necesita comprobación adicional.'},
    {cl:'d', ej:'b', s:-1, t:'Cuando una respuesta de la IA coincide con lo que esperaba, tiendo a confiar en ella sin examinarla demasiado.'},
    {cl:'d', ej:'b', s:-1, t:'Cuando voy con prisa, tiendo a usar lo que me da la IA sin revisarlo.'},

    {cl:'e', ej:'b', s:+1, t:'La última vez que utilicé una respuesta de la IA en una entrega importante, comprobé por otra vía al menos una de sus afirmaciones relevantes.'},
    {cl:'e', ej:'b', s:+1, t:'La última vez que detecté una respuesta de la IA poco fiable, decidí no utilizarla.'},
    {cl:'e', ej:'b', s:+1, t:'En la última tarea en la que utilicé la IA, revisé si el resultado final respondía realmente al problema original antes de darla por terminada.'},
    {cl:'e', ej:'b', s:-1, t:'La última vez que una respuesta de la IA incluyó una cifra, una cita o una afirmación importante, utilicé al menos una sin verificarla por otra vía.'},
    {cl:'e', ej:'b', s:-1, t:'En mi última entrega con IA, di por buena su estructura o su enfoque sin llegar a cuestionarlos.'}
  ],
  perfiles:{
    apoyo:{
      nombre:'Apoyo puntual', plano:'APOYO PUNTUAL', sub:'usas poco, verificas',
      riesgo:'Desaprovechamiento',
      read:'Tus episodios describen poco uso y bastante comprobación. Tu criterio sigue intacto; lo que puede faltarte es aprovechamiento.',
      desc:'Recurres a la IA de vez en cuando y compruebas lo que te devuelve. El criterio es tuyo de principio a fin; el riesgo no es perderlo, es seguir pagando con horas un trabajo que podrías repartir.',
      titulo:'Qué probar',
      leve:'Tienes margen para ganar sin arriesgar nada: delega una tarea más de las que ya haces y mantén exactamente la misma revisión que ahora.',
      marcada:'Elige una tarea repetitiva o de bajo riesgo que hoy haces por tu cuenta. Delega su primer borrador y conserva la revisión. No se trata de confiar más, sino de aprender qué puedes transferir sin renunciar a decidir.',
      extrema:'Apenas la usas y revisas todo lo que te devuelve. Es seguro, pero caro: estás pagando con tiempo una herramienta que no empleas. Escoge el tipo de tarea más repetitivo que tengas y delégalo entero una temporada, revisando solo el resultado final.',
      pregunta:'¿Qué tarea sigues haciendo a mano que podrías delegar sin renunciar a tu criterio?'
    },
    delegacion:{
      nombre:'Delegación de trabajo', plano:'DELEGACIÓN DE TRABAJO', sub:'usas mucho, verificas',
      riesgo:'Erosión de la verificación',
      read:'Tus episodios describen uso intenso y comprobación sostenida. Es la combinación que buscas cuando quieres productividad sin convertir la respuesta de la máquina en una autoridad automática.',
      desc:'La IA hace mucho y tú sigues decidiendo qué vale. Es la posición que casi todo el mundo diría tener, y la más fácil de perder: la verificación es lo primero que cae en una semana mala.',
      titulo:'Qué proteger',
      leve:'Esta posición se pierde sin darse cuenta: basta una racha de prisa para que la verificación sea lo primero que caiga. Escribe qué vas a comprobar siempre, por corto que sea, y trátalo como innegociable.',
      marcada:'Convierte la verificación en un procedimiento, no en una virtud personal. Define qué fuentes consultar, qué resultados comprobar y qué decisiones no deberían cerrarse sin revisión humana. Delegar bien no es revisarlo todo: es saber dónde está el riesgo y concentrar ahí el esfuerzo.',
      extrema:'Usas mucho y compruebas casi todo. Cuidado con el coste: verificar donde no hay riesgo cancela la ganancia de haber delegado. Mira qué parte de tu revisión es ya rutina y suéltala; reserva el esfuerzo para lo que saldría caro si estuviera mal.',
      pregunta:'¿Qué compruebas siempre, pase lo que pase, antes de dar algo por bueno?'
    },
    transferencia:{
      nombre:'Transferencia de criterio', plano:'TRANSFERENCIA DE CRITERIO', sub:'usas mucho, no verificas',
      riesgo:'Ilusión de autoría',
      read:'Tus episodios describen uso intenso y poca comprobación. Eso no significa que trabajes mal: mientras el sistema acierte, los resultados pueden ser excelentes. Significa que dependen cada vez más de algo que no controlas del todo.',
      desc:'La IA entra en casi todo y apenas la contrastas. Los resultados pueden ser buenos —mientras ella acierte—, pero cada vez dependen más de algo que no estás mirando, y eso no se nota hasta que falla.',
      titulo:'Qué hacer',
      leve:'No hace falta una reforma. Elige un solo tipo de dato —cifras, citas, nombres— y compruébalo siempre, sin excepciones. Con una sola regla sostenida bastaría para cruzar de vuelta.',
      marcada:'Coge tu última entrega hecha con IA y reconstruye su razonamiento sin ayuda. Identifica qué puedes justificar, qué tendrías que comprobar y qué aceptaste porque sonaba convincente. El objetivo no es dejar de usar la IA: es recuperar la capacidad de responder por lo que entregas.',
      extrema:'Esto ya no se arregla acordándose. Define por escrito qué no sale de tu mesa sin una comprobación y quién la hace, porque a este nivel de uso la memoria y la buena intención no dan abasto. Empieza por aquello que tendría consecuencias si estuviera mal.',
      pregunta:'¿Podrías defender ante un cliente, un jefe o un comité la razón de cada decisión de tu última entrega?'
    },
    intuitiva:{
      nombre:'Autonomía intuitiva', plano:'AUTONOMÍA INTUITIVA', sub:'usas poco, no verificas',
      riesgo:'Sesgos propios sin contraste',
      read:'Tus episodios describen poco uso y poca comprobación. Aquí el riesgo no viene necesariamente de la máquina: puede ser el exceso de confianza en tu propio juicio, la repetición de hábitos o la aceptación de una primera impresión sin contrastarla.',
      desc:'Trabajas sobre todo desde tu propio juicio y lo sometes a poco contraste. Puede ser sólido y estar bien fundado, pero tampoco está comprobado: nadie te ha llevado la contraria últimamente.',
      titulo:'Qué probar',
      leve:'Introduce un contraste en las decisiones importantes: una fuente independiente o una segunda opinión. No por la máquina, por ti.',
      marcada:'No recurrir a la IA no te vuelve automáticamente más autónomo: puedes equivocarte siguiendo a una máquina, pero también siguiendo una intuición que nunca has puesto a prueba. Introduce un mecanismo de contraste en las decisiones importantes: una fuente independiente, una revisión por otra persona o una explicación alternativa que te obligue a examinar tus supuestos.',
      extrema:'Trabajas casi íntegramente desde tu propio criterio y sin someterlo a contraste. Puede ser perfectamente válido, pero no está verificado: nadie te ha llevado la contraria últimamente. Busca a propósito una revisión externa de tu próxima decisión importante, venga de una persona o de una máquina.',
      pregunta:'¿Rechazas la IA por una decisión fundamentada o por no saber lo que puede hacer?'
    }
  },
  oro:{
    q:'Si te pidieran ahora explicar tu última entrega, sin la IA delante, ¿podrías?',
    opciones:['No', 'Solo una parte', 'Casi todo', 'Sí, completamente'],
    respuestas:[
      'Si no sabrías explicarla, la entrega es tuya solo en el nombre. Ahí es donde empieza el trabajo.',
      'La parte que no sabrías explicar es justo la que conviene rehacer entendiéndola.',
      'Localiza ese trozo que se te escapa: casi siempre es del mismo tipo, y ahí es donde conviene poner la comprobación.',
      'Entonces la IA te está ampliando el trabajo, no sustituyéndolo. Eso es lo que hay que proteger.'
    ]
  },
  frases:[
    'Lo que mejor hago cuando uso la IA es…',
    'El riesgo que veo en mi propio uso es…',
    'Mi compromiso para este mes es…'
  ],
  caveat:'<b>Esto es una orientación, no un diagnóstico.</b> Sigue siendo un autoinforme: el recuerdo de lo que ocurrió también se distorsiona, solo que menos que la autodescripción general. Los cuatro cuadrantes no son categorías establecidas por ninguna investigación y la distancia entre ambas mitades es sugerente, no una medida validada. Describen hábitos, y los hábitos cambian según la tarea, el contexto y la presión de tiempo.'
},

/* ───────────────────────────── ESTUDIANTE ────────────────────────────── */
estudiante:{
  rotulo:'Estudiante',
  pie:'Para clase, de secundaria en adelante',
  titulo:'¿Pilotas tú o <em>vas de pasajero</em>?',
  lede:'Usar mucho la IA no es el problema. El problema es entregar algo que no sabrías explicar si te la quitaran delante.',
  como:[
    'Son veinte preguntas de sí o no sobre lo mismo: cuánto entra la IA en tus trabajos y qué haces con lo que te devuelve. Unas te piden que te describas y otras que recuerdes algo que pasó.',
    '<b>Contesta cada una por su cuenta, sin intentar que encajen entre sí:</b> ninguna puntúa por separado y el resultado no sale de sumarlas, sino de cruzarlas al final.',
    'Cuando una pregunta hable de algo que ocurrió, piensa en la vez más cercana que recuerdes. <b>Esto no es una nota</b> — hay respuestas tuyas y respuestas que quedarían bien, y solo las primeras sirven de algo. Nada sale de tu navegador.'
  ],
  datos:[{id:'nombre', et:'Nombre'}, {id:'grupo', et:'Curso'}],
  ejes:{a:'Cuánto la uso', b:'Cuánto la reviso'},
  ejesPlano:{a:'CUÁNTO LA USO →', b:'CUÁNTO LA REVISO →'},
  ejesCorto:{a:'uso', b:'revisión'},
  ejesFrase:{a:'cuánto la usas', b:'cuánto la revisas'},
  tres:[
    {q:'¿Podrías explicar tu último trabajo sin la IA delante?',
     d:'Casi todos dicen que sí hasta que lo prueban. No va de memorizar: va de si en algún momento llegaste a entenderlo.'},
    {q:'¿Cuándo fue la última vez que le dijiste a la IA que se equivocaba?',
     d:'Si no te acuerdas, puede que no haya fallado nunca. O que hayas dejado de comprobarlo.'},
    {q:'¿Qué harías mañana si te quitaran la IA?',
     d:'No es un castigo imaginario. Es la pregunta de qué parte del trabajo sigue sabiendo hacer tu cabeza.'}
  ],
  banco:[
    {cl:'d', ej:'a', s:+1, t:'Uso la IA para trabajos de clase, no solo para cosas sueltas.'},
    {cl:'d', ej:'a', s:+1, t:'Cuando no sé cómo empezar un trabajo, lo normal es que acuda a la IA.'},
    {cl:'d', ej:'a', s:+1, t:'Si mañana no pudiera usar IA, mi forma de hacer los trabajos cambiaría bastante.'},
    {cl:'d', ej:'a', s:-1, t:'Hay asignaturas o trabajos que prefiero hacer sin IA.'},
    {cl:'d', ej:'a', s:-1, t:'Podría preparar un trabajo entero sin abrir la IA en ningún momento.'},

    {cl:'e', ej:'a', s:+1, t:'La última vez que me mandaron algo que no sabía hacer, abrí la IA antes de intentarlo por mi cuenta.'},
    {cl:'e', ej:'a', s:+1, t:'Recientemente he hecho con IA un trabajo que antes habría hecho solo.'},
    {cl:'e', ej:'a', s:+1, t:'En mi última entrega importante, la IA participó de alguna forma.'},
    {cl:'e', ej:'a', s:-1, t:'Mi último trabajo lo terminé sin usar la IA en ninguna parte.'},
    {cl:'e', ej:'a', s:-1, t:'La última vez que me atasqué con un ejercicio, salí adelante sin preguntárselo a la IA.'},

    {cl:'d', ej:'b', s:+1, t:'Antes de entregar algo hecho con IA, lo reviso.'},
    {cl:'d', ej:'b', s:+1, t:'Normalmente noto cuándo una respuesta de la IA no encaja o suena rara.'},
    {cl:'d', ej:'b', s:+1, t:'Cuando algo importante no me convence, busco otra fuente.'},
    {cl:'d', ej:'b', s:-1, t:'Si la IA dice lo que yo esperaba, no suelo mirarlo mucho más.'},
    {cl:'d', ej:'b', s:-1, t:'Cuando voy con prisa, uso lo que me da la IA tal cual.'},

    {cl:'e', ej:'b', s:+1, t:'La última vez que usé la IA para una entrega, comprobé por mi cuenta alguno de sus datos.'},
    {cl:'e', ej:'b', s:+1, t:'La última vez que vi un error en una respuesta de la IA, lo corregí en lugar de dejarlo pasar.'},
    {cl:'e', ej:'b', s:+1, t:'En mi último trabajo con IA, comprobé si de verdad respondía a lo que pedían.'},
    {cl:'e', ej:'b', s:-1, t:'En mi última entrega usé una fecha, una cifra o una cita de la IA sin comprobarla.'},
    {cl:'e', ej:'b', s:-1, t:'Si me hubieran pedido explicar mi último trabajo sin la IA delante, me habría costado.'}
  ],
  perfiles:{
    apoyo:{
      nombre:'🌱 Explorador', plano:'EXPLORADOR', sub:'la usas poco, la revisas',
      riesgo:'Quedarte sin descubrir en qué te ayuda',
      read:'Piensas por tu cuenta y revisas lo que te devuelve la IA. Tu criterio está entero; lo que te falta es descubrir en qué te ayudaría de verdad.',
      desc:'Usas poco la IA y, cuando la usas, miras lo que te da. Piensas por tu cuenta, que es lo difícil. Lo que te falta es descubrir en qué te ahorraría tiempo de verdad.',
      titulo:'Tu reto',
      leve:'Prueba a usarla en una tarea más de las que ya haces, y revísala igual que ahora.',
      marcada:'Elige un trabajo que normalmente empiezas desde cero y pídele a la IA solo el primer borrador. Luego compara: qué se te habría ocurrido a ti y qué no.',
      extrema:'Coge la tarea más repetitiva que tengas y hazla entera con IA una vez, revisando solo el resultado. Es para ver qué te ahorra, no para dejar de pensar.',
      pregunta:'¿Qué tarea sigues haciendo entera tú que podrías repartir sin dejar de decidir?'
    },
    delegacion:{
      nombre:'🚀 Piloto', plano:'PILOTO', sub:'la usas mucho, la revisas',
      riesgo:'Dejar de revisar cuando llegan las prisas',
      read:'Usas mucho la IA y sigues revisando lo que te devuelve. Es la combinación que te deja aprovechar la herramienta sin dejar de decidir tú.',
      desc:'La usas mucho y sigues llevando tú el mando: compruebas, corriges y entiendes lo que entregas. El peligro aparece en semana de exámenes, cuando revisar es lo primero que se cae.',
      titulo:'Tu reto',
      leve:'Esto se pierde sin darse cuenta: basta una semana de exámenes. Escribe qué vas a comprobar siempre, aunque sea una sola cosa, y cúmplelo también los días malos.',
      marcada:'Antes de entregar, revisa tres cosas: un dato, una fuente y un razonamiento. Siempre las mismas tres, hasta que te salga sin pensarlo.',
      extrema:'Revisas casi todo, y revisar también cuesta tiempo. Mira qué parte de tu revisión ya es rutina y guarda el esfuerzo para lo que de verdad se puede caer.',
      pregunta:'¿Qué compruebas siempre, pase lo que pase, antes de entregar?'
    },
    transferencia:{
      nombre:'⚠️ Pasajero', plano:'PASAJERO', sub:'la usas mucho, no la revisas',
      riesgo:'Entregar algo que no sabrías explicar',
      read:'Usas mucho la IA y la revisas poco. No significa que hagas mal los trabajos: mientras la IA acierte, pueden salir bien. Significa que salen bien por algo que no estás comprobando.',
      desc:'La IA hace la mayor parte y tú la acompañas. Los trabajos pueden salir bien, pero si te preguntan por qué dicen lo que dicen, la respuesta no está en tu cabeza.',
      titulo:'Tu reto',
      leve:'No hace falta cambiarlo todo. Elige un tipo de dato —fechas, cifras, nombres— y compruébalo siempre, sin excepciones.',
      marcada:'Coge tu último trabajo hecho con IA y explícalo en voz alta sin mirarlo. Lo que no puedas explicar es lo que todavía no era tuyo.',
      extrema:'Antes de entregar nada, escribe con tus palabras qué dice tu trabajo y por qué. Si no te sale, es que aún no lo has hecho tú.',
      pregunta:'¿Podrías explicar delante de tu clase por qué tu último trabajo dice lo que dice?'
    },
    intuitiva:{
      nombre:'🧭 Solitario', plano:'SOLITARIO', sub:'la usas poco, no la revisas',
      riesgo:'Repetir tus propias ideas sin contraste',
      read:'Usas poco la IA y tampoco contrastas mucho tus propias ideas. Aquí el riesgo no es la máquina: es dar por buena la primera idea que se te ocurre.',
      desc:'Ni usas mucho la IA ni contrastas mucho tus ideas. Vas con lo primero que se te ocurre o lo primero que encuentras, y eso a veces acierta y a veces se queda corto sin que te enteres.',
      titulo:'Tu reto',
      leve:'Antes de dar algo por bueno, busca una fuente más. Una sola basta para empezar.',
      marcada:'Pregúntale a la IA, o a alguien de clase, qué le parece flojo de tu respuesta. No para copiar lo que diga: para ver si se te había escapado.',
      extrema:'Pide a propósito que alguien te lleve la contraria en tu próximo trabajo importante, y escucha hasta el final antes de defenderte.',
      pregunta:'¿No usas la IA porque lo has decidido, o porque no sabes lo que puede hacer?'
    }
  },
  oro:{
    q:'Si te pidieran ahora explicar tu último trabajo, sin la IA delante, ¿podrías?',
    opciones:['No', 'Solo una parte', 'Casi todo', 'Sí, completamente'],
    respuestas:[
      'Si no sabrías explicarlo, el trabajo todavía no es tuyo del todo. Empieza por ahí.',
      'La parte que no sabrías explicar es justo la que conviene rehacer entendiéndola.',
      'Vas bien. Localiza ese trozo que se te escapa: suele ser siempre del mismo tipo.',
      'Entonces la IA te está ayudando a trabajar, no trabajando por ti. Eso es lo que hay que conservar.'
    ]
  },
  frases:[
    'Lo que mejor hago cuando uso la IA es…',
    'Lo que necesito mejorar es…',
    'Mi compromiso para este mes es…'
  ],
  caveat:'<b>Esto no es una nota.</b> Lo contestas tú, y lo que uno recuerda no siempre es lo que hizo. Los cuatro perfiles describen hábitos, no personas, y un hábito cambia con la asignatura, con el día y con la prisa que lleves. Sirve para pensar sobre cómo trabajas, no para ponerte una etiqueta.'
},

/* ────────────────────────────── DOCENTE ──────────────────────────────── */
docente:{
  rotulo:'Docente',
  pie:'Para el uso profesional de la IA en la enseñanza',
  titulo:'¿La IA amplía tu criterio o <em>decide por él</em>?',
  lede:'La IA puede quitarte de encima horas de preparación y materiales. También puede ir ocupando, sin que nadie lo decida, las decisiones pedagógicas que deberían seguir siendo tuyas.',
  como:[
    'Las veinte preguntas tratan de lo mismo: cuánto entra la IA en tu trabajo docente y qué haces con lo que te devuelve. Unas te piden que te describas y otras que recuerdes una ocasión concreta.',
    '<b>Contesta cada una por su cuenta, sin intentar que encajen entre sí:</b> ninguna puntúa por separado y el resultado no sale de sumarlas, sino de cruzarlas al final.',
    'Esto no evalúa tu competencia docente ni la calidad de tu trabajo, y no se envía a ninguna parte: nada sale de tu navegador. Si tu centro lo propone en una sesión, conviene que siga siendo tuyo.'
  ],
  datos:[{id:'nombre', et:'Nombre'}, {id:'grupo', et:'Etapa o departamento'}],
  ejes:{a:'Intensidad de uso', b:'Control pedagógico'},
  ejesPlano:{a:'INTENSIDAD DE USO →', b:'CONTROL PEDAGÓGICO →'},
  ejesCorto:{a:'uso', b:'control'},
  tres:[
    {q:'¿Podrías justificar ante una familia una decisión que tomaste con ayuda de la IA?',
     d:'No en general: decisión por decisión. Qué aprende el alumno, por qué en ese orden y cómo sabrás si lo ha aprendido.'},
    {q:'¿Cuándo fue la última vez que descartaste una propuesta de la IA por una razón pedagógica?',
     d:'Un material generado puede estar bien escrito y medir otra cosa. Si nunca descartas nada, la pregunta es quién está decidiendo.'},
    {q:'¿Qué parte de tu criterio se ha quedado en el borrador que te da la IA?',
     d:'Partir de una propuesta de la IA ahorra horas. También fija el marco antes de que tú hayas pensado el tuyo.'}
  ],
  banco:[
    {cl:'d', ej:'a', s:+1, t:'Uso la IA en tareas centrales de mi trabajo docente, no solo en gestión o administración.'},
    {cl:'d', ej:'a', s:+1, t:'Cuando preparo algo nuevo —una unidad, una actividad, una rúbrica— suelo empezar pidiéndole una propuesta a la IA.'},
    {cl:'d', ej:'a', s:+1, t:'Si dejara de disponer de IA, mi forma de preparar las clases cambiaría considerablemente.'},
    {cl:'d', ej:'a', s:-1, t:'Hay partes de mi trabajo docente que prefiero preparar sin IA para conservar el criterio.'},
    {cl:'d', ej:'a', s:-1, t:'Podría preparar una unidad completa sin recurrir a la IA en ningún momento.'},

    {cl:'e', ej:'a', s:+1, t:'La última vez que preparé una evaluación o una rúbrica, la IA intervino de alguna forma.'},
    {cl:'e', ej:'a', s:+1, t:'Recientemente he resuelto con IA una tarea docente que antes hacía por mi cuenta.'},
    {cl:'e', ej:'a', s:+1, t:'Recientemente llegué a tiempo a algo —una programación, un informe, unos materiales— gracias a la IA.'},
    {cl:'e', ej:'a', s:-1, t:'Mi última unidad o secuencia la preparé sin usar IA en ninguna fase.'},
    {cl:'e', ej:'a', s:-1, t:'La última vez que me atasqué preparando algo, salí adelante sin consultar a la IA.'},

    {cl:'d', ej:'b', s:+1, t:'Antes de llevar al aula un material generado con IA, compruebo que encaja con los objetivos de aprendizaje.'},
    {cl:'d', ej:'b', s:+1, t:'Normalmente detecto cuándo una propuesta de la IA es pedagógicamente endeble aunque esté bien redactada.'},
    {cl:'d', ej:'b', s:+1, t:'Distingo qué decisiones docentes puedo apoyar en la IA y cuáles no deberían salir de ahí.'},
    {cl:'d', ej:'b', s:-1, t:'Si una propuesta de la IA coincide con lo que ya tenía pensado, no suelo examinarla mucho más.'},
    {cl:'d', ej:'b', s:-1, t:'Cuando voy con prisa, llevo al aula lo que me da la IA con pocos cambios.'},

    {cl:'e', ej:'b', s:+1, t:'En el último material que usé con IA, cambié algo porque no se ajustaba a mi grupo.'},
    {cl:'e', ej:'b', s:+1, t:'La última vez que detecté un error conceptual o curricular en una respuesta de la IA, lo corregí antes de usarla.'},
    {cl:'e', ej:'b', s:+1, t:'En mi última evaluación preparada con IA, comprobé que los criterios medían de verdad lo que quería medir.'},
    {cl:'e', ej:'b', s:-1, t:'En mi última programación o informe utilicé un dato, una cita o una referencia de la IA sin comprobarla.'},
    {cl:'e', ej:'b', s:-1, t:'Si una familia me hubiera pedido justificar mi última propuesta hecha con IA, me habría costado.'}
  ],
  perfiles:{
    apoyo:{
      nombre:'🌱 Artesano pedagógico', plano:'ARTESANO PEDAGÓGICO', sub:'la usas poco, la revisas',
      riesgo:'Gastar en preparación el tiempo que falta en el aula',
      read:'Tus episodios describen poco uso y bastante revisión. El criterio pedagógico sigue siendo tuyo de principio a fin; lo que puede faltarte es tiempo, y parte de ese tiempo está en tareas que no exigen tu criterio.',
      desc:'Preparas casi todo tú y revisas lo poco que delegas. El criterio pedagógico es tuyo entero; lo que escasea es tiempo, y parte de ese tiempo se va en tareas que no piden criterio.',
      titulo:'Qué probar',
      leve:'Delega una tarea más de las que ya haces —un enunciado, una versión adaptada, un correo— y mantén la misma revisión de ahora.',
      marcada:'Elige algo repetitivo de bajo riesgo pedagógico y pídele a la IA solo la primera versión. Lo que decidas seguir haciendo a mano, que sea por una razón que puedas decir en voz alta.',
      extrema:'Apenas la usas y revisas todo. Es seguro y es caro: escoge tu tarea más mecánica —adaptar un texto, generar variantes de un ejercicio— y delégala entera una temporada, revisando solo el resultado.',
      pregunta:'¿Qué tarea sigues haciendo entera que podrías delegar sin renunciar a tu criterio profesional?'
    },
    delegacion:{
      nombre:'🚀 Diseñador aumentado', plano:'DISEÑADOR AUMENTADO', sub:'la usas mucho, la revisas',
      riesgo:'Que la revisión caiga en la semana de evaluaciones',
      read:'Tus episodios describen uso intenso y revisión sostenida. La IA te amplía la capacidad y las decisiones pedagógicas siguen siendo tuyas. Es la combinación que buscas.',
      desc:'La IA te amplía la capacidad —materiales, adaptaciones, borradores— y las decisiones siguen siendo tuyas. Se sostiene mientras la revisión sea un procedimiento y no una virtud personal.',
      titulo:'Qué proteger',
      leve:'Esto se pierde sin darse cuenta, y siempre en el mismo momento: final de trimestre. Escribe qué vas a comprobar siempre, por corto que sea, y trátalo como innegociable.',
      marcada:'Convierte la revisión en procedimiento, no en virtud: qué se comprueba en un material de aula, qué en una evaluación y qué no sale sin una segunda lectura. Revisarlo todo por igual no es rigor, es gastar donde no hace falta.',
      extrema:'Revisas casi todo, y eso también se paga en horas. Mira qué parte de tu revisión es ya rutina y suéltala; guarda el esfuerzo para lo que tendría consecuencias si estuviera mal: criterios, calificación, mensajes a familias.',
      pregunta:'¿Qué verificas siempre antes de llevar al aula un recurso generado por IA?'
    },
    transferencia:{
      nombre:'⚠️ En piloto automático', plano:'EN PILOTO AUTOMÁTICO', sub:'la usas mucho, no la revisas',
      riesgo:'Propuestas que parecen buenas y no miden lo que crees',
      read:'Tus episodios describen uso intenso y poca revisión. No significa que des mal clase: mientras la IA acierte, los materiales pueden funcionar. Significa que funcionan por algo que no estás comprobando, y un error curricular bien redactado no se nota hasta que lo corriges.',
      desc:'La IA entra en planificación, materiales o evaluación con poca revisión. Un error curricular bien redactado no se nota al leerlo: se nota al corregir, cuando ya está en el aula.',
      titulo:'Qué hacer',
      leve:'Elige una sola cosa y compruébala siempre: que los criterios de evaluación midan lo que dices que miden, por ejemplo. Una regla sostenida basta para cruzar de vuelta.',
      marcada:'Coge tu última propuesta hecha con IA y reconstruye su razón pedagógica sin ayuda: qué aprende el alumno, por qué en ese orden y cómo sabrás si lo ha aprendido. Lo que no puedas justificar es lo que todavía no era tuyo.',
      extrema:'A este nivel de uso no basta con acordarse. Define por escrito qué no entra en el aula sin comprobación y quién la hace, empezando por lo que tendría consecuencias: criterios, calificaciones e informes.',
      pregunta:'¿Podrías justificar ante una familia, o ante inspección, la razón pedagógica de cada propuesta que has llevado al aula con IA?'
    },
    intuitiva:{
      nombre:'🧭 Docente autosuficiente', plano:'DOCENTE AUTOSUFICIENTE', sub:'la usas poco, no la revisas',
      riesgo:'Prácticas eficaces pero sin contraste',
      read:'Tus episodios describen poco uso y poca revisión externa. Aquí el riesgo no viene de la máquina: es apoyarse en lo que siempre ha funcionado sin volver a mirarlo. La experiencia es un buen criterio, pero también es el que menos se cuestiona.',
      desc:'Te apoyas en lo que llevas años haciendo y lo sometes a poco contraste. La experiencia es buen criterio, y también el que menos se cuestiona.',
      titulo:'Qué probar',
      leve:'Contrasta una decisión importante del trimestre con algo externo: una fuente, un compañero de departamento, una explicación alternativa.',
      marcada:'No usar IA no te hace automáticamente más autónomo: también se puede repetir durante años una práctica que nunca se ha puesto a prueba. Busca un contraste real para lo que llevas más tiempo haciendo igual.',
      extrema:'Trabajas casi íntegramente desde tu propio criterio y sin someterlo a revisión. Puede ser perfectamente válido, pero no está comprobado. Pide a propósito que alguien —persona o máquina— te lleve la contraria en tu próxima decisión importante.',
      pregunta:'¿Rechazas la IA por una decisión fundamentada o por no saber lo que puede hacer?'
    }
  },
  oro:{
    q:'Si te pidieran ahora justificar pedagógicamente las decisiones de tu último trimestre, sin la IA delante, ¿podrías?',
    opciones:['No', 'Solo algunas', 'La mayoría', 'Todas'],
    respuestas:[
      'Si no sabrías justificarlas, las decisiones figuran a tu nombre pero no son del todo tuyas. Ahí es donde empieza el trabajo.',
      'Las que no sabrías justificar son justo las que conviene rehacer entendiéndolas.',
      'Localiza las que se te escapan: casi siempre son del mismo tipo, y ahí es donde conviene poner la comprobación.',
      'Entonces la IA te está ampliando la capacidad, no sustituyendo el criterio. Eso es lo que hay que proteger.'
    ]
  },
  frases:[
    'Lo mejor que aporta la IA a mi práctica docente es…',
    'El principal riesgo que veo en mi propio uso es…',
    'Mi compromiso para este trimestre es…'
  ],
  caveat:'<b>Esto es una orientación, no una evaluación docente.</b> Es un autoinforme: el recuerdo también se distorsiona, solo que menos que la autodescripción general. Los cuatro perfiles no son categorías validadas por ninguna investigación, describen hábitos y los hábitos cambian con la asignatura, el grupo y el momento del curso. No sirve para clasificar a nadie, ni a ti mismo.'
}

};
