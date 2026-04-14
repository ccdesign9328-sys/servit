"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./ServitFooter.module.css";

export default function ServitFooter() {
  const contentRef = useRef<HTMLDivElement>(null);
  const copyrightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (copyrightRef.current) observer.observe(copyrightRef.current);

    return () => observer.disconnect();
  }, []);

  const brandLogosRow1 = [
    {
      src: "/brands/accespro.png",
      alt: "AccesPRO",
    },
    {
      src: "/brands/epcom.png",
      alt: "epcom",
    },
    {
      src: "/brands/faac.png",
      alt: "FAAC",
    },
    {
      src: "/brands/fanvil.png",
      alt: "Fanvil",
    },
  ];

  const brandLogosRow2 = [
    {
      src: "/brands/bose.png",
      alt: "Bose",
    },
    {
      src: "/brands/honeywell.png",
      alt: "Honeywell Analytics",
    },
    {
      src: "/brands/hiksemi.png",
      alt: "HIKSEMI",
    },
    {
      src: "/brands/hikvision.png",
      alt: "HIKVISION",
    },
  ];

  return (
    <div className={styles.footerWrap}>
      <footer className={styles.footer}>
        {/* Two-column content */}
        <div ref={contentRef} className={styles.content}>
          {/* Vertical divider */}
          <div className={styles.divider} />

          {/* LEFT: logo + headline + brand logos */}
          <div className={styles.left}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/LSB.svg"
                alt="SERVIT logo"
                width={200}
                height={64}
                style={{ height: 64, width: "auto", objectFit: "contain" }}
              />
            </Link>
            <div className={styles.leftBody}>
              <div className={styles.headline}>
                <h4 className={styles.title}>
                  Expertos en tecnología y seguridad
                </h4>
                <p className={styles.tagline}>
                  Instalación profesional de cámaras, cercos eléctricos,
                  control de acceso, aire acondicionado en Querétaro y sus
                  alrededores.
                </p>
              </div>
              {/* Brand logos */}
              <div className={styles.brands}>
                <div className={styles.brandRow}>
                  {brandLogosRow1.map((logo) => (
                    <Image
                      key={logo.alt}
                      src={logo.src}
                      alt={logo.alt}
                      width={80}
                      height={44}
                      unoptimized
                      style={{
                        height: 44,
                        width: "auto",
                        maxWidth: 80,
                        objectFit: "contain",
                        opacity: 0.75,
                      }}
                    />
                  ))}
                </div>
                <div className={styles.brandRow}>
                  {brandLogosRow2.map((logo) => (
                    <Image
                      key={logo.alt}
                      src={logo.src}
                      alt={logo.alt}
                      width={80}
                      height={44}
                      style={{
                         height: 44,
                        width: "auto",
                        maxWidth: 80,
                        objectFit: "contain",
                        opacity: 0.75,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: CTA — framer-nvu9i6 */}
          <div className={styles.right}>
            {/* framer-2b12z: title + desc */}
            <div className={styles.ctaBlock}>
              <h4 className={styles.ctaTitle}>Escríbenos para ayudarte</h4>
              <p className={styles.ctaDesc}>
                Puedes mandarnos un mensaje por WhatsApp y contarte más sobre
                nuestras opciones para ti.
              </p>
            </div>
            {/* White pill button — framer-kywjz8 */}
            <a
              href="https://wa.me/524422269192?text=Hola%20quiero%20m%C3%A1s%20informaci%C3%B3n"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaBtn}
            >
              CONTÁCTANOS
              {/* framer-1j71888: red circle, rotate -45deg */}
              <span className={styles.ctaBtnIcon}>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  stroke="#fff"
                  aria-hidden="true"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Copyright row — framer-11xkhsu */}
        <div ref={copyrightRef} className={styles.copyright}>
          <span>&copy; 2026 ServIT. Todos los derechos reservados.</span>
        </div>
      </footer>
    </div>
  );
}