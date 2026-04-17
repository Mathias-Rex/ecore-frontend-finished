# E-CORE Web - Technológiai Áttekintés

## Stack

| Réteg      | Technológia     | Verzió |
| ---------- | --------------- | ------ |
| Framework  | React           | 19.x   |
| Routing    | TanStack Router | 1.x    |
| Build      | Vite            | 8.x    |
| Linting    | ESLint          | 9.x    |
| Transpiler | Babel           | 7.x    |

## Architektúra

### Routing

- **TanStack Router v1** - File-based routing helyett kódból definiált route-ok
- Route-ok: `src/router.jsx`
- Catch-all `*` route a 404 kezeléshez
- `notFoundComponent` a root route-on

```jsx
createRouter({ routeTree })
├── / (Home)
├── /aboutus
├── /careers
├── /category/$category
├── /spacecraft/$id
└── * (NotFound)
```

### State Management

- **React Context** - Global state (képek)
- **Local State** - useState hook-ok
- Fetch state: `{ data, loading, error, notFound }`

### Data Fetching

- **Native fetch API** async/await szintaxissal
- useEffect-ben a komponens lifecycle-hoz kötve
- Error és 404 kezelés

```jsx
useEffect(() => {
  const fetchData = async () => {
    try {
      setLoading(true)
      const res = await fetch(url)
      if (!res.ok) throw new Error(...)
      const data = await res.json()
      setData(data)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }
  fetchData()
}, [deps])
```

### Képkezelés

- **Cloudinary** - Külső CDN optimalizált képekhez
- URL transformation a `getImage()` util-lal
- Lazy loading + spinner placeholder

```js
getImage(url, 400, 300);
// /upload/ → /upload/w_400,h_300,c_fill,q_auto,f_auto/
```

### Vizuális Effektek

- **Smoke.js** - Canvas-alapú füst animáció
- CDN-ről betöltve (`index.html`)
- React komponensbe ágyazva (`SmokeCanvas`)

### Stílusok

- **Vanilla CSS** - CSS változókkal
- BEM-like naming convention
- Single file: `src/index.css`
- CSS Grid + Flexbox layout

```css
:root {
  --color-primary: #ff9100;
  --spacing-medium: 2rem;
  --border-radius: 10px;
}
```

## Fejlesztési Eszközök

### ESLint

- React Hooks plugin
- React Refresh plugin
- No-unused-vars szabály (kivétel: `^/[A-Z_]/`)

### Vite

- HMR (Hot Module Replacement)
- Babel transpilation
- React Compiler támogatás

## Fájl Struktúra

```
src/
├── components/          # Általános komponensek
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   ├── ProductCard.jsx
│   ├── SmokeCanvas.jsx
│   └── BackButton.jsx
├── features/            # Domain-specifikus komponensek
│   ├── ProductList.jsx
│   ├── JobList.jsx
│   ├── ShipHeader.jsx
│   └── useJobs.js
├── pages/               # Route komponensek
│   ├── Home/
│   ├── About/
│   ├── Careers/
│   ├── Category/
│   ├── Spacecraft/
│   └── NotFound/
├── context/             # React Context
│   └── IllustrationContext.jsx
├── utils/               # Helper függvények
│   └── getImage.js
├── layouts/             # Layout wrapper-ek
│   └── MainLayout.jsx
├── config.js            # Konfiguráció (API URL)
├── router.jsx          # Route definíciók
├── main.jsx            # App bootstrap
└── index.css           # Globális stílusok
```

## Code Quality

1. **Consistent imports** - Relative path-ek, `../../` pattern
2. **No unused variables** - ESLint enforced
3. **Async/await** - Fetch hívásoknál kötelező
4. **Error boundaries** - fetch error + notFound state
5. **Loading states** - Spinner UI minden async művelethez
