# Whitehorns Football — sitio web

Sitio estático (sin dependencias ni build).

- `index.html` — sitio principal (hero con el drop, equipo, tienda, juego, comunidad, partidos, contacto)
- `producto.html?p=<id>` — página de venta de cada prenda
- `assets/site.css` — estilos del sitio · `assets/shop.css` — estilos de tienda/carrito
- `assets/shop.js` — **catálogo, precios y carrito** (edita aquí productos y precios)
- `assets/img/` fotos del sitio · `assets/shop/` fotos de la tienda · `assets/fonts/` fuente Hitch Route

## Verlo en local

Opción rápida: doble clic en `index.html`.

Opción recomendada (servidor local, igual que en producción):

```bash
# con Python
python3 -m http.server 5173
# o con Node
npx serve .
```

Abre http://localhost:5173 (o la URL que indique `serve`).

## Editar contenido

Todo lo editable está en el objeto `CONTENT` al inicio del `<script>` en `index.html`:

- `logo.src` → `"assets/logo.svg"`
- `hero.image` / `hero.video`
- `identity.photo`, `gallery[].src`
- `schedule` y `archive`
- `contact.options` (mensajes)

Coloca las imágenes en `assets/` y usa rutas relativas, por ejemplo `"assets/partido-01.jpg"`.

## Tienda

Productos, precios, tallas y fotos viven en `SHOP.products` dentro de `assets/shop.js`.
El carrito se guarda en el navegador del cliente; al "Finalizar pedido" el pedido se copia y se abre el DM de Instagram (`ig.me/m/whitehornsmx`).
Para cobrar en línea más adelante se puede conectar Stripe Payment Links o Mercado Pago sin cambiar el diseño.

## Fuente de marca

Los títulos usan **Hitch Route**. Coloca `HitchRoute.woff2` en `assets/fonts/`. Mientras no exista se usa Big Shoulders Display.

## Publicar en GitHub Pages

```bash
git init
git add .
git commit -m "Sitio Whitehorns v1"
git branch -M main
git remote add origin https://github.com/USUARIO/whitehorns-web.git
git push -u origin main
```

En GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → main / (root) → Save**.

En uno o dos minutos queda en `https://USUARIO.github.io/whitehorns-web/`.

Dominio propio (opcional): agrega el dominio en Settings → Pages → Custom domain y crea el registro CNAME en tu proveedor de DNS.
