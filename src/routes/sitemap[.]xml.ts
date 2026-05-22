import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { SERVICES } from "@/lib/site-data";

const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const entries = [
          { path: "/", priority: "1.0", changefreq: "weekly" },
          { path: "/services", priority: "0.9", changefreq: "monthly" },
          { path: "/about", priority: "0.7", changefreq: "monthly" },
          { path: "/projects", priority: "0.8", changefreq: "monthly" },
          { path: "/contact", priority: "0.7", changefreq: "monthly" },
          { path: "/quote", priority: "0.8", changefreq: "monthly" },
          ...SERVICES.map((s) => ({ path: `/services/${s.slug}`, priority: "0.8", changefreq: "monthly" as const })),
        ];
        const urls = entries
          .map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`)
          .join("\n");
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
        return new Response(xml, { headers: { "Content-Type": "application/xml", "Cache-Control": "public, max-age=3600" } });
      },
    },
  },
});
