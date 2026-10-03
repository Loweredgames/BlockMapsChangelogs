_Finally the ~~third~~ (second) LTS of my map history is out. this LTS will be supported for a long time (2/3 years?!) and there will be continuous bug fixes. I remind you: that my map converts everything to the new versions just replace the datapack by removing the old one and update the `generated` folder with the resources pack._
_thanks and now to work with the 1.21/1.21.1 (yes I decided to update slowly)._

# Highlights:

- aggiunte nuove strutture nel mondo e nel mondo delle dimensioni
- aggiunti `Test Interni` nel datapack solo nelle versioni di sviluppo [#341](https://github.com/Loweredgames/Voidblock/pull/341)
- aggiornato alla 1.20.6 e aggiornato a 30 su 30 in tutti gli overlays nel datapack per rompere la compatibilità nelle versioni precedenti, per la LTS [#259](https://github.com/Loweredgames/Voidblock/pull/259)
- ripulito e aggiornato di nuovo il level.dat e il level.dat_old per la LTS [#302](https://github.com/Loweredgames/Voidblock/pull/302)

# Added

## _worlds and maps:_

- aggiunte nuove strutture nel mondo custom in giro,
- - `Ocean Ruins` Struttura aggiunta nel mondo custom [#183](https://github.com/Loweredgames/Voidblock/pull/183)
- aggiunte le varianti dei lupi in una struttura nel mondo delle dimensions [#278](https://github.com/Loweredgames/Voidblock/pull/278)
- - questa struttura verrà generata vicino al villaggio,

## _functions and datapack:_

- aggiunti `Test Interni` nel datapack solo nelle versioni di sviluppo [#341](https://github.com/Loweredgames/Voidblock/pull/341)
- - verrà mantenuta la versione delle dimensioni e funzionerà quando il mondo custom diventa incompatibile nelle nuove versioni snapshot di Minecraft,
- - ci sono informazioni per la sostituzione del level.dat,
- - - il branch delle versioni delle dimensioni non verrà toccato da questa modifica,
- aggiunta una nuova score `SkyblockCE_final`
- - sostituisce la score alla fine della generazione delle isole nel mondo delle dimensioni
- fatto piccolo refactoring della scoreboard `SkyblockCE_structures` che adesso è `SkyblockCE_test_structures` e anche della `SkyblockCE_skip_structures` che adesso è `SkyblockCE_custom_structures`
- le cartelle sono state cambiate dentro il datapack per una migliore lettura e gestione. tutto e compatibile con le versioni precedenti basta che rimuovi il datapack vecchio

## _custom structures world:_

- aggiunte le seguenti strutture nel mondo:
- - `Desert Well` aggiunto nel mondo custom [#320](https://github.com/Loweredgames/Voidblock/pull/320)
- - - in realtà è già stato aggiunto ma non si genera in maniera naturale perché gli serve una base per generare
- - `Ocean Ruins` Struttura aggiunta nel mondo custom [#183](https://github.com/Loweredgames/Voidblock/pull/183)
- - - aggiunte le alghe nella struttura `ocean_ruins` come oggetto rinnovabile nel mondo custom [#336](https://github.com/Loweredgames/Voidblock/pull/336)
- - - aggiunti i blocchi di corallo (tutti i colori possibili) nella struttura `Ocean Ruins` nel mondo custom. così sono rinnovabili [#335](https://github.com/Loweredgames/Voidblock/pull/335)
- - - raggiunti i pesci e i `Drowned` dentro la struttura `Ocean Ruins` [#261](https://github.com/Loweredgames/Voidblock/pull/261)
- - aggiunte le varianti dei lupi in una struttura nel mondo delle dimensions [#278](https://github.com/Loweredgames/Voidblock/pull/278)
- - - questa struttura verrà generata vicino al villaggio

# Changed

## _custom structures world:_

- aggiornato il mondo delle strutture alla 1.20.6 ([Armored Paws Update](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-20-5))
- convertito il libro `Lost Memories` in una mappa geografica e aggiornate le cartelle dentro il datapack
- - per aggiornare il mondo basta scaricare la nuova versione e spostare il file `map_1.dat` nella cartella data nel mondo.
- - - questa modifica non avrà nessun impatto nei mondi esistenti
- - aggiornato il mondo delle strutture per includere la mappa geografica dentro la chest

## _functions and datapack:_

- rimosso nel PID il messaggio del level.dat che deve essere cambiato nel mondo custom
- - questa migrazione si fa solo se si ha il mondo delle dimensioni
- - - vieni comunque avvisato quando si converte il mondo se sei nel mondo custom. nella prossima versione verrà rimosso
- aggiunto l'effetto di resistenza nella funzione `fix_custom_world`
- - così il giocatore non subisce nessun danno mentre si fa la migrazione del level.dat
- aggiunta la funzione `pid_remove`, come la funzione `pvn remove`, rimuovere tutti i `PID` più vecchi e obsoleti
- - il limite è 20 e poi si rimuove l'ultimo
- - - quindi non verrànno rimossi in maniera istantanea come i PVN
- bloccata la gamemode quando generano le strutture nella funzione
- spostati i SUBPID nella loro cartella e rimosso l'overlay con la cartella nel datapack
- - aggiunto un SUBPID così durante la conversione il giocatore non rimane bloccato in spettatore
piccoli miglioramenti nella sezione dei SUBPID. adesso è più pulito e ottimizzato

## _misc and other:_

- aggiornato alla 1.20.6 ([Armored Paws Update](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-20-5))
- - per la LTS manutenzione [#300](https://github.com/Loweredgames/Voidblock/pull/300)
- - - aggiornato a 30 su 30 in tutti gli overlays nel datapack per rompere la compatibilità nelle versioni precedenti [#259](https://github.com/Loweredgames/Voidblock/pull/259)
- - - tranne in dimensions
- ripulito e aggiornato di nuovo il level.dat e il level.dat_old [#302](https://github.com/Loweredgames/Voidblock/pull/302)
- - _non è obbligatorio aggiornare il level.dat_
- aggiunta la versione della mappa nel version_system (ad esempio:JE-1.20.6-5.3.0-Skyblock_Classic_Edition:PRE-RELEASE-1)
- - ci sarà questa modifica anche alle altre mappe
- miglioramenti vari

## _langs:_

- aggiornate e migliorate le traduzioni e correzioni varie nei file di traduzione

# Fixed

## _functions and datapack:_

- risolti un problema con il link del level.dat
- - non funzionava per il cambio delle cartelle (adesso è stato risolto)
- rimosso il `PID_Fix_LTS` se converti un mondo nella 1.20.2
- fix al formato interno nel pack
- risolto un problema quando sei in multiplayer: quando sei con tanti giocatori può accadere che alcuni giocatori sono sempre in spettatore quando si connettono nel server per la prima volta,
- - da adesso la gamemode è sempre bloccata in survival se sei in spettatore solo in multiplayer
- piccoli miglioramenti vari e piccole correzioni
- - ottimizzazioni varie

# Removed

## _functions and datapack:_

- rimosso il PSN
- - purtroppo non riesco più a mantenerlo e la sua features è diventata inutile e obsoleta, o deciso di rimuoverlo, anche la funzione in se
- - questa cosa non avrà nessun cambiamento nel datapack e i mondi esistenti possono essere ancora usati, anche quelli vecchi ma senza nessuna migrazione
- - - se si vuole usare la dimensions version ma si vuole trovare le nuove strutture, devi aggiornare il level.dat
- - - per le nuove strutture devi usare un nuovo mondo ho cancellare la score manualmente ogni volta
- - - - si consiglia di fare la migrazione

## _misc and other:_

- rimosso il file `65110991051011101163267105116121.png` nella cartella misc per la conversione alla mappa geografica e integrata nel mondo

**Full Changelog**: https://github.com/Loweredgames/Voidblock/compare/1.20.6_JE-2a...1.20.6_JE-4a

- [**Download**](https://github.com/Loweredgames/Voidblock/releases/download/1.20.6_JE-3a/Skyblock.Classic.Edition.zip)
- [**Download Dimensions Versions**](https://github.com/Loweredgames/Voidblock/releases/download/1.20.6_JE-3a/Skyblock.Classic.Edition.Dimensions.Version.zip)