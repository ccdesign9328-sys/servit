import { serveFramerPage } from "@/lib/serveFramerPage";
export const dynamic = "force-static";
export function GET() {
  return serveFramerPage("contact.html", {
    title: "Contáctanos | SERVIT",
    description: "Contáctanos para una cotización sin compromiso en Querétaro. Respondemos por WhatsApp al 4422645163.",
  });
}
