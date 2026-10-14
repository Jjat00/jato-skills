// Catálogo de skills de github.com/Jjat00/jjat-skills con sus ejemplos.
// `ask` es una petición real que dispara la skill; `media` son recortes de entregas reales.

export const REPO = "https://github.com/Jjat00/jjat-skills";

export const CATEGORIES = [
  { id: "video", label: "Video" },
  { id: "contenido", label: "Contenido" },
];

export const skills = [
  {
    name: "reel-editorial",
    category: "video",
    title: "Reel editorial",
    line: "De una toma de webcam o celular a un reel vertical: quita tomas falsas, recorta a la persona sobre tarjetas de color y subtitula palabra a palabra.",
    ask: "Haz un reel editorial con esta grabación",
    tools: ["ffmpeg", "faster-whisper", "HyperFrames"],
    media: [
      { src: "reel-editorial", ratio: "9/16", label: "IA + MCP" },
      { src: "reel-codex", ratio: "9/16", label: "Claude Code + Codex" },
    ],
  },
  {
    name: "explicador-rapido",
    category: "video",
    title: "Explicador rápido",
    line: "Un tema técnico explicado en un reel de 2:30, sin presentador: voz narrada, subtítulos palabra a palabra y cifras que salen de correr modelos de verdad.",
    ask: "Hazme un explicador de bases de datos vectoriales",
    tools: ["HyperFrames", "ElevenLabs", "YOLO", "embeddings"],
    media: [
      { src: "explicador-deteccion", ratio: "9/16", label: "Detección" },
      { src: "explicador-filtro", ratio: "9/16", label: "Filtro de bordes" },
      { src: "explicador-vectores", ratio: "9/16", label: "Bases vectoriales" },
    ],
  },
  {
    name: "ruta-dron-ubicacion",
    category: "video",
    title: "Ruta de dron",
    line: "De una toma de dron a un video de ubicación: ruta animada por las calles, pin, tarjeta y, si quieres, el lote con cotas y área.",
    ask: "Haz el video de ubicación del polideportivo con esta toma de dron",
    tools: ["OpenCV", "COLMAP", "ffmpeg"],
    media: [
      { src: "ruta-dron", ratio: "16/9", label: "Ruta" },
      { src: "ruta-area", ratio: "16/9", label: "Área y cotas" },
    ],
  },
  {
    name: "google-flow",
    category: "video",
    title: "Google Flow desde la terminal",
    line: "Video e imagen en Google Flow (Veo 3.1, Omni, Nano Banana) con los créditos de tu plan de Google AI: el agente arma el proyecto y tú solo apruebas.",
    ask: "Genera en Flow un plano de 8 s de un granizado que cobra vida",
    tools: ["Veo 3.1", "Omni", "Nano Banana", "agent-browser"],
    media: [{ src: "flow-granizado", ratio: "9/16", label: "Granizado Frankenstein" }],
    terminal: [
      "$ flow.py credits",
      "$ flow.py new-project \"Granizado Frankenstein\"",
      "$ flow.py upload <id> granizado.png",
      "$ flow.py prep <id> \"el granizado cobra vida…\" --model \"Omni 1.1 Flash\" --aspect 9:16",
      "→ En Flow: pulsa enviar y Aprobar",
      "$ flow.py wait granizado/",
    ],
  },
  {
    name: "noticias-ia-carrusel",
    category: "contenido",
    title: "Noticias de IA del día",
    line: "Investiga las noticias de IA del día, captura su video o imagen y entrega el carrusel para Instagram y TikTok, el reel narrado y el caption.",
    ask: "Hazme el carrusel de noticias de IA de hoy",
    tools: ["Playwright", "ffmpeg", "edge-tts"],
    media: [
      { src: "noticias-reel", ratio: "9/16", label: "Reel" },
      { src: "noticias-lamina", ratio: "4/5", label: "Lámina en video" },
      { src: "noticias-imagen", ratio: "4/5", label: "Lámina", image: true },
      { src: "noticias-reel-5oct", ratio: "9/16", label: "Reel del 5 oct" },
    ],
  },
  {
    name: "letras-detras",
    category: "video",
    title: "Letra detrás de ti",
    line: "La letra de una canción en tipografía gigante detrás de la persona, palabra por palabra al ritmo de la voz.",
    ask: "Ponle la letra de Paranoid detrás de mí a este video",
    tools: ["LRCLib", "faster-whisper", "Robust Video Matting", "ffmpeg"],
    media: [{ src: "letras", ratio: "16/9", label: "Paranoid · Black Sabbath" }],
  },
];

