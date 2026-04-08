import { serveFramerPage } from "@/lib/serveFramerPage";
export const dynamic = "force-static";
export function GET() {
  return serveFramerPage("service/camaras-de-seguridad.html", {
    title: "Cámaras de Seguridad en Querétaro | SERVIT",
    description: "Instala cámaras de seguridad HD con monitoreo en tiempo real desde tu celular. Sistemas de vigilancia profesional para hogar y negocio en Querétaro.",
  });
}
