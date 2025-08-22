document.addEventListener('DOMContentLoaded', () => {

    // Approximate Coordinates for Hospitals
    const hospitals = [
        { name: "Government General Hospital (GGH)", location: "Near APSRTC Complex", opd: "9:00 AM – 2:00 PM", emergency: "24/7", lat: 17.0055, lng: 81.7895, division: "government" },
        { name: "Rajahmundry Medical College (RMC)", location: "Danavaipeta", opd: "9:00 AM – 1:30 PM", emergency: "24/7", lat: 17.0099, lng: 81.7825, division: "government" },
        { name: "GSL Medical College & General Hospital", location: "Lakshmipuram", opd: "9:00 AM – 5:00 PM", emergency: "24/7", lat: 17.012, lng: 81.775, division: "government" },
        { name: "District Government Hospital", location: "Innespeta", opd: "9:00 AM – 1:00 PM", emergency: "24/7", lat: 17.005, lng: 81.786, division: "government" },
        { name: "Apollo Hospitals", location: "Morampudi Junction", opd: "9:00 AM – 8:00 PM", emergency: "24/7", lat: 17.016, lng: 81.789, division: "multi-specialty" },
        { name: "Care Hospitals", location: "Kotipalli Bus Stand Road", opd: "9:00 AM – 7:00 PM", emergency: "24/7", lat: 17.009, lng: 81.78, division: "multi-specialty" },
        { name: "Medicover Hospitals", location: "Danavaipeta", opd: "9:00 AM – 7:00 PM", emergency: "24/7", lat: 17.0095, lng: 81.782, division: "multi-specialty" },
        { name: "Bollineni Hospitals", location: "Near Gokavaram Bus Stand", opd: "9:00 AM – 6:00 PM", emergency: "24/7", lat: 17.01, lng: 81.777, division: "multi-specialty" },
        { name: "Sai Sudha Multi Speciality Hospital", location: "Aryapuram", opd: "9:00 AM – 7:00 PM", emergency: "24/7", lat: 17.012, lng: 81.773, division: "multi-specialty" },
        { name: "Vijetha Hospital", location: "Tilak Road", opd: "10:00 AM – 5:00 PM", emergency: "24/7", lat: 17.008, lng: 81.788, division: "multi-specialty" },
        { name: "Venkateswara Super Speciality Hospital", location: "Danavaipeta", opd: "9:30 AM – 6:30 PM", emergency: "24/7", lat: 17.009, lng: 81.783, division: "multi-specialty" },
        { name: "Praveen Cardiac Centre", location: "Alcot Gardens", opd: "10:00 AM – 6:00 PM", emergency: "24/7", lat: 17.007, lng: 81.785, division: "multi-specialty" },
        { name: "Rainbow Children’s Hospital", location: "Danavaipeta", opd: "9:00 AM – 7:00 PM", emergency: "24/7", lat: 17.011, lng: 81.78, division: "women-child" },
        { name: "Anu Hospitals", location: "Alcot Gardens", opd: "9:30 AM – 6:30 PM", emergency: "24/7", lat: 17.0075, lng: 81.7855, division: "women-child" },
        { name: "Motherhood Women & Children’s Hospital", location: "Innespeta", opd: "9:00 AM – 7:00 PM", emergency: "24/7", lat: 17.004, lng: 81.786, division: "women-child" },
        { name: "Padmaja Hospital", location: "Morampudi Road", opd: "10:00 AM – 5:00 PM", emergency: "24/7", lat: 17.0155, lng: 81.789, division: "women-child" },
        { name: "Suraksha Children’s Hospital", location: "Kotagummam", opd: "9:00 AM – 7:00 PM", emergency: "24/7", lat: 17.008, lng: 81.781, division: "women-child" },
        { name: "Vasan Eye Care Hospital", location: "Devi Chowk", opd: "9:00 AM – 7:00 PM", emergency: "Limited", lat: 17.007, lng: 81.787, division: "eye-ent" },
        { name: "Dr. Agarwal’s Eye Hospital", location: "Danavaipeta", opd: "9:00 AM – 7:00 PM", emergency: "Limited", lat: 17.009, lng: 81.781, division: "eye-ent" },
        { name: "L.V. Prasad Eye Institute", location: "Alcot Gardens", opd: "9:00 AM – 6:00 PM", emergency: "Limited", lat: 17.008, lng: 81.784, division: "eye-ent" },
        { name: "Rajahmundry Eye Hospital", location: "Kotipalli Bus Stand Road", opd: "9:30 AM – 6:30 PM", emergency: "Limited", lat: 17.0095, lng: 81.78, division: "eye-ent" },
        { name: "Sree Venkateswara ENT Hospital", location: "Danavaipeta", opd: "10:00 AM – 5:00 PM", emergency: "Limited", lat: 17.01, lng: 81.7825, division: "eye-ent" },
        { name: "Sri Sathya Sai Orthopaedic & Trauma Care", location: "Danavaipeta", opd: "9:00 AM – 7:00 PM", emergency: "24/7", lat: 17.01, lng: 81.783, division: "orthopaedics" },
        { name: "KIMS ICON Hospital", location: "Kotipalli Bus Stand", opd: "9:00 AM – 7:00 PM", emergency: "24/7", lat: 17.008, lng: 81.78, division: "orthopaedics" },
        { name: "Medisys Ortho & Neuro Hospital", location: "Morampudi Road", opd: "9:00 AM – 6:00 PM", emergency: "24/7", lat: 17.015, lng: 81.79, division: "orthopaedics" },
        { name: "City Cancer Centre", location: "Innespeta", opd: "9:00 AM – 6:00 PM", emergency: "24/7", lat: 17.006, lng: 81.787, division: "private" },
        { name: "Sigma Hospital", location: "Alcot Gardens", opd: "9:00 AM – 6:00 PM", emergency: "24/7", lat: 17.008, lng: 81.785, division: "private" },
        { name: "Akhil Hospital", location: "Kotagummam", opd: "9:30 AM – 6:00 PM", emergency: "24/7", lat: 17.0075, lng: 81.78, division: "private" },
        { name: "Jyothi Hospital", location: "Danavaipeta", opd: "9:00 AM – 6:00 PM", emergency: "24/7", lat: 17.009, lng: 81.784, division: "private" },
        { name: "Sravani Multi Speciality Hospital", location: "Morampudi Road", opd: "9:30 AM – 6:00 PM", emergency: "24/7", lat: 17.015, lng: 81.791, division: "private" },
        { name: "Aditya Multispeciality Hospital", location: "Innespeta", opd: "9:00 AM – 6:30 PM", emergency: "24/7", lat: 17.0055, lng: 81.787, division: "private" },
        { name: "Metro Hospitals", location: "Danavaipeta", opd: "9:00 AM – 7:00 PM", emergency: "24/7", lat: 17.009, lng: 81.7835, division: "private" },
        { name: "St. Ann’s Hospital", location: "Alcot Gardens", opd: "9:00 AM – 6:00 PM", emergency: "24/7", lat: 17.0085, lng: 81.7845, division: "private" }
    ];

    // Initialize the map centered on Rajahmundry
    const rajahmundry_coords = [17.005, 81.78];
    const map = L.map('map').setView(rajahmundry_coords, 13);
    const markers = {}; // Store markers to easily access them

    // Add OpenStreetMap tile layer
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Function to create a hospital list item
    const createHospitalItem = (hospital) => {
        const item = document.createElement('div');
        item.classList.add('hospital-item');
        item.dataset.lat = hospital.lat;
        item.dataset.lng = hospital.lng;
        item.innerHTML = `
            <h3>${hospital.name}</h3>
            <p>📍 ${hospital.location}</p>
        `;
        item.addEventListener('click', () => {
            const lat = parseFloat(item.dataset.lat);
            const lng = parseFloat(item.dataset.lng);
            map.flyTo([lat, lng], 16, { duration: 1.5 });
            markers[hospital.name].openPopup();
        });
        return item;
    };

    // Function to populate the hospital list
    const populateHospitalList = (filteredHospitals) => {
        const listContainer = document.getElementById('hospitalList');
        listContainer.innerHTML = '';
        filteredHospitals.forEach(hospital => {
            listContainer.appendChild(createHospitalItem(hospital));
        });
    };

    // Add markers and populate the initial list
    hospitals.forEach(hospital => {
        const marker = L.marker([hospital.lat, hospital.lng]).addTo(map);
        marker.bindPopup(`
            <b>🏥 ${hospital.name}</b><br>
            📍 ${hospital.location}<br>
            🕒 OPD: ${hospital.opd}<br>
            🚑 Emergency: ${hospital.emergency}
        `);
        markers[hospital.name] = marker; // Save marker reference
    });

    populateHospitalList(hospitals);

    // --- Filter and Search Functionality ---

    const searchBar = document.getElementById('searchBar');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Search input event listener
    searchBar.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = hospitals.filter(hospital => 
            hospital.name.toLowerCase().includes(searchTerm)
        );
        populateHospitalList(filtered);
    });

    // Filter button event listener
    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Update active class
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');

            const filterValue = e.target.dataset.filter;
            let filteredHospitals;

            if (filterValue === 'all') {
                filteredHospitals = hospitals;
            } else {
                filteredHospitals = hospitals.filter(hospital => hospital.division === filterValue);
            }
            populateHospitalList(filteredHospitals);
        });
    });

});

