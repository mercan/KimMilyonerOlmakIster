# Kim Milyoner Olmak İster?

Kim milyoner olmak ister yarışmasında ki çıkmış soruları sağlayan api

## API Kullanımı

#### Tüm öğeleri getir

```http
  GET /api/question
```

|  Parametre   |   Tip    |               Açıklama                |
| :----------: | :------: | :-----------------------------------: |
| `difficulty` | `string` | Sorunun zorluğunu belirler **(1-12)** |

## Bilgisayarınızda Çalıştırın

Projeyi klonlayın

```bash
  git clone https://github.com/mercan/KimMilyonerOlmakIster.git
```

Proje dizinine gidin

```bash
  cd KimMilyonerOlmakIster
```

Gerekli paketleri yükleyin

```bash
  npm install
```

Sunucuyu çalıştırın

```bash
  npm run start
```

## Kullanılan Teknolojiler

**Sunucu:** Node, Fastify, MongoDB, Swagger, Winston
