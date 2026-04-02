import { serveFramerPage } from "@/lib/serveFramerPage";
export const dynamic = "force-static";
export function GET() {
  return serveFramerPage("index.html", {
    title: "SERVIT | Seguridad, Automatización y Climatización en Querétaro",
    description: "Soluciones integrales de seguridad, automatización y climatización. Instalación profesional en Querétaro.",
  });
}
