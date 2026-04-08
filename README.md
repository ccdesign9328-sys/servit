# SERVIT Next.js v5

## Rutas

| URL | Página |
|-----|--------|
| `/` | Inicio |
| `/servicios` | Listado de servicios |
| `/contacto` | Contacto |
| `/servicios/camaras-de-seguridad` | Cámaras de Seguridad |
| `/servicios/video-portero-inteligente` | Video Portero Inteligente |
| `/servicios/aire-acondicionado` | Aire Acondicionado - Minisplits |
| `/servicios/cerca-electrica` | Cerca Eléctrica |
| `/servicios/control-acceso` | Control de Acceso |
| `/servicios/alarmas` | Alarmas de Seguridad |

## Formulario de contacto

El botón "Mandar mensaje" en `/contacto` valida:

- **Nombre**: requerido, máximo 50 caracteres
- **Correo**: requerido, formato válido (nombre@dominio.com)
- **Teléfono**: requerido, solo dígitos, exactamente 10 dígitos (México)
- **Mensaje**: requerido, máximo 1000 caracteres

Al pasar la validación abre un modal de confirmación. Al confirmar, abre WhatsApp al número **4422645163** con todos los datos del formulario.

## Desarrollo

```bash
npm install
npm run dev
```

## Arquitectura

- `framer-html/` — HTMLs exportados de Framer con links y badges ya corregidos
- `lib/serveFramerPage.ts` — inyecta SEO en cada HTML al servirlo
- `app/*/route.ts` — rutas Next.js en español
- `app/sitemap.ts` — sitemap con URLs en español
- `app/robots.ts` — robots.txt
- `app/layout.tsx` — metadata global SEO
