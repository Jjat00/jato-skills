// Versiones en texto plano del catálogo para modelos de lenguaje (Claude, ChatGPT, Codex…),
// según la convención llms.txt (https://llmstxt.org). Salen del mismo src/data/skills.js que las
// páginas, así que nunca se desincronizan.
import { CATEGORIES, REPO, SITE, installAll, installOne, pageUrl, skills, sourceUrl } from "../data/skills.js";

const TAGLINE = "Skills para Claude Code y Codex: video y contenido, con ejemplos reales de lo que hacen.";

const rawSkillMd = (s) => `${sourceUrl(s).replace("github.com", "raw.githubusercontent.com").replace("/tree/", "/")}/SKILL.md`;
export const mdUrl = (s) => `${SITE}/${s.name}.md`;
const category = (s) => CATEGORIES.find((c) => c.id === s.category)?.label ?? s.category;

const example = (s, m) => {
  const media = m.image ? `imagen ${SITE}/media/${m.src}.jpg` : `video ${SITE}/media/${m.src}.mp4 (portada ${SITE}/media/${m.src}.jpg)`;
  return `- ${m.label} (${m.ratio.replace("/", ":")}): ${media}`;
};

/** Todo lo que se sabe de una skill, en Markdown. `level` ajusta los títulos para llms-full.txt. */
export function skillMarkdown(s, level = 1) {
  const h = (n) => "#".repeat(level + n - 1);
  const out = [
    `${h(1)} ${s.title} (\`${s.name}\`)`,
    "",
    `> ${s.line}`,
    "",
    s.about ?? "",
    "",
    `- Categoría: ${category(s)}`,
    `- Pídele a tu agente: «${s.ask}»`,
    `- Instalar: \`${installOne(s)}\``,
    `- Página: ${pageUrl(s)}`,
    `- Código en GitHub: ${sourceUrl(s)}`,
    `- Instrucciones completas (SKILL.md): ${rawSkillMd(s)}`,
    `- Con qué trabaja: ${s.tools.join(", ")}`,
  ];
  if (s.steps) out.push("", `${h(2)} Cómo funciona`, "", ...s.steps.map(([t, d], i) => `${i + 1}. **${t}**: ${d}`));
  if (s.needs) out.push("", `${h(2)} Qué necesitas`, "", ...s.needs.map((n) => `- ${n}`));
  if (s.media?.length) out.push("", `${h(2)} Ejemplos`, "", "Recortes de entregas reales hechas con esta skill.", "", ...s.media.map((m) => example(s, m)));
  if (s.terminal) out.push("", `${h(2)} En la terminal`, "", "```", ...s.terminal, "```");
  return out.filter((l, i, a) => !(l === "" && a[i - 1] === "")).join("\n").trim() + "\n";
}

const header = () =>
  [
    "# jato skills",
    "",
    `> ${TAGLINE} Cada skill es una carpeta con un SKILL.md que Claude Code, Codex y otros agentes compatibles cargan solos cuando el pedido encaja.`,
    "",
    `Instalar todas: \`${installAll}\`. Una sola: \`npx skills add Jjat00/jjat-skills --skill <nombre> -g\`. Repositorio: ${REPO}. Autor: Jaime Aza (https://jaimeaza.tech).`,
  ].join("\n");

export function llmsTxt() {
  const sections = CATEGORIES.map((c) => {
    const list = skills.filter((s) => s.category === c.id).map((s) => `- [${s.title}](${mdUrl(s)}): ${s.line} Pídele: «${s.ask}».`);
    return list.length ? `## ${c.label}\n\n${list.join("\n")}` : "";
  }).filter(Boolean);
  return [
    header(),
    "",
    ...sections.flatMap((s) => [s, ""]),
    "## Opcional",
    "",
    `- [Todo en un solo archivo](${SITE}/llms-full.txt): cada skill con pasos, requisitos y ejemplos.`,
    `- [Repositorio en GitHub](${REPO}): el código y el SKILL.md de cada skill.`,
    "",
  ].join("\n");
}

export function llmsFullTxt() {
  return [header(), "", ...skills.map((s) => skillMarkdown(s, 2))].join("\n");
}
