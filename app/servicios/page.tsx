/**
 * /servicios — Migración nativa desde Framer
 * Server Component · CSS Modules · SSR-safe · sin dependencias Framer
 * Fuente original: framer-html/service.html (framer-UpYsh)
 * Animaciones de scroll via ServitAnimations (client component aislado)
 */
import Image from "next/image";
import Link from "next/link";
import ServitAnimations from "@/components/ServitAnimations";
import styles from "./page.module.css";
import { services } from "@/lib/services";

/* ── Orden de servicios igual al original de Framer ──────────────────── */
const SERVICE_ORDER = [
  "camaras-de-seguridad",
  "video-portero-inteligente",
  "control-acceso",
  "alarmas",
  "cerca-electrica",
  "aire-acondicionado",
];

/* Imágenes originales del Framer (service.html) por slug
   Corresponden a las tarjetas del desktop en framer-ebd6wv */
const SERVICE_IMAGES: Record<string, string> = {
  "camaras-de-seguridad":
    "/products/camaras-de-seguridad.png",
  "video-portero-inteligente":
    "/products/video-portero-inteligente.png",
  "control-acceso":
    "/products/control-acceso.png",
  alarmas:
    "/products/alarmas.png",
  "cerca-electrica":
    "/products/cerca-electrica.png",
  "aire-acondicionado":
    "/products/aire-acondicionado.png",
};