// Lo que solo sale en la página propia de cada skill (/<name>/).
const DETAILS = {
  "reel-editorial": {
    about:
      "Grabas una toma hablando a cámara, con webcam o celular, y la skill la convierte en un reel vertical de ritmo rápido. Monta por transcripción: lee lo que dijiste, quita tomas falsas, repeticiones y pausas, y alterna pantalla completa con pantalla dividida, con la persona recortada sobre tarjetas de color y paneles de motion graphics que entran en la palabra que los motiva.",
    steps: [
      ["Transcribir", "faster-whisper saca cada palabra con su tiempo y el agente elige el mejor gancho."],
      ["Cortar", "Fuera tomas falsas, repeticiones y pausas, sin tocar lo que funciona."],
      ["Componer", "Persona recortada sobre tarjetas de color, titulares, terminales, chats y sellos en HyperFrames."],
      ["Entregar", "Subtítulos palabra a palabra con palabras clave resaltadas y audio a -14 LUFS."],
    ],
    needs: ["Una toma de cámara o webcam de una persona hablando.", "ffmpeg, Python con uv y Node para HyperFrames.", "Nada de pago: todo corre en local."],
  },
  "explicador-rapido": {
    about:
      "Un tema técnico explicado en un reel vertical de unos 2:30, sin presentador. Las cifras que salen en pantalla no se inventan: se calculan corriendo modelos de verdad (detección de objetos, redes convolucionales, embeddings, benchmarks). El estilo es el de jato.run: negro, paleta pastel, todo esquinado y subtítulos palabra a palabra.",
    steps: [
      ["Guion", "Se escribe y se aprueba antes de gastar nada. Si hay un video de referencia, se cubre punto por punto."],
      ["Datos reales", "Cada número de la pantalla sale de un modelo o un benchmark corrido en tu máquina."],
      ["Voz", "Prueba de 10 s, luego una sola toma que se acelera si hace falta y se corta por escena."],
      ["Escenas", "Dos cuadros de estilo aprobados sirven de molde y subagentes construyen el resto en paralelo."],
      ["Render", "Revisión completa en HyperFrames Studio y luego el MP4 listo para Reels y TikTok."],
    ],
    needs: ["Un tema técnico y, si quieres, un video de referencia.", "HyperFrames, ffmpeg y Python para los modelos.", "Voz de ElevenLabs (de pago; el costo se muestra antes de generar)."],
  },
  "ruta-dron-ubicacion": {
    about:
      "A partir de una toma de dron de cualquier propiedad (local, casa, lote o finca), dibuja una ruta animada pegada a las calles desde un punto de referencia conocido hasta el lugar, y cierra con pin, etiqueta y tarjeta de marca. Si es un lote, además lo marca en el suelo con sus medidas y su área.",
    steps: [
      ["Preguntar", "Punto de partida, destino, textos y colores de marca, todo de una vez."],
      ["Seguir la cámara", "Modo rápido con OpenCV o, si hace falta precisión, reconstrucción con COLMAP."],
      ["Trazar", "La ruta se anota sobre el video y se proyecta al suelo para que siga las calles."],
      ["Render", "Previews para revisar y luego el video final en 1080p."],
    ],
    needs: ["Una toma de dron estable que muestre el camino y el lugar.", "Python con numpy, OpenCV y Pillow, y ffmpeg.", "COLMAP (pycolmap) solo para el modo preciso."],
  },
  "google-flow": {
    about:
      "Video e imagen en Google Flow (Veo 3.1, Omni, Nano Banana) con los créditos de tu plan de Google AI, sin salir de la terminal. El agente crea el proyecto, sube las referencias, elige modelo y formato, escribe el prompt, espera y descarga. Tú solo pulsas enviar y Aprobar: Flow rechaza los envíos automatizados y la skill respeta esa regla para no arriesgar la cuenta.",
    steps: [
      ["Créditos", "Revisa cuántos te quedan antes de empezar."],
      ["Preparar", "Proyecto, referencias, modelo, formato y prompt, listos en Flow."],
      ["Enviar", "Pulsas enviar y Aprobar en tu navegador."],
      ["Descargar", "El agente espera el resultado y lo baja a tu carpeta."],
    ],
    needs: ["Un plan de Google AI con créditos de Flow.", "Chrome con la sesión de Google iniciada.", "agent-browser para manejar la página."],
  },
  "noticias-ia-carrusel": {
    about:
      "Busca las noticias de IA y software de las últimas 24 a 36 horas, verifica la fecha de cada una, descarga o captura su video o imagen y entrega todo listo para publicar: carrusel para Instagram (4:5, con láminas en video) y TikTok (9:16), reel narrado, PDF para LinkedIn, caption, hashtags, hora sugerida y una página de descarga.",
    steps: [
      ["Investigar", "Varias búsquedas en paralelo y la fecha de cada noticia comprobada."],
      ["Elegir", "De 6 a 8 noticias, con su video o imagen original."],
      ["Renderizar", "Láminas para Instagram y TikTok y el reel con las mismas noticias."],
      ["Entregar", "Caption, hashtags, hora de publicación y una página para descargarlo todo."],
    ],
    needs: ["Playwright y ffmpeg.", "edge-tts para la voz gratis, o una voz de ElevenLabs.", "Nada más: la investigación la hace el agente."],
  },
  "letras-detras": {
    about:
      "La letra de una canción en tipografía gigante detrás de la persona del video, palabra por palabra al ritmo de la voz, con la cabeza y el cuerpo tapando las letras. Basta el video y el nombre de la canción o su link de Spotify: la letra sincronizada sale de LRCLib y el audio de YouTube.",
    steps: [
      ["Canción", "Encuentra el audio y la letra sincronizada que casan entre sí."],
      ["Alinear", "faster-whisper ajusta cada palabra a la voz real."],
      ["Recortar", "Robust Video Matting separa a la persona para poner las letras detrás."],
      ["Render", "Revisas el plan de letras, ajustas lo que quieras y sale el video con la canción."],
    ],
    needs: ["Un video con una persona clara.", "Python con uv y ffmpeg.", "Tiempo: cerca de 1 minuto de proceso por cada 5 s de video en CPU."],
  },
};
for (const s of skills) Object.assign(s, DETAILS[s.name]);

export const SITE = "https://skills.jato.run";
export const pageUrl = (s) => `${SITE}/${s.name}/`;

export const installAll = "npx skills add Jjat00/jjat-skills -g";
export const installOne = (s) => `npx skills add Jjat00/jjat-skills --skill ${s.name} -g`;
export const sourceUrl = (s) => `${REPO}/tree/main/skills/${s.category}/${s.name}`;
