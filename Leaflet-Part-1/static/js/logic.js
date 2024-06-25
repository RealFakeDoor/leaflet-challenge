// Store our API endpoint as queryUrl.
let queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson"

// Fetch the JSON data
d3.json(queryUrl).then(function(data) {
    // Access the data
    console.log(data);


    // The data object will contain features property which is an array of earthquake objects
    data.features.forEach(function(feature) {
        let magnitude = feature.properties.mag;
        let place = feature.properties.place;
        let time = new Date(feature.properties.time);

        console.log(`Magnitude: ${magnitude}, Place: ${place}, Time: ${time}`);
    });

}).catch(function(error) {
    console.log(error);  // Handle error
});

let myMap = L.map("map", {
    center: [-28.01, 153.4],
    zoom: 13
  });

let myMap = L.map("map").setView([-37.8, 144.9], 5);


// Creating a new marker:
// We pass in some initial options, and then add the marker to the map by using the addTo() method.
let marker = L.marker([-28.01, 153.4], {
    draggable: true,
    title: "My First Marker"
  }).addTo(myMap);
  
  // Binding a popup to our marker
  marker.bindPopup("Hello There!");

// Create a red circle over Melbourne.
L.circle([-37.8136, 144.9631], {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.75,
    radius: 10000
  }).addTo(myMap);


  // Loop through the cities array, and create one marker for each city object.
for (let i = 0; i < cities.length; i++) {
    L.circle(cities[i].location, {
      fillOpacity: 0.75,
      color: "white",
      fillColor: "purple",
      // Setting our circle's radius to equal the output of our markerSize() function:
      // This will make our marker's size proportionate to its population.
      radius: markerSize(cities[i].population)
    }).bindPopup(`<h1>${cities[i].name}</h1> <hr> <h3>Population: ${cities[i].population.toLocaleString()}</h3>`).addTo(myMap);
  }

