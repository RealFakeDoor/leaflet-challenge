# Earthquake Visualization with Leaflet

## Overview

This repository provides a web application that visualizes earthquake data from the past 7 days using the Leaflet library. The application displays a map with circles representing earthquake events, where the size and colour of the circles indicate the magnitude and depth of the earthquakes respectively.

## Files
- **index.html**: The main HTML file that sets up the webpage and includes the necessary CSS and JavaScript files.
- **style.css**: The CSS file that styles the webpage and the map legend.
- **logic.js**: The JavaScript file that contains the logic for fetching earthquake data, processing it, and visualizing it on the map using Leaflet.

## Data Source
The earthquake data is fetched from the USGS Earthquake Hazards Program, specifically the "All Earthquakes from the Past 7 Days" feed, available in GeoJSON format. Dataset created by the United States Geological Survey.
- **API Endpoint**: [USGS Earthquake Data Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)

## Dependencies
- **Leaflet**: A JavaScript library for interactive maps.
- **D3.js**: A JavaScript library for data visualization.
- **OpenStreetMap**: Used as the tile layer for the map.

## Usage
1. **Clone the Repository**: 
   ```bash
   git clone https://github.com/your-repository/earthquake-visualization.git

2. **Navigate to the Project Directory**

3. **Open index.html in a Web Browser:**
Simply open the index.html file in your preferred web browser to view the map and earthquake data visualization.

## Logic Overview
	
**HTML (index.html)**
	- Sets up the basic structure of the webpage.
	- Includes external Leaflet CSS and JS files, as well as the D3.js library.
	- Links to the custom CSS and JavaScript files.

**CSS (style.css)**
	- Ensures that the map and webpage take up the full height of the browser window.
	- Styles the map legend with a white background, padding, and rounded corners.
	- Defines styles for the legend rows and colour swatches.

**JavaScript (logic.js)**
	- Initializes the Leaflet map centred at a specific latitude and longitude, with a zoom level of 4.
	- Adds an OpenStreetMap tile layer to the map.
	- Defines depth ranges and their corresponding colours for the legend.
	- Fetches earthquake data from the USGS API using D3.js.
	- Processes the data to create circle markers on the map for each earthquake, with the circle's size and colour 		  representing the earthquake's magnitude and depth.
	- Adds a legend to the map to explain the colour coding of earthquake depths.s
	  Handles errors in data fetching gracefully.

# Conclusion
This project provides an interactive and informative visualization of recent earthquake activity using Leaflet and D3.js. By examining the map, users can gain insights into the locations, magnitudes, and depths of recent earthquakes around the world.