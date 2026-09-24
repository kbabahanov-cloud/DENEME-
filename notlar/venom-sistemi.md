# VENOM Sistemi — Kullanıcının İstekleri ve Yol Haritası

> Kaydedilme tarihi: 24 Eylül 2026. Kullanıcının sesli mesajından not alındı.
> Bu dosya, sonraki oturumlarda nerede kaldığımızı hatırlamak içindir.

## Kullanıcının anlattıkları (özet)

- İstanbul **Laleli**'de bir **toptan mağaza** sahibi (VOLONTE markası).
- İşini ileri teknolojiyle yöneten, yapay zekâ destekli bir ana sistem kurmak istiyor. Adı: **"Venom"** (sesli mesajdan anlaşıldığı şekliyle, teyit edilecek).
- Sistemin parçaları:
  1. **Ofiste sesli asistan ("Hermes"):** Kullanıcı konuşarak komut verecek. Asistan Claude'a bağlı olacak ve sesli cevap verecek.
  2. **Stok ve depo sistemi (yapay zekâ destekli):**
     - Mal girişi ve çıkışı
     - Ödemeler
     - Fabrikadaki stoklar
     - Mağazadaki stoklar
  3. **Kanal bağlantıları:** WhatsApp, Telegram, TikTok ve Instagram ana sisteme bağlanacak.
  4. **Yeni model akışı:**
     - Kullanıcı yeni modelin fotoğrafını çekip gönderir.
     - Sistem fotoğraftan mankenli bir tanıtım videosu hazırlar.
     - Video kullanıcıya sunulur. **Kullanıcı onay vermeden hiçbir şey yayınlanmaz.**
     - Onaydan sonra Telegram, TikTok ve Instagram'da yayınlanır.

## Önerilen sıralama (her aşama bir öncekinin üzerine kurulur)

| Sıra | Aşama | Neden bu sırada |
|---|---|---|
| 1 | Stok ve ürün veritabanı | Her şeyin temeli. Ürün kodu, fotoğraf, beden, renk, fiyat ve stok burada tutulur. Diğer bütün parçalar bu veriyi kullanır. |
| 2 | Telegram otomasyonu | Ana vitrin (≈14 bin takipçi). Bağlanması en kolay ve en ucuz kanal. İlk hızlı kazanç. |
| 3 | Fotoğraf → mankenli video akışı (onaylı) | Ürün veritabanı hazır olunca her yeni model otomatik içeriğe dönüşür. |
| 4 | Instagram ve TikTok yayını | Bu kanallar için işletme hesabı ve platform onayı gerekir. Onay süreci zaman alır, erken başvurulmalı. |
| 5 | WhatsApp Business bağlantısı | Siparişlerin çoğu burada. Müşteriye stok ve fiyat bilgisini otomatik verebilmek için 1. aşamadaki verilere ihtiyaç var. |
| 6 | Ofiste sesli asistan | Diğer sistemleri yöneten "ses arayüzü". Arkasında stok, kanallar ve içerik akışı hazır olunca gerçekten işe yarar. |

## Açık sorular (kullanıcıya sorulacak)

- "Venom" ve "Hermes" adları doğru mu anlaşıldı?
- Stoklar şu an nasıl tutuluyor (defter, Excel, bir program)?
- Kaç model / ürün var? Kaç fabrika ile çalışılıyor?
- Fatura ve muhasebe için hangi program kullanılıyor (e-fatura)?
- Veriyi sisteme kim girecek (kullanıcı, çalışan, depo sorumlusu)?
- Aylık bütçe sınırı var mı?

## Durum

- [x] Katalog sitesi yayında: https://kbabahanov-cloud.github.io/VOLONTE/
- [x] WhatsApp (+90 536 239 00 91) ve Telegram (t.me/Volonteroseoffical) siteye bağlandı.
- [ ] 1. aşama: Stok sistemi (sorular cevaplanınca başlanacak)
