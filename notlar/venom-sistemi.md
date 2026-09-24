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

## Ortak sözlük

| Kelime | Anlamı |
|---|---|
| Ajan | Müşteriye sizin adınıza cevap veren yapay zekâ programı |
| Stok listesi | Hangi üründen, hangi renk ve bedende kaç adet olduğunu gösteren tek liste |
| Test modu | Ajan sadece sizinle konuşur, gerçek müşteriye açılmaz |
| Devretme | Ajanın konuşmayı size bırakması (sipariş, ödeme, pazarlık, emin olmadığı durumlar) |
| Onay | Siz "tamam" demeden hiçbir şeyin yayınlanmaması veya gönderilmemesi |

## Soru listesi (cevaplar geldikçe doldurulacak)

### A. Stok
1. Stok şu an nasıl tutuluyor? (defter / Excel / program adı / akılda) — Cevap:
2. Şu an kaç model var? Her modelde kaç renk ve beden var? — Cevap:
3. Stok nerede duruyor: mağaza, depo, fabrika? Kaç fabrikayla çalışılıyor? — Cevap:
4. Stoğu kim güncelleyecek ve ne sıklıkla (her satışta / günde bir)? — Cevap:
5. Ürün kodu sistemi var mı? Örnek bir kod: — Cevap:

### B. Müşteriler
6. Müşterilerin en sık sorduğu 5 soru nedir? (gerçek mesaj örnekleri çok faydalı) — Cevap:
7. Müşteriler hangi dillerde yazıyor? — Cevap:
8. Ajan fiyat söyleyebilir mi? Fiyat herkese aynı mı, müşteriye göre mi değişiyor? — Cevap:
9. Ajan minimum sipariş, seri, kargo ve ödeme yollarını anlatabilir mi? — Cevap:

### C. Kurallar
10. Ajanın asla yapmaması gerekenler neler? — Cevap:
11. Ajan cevap veremezse size nasıl haber versin? — Cevap:
12. Ajan hangi saatlerde çalışsın (7/24 mü)? — Cevap:

### D. Hesaplar
13. Telegram'da müşteriler size nereden yazıyor (kişisel hesap / kanal yorumları / grup)? Telegram Premium var mı? — Cevap:
14. WhatsApp normal uygulama mı, WhatsApp Business uygulaması mı? — Cevap:

### E. Bütçe ve ekip
15. Bu sistem için aylık ne kadar harcamayı düşünürsünüz? — Cevap:
16. Ekipte bu işe yardım edebilecek biri var mı? — Cevap:
