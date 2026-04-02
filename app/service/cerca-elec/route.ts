import { serveFramerPage } from "@/lib/serveFramerPage";
export const dynamic = "force-static";
export function GET() {
  return serveFramerPage("service/cerca-elec.html", {
    title: "Cerca Eléctrica en Querétaro | SERVIT",
    description: "Instalación profesional de cercas eléctricas con sirena, batería de respaldo y control desde app.",
  });
}
