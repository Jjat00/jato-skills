import { llmsTxt } from "../lib/llms.js";

export const GET = () => new Response(llmsTxt(), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
