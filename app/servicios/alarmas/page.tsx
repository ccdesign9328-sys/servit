import ServicePage from "@/components/ServicePage";
import type { RelatedService } from "@/components/ServicePage";

const RELATED_SERVICES: RelatedService[] = [
  {
    slug: "cerca-electrica",
    title: "Cerca Eléctrica",
    description:
      "Instalación profesional con sirena, batería de respaldo y control desde app.",
    image: "/products/cerca-electrica.png",
    href: "/servicios/cerca-electrica",
  },
  {
    slug: "aire-acondicionado",
    title: "Aire acondicionado",
    description:
      "Climatiza tu espacio con eficiencia, tecnología y respaldo profesional",
    image: "/products/aire-acondicionado.png",
    href: "/servicios/aire-acondicionado",
  },
];

const richText = (
  <>
    <h3>Sin un sistema de alarma:</h3>
    <ul>
      <li>
       No se detectan intrusos a tiempo.
      </li>
      <li>
        No se recibe una notificación inmediata de eventos sospechosos.
      </li>
      <li>
       Se pierde la oportunidad de reaccionar antes de una pérdida o daño.
      </li>
    </ul>
    <h3>La solución: alarmas inteligentes y confiables</h3>
    <p>
     Nuestros sistemas de alarmas de seguridad Hikvision brindan protección proactiva mediante tecnologías avanzadas para detectar intrusiones reales y notificarte al instante, reduciendo alarmas falsas y aumentando la efectividad del sistema.
    </p>
    
    <h3>¿Qué ofrecemos?</h3>
    <p>
      Los sistemas de alarma que instalamos están diseñados para adaptarse a tus necesidades, tanto en casas como en negocios:
    </p>
    <ul>
      <li>
       Alarmas inalámbricas AX HOME
      </li>
    </ul>
    <p>
      Solución fácil de instalar, ideal para hogares y pequeños negocios que buscan protección eficiente con conectividad Wi‑Fi y control desde app.
    </p>
     <ul>
      <li>
      Sistemas AX PRO
      </li>
    </ul>

     <p>
Alarmas más completas con soporte para múltiples sensores (movimiento, puertas/ventanas, llaveros remotos, sirena exterior e interior), perfectas para espacios medianos y grandes que requieren alta cobertura y confiabilidad.    </p>
     <ul>
      <li>
Paneles híbridos y expandibles
      </li>
    </ul>
     <p>
    ¿Por qué elegir una alarma con SERVIT?
    </p>
     <p>
    En SERVIT no solo instalamos el sistema, sino que también ofrecemos:
    </p>
     <ul>
      <li>
Asesoría para seleccionar el kit adecuado.
      </li>
            <li>
Instalación profesional y configuración optimizada.

      </li>
            <li>
Integración con otros sistemas (cámaras, control de acceso).

      </li>
            <li>
Mantenimiento y soporte técnico continuo.

      </li>
    </ul>
  </>
);

export default function Alarmas() {
  return (
    <ServicePage
      title="Alarmas de seguridad"
      titleDescription="Alarmas de Seguridad Detección avanzada para proteger tu hogar o negocio Sin un sistema de alarma confiable, no hay una alerta temprana ni forma de reaccionar eficazmente ante una amenaza."
      mainImg="/products/alarmas.png"
      contentRichText={richText}
      relatedServices={RELATED_SERVICES}
    />
  );
}
