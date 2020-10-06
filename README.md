# MM-200 Oppgaver [Uke 40, 44]

## VIKTIG! Hvordan gjøre oppgaver.
Onsdag oppgavene skal leveres som PR (pull request) på github (https://github.com/mm-200/assignment).   
Totalt skal du ha 1 PR. På canvas leverer du linken til din PR.   
Modul 3 oppgaven krever at du oppretter eget repo på github, På canvas levere du link til det repoet. 

For alle oppgavene skal Express.js brukes til å skrive serveren.   
Utover det er det tillat å bruke body-parser.js, men ingen andre tredjeparts bibliotek.  

Set port for server ved å bruke <code>process.env.PORT || 8080</code>   
Det er ikke eksplesitt utledet i alle oppgaver, men det er forventet at serveren gjør meningsfylt feilhåndtering.
Å ikke ha feilhåndtering er det samme som ikke å ha fulført oppgaven!   
Det er også forventet at du har et web bruker grensesnitt for å kunne teste server implementasjonen din.    
**Server fil skal ALTID hete server.js**    
**Oppgaver skal altid ligge i sin egen separate mappe under din student mappe**   
**Følg beskrivelsen av oppgaven nøye, Kommer til å bruke delvis automatiske verktøy til å godkjenne oppgaver.**

## Gjør alle disse oppgavene (Innen onsdag).

Anslått arbeidstid 0.5 til 1 time. 

### Dagens tekniske utrykk.  

I resurs mappen finnes filen ord.csv. Du skal lage en servertjeneste som returnerer dagens ord og forklaring dersom en dato ikke er angitt. Dersom datoen er angitt skal ordet for den dagen returneres. En gitt dato skal alltid returnere samme ord og forklaring. Ord skal ikke velges i den rekke følgen de ligger i filen (med andre ord 1.Januar skal ikke gi ordet "abort" påfølgt av "access" for 2.januar osv.)

Lag en enkel html side som benytter seg av server api’et du akkurat har laget, til å vise ord og forklaring for dagens dato. 

API
```http
GET /api/wordOfTheDay/{dato} 
```
Server respons
```javascript
{
  "word" : string,
  "description" : string,
}
```

## Gjør 2 av disse oppgavene (Innen onsdag)

Anslått areidstid ca 3 timer.

### Svada teks generator.  

Lag en server tjeneste som retunerer det ønskede antall avsnitt med tilfeldig tekst.   
Dersom antall ikke er angit, retuner tre avsnitt.   
Server skal generer den tilfeldige teksten ved bruk av en modul (med andre ord, lag en modul for dette)  

API
```http
GET /api/randomText/{paragraphs}
```
Server respons
```javascript
{
  paragraphs:[String,String,... ]
}
```

### Nedtelling  
Bruker skal kunne angi timer, minutter og sekunder (t,m,s) som skall telles ned. Samt beskjeden som skal gis når nedtellingen er ferdig (msg).   
I web siden **nedtelling.html** skal man kunne angi en timerId og få se status på den timeren. Dersom timeren ikke er ferdig så skal **nedtelling.html** fortsette å oppdatere seg til tiden har utløpt. **Enhet for tid er hele sekunder**. Serveren skal håndtere nedtellings regnskapet i en egen modul. 

API
```http
POST /api/timer/start body:{"time":Int, "message":String}
GET /api/timer/{timerId}

```
Server respons
```javascript
// POST /start
{  "timerId":String }
// GET /timer/{timerId} (timer not complete)
{ "remainingTime":Number}
// GET /timer/{timerId} (timer not complete)
{ "remainingTime":Number, "message":String}
```

### Mynt eller kron?   
Et verktøy for å slå mynt eller kron uten en mynt. Deltakerene deler en adgangskode og velger mynt eller kron. 
Når deltaker har valgt avgjør server utfallet.

API
```http
GET /api/coinflip/ 
POST /api/coinflip/choose/ body:{"flipId":String, "choice":Bool}
GET /api/coinflip/{flipId}
```

Server respons
```javascript
// GET /api/coinflip/ 
{  "flipId":String }
// POST /api/coinflip/choose/
{ "flipId":String, "choice":Bool }
// GET /api/coinflip/{flipId}
{ "res":Bool }
```

### Tre på rad
Lag et 3 på rad spill, hvor serveren er motspilleren.   
Du bestemer hvordan api skal se ut.   
NB! Serveren skal kunne håndtere å spille mot flere samtidig så det må du ta høyde for i api'et du lager.

# Modul 3 Oppgaver (til uke 44)

Velg en av disse oppgavene. Antatt arbeidstid er en plass mellom 5 og 15 timer. 

## Hangman

Du skal lage multispiller Hangman spill.   
Man skal fra en web side kunne starte et nytt spill eller delta i et eksisterende spill.   
Spillere skal i fra sin egen maskin kunne ta sin tur.   
Spiller hvem sin tur det ikke er, skal ikke kunne gjøre valg, men se hvordan spillet går.    
Server skal skrives ved å bruke Express.js   
Server skal velge ord fra en liste med trygge ord (som du lager).   
Status for et pågående spill skal lagres i en Postgress sql database.   
Spille skal hostes på Heroku.   
   
Tilatte npm pakker er Express, body-parser og pg
   
https://en.wikipedia.org/wiki/Hangman_(game) 

## FlashCards

Du skal lage et verktøy for «FlashCards».   
Bruker skal kunne lage og endre (kun sine) samlinger med FlashCards fra en web side.    
Andre brukere skal kunne «bruke» en samling via en URL som unikt identifiserer en samling med kort.    
Server skal skrives ved å bruke Express.js   
Kort samlingen skal lagres i en Postgress sql database.   
Verktøy skal hostes på Heroku.   
   
https://en.wikipedia.org/wiki/Flashcard   
   
Tilatte npm pakker er Express, body-parser og pg
