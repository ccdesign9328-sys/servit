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
    "https://framerusercontent.com/images/AISD2niQ0IqFHZKL5p7A91zlNB8.png",
  "video-portero-inteligente":
    "https://framerusercontent.com/images/EiRyWyTmUmZTqZM5RaqdU3t70.png",
  "control-acceso":
    "https://framerusercontent.com/images/S0cua7mtiVkhYfAns98CTnUxt0.png",
  alarmas:
    "https://framerusercontent.com/images/Xq8Gss83zAyXuqAyxTwsbbty8.png",
  "cerca-electrica":
    "https://framerusercontent.com/images/4LcHgT064Fcke4pBjeko0JQTw.png",
  "aire-acondicionado":
    "https://framerusercontent.com/images/BX8UlmmGr4o8g0MMR0yguL97Bw.png",
};

export default function ServiciosPage() {
  /* Construir lista ordenada de servicios */
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
        <span className={styles.waButtonText}>Cotiza ahora</span>
        <span className={styles.waButtonIcon}>
          <svg
            viewBox="0 0 16 16.075"
            overflow="visible"
            aria-hidden="true"
          >
            <path
              d="M 13.669 2.334 C 12.177 0.837 10.149 -0.003 8.035 0 C 3.635 0 0.067 3.567 0.067 7.968 C 0.067 9.433 0.462 10.804 1.151 11.984 L 1.13 11.946 L 0 16.075 L 4.223 14.967 C 5.323 15.577 6.634 15.936 8.03 15.936 L 8.033 15.936 C 12.434 15.935 16 12.367 16 7.967 C 16.003 5.854 15.164 3.827 13.669 2.334 Z M 8.033 14.59 L 8.03 14.59 C 6.787 14.59 5.624 14.247 4.631 13.651 L 4.661 13.667 L 2.019 14.363 L 2.728 11.784 L 2.696 11.752 C 1.942 10.714 1.497 9.395 1.497 7.968 C 1.497 4.352 4.418 1.43 8.036 1.43 C 9.786 1.43 11.431 2.113 12.659 3.344 C 13.886 4.575 14.571 6.22 14.57 7.967 C 14.569 11.586 11.648 14.59 8.033 14.59 Z"
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
