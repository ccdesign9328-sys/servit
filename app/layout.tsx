import type { Metadata } from "next";
import Script from "next/script";
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
      <Script
        id="gtm-script"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-K2VTCT4W');`,
        }}
      />
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K2VTCT4W"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
