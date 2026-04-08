import fs from "fs";
import path from "path";

interface SeoMeta {
  title: string;
  description: string;
  /** Script personalizado inyectado antes de </body> */
  injectScript?: string;
  /** Eliminar el bundle principal de Framer para evitar hidratación SPA */
  removeFramerBundle?: boolean;
}

/**
 * Script que corrige la navegación del lado del cliente de Framer.
 * Intercepta pushState/replaceState y clicks para mapear rutas antiguas a nuevas.
 */
const routeFixScript = `
<script>
(function() {
  var m = {
    "/service": "/servicios",
    "/contact": "/contacto",
    "/service/camaras-de-seguridad": "/servicios/camaras-de-seguridad",
    "/service/video-portero-inteligente": "/servicios/video-portero-inteligente",
    "/service/ac-installation": "/servicios/control-acceso",
    "/service/air-quality-solutions": "/servicios/alarmas",
    "/service/cerca-elec": "/servicios/cerca-electrica",
    "/service/cool-comfort-deal": "/servicios/aire-acondicionado"
  };
  function fix(url) {
    try { var u = new URL(url, location.origin); return m[u.pathname] ? (u.pathname = m[u.pathname], u.href) : null; } catch(e) { return null; }
  }
  var oP = history.pushState, oR = history.replaceState;
  history.pushState = function(s,t,u) { if(u){var f=fix(String(u));if(f)u=f;} return oP.call(this,s,t,u); };
  history.replaceState = function(s,t,u) { if(u){var f=fix(String(u));if(f)u=f;} return oR.call(this,s,t,u); };
  document.addEventListener("click", function(e) {
    var a = e.target.closest("a[href]"); if(!a) return;
    var h = a.getAttribute("href"), d = m[h];
    if(d) { e.preventDefault(); e.stopPropagation(); window.location.href = d; }
  }, true);
  if(m[location.pathname]) history.replaceState(null,"",m[location.pathname]);
})();
</script>
`;

export function serveFramerPage(htmlFile: string, seo: SeoMeta): Response {
  const filePath = path.join(process.cwd(), "framer-html", htmlFile);
  let html = fs.readFileSync(filePath, "utf8");

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

  // Eliminar bundle principal de Framer si se solicita
  // Esto evita que Framer hidrate la página y tome control del formulario
  if (seo.removeFramerBundle) {
    html = html.replace(
      /<script[^>]*data-framer-bundle="main"[^>]*><\/script>/g,
      ""
    );
  }

  // Inyectar script de corrección de rutas en TODAS las páginas
  html = html.replace("<body", `${routeFixScript}<body`);

  // Inyectar script personalizado adicional antes del cierre de </body>
  if (seo.injectScript) {
    html = html.replace("</body>", `${seo.injectScript}</body>`);
  }

  return new Response(html, {
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
