import { serveFramerPage } from "@/lib/serveFramerPage";
export const dynamic = "force-static";
export function GET() {
  return serveFramerPage("service/air-quality-solutions.html", {
    title: "Alarmas de Seguridad en Querétaro | SERVIT",
    description: "Sistemas de alarma con sensores, notificaciones instantáneas y conexión a app. Protección 24/7.",
  });
}
