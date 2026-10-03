# Highlights

## _functions and datapack_:

- aggiunta la versione 1.21.5 ([Spring to Life](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-5)) [#402](https://github.com/Loweredgames/Voidblock/pull/402)
- separate le funzioni nelle versioni
- risolti diversi problemi

# Added

## _functions and datapack_:

- aggiunta la versione 1.21.5 ([Spring to Life](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-5)) [#402](https://github.com/Loweredgames/Voidblock/pull/402)
- - aggiornato da 48 a 71
- - - aggiunto overlay per la 1.21.5
- - - nel resources pack da 34 a 55
- - - - è stata mantenuta la compatibilità per la 1.21/1.21.2/1.21.3/1.21.4
- - aggiornate le isole e le strutture nella 1.21.5
- - - aggiunte le nuove piante nelle isole/strutture, anche quelle predefinite [#402](https://github.com/Loweredgames/Voidblock/pull/402)

# Changed

## _functions and datapack_:

- separate le funzioni nelle varie versioni del datapack:
- - le funzioni si attiverano in base alle versioni di Minecraft. questo non cambiera tanto la logica o le meccaniche della Voidblock, ma in futuri aggiornamenti ci potrebbero essere meccaniche esclusive in base alla versione o porting che potrebbero essere leggermente diversi,
- - in generale il datapack capisce in quale versione di Minecraft sei, come la 1.21,
- - - i testi popup dove mostrano le versioni come il pvn, da adesso mostrano la versione corrente e non più tutte le versioni disponibili, quindi sarà tutto più facile da capire,
- - questa modifica non riflette il PID o alcune funzioni interne che rimangono nel ```data```.
- - - i popup sono stati aggiornati nella 1.21.5 a causa dei cambiamenti interni del testo. piccola modifica al link Modrinth che adesso a un proprio link fasullo e che verrà modificato in futuro.
- - spostate alcune funzioni:
- - - la wall_texts_sign che si trova su ```structures``` cartella,
- - - la mc(versione di Minecraft) che si trova su ```versions``` cartella,

## _custom structures:_

- aggiornato il mondo alla 1.21.5
- aggiunte le nuove piante nelle isole/strutture, anche quelle predefinite [#402](https://github.com/Loweredgames/Voidblock/pull/402)
- - l'isola di sabbia da adesso avrà il fiore di cactus invece del muschio sopra
- - aggiunto la rosa del wither nell'isola very small
- - aggiunto cespuglio di lucciole nel loot della struttura Swamp Hut

# Fixed

## _worlds and maps_:

- risolto il problema dello spawn dell'isola Pale Garden [#388](https://github.com/Loweredgames/Voidblock/issues/388)
- - il problema è che la frequenza dell'isola che era troppo alta rendendo l'isola impossibile da generare. da adesso l'isola spawna con una separazione di 8
- - è stata anche separata la stutture set
- - - fatto il porting anche nella 1.21.4

## _functions and datapack_:

- risolto un problema nel titolo `Voidblock` che ogni tanto veniva usato il sottotitolo

# Removed

## _misc and other_:

- l'area_effect_cloud entity è stata rimossa completamente. datto che l'effetto nella 1.21.5 persiste ho deciso di rimuoverlo completamente, anche per migliorare le prestazioni.
- - questa cosa non dovrebbe cambiare la generazione delle isole/strutture (l'avevo messo per sicurezza).

> _**⚠️BUILDING: They are development version and can be unstable, use it at your risk⚠️**_

**Full Changelog**: https://github.com/Loweredgames/Voidblock/compare/1.21.5_JE-0a...1.21.5_JE-0b

[**Download**](https://github.com/Loweredgames/Voidblock/releases/tag/1.21.5_JE-0b)