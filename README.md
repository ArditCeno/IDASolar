# IDA Solar — Website

Sito web di IDA Solar: sistemi fotovoltaici, inverter e sistemi di accumulo.

## Stack

- **Frontend:** React + TypeScript (Vite), wouter (routing), Tailwind + CSS custom.
- **Server:** Node.js + Express (serve static build in produzione).
- **i18n:** italiano (default), English, Español, Français, Deutsch, Shqip.

## Struttura

```
client/            # app React
  src/
    components/    # layout, UI, componenti condivisi
    pages/         # Home, Moduli, Inverter, Accumulo, App, Calcolatore, Progetti, Contatti
    i18n/          # dizionario + contesto lingua
  public/images/   # immagini del sito
server/            # server Express
shared/            # costanti condivise
```

## Sviluppo

```bash
pnpm install
pnpm dev      # avvia il server di sviluppo
```

## Build e produzione

```bash
pnpm check    # typecheck
pnpm build    # build di produzione
pnpm start    # avvia la build
```

## Contatti

- Email: info@idasolar.it
- Telefono: +39 346 353 0429
- Sede: Via Milano, 8 — 20816 Ceriano Laghetto (MB), Italia
