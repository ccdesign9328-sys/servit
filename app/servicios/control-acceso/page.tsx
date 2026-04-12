import ServicePage from "@/components/ServicePage";
import type { RelatedService } from "@/components/ServicePage";

const RELATED_SERVICES: RelatedService[] = [
 {
    slug: "alarmas",
    title: "Alarmas de seguridad",
    description:
      "Protección activa las 24/7, sistema con sensores, notificaciones instantaneas y conexión a app",
    image: "/products/alarmas.png",
    href: "/servicios/alarmas",
  },
  {
    slug: "cerca-electrica",
    title: "Cerca Eléctrica",
    description:
      "Instalación profesional con sirena, batería de respaldo y control desde app.",
    image: "/products/cerca-electrica.png",
    href: "/servicios/cerca-electrica",
  },
];

const richText = (
  <>
    <h3>¿Qué problema resuelve un sistema de control de acceso?</h3>
    <p>
      Sin un control confiable, las organizaciones y hogares enfrentan:
    </p>
    <ul>
      <li>
       Accesos no autorizados que comprometen la seguridad.
      </li>
      <li>
       Dificultad para monitorear quién entra y sale.
      </li>
      <li>
        Limitada capacidad para gestionar niveles de permiso.
      </li>
      <li>
       Pérdida de control cuando se pierden llaves o tarjetas tradicionales.
      </li>
    </ul>
    <h3>La solución: sistemas de control de acceso modernos</h3>
    <p>
     Los sistemas de control de acceso inteligente integran múltiples métodos de verificación, como reconocimiento facial, huella digital, tarjetas, PIN o códigos QR. Esto permite soluciones seguras y rápidas, con administración centralizada desde una plataforma o app móvil.
    </p>
    <h3>Nuestras soluciones incluyen:</h3>
    <ul>
      <li>
        Terminales biométricos (huella digital) que garantizan identificación segura.
      </li>
      <li>
        Integración con apps y software de gestión para administrar accesos, horarios y reportes desde tu móvil o plataforma web.
      </li>
      <li>
        Terminales de reconocimiento facial con IA para acceso rápido sin contacto.
      </li>
       <li>
        Controladores, torniquetes y cerraduras electrónicas para un sistema completo y seguro.
      </li>
      <li>
        Lectores de tarjetas y terminales básicos para niveles de acceso estándar.
      </li>
    </ul>
   <h3>¿Por qué con SERVIT?</h3>
   <p>
En SERVIT te ofrecemos no solo los equipos, sino una solución completa de control de acceso, que incluye:    </p>
    <ul>
      <li>
        Asesoría personalizada para definir la mejor configuración.
      </li>
      <li>
        Instalación profesional de sistemas y dispositivos.
      </li>
      <li>
        Configuración de software y credenciales de acceso.
      </li>
      <li>
        Soporte técnico y mantenimiento continuo.
      </li>
      <li>
        Esto asegura que tu sistema de acceso no solo esté bien instalado, sino que funcione de manera confiable y eficiente para tus necesidades específicas.      </li>
    </ul>
  </>
);

export default function ControlAcceso() {
  return (
    <ServicePage
      title="Control de acceso"
      titleDescription="Seguridad inteligente para gestionar quién entra, cuándo y cómo, En muchos espacios, ya sea una empresa, fraccionamiento, oficina o residencia, el uso de llaves tradicionales o puertas sin control puede generar inseguridad, accesos no autorizados y falta de registro de eventos.   Un sistema de control de acceso moderno resuelve este reto, permitiendo gestionar autorizaciones con precisión y desde cualquier lugar."
      mainImg="/products/control-acceso.png"
      contentRichText={richText}
      relatedServices={RELATED_SERVICES}
    />
  );
}
