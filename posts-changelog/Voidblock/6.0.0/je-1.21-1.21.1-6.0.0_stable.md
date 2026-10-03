_Finally my Skyblock CE version 1.21 is complete. now I can start the various porting of the versions up to 1.21.5. I hope that along the way there are no problems._
_ps: I noticed that the End has no problems even if I did a quick test. maybe I create an experimental setting for those who want to have End?_
_as always thank you very much._

# Highlights:

- aggiunte le `Trial Chamber` nel mondo [#232](https://github.com/Loweredgames/Voidblock/issues/232)
- rimosse molte score vecchie nella 1.21/1.21.1 [#347](https://github.com/Loweredgames/Voidblock/issues/347)
- aggiunta la **Portable Version**, una versione portatile e aggiornati i link
- aggiunto un sistema Import per i mondi che non hanno la Skyblock Classic Edition ma vogliono migrare alla mappa Skyblock CE [#365](https://github.com/Loweredgames/Voidblock/issues/365)
- le strutture e le isole nella cartella `generated` sono stati migrati nella cartella worldgen [#362](https://github.com/Loweredgames/Voidblock/issues/362)
- - la cartella `generated` è stata rimossa e adesso serve solo il datapack e il resources pack

# Added

## _functions and datapack:_

- raggiunta la score che rimuove gli avanzamenti nel mondo custom quando si avvia la Skyblock per la prima volta
- cambiato il messaggio nel popup dei test [#363](https://github.com/Loweredgames/Voidblock/issues/363)
- aggiunto un nuovo overlay per i cambiamenti delle future versioni di Minecraft
- - se dovese cambiare tra gli aggiornamenti, verrà aggiunto uno nuovo con la modifica necessaria.
- - - _per il momento non fa nulla_.
- aggiunto un sistema Import per i mondi che non hanno la Skyblock Classic Edition ma vogliono migrare alla mappa Skyblock CE [#365](https://github.com/Loweredgames/Voidblock/issues/365)
- - basta che clicchi all'inizio import e il mondo viene generato senza niente (sostituisci il level.dat se non vengono generate le strutture)
- - - **_DA USARE CON ATTENZIONE, LA FUNZIONE NON FA GENERARE NESSUNA ISOLA, RENDENDO IMPOSSIBILE LA MAPPA IN SE_**.
- - si può anche decidere di cancellare il datapack se si vuole ritornare in maniera precedente, senza nessun problema.
- aggiunti suoni diversi di avviso nella conversione e in altri messaggi del sistema nelle varie funzioni del datapack [#245](https://github.com/Loweredgames/Voidblock/issues/245)
- - aggiornata la funzione `Import` con il blocco sonoro `bit`
- - - per il `legacy_pid` viene usato il `bell`
- - - per il `PID` e il `SUBPID` viene usato `chime`. nel SUBPID il pitch è a 1 invece che a 2
- - - per le strutture nei test invece viene usato il blocco di ametista

## _worlds and maps:_

- aggiunte le `Trial Chamber` nel mondo [#232](https://github.com/Loweredgames/Voidblock/issues/232)
- - adesso si possono rinnovare la maggior parte degli oggetti e blocchi della 1.21

## _misc and other:_

- miglioranti vari
- - riunificata la versione portable alla versione principale:
- - - questo non avrà alcun effetto tranne la numerazione che sarà la stessa della versione principale
- - - - e stato fatto per risparmiare tempo nel rilascio delle versioni e per una facilita generale.
- aggiornato alla 1.21/1.21.1 ([Tricky Trials](https://www.minecraft.net/en-us/article/tricky-trials-update-official-release-date))
- - aggiornato a 48 in tutti gli overlays nel datapack
- aggiunta la Portable Version (nella 1.20.X e nella 1.21.X)
- - una versione che usa solo il datapack e che può essere portata dappertutto
- aggiunto il link di Modright della versione portable e normale e altri link dentro il datapack [#366](https://github.com/Loweredgames/Voidblock/issues/366)
- - aggiunti altri link per le versioni portable
- - aggiunti i link mancanti

## _custom structures:_

- aggiornato il mondo alla 1.21.1
- piccoli miglioranti vari

# Changed

## _functions and datapack:_

- riordinato il popup UI all'inizio quando si prendono le decisioni delle isole
- - anche nel mondo dei test
- - - la versione separata del mondo dei test è stata rimossa e non più supportata

## _langs:_

- aggiornate le traduzioni
- - aggiunte stringe per:
- - - il sistema import,
- - - il messaggio della versione test,
- - - la fine messaggio del ciclo LTS (solo LTS),
- - e aggiunte nuove lingue per la 1.21,
- miglioramenti vari e correzioni

## _custom structures:_

- le strutture e le isole nella cartella `generated` sono stati migrati nella cartella worldgen [#362](https://github.com/Loweredgames/Voidblock/issues/362)
- - le strutture del mondo delle dimensioni/test adesso usano una loro cartella chiamata `structures_test`
- - - riordina le isole e le strutture in una cartella separata
- - - non è più necessario avere la cartella `generated` nella cartella del mondo principale. basta avere solo il datapack dentro, così non c'è più confusione.
- - la cartella `generated` è stata rimossa e adesso serve solo il datapack e il resources pack, nel mondo della Skyblock CE.
- spostata l'isola fungo nella sezione isole nel mondo delle strutture

## _Fixed_

## _langs:_

- sono state rimosse le stringe non più usate:
- - `skyblock_classic_edition.skyblock_setup.legacy_version` e `skyblock_classic_edition.skyblock_setup.legacy_version.info`

## _custom structures:_

- le Elitra non fanno parte del mondo custom e non possono essere rinnovate in maniera naturale. [#358](https://github.com/Loweredgames/Voidblock/issues/358)
- - questo problema è stato risolto. da adesso si può trovare una chest in una strongold che contiene le elitra e i template dell'End in maniera `naturale` fino ha quando non viene risolto L'End.

# Removed

## _functions and datapack:_

- rimosse molte score vecchie nella 1.21/1.21.1 [#347](https://github.com/Loweredgames/Voidblock/issues/347)
- - la score versione legacy è diventata obbligatoria [#202](https://github.com/Loweredgames/Voidblock/issues/202)
- - rimosso tutto in `legacy` funzione (#242)
- - - per alcuni cambiamenti interni è stata rimossa la score `PID_legacy` per la 1.21.X e sostituita da altre score che fanno lo stesso lavoro

## custom structures:

- non è più necessario avere la cartella `generated` nella cartella del mondo principale
- - quindi è stata rinominata da rimuovere. verrà rimosso nella 1.22

**Full Changelog**: https://github.com/Loweredgames/Voidblock/compare/1.21_JE-0a...1.21_JE-4a

[Download](https://github.com/Loweredgames/Voidblock/releases/download/1.21_JE-4a/Skyblock.Classic.Edition.zip)