/**
 * /servicios/camaras-de-seguridad — Migración nativa desde Framer
 * Server Component · CSS Modules · SSR-safe · sin dependencias Framer
 * Fuente original: framer-html/service/camaras-de-seguridad.html (framer-Ozx6b)
 * Animaciones via ServitAnimations (IntersectionObserver, client component)
 */
import Image from "next/image";
import Link from "next/link";
import ServitAnimations from "@/components/ServitAnimations";
import styles from "./page.module.css";

/* ── Servicios relacionados (los 2 que muestra el Framer original) ─── */
const RELATED_SERVICES = [
  {
    slug: "video-portero-inteligente",
    title: "Video portero inteligente",
    description:
      "Ve y habla con quien toca la puerta. Atiende desde tu celular, control de acceso para hogares y negocios.",
    image:
      "https://framerusercontent.com/images/EiRyWyTmUmZTqZM5RaqdU3t70.png",
    href: "/servicios/video-portero-inteligente",
  },
  {
    slug: "control-acceso",
    title: "Control de acceso",
    description:
      "Instalamos sistemas de acceso con huella, tarjeta, teclado o app. Ideal para fraccionamientos, oficinas o industrias.",
    image:
      "https://framerusercontent.com/images/S0cua7mtiVkhYfAns98CTnUxt0.png",
    href: "/servicios/control-acceso",
  },
];

