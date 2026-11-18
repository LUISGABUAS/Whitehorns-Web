/* ================================================================
   TIENDA WHITEHORNS — catálogo y carrito.
   Edita aquí productos, precios, tallas y fotos.
   El pedido se envía por mensaje directo de Instagram (sin pasarela de pago).
   ================================================================ */
const SHOP = {
  currency: "MXN",
  instagramDM: "https://ig.me/m/whitehornsmx",
  handle: "@whitehornsmx",
  // ⚠️ PRECIOS DE EJEMPLO — cámbialos por los reales antes de publicar.
  products: [
    {
      id: "hoodie-blanca",
      name: "Hoodie Whitehorns",
      variant: "Blanca",
      swatch: "#FFFFFF",
      price: 899,
      tag: "Drop 01",
      cutout: "assets/shop/hoodie-hero.webp",
      images: [
        { src: "assets/shop/hoodie-blanca-modelo.jpg", alt: "Modelo con la hoodie Whitehorns blanca sentado en el estudio" },
        { src: "assets/shop/hoodie-blanca-producto.jpg", alt: "Hoodie Whitehorns blanca con emblema royal y W en la manga" },
        { src: "assets/shop/hoodie-blanca-modelo-2.jpg", alt: "Modelo con la capucha puesta de la hoodie Whitehorns blanca" },
        { src: "assets/shop/hoodies-trio.jpg", alt: "Tres jugadores con hoodies Whitehorns blanca y royal", fit: "contain" }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      desc: "La hoodie oficial del drop 01. Blanca, con el emblema Whitehorns en royal al frente y la W en la manga. Para el entrenamiento, la grada y la calle.",
      details: ["Emblema Whitehorns al frente", "W en la manga", "Capucha con cordones", "Bolsa canguro"]
    },
    {
      id: "hoodie-royal",
      name: "Hoodie Whitehorns",
      variant: "Royal",
      swatch: "#0A3DED",
      price: 899,
      tag: "Drop 01",
      images: [
        { src: "assets/shop/hoodie-royal-modelo.jpg", alt: "Modelo con la hoodie Whitehorns royal sentado en un banco" },
        { src: "assets/shop/hoodie-royal-producto.jpg", alt: "Hoodie Whitehorns royal con emblema blanco y W en la manga" },
        { src: "assets/shop/hoodie-royal-espalda.jpg", alt: "Hoodie Whitehorns royal vista de espalda con la W en la manga" },
        { src: "assets/shop/hoodies-trio.jpg", alt: "Tres jugadores con hoodies Whitehorns blanca y royal", fit: "contain" }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      desc: "El color del equipo. Hoodie royal con el emblema Whitehorns en blanco al frente y la W en la manga.",
      details: ["Emblema Whitehorns al frente", "W en la manga", "Capucha con cordones", "Bolsa canguro"]
    },
    {
      id: "playera-emblema-royal",
      name: "Playera Emblema",
      variant: "Royal",
      swatch: "#0A3DED",
      price: 449,
      tag: "Nuevo",
      images: [{ src: "assets/shop/playera-emblema-royal.jpg", alt: "Playera royal con el emblema Whitehorns en blanco" }],
      sizes: ["S", "M", "L", "XL", "XXL"],
      desc: "Manga corta con el emblema Whitehorns al frente. La básica del equipo.",
      details: ["Emblema Whitehorns al frente", "Manga corta", "Cuello redondo"]
    },
    {
      id: "playera-emblema-blanca",
      name: "Playera Emblema",
      variant: "Blanca",
      swatch: "#FFFFFF",
      price: 449,
      tag: "Nuevo",
      images: [{ src: "assets/shop/playera-emblema-blanca.jpg", alt: "Playera blanca con el emblema Whitehorns en royal" }],
      sizes: ["S", "M", "L", "XL", "XXL"],
      desc: "Manga corta con el emblema Whitehorns al frente. La básica del equipo.",
      details: ["Emblema Whitehorns al frente", "Manga corta", "Cuello redondo"]
    },
    {
      id: "playera-emblema-negra",
      name: "Playera Emblema",
      variant: "Negra",
      swatch: "#111111",
      price: 449,
      tag: "Nuevo",
      images: [{ src: "assets/shop/playera-emblema-negra.jpg", alt: "Playera negra con el emblema Whitehorns en blanco" }],
      sizes: ["S", "M", "L", "XL", "XXL"],
      desc: "Manga corta con el emblema Whitehorns al frente. La básica del equipo.",
      details: ["Emblema Whitehorns al frente", "Manga corta", "Cuello redondo"]
    },
    {
      id: "playera-whitehorns",
      name: "Playera Whitehorns",
      variant: "Negra",
      swatch: "#111111",
      price: 449,
      tag: "Nuevo",
      images: [{ src: "assets/shop/playera-whitehorns-negra.jpg", alt: "Playera negra con el emblema y la palabra WHITEHORNS" }],
      sizes: ["S", "M", "L", "XL", "XXL"],
      desc: "Negra, con el emblema y el nombre del equipo al frente.",
      details: ["Emblema y WHITEHORNS al frente", "Manga corta", "Cuello redondo"]
    },
    {
      id: "playera-est-2024",
      name: "Playera Est. 2024",
      variant: "Navy",
      swatch: "#1B2440",
      price: 449,
      tag: "Clásica",
      images: [{ src: "assets/shop/playera-est-2024.jpg", alt: "Playera navy Whitehorns Football Est. 2024 sobre el pasto" }],
      sizes: ["S", "M", "L", "XL", "XXL"],
      desc: "Estilo varsity: Whitehorns Football, Est. 2024, con el emblema y el casco.",
      details: ["Whitehorns Football · Est. 2024 al frente", "Manga corta", "Cuello redondo"]
    },
    {
      id: "tank-royal",
      name: "Tank Whitehorns",
      variant: "Royal",
      swatch: "#0A3DED",
      price: 399,
      tag: "Entrenamiento",
      images: [{ src: "assets/shop/tank-royal.jpg", alt: "Playera sin mangas royal con el emblema Whitehorns" }],
      sizes: ["S", "M", "L", "XL", "XXL"],
      desc: "Sin mangas, para el entrenamiento y el gimnasio. Emblema Whitehorns al frente.",
      details: ["Emblema Whitehorns al frente", "Sin mangas"]
    },
    {
      id: "gorra",
      name: "Gorra Whitehorns",
      variant: "Gris",
      swatch: "#8D9096",
      price: 399,
      tag: "Nuevo",
      images: [{ src: "assets/shop/gorra-gris.jpg", alt: "Gorra gris con el emblema Whitehorns en royal, frente y espalda" }],
      sizes: ["Unitalla"],
      desc: "Gorra gris con el emblema bordado en royal al frente y el logo Whitehorns atrás.",
      details: ["Emblema royal al frente", "Logo Whitehorns atrás", "Ajuste trasero"]
    },
    {
      id: "manga-larga",
      name: "Playera manga larga",
      variant: "Royal · personalizable",
      swatch: "#0A3DED",
      price: 549,
      tag: "Personalízala",
      images: [
        { src: "assets/shop/manga-larga-frente.jpg", alt: "Playera manga larga royal con emblema Whitehorns, frente" },
        { src: "assets/shop/manga-larga-espalda.jpg", alt: "Espalda de la playera con posición y número" },
        { src: "assets/shop/produccion.jpg", alt: "Playeras Whitehorns recién salidas de producción" }
      ],
      sizes: ["S", "M", "L", "XL", "XXL"],
      custom: true,
      desc: "Manga larga royal con el emblema al frente y tu posición y número en la espalda, como en el campo.",
      details: ["Emblema Whitehorns al frente", "Posición y número en la espalda", "Corte raglan"]
    }
  ]
};

/* ---------------------------------------------------------------- */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const money = n => "$" + n.toLocaleString("es-MX") + " " + SHOP.currency;
  const KEY = "wh-cart-v1";
  const byId = id => SHOP.products.find(p => p.id === id);

  let cart = [];
  try { cart = JSON.parse(localStorage.getItem(KEY) || "[]").filter(l => byId(l.id)); } catch (e) { cart = []; }
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(cart)); } catch (e) {} render(); };
  const count = () => cart.reduce((a, l) => a + l.qty, 0);
  const total = () => cart.reduce((a, l) => a + l.qty * byId(l.id).price, 0);

  // drawer markup
  const drawer = document.createElement("div");
  drawer.innerHTML = `
    <div class="cart-scrim" data-cart-close hidden></div>
    <aside class="cart" id="cart" role="dialog" aria-modal="true" aria-labelledby="cartTitle" hidden>
      <header class="cart-hd">
        <h2 id="cartTitle">Tu carrito</h2>
        <button class="cart-x" type="button" data-cart-close aria-label="Cerrar carrito">
          <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M5 5l10 10M15 5 5 15"/></svg>
        </button>
      </header>
      <div class="cart-body" id="cartBody"></div>
      <footer class="cart-ft" id="cartFt"></footer>
    </aside>
    <div class="toast" id="toast" role="status" aria-live="polite"></div>`;
  document.body.appendChild(drawer);
  const panel = $("#cart"), scrim = $(".cart-scrim");
  let lastFocus = null;

  function open() {
    lastFocus = document.activeElement;
    panel.hidden = scrim.hidden = false;
    requestAnimationFrame(() => { panel.classList.add("in"); scrim.classList.add("in"); });
    document.documentElement.style.overflow = "hidden";
    $(".cart-x", panel).focus();
  }
  function close() {
    panel.classList.remove("in"); scrim.classList.remove("in");
    document.documentElement.style.overflow = "";
    setTimeout(() => { panel.hidden = scrim.hidden = true; }, 320);
    if (lastFocus) lastFocus.focus();
  }
  document.addEventListener("click", e => {
    if (e.target.closest("[data-cart-open]")) { e.preventDefault(); open(); }
    else if (e.target.closest("[data-cart-close]")) close();
  });
  addEventListener("keydown", e => { if (e.key === "Escape" && !panel.hidden) close(); });

  function lineLabel(l) {
    const p = byId(l.id);
    return `${p.name} ${p.variant} · Talla ${l.size}${l.custom ? " · " + l.custom : ""}`;
  }

  function render() {
    const n = count();
    document.querySelectorAll("[data-cart-count]").forEach(b => { b.textContent = n; b.hidden = !n; });
    const body = $("#cartBody"), ft = $("#cartFt");
    if (!cart.length) {
      body.innerHTML = `<div class="cart-empty"><p>Tu carrito está vacío.</p><a class="btn btn-royal" href="producto.html?p=hoodie-blanca">Ver la hoodie</a></div>`;
      ft.innerHTML = "";
      return;
    }
    body.innerHTML = cart.map((l, i) => {
      const p = byId(l.id);
      return `<div class="cl">
        <a href="producto.html?p=${p.id}" class="cl-img"><img src="${esc(p.images[0].src)}" alt="" loading="lazy"></a>
        <div class="cl-info">
          <b>${esc(p.name)}</b>
          <small>${esc(p.variant)} · Talla ${esc(l.size)}${l.custom ? " · " + esc(l.custom) : ""}</small>
          <div class="qty" role="group" aria-label="Cantidad">
            <button type="button" data-q="${i}" data-d="-1" aria-label="Quitar uno">−</button>
            <span aria-live="polite">${l.qty}</span>
            <button type="button" data-q="${i}" data-d="1" aria-label="Agregar uno">+</button>
          </div>
        </div>
        <div class="cl-end">
          <span class="cl-price">${money(p.price * l.qty)}</span>
          <button type="button" class="cl-rm" data-rm="${i}">Quitar</button>
        </div>
      </div>`;
    }).join("");
    ft.innerHTML = `
      <div class="cart-total"><span>Subtotal</span><b>${money(total())}</b></div>
      <p class="cart-note">Pago y entrega se coordinan por mensaje directo con ${esc(SHOP.handle)}.</p>
      <button class="btn btn-royal cart-go" type="button" id="checkout">Finalizar pedido
        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2.4"><path d="M3 10h13M11 4l6 6-6 6"/></svg></button>
      <p class="cart-status" id="cartStatus" role="status" aria-live="polite"></p>`;
  }

  panel.addEventListener("click", async e => {
    const q = e.target.closest("[data-q]"), rm = e.target.closest("[data-rm]");
    if (q) {
      const l = cart[+q.dataset.q]; l.qty = Math.max(0, Math.min(20, l.qty + +q.dataset.d));
      if (!l.qty) cart.splice(+q.dataset.q, 1);
      save();
    } else if (rm) { cart.splice(+rm.dataset.rm, 1); save(); }
    else if (e.target.closest("#checkout")) {
      const msg = "Hola, Whitehorns. Quiero hacer este pedido:\n\n" +
        cart.map(l => `• ${l.qty} × ${lineLabel(l)} — ${money(byId(l.id).price * l.qty)}`).join("\n") +
        `\n\nSubtotal: ${money(total())}\n\n¿Cómo puedo pagar y recibirlo? Gracias.`;
      const st = $("#cartStatus");
      let copied = false;
      try { await navigator.clipboard.writeText(msg); copied = true; } catch (err) {}
      st.textContent = copied
        ? "Pedido copiado. Pégalo en el chat de Instagram que se abrió."
        : "Abre Instagram y escribe tu pedido a " + SHOP.handle + ".";
      window.open(SHOP.instagramDM, "_blank", "noopener");
    }
  });

  let tt = 0;
  function toast(html) {
    const t = $("#toast"); t.innerHTML = html; t.classList.add("in");
    clearTimeout(tt); tt = setTimeout(() => t.classList.remove("in"), 3200);
  }

  window.WHCart = {
    add(id, size, qty = 1, custom = "") {
      const p = byId(id); if (!p) return;
      const ex = cart.find(l => l.id === id && l.size === size && (l.custom || "") === custom);
      if (ex) ex.qty = Math.min(20, ex.qty + qty); else cart.push({ id, size, qty, custom });
      save();
      toast(`<b>Agregado</b> ${esc(p.name)} ${esc(p.variant)} · ${esc(size)} <button type="button" data-cart-open>Ver carrito</button>`);
    },
    open, money, byId, products: SHOP.products
  };
  render();
})();
