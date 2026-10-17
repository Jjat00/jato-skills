# jato skills

Landing de [skills.jato.run](https://skills.jato.run): el catálogo de las skills de video y contenido de
[Jjat00/jjat-skills](https://github.com/Jjat00/jjat-skills), con ejemplos reales de lo que hace cada una, la
petición que la dispara y el comando para instalarla. Las skills viven en ese repo; aquí solo está la página.

Si te sirve alguna, deja una estrella en [jjat-skills](https://github.com/Jjat00/jjat-skills).

## Qué publica

- `/`: todas las skills con filtro por categoría, sus láminas de ejemplo y el comando de instalación.
- `/<skill>/`: la página propia de cada skill (qué hace, pasos, requisitos, ejemplos y enlace a su carpeta en GitHub).
- `/<skill>.md`, `/llms.txt` y `/llms-full.txt`: el mismo catálogo en texto plano para modelos de lenguaje.
- `robots.txt` y `sitemap-index.xml`.

## Desarrollo

Astro 7 (salida estática) y Tailwind 4, con Node 22 (`.node-version`).

```bash
npm install
npm run dev       # servidor local
npm run build     # genera dist/
npm run preview   # sirve dist/
```

## Estructura

```
src/data/skills.js     # el catálogo: una entrada por skill (textos, herramientas, ejemplos, pasos, requisitos)
src/pages/             # portada, página por skill, versión .md, llms.txt, llms-full.txt y robots.txt
src/lib/llms.js        # arma los textos para modelos de lenguaje a partir del catálogo
src/components/        # láminas, terminal, instalación y CTA de estrella
public/media/          # ejemplos: <nombre>.mp4 con su portada <nombre>.jpg (o solo .jpg si es imagen)
```

## Añadir una skill

1. La skill debe estar publicada en `skills/<categoría>/<nombre>/` de jjat-skills: el enlace «Ver en GitHub» y el
   comando `npx skills add Jjat00/jjat-skills --skill <nombre> -g` apuntan ahí.
2. Añade su entrada a `skills` y a `DETAILS` en `src/data/skills.js` (y la categoría a `CATEGORIES` si es nueva).
3. Copia sus ejemplos a `public/media/` y nómbralos en `media`.

Todo lo demás (portada, página propia, `.md`, llms.txt y sitemap) sale de ese archivo.
