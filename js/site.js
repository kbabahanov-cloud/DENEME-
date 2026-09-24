// =====================================================
//  VOLONTE — SİTE İŞLEYİŞİ
//  Bu dosyayı değiştirmenize gerek yok.
//  Ürünler: js/urunler.js · İletişim bilgileri: js/ayarlar.js
// =====================================================

function whatsappLink(mesaj) {
  return "https://wa.me/" + AYARLAR.whatsappNumara + "?text=" + encodeURIComponent(mesaj);
}

function kategoriAdi(id) {
  const k = KATEGORILER.find(function (x) { return x.id === id; });
  return k ? k.ad : id;
}

function yaziTemizle(metin) {
  const d = document.createElement("div");
  d.textContent = metin;
  return d.innerHTML;
}

// ---------- Menü (telefon) ----------
function menuyuKur() {
  const buton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-links");
  if (!buton || !menu) return;
  buton.addEventListener("click", function () {
    const acik = menu.classList.toggle("open");
    buton.setAttribute("aria-expanded", acik ? "true" : "false");
  });
}

// ---------- İletişim bilgilerini doldur ----------
function iletisimBilgileriniDoldur() {
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    el.href = whatsappLink(el.getAttribute("data-wa") || "Hello VOLONTE, I would like to get your wholesale catalogue.");
    el.target = "_blank";
    el.rel = "noopener";
  });
  document.querySelectorAll("[data-telegram]").forEach(function (el) {
    el.href = AYARLAR.telegramLink;
    el.target = "_blank";
    el.rel = "noopener";
  });
  document.querySelectorAll("[data-email]").forEach(function (el) {
    el.href = "mailto:" + AYARLAR.eposta;
    el.textContent = AYARLAR.eposta;
  });
  document.querySelectorAll("[data-email-btn]").forEach(function (el) {
    el.href = "mailto:" + AYARLAR.eposta;
  });
  document.querySelectorAll("[data-adres]").forEach(function (el) { el.textContent = AYARLAR.adres; });
  document.querySelectorAll("[data-saatler]").forEach(function (el) { el.textContent = AYARLAR.calismaSaatleri; });
  document.querySelectorAll("[data-wa-numara]").forEach(function (el) { el.textContent = "+" + AYARLAR.whatsappNumara; });
  document.querySelectorAll("[data-yil]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
}

// ---------- Ürün kartı ----------
function urunKarti(u) {
  const renk = u.renkler && u.renkler.length ? u.renkler[0] : "#C8963E";
  const gorsel = u.resim
    ? '<img src="' + yaziTemizle(u.resim) + '" alt="' + yaziTemizle(u.ad) + '" loading="lazy">'
    : '<div class="placeholder" style="--c:' + renk + '"><span>' + yaziTemizle(u.kod) + "</span></div>";

  const noktalar = (u.renkler || []).map(function (r) {
    return '<span class="dot" style="background:' + r + '"></span>';
  }).join("");

  const mesaj = "Hello VOLONTE, I am interested in " + u.kod + " – " + u.ad + ". Could you send me the price and available colours?";

  return (
    '<article class="product">' +
      '<div class="product-media">' + gorsel +
        (u.yeni ? '<span class="badge">New</span>' : "") +
      "</div>" +
      '<div class="product-body">' +
        '<p class="product-cat">' + yaziTemizle(kategoriAdi(u.kategori)) + "</p>" +
        "<h3>" + yaziTemizle(u.ad) + "</h3>" +
        '<p class="product-code">' + yaziTemizle(u.kod) + "</p>" +
        '<ul class="product-meta">' +
          "<li>Sizes: " + yaziTemizle(u.bedenler) + "</li>" +
          "<li>" + u.seri + " pcs / series</li>" +
        "</ul>" +
        '<div class="dots">' + noktalar + "</div>" +
        '<a class="btn btn-wa btn-block" target="_blank" rel="noopener" href="' + whatsappLink(mesaj) + '">Ask price on WhatsApp</a>' +
      "</div>" +
    "</article>"
  );
}

// ---------- Ürünler sayfası ----------
function urunlerSayfasiniKur() {
  const liste = document.getElementById("urun-listesi");
  const filtre = document.getElementById("kategori-filtre");
  if (!liste || !filtre) return;

  const sayac = document.getElementById("urun-sayisi");

  const secenekler = [{ id: "all", ad: "All" }].concat(KATEGORILER);
  filtre.innerHTML = secenekler.map(function (k) {
    return '<button type="button" class="chip" data-kategori="' + k.id + '">' + yaziTemizle(k.ad) + "</button>";
  }).join("");

  function goster(kategori) {
    const secili = kategori === "all" ? URUNLER : URUNLER.filter(function (u) { return u.kategori === kategori; });
    liste.innerHTML = secili.length
      ? secili.map(urunKarti).join("")
      : '<p class="empty">No products in this category yet.</p>';
    if (sayac) sayac.textContent = secili.length + (secili.length === 1 ? " product" : " products");
    filtre.querySelectorAll(".chip").forEach(function (b) {
      const aktif = b.getAttribute("data-kategori") === kategori;
      b.classList.toggle("active", aktif);
      b.setAttribute("aria-pressed", aktif ? "true" : "false");
    });
  }

  filtre.addEventListener("click", function (e) {
    const b = e.target.closest(".chip");
    if (!b) return;
    const k = b.getAttribute("data-kategori");
    history.replaceState(null, "", k === "all" ? location.pathname : "#" + k);
    goster(k);
  });

  const bastaki = location.hash.replace("#", "");
  goster(KATEGORILER.some(function (k) { return k.id === bastaki; }) ? bastaki : "all");
}

// ---------- Ana sayfa ----------
function anaSayfayiKur() {
  const kategoriAlani = document.getElementById("kategori-kartlari");
  if (kategoriAlani) {
    kategoriAlani.innerHTML = KATEGORILER.map(function (k) {
      const ilk = URUNLER.find(function (u) { return u.kategori === k.id; });
      const renk = ilk && ilk.renkler.length ? ilk.renkler[0] : "#C8963E";
      const adet = URUNLER.filter(function (u) { return u.kategori === k.id; }).length;
      return (
        '<a class="cat-card" href="urunler.html#' + k.id + '" style="--c:' + renk + '">' +
          "<span class=\"cat-count\">" + adet + " models</span>" +
          "<h3>" + yaziTemizle(k.ad) + "</h3>" +
          "<p>" + yaziTemizle(k.aciklama) + "</p>" +
          '<span class="cat-link">View collection →</span>' +
        "</a>"
      );
    }).join("");
  }

  const yeniAlani = document.getElementById("yeni-urunler");
  if (yeniAlani) {
    yeniAlani.innerHTML = URUNLER.filter(function (u) { return u.yeni; }).slice(0, 4).map(urunKarti).join("");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  menuyuKur();
  iletisimBilgileriniDoldur();
  anaSayfayiKur();
  urunlerSayfasiniKur();
});
