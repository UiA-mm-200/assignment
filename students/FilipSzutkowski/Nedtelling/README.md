# Nedtelling applikasjon
Tar inn timer, minutter og sekunder som argumenter og teller tiden ned fra de. 

## Info
---
Kjør med `node index.js` med noen/alle disse *flaggene*:
 * Bruk `--h a` hvor *a* er antall timer.
 * Bruk `--m a` hvor *a* er antall minutter.
 * Bruk `--s a` hvor *a* er antall sekunder.
 * Bruk `--msg m` hvor *m* er meldingen du vil vise på slutten av nedtellinga.

Applikasjonen viser en standard melding om man ikke spesifiserer meldingen som skal vises på slutten av nedtellingen. 
Den runder av talla opp til det høyeste tallet om man bruker et desimal tall. 
Om man skriver inn noe annet enn ett nummer inn i *flaggene* med tid, vil det verdien av flagget bli *0*.
