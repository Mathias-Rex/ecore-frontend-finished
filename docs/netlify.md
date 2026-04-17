# Netlify Deploy

## URL

https://e-core-react-fe-finished.netlify.app/

## Beállítások

1. **Environment Variables** a Netlify oldalon:
   - `VITE_API_URL` = https://ecore-backend-production.up.railway.app
   - `VITE_API_KEY` = titkos-api-kulcs-amit-csak-a-viktortud-1

2. **SPA redirect**: `public/_redirects` fájl szükséges ( már létezve )

## Build

```bash
npm run build
```

A build output a `dist/` mappába kerül, ezt kell Netlify-ra feltölteni.

## CORS beállítás

A backendnek (Railway) engedélyeznie kell a Netlify domain-t. Állítsd be a Railway environment variable-ban:

```
CORS_ORIGIN=https://e-core-react-fe-finished.netlify.app,http://localhost:5173
```
