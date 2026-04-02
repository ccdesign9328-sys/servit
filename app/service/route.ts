import { serveFramerPage } from "@/lib/serveFramerPage";
export const dynamic = "force-static";
export function GET() {
  return serveFramerPage("service.html", {
    title: "Servicios | SERVIT",
    description: "Conoce todos nuestros servicios de seguridad, automatización y climatización en Querétaro.",
  });
}
