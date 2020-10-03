# MM-200 Oppgaver [Uke 40, 44]

## VIKTIG! Hvordan levere oppgaver.
Alle oppgavene skal leveres som PR (pull request) på github (https://github.com/mm-200/assignment).   
Totalt skal du ha 2 PR, en til onsdagens innlevering og en for modulen (vi er i modul 3 på canvas)   
På canvas leverer du linken til din PR.

For alle oppgavene skal Express.js brukes til å skrive serveren.   
Utover det er det tillat å bruke body-parser.js, men ingen andre tredjeparts bibliotek.  

Sett port for server ved å bruke <code>process.env.PORT || 8080</code>   
**Følg beskrivelsen av oppgaven nøye, Kommer til å bruke delvis automatiske verktøy til å godkjenne oppgaver.**

## Gjør alle disse oppgavene (Innen onsdag).

Anslått arbeidstid 0.5 til 1 time. 

### 🔲 Dagens tekniske utrykk.  

I resurs mappen finnes filen ord.csv. Du skal lage en servertjeneste som returnerer dagens ord og forklaring dersom en dato ikke er angitt. Dersom datoen er angitt skal ordet for den dagen returneres. En gitt dato skal alltid returnere samme ord og forklaring. Ord skal ikke velges i den rekke følgen de ligger i filen (med andre ord 1.Januar skal ikke gi ordet "abort" påfølgt av "access" for 2.januar osv.)

Lag en enkel html side som benytter seg av server api’et du akkurat har laget til å vise ord og forklaring for dagens dato. 

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

Brukeren skal angi antall avsnitt som skal genereres via eb web client av server via api endepunkt GET:/randomText/:paragraphs
Server skal generer den tilfeldige teksten ved bruk av en modul (med andre ord, lag en modul for dette)

- [ ] Nedtelling  
Bruker skal kunne angi timer, minutter og sekunder (t,m,s) som skall telles ned. Samt beskjeden som skal gis når nedtellingen er ferdig (msg)

- [ ] Mynt eller kron?   
Et verktøy for å slå mynt eller kron uten en mynt. Deltakerene deler en adgangskode og velger mynt eller kron. 
Når deltaker har valgt avgjør server utfallet.
Server skal ha følgende endepunkter:   
GET:/start -> Retunerer en start kode som
POST:/valg/:startKode/:myntEllerKron -> myntEllerKron = 0 betyr at man har valgt mynt. myntEllerKron = 2 betyr at man har valgt kron. Dersom valget er tatt blir man tildelt det ledige 
GET:/utfall/:startKode -> Gir utfallet av myntkastet dersom begge deltakere har valgt. 


# Gjør 3 av disse oppgavene (frem til innlevering uke 40)

- [ ] Skrive trener.  
Lag et programm som viser brukeren en tekst som skal skrives inn. Beregn tiden brukeren tar for å skrive inn hele teksten riktig.
Gi tilbakemelding når brukeren skriver feil. Gi en oppsummering på slutten av antall trykk per sekund, antall feil osv. Ha varierende 
norske tekster med ulik vanskilghets grad. Lagre rapport dataen til fil. 

- [ ] Tekst statestikk ++  
Brukeren skal kunne angi en tekst fil. Scan filen, bereng ord frekvenser, LIX index og Gunning fog index.  
Generer en rapport basert på det du har beregnet, inkulder annslått lesenivå leseren må ha for å kunne lese teksten. 
Dersom bruker har angit en output fil, skriv raporten til den filen.  

- [ ] Nedtelling ++
Bruker skal kunne angi flere timer, minutter og sekunder (t,m,s) som skall telles ned. Samt beskjeden som skal gis når nedtellingen er ferdig (msg)
Programmet skal ikke blokere terminalen når nedtelling er startet. 
Programmet skal kunne startes med en fil med nedtellinger og beskejder (en per linje, formatet t,m,s msg)
Porgrammet skal kunne avsluttes med kommandoen stop.

- [ ] Tre på rad spill.  
Brukeren skal kunne velge X eller O.  
Spillet skal støtte 1P og 2P Hotseat.  
Spillet skal ha en "high score liste" 

- [ ] Snake  
**Gjør du denne oppgaven så trenger du bare å gjøre en annen oppgave**  
Implimenter spillet snake for spilling i konsoll. Må ha pickups og vegger etc.
