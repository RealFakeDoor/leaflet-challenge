// Build the map:
let myMap = L.map("map").setView([2.211005, 117.222629], 4);

// Add a tile layer (the background map image) to our map.
// Use the addTo() method to add objects to our map.
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Define depth ranges and their corresponding colors
let depthColors = [
    { range: '0-10 km', color: '#FFF8DC' },  // Cornsilk
    { range: '11-30 km', color: '#DEB887' }, // Burlywood
    { range: '31-50 km', color: '#F4A460' }, // SandyBrown
    { range: '51-70 km', color: '#CD853F' }, // Peru
    { range: '71-90 km', color: '#A0522D' }, // Sienna
    { range: '91+ km', color: '#800000' }    // Maroon
  ];
  
  // Function to add legend to map
  function addLegend() {
    let legend = L.control({ position: 'bottomright' });
  
    legend.onAdd = function () {
      let div = L.DomUtil.create('div', 'info legend');
      div.style.backgroundColor = 'white'; // Set background color of legend to white
      div.innerHTML += '<h4 style="margin: 10px 0;">Depth (km) Legend</h4>';
  
      for (let i = 0; i < depthColors.length; i++) {
        div.innerHTML +=
          '<div class="legend-row">' +
          '<i style="background:' + depthColors[i].color + '"></i> ' +
          depthColors[i].range +
          '</div>';
      }
  
      return div;
    };
  
    legend.addTo(myMap);
  }


// Store our API endpoint as queryUrl.
// EARTHQUAKE DATA FROM THE LAST 7 Days:
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Fetch the JSON data
d3.json(queryUrl).then(function(data) {
  // Access the data
  console.log(data);

  // The data object will contain features property which is an array of earthquake objects.
  data.features.forEach(function(feature) {
    let coordinates = feature.geometry.coordinates;
    let longitude = coordinates[0];
    let latitude = coordinates[1];
    let depth = coordinates[2];              // KM below the earth's surface.
    let magnitude = feature.properties.mag;  // Magnitude of earthquake on the Richter scale

    // Determine the color based on the depth
    let fillColor;
    if (depth <= 10) {
      fillColor = "#FFF8DC"; // Cornsilk
    } else if (depth <= 30) {
      fillColor = "#DEB887"; // Burlywood
    } else if (depth <= 50) {
      fillColor = "#F4A460"; // SandyBrown
    } else if (depth <= 70) {
      fillColor = "#CD853F"; // Peru
    } else if (depth <= 90) {
      fillColor = "#A0522D"; // Sienna
    } else {
      fillColor = "#800000"; // Maroon
    }

    // Create a circle over the location of each earthquake event.
    L.circle([latitude, longitude], {
      color: "black",
      weight: 1, // Thickness of the outline (1 pixel)
      fillColor: fillColor,
      fillOpacity: 0.9,
      radius: magnitude * 40000 // Radius based on earthquake magnitude
    }).bindPopup(`<h1>${feature.properties.title}</h1><hr><p>Magnitude: ${magnitude}<br>Longitude: ${longitude}, Latitude: ${latitude}<br>Depth: ${depth} km</p>`).addTo(myMap);

    console.log(`Longitude: ${longitude}, Latitude: ${latitude}, Depth: ${depth}`);
  });

  // Add legend to the map
  addLegend();

}).catch(function(error) {
  console.log(error);  // Handle error
});