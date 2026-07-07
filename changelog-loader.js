// ===================================
// CONFIGURAZIONE DEL POST IN EVIDENZA
// ===================================

// Qui puoi scegliere quale post in evidenzia mostrare in homepage.
window.featuredPostConfig = {
    file: 'Voidblock/7.3.0/je-26.1-26.2-7.3.1_rc1.md',
    description: 'Il Chaos Cubed Drop è arrivato: esplora la nuova isola sulfur e usa i sulfur cube per creare minigiochi!!!'
};

// ===================================
// LISTA DEI CHANGELOG DISPONIBILI
// ===================================

// Ogni oggetto rappresenta un post o un changelog che può essere visualizzato nella griglia e nella homepage.
window.changelogList = [


// Post Rilasciati
    {
        title: '26.2 RC 1 - Draft',
        date: '???',
        image: 'images/posts/Voidblock/7.3.0/je-26.1-26.2-7.3.1_rc1.png',
        file: 'Voidblock/7.3.0/je-26.1-26.2-7.3.1_rc1.md',
        tags: ['release-candidate','drafts'],
        visible: true
    },
    {
        title: 'JE-26.1-7.3.0-Voidblock:7.3.0',
        date: '24.03.2026',
        image: 'images/posts/Voidblock/7.3.0/je-26.1-7.3.0_stable.png',
        file: 'Voidblock/7.3.0/je-26.1-7.3.0_stable.md',
        tags: ['stable'],
        visible: true
    },
    {
        title: 'JE-26.1-7.3.0-Voidblock:RELEASE_CANDIDATE-1',
        date: '19.03.2026',
        image: 'images/posts/Voidblock/7.3.0/je-26.1-7.3.0_pre1.png',
        file: 'Voidblock/7.3.0/je-26.1-7.3.0_rc1.md',
        tags: ['release-candidate'],
        visible: true
    },
    {
        title: 'JE-26.1-7.3.0-Voidblock:PRE_RELEASE-1',
        date: '24.02.2026',
        image: 'images/posts/Voidblock/7.3.0/je-26.1-7.3.0_pre1.png',
        file: 'Voidblock/7.3.0/je-26.1-7.3.0_pre1.md',
        tags: ['pre-release'],
        visible: true
    },
    {
        title: 'JE-1.21>1.21.11-7.2.X-Voidblock:7.2.0',
        date: '10.01.2026',
        image: 'images/posts/Voidblock/7.2.X_LTS/je-1.21.11-7.2.0_rc1.png',
        file: 'Voidblock/7.2.X_LTS/je-1.21.11-7.2.0_stable.md',
        tags: ['lts','stable','maintenance'],
        visible: true
    },
    {
        title: 'JE-1.21>1.21.11-7.2.0-Voidblock:RELEASE_CANDIDATE-1_LTS',
        date: '03.01.2026',
        image: 'images/posts/Voidblock/7.2.X_LTS/je-1.21.11-7.2.0_rc1.png',
        file: 'Voidblock/7.2.X_LTS/je-1.21.11-7.2.0_rc1.md',
        tags: ['release-candidate'],
        visible: true
    },
    {
        title: 'Roadmap e Cambio di Versioni di Minecraft',
        date: '23.12.2025',
        image: 'images/posts/Website/new-versions-mc.jpg',
        file: 'Website/minecraft-versions-system.md',
        tags: ['minecraft-news'],
        visible: true
    },
    {
        title: 'JE-1.21>1.21.10-7.1.0-Voidblock:7.1.0',
        date: '22.11.2025',
        image: 'images/posts/Voidblock/7.1.0/je-1.21.10-7.1.0_rc1.png',
        file: 'Voidblock/7.1.0/je-1.21.10-7.1.0_stable.md',
        tags: ['stable'],
        visible: true
    },
    {
        title: 'JE-1.21>1.21.10-7.1.0-Voidblock:RELEASE_CANDIDATE-1',
        date: '12.11.2025',
        image: 'images/posts/Voidblock/7.1.0/je-1.21.10-7.1.0_rc1.png',
        file: 'Voidblock/7.1.0/je-1.21.10-7.1.0_rc1.md',
        tags: ['release-candidate'],
        visible: true
    },
    {
        title: 'JE-1.21>1.21.10-7.1.0-Voidblock:PRE_RELEASE-1',
        date: '25.10.2025',
        image: 'images/posts/Voidblock/7.1.0/je-1.21.10-7.1.0_pre1.png',
        file: 'Voidblock/7.1.0/je-1.21.10-7.1.0_pre1.md',
        tags: ['pre-release'],
        visible: true
    },
    {
        title: 'JE-1.21>1.21.10-7.1.0-Voidblock:BUILDING:07.10.2025a',
        date: '07.10.2025',
        image: 'images/posts/Voidblock/7.1.0/je-1.21.9-7.1.0_dev1.png',
        file: 'Voidblock/7.1.0/je-1.21.9-7.1.0_dev1.md',
        tags: ['building'],
        visible: true
    },
    {
        title: 'JE-1.21>1.21.9-7.1.0-Voidblock:BUILDING:19.09.2025a',
        date: '19.09.2025',
        image: 'images/posts/Voidblock/7.1.0/je-1.21.9-7.1.0_dev0.png',
        file: 'Voidblock/7.1.0/je-1.21.9-7.1.0_dev0.md',
        tags: ['building'],
        visible: true,
        maintenanceVersions: [
            {
            version: 'JE-1.21>1.21.9-7.1.0-Voidblock:BUILDING:19.09.2025b',
            date: '19.09.2025',
            file: 'Voidblock/7.1.0/je-1.21.9-7.1.0_dev0b.md',
            visible: true
            }
        ],
        useCorrectiveStyle: true
    },
    {
        title: 'JE-1.21>1.21.9-7.0.3-Voidblock:7.0.3',
        date: '06.09.2025',
        image: 'images/posts/Voidblock/7.0.0/je-1.21-1.21.5_7.0.1_stable.png',
        file: 'Voidblock/7.0.0/je-1.21-1.21.5_7.0.3_stable.md',
        tags: ['stable','maintenance'],
        visible: true
    },
    {
        title: 'JE-1.21>1.21.9-7.0.2-Voidblock:7.0.2',
        date: '14.08.2025',
        image: 'images/posts/Voidblock/7.0.0/je-1.21-1.21.5_7.0.1_stable.png',
        file: 'Voidblock/7.0.0/je-1.21-1.21.5_7.0.2_stable.md',
        tags: ['stable','maintenance'],
        visible: true
    },
    {
        title: 'JE-1.21>1.21.5-7.0.1-Voidblock:7.0.1',
        date: '09.07.2025',
        image: 'images/posts/Voidblock/7.0.0/je-1.21-1.21.5_7.0.1_stable.png',
        file: 'Voidblock/7.0.0/je-1.21-1.21.5_7.0.1_stable.md',
        tags: ['stable','maintenance'],
        visible: true
    },
    {
        title: 'JE-1.21>1.21.5-7.0.0-Voidblock:7.0.0',
        date: '30.06.2025',
        image: 'images/posts/Voidblock/Logo Voidblock 7.0.0.png',
        file: 'Voidblock/7.0.0/je-1.21-1.21.5_7.0.0_stable.md',
        tags: ['stable'],
        visible: true
    },
    {
        title: 'JE-1.21>1.21.5-7.0.0-Voidblock:RELEASE_CANDIDATE 2',
        date: '16.06.2025',
        image: 'images/posts/Voidblock/Logo Voidblock 7.0.0.png',
        file: 'Voidblock/7.0.0/je-1.21-1.21.5_7.0.0_rc2.md',
        tags: ['release-candidate'],
        visible: true
    },
    {
        title: 'JE-1.21>1.21.5-7.0.0-Voidblock:RELEASE_CANDIDATE 1',
        date: '27.05.2025',
        image: 'images/posts/Voidblock/Logo Voidblock 7.0.0.png',
        file: 'Voidblock/7.0.0/je-1.21-1.21.5_7.0.0_rc1.md',
        tags: ['release-candidate'],
        visible: true
    },
    {
        title: 'JE-1.21>1.21.5-7.0.0-Voidblock:PRE-RELEASE 1',
        date: '20.05.2025',
        image: 'images/posts/Voidblock/7.0.0/je-1.21-1.21.5_7.0.0_pre1.png',
        file: 'Voidblock/7.0.0/je-1.21-1.21.5_7.0.0_pre1.md',
        tags: ['pre-release'],
        visible: true
    },
    {
        title: 'JE-1.21>1.21.5-7.0.0-Voidblock:BUILDING:29.04.2025a',
        date: '29.04.2025',
        image: 'images/posts/Voidblock/7.0.0/je-1.21-1.21.5-7.0.0_dev1.png',
        file: 'Voidblock/7.0.0/je-1.21-1.21.5-7.0.0_dev1.md',
        tags: ['building'],
        visible: true
    },
    {
        title: 'JE-1.21>1.21.5-7.0.0-Voidblock:BUILDING:23.04.2025a',
        date: '23.04.2025',
        image: 'images/posts/Voidblock/7.0.0/je-1.21-1.21.5-7.0.0_dev0.png',
        file: 'Voidblock/7.0.0/je-1.21-1.21.5-7.0.0_dev0.md',
        tags: ['building'],
        visible: true
    },
    {
        title: 'JE-1.21>1.21.4-6.1.0-Skyblock_Classic_Edition:6.1.0',
        date: '15.04.2025',
        image: 'images/posts/Voidblock/6.1.0/je-1.21.4-6.1.0_pre1.png',
        file: 'Voidblock/6.1.0/je-1.21.4-6.1.0_stable.md',
        tags: ['stable'],
        visible: true
    },
    {
        title: 'JE-1.21>1.21.4-6.1.0-Skyblock_Classic_Edition:PRE-RELEASE 1',
        date: '29.03.2025',
        image: 'images/posts/Voidblock/6.1.0/je-1.21.4-6.1.0_pre1.png',
        file: 'Voidblock/6.1.0/je-1.21.4-6.1.0_pre1.md',
        tags: ['pre-release'],
        visible: true
    },
    {
        title: 'Nuova Era!',
        date: '24.03.2025',
        image: 'images/posts/Website/welcome!.png',
        file: 'Website/benvenuti.md',
        tags: ['website','minecraft-news'],
        visible: true
    },
    {
        title: 'Migrazione al Nuovo Sito Web',
        date: '24.03.2025',
        image: 'images/posts/Website/alba.png',
        file: 'Website/migrazione.md',
        tags: ['website'],
        visible: true
    },
    {
        title: 'JE-1.21>1.21.4-6.1.0-Skyblock_Classic_Edition:BUILDING:22.02.2025a',
        date: '22.02.2025',
        image: 'images/posts/Voidblock/6.1.0/je-1.21.4-6.1.0_dev0.png',
        file: 'Voidblock/6.1.0/je-1.21.4-6.1.0_dev0.md',
        tags: ['building'],
        visible: true
    },
    {
        title: 'JE-1.21/1.21.1-6.0.0-Skyblock_Classic_Edition:6.0.0',
        date: '12.01.2025',
        image: 'images/posts/Voidblock/6.0.0/je-1.21-1.21.1-6.0.0_stable.png',
        file: 'Voidblock/6.0.0/je-1.21-1.21.1-6.0.0_stable.md',
        tags: ['stable'],
        visible: true
    },
    {
        title: 'JE-1.21/1.21.1-6.0.0-Skyblock_Classic_Edition:RELEASE-CANDIDATE-2',
        date: '12.01.2025',
        image: 'images/posts/Voidblock/6.0.0/je-1.21-1.21.1-6.0.0_stable.png',
        file: 'Voidblock/6.0.0/je-1.21-1.21.1-6.0.0_rc2.md',
        tags: ['release-candidate'],
        visible: true
    },
    {
        title: 'JE-1.20.6-5.3.X-Skyblock_Classic_Edition:5.3.0_LTS Maintenance Update - LTS',
        date: '27.09.2024',
        image: 'images/posts/Voidblock/5.3.X_LTS/je-1.20.6-5.3.0_LTS_stable.png',
        file: 'Voidblock/5.3.X_LTS/je-1.20.6-5.3.0_LTS_stable.md',
        tags: ['lts','stable','maintenance'],
        visible: true,
        maintenanceVersions: [
            {
                version: '5.3.1_LTS',
                date: '29.12.2024',
                file: 'Voidblock/5.3.X_LTS/je-1.20.6-5.3.1_LTS.md',
                visible: true
            },
            {
                version: '5.3.2_LTS',
                date: '29.07.2025',
                file: 'Voidblock/5.3.X_LTS/je-1.20.6-5.3.2_LTS.md',
                visible: true
            }
        ]
    },


// Post in Lavorazione (drafts)

    {
        title: 'JE-1.20.6-1.0.0-Edge:BUILDING:23.10.2024a - Draft',
        date: '???',
        image: 'images/drafts/draft.png',
        file: 'Edge/je-1.20.6-1.0.0_dev0.md',
        tags: ['building','drafts'],
        visible: false
    },
    {
        title: 'JE-1.17.1-1.0.0-Apocalisse:BUILDING:16.10.2022a - Draft',
        date: '???',
        image: 'images/posts/Apocalisse/first.png',
        file: 'Apocalisse/je-1.17.1-1.0.0_dev0.md',
        tags: ['building','drafts'],
        visible: false
    },
    {
        title: 'JE-1.20.4-Dimension_Infinity:BUILDING:12.12.2023a - Draft',
        date: '???',
        image: 'images/drafts/draft.png',
        file: 'Dimension_Infinity/je-1.20.6-1.0.0_dev0.md',
        tags: ['building','drafts'],
        visible: false
    },
    {
        title: 'JE-1.20.2-Dungeoncraft:BUILDING:30.08.2023a - Draft',
        date: '???',
        image: 'images/drafts/draft.png',
        file: 'Dungeoncraft/je-1.20.6-1.0.0_dev0.md',
        tags: ['building','drafts'],
        visible: false
    },
    {
        title: 'JE-1.19.4-Infernicus:BUILDING:18.10.2023a - Draft',
        date: '???',
        image: 'images/drafts/draft.png',
        file: 'Infernicus/je-1.19.4-1.0.0_dev0.md',
        tags: ['building','drafts'],
        visible: false
    },
    {
        title: 'JE-1.19.4-BowShot:BUILDING:07.03.2023a - Draft',
        date: '???',
        image: 'images/drafts/draft.png',
        file: 'BowShot/je-1.19.4-1.0.0_dev0.md',
        tags: ['building','drafts'],
        visible: false
    },


// Drafts Template

    {
        title: 'Draft',
        date: '???',
        image: 'images/drafts/draft.png',
        file: 'draft.md',
        tags: ['drafts'],
        visible: false
    },

// Changelog Template
    {
        file: 'changelog-template.md', // Nome del file markdown
        date: '03.10.2000',         // Formato data
        title: 'Changelog Template', // Titolo visualizzato
        image: 'images/posts/changelog.png',  // URL immagine
        tags: ['lts','stable','maintenance','release-candidate','pre-release','building','website','minecraft-news','changelog-doc','drafts'], // Aggiunti i tag
        visible: true,
        maintenanceVersions: [
            {
                version: 'Test Changelog',
                date: '04.10.2000',
                file: 'drafts/test.md',
                visible: false
            }
        ],
        useCorrectiveStyle: true
    }
];

