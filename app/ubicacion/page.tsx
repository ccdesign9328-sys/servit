"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import styles from "./page.module.css";

export default function UbicacionPage() {
  const [showModal, setShowModal] = useState(false);
  const [waUrl, setWaUrl] = useState("#");

  /* ──── Refs para animaciones de scroll ──── */
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubRef = useRef<HTMLParagraphElement>(null);
  const formCardRef = useRef<HTMLDivElement>(null);
  const infoPanelRef = useRef<HTMLElement>(null);

  /* ──── Animación hero al montar ──── */
  useEffect(() => {
    const t1 = setTimeout(
      () => heroTitleRef.current?.classList.add(styles.visible),
      80
    );
    const t2 = setTimeout(
      () => heroSubRef.current?.classList.add(styles.visible),
      220
    );
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  /* ──── IntersectionObserver para tarjetas ──── */
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
    if (formCardRef.current) observer.observe(formCardRef.current);
    if (infoPanelRef.current) observer.observe(infoPanelRef.current);
    return () => observer.disconnect();
  }, []);


  /* ──── Cerrar modal ──── */
  const closeModal = useCallback(() => setShowModal(false), []);

  useEffect(() => {
    if (!showModal) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [showModal, closeModal]);


  return (
    <>
      {/* ======================== HERO ======================== */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroContent}>
          <h1 ref={heroTitleRef} className={styles.heroTitle}>
            Ponte en contacto
          </h1>
          <p ref={heroSubRef} className={styles.heroSub}>
            Necesitas ayuda con alguno de nuestros servicios, estamos aquí para
            ayudarte, complétenos los datos, para poder contactarte.
          </p>
        </div>
      </section>

      {/* ======================== MAP SECTION ======================== */}
      <section className={styles.contactSection}>
        <div className={styles.contactRow}>
          {/* FORM CARD */}
          <div ref={formCardRef} className={styles.formCard}>
 <div className={styles.mapWrap}>
            <iframe
              src="https://maps.google.com/maps?q=Sistemas%20de%20Seguridad%20Servit&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación SERVIT"
            />
          </div>
          </div>

          {/* INFO PANEL */}
          <aside ref={infoPanelRef} className={styles.infoPanel}>
            <div className={styles.infoTitleBox}>
              <h2 className={styles.infoTitle}>Información de contacto</h2>
              <p className={styles.infoDesc}>
                Soluciones a medida, con instalación profesional y soporte
                continuo para una experiencia simple y confiable.
              </p>
            </div>
            <div className={styles.infoContacts}>
              {/* Teléfono */}
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </span>
                <a href="tel:4422645163">(442) 264 5163</a>
              </div>
              {/* Email */}
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                <a href="mailto:ventaservit@gmail.com">ventaservit@gmail.com</a>
              </div>
              {/* Dirección */}
              <div className={styles.infoItem}>
                <span className={styles.infoIcon}>
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </span>
                <a
                  href="https://www.google.com/maps/search/Gral.+Francisco+Villa+631,+Las+Americas,+76100+Santiago+de+Querétaro,+Qro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dirección: Gral. Francisco Villa 631, Las Americas, 76100
                  Santiago de Querétaro, Qro.
                </a>
              </div>
            </div>
          </aside>
        </div>

        {/* MAP */}
        <div className={styles.mapSection}>
         
        </div>
      </section>

      {/* ======================== WA MODAL ======================== */}
      {showModal && (
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Confirmar envío por WhatsApp"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className={styles.modalBox}>
            <h3>Listo para enviar</h3>
            <p>
              Tu mensaje está listo. Al presionar el botón abrirás WhatsApp con
              tus datos y te contactaremos a la brevedad.
            </p>
            <a
              className={styles.waBtn}
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="#fff" width="18" height="18">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Enviar por WhatsApp
            </a>
            <button className={styles.cancelBtn} onClick={closeModal}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
