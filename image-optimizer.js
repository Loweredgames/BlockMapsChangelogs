// Ottimizzatore di immagini per il browser.
(function () {
    
    // Controlla se il browser supporta il formato WebP.
    // Se non lo supporta, il codice non prova a sostituire le immagini.
    const supportsWebP = (() => {
        try {
            const canvas = document.createElement('canvas');
            canvas.width = 1;
            canvas.height = 1;

            // Controlla se il browser può generare un'immagine WebP valida.
            return canvas.toDataURL('image/webp').startsWith('data:image/webp');
        } catch (error) {
            return false;
        }
    })();

    // Verifica se l'immagine è locale e se è un file PNG o JPG/JPEG.
    // Non tocca immagini esterne, dati in memoria o blob.
    function isLocalImage(url) {
        if (!url) return false;
        if (/^(https?:)?\/\//i.test(url) || url.startsWith('data:') || url.startsWith('blob:')) {
            return false;
        }
        return /\.(png|jpe?g)$/i.test(url);
    }

    // Applica le ottimizzazioni a una singola immagine.
    function applyOptimizations(img) {
        // Evita di lavorare più volte sulla stessa immagine.
        if (!img || img.dataset.optimized === 'true') return;

        // Aggiunge lazy loading e async decoding se non sono già presenti.
        // Così l'immagine viene caricata solo quando serve e senza bloccare il rendering.
        if (!img.getAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }

        // Aggiunge async decoding se non è già presente.
        if (!img.getAttribute('decoding')) {
            img.setAttribute('decoding', 'async');
        }

        // Se il browser non supporta WebP, smette qui.
        if (!supportsWebP) return;

        const currentSrc = img.getAttribute('src');
        if (!isLocalImage(currentSrc)) return;

        // Costruisce il nome alternativo con estensione .webp.
        // Esempio: image.png -> image.webp
        const candidateSrc = currentSrc.replace(/\.(png|jpe?g)$/i, '.webp');
        if (candidateSrc === currentSrc) return;

        // Prova a verificare se il file WebP esiste davvero.
        // Se sì, sostituisce l'immagine originale con la versione più leggera.
        const probe = new Image();
        probe.onload = () => {
            img.setAttribute('src', candidateSrc);
            img.dataset.optimized = 'true';
        };
        probe.onerror = () => {
            
            // Se il WebP non esiste o non è disponibile, resta sul PNG/JPG originale.
            img.dataset.optimized = 'false';
        };
        probe.src = candidateSrc;
    }

    // Scansiona tutte le immagini presenti nella pagina iniziale.
    function scanImages(root = document) {
        root.querySelectorAll('img').forEach(applyOptimizations);
    }

    // Esegue l'ottimizzazione appena il DOM è pronto.
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            scanImages();
        });
    } else {
        scanImages();
    }

    // Osserva aggiunte di nuovi elementi nel DOM, così anche immagini create dopo
    // il caricamento iniziale vengono ottimizzate automaticamente.
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            mutation.addedNodes.forEach((node) => {
                if (!(node instanceof Element)) return;
                if (node.tagName === 'IMG') {
                    applyOptimizations(node);
                }
                if (node.querySelectorAll) {
                    scanImages(node);
                }
            });
        });
    });
    
    // Inizia a osservare il documento intero per eventuali aggiunte di immagini.
    observer.observe(document.documentElement, {
        childList: true,
        subtree: true
    });
})();
