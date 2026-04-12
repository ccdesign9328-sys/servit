import type { Metadata } from "next";
import ServitNavbar from "@/components/ServitNavbar";
import ServitFooter from "@/components/ServitFooter";

export const metadata: Metadata = {
  title: "Servicios | SERVIT — Seguridad y Climatización en Querétaro",
  description:
    "Cámaras de seguridad, video portero inteligente, control de acceso, alarmas, cerca eléctrica y aire acondicionado. Instalación profesional en Querétaro.",
  openGraph: {
    title: "Servicios | SERVIT — Seguridad y Climatización en Querétaro",
    description:
      "Conoce todos nuestros servicios: cámaras, video portero, control de acceso, alarmas, cerca eléctrica y aire acondicionado.",
  },
};

export default function ServiciosLayout({
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
      <ServitNavbar activePath="/servicios" />
      <main>{children}</main>
      <ServitFooter />
    </div>
  );
}