export default function CamarasDeSeguridad() {
  return (
    <div className={styles.page}>

      {/* ════════════════════════════════════════════
          HERO — fondo negro, texto centrado
          Framer: framer-lq25df · bg #000
          Desktop padding: 172px 30px 64px
      ════════════════════════════════════════════ */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroContainer}>
          <div className={styles.heroTitleGroup}>

            {/* Title & Paragraph — framer-siftzt */}
            <div className={styles.heroTextGroup}>

              {/* framer-oow6wd — título */}
              <div className={styles.heroTitleRow}>
                <div className={styles.heroTitleWrap}>
                  <h1 className={styles.heroTitle}>Cámaras de seguridad</h1>
                </div>
              </div>

              {/* framer-zif8b — descripción */}
              <p className={styles.heroDesc}>
                Solución integral para tu hogar o negocio. El reto: proteger tus
                espacios frente a riesgos reales. En hogares, comercios y pequeñas
                empresas, la inseguridad y la falta de visibilidad sobre lo que
                ocurre en cada rincón son problemas frecuentes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CONTENT SECTION — framer-elqjzc
          bg #fff · barra negra arriba (framer-16w41a3)
          imagen principal + texto enriquecido
      ════════════════════════════════════════════ */}
      <section className={styles.contentSection}>

        {/* Barra negra decorativa en la parte superior — framer-16w41a3 */}
        <div className={styles.contentTopBar} />

        {/* framer-65xmzm — contenedor central */}
        <div className={styles.contentInner}>

          {/* framer-lpb0ca — max-width 930px · imagen + texto enriquecido */}
          <div className={styles.contentBody}>

            {/* Imagen principal — framer-3ptml (revealUp) */}
            <div className={`${styles.contentImage} ${styles.revealUp}`}>
              <Image
                src="https://framerusercontent.com/images/AISD2niQ0IqFHZKL5p7A91zlNB8.png"
                alt="Cámaras de seguridad"
                fill
                className={styles.contentImg}
                sizes="(min-width: 1200px) 930px, (min-width: 768px) calc(100vw - 60px), calc(100vw - 40px)"
                priority
              />
            </div>

            {/* Rich text — framer-19mmovt (revealUp) */}
            <div className={`${styles.contentRichText} ${styles.revealUp}`}>
              <h3>La solución: vigilancia inteligente y constante</h3>
              <p>
                Las cámaras de seguridad de alta calidad son una herramienta
                esencial para proteger tu patrimonio. Con nuestros sistemas, puedes:
              </p>
              <ul>
                <li>Ver y grabar video 24/7, incluso en condiciones de poca luz.</li>
                <li>
                  Acceder a las imágenes en tiempo real desde tu celular, estés
                  donde estés.
                </li>
                <li>
                  Aprovechar alertas inteligentes y grabaciones basadas en eventos,
                  reduciendo falsas alarmas y enfocándose en lo que realmente
                  importa.
                </li>
                <li>
                  Integrar el sistema con otras herramientas de seguridad como
                  alarmas, control de acceso y monitoreo remoto centralizado.
                </li>
                <li>
                  Estos sistemas no solo capturan video confiable; también facilitan
                  la gestión de seguridad proactiva para que tú o tu equipo puedan
                  anticiparse a incidentes.
                </li>
              </ul>

              <h3>Cámaras para tu hogar</h3>
              <p>
                Para viviendas, la seguridad debe ser simple, accesible y eficaz.
                Con nuestras soluciones:
              </p>
              <p>
                Obtienes cámaras con visión clara tanto de día como de noche para
                vigilar entradas, patios y zonas vulnerables.
              </p>
              <p>
                Puedes recibir notificaciones en tu celular cuando se detecte
                movimiento.
              </p>
              <p>
                El acceso remoto te permite ver tu casa en cualquier momento, desde
                cualquier lugar.
              </p>
              <p>
                Esto te da tranquilidad y control, especialmente cuando no estás en
                casa.
              </p>

              <h3>Cámaras para negocios y PyMEs</h3>
              <p>
                Un sistema de video vigilancia también mejora la operación y
                eficiencia:
              </p>
              <ul>
                <li>
                  Las cámaras ayudan a observar flujos de clientes, optimizar áreas
                  clave y reducir pérdidas por robo interno.
                </li>
                <li>
                  Puedes integrar sistemas de control de acceso y gestión
                  centralizada, conectando todos tus puntos de seguridad en una sola
                  plataforma.
                </li>
                <li>
                  La grabación inteligente y almacenamiento en la nube facilita la
                  recuperación de evidencia después de un incidente.
                </li>
              </ul>
              <p>
                Así, tu negocio no solo detecta intrusiones, sino que también mejora
                la experiencia operativa y la toma de decisiones.
              </p>
            </div>
          </div>

          {/* Botones — siblings de framer-lpb0ca dentro de framer-65xmzm */}
          <div className={`${styles.contentBtns} ${styles.revealUp}`}>
            <Link href="/servicios" className={styles.btnOutline}>
              REGRESAR
            </Link>
            <Link
              href="https://wa.me/524422269192?text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n%20de%20C%C3%A1maras%20de%20seguridad"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              COTIZAR AHORA
              <span className={styles.btnArrowCircle}>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgb(235,26,33)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  width="16"
                  height="16"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          RELATED SERVICES — framer-1cbe5fj
          "Explora más servicios" · 2 cards
      ════════════════════════════════════════════ */}
      <section className={styles.relatedSection}>
        <div className={styles.relatedContainer}>
          <div className={styles.relatedWrapper}>

            {/* Header: title + "Ver todos" button — framer-1mbthgv */}
            <div className={styles.relatedHeader}>
              <div className={styles.relatedTitleRow}>
                <h2 className={styles.relatedTitle}>Explora más servicios</h2>
                <Link href="/servicios" className={styles.relatedAllBtn}>
                  VER TODOS LOS SERVICIOS
                </Link>
              </div>
            </div>

            {/* Grid 2 columnas — framer-944f9s */}
            <div className={styles.relatedGrid}>
              {RELATED_SERVICES.map((svc, i) => (
                <Link
                  key={svc.slug}
                  href={svc.href}
                  className={styles.relatedCard}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {/* Image */}
                  <div className={styles.relatedCardImage}>
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className={styles.relatedCardImg}
                      sizes="(min-width: 1200px) 322px, (min-width: 768px) 50vw, calc(100vw - 40px)"
                    />
                  </div>

                  {/* Content */}
                  <div className={styles.relatedCardContent}>
                    <div className={styles.relatedCardBody}>
                      <h4 className={styles.relatedCardTitle}>{svc.title}</h4>
                      <p className={styles.relatedCardDesc}>{svc.description}</p>
                    </div>

                    {/* "Ver más" button */}
                    <span className={styles.relatedCardBtn}>
                      <span className={styles.relatedCardBtnLabel}>Ver más</span>
                      <span className={styles.relatedCardBtnIcon}>
                        <span className={styles.relatedCardBtnArrow}>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            width="12"
                            height="12"
                            aria-hidden="true"
                          >
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
                        </span>
                      </span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          WA STICKY BUTTON
      ════════════════════════════════════════════ */}
      <a
        href="https://wa.me/524422269192?text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n"
        rel="noopener noreferrer"
        target="_blank"
        className={styles.waButton}
        aria-label="Contactar por WhatsApp"
      >
        <span className={styles.waButtonText}>COTIZA AHORA</span>
        <span className={styles.waButtonIcon}>
          <svg viewBox="0 0 16 16.075" overflow="visible" aria-hidden="true">
          <path
              d="M 13.669 2.334 C 12.177 0.837 10.149 -0.003 8.035 0 C 3.635 0 0.067 3.567 0.067 7.968 C 0.067 9.433 0.462 10.804 1.151 11.984 L 1.13 11.946 L 0 16.075 L 4.223 14.967 C 5.323 15.577 6.634 15.936 8.03 15.936 L 8.033 15.936 C 12.434 15.935 16 12.367 16 7.967 C 16.003 5.854 15.164 3.827 13.669 2.334 Z M 8.033 14.59 C 6.787 14.59 5.624 14.247 4.631 13.651 L 4.419 13.524 L 1.913 14.182 L 2.582 11.738 L 2.424 11.488 C 1.759 10.435 1.408 9.214 1.411 7.969 C 1.411 4.312 4.376 1.347 8.033 1.347 C 11.69 1.347 14.655 4.312 14.655 7.969 C 14.655 11.625 11.69 14.59 8.033 14.59 Z M 11.666 9.631 C 11.467 9.532 10.488 9.051 10.306 8.984 C 10.123 8.917 9.99 8.885 9.857 9.084 C 9.725 9.283 9.344 9.731 9.227 9.864 C 9.111 9.998 8.995 10.014 8.796 9.914 C 8.207 9.679 7.663 9.343 7.189 8.922 C 6.767 8.531 6.399 8.076 6.103 7.575 C 5.972 7.348 6.075 7.241 6.175 7.142 C 6.264 7.053 6.374 6.909 6.473 6.793 C 6.551 6.697 6.618 6.587 6.669 6.469 C 6.727 6.348 6.72 6.216 6.655 6.11 C 6.606 6.012 6.208 5.032 6.042 4.633 C 5.88 4.245 5.716 4.298 5.594 4.292 C 5.478 4.287 5.345 4.286 5.212 4.286 C 5.001 4.291 4.812 4.386 4.683 4.534 C 4.222 5.038 3.945 5.68 3.945 6.382 C 3.945 7.084 4.222 7.726 4.683 8.23 C 5.566 9.281 6.72 10.098 8.022 10.586 C 9.325 11.073 10.466 11.153 11.327 10.966 C 11.853 10.848 12.309 10.479 12.593 9.98 C 12.777 9.648 12.826 9.261 12.731 8.895 C 12.636 8.529 12.218 8.333 11.666 9.631 Z"
              fill="rgb(0, 130, 36)"
            />
          </svg>
        </span>
      </a>

      {/* IntersectionObserver animations */}
      <ServitAnimations />
    </div>
  );
}