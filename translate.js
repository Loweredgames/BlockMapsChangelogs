/*
 * Questo file gestisce:
 * 1) il widget Google Translate,
 * 2) il cambio di tema in base alla data,
 * 3) il cambio del favicon per eventi speciali.
 *
 * 
 * Come funziona:
 * - `events` è un array di festività (priorità bassa, sovrascrivono il tema default).
 * - `holidays` è un array di eventi (priorità alta, sovrascrivono festività e tema default).
 * - Ogni elemento usa `month` per il mese singolo, e `startDay` + `endDay` per un intervallo di giorni nello stesso mese.
 * - Per un singolo giorno, usa `month` e `day`.
 * - Se la data corrisponde, viene aggiunta la classe CSS al body
 *   (`body.classList.add(event.className)`) e viene aggiornato il favicon.
 * - Priorità: eventi > festività > tema default.
 *
 * 
 * Come aggiungere una nuova festività o evento:
 * 1) Scegli l'array appropriato: `events` per festività (priorità bassa), `holidays` per eventi (priorità alta).
 * 2) Aggiungi un nuovo oggetto:
 *      {
 *          id: 'nome-evento',
 *          month: 3, // mese (0-11)
 *          day: 1, // singolo giorno (opzionale se intervallo)
 *          startDay: 1, // inizio intervallo giorni (opzionale)
 *          endDay: 3, // fine intervallo giorni (opzionale)
 *          className: 'nome-evento',
 *          iconPath: 'images/icons/nome-evento/favicon.ico'
 *      }
 *
 * 2) in `style.css`, aggiungi gli stili per:
 * Nota: il tema normale rimane definito in `body::before` e `body`. Il tema evento deve sovrascriverlo con `body.nome-evento::before` e classi specifiche, in modo che il layout standard resti disponibile nei giorni normali. esempi: body.nome-evento header
 *      body.nome-evento::before
 *      body.nome-evento::after
 *      body.nome-evento header
 *      body.nome-evento nav a
 *      body.nome-evento .tag-filter
 *      ... ecc.
 *
 *
 * 3) se vuoi un comportamento JavaScript extra per l'evento,
 *    modifica la funzione `applySiteTheme()` e aggiungi un controllo su `event.id`.
 *
 * Note sul favicon:
 * - Se `iconPath` è impostato, il codice userà quel file.
 * - Puoi usare un `.ico` o uno `.png` sotto la cartella `images/icons`.
 *
 * Esempio rapido di un nuovo evento:
 * {
 *     id: 'halloween',
 *     month: 9,
 *     day: 31,
 *     className: 'halloween',
 *     iconPath: 'images/icons/favicon-halloween.ico'
 * }
 *
 * Importante:
 * - `month` parte da 0.
 * - `className` deve essere usato anche nel CSS.
 * - Non serve cambiare il codice HTML delle pagine perché `translate.js`
 *   viene eseguito su tutte le pagine che lo importano.
 */

// Funzione per caricare e inizializzare il widget di Google Translate
function loadTranslateWidget() {
    // Crea e configura il container per il widget
    const googleDiv = document.createElement('div');
    googleDiv.id = 'google_translate_element';
    googleDiv.style.position = 'fixed';
    googleDiv.style.top = '1rem';
    googleDiv.style.right = '1rem';
    googleDiv.style.zIndex = '1000';
    
    // Definizione degli stili personalizzati per il widget
    const style = document.createElement('style');
    style.textContent = `
        /* Stile del contenitore principale */
        .goog-te-gadget {
            position: relative;
            background-color: #2d2d2d;
            border-radius: 4px;
            padding: 8px;
            font-family: 'Minecraft', Arial, sans-serif !important;
            border: none;
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            color: #ffffff !important;
        }

        /* Stili per il selettore della lingua */
        .goog-te-gadget-simple {
            background-color: transparent !important;
            border: none !important;
            padding: 0 !important;
        }

        /* Stili per il testo nel widget */
        .goog-te-gadget span, .goog-te-gadget-simple span {
            color: #ffffff !important;
            font-family: 'Minecraft', Arial, sans-serif !important;
        }

        /* Personalizzazione del menu a tendina */
        .goog-te-combo {
            background-color: #2d2d2d !important;
            color: #ffffff !important;
            border: none !important;
            padding: 8px 12px !important;
            font-family: 'Minecraft', Arial, sans-serif !important;
            cursor: pointer !important;
            border-radius: 4px !important;
            outline: none !important;
            width: 200px !important;
        }

        /* Effetto hover sul menu */
        .goog-te-combo:hover {
            background-color: #3d3d3d !important;
        }

        /* Stile delle opzioni nel menu */
        .goog-te-combo option {
            background-color: #1a1a1a !important;
            color: #ffffff !important;
            padding: 12px 16px !important;
            line-height: 2 !important;
            min-height: 30px !important;
            display: block !important;
            max-height: 300px !important;
        }

        /* Personalizzazione della freccia del menu a tendina */
        select.goog-te-combo {
            -webkit-appearance: none !important;
            -moz-appearance: none !important;
            appearance: none !important;
            background-image: url('data:image/svg+xml;utf8,<svg fill="%23ffffff" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>') !important;
            background-repeat: no-repeat !important;
            background-position: right 8px center !important;
            padding-right: 30px !important;
        }

        /* Nasconde elementi indesiderati di Google Translate */
        .goog-te-banner-frame,
        .goog-logo-link,
        .skiptranslate iframe {
            display: none !important;
        }
    `;
    
    // Aggiunge gli stili e il container al documento
    document.head.appendChild(style);
    document.body.appendChild(googleDiv);

    // Carica lo script di Google Translate
    const script = document.createElement('script');
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    document.body.appendChild(script);
}

