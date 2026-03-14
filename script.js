// BUSCADOR SOLO PARA LA PÁGINA PRINCIPAL
const searchInput = document.getElementById("searchInput");
if (searchInput) {
    const cards = document.querySelectorAll(".card");

    searchInput.addEventListener("keyup", () => {
        const filter = searchInput.value.toLowerCase();
        cards.forEach(c => {
            c.style.display = c.innerText.toLowerCase().includes(filter) ? "block" : "none";
        });
    });
}

// MODO OSCURO
const toggle = document.getElementById("darkToggle");
if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
}

// MAPA SOLO EN INDEX
if (document.getElementById("map")) {
    const map = L.map('map').setView([22.145, -80.436], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);

    L.marker([22.146, -80.437]).addTo(map).bindPopup("Inmigración y Extranjería");
    L.marker([22.149, -80.435]).addTo(map).bindPopup("Notaría Principal");
  
    L.marker([22.142, -80.440]).addTo(map).bindPopup("ONAT Municipal");
     // Bancos
    L.marker([22.14655, -80.43590]).addTo(map).bindPopup("BANDEC – Sucursal Principal");
    L.marker([22.14590, -80.43710]).addTo(map).bindPopup("BPA – Banco Popular de Ahorro");
}

