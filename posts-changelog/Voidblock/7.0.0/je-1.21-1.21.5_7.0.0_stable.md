# Highlights

## _functions and datapack:_

- Rebranding da Skyblock Classic Edition a Voidblock [#391](https://github.com/Loweredgames/Voidblock/pull/391)
- - leggere il post sul vlog per [informazioni](https://minecraft-map-building-versions.blogspot.com/2025/03/migrazione-al-nuovo-sito-web.html)
- aggiunta la versione 1.21.5 ([Spring to Life](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-5)) [#402](https://github.com/Loweredgames/Voidblock/pull/402)
- aggiunto nuovo avviso per avvertire che la sezione overlayer è ancora sperimentale
- separate le funzioni nelle varie versioni
- separata la versione hardcore da quella main
- aggiornati i link e il logo con le nuove icone
- risolti diversi problemi e correzione varie
- rimosso del codice inutilizzato
- aggiunto il panorama classic

# Added

## _functions and datapack:_

- Rebranding da Skyblock Classic Edition a Voidblock [#391](https://github.com/Loweredgames/Voidblock/pull/391)
- - leggere il post sul vlog per [informazioni](https://minecraft-map-building-versions.blogspot.com/2025/03/migrazione-al-nuovo-sito-web.html)
- aggiunta la versione 1.21.5 ([Spring to Life](https://www.minecraft.net/en-us/article/minecraft-java-edition-1-21-5)) [#402](https://github.com/Loweredgames/Voidblock/pull/402)
- - aggiornato da 48 a 81
- - - aggiunto overlay per la 1.21.5 e la 1.21.6/1.21.7
- - - nel resources pack da 34 a 64
- - - - è stata mantenuta la compatibilità per la 1.21/1.21.1/1.21.2/1.21.3/1.21.4

## _worlds and maps_:

- aggiornate le isole e le strutture nella 1.21.5
- - aggiunte le nuove piante nelle isole/strutture, anche quelle predefinite [#402](https://github.com/Loweredgames/Voidblock/pull/402)

## _langs_:

- aggiunto nuovo avviso per avvertire che la sezione overlayer è ancora sperimentale
- - in futuro l'avviso della compatibilità verrà rimosso
- - - per il momento non è tradotto

# Changed

## _functions and datapack:_

- separate le funzioni nelle varie versioni del datapack:
- - le funzioni si attiverano in base alle versioni di Minecraft, quindi nel pack. questo non cambiera tanto la logica o le meccaniche della Voidblock, ma in futuri aggiornamenti ci potrebbero essere meccaniche esclusive in base alla versione o porting che potrebbero essere leggermente diversi,
- - in generale il datapack capisce in quale versione di Minecraft sei, come la 1.21,
- - - i testi popup dove mostrano le versioni come il pvn, da adesso mostrano la versione corrente e non più tutte le versioni disponibili, quindi sarà tutto più facile da capire,
- - - anche i cartelli vengono aggiunti in base alla versione
- - questa modifica non riflette il PID o alcune funzioni interne che rimangono nel ```data``` come il versionamento.
- - - i popup sono stati aggiornati nella 1.21.5 a causa dei cambiamenti interni del testo. piccola modifica al link Modrinth che adesso a un proprio link fasullo e che verrà modificato in futuro.
- - - il pack adesso è compatibile anche con le versioni snapshots. quindi la 24w33a è 49 da 57 per le versioni dalla 1.21 alla 1.21.4
- - - - le versioni non sono state testate e potrebbero non essere compatibili in tutte le versioni snapshots
- - spostate alcune funzioni:
- - - la wall_texts_sign che si trova su ```structures``` cartella,
- - - la mc(versione di Minecraft) che si trova su ```versions``` cartella
- aggiunto import per tutte le vecchie versioni legacy della mappa, compatibilità totale [#392](https://github.com/Loweredgames/Voidblock/issues/392)
- - da adesso ci sarà una conversione veloce per tutti i pid legacy anche se stai convertendo in una versione obsoleta della mappa. questo è stato fatto per garantire la compatibilità universale, rimuovendo sempre i pid e rendendo sempre compatibile.
- - - i vecchi mondi dovrànno essere importati manualmente quando apri il mondo per la prima volta ma poi tutto funzionerà come prima, quindi basta che clicchi su ```Import``` quando decidi le isole all'inizio.

## _custom structures:_

- aggiornato il mondo alla 1.21.5
- aggiunte le nuove piante nelle isole/strutture, anche nelle isole predefinite [#402](https://github.com/Loweredgames/Voidblock/pull/402)
- - l'isola di sabbia da adesso avrà il fiore di cactus invece del muschio sopra
- - aggiunto la rosa del wither nell'isola very small
- - aggiunto cespuglio di lucciole nel loot della struttura Swamp Hut

## _misc and other_:

- separata la versione hardcore da quella main
- - da adesso si potrà scaricare a parte
- aggiornate le traduzioni [#399](https://github.com/Loweredgames/Voidblock/pull/399) [#405](https://github.com/Loweredgames/Voidblock/pull/405)
- aggiornati i link e il logo con le nuove icone per il rebranding

# Fixed

## _worlds and maps_:

- risolto il problema dello spawn dell'isola Pale Garden [#388](https://github.com/Loweredgames/Voidblock/issues/388)
- - il problema è che la frequenza dell'isola che era troppo alta rendendo l'isola impossibile da generare. da adesso l'isola spawna con una separazione di 8
- - è stata anche separata la stutture set
- - - fatto il porting anche nella 1.21.4 per l'isola Pale Garden

## _textures and resources_:

- fix panorama e aggiornato a uno nuovo
- - rimosso overlay (aggiunto quello default)
- - - da adesso i panorami potrànno avere un tema nelle diverse versioni come il vanilla. per il momento resta il panorama `voidblock classic`

# Removed

## _functions and datapack:_

- rimossa la funzione 'legacy_structures_system.mcfunction' e integrata nella funzione 'legacy_conversion.mcfunction'
- rimosse alcune scoreboard e alcune funzioni non più usate
- - pulizia nel legacy
- - - pulizia in generale nel datapack
- rimosso del codice duplicato
- rimosso il tag del libro delle strutture non più usato nell'import

## _misc and other_:

- l'area_effect_cloud entity è stata rimossa completamente. dato che l'effetto nella 1.21.5 persiste ho deciso di rimuoverlo completamente, anche per migliorare le prestazioni.
- - questa cosa non dovrebbe cambiare la generazione delle isole/strutture (l'avevo messo per sicurezza).

**Full Changelog**: https://github.com/Loweredgames/Voidblock/compare/1.21.4_JE-0...1.21.5_JE-0

[**Download**](https://github.com/Loweredgames/Voidblock/releases/tag/1.21.5_JE-0)