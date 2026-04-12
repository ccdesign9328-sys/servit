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

            {/* CTA buttons */}
            <div className={styles.heroBtns}>
              <Link href="/servicios" className={styles.btnOutline}>
                Regresar
              </Link>
              <Link href="/servitcontacto" className={styles.btnPrimary}>
                Cotizar ahora
                <span className={styles.btnArrowCircle}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(235,26,33)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="14"
                    height="14"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
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

          {/* framer-lpb0ca — max-width 930px */}
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

            {/* Botones debajo del contenido */}
            <div className={`${styles.contentBtns} ${styles.revealUp}`}>
              <Link href="/servicios" className={styles.btnOutline}>
                Regresar
              </Link>
              <Link href="/servitcontacto" className={styles.btnPrimary}>
                Cotizar ahora
                <span className={styles.btnArrowCircle}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(235,26,33)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    width="14"
                    height="14"
                    aria-hidden="true"
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </span>
              </Link>
            </div>
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
                  Ver todos los servicios
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
        <span className={styles.waButtonText}>Cotiza ahora</span>
        <span className={styles.waButtonIcon}>
          <svg viewBox="0 0 16 16.075" overflow="visible" aria-hidden="true">
            <path
              d="M 13.669 2.334 C 12.177 0.837 10.149 -0.003 8.035 0 C 3.635 0 0.067 3.567 0.067 7.968 C 0.067 9.433 0.462 10.804 1.151 11.984 L 1.13 11.946 L 0 16.075 L 4.223 14.967 C 5.323 15.577 6.634 15.936 8.03 15.936 L 8.033 15.936 C 12.434 15.935 16 12.367 16 7.967 C 16.003 5.854 15.164 3.827 13.669 2.334 Z M 8.033 14.59 L 8.03 14.59 C 6.787 14.59 5.624 14.247 4.631 13.651 L 4.661 13.667 L 2.019 14.363 L 2.728 11.784 L 2.696 11.752 C 1.942 10.714 1.497 9.395 1.497 7.968 C 1.497 4.352 4.418 1.43 8.036 1.43 C 9.786 1.43 11.431 2.113 12.659 3.344 C 13.886 4.575 14.571 6.22 14.57 7.967 C 14.569 11.586 11.648 14.59 8.033 14.59 Z"
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
