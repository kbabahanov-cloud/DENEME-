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
Dikey (3:4 oranında) fotoğraflar en iyi görünür.

**Kategori eklemek** → `js/urunler.js` en üstteki `KATEGORILER` listesi.

**Renkleri değiştirmek** → `css/style.css` en üstteki `:root` bölümü.

## Nasıl çalışır

Her üründe "Ask price on WhatsApp" butonu vardır. Müşteri basınca WhatsApp açılır ve mesaja ürün kodu otomatik yazılır.
