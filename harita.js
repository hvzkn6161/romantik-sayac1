const map = L.map('map').setView([41.049766643187475, 39.274800166012064], 18);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

const heartIcon = L.divIcon({
    className: "heart-marker",
    html: "❤️",
    iconSize: [40, 40],
    iconAnchor: [20, 20]
});

L.marker([41.049766643187475, 39.274800166012064], {
    icon: heartIcon
}).addTo(map).bindPopup("❤️ İlk tanıştığımız yer");
