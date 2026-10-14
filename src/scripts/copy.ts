// Botones que copian al portapapeles: un comando (data-copy) o la URL de la página (data-copy-url).
for (const b of document.querySelectorAll<HTMLButtonElement>("button.copy")) {
  const label = b.textContent?.trim() ?? "";
  b.addEventListener("click", async () => {
    const text = b.dataset.copyUrl !== undefined ? location.href.split("#")[0] : (b.dataset.copy ?? "");
    try {
      await navigator.clipboard.writeText(text);
      b.textContent = b.dataset.done ?? "Copiado ✓";
    } catch {
      b.textContent = "No se pudo copiar";
    }
    setTimeout(() => (b.textContent = label), 1600);
  });
}
