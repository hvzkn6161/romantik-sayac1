const map = L.map('map').setView([41.0495912, 39.2754954], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

// Kalp ikonu

const heartIcon = L.divIcon({
    className: "heart-marker",
    html: "❤️",
    iconSize: [40,40],
    iconAnchor: [20,20]
});

// İlk Anı

L.marker([41.0495912, 39.2754954], {
    icon: heartIcon
}).addTo(map).bindPopup(`
    <div style="text-align:center;max-width:220px;">
        <h3>❤️ İlk Buluşmamız</h3>

        <p>📅 15 Haziran 2022</p>

        <p>Hayatımızın en güzel günü...</p>
    </div>
`);
