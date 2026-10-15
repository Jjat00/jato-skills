import { SITE } from "../data/skills.js";

export const GET = () =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap-index.xml\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
