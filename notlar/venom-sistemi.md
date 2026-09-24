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

## Güncel sıralama (cevaplardan sonra, 24 Eylül 2026)

Müşteriler Telegram'dan yazmadığı için müşteriyle konuşan ajan **WhatsApp**'ta olacak. Telegram kanal paylaşımı ve kullanıcıya bildirim için kullanılacak.

| Sıra | Aşama | Neden bu sırada |
|---|---|---|
| 1 | Stok programından stok ve fiyat verisini almak | Ajan fiyat ve "var/yok" cevabını buradan verecek. |
| 2 | WhatsApp ajanı, test numarasıyla | Müşteri konuşmaları burada. Gerçek numaraya geçmeden önce ayrı bir test numarasında denenir. |
| 3 | Kullanıcının telefonuna bildirim | Sorun çıkınca veya müşteri sipariş vermek isteyince anında haber. |
| 4 | Ajanı gerçek WhatsApp numarasına bağlamak | Test başarılı olunca, sohbet geçmişini riske atmadan. |
| 5 | Fotoğraftan Telegram kanalı paylaşımı (onaylı) | Kanal zaten kullanılıyor, sonra eklenir. |
| 6 | Ofiste sesli asistan | Sonraya bırakıldı. |

## Tasarım ilkeleri (öneri, kullanıcı onayı bekliyor)

- Ajan stok ve ürün bilgisi verir. Sipariş kesinleştirme, ödeme, indirim ve pazarlık kullanıcıya devredilir.
- Emin olmadığı her durumda uydurmaz, "kontrol edip dönüyorum" der ve kullanıcıya haber verir.
- Müşterinin dilinde cevap verir (Fransızca, İngilizce, Portekizce; gerekirse Türkçe, Rusça).
- Her zaman sabırlı ve kibar. Müşteriyle asla tartışmaz.
- Kanal paylaşımları her zaman kullanıcı onayından sonra yapılır.

## Durum

- [x] Katalog sitesi yayında: https://kbabahanov-cloud.github.io/VOLONTE/
- [x] WhatsApp (+90 536 239 00 91) ve Telegram (t.me/Volonteroseoffical) siteye bağlandı.
- [x] Kapsam daraltıldı: video, Instagram, TikTok şimdilik iptal.
- [x] Soru listesi A–E cevaplandı (16. soru hariç).
- [x] Karar: Eski stok programı yerine yeni, sade bir stok programı yazılıyor. Kullandıkça hatalar düzeltilip geliştirilecek.
- [x] Stok programı 1. sürüm yayında: https://claude.ai/artifact/HE2rUVx7fiZpiAQnYm4Njh (sadece kullanıcıya açık)
  - Kaynak kod: `stok-programi/volonte-stok.html` (değişiklikten sonra aynı artifact adresine yeniden yayınlanır)
  - Veritabanı: `urunler/<stok kodu>` (ad, fiyat, renkler → mağaza/fabrika adedi), `gunluk/<YYYY-AA-GG>` (o günün hareket listesi), `ayarlar/genel` (paraBirimi, birim, azEsik)
  - Claude verileri ArtifactData aracıyla okuyup düzeltebilir.
- [ ] Kullanıcı ilk ürünleri girip denesin, geri bildirim versin.
- [ ] Sonraki sürüm adayları: ödemeler, beden takibi, Excel'e aktarma, ürün fotoğrafı.

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
1. Stok şu an nasıl tutuluyor? — Cevap: Bir stok programı. Sesli mesajda "Vega... A5" diye anlaşıldı; programın tam adı teyit edilecek.
2. Şu an kaç model var? — Cevap: Mağazada ortalama 400 model. Renkler modele göre değişiyor.
3. Stok nerede duruyor? — Cevap: Tek fabrika. Stok hem fabrikada hem mağazada var.
4. Stoğu kim güncelliyor? — Cevap: Kullanıcı kendisi, her gün, elle giriyor.
5. Ürün kodu var mı? — Cevap: Evet, her modelin stok kodu var. Örnek: 3394.

### B. Müşteriler
6. En sık soru? — Cevap: Fiyat ("how much").
7. Diller? — Cevap: Fransızca, İngilizce, Portekizce.
8. Ajan fiyat söyleyebilir mi? — Cevap: Evet. Fiyat herkese aynı.
9. Ajan kargo vb. anlatabilir mi? — Cevap: Evet, kargo gönderimini de anlatacak. (Kargo kuralları henüz alınmadı.)

### C. Kurallar
10. Ajanın asla yapmaması gerekenler? — Cevap: Müşteriye asla kötü davranmamalı. Her zaman sabırlı ve yumuşak olmalı ("her şeyi alttan almalı").
11. Sorun olunca haber? — Cevap: Kullanıcının telefonuna anında bildirim gelsin, bir insan konuşmaya baksın.
12. Çalışma saatleri? — Cevap: 7/24.

### D. Hesaplar
13. Telegram? — Cevap: Müşteriler Telegram'dan YAZMIYOR, kanalda sadece fotoğrafları görüyor. Telegram Premium var.
14. WhatsApp? — Cevap: WhatsApp Business uygulaması.

### E. Bütçe ve ekip
15. Bütçe? — Cevap: Sistemin sağlıklı çalışması için gereken neyse.
16. Ekipte bu işe yardım edebilecek biri var mı? — Cevap:
