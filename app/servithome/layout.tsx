import type { Metadata } from "next";
import ServitNavbar from "@/components/ServitNavbar";
import ServitFooter from "@/components/ServitFooter";

export const metadata: Metadata = {
  title: "SERVIT | Seguridad y Climatización en Querétaro",
  description:
    "Soluciones integrales de seguridad, automatización y climatización. Instalación profesional en Querétaro y sus alrededores.",
  openGraph: {
    title: "SERVIT | Seguridad y Climatización en Querétaro",
    description:
      "Cámaras de seguridad, control de acceso, cercos eléctricos, alarmas y aire acondicionado. Instalación profesional en Querétaro.",
  },
};

export default function ServitHomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        fontFamily: '"Figtree", system-ui, sans-serif',
        background: "#fff",
        color: "#3b3b3b",
        margin: 0,
        padding: 0,
      }}
    >
      <ServitNavbar activePath="/servithome" />
      <main>{children}</main>
      <ServitFooter />
    </div>
  );
}
