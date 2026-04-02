import { serveFramerPage } from "@/lib/serveFramerPage";
export const dynamic = "force-static";
export function GET() {
  return serveFramerPage("service/video-portero-inteligente.html", {
    title: "Video Portero Inteligente en Querétaro | SERVIT",
    description: "Control de acceso visual 2K con apertura remota desde tu celular. Instalación profesional en Querétaro.",
  });
}
