# Sousa Management — Makelaardij Academy

Offline-first webapp voor de iPhone: een crash course makelaardij (aankoop, verkoop, verhuur — regio Den Bosch) die in drie uur te doorlopen is, met toetsen per blok, jargon-uitleg en oefengesprekken.

**Live:** https://rickstoops.github.io/sousa-academy/

## Installeren op iPhone

1. Open de live-link in **Safari** (niet Chrome).
2. Tik op Delen → **Zet op beginscherm** → Voeg toe.
3. Open de app één keer vanaf het beginscherm met verbinding. Daarna werkt hij ook in vliegtuigmodus.

Waarom niet direct uit de Bestanden-app? iOS opent een HTML-bestand daar alleen in een voorvertoning zonder JavaScript, en Safari kan geen lokale bestanden openen. Hosting is dus de enige route naar een werkende beginscherm-app.

## Voortgang

Voortgang (gehaalde toetsen, zelfevaluatie) wordt op het toestel bewaard. iOS kan die opslag wissen als de app een week of langer niet wordt geopend — gebruik daarom af en toe **Voortgang opslaan** (onderaan Blok 08) en **Voortgang terugzetten**.

## Bestanden

| Bestand | Functie |
|---|---|
| `index.html` | De complete academy, inclusief ingebedde lettertypes (één bestand, ±720 KB) |
| `sw.js` | Service worker: slaat de app op voor offline gebruik |
| `manifest.json` | Web-app-manifest (naam, icoon, standalone-weergave) |
| `icon.svg` | Beginscherm-icoon |

## Bijwerken

Vervang `index.html` en verhoog in `sw.js` het versienummer (`sousa-academy-v3` → `v4`). Bij het eerstvolgende online bezoek haalt de app de nieuwe versie op.

## Peildatum cijfers

Markt- en wetscijfers (huurgrenzen, NHG, startersvrijstelling, Bossche koopmarkt) zijn van oktober 2026. Huur- en fiscale grenzen worden per 1 januari geïndexeerd — herijk Blok 02 dan.
