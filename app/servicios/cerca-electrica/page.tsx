import ServicePage from "@/components/ServicePage";
import type { RelatedService } from "@/components/ServicePage";

const RELATED_SERVICES: RelatedService[] = [
   {
    slug: "aire-acondicionado",
    title: "Aire acondicionado",
    description:
      "Climatiza tu espacio con eficiencia, tecnología y respaldo profesional",
    image: "/products/aire-acondicionado.png",
    href: "/servicios/aire-acondicionado",
  },
  {
    slug: "camaras-de-seguridad",
    title: "Cámaras de seguridad",
    description:
      "Instalamos sistemas de videovigilancia HD para hogares y negocios. Acceso remoto desde tu celular las 24 horas.",
    image: "/products/camaras-de-seguridad.png",
    href: "/servicios/camaras-de-seguridad",
  },
];

const richText = (
  <>
    <h3>Sin protección perimetral adecuada:</h3>
    <ul>
      <li>
       Los intrusos tienen acceso fácil y sin disuasión.
      </li>
      <li>
       No hay alarma ni respuesta inmediata ante intento de ingreso.
      </li>
      <li>
       No hay forma de gestionar y monitorear la seguridad externa del predio.
      </li>
    </ul>
        <p>
     Instalar un cerco eléctrico confiable convierte lo que antes era un punto débil en una barrera activa de protección.
    </p>
    <h3>Solución: sistema de cerca eléctrica inteligente</h3>
    <p>
      Nuestro kit de cercos eléctricos con energizador ofrece una solución eficaz de seguridad perimetral con tecnología avanzada y opciones de control moderno:
    </p>
    <ul>
      <li>
      Energizador con potencia ajustable hasta 16,000 V, capaz de cubrir distancias extensas de cerca o muro.
      </li>
      <li>
       Incluye control remoto, llaves de activación y componentes esenciales para el sistema.
      </li>
      <li>
       Opciones con control vía Wi‑Fi y supervisión desde el celular, permitiendo monitoreo y gestión del sistema en tiempo real.
      </li>
       <li>
       Sirena integrada para señalización sonora ante eventos de activación.
      </li>
    </ul>
     <p>
      Este enfoque combina la disuasión física con la inteligencia digital, lo que no solo protege, sino que también te alerta y te da control desde cualquier lugar.
    </p>
    <h3>¿Por qué elegirnos para tu cerca eléctrica?</h3>
    <p>
     En SERVIT no solo instalamos el sistema; ofrecemos una solución completa que incluye:
    </p>
    <ul>
      <li>
        Asesoría personalizada: te ayudamos a seleccionar la mejor configuración según el tamaño de tu propiedad.
      </li>
      <li>
       Instalación profesional: garantizamos montaje seguro y funcional.
      </li>
      <li>
        Configuración y pruebas completas: dejamos tu cerca operando de forma óptima.
      </li>
       <li>
        Soporte y mantenimiento: contamos con servicio técnico posterior a la instalación para resolver dudas, ajustes o revisiones.
      </li>
       <li>
        Una cerca eléctrica no solo agrega un nivel más de seguridad, sino que genera tranquilidad y control total sobre el perímetro de tu propiedad.
      </li>
    </ul>
  </>
);

export default function CercaElectrica() {
  return (
    <ServicePage
      title="Cerca eléctrica"
      titleDescription="Cercos Eléctricos La protección perimetral que evita intrusiones antes de que ocurran  La ausencia de un sistema de cerca eléctrica puede significar una reacción tarde ante una amenaza, en lugar de prevenirla desde el inicio."
      mainImg="/products/cerca-electrica.png"
      contentRichText={richText}
      relatedServices={RELATED_SERVICES}
    />
  );
}
