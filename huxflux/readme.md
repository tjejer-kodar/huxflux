# Svenska Spel: Huxflux

## Bygg en huxflux-funktion

Huxflux är en funktion för nummerspel som t.ex. Lotto  använder för att välja ut nummer baserat på slump istället för att välja för hand.

Funktionen ska skapa en lista med sju heltal mellan 1 och 35. Listan får inte innehålla dubletter av samma nummer.

**Vilken svårighetsgrad har utmaningen?**
<span style="font-style:italic;font-weight:600;color:rgb(15,123,108)">Nybörjare</span>
<span style="font-style:italic;font-weight:600;color:rgb(217,115,13)">👉Junior</span>
<span style="font-style:italic;font-weight:600;color:rgb(224,62,62)">Avancerad</span>

**Vilket språk har utmaningen?** Javascript

### Vad behövs för att delta i utmaningen?

Kunskap om grunder inom JavaScript.

Du behöver en kodeditor, vi rekommenderar Visual Studio Code som är helt gratis att använda och ladda ned.
Du behöver Node och npm installerat för att kunna starta en lokal utvecklings-server som kan servera filerna till webbläsaren och hantera beroendena till projektet.

### För att starta projektet

- Öppna en terminal och se till att du är i mappen Huxflux. Du kan använda kommandot `cd` om du behöver förflytta dig bland mappar.
- Installera beroenden genom att skriva `npm install`
- Starta utvecklings-servern genom att skriva `npm start`
- Om inte webbläsaren öppnar ett fönster till sidan så navigera i webbläsaren till `localhost:3000`
- Ändra och spara ändringar i filen `huxflux.js` så kommer webbläsaren uppdateras automatiskt

## 2. Tips & trix för kodutmaningen

- Använd test-knappen på sidan för att se att din funktion följer alla kraven.
- Fundera kring vilka sätt du skulle kunna slumpa fram heltal på. En bra början kan vara att bekanta sig med metoderna på [Array-klassen](https://www.w3schools.com/jsref/jsref_obj_array.asp) och [Math-objektet](https://www.w3schools.com/js/js_math.asp), speciellt dess [random-funktion](https://www.w3schools.com/js/js_random.asp)
- Att använda hjälpbibliotek så som lodash och underscore är inte tillåtet.
  
## 3. Inspiration

- Video?
- Intervju?
- Annat?

### 💥 Bonus
 - Prova att göra en funktion som går att styra hur många nummer samt max och min tal t.ex. 5 tal mellan 3-103
 - Prova att göra en funktion som slumpar på samma sätt men returnera talen i stigande ordning
 - Prova att göra en funktion vars innehåll inom kroppen är mindre än 100 tecken 