# Typingtrainer
Viser en av tre tekstene av et valgfri nivå, brukeren skal skrive inn den teksten og få tilbake antall ord skrevet feil, tiden han brukte på å skrive teksten, liste med ordene som var feil, antall ord i minuttet og nøyaktigheten hans i et prosenttall. Programmet genererer en rapport fil til slutt. 

## Bruk
- Kjør med `node index.js`.
- Spesifiser nivå av teksten
- Skriv inn teksten som kommer opp så fort som mulig

## Info
- Om ingen vansklighetsnivå spesifisert vil programmet automatisk kjøre med den *lette* teksten.

### TextWorker.js
Denne modulen inneholder sammenligningsfunksjonen av input teksten, og teksten fra fila i tillegg til funksjonen som regner ut statistikker om teksten til brukeren (ord per minutt, nøyaktighet osv.). 

### Tekst statistikker
Kilden til modellene for å regne ut ord i minuttet og nøyaktighet: [TypingEquations](https://www.speedtypingonline.com/typing-equations).
---
![Equation](https://www.speedtypingonline.com/images/Net_WPM.png)
