/**
 * /servithome — Migración nativa desde Framer
 * Server Component · CSS Modules · SSR-safe · sin dependencias Framer
 * Animaciones de scroll via ServitAnimations (client component aislado)
 */
import Image from "next/image";
import Link from "next/link";
import ServitAnimations from "@/components/ServitAnimations";
import styles from "./page.module.css";
import { services } from "@/lib/services";

/* ── Orden de servicios igual al original de Framer ─────────── */
const SERVICE_ORDER = [
  "camaras-de-seguridad",
  "video-portero-inteligente",
  "control-acceso",
  "alarmas",
  "cerca-electrica",
  "aire-acondicionado",
];

export default function ServitHomePage() {
  return (
    <div className={styles.page}>

      {/* ════════════════════════════════════════════
          HERO — imagen de fondo completa
          texto izquierda, overlay degradado negro→transparente
      ════════════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroBgWrap}>
          <div>
            <Image src="/hero.gif" alt="Tecnología de seguridad SERVIT" fill className={styles.heroBgImg} priority />
          </div>
        </div>
        <div className={styles.heroOverlay} />

        <div className={styles.heroContent}>
          {/* heroTextWrap — equivalente a .framer-1ry0tjn */}
          <div className={styles.heroTextWrap}>
            <h1 className={`${styles.heroTitle} ${styles.revealUp}`}>
              Tecnología en seguridad y confort para tu hogar, negocio y empresa
            </h1>

            <p
              className={`${styles.heroDesc} ${styles.revealUp} ${styles.delay1}`}
            >
              Soluciones a medida, con instalación profesional y soporte continuo
              para una experiencia simple y confiable.
            </p>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SERVICIOS — equivalente a .framer-atbboe
          El anchor #todosproductos está en el div de fondo (.servicesBg)
          igual que en Framer: <div class="framer-1cfqdja" id="todosproductos">
      ════════════════════════════════════════════ */}
      <section className={styles.servicesSection}>
        {/* Fondo gris decorativo + anchor de navegación — framer-1cfqdja */}
        <div className={styles.servicesBg} id="todosproductos" />

        {/* Contenedor centrado — framer-or2int */}
        <div className={styles.servicesInner}>

          {/* Header — framer-1u6t77s con animación de entrada */}
          <div
            className={`${styles.servicesHeader} ${styles.revealUp}`}
          >
            <h2 className={styles.servicesSectionTitle}>
              Descubre nuestros productos
            </h2>
          </div>

          {/* Card wrapper — framer-16h4iqj */}
          <div className={styles.servicesCardWrapper}>

            {/* Grid 2 columnas — framer-bc2930 */}
            <div className={styles.servicesGrid}>
              {SERVICE_ORDER.map((slug, idx) => {
                const svc = services.find((s) => s.slug === slug);
                if (!svc) return null;
                return (
                  /* Card — framer-MIfd4 framer-v-2vs96y (Desktop: ROW)
                     framer-v-o07k0y (Tablet: ROW height auto)
                     framer-v-mkc10v (Mobile: COLUMN) */
                  <Link
                    key={svc.slug}
                    href={`/servicios/${svc.slug}`}
                    className={styles.serviceCard}
                    id={`${svc.slug}-productos`}
                    style={{ transitionDelay: `${idx * 0.08}s` }}
                  >
                    {/* Imagen — framer-17jkgpc */}
                    <div className={styles.serviceCardImg}>
                      <Image
                        src={`/products/${svc.slug}.png`}
                        alt={svc.title}
                        fill
                        sizes="(max-width:767px) 100vw, (max-width:1199px) 50vw, (min-width:1200px) calc((min(100vw - 60px, 1312px) - 24px) / 2)"
                        quality={80}
                      />
                    </div>

                    {/* Contenido derecho — framer-1jimn4a */}
                    <div className={styles.serviceCardBody}>

                      {/* Área de texto — framer-19hjo1w */}
                      <div className={styles.serviceCardContent}>
                        {/* Título h4 — framer-styles-preset-3ubip */}
                        <h4 className={styles.serviceCardTitle}>
                          {svc.title}
                        </h4>

                        {/* Descripción wrapper — framer-6o2ggy + framer-19k0ozf */}
                        <div className={styles.serviceCardDescWrap}>
                          <p className={styles.serviceCardDesc}>
                            {svc.shortDescription}
                          </p>
                        </div>
                      </div>

                      {/* Botón "Ver más" — framer-bg7jd9 */}
                      <span className={styles.serviceCardBtn}>
                        <span className={styles.serviceCardBtnText}>
                          Ver más
                        </span>
                        {/* Ícono circular rojo — framer-jt0lh9 */}
                        <span className={styles.serviceCardBtnIcon}>
                          <svg viewBox="0 0 24 24">
                            <line x1="5" y1="12" x2="19" y2="12" />
                            <polyline points="12 5 19 12 12 19" />
                          </svg>
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
          TRUST / ABOUT BAR — equivalente a .framer-qj5ku9
          Layout: imagen izquierda + card blanca derecha con
          título "Quiénes somos", h2 y descripción de SERVIT
      ════════════════════════════════════════════ */}
      <div className={styles.trustSection}>
        {/* framer-jb9mf7: contenedor ROW centrado, max-width:1312px */}
        <div className={styles.trustInner}>
          {/* framer-1byak3l: wrapper ROW imagen + card */}
          <div className={styles.trustRow}>

            {/* Imagen — framer-1397e8p:
                Desktop: flex:1 align-self:stretch (ocupa altura de la card)
                Tablet:  aspect-ratio:1.34345 height:527px
                Mobile:  aspect-ratio:1.16667 height:300px
                Animación: translateX(-50px) desktop / translateY(50px) tablet+mobile */}
            <div className={styles.trustImgWrap}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/home/qsimg.jpg"
                alt="Equipo SERVIT"
                style={{
                  display: "block",
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  borderRadius: "inherit",
                }}
                decoding="async"
              />
            </div>

            {/* Card blanca — framer-dmws6r:
                bg:#fff, border-radius:24px, padding:50px 40px
                Animación: translateX(50px) desktop / translateY(50px) tablet+mobile */}
            <div className={styles.trustCard}>
              {/* framer-6qdbkw: flex column, gap:94px desktop */}
              <div className={styles.trustCardContent}>

                {/* framer-1chy2ly: bloque label + h2 */}
                <div className={styles.trustCardTitle}>
                  {/* Label rojo — preset-176vqfs */}
                  <p className={styles.trustLabel}>— Quiénes somos</p>
                  {/* H2 — preset-1i6aecd: 56px weight:600 letter-spacing:-2px */}
                  <h2 className={styles.trustH2}>
                    Tus aliados en la seguridad
                  </h2>
                </div>

                {/* framer-2wvz0f: bloque párrafo */}
                <div className={styles.trustCardBody}>
                  {/* framer-zs89l9: opacity:0.8, preset-aeocj2 16px */}
                  <p className={styles.trustDesc}>
                    En SERVIT nos especializamos en brindar soluciones
                    integrales de seguridad, automatización y climatización.
                    Con productos confiables, instalación profesional y
                    atención personalizada, ya sea para casa, oficina,
                    comercio o industria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════
          ABOUT / MANTENIMIENTO — equivalente a .framer-h6o080
          id="servicios" (el id del original en Framer)
          Layout: columna izq (título + imagen) | columna der (3 cards grid)
      ════════════════════════════════════════════ */}
      <section className={styles.aboutSection} id="servicios">
        {/* framer-69u8nh: flex column flex-end, gap:100px, max-width:1312px */}
        <div className={styles.aboutInner}>

          {/* framer-18vekv6: fila ROW space-between align-end */}
          <div className={styles.aboutTopRow}>

            {/* Columna izquierda — framer-11h6qgn:
                flex:1, max-width:530px, gap:48px
                Animación: translateY(50px) */}
            <div className={styles.aboutLeft}>

              {/* framer-3enix4: grupo título, gap:24px, max-width:429px */}
              <div className={styles.aboutTitleGroup}>
                {/* H2 — preset-1i6aecd: 56px weight:600 */}
                <h2 className={styles.aboutH2}>
                  Servicio de mantenimiento correctivo y preventivo
                </h2>
                {/* Descripción — framer-jakcd1: opacity:0.8 */}
                <p className={styles.aboutDesc}>
                  Brindamos mantenimiento especializado para sistemas de
                  seguridad y confort, optimizando su funcionamiento y
                  prolongando la vida útil de tus equipos.
                </p>
              </div>

              {/* Imagen — framer-89wp66: aspect-ratio:1.50765, border-radius:16px */}
              <div className={styles.aboutImgWrap}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/home/sicimg.jpg"
                  alt="Mantenimiento SERVIT"
                  style={{
                    display: "block",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    borderRadius: "inherit",
                  }}
                  decoding="async"
                />
              </div>
            </div>

            {/* Columna derecha — framer-t4rvp5:
                flex:1 0 0, width:1px, max-width:562px, gap:24px, align-items:center
                Desktop: flex column (3 cards stacked)
                Tablet: flex ROW (3 cards side by side, height:348px each)
                Mobile: flex column, gap:16px */}
            <div className={styles.aboutRight}>

              {/* Card 1 — framer-1vhb2p9-container:
                  flex:none, width:100%, height:auto (desktop)
                  Animación: translateY(50px) */}
              <div
                className={styles.aboutCard}
                style={{ transitionDelay: "0s" }}
              >
                {/* framer-pl5jfb: flex column, gap:24px */}
                <div className={styles.aboutCardInner}>
                  {/* Ícono — framer-1bzvlde: aspect-ratio:1, width:40px */}
                  <div className={styles.aboutCardIcon}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/home/R8HdQcgzsMiShql7LtNHvwNj42U.svg"
                      alt=""
                      width={40}
                      height={40}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  {/* framer-1gdxp15: flex column, gap:16px */}
                  <div className={styles.aboutCardText}>
                    <h4 className={styles.aboutCardTitle}>
                      Mantenimiento cámaras de seguridad
                    </h4>
                    <p className={styles.aboutCardDesc}>
                      Evita puntos ciegos, pérdida de grabaciones o mal funcionamiento.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 — framer-7o3ks0-container */}
              <div
                className={styles.aboutCard}
                style={{ transitionDelay: "0.08s" }}
              >
                <div className={styles.aboutCardInner}>
                  <div className={styles.aboutCardIcon}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/home/3j9HPwlRzIQfAaIPCRacedUS1ro.svg"
                      alt=""
                      width={49}
                      height={40}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className={styles.aboutCardText}>
                    <h4 className={styles.aboutCardTitle}>
                      Mantenimiento para minisplits y aire acondicionado
                    </h4>
                    <p className={styles.aboutCardDesc}>
                      Un minisplit limpio consume menos energía y enfría mejor.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 — framer-4tahzm-container */}
              <div
                className={styles.aboutCard}
                style={{ transitionDelay: "0.16s" }}
              >
                <div className={styles.aboutCardInner}>
                  <div className={styles.aboutCardIcon}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/home/R8HdQcgzsMiShql7LtNHvwNj42U.svg"
                      alt=""
                      width={40}
                      height={40}
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div className={styles.aboutCardText}>
                    <h4 className={styles.aboutCardTitle}>
                      Mantenimiento para cercos eléctricos
                    </h4>
                    <p className={styles.aboutCardDesc}>
                      Garantiza que el perímetro de tu propiedad esté siempre activo y protegido.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ── framer-1vj8isy — "Process Card List"
              Sibling de framer-18vekv6 dentro de framer-69u8nh (aboutInner)
              Desktop: grid 3 col, gap:24px
              Tablet: grid 2 col, gap:20px
              Mobile: grid 1 col, gap:16px
              Cada card: icono 48×48 border-radius:16px + h4 (sin descripción)
              Animación: translateY(50px) ── */}
          <div className={styles.processCards}>

            {/* Card 1 — framer-1ffu6jp-container */}
            <div
              className={styles.processCard}
              style={{ transitionDelay: "0s" }}
            >
              {/* framer-fysdn5: icono 48×48, border-radius:16px */}
              <div className={styles.processCardIcon}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/home/OJge6PxltyJ24LEGkdAyGk6kg.svg"
                  alt=""
                  width={48}
                  height={48}
                  style={{ display:"block", width:"100%", height:"100%", objectFit:"cover", borderRadius:"inherit" }}
                />
              </div>
              {/* framer-31soi6: flex column, gap:15px */}
              <div className={styles.processCardText}>
                {/* H4 — preset-3ubip: 22px weight:600 */}
                <h4 className={styles.processCardTitle}>
                  Servicio en Querétaro y alrededores
                </h4>
              </div>
            </div>

            {/* Card 2 — framer-1ffu6jp-container */}
            <div
              className={styles.processCard}
              style={{ transitionDelay: "0.08s" }}
            >
              <div className={styles.processCardIcon}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/home/U61snqzTGf2Rdt5qB2JB3xh1I.svg"
                  alt=""
                  width={48}
                  height={49}
                  style={{ display:"block", width:"100%", height:"100%", objectFit:"cover", borderRadius:"inherit" }}
                />
              </div>
              <div className={styles.processCardText}>
                <h4 className={styles.processCardTitle}>
                  Cientos de clientes satisfechos
                </h4>
              </div>
            </div>

            {/* Card 3 — framer-1ffu6jp-container */}
            <div
              className={styles.processCard}
              style={{ transitionDelay: "0.16s" }}
            >
              <div className={styles.processCardIcon}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/home/dYAA9zkYABjRhTSBRJi2JZJpCo.svg"
                  alt=""
                  width={48}
                  height={49}
                  style={{ display:"block", width:"100%", height:"100%", objectFit:"cover", borderRadius:"inherit" }}
                />
              </div>
              <div className={styles.processCardText}>
                <h4 className={styles.processCardTitle}>
                  Cotizaciones sin compromiso
                </h4>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          SOPORTE POSVENTA — equivalente a .framer-1upn7bu
          Layout ROW: contenido izquierda (biau4g) + imagen derecha (1026ja9)
          Tablet/Mobile: columna, imagen al final (order:1)
      ════════════════════════════════════════════ */}
      <section className={styles.maintenanceSection}>
        {/* framer-1tz26an: flex ROW space-between */}
        <div className={styles.maintenanceInner}>

          {/* Imagen derecha — framer-1026ja9:
              aspect-ratio:0.878477, height:683px, border-radius:16px
              flex:1 0 0, width:1px, max-width:600px
              Tablet: order:1, width:100%, height:650px
              Mobile: order:1, width:100%, height:399px */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/home/mainimg.jpg"
            alt="Soporte posventa SERVIT"
            className={styles.maintenanceImg}
            decoding="async"
          />

          {/* Contenido izquierda — framer-biau4g:
              flex:1, max-width:500px, gap:56px
              Animación: translateX(-50px) */}
          <div className={styles.maintenanceBiau}>

            {/* framer-y42l3d: título + desc, gap:20px, max-width:541px */}
            <div className={styles.maintenanceTitleGroup}>
              {/* H2 — preset-1i6aecd: 56px weight:600 letter-spacing:-2px */}
              <h2 className={styles.maintenanceH2}>
                Soporte posventa y mantenimiento
              </h2>
              {/* Descripción — framer-1w0kfjc: opacity:0.8, preset-aeocj2 */}
              <p className={styles.maintenanceDesc}>
                Te acompañamos después de la instalación con servicio técnico,
                mantenimiento preventivo y atención personalizada
              </p>
            </div>

            {/* framer-18cn9vu: flex wrap, gap:28px, place-content:center flex-start */}
            <div className={styles.maintenanceCardWrap}>

              {/* Card 1 — framer-qmngh3-container: width:42% desktop / 48% tablet */}
              <div className={styles.maintenanceFeatureItem}>
                {/* framer-aqJke.framer-1ootv0z: flex column, gap:16px */}
                <div className={styles.maintenanceFeatureCard}>
                  {/* Ícono monitor/pantalla — framer-kUWHQ */}
                  <svg
                    className={styles.maintenanceFeatureIcon}
                    viewBox="0 0 32 33"
                    fill="rgb(255,99,51)"
                    aria-hidden="true"
                    width={32}
                    height={33}
                  >
                   <path d="M 28.8 0 L 3.2 0 C 1.433 0.002 0.002 1.433 0 3.2 L 0 18.133 C 0.002 19.9 1.433 21.332 3.2 21.333 L 3.733 21.333 L 3.733 21.867 C 3.733 22.75 4.45 23.467 5.333 23.467 L 6.933 23.467 C 7.817 23.467 8.533 22.75 8.533 21.867 L 8.533 21.333 L 23.467 21.333 L 23.467 21.867 C 23.467 22.75 24.183 23.467 25.067 23.467 L 26.667 23.467 C 27.55 23.467 28.267 22.75 28.267 21.867 L 28.267 21.333 L 28.8 21.333 C 30.567 21.332 31.998 19.9 32 18.133 L 32 3.2 C 31.998 1.433 30.567 0.002 28.8 0 Z M 7.467 21.867 C 7.467 22.008 7.41 22.144 7.31 22.244 C 7.21 22.344 7.075 22.4 6.933 22.4 L 5.333 22.4 C 5.192 22.4 5.056 22.344 4.956 22.244 C 4.856 22.144 4.8 22.008 4.8 21.867 L 4.8 21.333 L 7.467 21.333 Z M 27.2 21.867 C 27.2 22.008 27.144 22.144 27.044 22.244 C 26.944 22.344 26.808 22.4 26.667 22.4 L 25.067 22.4 C 24.925 22.4 24.79 22.344 24.69 22.244 C 24.59 22.144 24.533 22.008 24.533 21.867 L 24.533 21.333 L 27.2 21.333 Z M 30.933 18.133 C 30.933 19.311 29.978 20.267 28.8 20.267 L 3.2 20.267 C 2.022 20.267 1.067 19.311 1.067 18.133 L 1.067 3.2 C 1.067 2.022 2.022 1.067 3.2 1.067 L 28.8 1.067 C 29.978 1.067 30.933 2.022 30.933 3.2 Z" fill="rgb(255, 99, 51)" height="23.4666px" id="ybGTZWX5W" transform="translate(0 4.767)" width="31.9999px"/><path d="M 8.533 0 C 3.821 0 0 3.821 0 8.533 C 0 13.246 3.821 17.067 8.533 17.067 C 13.246 17.067 17.067 13.246 17.067 8.533 C 17.061 3.823 13.244 0.006 8.533 0 Z M 8.533 16 C 4.41 16 1.067 12.657 1.067 8.533 C 1.067 4.41 4.41 1.067 8.533 1.067 C 12.657 1.067 16 4.41 16 8.533 C 15.996 12.655 12.655 15.996 8.533 16 Z" fill="rgb(255, 99, 51)" height="17.0666px" id="m3hE0DvJY" transform="translate(2.133 6.9)" width="17.0666px"/><path d="M 9.598 6.07 C 9.391 6.281 9.15 6.453 8.885 6.581 C 8.816 6.615 8.744 6.645 8.672 6.671 C 9.135 6.048 9.422 5.313 9.502 4.541 C 9.544 4.193 9.507 3.84 9.394 3.508 C 9.282 3.177 9.096 2.874 8.851 2.624 C 8.518 2.288 8.118 2.026 7.678 1.854 C 7.282 1.677 6.853 1.59 6.42 1.599 C 5.987 1.608 5.561 1.714 5.174 1.908 C 4.928 2.016 4.706 2.173 4.521 2.369 C 4.337 2.565 4.193 2.796 4.1 3.048 C 3.978 3.343 3.948 3.668 4.013 3.981 C 4.078 4.294 4.236 4.579 4.466 4.801 C 4.676 5.007 4.849 5.248 4.977 5.513 C 5.011 5.581 5.04 5.651 5.066 5.723 C 4.443 5.261 3.707 4.976 2.936 4.897 C 2.59 4.857 2.238 4.894 1.908 5.007 C 1.577 5.119 1.276 5.303 1.026 5.547 C 0.69 5.879 0.428 6.279 0.257 6.72 C 0.079 7.115 -0.009 7.546 0.001 7.979 C 0.01 8.413 0.116 8.839 0.311 9.227 C 0.42 9.471 0.577 9.691 0.772 9.874 C 0.967 10.058 1.197 10.2 1.448 10.293 C 1.653 10.369 1.87 10.408 2.088 10.411 C 2.297 10.41 2.504 10.367 2.697 10.284 C 2.889 10.202 3.063 10.082 3.208 9.931 C 3.414 9.721 3.656 9.548 3.921 9.421 C 3.988 9.387 4.057 9.358 4.128 9.333 C 3.667 9.955 3.381 10.69 3.302 11.461 C 3.26 11.808 3.297 12.161 3.408 12.492 C 3.52 12.824 3.705 13.126 3.949 13.377 C 4.282 13.713 4.682 13.975 5.122 14.147 C 5.506 14.311 5.919 14.397 6.337 14.4 C 6.786 14.399 7.228 14.293 7.629 14.091 C 7.874 13.982 8.095 13.825 8.279 13.629 C 8.463 13.433 8.606 13.203 8.699 12.951 C 8.82 12.656 8.85 12.331 8.785 12.019 C 8.72 11.707 8.562 11.421 8.332 11.2 C 8.123 10.993 7.95 10.751 7.823 10.485 C 7.789 10.418 7.76 10.349 7.734 10.278 C 8.357 10.739 9.092 11.025 9.863 11.104 C 9.953 11.113 10.044 11.118 10.135 11.118 C 10.749 11.121 11.339 10.882 11.779 10.453 C 12.115 10.12 12.377 9.721 12.549 9.28 C 12.726 8.884 12.813 8.454 12.803 8.02 C 12.793 7.586 12.687 7.161 12.492 6.773 C 12.383 6.529 12.226 6.309 12.031 6.125 C 11.836 5.942 11.606 5.8 11.355 5.707 C 11.06 5.583 10.734 5.551 10.42 5.616 C 10.106 5.681 9.82 5.84 9.598 6.07 Z M 5.069 8 C 5.069 7.264 5.666 6.667 6.402 6.667 C 6.756 6.667 7.095 6.808 7.345 7.058 C 7.594 7.309 7.734 7.648 7.734 8.002 C 7.733 8.355 7.592 8.694 7.342 8.944 C 7.092 9.194 6.752 9.334 6.399 9.333 C 5.664 9.331 5.069 8.735 5.069 8 Z M 5.11 3.406 C 5.209 3.162 5.402 2.969 5.647 2.87 C 5.898 2.744 6.175 2.675 6.456 2.671 C 6.737 2.666 7.016 2.724 7.272 2.842 C 7.576 2.957 7.852 3.135 8.082 3.365 C 8.22 3.503 8.325 3.671 8.387 3.856 C 8.45 4.041 8.469 4.238 8.443 4.432 C 8.384 5.023 8.162 5.586 7.803 6.06 C 7.398 5.764 6.909 5.603 6.407 5.602 C 6.321 5.606 6.235 5.614 6.15 5.628 C 6.105 5.428 6.036 5.234 5.945 5.051 C 5.763 4.679 5.521 4.34 5.227 4.048 C 5.139 3.969 5.079 3.863 5.058 3.746 C 5.037 3.629 5.055 3.509 5.11 3.404 Z M 3.451 8.466 C 3.079 8.645 2.741 8.888 2.451 9.182 C 2.371 9.27 2.264 9.328 2.147 9.348 C 2.03 9.368 1.91 9.349 1.805 9.293 C 1.684 9.244 1.575 9.172 1.483 9.08 C 1.39 8.989 1.317 8.88 1.268 8.759 C 1.141 8.508 1.073 8.231 1.068 7.949 C 1.063 7.667 1.123 7.388 1.241 7.133 C 1.356 6.829 1.534 6.552 1.763 6.321 C 1.901 6.183 2.069 6.08 2.254 6.017 C 2.439 5.955 2.636 5.936 2.83 5.962 C 3.421 6.023 3.985 6.244 4.46 6.602 C 4.165 7.007 4.004 7.495 4.002 7.996 C 4.006 8.083 4.015 8.17 4.028 8.256 C 3.828 8.301 3.634 8.37 3.451 8.463 Z M 7.692 12.601 C 7.643 12.721 7.571 12.83 7.479 12.921 C 7.388 13.013 7.279 13.085 7.159 13.134 C 6.908 13.261 6.631 13.329 6.35 13.334 C 6.068 13.339 5.79 13.281 5.534 13.163 C 5.23 13.048 4.953 12.87 4.722 12.641 C 4.584 12.502 4.48 12.334 4.418 12.148 C 4.356 11.963 4.337 11.766 4.363 11.572 C 4.422 10.98 4.644 10.416 5.003 9.942 C 5.407 10.239 5.895 10.399 6.396 10.401 L 6.402 10.401 C 6.489 10.398 6.575 10.389 6.66 10.376 C 6.705 10.576 6.774 10.77 6.867 10.953 C 7.047 11.325 7.289 11.663 7.582 11.955 C 7.668 12.035 7.726 12.141 7.746 12.258 C 7.766 12.374 7.747 12.493 7.692 12.598 Z M 11.564 8.873 C 11.449 9.176 11.272 9.453 11.043 9.683 C 10.904 9.821 10.736 9.925 10.55 9.988 C 10.365 10.05 10.167 10.07 9.973 10.044 C 9.382 9.982 8.818 9.761 8.343 9.404 C 8.527 9.174 8.661 8.908 8.735 8.623 C 8.81 8.338 8.824 8.041 8.776 7.75 C 8.977 7.706 9.171 7.637 9.354 7.544 C 9.726 7.364 10.065 7.121 10.356 6.826 C 10.436 6.739 10.542 6.681 10.659 6.661 C 10.776 6.641 10.895 6.661 11 6.716 C 11.119 6.766 11.228 6.838 11.32 6.93 C 11.411 7.021 11.484 7.13 11.533 7.25 C 11.659 7.5 11.728 7.776 11.733 8.056 C 11.738 8.337 11.681 8.615 11.564 8.87 Z M 24.536 0 L 22.402 0 C 22.261 0 22.125 0.056 22.025 0.156 C 21.925 0.256 21.869 0.392 21.869 0.533 C 21.869 0.675 21.925 0.81 22.025 0.91 C 22.125 1.01 22.261 1.067 22.402 1.067 L 24.536 1.067 C 24.83 1.067 25.069 0.828 25.069 0.533 C 25.069 0.239 24.83 0 24.536 0 Z" fill="rgb(255, 99, 51)" height="14.399889972407987px" id="eIeCDP4Zy" transform="translate(4.264 7.433)" width="25.068939535522464px"/><path d="M 0.533 1.067 C 0.828 1.067 1.067 0.828 1.067 0.533 C 1.067 0.239 0.828 0 0.533 0 C 0.239 0 0 0.239 0 0.533 C 0 0.828 0.239 1.067 0.533 1.067 Z" fill="rgb(255, 99, 51)" height="1.0665899999999997px" id="Q0xpju2F6" transform="translate(26.133 9.566)" width="1.066600000000001px"/><path d="M 0.533 1.067 C 0.828 1.067 1.067 0.828 1.067 0.533 C 1.067 0.239 0.828 0 0.533 0 C 0.239 0 0 0.239 0 0.533 C 0 0.828 0.239 1.067 0.533 1.067 Z" fill="rgb(255, 99, 51)" height="1.0665899999999997px" id="GiPEeDniv" transform="translate(28.267 9.566)" width="1.066600000000001px"/><path d="M 7.467 0 L 0.533 0 C 0.392 0 0.256 0.056 0.156 0.156 C 0.056 0.256 0 0.392 0 0.533 C 0 0.675 0.056 0.81 0.156 0.91 C 0.256 1.01 0.392 1.067 0.533 1.067 L 7.467 1.067 C 7.608 1.067 7.744 1.01 7.844 0.91 C 7.944 0.81 8 0.675 8 0.533 C 8 0.392 7.944 0.256 7.844 0.156 C 7.744 0.056 7.608 0 7.467 0 Z M 7.467 2.133 L 0.533 2.133 C 0.392 2.133 0.256 2.19 0.156 2.29 C 0.056 2.39 0 2.525 0 2.667 C 0 2.808 0.056 2.944 0.156 3.044 C 0.256 3.144 0.392 3.2 0.533 3.2 L 7.467 3.2 C 7.608 3.2 7.744 3.144 7.844 3.044 C 7.944 2.944 8 2.808 8 2.667 C 8 2.525 7.944 2.39 7.844 2.29 C 7.744 2.19 7.608 2.133 7.467 2.133 Z M 7.467 4.267 L 0.533 4.267 C 0.392 4.267 0.256 4.323 0.156 4.423 C 0.056 4.523 0 4.659 0 4.8 C 0 4.941 0.056 5.077 0.156 5.177 C 0.256 5.277 0.392 5.333 0.533 5.333 L 7.467 5.333 C 7.608 5.333 7.744 5.277 7.844 5.177 C 7.944 5.077 8 4.941 8 4.8 C 8 4.659 7.944 4.523 7.844 4.423 C 7.744 4.323 7.608 4.267 7.467 4.267 Z M 7.467 6.4 L 0.533 6.4 C 0.392 6.4 0.256 6.456 0.156 6.556 C 0.056 6.656 0 6.792 0 6.933 C 0 7.075 0.056 7.21 0.156 7.31 C 0.256 7.41 0.392 7.467 0.533 7.467 L 7.467 7.467 C 7.608 7.467 7.744 7.41 7.844 7.31 C 7.944 7.21 8 7.075 8 6.933 C 8 6.792 7.944 6.656 7.844 6.556 C 7.744 6.456 7.608 6.4 7.467 6.4 Z M 7.467 8.533 L 0.533 8.533 C 0.392 8.533 0.256 8.59 0.156 8.69 C 0.056 8.79 0 8.925 0 9.067 C 0 9.208 0.056 9.344 0.156 9.444 C 0.256 9.544 0.392 9.6 0.533 9.6 L 7.467 9.6 C 7.761 9.6 8 9.361 8 9.067 C 8 8.772 7.761 8.533 7.467 8.533 Z M 7.467 10.667 L 0.533 10.667 C 0.392 10.667 0.256 10.723 0.156 10.823 C 0.056 10.923 0 11.059 0 11.2 C 0 11.342 0.056 11.477 0.156 11.577 C 0.256 11.677 0.392 11.733 0.533 11.733 L 7.467 11.733 C 7.761 11.733 8 11.495 8 11.2 C 8 10.905 7.761 10.667 7.467 10.667 Z" fill="rgb(255, 99, 51)" height="11.73330036315918px" id="j03CGVVMX" transform="translate(21.334 11.7)" width="7.9999px"/>
                  </svg>
                  {/* framer-1eak17v: texto, gap:12px */}
                  <div className={styles.maintenanceFeatureText}>
                    <h4 className={styles.maintenanceFeatureTitle}>
                      Tecnología de vanguardia
                    </h4>
                    <p className={styles.maintenanceFeatureDesc}>
                      Trabajamos con equipos modernos y eficientes en seguridad y automatización.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 — framer-8y92h8-container: width:42% desktop / 48% tablet */}
              <div className={styles.maintenanceFeatureItem}>
                <div className={styles.maintenanceFeatureCard}>
                  {/* Ícono garantía/escudo — framer-dlkev */}
                  <svg
                    className={styles.maintenanceFeatureIcon}
                    viewBox="0 0 32 33"
                    fill="rgb(255,99,51)"
                    aria-hidden="true"
                    width={32}
                    height={33}
                  >
