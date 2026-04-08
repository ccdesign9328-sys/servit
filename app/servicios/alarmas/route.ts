import { serveFramerPage } from "@/lib/serveFramerPage";
export const dynamic = "force-static";
export function GET() {
  return serveFramerPage("service/air-quality-solutions.html", {
    title: "Alarmas de Seguridad en Querétaro | SERVIT",
    description: "Instala un sistema de alarma con sensores, notificaciones instantáneas y app en Querétaro. Protección activa 24/7 para tu hogar o negocio.",
  });
}