// ===================================
// CARICAMENTO DELLA LISTA DEI CHANGELOG
// ===================================

// Questa funzione inizializza la homepage: carica la griglia, imposta i filtri e mostra il post in evidenza.
function loadChangelogList() {
    const changelogGrid = document.getElementById('changelog-grid');
    if (!changelogGrid) return;

    changelogGrid.innerHTML = ''; // Pulisci la griglia
    
    // Filtra i changelog visibili
    const visibleChangelogs = getVisibleChangelogs();
    
    // Crea una card per ogni changelog visibile
    visibleChangelogs.forEach(changelog => {
        const card = createChangelogCard(changelog);
        changelogGrid.appendChild(card);
    });

    // Inizializza i filtri tag
    initializeTagFilters();
    
    // Genera il calendario
    generateChangelogCalendar();

    // Mostra il post in evidenza nella homepage
    renderFeaturedPost();
}

// ===================================
// FUNZIONI DI UTILITÀ
// ===================================

// Funzione per troncare il testo in modo pulito nelle card.
function truncateText(text, maxLength = 60) {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength - 3) + '...';
}

function getVisibleChangelogs() {
    return window.changelogList.filter(changelog => changelog.visible);
}

// Funzione per trovare il changelog da mostrare come post in evidenza nella homepage.
function getFeaturedChangelog() {
    const targetFile = window.featuredPostConfig?.file;
    const visibleChangelogs = getVisibleChangelogs();

    if (targetFile) {
        const directMatch = visibleChangelogs.find(changelog => changelog.file === targetFile);
        if (directMatch) return directMatch;
    }

    return visibleChangelogs.find(changelog => changelog.file && changelog.file !== 'changelog-template.md') || null;
}