<g d="M 30.4 0 L 1.6 0 C 0.716 0 0 0.716 0 1.6 L 0 12.8 C 0.003 14.861 1.672 16.53 3.733 16.533 L 6.71 16.533 L 3.709 19.526 C 3.5 19.734 3.5 20.072 3.707 20.28 C 3.915 20.489 4.253 20.49 4.462 20.282 L 8.22 16.533 L 9.76 16.533 L 7 21.506 C 6.857 21.764 6.95 22.089 7.208 22.232 C 7.466 22.375 7.791 22.282 7.934 22.024 L 10.981 16.534 L 12.626 16.534 L 10.058 25.5 C 9.995 25.776 10.159 26.053 10.431 26.132 C 10.704 26.21 10.99 26.062 11.083 25.794 L 13.735 16.532 L 15.467 16.532 L 15.467 26.756 C 15.484 27.038 15.718 27.257 16 27.257 C 16.282 27.257 16.516 27.038 16.533 26.756 L 16.533 16.533 L 18.265 16.533 L 20.917 25.795 C 20.962 25.987 21.109 26.139 21.3 26.19 C 21.49 26.24 21.693 26.182 21.828 26.038 C 21.962 25.893 22.006 25.687 21.942 25.5 L 19.374 16.532 L 21.019 16.532 L 24.067 22.026 C 24.211 22.283 24.536 22.376 24.793 22.232 C 25.05 22.088 25.143 21.763 24.999 21.506 L 22.24 16.532 L 23.78 16.532 L 27.539 20.276 C 27.75 20.469 28.076 20.461 28.278 20.258 C 28.479 20.055 28.485 19.729 28.291 19.519 L 25.291 16.532 L 28.267 16.532 C 30.327 16.529 31.997 14.86 32 12.8 L 32 1.6 C 32 0.716 31.284 0 30.4 0 Z M 28.267 1.067 L 28.267 5.333 C 28.267 5.923 27.789 6.4 27.2 6.4 L 4.8 6.4 C 4.21 6.4 3.733 5.922 3.733 5.333 L 3.733 1.067 Z M 6.4 15.467 L 6.4 14.4 C 6.4 13.81 6.878 13.333 7.467 13.333 L 24.533 13.333 C 25.123 13.333 25.6 13.811 25.6 14.4 L 25.6 15.467 Z M 30.933 12.8 C 30.931 14.272 29.739 15.465 28.267 15.467 L 26.667 15.467 L 26.667 14.4 C 26.667 13.834 26.442 13.291 26.042 12.891 C 25.642 12.491 25.099 12.267 24.533 12.267 L 7.467 12.267 C 6.901 12.267 6.358 12.491 5.958 12.891 C 5.558 13.291 5.333 13.834 5.333 14.4 L 5.333 15.467 L 3.733 15.467 C 2.261 15.465 1.069 14.272 1.067 12.8 L 1.067 1.6 C 1.067 1.306 1.306 1.067 1.6 1.067 L 2.667 1.067 L 2.667 5.333 C 2.667 6.512 3.622 7.467 4.8 7.467 L 27.2 7.467 C 27.766 7.467 28.309 7.242 28.709 6.842 C 29.109 6.442 29.333 5.899 29.333 5.333 L 29.333 1.067 L 30.4 1.067 C 30.694 1.067 30.933 1.306 30.933 1.6 Z M 19.2 10 L 12.8 10 C 12.505 10 12.267 10.239 12.267 10.533 C 12.267 10.828 12.505 11.067 12.8 11.067 L 19.2 11.067 C 19.495 11.067 19.734 10.828 19.734 10.533 C 19.734 10.239 19.495 10 19.2 10 Z M 5.334 5.2 L 26.667 5.2 C 26.961 5.2 27.2 4.961 27.2 4.667 C 27.2 4.373 26.961 4.134 26.667 4.134 L 5.334 4.134 C 5.04 4.134 4.801 4.373 4.801 4.667 C 4.801 4.961 5.04 5.2 5.334 5.2 Z M 5.334 3.067 L 26.667 3.067 C 26.962 3.067 27.2 2.828 27.2 2.533 C 27.2 2.239 26.962 2 26.667 2 L 5.334 2 C 5.039 2 4.801 2.239 4.801 2.533 C 4.801 2.828 5.039 3.067 5.334 3.067 Z M 26.667 11.067 C 26.962 11.067 27.2 10.828 27.2 10.533 C 27.2 10.239 26.962 10 26.667 10 C 26.372 10 26.133 10.239 26.133 10.533 C 26.133 10.828 26.372 11.067 26.667 11.067 Z M 28.8 11.067 C 29.095 11.067 29.333 10.828 29.333 10.533 C 29.333 10.239 29.095 10 28.8 10 C 28.505 10 28.266 10.239 28.266 10.533 C 28.266 10.828 28.505 11.067 28.8 11.067 Z M 31.441 20.419 C 31.095 20.202 30.661 20.182 30.296 20.366 L 27.1 21.966 C 26.719 22.154 26.471 22.535 26.453 22.96 C 26.437 23.294 26.564 23.619 26.802 23.854 C 20.78 29.676 11.226 29.676 5.204 23.854 C 5.474 23.587 5.599 23.206 5.539 22.83 C 5.479 22.455 5.242 22.132 4.902 21.962 L 1.707 20.362 C 1.341 20.178 0.906 20.197 0.557 20.413 C 0.209 20.629 -0.002 21.01 0 21.42 L 0 25.015 C -0.001 25.443 0.232 25.838 0.606 26.046 C 0.981 26.254 1.439 26.241 1.802 26.014 L 2.051 25.859 C 5.677 29.694 10.722 31.867 16 31.867 C 21.278 31.867 26.323 29.694 29.949 25.859 L 30.198 26.013 C 30.561 26.24 31.018 26.252 31.393 26.044 C 31.767 25.837 32 25.443 32 25.015 L 32 21.42 C 32.001 21.012 31.789 20.632 31.441 20.419 Z M 30.933 25.015 C 30.934 25.056 30.912 25.093 30.876 25.112 C 30.841 25.133 30.797 25.132 30.764 25.109 L 30.121 24.708 C 29.872 24.552 29.543 24.627 29.387 24.876 C 29.362 24.917 29.333 24.955 29.301 24.99 C 25.87 28.694 21.049 30.8 16 30.8 C 10.951 30.8 6.13 28.694 2.699 24.99 C 2.667 24.955 2.638 24.916 2.613 24.875 C 2.456 24.628 2.129 24.553 1.88 24.708 L 1.24 25.11 C 1.206 25.134 1.161 25.134 1.126 25.112 C 1.089 25.094 1.066 25.056 1.066 25.015 L 1.066 21.42 C 1.066 21.382 1.086 21.345 1.12 21.326 C 1.152 21.305 1.193 21.304 1.227 21.322 L 4.422 22.919 C 4.459 22.936 4.483 22.972 4.483 23.013 C 4.486 23.054 4.465 23.093 4.43 23.113 L 4.087 23.326 C 3.951 23.411 3.861 23.553 3.841 23.712 C 3.821 23.871 3.874 24.031 3.985 24.147 C 7.118 27.431 11.459 29.288 15.998 29.288 C 20.537 29.288 24.878 27.431 28.011 24.147 C 28.122 24.031 28.174 23.871 28.154 23.712 C 28.134 23.553 28.044 23.411 27.908 23.326 L 27.566 23.112 C 27.531 23.091 27.51 23.053 27.513 23.012 C 27.513 22.972 27.537 22.935 27.573 22.919 L 30.769 21.321 C 30.803 21.304 30.844 21.305 30.877 21.325 C 30.91 21.346 30.929 21.382 30.929 21.42 Z" fill="transparent" height="31.86696438735406px" id="UeQhEqeJX" transform="translate(0 0.565)" width="32px"><path d="M 30.4 0 L 1.6 0 C 0.716 0 0 0.716 0 1.6 L 0 12.8 C 0.003 14.861 1.672 16.53 3.733 16.533 L 6.71 16.533 L 3.709 19.526 C 3.5 19.734 3.5 20.072 3.707 20.28 C 3.915 20.489 4.253 20.49 4.462 20.282 L 8.22 16.533 L 9.76 16.533 L 7 21.506 C 6.857 21.764 6.95 22.089 7.208 22.232 C 7.466 22.375 7.791 22.282 7.934 22.024 L 10.981 16.534 L 12.626 16.534 L 10.058 25.5 C 9.995 25.776 10.159 26.053 10.431 26.132 C 10.704 26.21 10.99 26.062 11.083 25.794 L 13.735 16.532 L 15.467 16.532 L 15.467 26.756 C 15.484 27.038 15.718 27.257 16 27.257 C 16.282 27.257 16.516 27.038 16.533 26.756 L 16.533 16.533 L 18.265 16.533 L 20.917 25.795 C 20.962 25.987 21.109 26.139 21.3 26.19 C 21.49 26.24 21.693 26.182 21.828 26.038 C 21.962 25.893 22.006 25.687 21.942 25.5 L 19.374 16.532 L 21.019 16.532 L 24.067 22.026 C 24.211 22.283 24.536 22.376 24.793 22.232 C 25.05 22.088 25.143 21.763 24.999 21.506 L 22.24 16.532 L 23.78 16.532 L 27.539 20.276 C 27.75 20.469 28.076 20.461 28.278 20.258 C 28.479 20.055 28.485 19.729 28.291 19.519 L 25.291 16.532 L 28.267 16.532 C 30.327 16.529 31.997 14.86 32 12.8 L 32 1.6 C 32 0.716 31.284 0 30.4 0 Z M 28.267 1.067 L 28.267 5.333 C 28.267 5.923 27.789 6.4 27.2 6.4 L 4.8 6.4 C 4.21 6.4 3.733 5.922 3.733 5.333 L 3.733 1.067 Z M 6.4 15.467 L 6.4 14.4 C 6.4 13.81 6.878 13.333 7.467 13.333 L 24.533 13.333 C 25.123 13.333 25.6 13.811 25.6 14.4 L 25.6 15.467 Z M 30.933 12.8 C 30.931 14.272 29.739 15.465 28.267 15.467 L 26.667 15.467 L 26.667 14.4 C 26.667 13.834 26.442 13.291 26.042 12.891 C 25.642 12.491 25.099 12.267 24.533 12.267 L 7.467 12.267 C 6.901 12.267 6.358 12.491 5.958 12.891 C 5.558 13.291 5.333 13.834 5.333 14.4 L 5.333 15.467 L 3.733 15.467 C 2.261 15.465 1.069 14.272 1.067 12.8 L 1.067 1.6 C 1.067 1.306 1.306 1.067 1.6 1.067 L 2.667 1.067 L 2.667 5.333 C 2.667 6.512 3.622 7.467 4.8 7.467 L 27.2 7.467 C 27.766 7.467 28.309 7.242 28.709 6.842 C 29.109 6.442 29.333 5.899 29.333 5.333 L 29.333 1.067 L 30.4 1.067 C 30.694 1.067 30.933 1.306 30.933 1.6 Z" fill="rgb(255, 99, 51)" height="27.25732042596195px" id="XO0OiW7kN" width="31.99998285015506px"/><path d="M 19.2 8 L 12.8 8 C 12.505 8 12.267 8.239 12.267 8.533 C 12.267 8.828 12.505 9.067 12.8 9.067 L 19.2 9.067 C 19.495 9.067 19.734 8.828 19.734 8.533 C 19.734 8.239 19.495 8 19.2 8 Z M 5.334 3.2 L 26.667 3.2 C 26.961 3.2 27.2 2.961 27.2 2.667 C 27.2 2.373 26.961 2.134 26.667 2.134 L 5.334 2.134 C 5.04 2.134 4.801 2.373 4.801 2.667 C 4.801 2.961 5.04 3.2 5.334 3.2 Z M 5.334 1.067 L 26.667 1.067 C 26.962 1.067 27.2 0.828 27.2 0.533 C 27.2 0.239 26.962 0 26.667 0 L 5.334 0 C 5.039 0 4.801 0.239 4.801 0.533 C 4.801 0.828 5.039 1.067 5.334 1.067 Z M 26.667 9.067 C 26.962 9.067 27.2 8.828 27.2 8.533 C 27.2 8.239 26.962 8 26.667 8 C 26.372 8 26.133 8.239 26.133 8.533 C 26.133 8.828 26.372 9.067 26.667 9.067 Z M 28.8 9.067 C 29.095 9.067 29.333 8.828 29.333 8.533 C 29.333 8.239 29.095 8 28.8 8 C 28.505 8 28.266 8.239 28.266 8.533 C 28.266 8.828 28.505 9.067 28.8 9.067 Z M 31.441 18.419 C 31.095 18.202 30.661 18.182 30.296 18.366 L 27.1 19.966 C 26.719 20.154 26.471 20.535 26.453 20.96 C 26.437 21.294 26.564 21.619 26.802 21.854 C 20.78 27.676 11.226 27.676 5.204 21.854 C 5.474 21.587 5.599 21.206 5.539 20.83 C 5.479 20.455 5.242 20.132 4.902 19.962 L 1.707 18.362 C 1.341 18.178 0.906 18.197 0.557 18.413 C 0.209 18.629 -0.002 19.01 0 19.42 L 0 23.015 C -0.001 23.443 0.232 23.838 0.606 24.046 C 0.981 24.254 1.439 24.241 1.802 24.014 L 2.051 23.859 C 5.677 27.694 10.722 29.867 16 29.867 C 21.278 29.867 26.323 27.694 29.949 23.859 L 30.198 24.013 C 30.561 24.24 31.018 24.252 31.393 24.044 C 31.767 23.837 32 23.443 32 23.015 L 32 19.42 C 32.001 19.012 31.789 18.632 31.441 18.419 Z M 30.933 23.015 C 30.934 23.056 30.912 23.093 30.876 23.112 C 30.841 23.133 30.797 23.132 30.764 23.109 L 30.121 22.708 C 29.872 22.552 29.543 22.627 29.387 22.876 C 29.362 22.917 29.333 22.955 29.301 22.99 C 25.87 26.694 21.049 28.8 16 28.8 C 10.951 28.8 6.13 26.694 2.699 22.99 C 2.667 22.955 2.638 22.916 2.613 22.875 C 2.456 22.628 2.129 22.553 1.88 22.708 L 1.24 23.11 C 1.206 23.134 1.161 23.134 1.126 23.112 C 1.089 23.094 1.066 23.056 1.066 23.015 L 1.066 19.42 C 1.066 19.382 1.086 19.345 1.12 19.326 C 1.152 19.305 1.193 19.304 1.227 19.322 L 4.422 20.919 C 4.459 20.936 4.483 20.972 4.483 21.013 C 4.486 21.054 4.465 21.093 4.43 21.113 L 4.087 21.326 C 3.951 21.411 3.861 21.553 3.841 21.712 C 3.821 21.871 3.874 22.031 3.985 22.147 C 7.118 25.431 11.459 27.288 15.998 27.288 C 20.537 27.288 24.878 25.431 28.011 22.147 C 28.122 22.031 28.174 21.871 28.154 21.712 C 28.134 21.553 28.044 21.411 27.908 21.326 L 27.566 21.112 C 27.531 21.091 27.51 21.053 27.513 21.012 C 27.513 20.972 27.537 20.935 27.573 20.919 L 30.769 19.321 C 30.803 19.304 30.844 19.305 30.877 19.325 C 30.91 19.346 30.929 19.382 30.929 19.42 Z" fill="rgb(255, 99, 51)" height="29.866965459219372px" id="JAP8bducA" transform="translate(0 2)" width="32px"/></g>                  </svg>
                  <div className={styles.maintenanceFeatureText}>
                    <h4 className={styles.maintenanceFeatureTitle}>
                      Equipos con garantía
                    </h4>
                    <p className={styles.maintenanceFeatureDesc}>
                      Todos nuestros productos cuentan con garantía y soporte del fabricante.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 — framer-1bmetdj-container: width:42% desktop / 48% tablet height:145px */}
              <div className={styles.maintenanceFeatureItem}>
                <div className={styles.maintenanceFeatureCard}>
                  {/* Ícono integración/monitor — framer-bX7Uu */}
                  <svg
                    className={styles.maintenanceFeatureIcon}
                    viewBox="0 0 32 32"
                    fill="rgb(255,99,51)"
                    aria-hidden="true"
                    width={32}
                    height={32}
                  >
                  <g d="M 28.8 0 L 3.2 0 C 1.433 0.002 0.002 1.433 0 3.2 L 0 28.8 C 0.002 30.567 1.433 31.998 3.2 32 L 28.8 32 C 30.567 31.998 31.998 30.567 32 28.8 L 32 3.2 C 31.998 1.433 30.567 0.002 28.8 0 Z M 30.933 28.8 C 30.933 29.978 29.978 30.933 28.8 30.933 L 3.2 30.933 C 2.022 30.933 1.067 29.978 1.067 28.8 L 1.067 3.2 C 1.067 2.022 2.022 1.067 3.2 1.067 L 28.8 1.067 C 29.978 1.067 30.933 2.022 30.933 3.2 Z M 3.867 5.734 C 4.898 5.734 5.734 4.898 5.734 3.867 C 5.734 2.836 4.898 2 3.867 2 C 2.836 2 2 2.836 2 3.867 C 2 4.898 2.836 5.734 3.867 5.734 Z M 3.867 3.067 C 4.309 3.067 4.667 3.425 4.667 3.867 C 4.667 4.309 4.309 4.667 3.867 4.667 C 3.425 4.667 3.067 4.309 3.067 3.867 C 3.067 3.425 3.425 3.067 3.867 3.067 Z M 27.867 2 C 26.836 2 26 2.836 26 3.867 C 26 4.898 26.836 5.734 27.867 5.734 C 28.898 5.734 29.734 4.898 29.734 3.867 C 29.734 2.836 28.898 2 27.867 2 Z M 27.867 4.667 C 27.425 4.667 27.067 4.309 27.067 3.867 C 27.067 3.425 27.425 3.067 27.867 3.067 C 28.309 3.067 28.667 3.425 28.667 3.867 C 28.667 4.309 28.309 4.667 27.867 4.667 Z M 3.867 26 C 2.836 26 2 26.836 2 27.867 C 2 28.898 2.836 29.734 3.867 29.734 C 4.898 29.734 5.734 28.898 5.734 27.867 C 5.734 26.836 4.898 26 3.867 26 Z M 3.867 28.667 C 3.425 28.667 3.067 28.309 3.067 27.867 C 3.067 27.425 3.425 27.067 3.867 27.067 C 4.309 27.067 4.667 27.425 4.667 27.867 C 4.667 28.309 4.309 28.667 3.867 28.667 Z M 27.867 26 C 26.836 26 26 26.836 26 27.867 C 26 28.898 26.836 29.734 27.867 29.734 C 28.898 29.734 29.734 28.898 29.734 27.867 C 29.734 26.836 28.898 26 27.867 26 Z M 27.867 28.667 C 27.425 28.667 27.067 28.309 27.067 27.867 C 27.067 27.425 27.425 27.067 27.867 27.067 C 28.309 27.067 28.667 27.425 28.667 27.867 C 28.667 28.309 28.309 28.667 27.867 28.667 Z M 28.107 8.918 L 27.147 7.318 C 26.953 6.997 26.607 6.801 26.232 6.8 L 5.502 6.8 C 5.128 6.801 4.781 6.997 4.587 7.318 L 3.627 8.918 C 3.429 9.248 3.424 9.658 3.613 9.993 C 3.803 10.327 4.158 10.534 4.542 10.534 L 27.192 10.534 C 27.577 10.535 27.932 10.328 28.121 9.993 C 28.311 9.658 28.305 9.248 28.107 8.918 Z M 4.541 9.467 L 5.501 7.867 L 26.231 7.867 L 27.191 9.467 L 4.542 9.467 Z M 28.105 13.718 L 27.145 12.118 C 26.952 11.798 26.605 11.601 26.231 11.6 L 5.502 11.6 C 5.128 11.601 4.781 11.797 4.587 12.118 L 3.627 13.718 C 3.429 14.048 3.423 14.458 3.613 14.793 C 3.802 15.128 4.157 15.335 4.542 15.334 L 27.192 15.334 C 27.577 15.335 27.932 15.128 28.121 14.793 C 28.311 14.458 28.305 14.048 28.107 13.718 Z M 4.542 14.267 L 5.502 12.667 L 26.232 12.667 L 27.192 14.267 Z M 28.106 18.518 L 27.146 16.918 C 26.953 16.598 26.606 16.401 26.232 16.4 L 5.502 16.4 C 5.128 16.401 4.781 16.597 4.587 16.918 L 3.627 18.518 C 3.429 18.848 3.423 19.258 3.613 19.593 C 3.802 19.928 4.157 20.135 4.542 20.134 L 27.192 20.134 C 27.577 20.135 27.932 19.928 28.121 19.593 C 28.311 19.258 28.305 18.848 28.107 18.518 Z M 4.542 19.067 L 5.502 17.467 L 26.232 17.467 L 27.192 19.067 Z M 27.146 21.717 C 26.952 21.397 26.606 21.201 26.232 21.2 L 5.502 21.2 C 5.128 21.201 4.781 21.397 4.587 21.718 L 3.627 23.318 C 3.429 23.648 3.424 24.058 3.613 24.393 C 3.803 24.727 4.158 24.934 4.542 24.934 L 27.192 24.934 C 27.577 24.935 27.932 24.728 28.121 24.393 C 28.311 24.058 28.305 23.648 28.107 23.318 L 27.146 21.718 Z M 4.542 23.867 L 5.502 22.267 L 26.232 22.267 L 27.192 23.867 Z" fill="transparent" height="32px" id="NUGDerrSo" width="32px"><path d="M 28.8 0 L 3.2 0 C 1.433 0.002 0.002 1.433 0 3.2 L 0 28.8 C 0.002 30.567 1.433 31.998 3.2 32 L 28.8 32 C 30.567 31.998 31.998 30.567 32 28.8 L 32 3.2 C 31.998 1.433 30.567 0.002 28.8 0 Z M 30.933 28.8 C 30.933 29.978 29.978 30.933 28.8 30.933 L 3.2 30.933 C 2.022 30.933 1.067 29.978 1.067 28.8 L 1.067 3.2 C 1.067 2.022 2.022 1.067 3.2 1.067 L 28.8 1.067 C 29.978 1.067 30.933 2.022 30.933 3.2 Z" fill="rgb(255, 99, 51)" height="32px" id="APEKwAX4L" width="32px"/><path d="M 1.867 3.734 C 2.898 3.734 3.734 2.898 3.734 1.867 C 3.734 0.836 2.898 0 1.867 0 C 0.836 0 0 0.836 0 1.867 C 0 2.898 0.836 3.734 1.867 3.734 Z M 1.867 1.067 C 2.309 1.067 2.667 1.425 2.667 1.867 C 2.667 2.309 2.309 2.667 1.867 2.667 C 1.425 2.667 1.067 2.309 1.067 1.867 C 1.067 1.425 1.425 1.067 1.867 1.067 Z M 25.867 0 C 24.836 0 24 0.836 24 1.867 C 24 2.898 24.836 3.734 25.867 3.734 C 26.898 3.734 27.734 2.898 27.734 1.867 C 27.734 0.836 26.898 0 25.867 0 Z M 25.867 2.667 C 25.425 2.667 25.067 2.309 25.067 1.867 C 25.067 1.425 25.425 1.067 25.867 1.067 C 26.309 1.067 26.667 1.425 26.667 1.867 C 26.667 2.309 26.309 2.667 25.867 2.667 Z M 1.867 24 C 0.836 24 0 24.836 0 25.867 C 0 26.898 0.836 27.734 1.867 27.734 C 2.898 27.734 3.734 26.898 3.734 25.867 C 3.734 24.836 2.898 24 1.867 24 Z M 1.867 26.667 C 1.425 26.667 1.067 26.309 1.067 25.867 C 1.067 25.425 1.425 25.067 1.867 25.067 C 2.309 25.067 2.667 25.425 2.667 25.867 C 2.667 26.309 2.309 26.667 1.867 26.667 Z M 25.867 24 C 24.836 24 24 24.836 24 25.867 C 24 26.898 24.836 27.734 25.867 27.734 C 26.898 27.734 27.734 26.898 27.734 25.867 C 27.734 24.836 26.898 24 25.867 24 Z M 25.867 26.667 C 25.425 26.667 25.067 26.309 25.067 25.867 C 25.067 25.425 25.425 25.067 25.867 25.067 C 26.309 25.067 26.667 25.425 26.667 25.867 C 26.667 26.309 26.309 26.667 25.867 26.667 Z M 26.107 6.918 L 25.147 5.318 C 24.953 4.997 24.607 4.801 24.232 4.8 L 3.502 4.8 C 3.128 4.801 2.781 4.997 2.587 5.318 L 1.627 6.918 C 1.429 7.248 1.424 7.658 1.613 7.993 C 1.803 8.327 2.158 8.534 2.542 8.534 L 25.192 8.534 C 25.577 8.535 25.932 8.328 26.121 7.993 C 26.311 7.658 26.305 7.248 26.107 6.918 Z M 2.541 7.467 L 3.501 5.867 L 24.231 5.867 L 25.191 7.467 L 2.542 7.467 Z M 26.105 11.718 L 25.145 10.118 C 24.952 9.798 24.605 9.601 24.231 9.6 L 3.502 9.6 C 3.128 9.601 2.781 9.797 2.587 10.118 L 1.627 11.718 C 1.429 12.048 1.423 12.458 1.613 12.793 C 1.802 13.128 2.157 13.335 2.542 13.334 L 25.192 13.334 C 25.577 13.335 25.932 13.128 26.121 12.793 C 26.311 12.458 26.305 12.048 26.107 11.718 Z M 2.542 12.267 L 3.502 10.667 L 24.232 10.667 L 25.192 12.267 Z M 26.106 16.518 L 25.146 14.918 C 24.953 14.598 24.606 14.401 24.232 14.4 L 3.502 14.4 C 3.128 14.401 2.781 14.597 2.587 14.918 L 1.627 16.518 C 1.429 16.848 1.423 17.258 1.613 17.593 C 1.802 17.928 2.157 18.135 2.542 18.134 L 25.192 18.134 C 25.577 18.135 25.932 17.928 26.121 17.593 C 26.311 17.258 26.305 16.848 26.107 16.518 Z M 2.542 17.067 L 3.502 15.467 L 24.232 15.467 L 25.192 17.067 Z M 25.146 19.717 C 24.952 19.397 24.606 19.201 24.232 19.2 L 3.502 19.2 C 3.128 19.201 2.781 19.397 2.587 19.718 L 1.627 21.318 C 1.429 21.648 1.424 22.058 1.613 22.393 C 1.803 22.727 2.158 22.934 2.542 22.934 L 25.192 22.934 C 25.577 22.935 25.932 22.728 26.121 22.393 C 26.311 22.058 26.305 21.648 26.107 21.318 L 25.146 19.718 Z M 2.542 21.867 L 3.502 20.267 L 24.232 20.267 L 25.192 21.867 Z" fill="rgb(255, 99, 51)" height="27.734px" id="xeYr4VdeG" transform="translate(2 2)" width="27.734px"/></g>
                  </svg>
                  <div className={styles.maintenanceFeatureText}>
                    <h4 className={styles.maintenanceFeatureTitle}>
                      Integración con apps
                    </h4>
                    <p className={styles.maintenanceFeatureDesc}>
                      Recibe alertas y gestiona accesos estés donde estés.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 — */}
              <div className={styles.maintenanceFeatureItem}>
                <div className={styles.maintenanceFeatureCard}>
                  <svg
                    className={styles.maintenanceFeatureIcon}
                    viewBox="0 0 32 32"
                    fill="rgb(255,99,51)"
                    aria-hidden="true"
                    width={32}
                    height={32}
                  >
