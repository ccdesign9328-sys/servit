import ServicePage from "@/components/ServicePage";
import type { RelatedService } from "@/components/ServicePage";

const RELATED_SERVICES: RelatedService[] = [
  {
    slug: "camaras-de-seguridad",
    title: "Cámaras de seguridad",
    description:
      "Instalamos sistemas de videovigilancia HD para hogares y negocios. Acceso remoto desde tu celular las 24 horas.",
    image: "/products/camaras-de-seguridad.png",
    href: "/servicios/camaras-de-seguridad",
  },
  {
    slug: "video-portero-inteligente",
    title: "Video portero inteligente",
    description:
      "Ve y habla con quien toca la puerta. Atiende desde tu celular, control de acceso para hogares y negocios.",
    image: "/products/video-portero-inteligente.png",
    href: "/servicios/video-portero-inteligente",
  },
];

const richText = (
  <>
  <p>
      Tener un ambiente cómodo en casa u oficina ya no es un lujo, es una necesidad. Las altas temperaturas, los espacios cerrados y la mala ventilación afectan la productividad, el descanso y el bienestar.
    </p>
    <h2>Sin un sistema de climatización adecuado, el confort y la salud se ven comprometidos.</h2>
    <ul>
      <li>
        Ambientes calurosos que afectan el descanso o la concentración.
      </li>
      <li>
        Equipos antiguos o mal instalados que consumen demasiada energía.
      </li>
      <li>
       Falta de mantenimiento que reduce el rendimiento y acorta la vida útil del equipo.
      </li>
      <li>
       Thermostat Calibration – Maximize comfort while minimizing energy use.
      </li>
      <li>
       Dificultad para encontrar asesoría y soporte confiable en instalación.
      </li>
    </ul>
    <h2>La solución: Minisplits con tecnología inverter y soporte profesional</h2>
    <p>
     En SERVIT ofrecemos soluciones de climatización residencial y comercial con venta, instalación y mantenimiento de minisplits inverter que se adaptan a cada espacio.

Equipos modernos, silenciosos y eficientes, con opciones de control remoto o vía WiFi.
    </p>
    <h2>¿Qué ofrecemos?</h2>
    <ul>
      <li>
        Venta e instalación de minisplits
      </li>
      <li>
        Equipos de 1 TON o más, con capacidad adecuada para el tamaño de tu espacio.
      </li>
      <li>
        Tecnología inverter que reduce el consumo de energía.
      </li>
       <li>
        Modelos compatibles con Alexa y Google Home.
      </li>
       <li>
        Instalación profesional incluida.
      </li>
      <li>
       Mantenimiento preventivo y correctivo
        <p></p>
       <p>
        Limpieza de filtros, serpentines y drenaje.
       </p>
        <p>
        Desinfección de unidad interior.
       </p>
        <p>
        Revisión de carga de gas y presión.
       </p>
        <p>
        Diagnóstico eléctrico y rendimiento.
       </p>
      </li>

    </ul>
    <h2>Beneficios clave</h2>
    <ul>
      <li>
        Ahorro de energía desde el primer uso.
      </li>
      <li>
        Mejor calidad del aire y confort térmico.
      </li>
      <li>
        Mayor vida útil del equipo con mantenimientos periódicos.
      </li>
       <li>
       Control desde tu celular o asistentes de voz.
      </li>
       <li>
        Servicio rápido y profesional en Querétaro y alrededores.
      </li>      
    </ul>
    <h2>¿Por qué elegir SERVIT?</h2>
    <ul>
      <li>
        Asesoría personalizada para elegir el equipo ideal.
      </li>
      <li>
        Instalación segura, limpia y garantizada.
      </li>
      <li>
        Servicio técnico y mantenimiento todo el año.
      </li>
       <li>
       Atención postventa y soporte inmediato por WhatsApp.
      </li>
       <li>
        Equipos con garantía de fábrica y respaldo profesional.
      </li>      
    </ul>
  </>
);

export default function AireAcondicionado() {
  return (
    <ServicePage
      title="Aire acondicionado"
      titleDescription="Climatiza tu espacio con eficiencia, tecnología y respaldo profesional. Las altas temperaturas, los espacios cerrados y la mala ventilación afectan la productividad, el descanso y el bienestar."
      mainImg="/products/aire-acondicionado.png"
      contentRichText={richText}
      relatedServices={RELATED_SERVICES}
    />
  );
}