// Funzione per costruire il blocco del post in evidenza nella homepage.
function renderFeaturedPost() {
    const container = document.getElementById('featured-post-section');
    if (!container) return;

    const featured = getFeaturedChangelog();
    if (!featured) {
        container.innerHTML = '';
        return;
    }

    const defaultImage = 'https://placehold.co/600x400/1a1a1a/ffffff/png?text=No+Image';
    const tagsHtml = featured.tags ?
        `<div class="featured-post-tags">
            ${featured.tags.slice(0, 4).map(tag => `<span class="tag ${tag}">${tag}</span>`).join('')}
        </div>` : '';

    container.innerHTML = `
        <a class="featured-post-card" href="view-changelog.html?file=${featured.file}">
            <div class="featured-badge">Ultima versione disponibile</div>
            <div class="featured-post-content">
                <div class="featured-post-image">
                    <img src="${featured.image || defaultImage}" alt="${featured.title}" onerror="this.src='${defaultImage}'">
                </div>
                <div class="featured-post-info">
                    <h3>${featured.title}</h3>
                    <p class="featured-post-date">📅 ${featured.date}</p>
                    <p class="featured-post-description">${window.featuredPostConfig?.description || ''}</p>
                    ${tagsHtml}
                    <p class="featured-post-cta">Clicca qui per vedere il changelog.</p>
                </div>
            </div>
        </a>
    `;
}

