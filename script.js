document.addEventListener('DOMContentLoaded', () => {
    console.log(">> INITIALIZING KIMETSUBAKI_OS...");
    console.log(">> LOADING ASSETS: [OK]");
    console.log(">> NEURAL LINK ESTABLISHED.");

    // Simple interaction: Click effect on cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            alert("ACCESSING ENCRYPTED FILE: " + card.innerText);
        });
    });
});