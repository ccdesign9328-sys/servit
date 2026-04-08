import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://servit.com.mx";
  return [
    { url: base,                                          lastModified: new Date(), changeFrequency: "weekly",  priority: 1   },
    { url: `${base}/servicios`,                           lastModified: new Date(), changeFrequency: "weekly",  priority: 0.8 },
    { url: `${base}/contacto`,                            lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/servicios/camaras-de-seguridad`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/servicios/video-portero-inteligente`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/servicios/aire-acondicionado`,        lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/servicios/control-acceso`,            lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/servicios/alarmas`,                   lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/servicios/cerca-electrica`,           lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];
}