// Lista delle festività (priorità alta, sovrascrivono eventi (events) e tema default). hanno priorità massima e sovrascrivono tutto.
const holidays = [
    
    // Christmas
    {
        id: 'christmas',
        month: 11,
        startDay: 24,
        endDay: 26,
        className: 'christmas',
        iconPath: 'images/icons/christmas/favicon.ico'
    },
    
    // April Fools'
    {
        id: 'april-fools',
        month: 3,
        startDay: 1,
        endDay: 3,
        className: 'april-fools',
        iconPath: 'images/icons/april_fools/favicon.ico'
    },
    
    // Compleanno di Minecraft
    {
        id: 'mc-birthday',
        month: 4,
        startDay: 13,
        endDay: 17,
        className: 'mc-birthday',
        iconPath: 'images/icons/mc-birthday/favicon.ico'
    }
];

// Lista degli eventi (priorità bassa, sovrascrivono il tema default).
const events = [
    
    // Gennaio 1 (SEASONS MESI)
    {
        id: 'gennaio1-seasons',
        month: 0,
        startDay: 5,
        endDay: 15,
        className: 'gennaio1-seasons',
        iconPath: 'images/icons/favicon.ico'
    },

    // Gennaio 2 (SEASONS MESI)
    {
        id: 'gennaio1-seasons',
        month: 0,
        startDay: 16,
        endDay: 31,
        className: 'gennaio2-seasons',
        iconPath: 'images/icons/favicon.ico'
    },

    // Febbraio 1 (SEASONS MESI)
    {
        id: 'febbraio1-seasons',
        month: 1,
        startDay: 1,
        endDay: 15,
        className: 'febbraio1-seasons',
        iconPath: 'images/icons/favicon.ico'
    },

    // Febbraio 2 (SEASONS MESI)
    {
        id: 'febbraio2-seasons',
        month: 1,
        startDay: 16,
        endDay: 29,
        className: 'febbraio2-seasons',
        iconPath: 'images/icons/favicon.ico'
    },

    // Marzo 1 (SEASONS MESI)
    {
        id: 'marzo1-seasons',
        month: 2,
        startDay: 1,
        endDay: 15,
        className: 'marzo1-seasons',
        iconPath: 'images/icons/favicon.ico'
    },
    
    // Marzo 2 (SEASONS MESI)
    {
        id: 'marzo2-seasons',
        month: 2,
        startDay: 16,
        endDay: 31,
        className: 'marzo2-seasons',
        iconPath: 'images/icons/favicon.ico'
    },
    
    // Aprile 1 (SEASONS MESI)
    {
        id: 'aprile1-seasons',
        month: 3,
        startDay: 1,
        endDay: 15,
        className: 'aprile1-seasons',
        iconPath: 'images/icons/favicon.ico'
    },
    
    // Aprile 2 (SEASONS MESI)
    {
        id: 'aprile2-seasons',
        month: 3,
        startDay: 16,
        endDay: 31,
        className: 'aprile2-seasons',
        iconPath: 'images/icons/favicon.ico'
    },

    // Maggio 1 (SEASONS MESI)
    {
        id: 'maggio1-seasons',
        month: 4,
        startDay: 1,
        endDay: 15,
        className: 'maggio1-seasons',
        iconPath: 'images/icons/favicon.ico'
    },

    // Maggio 2 (SEASONS MESI)
    {
        id: 'maggio2-seasons',
        month: 4,
        startDay: 16,
        endDay: 31,
        className: 'maggio2-seasons',
        iconPath: 'images/icons/favicon.ico'
    },

    // Giugno 1 (SEASONS MESI)
    {
        id: 'giugno1-seasons',
        month: 5,
        startDay: 1,
        endDay: 15,
        className: 'giugno1-seasons',
        iconPath: 'images/icons/favicon.ico'
    },

    // Giugno 2 (SEASONS MESI)
    {
        id: 'giugno2-seasons',
        month: 5,
        startDay: 16,
        endDay: 31,
        className: 'giugno2-seasons',
        iconPath: 'images/icons/favicon.ico'
    },

    // Luglio 1 (SEASONS MESI)
    {
        id: 'luglio1-seasons',
        month: 6,
        startDay: 1,
        endDay: 15,
        className: 'luglio1-seasons',
        iconPath: 'images/icons/favicon.ico'
    },

    // Luglio 2 (SEASONS MESI)
    {
        id: 'luglio2-seasons',
        month: 6,
        startDay: 16,
        endDay: 31,
        className: 'luglio2-seasons',
        iconPath: 'images/icons/favicon.ico'
    },
    
    // Agosto 1 (SEASONS MESI)
    {
        id: 'agosto1-seasons',
        month: 7,
        startDay: 1,
        endDay: 15,
        className: 'agosto1-seasons',
        iconPath: 'images/icons/favicon.ico'
    },

    // Agosto 2 (SEASONS MESI)
    {
        id: 'agosto2-seasons',
        month: 7,
        startDay: 16,
        endDay: 31,
        className: 'agosto2-seasons',
        iconPath: 'images/icons/favicon.ico'
    },

    // Settembre 1 (SEASONS MESI)
    {
        id: 'settembre1-seasons',
        month: 8,
        startDay: 1,
        endDay: 15,
        className: 'settembre1-seasons',
        iconPath: 'images/icons/favicon.ico'
    },

    // Settembre 2 (SEASONS MESI)
    {
        id: 'settembre2-seasons',
        month: 8,
        startDay: 16,
        endDay: 31,
        className: 'settembre2-seasons',
        iconPath: 'images/icons/favicon.ico'
    },

    // Ottobre 1 (SEASONS MESI)
    {
        id: 'ottobre1-seasons',
        month: 9,
        startDay: 1,
        endDay: 15,
        className: 'ottobre1-seasons',
        iconPath: 'images/icons/favicon.ico'
    },

    // Ottobre 2 (SEASONS MESI)
    {
        id: 'ottobre2-seasons',
        month: 9,
        startDay: 16,
        endDay: 31,
        className: 'ottobre2-seasons',
        iconPath: 'images/icons/favicon.ico'
    },

    // Novembre 1 (SEASONS MESI)
    {
        id: 'novembre1-seasons',
        month: 10,
        startDay: 1,
        endDay: 15,
        className: 'novembre1-seasons',
        iconPath: 'images/icons/favicon.ico'
    },

    // Novembre 2 (SEASONS MESI)
    {
        id: 'novembre2-seasons',
        month: 10,
        startDay: 16,
        endDay: 31,
        className: 'novembre2-seasons',
        iconPath: 'images/icons/favicon.ico'
    },
    
    // Dicembre 1 (SEASONS MESI)
    {
        id: 'dicembre1-seasons',
        month: 11,
        startDay: 1,
        endDay: 15,
        className: 'dicembre1-seasons',
        iconPath: 'images/icons/favicon.ico'
    },

    // Dicembre 2 (SEASONS MESI)
    {
        id: 'dicembre2-seasons',
        month: 11,
        startDay: 16,
        endDay: 31,
        className: 'dicembre2-seasons',
        iconPath: 'images/icons/favicon.ico'
    },
];

