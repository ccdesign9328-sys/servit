import fs from "fs";
import path from "path";

interface SeoMeta {
  title: string;
  description: string;
}

export function serveFramerPage(htmlFile: string, seo: SeoMeta): Response {
  const filePath = path.join(process.cwd(), "framer-html", htmlFile);
  let html = fs.readFileSync(filePath, "utf8");

  // Eliminar comentarios de HTTrack
  html = html.replace(/<!-- Mirrored from[^>]*-->/g, "");

  // Reemplazar título
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${seo.title}</title>`);

  // Reemplazar meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${seo.description}"`
  );

  // Actualizar OG title
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${seo.title}"`
  );

  // Actualizar OG description
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${seo.description}"`
  );

  // Actualizar Twitter title
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${seo.title}"`
  );

  // Actualizar Twitter description
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${seo.description}"`
  );

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
