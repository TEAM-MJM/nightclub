# Night Club

Eksamensopgave ud fra givent design, udviklet i Next.js med Tailwind CSS og en lokal API-struktur. Projektet er opbygget efter en modulær mappe- og komponentstruktur, og udviklingsprocessen har fulgt en iterativ tilgang med Gitflow som versionsstyringsmetode.

Dette er en eksamens opgave på Frontend valgfaget.

Eksamens opgaven er udarbejdet af Mads Buchhave, Jonathan Skadhauge og Marius Jacob Engelbredt.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Teknologier

Projektet er udviklet med følgende teknologier og værktøjer:

Next.js (App Router)

React

Tailwind CSS

Node.js

Lokal API / API routes i Next.js

Git & Gitflow

Supplerende libs: form-håndtering, media player, database, auth, e.l.

## Installation og opsætning

Installation:

``
npm install
`` 

Start developer server (localhost:3000)

``
npm run dev
``

## Projektstruktur

Projektets struktur er organiseret efter sektioner, hvor hver sektion indeholder egne komponenter, scripts og logik. Dette understøtter høj modularitet og gør projektet lettere at vedligeholde.

Projektstruktur:

/src
  /public
  /app
    layout.tsx
    globals.css
    page.tsx
    /blog
      page.tsx
        /[slug]
          page.tsx
    /book-table
      page.tsx
    /contact-us
      page.tsx
    /api
      /blog
        route.ts
      /book-table
        route.ts
      /contact
        route.ts

  /components
    Navbar.tsx
    Footer.tsx
    Button.tsx
    Input.tsx

  /sections
    /section
      component.tsx
      script.ts

## Udviklingsproces

### Gitflow

Projektet er udviklet med Gitflow-modellen, hvilket betyder:

main: produktionsklar kode

feature-branches: én branch pr. funktion, komponent eller sektion

Fordele ved denne udviklingsproces:

Nem paralleludvikling

Klar separation mellem færdige features og ufærdige ændringer

Minimal risiko for konflikter i funktionaliteter.

### Iterativ udvikling

Arbejdet er udført i iterationer, typisk bestående af:

- Krav og afklaring

- Design og planlægning

- Implementering

- Test

- Evaluering og næste iteration

Dette har gjort det muligt løbende at tilpasse projektet baseret på funktionelle behov og teknisk læring.

## API Struktur

## Funktionalitet



  
