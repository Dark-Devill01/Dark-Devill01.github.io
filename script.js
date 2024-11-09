document.querySelectorAll('.download-btn').forEach(button => {
    button.addEventListener('click', function () {
        const card = this.closest('.download-card');
        const software = card.getAttribute('data-software');
        const version = card.getAttribute('data-version');
        const file = card.getAttribute('data-file');

        downloadSoftware(file, software, version);
    });
});

function downloadSoftware(file, software, version) {
    // Simulate an actual download
    console.log(`Downloading ${software} (version: ${version})...`);
    
    // For demonstration purposes; in a real application, you would initiate a file download.
    setTimeout(() => alert(`${software} (version ${version}) Download Started!`), 1000);
}