export default function ServiciosPage() {
  const orderedServices = SERVICE_ORDER.map((slug) =>
    services.find((s) => s.slug === slug)
  ).filter(Boolean) as typeof services;

  return (
    <div className={styles.page}>

      {/* ════════════════════════════════════════════
          HERO — imagen de fondo, texto centrado en tablet/mobile
          Framer: <section class="framer-1j8t9bk" data-framer-name="Hero Section ">
          Imagen: RhpKA821vWVNI6Sgp1enL5sO0.png (5760×2004)
      ════════════════════════════════════════════ */}
      <section className={styles.hero} id="hero">
        {/* Fondo */}
        <div className={styles.heroBgWrap}>
          <Image
            src="https://framerusercontent.com/images/RhpKA821vWVNI6Sgp1enL5sO0.png"
            alt="Nuestros servicios"
            fill
            className={styles.heroBgImg}
            priority
            sizes="100vw"
          />
        </div>

        {/* framer-144w096 — animación revealUp */}
        <div className={styles.heroContainer}>

          {/* framer-1o3hoqg — Sectionn Title */}
          <div className={styles.heroTitleGroup}>
            <h1 className={styles.heroTitle}>Nuestros servicios</h1>
            <p className={styles.heroDesc}>
              Instalación profesional de cámaras, cercos eléctricos, control de
              accesos, aire acondicionado y más
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SERVICE SECTION
          Framer: <section class="framer-1i6cb7q" data-framer-name="Service Section">
          Fondo: #f6f7f9
          Contiene framer-1tj52w8 > framer-13k26p > framer-ebd6wv (grid 2 cols)
      ════════════════════════════════════════════ */}
      <section className={styles.serviceSection}>

        {/* framer-1tj52w8 — border-bottom 1px rgba(0,0,0,0.1) */}
        <div className={styles.cardContainer}>

          {/* framer-13k26p — Card Wrapper */}
          <div className={styles.cardWrapper}>

            {/* framer-ebd6wv — grid 2 columnas desktop */}
            <div className={styles.serviceGrid}>
              {orderedServices.map((service, i) => {
                const imgSrc =
                  SERVICE_IMAGES[service.slug] || service.image;

                return (
                  /* framer-2vs96y / framer-MIfd4 — card link */
                  <Link
                    key={service.slug}
                    href={`/servicios/${service.slug}`}
                    className={styles.serviceCard}
                    style={{ transitionDelay: `${i * 0.07}s` }}
                  >
                    {/* framer-17jkgpc — imagen de la card */}
                    <div className={styles.cardImage}>
                      <Image
                        src={imgSrc}
                        alt={service.title}
                        fill
                        className={styles.cardImg}
                        sizes="(min-width: 1200px) 322px, (min-width: 768px) 50vw, calc(100vw - 40px)"
                      />
                    </div>

                    {/* framer-1jimn4a — Content & Button */}
                    <div className={styles.cardContentWrap}>

                      {/* framer-19hjo1w — Content */}
                      <div className={styles.cardContent}>

                        {/* framer-1aeiy7g — title rich text */}
                        <div className={styles.cardTitleText}>
                          <h4 className={styles.cardTitle}>{service.title}</h4>
                        </div>

                        {/* framer-6o2ggy — Button Number group */}
                        <div className={styles.cardButtonGroup}>

                          {/* framer-xl0908 — Number row (vacío en original) */}
                          <div className={styles.cardButtonNumber} />

                          {/* framer-19k0ozf — Button text container */}
                          <div className={styles.cardButtonTextWrap}>

                            {/* framer-v98dxq — descripción */}
                            <p className={styles.cardDesc}>
                              {service.shortDescription}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* framer-bg7jd9 — Button "Ver más" */}
                      <span className={styles.cardBtn}>
                        <span className={styles.cardBtnLabel}>Ver más</span>
                        {/* framer-jt0lh9 — Icon circle red */}
                        <span className={styles.cardBtnIcon}>
                          {/* framer-13m42uf — arrow rotated -45deg */}
                          <span className={styles.cardBtnArrow}>
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
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          WA STICKY BUTTON — framer-11q5eok-container
          Posición fija bottom-right, igual en todos los breakpoints
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
          <svg
            viewBox="0 0 16 16.075"
            overflow="visible"
            aria-hidden="true"
          >
           <path
              d="M 13.669 2.334 C 12.177 0.837 10.149 -0.003 8.035 0 C 3.635 0 0.067 3.567 0.067 7.968 C 0.067 9.433 0.462 10.804 1.151 11.984 L 1.13 11.946 L 0 16.075 L 4.223 14.967 C 5.323 15.577 6.634 15.936 8.03 15.936 L 8.033 15.936 C 12.434 15.935 16 12.367 16 7.967 C 16.003 5.854 15.164 3.827 13.669 2.334 Z M 8.033 14.59 C 6.787 14.59 5.624 14.247 4.631 13.651 L 4.419 13.524 L 1.913 14.182 L 2.582 11.738 L 2.424 11.488 C 1.759 10.435 1.408 9.214 1.411 7.969 C 1.411 4.312 4.376 1.347 8.033 1.347 C 11.69 1.347 14.655 4.312 14.655 7.969 C 14.655 11.625 11.69 14.59 8.033 14.59 Z M 11.666 9.631 C 11.467 9.532 10.488 9.051 10.306 8.984 C 10.123 8.917 9.99 8.885 9.857 9.084 C 9.725 9.283 9.344 9.731 9.227 9.864 C 9.111 9.998 8.995 10.014 8.796 9.914 C 8.207 9.679 7.663 9.343 7.189 8.922 C 6.767 8.531 6.399 8.076 6.103 7.575 C 5.972 7.348 6.075 7.241 6.175 7.142 C 6.264 7.053 6.374 6.909 6.473 6.793 C 6.551 6.697 6.618 6.587 6.669 6.469 C 6.727 6.348 6.72 6.216 6.655 6.11 C 6.606 6.012 6.208 5.032 6.042 4.633 C 5.88 4.245 5.716 4.298 5.594 4.292 C 5.478 4.287 5.345 4.286 5.212 4.286 C 5.001 4.291 4.812 4.386 4.683 4.534 C 4.222 5.038 3.945 5.68 3.945 6.382 C 3.945 7.084 4.222 7.726 4.683 8.23 C 5.566 9.281 6.72 10.098 8.022 10.586 C 9.325 11.073 10.466 11.153 11.327 10.966 C 11.853 10.848 12.309 10.479 12.593 9.98 C 12.777 9.648 12.826 9.261 12.731 8.895 C 12.636 8.529 12.218 8.333 11.666 9.631 Z"
              fill="rgb(0, 130, 36)"
            />
          </svg>
        </span>
      </a>

      {/* Animaciones IntersectionObserver — client component aislado */}
      <ServitAnimations />
    </div>
  );
}
