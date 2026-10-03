const SITE_STATUS = {
    maintenanceMode: true, // Imposta true per attivare la manutenzione
    maintenancePage: 'offline.html'
};

if (SITE_STATUS.maintenanceMode) {
    const statusScript = document.currentScript;
    const maintenanceUrl = new URL(SITE_STATUS.maintenancePage, statusScript.src);

    if (window.location.pathname !== maintenanceUrl.pathname) {
        window.location.replace(maintenanceUrl.href);
    }
}