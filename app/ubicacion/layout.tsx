import type { Metadata } from "next";
import ServitNavbar from "@/components/ServitNavbar";
import ServitFooter from "@/components/ServitFooter";

export const metadata: Metadata = {
  title: "Contacto | SERVIT",
  description:
    "Ponte en contacto con SERVIT. Soluciones de seguridad, automatización y climatización en Querétaro. Instalación profesional y soporte continuo.",
  openGraph: {
    title: "Contacto | SERVIT",
    description:
      "Ponte en contacto con SERVIT. Soluciones de seguridad, automatización y climatización en Querétaro.",
  },
};

export default function UbicacionLayout({
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
      <ServitNavbar activePath="/ubicacion" />
      <main>{children}</main>
      <ServitFooter />
    </div>
  );
}
