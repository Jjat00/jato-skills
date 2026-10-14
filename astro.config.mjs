import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://skills.jato.run",
  devToolbar: { enabled: false },
  output: "static",
  
  integrations: [sitemap()],
  vite: { plugins: [tailwindcss()] },
});
