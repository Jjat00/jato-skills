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
    media: [{ src: "reel-editorial", ratio: "9/16", label: "IA + MCP" }],
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

export const installAll = "npx skills add Jjat00/jjat-skills -g";
export const installOne = (s) => `npx skills add Jjat00/jjat-skills --skill ${s.name} -g`;
export const sourceUrl = (s) => `${REPO}/tree/main/skills/${s.category}/${s.name}`;
