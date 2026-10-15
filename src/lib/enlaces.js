// Los textos de skills.js pueden traer enlaces Markdown [texto](url): en la página salen como <a>, en llms.txt tal cual.
const escapar = (t) => t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export const conEnlaces = (texto) =>
  escapar(texto).replace(
    /\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener" class="text-fg underline decoration-line underline-offset-3 hover:decoration-cyan">$1</a>',
  );
