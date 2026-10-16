# svenskakulturkanon.se

Statisk webbplats för boken *Svenska Kulturkanon – 100 verk som skapade Sverige* (Kaffeförlaget AB). Publiceras med Vercel från `main`.

## Struktur

```
index.html            Hela sajten (startsida, om boken, verken, veckans verk, quiz, beställ, företag, press, kontakt)
data/kanon.js         All data: avsnitt och verk, quizfrågor, veckans verk per vecka
images/               Omslag, marmorpapper och uppslag ur boken
images/verk/<nr>.jpg  Bildsidan för varje verk (1080 × 1350), t.ex. 37.jpg, 10-5.jpg
vercel.json           QR-omdirigeringar /qr/<nr> och cache för bilder
qr-adresser.csv       Alla 109 QR-adresser till Agneta, med kolumn för mål
instagram/            Mall och färdiga inlägg för Instagram
```

## Veckans verk och Instagram

Lägg till en vecka i `VECKOR` i `data/kanon.js`:

```js
{ "vecka": 47, "ar": 2026, "nr": "6", "hook": "Frihet utan tillstånd.",
  "credit": "Astrid Lindgren, cirka 1960. Foto: okänd. Public domain.",
  "quiz": ["Elsa Beskows", "Barnets århundrade"], "bokSida": 26, "ingress": "…",
  "person": { "namn": "Astrid Lindgren", "levde": "1907–2002", "roll": "Författare", "text": "…" } }
```

`quiz` är sökord som matchar två frågor i `QUIZ`. Sajten visar automatiskt den vecka som gäller.

Skapa Instagram-bilderna:

```
npm i playwright
npx playwright install chromium
node instagram/render.mjs 47
```

Resultat i `instagram/vecka-47/`: en karusell för Veckans verk (3 bilder), två quizkaruseller (fråga + svar), en karusell Personen bakom verket (2 bilder) och `texter.md` med bildtexter och hashtags. Publicering: veckans verk måndag, quiz onsdag, personen fredag, quiz lördag. Lägg gärna ett porträtt i `images/personer/<nr>.jpg` – då kommer det med på personkortet.

## QR-koder

Boken pekar på `svenskakulturkanon.se/qr/<nr>` (t.ex. `/qr/37`, `/qr/10-5`). Ändra målet i `vercel.json`. Omdirigeringarna är tillfälliga (`permanent: false`) så att målen kan bytas utan att webbläsare cachar dem.

## Bildrättigheter

Bilderna kommer ur boken. Krediter finns i bokens bildregister. Kontrollera rättigheterna innan en bild används på Instagram. Public domain och CC-licenser kräver att krediten anges, vilket mallen gör i bildtexten. Bilder med "Courtesy" eller namngiven fotograf utan licens (t.ex. nr 17 Hilma af Klint och nr 29 Jazz på svenska) kräver särskilt tillstånd för sociala medier.