// Template (può essere usato per aggiungere altri eventi o festività)
const template_dummy = { // NON USARE, SERVE SOLO COME SEPARATORE. aggiungere in const holidays/events
        id: 'template', // id univoco per identificare l'evento/festività
        month: 3, // mese (0 = gennaio, 1 = febbraio, ..., 11 = dicembre)
        day: 1, // giorno singolo (usa solo questo per eventi di un giorno)
        startDay: 24, // inizio intervallo giorni
        endDay: 26, // fine intervallo giorni
        className: 'template', // classe CSS da aggiungere al body (devi creare stili in style.css in uno custom)
        iconPath: 'images/icons/festivita/favicon.ico' // percorso al favicon (crea cartella e file .ico)
};

function isTodayInEventRange(event, today) {
    const currentMonth = today.getMonth();
    const currentDay = today.getDate();

    // Se ha un singolo giorno
    if (typeof event.day === 'number') {
        return event.month === currentMonth && event.day === currentDay;
    }

    // Se ha un intervallo di giorni nello stesso mese
    if (typeof event.startDay === 'number' && typeof event.endDay === 'number') {
        return event.month === currentMonth && currentDay >= event.startDay && currentDay <= event.endDay;
    }

    return false;
}

// Prima controlla se c'è un evento attivo (priorità alta).
// Se non c'è, controlla se c'è una festività attiva (priorità bassa).
// Se niente, restituisce null e rimane il tema default.
function getTodayThemeEvent() {

    // TEST: forza data (commenta questa riga per disabilitare)
    // Attenzione: in JavaScript i mesi partono da 0, quindi dicembre è 11.
    // const today = new Date(2026, 0, 1); // anno, mese, giorno
    const today = new Date(); // usa questa per produzione
    
    // Prima cerca nelle festività (priorità alta)
    const activeEvent = holidays.find(event => isTodayInEventRange(event, today));
    if (activeEvent) return activeEvent;
    
    // Poi cerca negli eventi (priorità bassa)
    const activeHoliday = events.find(holiday => isTodayInEventRange(holiday, today));
    if (activeHoliday) return activeHoliday;
    
    return null;
}

