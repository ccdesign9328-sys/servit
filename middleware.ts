import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Mapa de redirecciones de rutas antiguas a nuevas.
 * Redirige permanentemente (301) las rutas originales en inglés
 * a las rutas en español.
 */
const redirectMap: Record<string, string> = {
  "/service": "/servicios",
  "/contact": "/contacto",
  "/service/camaras-de-seguridad": "/servicios/camaras-de-seguridad",
  "/service/video-portero-inteligente": "/servicios/video-portero-inteligente",
  "/service/ac-installation": "/servicios/control-acceso",
  "/service/air-quality-solutions": "/servicios/alarmas",
  "/service/cerca-elec": "/servicios/cerca-electrica",
  "/service/cool-comfort-deal": "/servicios/aire-acondicionado",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const destination = redirectMap[pathname];
  if (destination) {
    const url = request.nextUrl.clone();
    url.pathname = destination;
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/service/:path*", "/contact"],
};
