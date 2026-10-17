# svenskakulturkanon.se

Statisk webbplats för boken *Svenska Kulturkanon – 100+ verk som skapade Sverige* (Kaffeförlaget AB). Publiceras med Vercel från `main`.

## Struktur

```
index.html            Startsidan och mallen för alla sidor
*.html                Egna sidor, byggda med build.mjs (se nedan)
build.mjs             Bygger sidorna, sitemap och QR-regler
kanon.js              All data: avsnitt och verk, kapitelinledningar och verkbeskrivningar ur boken, quizfrågor, veckans verk
images/               Omslag, marmorpapper och uppslag ur boken
images/verk/<nr>.jpg  Bildsidan för varje verk (1080 × 1350), t.ex. 37.jpg, 10-5.jpg
vercel.json           QR-omdirigeringar /qr/<nr> och cache för bilder
qr-adresser.csv       Alla 109 QR-adresser till Agneta, med kolumn för mål
instagram/            Mall och färdiga inlägg för Instagram
```

## Veckans verk och Instagram

Lägg till en vecka i `VECKOR` i `kanon.js`:

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

## Sidor och adresser

Alla sidor och nya filer ligger direkt i roten (inga nya undermappar): miljöbilder `miljo-*.jpg/.webp`, fonter `font-*.woff2` (egna, inga Google Fonts), extra uppslag `uppslag-*.jpg`, `saljblad.html` och `saljblad.pdf` (säljbladet för företag – ändra i html-filen och skriv ut till PDF).

Nyhetsbrevet "Bevaka utgivningen" skickar tills vidare ett mejl till info@. Koppla en tjänst genom att sätta `LIST_ENDPOINT` i index.html.

Varje sida är en egen HTML-fil med egen titel, beskrivning, delningsbild-text och kanonisk adress. Innehållet finns i filen, så sidorna fungerar även utan JavaScript och kan indexeras av Google.

```
index.html                    /                     Startsida
om-boken.html                 /om-boken
verken.html                   /verken               Alla elva avsnitt
verken-<avsnitt>.html         /verken-musik         Kapitelinledning och alla verk i avsnittet
veckans-verk.html             /veckans-verk
quiz.html                     /quiz
bestall.html                  /bestall
foretagsgava.html             /foretagsgava
press.html, kontakt.html, rattelser.html, kopvillkor.html, integritet.html
404.html                      visas för adresser som inte finns
sitemap.xml, robots.txt       för sökmotorer
```

`/verk/<nr>` och `/qr/<nr>` visar avsnittssidan med verket markerat (reglerna ligger under `rewrites` i `vercel.json`). Gamla länkar med # (t.ex. `/#om`) skickas vidare till den nya adressen.

### Så ändrar du en sida

`index.html` är mallen för alla sidor och `kanon.js` innehåller allt innehåll om verken. Ändra där och kör sedan

```
node build.mjs
```

Skriptet skriver om alla sidfiler, `sitemap.xml` och QR-reglerna i `vercel.json`. Ladda sedan upp alla ändrade filer. Ändra inte i `om-boken.html`, `verken-musik.html` osv. direkt – de skrivs över nästa gång skriptet körs. Sidtitlar och beskrivningar för sökmotorer ändras i listan `pages` överst i `build.mjs`.

## QR-koder

Boken pekar på `svenskakulturkanon.se/qr/<nr>` (t.ex. `/qr/37`, `/qr/10-5`). De flesta visar avsnittet i boken med verket markerat. Fem dikter (10.6–10.10) skickas vidare till egna diktsidor eller Nobelprisets sida – se `redirects` i `vercel.json`. Omdirigeringarna är tillfälliga (`permanent: false`) så att målen kan bytas.

## Statistik

`index.html` laddar Vercel Web Analytics. Slå på det i Vercel: projektet → Analytics → Enable. Varje sida blir en egen rad i statistiken, så `/qr/37` visar hur många som skannat koden för Det sjunde inseglet.

## Bildrättigheter

Bilderna kommer ur boken. Krediter finns i bokens bildregister. Kontrollera rättigheterna innan en bild används på Instagram. Public domain och CC-licenser kräver att krediten anges, vilket mallen gör i bildtexten. Bilder med "Courtesy" eller namngiven fotograf utan licens (t.ex. nr 17 Hilma af Klint och nr 29 Jazz på svenska) kräver särskilt tillstånd för sociala medier.