// ===================================
// CREAZIONE DELLE CARD DEI CHANGELOG
// ===================================

// Funzione per creare una singola card del changelog nella griglia principale.
function createChangelogCard(changelog) {
    const card = document.createElement('a');
    card.href = `view-changelog.html?file=${changelog.file}`; // Link alla pagina del changelog
    card.className = 'changelog-card';
    
    const defaultImage = 'https://placehold.co/600x400/1a1a1a/ffffff/png?text=No+Image';
    
    // Limita i tag mostrati a 3 e aggiungi un indicatore se ce ne sono di più
    const tagsHtml = changelog.tags ? 
        `<div class="changelog-tags">
            ${changelog.tags.slice(0, 3).map(tag => `<span class="tag ${tag}">${tag}</span>`).join('')}
            ${changelog.tags.length > 3 ? `<span class="tag more-tags">+${changelog.tags.length - 3}</span>` : ''}
         </div>` : '';

    // Limita le versioni di manutenzione mostrate a 2 e aggiungi un indicatore se ce ne sono di più
    let maintenanceHtml = '';
    if (changelog.maintenanceVersions && changelog.maintenanceVersions.length > 0) {
        const versionsToShow = changelog.maintenanceVersions.slice(0, 2);
        const headerText = changelog.useCorrectiveStyle ? 'Versioni Correttive:' : 'Versioni di Manutenzione:';

        maintenanceHtml = `
            <div class="maintenance-versions">
                <div class="maintenance-header">${headerText}</div>
                <div class="maintenance-list">
                    ${versionsToShow.map(v => 
                        `<div class="maintenance-item">
                            <span class="version">${v.version}</span>
                            <span class="date">${v.date}</span>
                         </div>`
                    ).join('')}
                    ${changelog.maintenanceVersions.length > 2 ? 
                        `<div class="maintenance-item more-versions">
                            <span>+${changelog.maintenanceVersions.length - 2} altre versioni</span>
                         </div>` : ''}
                </div>
            </div>`;
    }

    card.innerHTML = `
        <div class="changelog-image">
            <img src="${changelog.image || defaultImage}" 
                 alt="${changelog.title}"
                 onerror="this.src='${defaultImage}'">
        </div>
        ${tagsHtml}
        <h3 title="${changelog.title}">${truncateText(changelog.title)}</h3>
        <p class="date">\u{1F4C5} ${changelog.date}</p>
        ${maintenanceHtml}
    `;
    return card;
}

