# JE-1.20.6-5.3.X-Voidblock:5.3.3_LTS

![Aggiornamento di Manutenzione](images/posts/Voidblock/5.3.X_LTS/je-1.20.6-5.3.X_LTS.png)

# Highlights

- 

# Backport

## _functions and datapack_:

- spostata la funzione `pvn_remove` e `pid_remove` e resa globale nella cartella data
- - rinominta la funzione `voidblock_mc_setup` che adesso è `setup_global`
- - - la funzione `setup_global` controlla tutte le funzioni a livello globale come ad esempio i cartelli che si trovanno all'inizio delle isole
- - - - in futuro ci saranno altre funzionalita
- rinominata la funzione `custom_structures` in `generated_structures` per coerrenza
- - questo cambiamento non avra alcun effetto perchè Voidblock_structures_id non è stato cambiato internamente
- potenziati il PID e fatto un refactoring interno al sistema delle conversioni [#421](https://github.com/Loweredgames/Voidblock/issues/421) [#422](https://github.com/Loweredgames/Voidblock/pull/422)
- - adesso i PID saranno locali invece che globali. questo avrà dei vantaggi come l'aggiornamento specifico in quella versione e altri miglioramenti
- - i PID saranno sempre attivi e avranno sempre una conversione anche se comparira il messaggio in "Non c'è niente da vedere qui"
- - - aggiornato il loro formato a PID_(numero del PID)_mc(numero versione di Minecraft). esempio: PID_1_mc121
- - - è stato aggiornato anche al PVN con lo stesso formato
- - - sono state rimosse tutte le conversioni precedenti per l'aggiornamento dei PID
- - aggiunte le musiche generiche del menu in tutti i PID per riflettere i vari aggiornamenti
- - - le musiche cambierano in base alla versione di Minecraft che ti trovi
- - resi tutti i SUBPID locali e aggiornati come i PID. saranno disabilitati se non c'è nessuna conversione
- - rimosso "mc setup" con "mc versions" sperimentale (era solo un test interno)
- - - rimossa la directory setup_pid e vari cambiamenti
- - spostati i PID legacy e rinominata la funzione
- - - i PID legacy sono stati mantenuti per la compatibilita della 1.20.6

# Changed

## _functions and datapack_:

- aggiunto l'avviso del termine LTS. _è una stima non accurata al 100%._

# Fixed

## _functions and datapack_:

- rimosso l'avviso warning che per sbaglio non l'avevo tolto

**Full Changelog**: -> (ricordarsi di aggiungere Github versione tag compare)

**Download** -> (ricordarsi di fare collegamento diretto in GitHub)