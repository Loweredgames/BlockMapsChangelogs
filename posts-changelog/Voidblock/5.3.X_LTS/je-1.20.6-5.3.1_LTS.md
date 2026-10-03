# JE-1.20.6-5.3.X-Skyblock_Classic_Edition:5.3.1_LTS

_Finally here is the first fix of this LTS. to see the whole list of bugs and backporting click here: [List LTS](https://github.com/Loweredgames/Voidblock/issues/294)._

![Aggiornamento di Manutenzione](images/posts/Voidblock/5.3.X_LTS/je-1.20.6-5.3.X_LTS.png)

# Changed

## _misc and other:_

- disabilitato il PID per LTS [#344](https://github.com/Loweredgames/Voidblock/issues/344) - [#300](https://github.com/Loweredgames/Voidblock/issues/300)
- - verrà sempre disabilitato per tutte le LTS
- aggiornate le traduzioni

# Backport

## _functions and datapack:_

- riordinato il popup UI all'inizio quando si prendono le decisioni delle isole
- - anche nel test per [#365](https://github.com/Loweredgames/Voidblock/issues/356)
- cambiato il messaggio nel popup dei test [#363](https://github.com/Loweredgames/Voidblock/issues/363)
- aggiunto un sistema Import per i mondi che non hanno la Skyblock Classic Edition ma vogliono migrare alla mappa Skyblock CE [#365](https://github.com/Loweredgames/Voidblock/issues/365)
- aggiunti suoni diversi di avviso nella conversione e in altri messaggi del sistema nelle funzioni [#245](https://github.com/Loweredgames/Voidblock/issues/245)
aggiunto vicino all'avviso delle versioni obsolete, quanto tempo finisce una LTS. per avvisare i giocatori molto prima per il cambio della versione [#364](https://github.com/Loweredgames/Voidblock/issues/364)
- aggiunto un nuovo overlay per i cambiamenti delle future versioni di Minecraft
- - se dovese cambiare tra gli aggiornamenti, verrà aggiunto uno nuovo con la modifica necessaria.
- - - per il momento non fa nulla

## _custom structures world:_

- le strutture e le isole nella cartella `generated` sono stati migrati nella cartella worldgen [#362](https://github.com/Loweredgames/Voidblock/issues/362)
- - le strutture del mondo delle dimensioni/test adesso usano una loro cartella chiamata `structures_test`
- - - riordina le isole e le strutture in una cartella separata
- - - non è più necessario avere la cartella `generated` nella cartella del mondo principale. basta avere solo il datapack dentro, così non c'è più confusione.

## _misc and other:_

- aggiunto il link di Modrinth della versione portable e normale e altri link dentro il datapack [#366](https://github.com/Loweredgames/Voidblock/issues/366)
- - aggiunti altri link per le versioni portable
- - aggiunti i link mancanti

# Fixed

## _custom structures world:_

- le Elitra non fanno parte del mondo custom e non possono essere rinnovate in maniera naturale. [#358](https://github.com/Loweredgames/Voidblock/issues/358)
questo problema è stato risolto. da adesso si può trovare una chest in una strongold che contiene le elitra e i template dell'End in maniera `naturale` fino ha quando non viene risolto.

# Removed

## _custom structures:_

- non è più necessario avere la cartella `generated` nella cartella del mondo principale
quindi è stata rinominata da rimuovere. verrà rimossa in futuro

[Download](https://github.com/Loweredgames/Voidblock/releases/download/1.20.6_JE-5a/Skyblock.Classic.Edition_LTS.zip)