// Funzione per cercare tra i changelog usando la barra di ricerca.
function searchChangelogs(searchTerm) {
    const activeTagElement = document.querySelector('.tag-filter.active');
    const activeTag = activeTagElement ? activeTagElement.dataset.tag : 'all';
    let results = getVisibleChangelogs();
    
    // Applica prima il filtro per tag se non è "all"
    if (activeTag !== 'all') {
        results = results.filter(changelog => 
            changelog.tags && changelog.tags.includes(activeTag)
        );
    }
    
    // Poi applica il filtro di ricerca
    results = results.filter(changelog => 
        changelog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    refreshChangelogGrid(results);
}

// Funzione per aggiornare la griglia dei changelog dopo un filtro o una ricerca.
function refreshChangelogGrid(changelogs) {
    const grid = document.getElementById('changelog-grid');
    grid.innerHTML = '';
    changelogs.forEach(changelog => {
        const card = createChangelogCard(changelog);
        grid.appendChild(card);
    });
}

// Funzione per copiare il link diretto di un changelog negli appunti.
function copyChangelogLink(file) {
    const url = `${window.location.origin}/view-changelog.html?file=${file}`;
    navigator.clipboard.writeText(url)
        .then(() => alert('Link copiato negli appunti!'));
}

// Funzione per filtrare i changelog in base al tag selezionato.
function filterChangelogsByTag(tag) {
    const results = getVisibleChangelogs()
        .filter(changelog => 
            changelog.tags && changelog.tags.includes(tag)
        );
    refreshChangelogGrid(results);
}

// Funzione per inizializzare i pulsanti dei filtri tag.
function initializeTagFilters() {
    const tagFilters = document.querySelectorAll('.tag-filter');
    tagFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            // Rimuovi la classe active da tutti i filtri
            tagFilters.forEach(f => f.classList.remove('active'));
            // Aggiungi la classe active al filtro cliccato
            filter.classList.add('active');
            
            const tag = filter.dataset.tag;
            if (tag === 'all') {
                refreshChangelogGrid(getVisibleChangelogs());
            } else {
                filterChangelogsByTag(tag);
            }
        });
    });
}

