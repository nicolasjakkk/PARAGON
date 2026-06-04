# PARAGON — Deck del proyecto

Plataforma integral de transferencia y preservación del conocimiento operacional industrial.

## Estructura

```
paragon-deck/
├── index.html        ← Landing page pública
├── deck.html         ← Deck completo navegable
├── css/
│   └── style.css     ← Estilos compartidos
├── js/
│   ├── data.js       ← Todos los datos (módulos, roles, gantt, pricing)
│   └── deck.js       ← Lógica de renderizado
└── assets/
    └── logo.svg      ← Logo PARAGON
```

## Publicar en GitHub Pages

### Opción A — Desde la interfaz de GitHub (más simple)

1. Sube todos los archivos a un repositorio nuevo (ej: `paragon-deck`)
2. Ve a **Settings → Pages**
3. En **Source**, selecciona `Deploy from a branch`
4. En **Branch**, selecciona `main` y carpeta `/root`
5. Haz clic en **Save**
6. En ~1 minuto tu sitio estará en: `https://tuusuario.github.io/paragon-deck/`

### Opción B — Desde la terminal

```bash
git init
git add .
git commit -m "feat: initial PARAGON deck"
git branch -M main
git remote add origin https://github.com/tuusuario/paragon-deck.git
git push -u origin main
```
Luego activa GitHub Pages en Settings como en la Opción A.

## Actualizar datos

Todo el contenido está en `js/data.js`. Para actualizar:

- **Módulos**: edita el array `DATA.modules`
- **Roles**: edita el array `DATA.roles`
- **Precios**: edita `DATA.pricing.plans`
- **Gantt**: edita `DATA.gantt.phases`
- **Roadmap**: edita `DATA.roadmap`

No necesitas tocar HTML ni CSS para actualizar contenido.

## URLs

| Página | URL |
|--------|-----|
| Landing | `https://tuusuario.github.io/paragon-deck/` |
| Deck completo | `https://tuusuario.github.io/paragon-deck/deck.html` |

## Stack

- HTML + CSS + JS vanilla (sin frameworks, sin build)
- Tabler Icons (CDN)
- Google Fonts: Barlow + Barlow Condensed (CDN)

---
© 2025 PARAGON v1.0.0
