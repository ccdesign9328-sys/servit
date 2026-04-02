import { serveFramerPage } from "@/lib/serveFramerPage";
export const dynamic = "force-static";
export function GET() {
  return serveFramerPage("service/cool-comfort-deal.html", {
    title: "Aire Acondicionado y Minisplits en Querétaro | SERVIT",
    description: "Venta, instalación y mantenimiento de minisplits inverter en Querétaro. Compatibles con Alexa y Google Home.",
  });
}