function updateFaviconForEvent(event) {
    // Se troviamo il tag favicon e l'evento ha un icona dedicata,
    // la usiamo. Altrimenti manteniamo l'icona normale
    const icon = document.querySelector('link[rel~="icon"], link[rel="shortcut icon"]');
    if (!icon || !event) return;

    if (event.iconPath) {
        icon.type = 'image/x-icon';
        icon.href = event.iconPath;
        return;
    }

    // Se non è specificato un favicon evento, conserva quello di default già definito nel <head>.
    return;
}

// Crea l'effetto confetti per il tema Pesce d'Aprile.
function launchAprilFoolsConfetti() {
    const overlay = document.createElement('div');
    overlay.className = 'april-fools-confetti';
    const colors = ['#ffeb3b', '#ff4081', '#40c4ff', '#76ff03', '#ffffff'];

    // Crea 18 pezzi di confetti con posizioni, dimensioni, colori e animazioni casuali.
    for (let i = 0; i < 18; i++) {
        const piece = document.createElement('span');
        piece.style.left = `${Math.random() * 100}%`;
        piece.style.top = `${-10 - Math.random() * 10}%`;
        piece.style.width = `${6 + Math.random() * 10}px`;
        piece.style.height = piece.style.width;
        piece.style.backgroundColor = colors[i % colors.length];
        piece.style.animationDelay = `${Math.random() * 0.6}s`;
        piece.style.animationDuration = `${2 + Math.random() * 1.5}s`;
        piece.style.opacity = `${0.8 + Math.random() * 0.2}`;
        overlay.appendChild(piece);
    }
    // Aggiunge l'overlay dei confetti al body e lo rimuove dopo l'animazione.
    document.body.appendChild(overlay);
    window.setTimeout(() => {
        overlay.style.transition = 'opacity 0.8s ease';
        overlay.style.opacity = '0';
        window.setTimeout(() => overlay.remove(), 800);
    }, 6500);
}

// Crea un effetto neve esclusivo per il Natale.
function launchChristmasSnow() {
    const overlay = document.createElement('div');
    overlay.className = 'christmas-snow';

    for (let i = 0; i < 60; i++) {
        const snowflake = document.createElement('span');
        snowflake.className = 'christmas-snowflake';
        snowflake.style.left = `${Math.random() * 100}%`;
        snowflake.style.width = `${4 + Math.random() * 6}px`;
        snowflake.style.height = snowflake.style.width;
        snowflake.style.opacity = `${0.5 + Math.random() * 0.5}`;
        snowflake.style.animationDelay = `${Math.random() * 10}s`;
        snowflake.style.animationDuration = `${8 + Math.random() * 6}s`;
        overlay.appendChild(snowflake);
    }

    document.body.appendChild(overlay);
}

// Applica il tema del sito in base alla data odierna, se c'è un evento corrispondente.
// Questa funzione viene chiamata al caricamento della pagina.
// Aggiunge la classe CSS al body, cambia il favicon e lancia effetti speciali.
function applySiteTheme() {
    // Cerca un evento che corrisponda alla data odierna.
    const event = getTodayThemeEvent();
    if (!event) return;

    // Applica la classe CSS dell'evento al body e aggiorna il favicon.
    document.body.classList.add(event.className);
    updateFaviconForEvent(event);

    // Aggiungi effetti speciali per eventi specifici.
    if (event.id === 'april-fools') {
        launchAprilFoolsConfetti();
    }
    if (event.id === 'christmas') {
        launchChristmasSnow();
    }
}

// Callback richiesta da Google Translate per inizializzare il widget.
window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({
        pageLanguage: 'it',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
        gaTrack: false
    }, 'google_translate_element');
};

// Al caricamento della pagina, applica il tema evento (se c'è) e poi carica il widget di traduzione.
document.addEventListener('DOMContentLoaded', function() {
    applySiteTheme();
    loadTranslateWidget();
});
