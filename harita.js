// Haritayı oluştur
const map = L.map("map").setView([41.0522, 39.2527], 13);

// Harita katmanı
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap"
}).addTo(map);

// Kalp ikonu
const heartIcon = L.divIcon({
    html: "❤️",
    className: "heart-marker",
    iconSize: [40, 40],
    iconAnchor: [20, 20]
});

// İlk buluşma
const firstMeet = L.marker(
    [41.049766643187475, 39.274800166012064],
    { icon: heartIcon }
).addTo(map);

firstMeet.bindPopup(`
    <div style="text-align:center;">
        <h3>❤️ İlk Buluşmamız</h3>
        <p>İlk kez buluşup oturduğumuz yer.</p>
    </div>
`);

// İlk kahve
const firstCoffee = L.marker(
    [41.05469776379677, 39.23060642301675],
    { icon: heartIcon }
).addTo(map);

firstCoffee.bindPopup(`
    <div style="text-align:center;">
        <h3>☕ İlk Kahvemiz</h3>
        <p>20 Haziran 2022</p>
        <p>İlk çiçeğim 🌹</p>
    </div>
`);

// İki noktayı bağlayan çizgi
L.polyline(
    [
        [41.049766643187475, 39.274800166012064],
        [41.05469776379677, 39.23060642301675]
    ],
    {
        color: "#ff5c8a",
        weight: 4,
        opacity: 0.8
    }
).addTo(map);
