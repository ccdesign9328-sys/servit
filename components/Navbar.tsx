"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://framerusercontent.com/images/7Tb7901jrNH2Hy8lH8g8b4zTiCY.svg"
              alt="SERVIT Logo"
              width={36}
              height={36}
              priority
            />
            <span className="text-xl font-bold text-gray-900 tracking-tight">
              SERVIT
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 hover:text-cyan-600 transition-colors"
            >
              Productos
            </Link>
            <Link
              href="/servicios"
              className="text-sm font-medium text-gray-600 hover:text-cyan-600 transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/contacto"
              className="text-sm font-medium text-gray-600 hover:text-cyan-600 transition-colors"
            >
              Contáctanos
            </Link>
            <a
              href="https://wa.me/52524422733401"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors"
            >
              Cotiza ahora
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 flex flex-col gap-4">
            <Link
              href="/"
              className="text-sm font-medium text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Productos
            </Link>
            <Link
              href="/servicios"
              className="text-sm font-medium text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              href="/contacto"
              className="text-sm font-medium text-gray-700"
              onClick={() => setMenuOpen(false)}
            >
              Contáctanos
            </Link>
            <a
              href="https://wa.me/52524422733401"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-cyan-600 text-white text-sm font-semibold px-5 py-2 rounded-full text-center"
            >
              Cotiza ahora
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
