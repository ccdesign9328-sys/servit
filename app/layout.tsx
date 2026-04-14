import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SERVIT | Seguridad, Automatización y Climatización en Querétaro",
    template: "%s | SERVIT",
  },
  description:
    "Soluciones integrales de seguridad, automatización y climatización en Querétaro. Cámaras, cercos eléctricos, control de acceso y aire acondicionado con instalación profesional.",
  keywords: [
    "cámaras de seguridad Querétaro",
    "instalación minisplits Querétaro",
    "cerco eléctrico",
    "control de acceso",
    "alarmas de seguridad",
    "video portero inteligente",
    "SERVIT",
  ],
  authors: [{ name: "SERVIT" }],
  creator: "SERVIT",
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: "https://servit.com.mx",
    siteName: "SERVIT",
    title: "SERVIT | Seguridad, Automatización y Climatización en Querétaro",
    description:
      "Soluciones integrales de seguridad, automatización y climatización en Querétaro. Instalación profesional y soporte continuo.",
    images: [
      {
        url: "/SLB.svg",
        width: 400,
        height: 400,
        alt: "SERVIT Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SERVIT | Seguridad, Automatización y Climatización en Querétaro",
    description:
      "Soluciones integrales de seguridad, automatización y climatización en Querétaro.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <body>{children}</body>
    </html>
  );
}
