import { serveFramerPage } from "@/lib/serveFramerPage";
export const dynamic = "force-static";
export function GET() {
  return serveFramerPage("service/hvac-system.html", {
    title: "Cámaras de Seguridad en Querétaro | SERVIT",
    description: "Sistemas de cámaras con monitoreo en tiempo real desde tu celular. Seguridad 24/7 para hogar y negocio.",
  });
}
