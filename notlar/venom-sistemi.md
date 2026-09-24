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

## Kapsam kararı (24 Eylül 2026)

Kullanıcı kapsamı daralttı:
- **İptal (şimdilik):** mankenli video üretimi, Instagram, TikTok.
- **Şimdiki hedef:** WhatsApp ve Telegram'da müşterilere cevap veren bir **ajan (bot)**.
  - Müşteri bir ürünü sorunca stoğa bakar, var mı yok mu kontrol eder.
  - Müşteriye normal bir insan gibi, net ve doğal bir dille cevap verir.
  - Kullanıcı bota bir fotoğraf verince Telegram kanalında paylaşım yapar (onaydan sonra).

## Güncel sıralama

| Sıra | Aşama | Neden bu sırada |
|---|---|---|
| 1 | Stok listesi (ajanın bakacağı kaynak) | Ajan stoğu kontrol edebilmek için tek ve güncel bir listeye ihtiyaç duyar. |
| 2 | Telegram ajanı (önce sadece kullanıcıyla test) | Kurulumu en kolay kanal. Cevap tarzı burada gerçek müşteriye çıkmadan ayarlanır. |
| 3 | Fotoğraftan Telegram kanalı paylaşımı (onaylı) | Aynı bot üzerinden, ek maliyet olmadan. |
| 4 | WhatsApp ajanı | Meta'nın WhatsApp Business Platform kurulumu ve onayı gerekir. Telegram'da olgunlaşan ajan buraya taşınır. |
| 5 | Ofiste sesli asistan | Sonraya bırakıldı. |

## Tasarım ilkeleri (öneri, kullanıcı onayı bekliyor)

- Ajan stok ve ürün bilgisi verir. Sipariş kesinleştirme, ödeme, indirim ve pazarlık kullanıcıya devredilir.
- Emin olmadığı her durumda uydurmaz, "kontrol edip dönüyorum" der ve kullanıcıya haber verir.
- Müşterinin dilinde cevap verir (İngilizce, Fransızca, Rusça, Türkçe).
- Kanal paylaşımları her zaman kullanıcı onayından sonra yapılır.

## Durum

- [x] Katalog sitesi yayında: https://kbabahanov-cloud.github.io/VOLONTE/
- [x] WhatsApp (+90 536 239 00 91) ve Telegram (t.me/Volonteroseoffical) siteye bağlandı.
- [x] Kapsam daraltıldı: video, Instagram, TikTok şimdilik iptal.
- [ ] 1. aşama: Stok listesi (stoğun şu an nasıl tutulduğu cevabı bekleniyor)
