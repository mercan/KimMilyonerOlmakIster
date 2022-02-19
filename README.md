# Kim Milyoner Olmak İster?

Kim milyoner olmak ister yarışmasında ki çıkmış soruları sağlayan api

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

## API Kullanımı

#### Soru getir

```http
  GET /api/question
```

|  Parametre   |   Tip    |               Açıklama                |
| :----------: | :------: | :-----------------------------------: |
| `difficulty` | `string` | Sorunun zorluğunu belirler **(1-12)** |

## Ekler

Swagger Dökümantasyon: [Swagger](https://kimmilyonerolmakister.herokuapp.com/documentation)

## Kullanılan Teknolojiler

**Sunucu:** Node, Fastify, MongoDB, Swagger, Winston
