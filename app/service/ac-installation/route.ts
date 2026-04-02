import { serveFramerPage } from "@/lib/serveFramerPage";
export const dynamic = "force-static";
export function GET() {
  return serveFramerPage("service/ac-installation.html", {
    title: "Control de Acceso en Querétaro | SERVIT",
    description: "Sistemas de control de acceso con huella, tarjeta, teclado o app. Ideal para fraccionamientos y oficinas.",
  });
}
