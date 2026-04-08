export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
  features?: string[];
  benefits?: string[];
  problems?: string[];
  seoTitle?: string;
  seoDescription?: string;
}

export const services: Service[] = [
  {
    slug: "camaras-de-seguridad",
    title: "Cámaras de Seguridad",
    shortDescription: "Monitorea en tiempo real desde tu celular, sistemas de vigilancia con grabación y acceso remoto.",
    description: "Solución integral para tu hogar o negocio. Con nuestros sistemas de cámaras de seguridad, puedes proteger tu patrimonio con tecnología de punta.",
    image: "https://framerusercontent.com/images/G77nPeJJSO3S743gKmPKVqkzMo.jpg",
    imageWidth: 4032, imageHeight: 3021,
    seoTitle: "Cámaras de Seguridad en Querétaro | SERVIT",
    seoDescription: "Instala cámaras de seguridad HD con monitoreo en tiempo real desde tu celular. Sistemas de vigilancia profesional para hogar y negocio en Querétaro.",
  },
  {
    slug: "video-portero-inteligente",
    title: "Video Portero Inteligente",
    shortDescription: "Ve y habla con quien toca la puerta. Atiende desde tu celular, control de acceso para hogares y negocios.",
    description: "Control de acceso visual y seguro, estés donde estés.",
    image: "https://framerusercontent.com/images/GllpqO90hMRdcGFfsxZQepaAEg.jpg",
    imageWidth: 1024, imageHeight: 1024,
    seoTitle: "Video Portero Inteligente en Querétaro | SERVIT",
    seoDescription: "Instala un videoportero inteligente con imagen 2K, visión nocturna y apertura remota desde tu celular.",
  },
  {
    slug: "aire-acondicionado",
    title: "Aire Acondicionado - Minisplits",
    shortDescription: "Climatiza tu espacio con eficiencia, tecnología y respaldo profesional.",
    description: "Soluciones de climatización residencial y comercial con venta, instalación y mantenimiento de minisplits inverter.",
    image: "https://framerusercontent.com/images/4LcHgT064Fcke4pBjeko0JQTw.png",
    imageWidth: 1050, imageHeight: 966,
    seoTitle: "Instalación de Minisplits en Querétaro | SERVIT",
    seoDescription: "Venta, instalación y mantenimiento de minisplits inverter en Querétaro. Climatización eficiente para hogar y oficina.",
  },
  {
    slug: "cerca-electrica",
    title: "Cerca Eléctrica",
    shortDescription: "Instalación profesional con sirena, batería de respaldo y control desde app.",
    description: "Protege el perímetro de tu propiedad con una cerca eléctrica de alta tecnología.",
    image: "https://framerusercontent.com/images/AISD2niQ0IqFHZKL5p7A91zlNB8.png",
    imageWidth: 1050, imageHeight: 966,
    seoTitle: "Cerca Eléctrica en Querétaro | SERVIT",
    seoDescription: "Instalación profesional de cercas eléctricas con sirena, batería de respaldo y control desde app en Querétaro.",
  },
  {
    slug: "control-acceso",
    title: "Control de Acceso",
    shortDescription: "Instalamos sistemas de acceso con huella, tarjeta, teclado o app. Ideal para fraccionamientos, oficinas o industrias.",
    description: "Controla quién entra y sale de tu propiedad con sistemas de control de acceso de última generación.",
    image: "https://framerusercontent.com/images/BX8UlmmGr4o8g0MMR0yguL97Bw.png",
    imageWidth: 1050, imageHeight: 966,
    seoTitle: "Control de Acceso en Querétaro | SERVIT",
    seoDescription: "Sistemas de control de acceso con huella, tarjeta, teclado o app en Querétaro. Soluciones para fraccionamientos, oficinas e industrias.",
  },
  {
    slug: "alarmas",
    title: "Alarmas de Seguridad",
    shortDescription: "Protección activa las 24/7, sistema con sensores, notificaciones instantáneas y conexión a app.",
    description: "Mantén tu hogar o negocio protegido las 24 horas del día con nuestros sistemas de alarma de seguridad.",
    image: "https://framerusercontent.com/images/EiRyWyTmUmZTqZM5RaqdU3t70.png",
    imageWidth: 1050, imageHeight: 966,
    seoTitle: "Alarmas de Seguridad en Querétaro | SERVIT",
    seoDescription: "Instala un sistema de alarma con sensores, notificaciones instantáneas y app en Querétaro. Protección activa 24/7.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
