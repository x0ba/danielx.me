// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationFocus,
} from "@shikijs/transformers";

// https://astro.build/config
export default defineConfig({
  site: "https://danielx.me",
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "vesper",
      transformers: [
        transformerNotationDiff(),
        transformerNotationHighlight(),
        transformerNotationFocus(),
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
