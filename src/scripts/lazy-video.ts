// Los videos solo cargan y suenan (en silencio) cuando están en pantalla.
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const io = new IntersectionObserver((entries) => {
  for (const { target, isIntersecting } of entries) {
    const v = target as HTMLVideoElement;
    if (isIntersecting) {
      if (!v.src) v.src = v.dataset.src ?? "";
      if (!reduce) v.play().catch(() => {});
    } else v.pause();
  }
}, { rootMargin: "200px" });
document.querySelectorAll(".lazy-video").forEach((v) => io.observe(v));
