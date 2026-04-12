import ServicePage from "@/components/ServicePage";
import type { RelatedService } from "@/components/ServicePage";

const RELATED_SERVICES: RelatedService[] = [
  {
    slug: "control-acceso",
    title: "Control de acceso",
    description:
      "Instalamos sistemas de acceso con huella, tarjeta , teclado o app. Ideal para fraccionamientos, oficinas o industrias.",
    image: "/products/control-acceso.png",
    href: "/servicios/control-acceso",
  },
  {
    slug: "alarmas",
    title: "Alarmas de seguridad",
    description:
      "Protección activa las 24/7, sistema con sensores, notificaciones instantaneas y conexión a app",
    image: "/products/alarmas.png",
    href: "/servicios/alarmas",
  },
];

const richText = (
  <>
    <h3>¿Qué soluciona?</h3>
    <ul>
      <li>
        Evita abrir a desconocidos
      </li>
      <li>
       Te notifica si hay movimiento en la entrada
      </li>
      <li>
        Guarda evidencia en video
      </li>
      <li>
        Te permite hablar y abrir desde cualquier lugar
      </li>
    </ul>
    <h3>Beneficios principales</h3>
    <ul>
      <li>
        Imagen en alta resolución 2K y visión nocturna
      </li>
      <li>
       Comunicación bidireccional en tiempo real
      </li>
      <li>
        Desbloqueo remoto desde app o pantalla interior
      </li>
      <li>
        Grabación local o en la nube
      </li>
      <li>
        Diseño moderno e instalación profesional
      </li>
    </ul>
    
    <h3>Muchas viviendas experimentan problemas como:</h3>
    <p>
      Para oficinas, fraccionamientos y edificios de uso mixto, el control de
      visitantes es clave:
    </p>
    <ul>
      <li>
       No saber quién está en la puerta antes de abrir.
      </li>
      <li>
       Falta de grabación o evidencia de visitas inesperadas.
      </li>
      <li>
       Dificultad para atender a visitantes cuando no estás en casa.
      </li>
      <li>
       Nuestros videoporteros inteligentes ofrecen la solución ideal para este reto. Integran tecnología de comunicación avanzada con funciones de seguridad que te permiten gestionar cada acceso de forma visual, remota y confiable.
      </li>
    </ul>
   
  </>
);

export default function VideoPorteroInteligente() {
  return (
    <ServicePage
      title="Video portero inteligente"
      titleDescription="Videoportero Inteligente Control de acceso visual y seguro, estés donde estés Hoy más que nunca, necesitamos saber quién está en la puerta antes de abrir. Un videoportero inteligente te permite atender a visitantes desde tu celular o desde un monitor interior, brindando mayor seguridad y comodidad."
      mainImg="/products/video-portero-inteligente.png"
      contentRichText={richText}
      relatedServices={RELATED_SERVICES}
    />
  );
}
