"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="https://framerusercontent.com/images/7Tb7901jrNH2Hy8lH8g8b4zTiCY.svg"
                alt="SERVIT Logo"
                width={32}
                height={32}
              />
              <span className="text-lg font-bold">SERVIT</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Expertos en tecnología y seguridad. Instalación profesional de
              cámaras, cercos eléctricos, control de acceso y aire
              acondicionado en Querétaro y sus alrededores.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Servicios
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/servicios/camaras-de-seguridad",      label: "Cámaras de Seguridad" },
                { href: "/servicios/video-portero-inteligente", label: "Video Portero Inteligente" },
                { href: "/servicios/aire-acondicionado",        label: "Aire Acondicionado" },
                { href: "/servicios/cerca-electrica",           label: "Cerca Eléctrica" },
                { href: "/servicios/control-acceso",            label: "Control de Acceso" },
                { href: "/servicios/alarmas",                   label: "Alarmas de Seguridad" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-300 mb-4">
              Escríbenos para ayudarte
            </h3>
            <p className="text-gray-400 text-sm mb-4">
              Puedes mandarnos un mensaje por WhatsApp y contarte más sobre
              nuestras opciones para ti.
            </p>
            <a
              href="https://wa.me/524422645163"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          © 2025 ServIT. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}
