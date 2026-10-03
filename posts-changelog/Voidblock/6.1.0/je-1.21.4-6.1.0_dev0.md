# Highlights:

- aggiornato alla 1.21.2/1.21.3/1.21.4 ([Bundles of Bravery](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-2) e [The Garden Awakens](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-4))
- - è stata mantenuta la compatibilità per la 1.21 e la 1.21.1 con la 1.21.3
- - prima multi versione fino alla 1.21.4
- aggiunte le isole custom in giro nel mondo [#384](https://github.com/Loweredgames/Voidblock/pull/384)
- aggiunta l'isola `very small` con derivate [#383](https://github.com/Loweredgames/Voidblock/pull/383)
- rimosso il bundle e aggiunto ufficialmente
- - modificate alcune ricette
- varie ottimizzazioni al codice e miglioramenti

# Added

## _functions and datapack:_

- aggiunta l'isola `very small` con derivate [#383](https://github.com/Loweredgames/Voidblock/pull/383)
- - è molto più difficile delle altre modalità
- - - solo per chi è esperto di Minecraft al 100%
- - - non è ancora stato tradotto il testo popup

## _worlds and maps:_

- aggiunte le isole custom in giro nel mondo [#384](https://github.com/Loweredgames/Voidblock/pull/384)
- - per far rinnovare gli oggetti e i blocchi. le isole aggiunte sono:
- - - riaggiunta la cherry_grove isola (rimossi gli arboscelli nel baule e altre cose, le uova di sniffer adesso sono due)
- - - aggiunta isola della Taiga (per i sweet berries)
- - - aggiunta isola della giungla
- - - aggiunta isola della savana
- - - aggiunta isola della badland
- - - aggiunta isola della dark forest
- - - aggiunta isola della birch forest (in futuro verrà aggiornata l'isola alla 1.21.5 con il contenuto. aggiunto per gli arboscelli con le api)
- - - aggiunta isola pale oak (_solo per la 1.21.4_)
- - - aggiunta isola mangrove (per arboscelli e paludi, rimosse le rane dato che si trovano naturalmente)
- - - aggiunta la monster room nel mondo (questa volta veramente)
- - - - convertita come struttura
- - - desert well aggiunta nel mondo (questa volta veramente) [#320](https://github.com/Loweredgames/Voidblock/pull/320)
- - - - convertita come struttura

# Changed

## _custom structures:_

- aggiornate tutte le strutture e miglioramenti vari
- - adesso la struttura Pillager Outpost spawna solo quando c'è un villaggio intorno
- - resa le frequenze vanilla nelle strutture
- - adesso le strutture non dovrebbero più avere problemi di spawn attaccate tra le altre
- - - usate in alcune strutture la generazione legacy_type
- aggiornato il mondo alla 1.21.4

## _worlds and maps:_

- rimosso il bundle nelle nuove versioni e aggiunto ufficialmente nel mondo
- modificate alcune ricette
- - alcune ricette sono state riadattate, così alcuni blocchi e items si possono rinnovare

## _functions and datapack:_

- aggiornare il cartello dell'isola in base alla versione [#389](https://github.com/Loweredgames/Voidblock/pull/389)
- - sono stati spostati i cartelli che si trovano nell'isola:
- - - adesso si caricano tra le varie versioni
- - - rimosso nel datapack main

## _misc and other:_

- aggiornato alla 1.21.2/1.21.3/1.21.4 ([Bundles of Bravery](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-2) e [The Garden Awakens](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-4))
- - aggiornato da 48 a 61
- - - aggiornato a 61 in tutti gli overlays nel datapack
- - - nel resources pack a 46
- - - è stata mantenuta la compatibilità per la 1.21 e la 1.21.1 con la 1.21.3
- - - prima versione in assoluto multi versione fino alla 1.21.4 per il momento
- - - - aggiunti overlay per la 1.21.1 e 1.21.2
- aggiunto e aggiornato il CI:
- - adesso quando si fa un commit nel progetto si crea una versione interna in Github. questo non cambia niente e solo una comodità.
- - spostata la Nighty Versione in Legacy e rimossa la bossbar. verrà rimosso tutto nella 1.22
- - - adesso viene aggiornato nel file building_version.json
- - - adesso anche la versione principale verrà aggiornata nel CI.
- - - - queste modifiche ci sarànno anche nelle mie altre mappe
- aggiunto il link di Smithed (un sito per i datapack) [#382](https://github.com/Loweredgames/Voidblock/pull/382)

# Removed

## _functions and datapack:_

- tutte le ricette non verrànno più date quando il giocatore apre il mondo
- - questo potrebbe essere una piccola regressione ma seguendo il vanilla le ricette non vengono mai date subito ma sta al giocatore quando scopre il mondo in se.
- - - _la Skyblock_ è una modalità molto più difficile di un mondo vanilla e i giocatori che ci giocano hanno più conoscenza con le meccaniche di Minecraft.
- - - - anche per i miglioramenti delle performance nel mondo

## _custom structures:_

- rimossa la cherry grove struttura perché è diventata un isola nella cartella delle strutture dei test
- rimosse le rane nella struttura del tempio della giungla. si possono trovare naturalmente
- rimossa la monster room e aggiunta come struttura
- rimosso il desert well e aggiunto come struttura

## _langs:_

- rimossa la traduzione automatica con Crowdin di nuovo. ho avuto enormi problemi e non voglio che ogni volta devo aggiornare tutto il progetto o ripristinarlo. userò il mio metodo che usavo tanto tempo fa (cioè in maniera manuale).
- - questa cosa non cambierà nulla ma sarà molto più lento il processo

> _**⚠️BUILDING: They are development version and can be unstable, use it at your risk⚠️**_

**Full Changelog**: https://github.com/Loweredgames/Voidblock/compare/1.21_JE-4a...1.21.4_JE-0a

[**Download**](https://github.com/Loweredgames/Voidblock/releases/download/1.21.4_JE-0a/Skyblock.Classic.Edition.zip)