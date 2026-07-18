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
}).addTo(map).bindPopup("❤️ İlk kez buluşup oturduğumuz yer");



L.marker([41.05469776379677, 39.23060642301675], {
    icon: heartIcon
}).addTo(map).bindPopup(`
    <div style="text-align:center;max-width:220px;">
        <h3>☕ İlk Kahvemiz</h3>
        <p>📅 20 Haziran 2022</p>
        <p>İLK ÇİÇEK :) Birlikte uzun uzun sohbet ettiğimiz yer.</p>
    </div>
`);
