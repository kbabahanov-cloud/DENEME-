# VOLONTE — Katalog Web Sitesi

Toptan kadın giyim için katalog sitesi. Kurulum gerektirmez: `index.html` dosyasına çift tıklayınca tarayıcıda açılır.

## Sayfalar

| Dosya | Sayfa |
|---|---|
| `index.html` | Ana sayfa |
| `urunler.html` | Ürünler (kategorilere göre filtreleme) |
| `iletisim.html` | İletişim |

## Sık yapılan işler

**İletişim bilgilerini değiştirmek** → `js/ayarlar.js`
WhatsApp numarası, Telegram linki, e-posta, adres. Sitedeki tüm butonlar otomatik güncellenir.

**Ürün eklemek / silmek** → `js/urunler.js`
Bir ürün satırını kopyalayıp kodu, adı, kategoriyi değiştirin. `yeni: true` olan ürünler ana sayfada "New Arrivals" bölümünde görünür.

**Fotoğraf eklemek**
1. Fotoğrafı `resimler/` klasörüne koyun (örnek: `resimler/vl-101.jpg`).
2. `js/urunler.js` içinde o ürünün `resim: ""` kısmını `resim: "resimler/vl-101.jpg"` yapın.
Dikey (2:3 oranında) fotoğraflar en iyi görünür.

**Ana sayfaya kapak fotoğrafı koymak**
Büyük, yatay bir fotoğrafı `resimler/kapak.jpg` adıyla `resimler/` klasörüne koyun. Ana sayfanın üst kısmında otomatik görünür. Fotoğraf yoksa sade gri bir zemin görünür.

**Kategori eklemek** → `js/urunler.js` en üstteki `KATEGORILER` listesi.

**Renkleri değiştirmek** → `css/style.css` en üstteki `:root` bölümü.

## Nasıl çalışır

Her üründe "Ask price" bağlantısı vardır. Müşteri basınca WhatsApp açılır ve mesaja ürün kodu otomatik yazılır.
