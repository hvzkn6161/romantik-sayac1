const map = L.map('map').setView([39.9208, 32.8541], 13);

// Harita

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);
