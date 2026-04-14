import type { APIRoute } from "astro";
import { siteConfig } from "../lib/site";

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site ?? new URL(siteConfig.siteUrl);
  const sitemapURL = new URL("/sitemap-index.xml", baseUrl);

  return new Response(
    [`User-agent: *`, `Allow: /`, `Sitemap: ${sitemapURL}`].join("\n"),
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    },
  );
};
