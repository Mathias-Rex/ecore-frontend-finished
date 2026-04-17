# E-CORE Űrjárművek

Interaktív webalkalmazás az E-CORE űrjármű gyártó cég számára. React és TanStack Router alapú single-page alkalmazás.

## Templates

A `templates/` mappa az eredeti HTML fájlokat tartalmazza, amelyekből a React átírás készült. Ezek a statikus HTML oldalak referenciaként szolgálnak a funkcionalitás és a dizájn megőrzéséhez.

## Technológiák

Részletes áttekintés: [TECHNOLOGIES.md](./TECHNOLOGIES.md)

## Kezdés

```bash
npm install
npm run dev
```

## Szkriptek

| Szkript           | Leírás             |
| ----------------- | ------------------ |
| `npm run dev`     | Fejlesztői szerver |
| `npm run build`   | Produkcíós build   |
| `npm run lint`    | ESLint ellenőrzés  |
| `npm run preview` | Build előnézet     |

## Projekt struktúra

```
src/
├── components/      # Újrafelhasználható komponensek
├── features/        # Oldalspecifikus komponensek
├── pages/           # Route oldalak
├── context/         # React context providers
├── utils/           # Segédfüggvények
└── layouts/         # Layout komponensek

templates/           # Eredeti HTML átirat (referencia)
├── pages/
│   ├── commercial/
│   ├── mining/
│   ├── research/
│   ├── battleships/
│   ├── spacecraft/
│   ├── aboutus/
│   └── carreers/
└── style.css
```

## API

Backend API: `https://ecore-backend-production.up.railway.app/api/`

Végpontok:

- `/api/spacecrafts` - Összes űrhajó
- `/api/spacecrafts/:id` - Egy űrhajó adatai
- `/api/spacecrafts/type/:type` - Típus szerinti űrhajók
- `/api/illustrations` - Képek

## Route-ok

| URL                   | Oldal            |
| --------------------- | ---------------- |
| `/`                   | Főoldal          |
| `/aboutus`            | Rólunk           |
| `/careers`            | Karrier          |
| `/category/:category` | Kategória        |
| `/spacecraft/:id`     | Űrhajó részletek |
| `*`                   | 404 Not Found    |

## Kategóriák

| Slug          | Név                   |
| ------------- | --------------------- |
| `commercial`  | Kereskedelmi járművek |
| `mining`      | Bányászati járművek   |
| `research`    | Kutatási járművek     |
| `battleships` | Harcászati járművek   |

## Licenc

© 2026 E-CORE Űrjárművek
