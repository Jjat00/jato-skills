// La página de cada skill en Markdown (/<nombre>.md), para modelos de lenguaje.
import { skills } from "../data/skills.js";
import { skillMarkdown } from "../lib/llms.js";

export const getStaticPaths = () => skills.map((s) => ({ params: { name: s.name }, props: { s } }));

export const GET = ({ props }) => new Response(skillMarkdown(props.s), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
