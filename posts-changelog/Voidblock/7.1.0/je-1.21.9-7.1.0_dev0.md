# Highlights

## _functions and datapack_:

- potenziati il PID e fatto un refactoring interno al sistema delle conversioni [#421](https://github.com/Loweredgames/Voidblock/issues/421) [#422](https://github.com/Loweredgames/Voidblock/pull/422)
- aggiunta la versione 1.21.9 ufficialmente
- - aggiornato il pack alla 1.21.9

# Added

## _misc and other_:

- aggiunta la versione 1.21.9 ufficialmente
- - - aggiornato il pack alla 1.21.9 (pre-2)
- - - - nel datapack alla 88.0
- - - - nel resources pack alla 69.0

# Changed

## _functions and datapack_:

- potenziati il PID e fatto un refactoring interno al sistema delle conversioni [#421](https://github.com/Loweredgames/Voidblock/issues/421) [#422](https://github.com/Loweredgames/Voidblock/pull/422)
- - adesso i PID sarànno locali invece che globali. questo avrà dei vantaggi come l'aggiornamento specifico in quella versione e altri miglioramenti
- - i PID sarànno sempre attivi e avranno sempre una conversione anche se comparira il messaggio in *"Non c'è niente da vedere qui"*
- - aggiornato il loro formato a ```PID_(numero del PID)_mc(numero versione di Minecraft)```. esempio: ```PID_1_mc121```
- - - aggiunto PID per i test interni, per testare nuove conversioni
- - - è stato aggiornato anche al PVN con lo stesso formato
- - - sono state rimosse tutte le conversioni precedenti per l'aggiornamento dei PID
- - aggiunte le musiche generiche del menu in tutti i PID per riflettere i vari aggiornamenti
- - - le musiche cambierano in base alla versione di Minecraft che ti trovi
- - resi tutti i SUBPID locali e aggiornati come i PID. sarànno disabilitati se non c'è nessuna conversione
- - rimosso `mc setup` con `mc versions` sperimentale (era solo un test interno)
- - - rimossa la directory ```setup_pid``` e vari cambiamenti
- - aggiornati anche i PID legacy che adesso si chiamerano PID OLD e reso locale come i PID. aumentato il PID a 1 per il cambiamento al formato (lo 0 serve solo internamente per i test)
- - aggiornata la funzione ```voidblock_mc_setup.mcfunction``` in ```setup_global.mcfunction```, adesso questa funzione sarà per i setup globali e includera i PID
- - - piccolo refactoring alla funzione ```custom_structures.mcfunction``` che adesso si chiama ```generated_structures.mcfunction``` e aggiornata la scoreboard in ```Voidblock_structures```
- - - - questo cambiamento non avra alcun effetto perchè ```Voidblock_structures_id``` non è stato cambiato internamente.
- - aggiornata la funzione ```refactoring_scoreboard.mcfunction```
- - altre correzioni e miglioramenti vari

> _**⚠️BUILDING: They are development version and can be unstable, use it at your risk⚠️**_

**Full Changelog**: https://github.com/Loweredgames/Voidblock/compare/1.21.8_JE-1...1.21.9_JE-0a

[**Download**](https://github.com/Loweredgames/Voidblock/releases/tag/1.21.9_JE-0a)