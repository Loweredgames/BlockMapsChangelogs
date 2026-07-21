# JE-1.20.6-5.3.X-Voidblock:5.3.2_LTS

_Scusate se ci è voluto cosi tanto tempo per questa versione ma ho dovuto fare il backporting di "Rebranding da Skyblock Classic Edition a Voidblock" [#411](https://github.com/Loweredgames/Voidblock/pull/411) per il futuro, non verrano fatti piu questi cambiamenti cosi importanti d'ora in poi. ecco quindi la nuova versione 😸._

![Aggiornamento di Manutenzione](images/posts/Voidblock/5.3.X_LTS/je-1.20.6-5.3.X_LTS.png)

# Highlights

- fatto il backporting "Rebranding da Skyblock Classic Edition a Voidblock" [#411](https://github.com/Loweredgames/Voidblock/pull/411)
- - molti cambiamenti leggeri per il cambiamento di [#411](https://github.com/Loweredgames/Voidblock/pull/411)
- aggiornata la Licenza e la descrizione della mappa Voidblock [#416](https://github.com/Loweredgames/Voidblock/issues/416)
- correzioni e miglioramenti vari

# Backport

## _functions and datapack:_

- fatto il backporting "Rebranding da Skyblock Classic Edition a Voidblock" [#411](https://github.com/Loweredgames/Voidblock/pull/411)
- - riadattato il datapack alla 7.0.1 della 1.21.X
- - - la versione è stata mantenuta 5.3.2_LTS anche se il sistema è della 7.0.0.
- - - molte correzioni e miglioramenti grazie a questo backporting. non verrà piu fatto in futuro
- aggiunto import per tutte le vecchie versioni legacy della mappa, compatibilità totale [#392](https://github.com/Loweredgames/Voidblock/issues/392)
- aggiunte nuove ricette per rinovare gli oggetti nel mondo Custom [#290](https://github.com/Loweredgames/Voidblock/pull/290)
- fatto backporting di [#254](https://github.com/Loweredgames/Voidblock/issues/254) per la 1.20.6 [#372](https://github.com/Loweredgames/Voidblock/issues/372)
- aggiunta una stringa quando si deve decidere l'isola per avertire il giocatore che deve premere la chat se no non vede il popup [#417](https://github.com/Loweredgames/Voidblock/issues/417)
- rimosso overlays ```voidblock_custom_world``` e integrato direttamente nell'overlays delle versioni [#410](https://github.com/Loweredgames/Voidblock/issues/410)

## _worlds and maps_:

- aggiunte le isole custom [#384](https://github.com/Loweredgames/Voidblock/pull/384)
- aggiunta l'isola very small (molto difficile) [#383](https://github.com/Loweredgames/Voidblock/issues/383)

## _misc and other_:

- aggiunto il link di Smithed sito web [#382](https://github.com/Loweredgames/Voidblock/issues/382)
- aggiornate le traduzioni e backporting nel resources pack
- aggiornata la Licenza e la descrizione della mappa Voidblock [#416](https://github.com/Loweredgames/Voidblock/issues/416)

# Changed

- molti cambiamenti leggeri per il cambiamento di [#411](https://github.com/Loweredgames/Voidblock/pull/411)

# Fixed

## _functions and datapack:_

- risolto un problema della funzione mc, le score loop non funzionavano per una svista. questo problema è stato risolto
- molti migliormanti vari nelle funzioni e in generale nel datapack grazie a [#411](https://github.com/Loweredgames/Voidblock/pull/411)
- - rifatto completamente di nuovo il multiplayer per correggere la logica e varie ottimizazioni
- - rimosse molte cose nella 1.21/1.21.1 [#367](https://github.com/Loweredgames/Voidblock/issues/367)
- - - risolto durante la conversione 👍

## _textures and resources:_

- molti migliormanti vari nelle funzioni e in generale nel datapack grazie a [#411](https://github.com/Loweredgames/Voidblock/pull/411)
- - fix panorama e aggiornato a uno nuovo
- - - rimosso overlay (aggiunto quello default)
- - - - da adesso i panorami potranno avere un tema nelle diverse versioni come il vanilla. per il momento resta il panorama "voidblock classic"

# Removed

## _functions and datapack_:

- rimosso il tag del libro delle strutture non piu usato nell'import e in generale

**Full Changelog**: https://github.com/Loweredgames/Voidblock/compare/1.20.6_JE-5a...1.20.6_JE-6

[**Download**](https://github.com/Loweredgames/Voidblock/releases/tag/1.20.6_JE-6)