<g d="M 0 0 L 32 0 L 32 32 L 0 32 Z M 30.4 15.466 L 26.667 15.466 L 26.667 11.618 C 28.582 10.642 29.809 8.696 29.864 6.547 C 29.92 4.399 28.795 2.392 26.933 1.318 C 26.768 1.223 26.565 1.223 26.4 1.319 C 26.235 1.414 26.133 1.59 26.133 1.78 L 26.133 6.63 L 24 7.91 L 21.867 6.63 L 21.867 1.78 C 21.868 1.589 21.766 1.412 21.601 1.317 C 21.436 1.221 21.232 1.222 21.067 1.318 C 19.205 2.391 18.079 4.398 18.135 6.547 C 18.19 8.696 19.418 10.642 21.333 11.618 L 21.333 15.466 L 12.267 15.466 L 12.267 7.744 C 12.267 6.582 12.511 5.754 12.974 5.348 C 13.094 5.243 13.234 5.165 13.387 5.119 C 13.526 5.562 13.936 5.864 14.4 5.866 L 16 5.866 C 16.59 5.866 17.067 5.388 17.067 4.799 L 17.067 2.132 C 17.067 1.543 16.589 1.066 16 1.066 L 14.4 1.066 C 14.066 1.067 13.752 1.224 13.552 1.492 C 11.507 0.082 8.944 -0.356 6.547 0.297 C 4.391 0.796 2.637 2.357 1.892 4.44 C 1.759 4.859 1.896 5.317 2.238 5.593 C 2.58 5.87 3.056 5.908 3.438 5.69 C 4.309 5.098 5.427 5.01 6.38 5.457 C 7.093 5.862 7.467 6.653 7.467 7.745 L 7.467 15.467 L 1.6 15.467 C 0.716 15.467 0 16.183 0 17.067 L 0 28.267 C 0.003 30.328 1.672 31.997 3.733 32 L 28.267 32 C 30.328 31.997 31.998 30.327 32 28.266 L 32 17.066 C 32 16.182 31.284 15.466 30.4 15.466 Z M 14.4 2.132 L 16 2.132 L 16 4.8 L 14.4 4.8 Z M 19.2 6.4 C 19.204 5.036 19.785 3.738 20.8 2.827 L 20.8 6.933 C 20.8 7.12 20.898 7.294 21.059 7.39 L 23.725 8.99 C 23.894 9.092 24.106 9.092 24.275 8.99 L 26.941 7.39 C 27.102 7.294 27.201 7.12 27.201 6.933 L 27.201 2.826 C 28.845 4.297 29.274 6.699 28.242 8.649 C 27.21 10.598 24.982 11.593 22.841 11.061 C 20.7 10.528 19.198 8.605 19.2 6.399 Z M 22.4 12.04 C 23.445 12.343 24.555 12.343 25.6 12.04 L 25.6 15.467 L 22.4 15.467 Z M 6.91 4.529 C 5.627 3.89 4.102 3.983 2.905 4.771 C 3.543 3.03 5.021 1.733 6.83 1.326 C 9.089 0.709 11.506 1.209 13.334 2.673 L 13.334 4.036 C 12.952 4.102 12.595 4.269 12.301 4.521 C 11.571 5.14 11.201 6.224 11.201 7.744 L 11.201 10.666 L 8.533 10.666 L 8.533 7.744 C 8.533 6.268 7.956 5.126 6.909 4.53 Z M 8.533 11.732 L 11.2 11.732 L 11.2 15.466 L 8.533 15.466 Z M 8 16.532 L 28.267 16.532 L 28.267 20.8 C 28.267 21.39 27.789 21.867 27.2 21.867 L 4.8 21.867 C 4.21 21.867 3.733 21.389 3.733 20.8 L 3.733 16.533 L 8 16.533 Z M 6.4 30.932 L 6.4 29.866 C 6.4 29.276 6.878 28.799 7.467 28.799 L 24.533 28.799 C 25.123 28.799 25.6 29.276 25.6 29.866 L 25.6 30.932 Z M 30.933 28.266 C 30.931 29.737 29.738 30.93 28.267 30.932 L 26.667 30.932 L 26.667 29.866 C 26.667 29.3 26.443 28.757 26.042 28.357 C 25.642 27.956 25.099 27.732 24.533 27.732 L 7.467 27.732 C 6.901 27.732 6.358 27.956 5.958 28.357 C 5.557 28.757 5.333 29.3 5.333 29.866 L 5.333 30.932 L 3.733 30.932 C 2.262 30.93 1.069 29.737 1.067 28.266 L 1.067 17.066 C 1.067 16.924 1.123 16.789 1.223 16.688 C 1.323 16.588 1.458 16.532 1.6 16.532 L 2.667 16.532 L 2.667 20.8 C 2.667 21.978 3.622 22.933 4.8 22.933 L 27.2 22.933 C 28.378 22.933 29.333 21.978 29.333 20.8 L 29.333 16.533 L 30.4 16.533 C 30.542 16.533 30.677 16.589 30.777 16.689 C 30.877 16.79 30.933 16.925 30.933 17.067 L 30.933 28.267 Z M 19.2 25.6 L 12.8 25.6 C 12.506 25.6 12.267 25.839 12.267 26.133 C 12.267 26.427 12.506 26.666 12.8 26.666 L 19.2 26.666 C 19.495 26.666 19.734 26.427 19.734 26.133 C 19.734 25.838 19.495 25.599 19.2 25.599 Z M 5.333 20.8 L 26.666 20.8 C 26.961 20.8 27.2 20.561 27.2 20.266 C 27.2 19.971 26.961 19.732 26.666 19.732 L 5.333 19.732 C 5.038 19.732 4.799 19.971 4.799 20.266 C 4.799 20.56 5.038 20.799 5.333 20.799 Z M 5.333 18.666 L 26.666 18.666 C 26.961 18.666 27.199 18.427 27.199 18.133 C 27.199 17.838 26.961 17.599 26.666 17.599 L 5.333 17.599 C 5.038 17.599 4.799 17.838 4.799 18.133 C 4.799 18.427 5.038 18.666 5.333 18.666 Z M 26.667 26.666 C 26.962 26.666 27.2 26.427 27.2 26.133 C 27.2 25.838 26.962 25.599 26.667 25.599 C 26.372 25.599 26.133 25.838 26.133 26.133 C 26.133 26.427 26.372 26.666 26.667 26.666 Z M 28.8 26.666 C 29.095 26.666 29.333 26.427 29.333 26.133 C 29.333 25.838 29.095 25.599 28.8 25.599 C 28.505 25.599 28.266 25.838 28.266 26.133 C 28.266 26.427 28.505 26.666 28.8 26.666 Z" fill="transparent" height="32px" id="IzuNr4VvQ" width="32px"><path d="M 0 0 L 32 0 L 32 32 L 0 32 Z" fill="transparent" height="32px" id="YyKFRcZWr" width="32px"/><path d="M 30.4 15.465 L 26.667 15.465 L 26.667 11.617 C 28.582 10.641 29.809 8.695 29.864 6.546 C 29.92 4.398 28.795 2.391 26.933 1.317 C 26.768 1.222 26.565 1.223 26.4 1.318 C 26.235 1.413 26.133 1.589 26.133 1.779 L 26.133 6.629 L 24 7.909 L 21.867 6.629 L 21.867 1.779 C 21.868 1.588 21.766 1.412 21.601 1.316 C 21.436 1.221 21.232 1.221 21.067 1.317 C 19.205 2.391 18.079 4.398 18.135 6.546 C 18.19 8.695 19.418 10.641 21.333 11.617 L 21.333 15.465 L 12.267 15.465 L 12.267 7.743 C 12.267 6.581 12.511 5.753 12.974 5.347 C 13.094 5.242 13.234 5.164 13.387 5.118 C 13.526 5.561 13.936 5.863 14.4 5.865 L 16 5.865 C 16.59 5.865 17.067 5.387 17.067 4.798 L 17.067 2.131 C 17.067 1.542 16.589 1.065 16 1.065 L 14.4 1.065 C 14.066 1.066 13.752 1.224 13.552 1.491 C 11.507 0.081 8.944 -0.356 6.547 0.296 C 4.391 0.795 2.637 2.356 1.892 4.439 C 1.759 4.858 1.896 5.316 2.238 5.592 C 2.58 5.869 3.056 5.907 3.438 5.689 C 4.309 5.098 5.427 5.009 6.38 5.456 C 7.093 5.861 7.467 6.652 7.467 7.744 L 7.467 15.466 L 1.6 15.466 C 0.716 15.466 0 16.183 0 17.066 L 0 28.266 C 0.003 30.327 1.672 31.997 3.733 31.999 L 28.267 31.999 C 30.328 31.997 31.998 30.326 32 28.265 L 32 17.065 C 32 16.182 31.284 15.465 30.4 15.465 Z M 14.4 2.131 L 16 2.131 L 16 4.799 L 14.4 4.799 Z M 19.2 6.399 C 19.204 5.036 19.785 3.737 20.8 2.826 L 20.8 6.932 C 20.8 7.12 20.898 7.293 21.059 7.389 L 23.725 8.989 C 23.894 9.091 24.106 9.091 24.275 8.989 L 26.941 7.389 C 27.102 7.293 27.201 7.12 27.201 6.932 L 27.201 2.825 C 28.845 4.296 29.274 6.699 28.242 8.648 C 27.21 10.598 24.982 11.593 22.841 11.06 C 20.7 10.527 19.198 8.604 19.2 6.398 Z M 22.4 12.039 C 23.445 12.342 24.555 12.342 25.6 12.039 L 25.6 15.466 L 22.4 15.466 Z M 6.91 4.528 C 5.627 3.89 4.102 3.982 2.905 4.77 C 3.543 3.03 5.021 1.732 6.83 1.325 C 9.089 0.708 11.506 1.209 13.334 2.672 L 13.334 4.035 C 12.952 4.101 12.595 4.269 12.301 4.52 C 11.571 5.139 11.201 6.223 11.201 7.743 L 11.201 10.665 L 8.533 10.665 L 8.533 7.743 C 8.533 6.267 7.956 5.125 6.909 4.529 Z M 8.533 11.731 L 11.2 11.731 L 11.2 15.465 L 8.533 15.465 Z M 8 16.531 L 28.267 16.531 L 28.267 20.799 C 28.267 21.389 27.789 21.866 27.2 21.866 L 4.8 21.866 C 4.21 21.866 3.733 21.388 3.733 20.799 L 3.733 16.532 L 8 16.532 Z M 6.4 30.931 L 6.4 29.865 C 6.4 29.275 6.878 28.798 7.467 28.798 L 24.533 28.798 C 25.123 28.798 25.6 29.275 25.6 29.865 L 25.6 30.931 Z M 30.933 28.265 C 30.931 29.737 29.738 30.929 28.267 30.931 L 26.667 30.931 L 26.667 29.865 C 26.667 29.299 26.443 28.756 26.042 28.356 C 25.642 27.956 25.099 27.731 24.533 27.731 L 7.467 27.731 C 6.901 27.731 6.358 27.956 5.958 28.356 C 5.557 28.756 5.333 29.299 5.333 29.865 L 5.333 30.931 L 3.733 30.931 C 2.262 30.929 1.069 29.737 1.067 28.265 L 1.067 17.065 C 1.067 16.924 1.123 16.788 1.223 16.688 C 1.323 16.588 1.458 16.531 1.6 16.531 L 2.667 16.531 L 2.667 20.799 C 2.667 21.977 3.622 22.932 4.8 22.932 L 27.2 22.932 C 28.378 22.932 29.333 21.977 29.333 20.799 L 29.333 16.532 L 30.4 16.532 C 30.542 16.532 30.677 16.589 30.777 16.689 C 30.877 16.789 30.933 16.925 30.933 17.066 L 30.933 28.266 Z" fill="rgb(255, 99, 51)" height="31.999261626239107px" id="KvM5JaPe1" transform="translate(0 0.001)" width="32px"/><path d="M 14.401 8.001 L 8.001 8.001 C 7.706 8.001 7.468 8.24 7.468 8.534 C 7.468 8.828 7.706 9.067 8.001 9.067 L 14.401 9.067 C 14.695 9.067 14.934 8.828 14.934 8.534 C 14.934 8.239 14.695 8 14.401 8 Z M 0.534 3.201 L 21.866 3.201 C 22.161 3.201 22.401 2.962 22.401 2.667 C 22.401 2.372 22.161 2.133 21.866 2.133 L 0.534 2.133 C 0.239 2.133 0 2.372 0 2.666 C 0 2.961 0.239 3.2 0.534 3.2 Z M 0.534 1.067 L 21.866 1.067 C 22.161 1.067 22.4 0.828 22.4 0.534 C 22.4 0.239 22.161 0 21.866 0 L 0.534 0 C 0.239 0 0 0.239 0 0.534 C 0 0.828 0.239 1.067 0.534 1.067 Z M 21.867 9.067 C 22.162 9.067 22.401 8.828 22.401 8.534 C 22.401 8.239 22.162 8 21.867 8 C 21.573 8 21.334 8.239 21.334 8.534 C 21.334 8.828 21.573 9.067 21.867 9.067 Z M 24 9.067 C 24.295 9.067 24.534 8.828 24.534 8.534 C 24.534 8.239 24.295 8 24 8 C 23.706 8 23.467 8.239 23.467 8.534 C 23.467 8.828 23.706 9.067 24 9.067 Z" fill="rgb(255, 99, 51)" height="9.067px" id="pkxDRg2FC" transform="translate(4.8 17.599)" width="24.53399905395508px"/></g>                  </svg>
                  <div className={styles.maintenanceFeatureText}>
                    <h4 className={styles.maintenanceFeatureTitle}>
                      Instalación profesional
                    </h4>
                    <p className={styles.maintenanceFeatureDesc}>
                      Instalaciones seguras y funcionales, con garantía por escrito.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
      <a
        href="https://wa.me/524422269192?text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n"
        rel="noopener noreferrer"
        target="_blank"
        className={styles.waButton}
        aria-label="Contactar por WhatsApp"
      >
        {/* Texto — framer-wvl6np */}
        <span className={styles.waButtonText}>COTIZA AHORA</span>

        {/* Círculo blanco con ícono WhatsApp — framer-1j71888 */}
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