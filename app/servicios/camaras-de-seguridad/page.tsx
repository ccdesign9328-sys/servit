import ServicePage from "@/components/ServicePage";
import type { RelatedService } from "@/components/ServicePage";

const RELATED_SERVICES: RelatedService[] = [
  {
    slug: "video-portero-inteligente",
    title: "Video portero inteligente",
    description:
      "Ve y habla con quien toca la puerta. Atiende desde tu celular, control de acceso para hogares y negocios.",
    image: "/products/video-portero-inteligente.png",
    href: "/servicios/video-portero-inteligente",
  },
  {
    slug: "control-acceso",
    title: "Control de acceso",
    description:
      "Instalamos sistemas de acceso con huella, tarjeta, teclado o app. Ideal para fraccionamientos, oficinas o industrias.",
    image: "/products/control-acceso.png",
    href: "/servicios/control-acceso",
  },
];

const richText = (
  <>
    <h3>La solución: vigilancia inteligente y constante</h3>
    <p>
      Las cámaras de seguridad de alta calidad son una herramienta esencial
      para proteger tu patrimonio. Con nuestros sistemas, puedes:
    </p>
    <ul>
      <li>Ver y grabar video 24/7, incluso en condiciones de poca luz.</li>
      <li>
        Acceder a las imágenes en tiempo real desde tu celular, estés donde
        estés.
      </li>
      <li>
        Aprovechar alertas inteligentes y grabaciones basadas en eventos,
        reduciendo falsas alarmas y enfocándose en lo que realmente importa.
      </li>
      <li>
        Integrar el sistema con otras herramientas de seguridad como alarmas,
        control de acceso y monitoreo remoto centralizado.
      </li>
      <li>
        Estos sistemas no solo capturan video confiable; también facilitan la
        gestión de seguridad proactiva para que tú o tu equipo puedan
        anticiparse a incidentes.
      </li>
    </ul>
    <h3>Cámaras para tu hogar</h3>
    <p>
      Para viviendas, la seguridad debe ser simple, accesible y eficaz. Con
      nuestras soluciones:
    </p>
    <p>
      Obtienes cámaras con visión clara tanto de día como de noche para vigilar
      entradas, patios y zonas vulnerables.
    </p>
    <p>
      Puedes recibir notificaciones en tu celular cuando se detecte movimiento.
    </p>
    <p>
      El acceso remoto te permite ver tu casa en cualquier momento, desde
      cualquier lugar.
    </p>
    <p>
      Esto te da tranquilidad y control, especialmente cuando no estás en casa.
    </p>
    <h3>Cámaras para negocios y PyMEs</h3>
    <p>
      Un sistema de video vigilancia también mejora la operación y eficiencia:
    </p>
    <ul>
      <li>
        Las cámaras ayudan a observar flujos de clientes, optimizar áreas clave
        y reducir pérdidas por robo interno.
      </li>
      <li>
        Puedes integrar sistemas de control de acceso y gestión centralizada,
        conectando todos tus puntos de seguridad en una sola plataforma.
      </li>
      <li>
        La grabación inteligente y almacenamiento en la nube facilita la
        recuperación de evidencia después de un incidente.
      </li>
    </ul>
    <p>
      Así, tu negocio no solo detecta intrusiones, sino que también mejora la
      experiencia operativa y la toma de decisiones.
    </p>
  </>
);

export default function CamarasDeSeguridad() {
  return (
    <ServicePage
      title="Cámaras de seguridad"
      titleDescription="Solución integral para tu hogar o negocio. El reto: proteger tus espacios frente a riesgos reales. En hogares, comercios y pequeñas empresas, la inseguridad y la falta de visibilidad sobre lo que ocurre en cada rincón son problemas frecuentes."
      mainImg="/products/camaras-de-seguridad.png"
      contentRichText={richText}
      relatedServices={RELATED_SERVICES}
    />
  );
}
