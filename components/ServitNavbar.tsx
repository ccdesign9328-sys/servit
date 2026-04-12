"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import styles from "./ServitNavbar.module.css";

interface ServitNavbarProps {
  /** Ruta activa para resaltar en el menú */
  activePath?: string;
}

export default function ServitNavbar({ activePath = "" }: ServitNavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú móvil al hacer click fuera
  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (
        !target.closest("[data-mobile-menu]") &&
        !target.closest("[data-hamburger]")
      ) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  const navLinks = [
    { href: "/", label: "Inicio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/ubicacion", label: "Ubicacion" }
  ];

  const navClass = [styles.nav, scrolled ? styles.scrolled : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <>
      <nav className={navClass}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          <Image
            src={scrolled ? "/LSN.svg" : "/LSB.svg"}
            alt="SERVIT logo"
            width={62}
            height={55}
            style={{ height: 55, width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <ul className={styles.desktopLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={[
                  styles.navLink,
                  activePath === link.href ? styles.active : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="https://api.whatsapp.com/send/?phone=524422733401&text=Hola+quiero+m%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0" className={styles.ctaBtn}>
              Contáctanos
            </Link>
          </li>
        </ul>

        {/* Hamburger (mobile) */}
        <button
          data-hamburger
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menú"
          className={styles.hamburger}
        >
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div data-mobile-menu className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={[
                styles.mobileLink,
                activePath === link.href ? styles.active : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="https://api.whatsapp.com/send/?phone=524422733401&text=Hola+quiero+m%C3%A1s+informaci%C3%B3n&type=phone_number&app_absent=0"
            onClick={() => setMenuOpen(false)}
            className={styles.mobileCta}
          >
            Contáctanos
          </Link>
        </div>
      )}
    </>
  );
}