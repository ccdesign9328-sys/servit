/**
 * ServicePage — Componente compartido para todas las páginas de /servicios/*
 * Server Component · CSS Modules · SSR-safe
 * Recibe: título, descripción, imagen, richText (JSX), servicios relacionados,
 *         y el mensaje de WhatsApp personalizado por servicio.
 */
import Image from "next/image";
import Link from "next/link";
import ServitAnimations from "@/components/ServitAnimations";
import styles from "./ServicePage.module.css";

export interface RelatedService {
  slug: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface ServicePageProps {
  /** Texto del h1 y del mensaje WhatsApp */
  title: string;
  /** Párrafo descriptivo del hero */
  titleDescription: string;
  /** Ruta de la imagen principal (relativa a /public) */
  mainImg: string;
  /** Contenido enriquecido — se renderiza tal cual dentro de contentRichText */
  contentRichText: React.ReactNode;
  /** Dos servicios relacionados que aparecen en la grid inferior */
  relatedServices: RelatedService[];
}

const WA_NUMBER = "524422733401";

export default function ServicePage({
  title,
  titleDescription,
  mainImg,
  contentRichText,
  relatedServices,
}: ServicePageProps) {
  const waText = encodeURIComponent(`Hola quiero más información de ${title}`);
  const waHref = `https://wa.me/${WA_NUMBER}?text=${waText}`;

  return (
    <div className={styles.page}>

      {/* ════════════════════════════════════════════
          HERO — fondo negro, texto centrado
      ════════════════════════════════════════════ */}
      <section className={styles.hero} id="hero">
        <div className={styles.heroContainer}>
          <div className={styles.heroTitleGroup}>
            <div className={styles.heroTextGroup}>
              <div className={styles.heroTitleRow}>
                <div className={styles.heroTitleWrap}>
                  <h1 className={styles.heroTitle}>{title}</h1>
                </div>
              </div>
              <p className={styles.heroDesc}>{titleDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          CONTENT SECTION
      ════════════════════════════════════════════ */}
      <section className={styles.contentSection}>
        <div className={styles.contentTopBar} />

        <div className={styles.contentInner}>
          <div className={styles.contentBody}>

            {/* Imagen principal */}
            <div className={`${styles.contentImage} ${styles.revealUp}`}>
              <Image
                src={mainImg}
                alt={title}
                fill
                className={styles.contentImg}
                sizes="(min-width: 1200px) 930px, (min-width: 768px) calc(100vw - 60px), calc(100vw - 40px)"
                priority
              />
            </div>

            {/* Rich text — pasado como children */}
            <div className={`${styles.contentRichText} ${styles.revealUp}`}>
              {contentRichText}
            </div>

          </div>

          {/* Botones */}
          <div className={`${styles.contentBtns} ${styles.revealUp}`}>
            <Link href="/servicios" className={styles.btnOutline}>
              REGRESAR
            </Link>
            <Link
              href={waHref}
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
          RELATED SERVICES
      ════════════════════════════════════════════ */}
      <section className={styles.relatedSection}>
        <div className={styles.relatedContainer}>
          <div className={styles.relatedWrapper}>

            <div className={styles.relatedHeader}>
              <div className={styles.relatedTitleRow}>
                <h2 className={styles.relatedTitle}>Explora más servicios</h2>
                <Link href="/servicios" className={styles.relatedAllBtn}>
                  VER TODOS LOS SERVICIOS
                </Link>
              </div>
            </div>

            <div className={styles.relatedGrid}>
              {relatedServices.map((svc, i) => (
                <Link
                  key={svc.slug}
                  href={svc.href}
                  className={styles.relatedCard}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  <div className={styles.relatedCardImage}>
                    <Image
                      src={svc.image}
                      alt={svc.title}
                      fill
                      className={styles.relatedCardImg}
                      sizes="(min-width: 1200px) 322px, (min-width: 768px) 50vw, calc(100vw - 40px)"
                    />
                  </div>

                  <div className={styles.relatedCardContent}>
                    <div className={styles.relatedCardBody}>
                      <h4 className={styles.relatedCardTitle}>{svc.title}</h4>
                      <p className={styles.relatedCardDesc}>{svc.description}</p>
                    </div>
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
        href={waHref}
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

      <ServitAnimations />
    </div>
  );
}
