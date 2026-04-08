import { serveFramerPage } from "@/lib/serveFramerPage";
export const dynamic = "force-static";
export function GET() {
  return serveFramerPage("service/video-portero-inteligente.html", {
    title: "Video Portero Inteligente en Querétaro | SERVIT",
    description: "Instala un videoportero inteligente con imagen 2K, visión nocturna y apertura remota desde tu celular. Control de acceso moderno para tu hogar o negocio.",
  });
}