// ===================================
// CALENDARIO DEI CHANGELOG
// ===================================

// Funzione per generare il calendario dei changelog nella sidebar.
function generateChangelogCalendar() {
    const calendarContainer = document.querySelector('.changelog-calendar');
    if (!calendarContainer) return;

    const groupedChangelogs = groupChangelogsByYearMonth(window.changelogList);
    calendarContainer.innerHTML = '';

    // Ordina gli anni in ordine decrescente
    const years = Object.keys(groupedChangelogs).sort((a, b) => b - a);

    years.forEach(year => {
        const yearSection = document.createElement('div');
        yearSection.className = 'calendar-year';
        yearSection.innerHTML = `<h3 class="year-title">${year}</h3>`;

        // Ordina i mesi in ordine decrescente
        const months = Object.keys(groupedChangelogs[year]).sort((a, b) => b - a);

        months.forEach(monthIndex => {
            const monthLogs = groupedChangelogs[year][monthIndex];
            const monthSection = document.createElement('div');
            monthSection.className = 'calendar-month';

            // Ordina i changelog per giorno in ordine decrescente
            monthLogs.sort((a, b) => {
                const dayA = parseInt(a.date.split('.')[0]);
                const dayB = parseInt(b.date.split('.')[0]);
                return dayB - dayA;
            });

            monthSection.innerHTML = `
                <h4 class="month-title">${getMonthName(parseInt(monthIndex))}</h4>
                <ul>
                    ${monthLogs.map(log => {
                        const day = log.date.split('.')[0].padStart(2, '0');
                        return `
                            <li>
                                <span class="date">${day}</span>
                                <a href="view-changelog.html?file=${log.file}" 
                                   title="${log.title}">
                                    ${truncateText(log.title, 40)}
                                </a>
                            </li>
                        `;
                    }).join('')}
                </ul>
            `;
            
            yearSection.appendChild(monthSection);
        });
        
        calendarContainer.appendChild(yearSection);
    });
}

// Funzione per raggruppare i changelog per anno e mese nel calendario.
function groupChangelogsByYearMonth(changelogs) {
    return changelogs
        .filter(changelog => changelog.visible) // Filtra prima per visibilità
        .reduce((groups, log) => {
        // Parsing della data (formato: "DD.MM.YYYY")
        const [day, month, year] = log.date.split('.');
        
        // Converte mese da numero a indice (sottrae 1 perché i mesi partono da 0)
        const monthIndex = parseInt(month) - 1;
        
        // Crea gli oggetti anno e mese se non esistono
        if (!groups[year]) {
            groups[year] = {};
        }
        if (!groups[year][monthIndex]) {
            groups[year][monthIndex] = [];
        }
        
        // Aggiungi il changelog al gruppo appropriato
        groups[year][monthIndex].push({
            ...log,
            dayNum: parseInt(day)
        });

        // Ordina i changelog del mese per data decrescente
        groups[year][monthIndex].sort((a, b) => b.dayNum - a.dayNum);
        
        return groups;
    }, {});
}

// Funzione di utilità per ottenere il nome del mese dal suo indice numerico.
function getMonthName(monthIndex) {
    const months = [
        'Gennaio', 'Febbraio', 'Marzo', 'Aprile',
        'Maggio', 'Giugno', 'Luglio', 'Agosto',
        'Settembre', 'Ottobre', 'Novembre', 'Dicembre'
    ];
    return months[monthIndex];
}

// Inizializza il caricamento quando il DOM è pronto
document.addEventListener('DOMContentLoaded', loadChangelogList);