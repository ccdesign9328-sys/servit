import type { Metadata } from "next";
import ServitNavbar from "@/components/ServitNavbar";
import ServitFooter from "@/components/ServitFooter";

export const metadata: Metadata = {
  title: "Cámaras de Seguridad en Querétaro | SERVIT",
  description:
    "Instala cámaras de seguridad HD con monitoreo en tiempo real desde tu celular. Sistemas de vigilancia profesional para hogar y negocio en Querétaro.",
  openGraph: {
    title: "Cámaras de Seguridad en Querétaro | SERVIT",
    description:
      "Instala cámaras de seguridad HD con monitoreo en tiempo real desde tu celular. Sistemas de vigilancia profesional para hogar y negocio en Querétaro.",
  },
};

export default function CamarasDeSeguridad({
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
