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
    slug: "hvac-system",
    title: "Cámaras de Seguridad",
    shortDescription:
      "Monitorea en tiempo real desde tu celular, sistemas de vigilancia con grabación y acceso remoto.",
    description:
      "Solución integral para tu hogar o negocio. En hogares, comercios y pequeñas empresas, la inseguridad y la falta de visibilidad sobre lo que ocurre es un riesgo real. Con nuestros sistemas de cámaras de seguridad, puedes proteger tu patrimonio con tecnología de punta.",
    image:
      "https://framerusercontent.com/images/G77nPeJJSO3S743gKmPKVqkzMo.jpg",
    imageWidth: 4032,
    imageHeight: 3021,
    problems: [
      "Falta de visibilidad sobre lo que ocurre en tu propiedad.",
      "Riesgo de intrusiones sin evidencia grabada.",
      "Dificultad para monitorear múltiples áreas al mismo tiempo.",
    ],
    features: [
      "Ver y grabar video 24/7, incluso en condiciones de poca luz.",
      "Acceder a las imágenes en tiempo real desde tu celular, estés donde estés.",
      "Alertas inteligentes y grabaciones basadas en eventos.",
      "Integración con alarmas, control de acceso y monitoreo remoto centralizado.",
    ],
    benefits: [
      "Cámaras con visión clara de día y noche para entradas, patios y zonas vulnerables.",
      "Notificaciones en tu celular cuando se detecte movimiento.",
      "Acceso remoto para ver tu propiedad en cualquier momento y lugar.",
      "Para negocios: observa flujos de clientes y reduce pérdidas por robo interno.",
      "Grabación inteligente y almacenamiento en la nube para fácil recuperación de evidencia.",
    ],
    seoTitle: "Cámaras de Seguridad en Querétaro | SERVIT",
    seoDescription:
      "Instala cámaras de seguridad HD con monitoreo en tiempo real desde tu celular. Sistemas de vigilancia profesional para hogar y negocio en Querétaro.",
  },
  {
    slug: "video-portero-inteligente",
    title: "Video Portero Inteligente",
    shortDescription:
      "Ve y habla con quien toca la puerta. Atiende desde tu celular, control de acceso para hogares y negocios.",
    description:
      "Control de acceso visual y seguro, estés donde estés. Hoy más que nunca, necesitamos saber quién está en la puerta antes de abrir. Un videoportero inteligente te permite atender y controlar el acceso de forma remota desde tu celular o pantalla interior.",
    image:
      "https://framerusercontent.com/images/GllpqO90hMRdcGFfsxZQepaAEg.jpg",
    imageWidth: 1024,
    imageHeight: 1024,
    problems: [
      "No saber quién está en la puerta antes de abrir.",
      "Falta de grabación o evidencia de visitas inesperadas.",
      "Dificultad para atender a visitantes cuando no estás en casa.",
    ],
    features: [
      "Imagen en alta resolución 2K y visión nocturna.",
      "Comunicación bidireccional en tiempo real.",
      "Desbloqueo remoto desde app o pantalla interior.",
      "Grabación local o en la nube.",
      "Diseño moderno e instalación profesional.",
    ],
    benefits: [
      "Evita abrir a desconocidos.",
      "Te notifica si hay movimiento en la entrada.",
      "Guarda evidencia en video.",
      "Te permite hablar y abrir desde cualquier lugar.",
    ],
    seoTitle: "Video Portero Inteligente en Querétaro | SERVIT",
    seoDescription:
      "Instala un videoportero inteligente con imagen 2K, visión nocturna y apertura remota desde tu celular. Control de acceso moderno para tu hogar o negocio.",
  },
  {
    slug: "cool-comfort-deal",
    title: "Aire Acondicionado - Minisplits",
    shortDescription:
      "Climatiza tu espacio con eficiencia, tecnología y respaldo profesional.",
    description:
      "Tener un ambiente cómodo en casa u oficina ya no es un lujo, es una necesidad. Las altas temperaturas, los espacios cerrados y la mala ventilación afectan la productividad, el descanso y el bienestar. En SERVIT ofrecemos soluciones de climatización residencial y comercial con venta, instalación y mantenimiento de minisplits inverter.",
    image:
      "https://framerusercontent.com/images/4LcHgT064Fcke4pBjeko0JQTw.png",
    imageWidth: 1050,
    imageHeight: 966,
    problems: [
      "Ambientes calurosos que afectan el descanso o la concentración.",
      "Equipos antiguos o mal instalados que consumen demasiada energía.",
      "Falta de mantenimiento que reduce el rendimiento y acorta la vida útil del equipo.",
      "Dificultad para encontrar asesoría y soporte confiable en instalación.",
    ],
    features: [
      "Equipos de 1 TON o más, con capacidad adecuada para el tamaño de tu espacio.",
      "Tecnología inverter que reduce el consumo de energía.",
      "Modelos compatibles con Alexa y Google Home.",
      "Instalación profesional incluida.",
    ],
    benefits: [
      "Equipos modernos, silenciosos y eficientes, con opciones de control remoto o vía WiFi.",
      "Limpieza de filtros, serpentines y drenaje.",
      "Desinfección de unidad interior.",
      "Revisión de carga de gas y presión.",
      "Diagnóstico eléctrico y rendimiento.",
    ],
    seoTitle: "Instalación de Minisplits en Querétaro | SERVIT",
    seoDescription:
      "Venta, instalación y mantenimiento de minisplits inverter en Querétaro. Climatización eficiente para hogar y oficina con tecnología compatible con Alexa y Google Home.",
  },
  {
    slug: "cerca-elec",
    title: "Cerca Eléctrica",
    shortDescription:
      "Instalación profesional con sirena, batería de respaldo y control desde app.",
    description:
      "Protege el perímetro de tu propiedad con una cerca eléctrica de alta tecnología. Nuestros sistemas incluyen sirena, batería de respaldo y control remoto desde aplicación móvil, garantizando seguridad 24/7 para tu hogar o negocio.",
    image:
      "https://framerusercontent.com/images/AISD2niQ0IqFHZKL5p7A91zlNB8.png",
    imageWidth: 1050,
    imageHeight: 966,
    features: [
      "Sirena de alta potencia integrada.",
      "Batería de respaldo para funcionamiento sin luz.",
      "Control y monitoreo desde aplicación móvil.",
      "Instalación profesional con garantía.",
      "Compatible con otros sistemas de seguridad.",
    ],
    benefits: [
      "Disuasión efectiva de intrusos.",
      "Alertas inmediatas ante cualquier intento de violación del perímetro.",
      "Funcionamiento continuo incluso en cortes de energía.",
      "Gestión remota desde cualquier lugar.",
    ],
    seoTitle: "Cerca Eléctrica en Querétaro | SERVIT",
    seoDescription:
      "Instalación profesional de cercas eléctricas con sirena, batería de respaldo y control desde app en Querétaro. Protege el perímetro de tu propiedad.",
  },
  {
    slug: "ac-installation",
    title: "Control de Acceso",
    shortDescription:
      "Instalamos sistemas de acceso con huella, tarjeta, teclado o app. Ideal para fraccionamientos, oficinas o industrias.",
    description:
      "Controla quién entra y sale de tu propiedad con sistemas de control de acceso de última generación. Desde reconocimiento de huella digital hasta tarjetas de proximidad, teclados y control por aplicación móvil, adaptamos la solución a tus necesidades.",
    image:
      "https://framerusercontent.com/images/BX8UlmmGr4o8g0MMR0yguL97Bw.png",
    imageWidth: 1050,
    imageHeight: 966,
    features: [
      "Acceso por huella digital, tarjeta de proximidad, teclado o app.",
      "Registro de entradas y salidas con hora y fecha.",
      "Control remoto desde aplicación móvil.",
      "Integración con cámaras y sistemas de alarma.",
    ],
    benefits: [
      "Elimina el uso de llaves físicas.",
      "Control total sobre quién accede a tu propiedad.",
      "Ideal para fraccionamientos, oficinas e industrias.",
      "Reportes de acceso en tiempo real.",
    ],
    seoTitle: "Control de Acceso en Querétaro | SERVIT",
    seoDescription:
      "Sistemas de control de acceso con huella, tarjeta, teclado o app en Querétaro. Soluciones para fraccionamientos, oficinas e industrias.",
  },
  {
    slug: "air-quality-solutions",
    title: "Alarmas de Seguridad",
    shortDescription:
      "Protección activa las 24/7, sistema con sensores, notificaciones instantáneas y conexión a app.",
    description:
      "Mantén tu hogar o negocio protegido las 24 horas del día con nuestros sistemas de alarma de seguridad. Con sensores de movimiento, apertura de puertas/ventanas y notificaciones instantáneas a tu celular, estarás siempre informado de cualquier situación.",
    image:
      "https://framerusercontent.com/images/EiRyWyTmUmZTqZM5RaqdU3t70.png",
    imageWidth: 1050,
    imageHeight: 966,
    features: [
      "Sensores de movimiento y apertura de puertas/ventanas.",
      "Notificaciones instantáneas a tu celular.",
      "Conexión a aplicación móvil para monitoreo remoto.",
      "Sirena de alta potencia y aviso luminoso.",
      "Batería de respaldo ante cortes de energía.",
    ],
    benefits: [
      "Protección activa las 24 horas del día, los 7 días de la semana.",
      "Respuesta inmediata ante cualquier intrusión.",
      "Disuasión efectiva de intrusos.",
      "Tranquilidad para ti y tu familia.",
    ],
    seoTitle: "Alarmas de Seguridad en Querétaro | SERVIT",
    seoDescription:
      "Instala un sistema de alarma con sensores, notificaciones instantáneas y app en Querétaro. Protección activa 24/7 para tu hogar o negocio.",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
