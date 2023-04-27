function mapLoad(){
    //Define the lat lon coordinate
    var latLng = [41.789649, -87.599702];
  
    //Set attribution and access key URL
    var mbAttr = 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
    'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    mbUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiemh5YW4iLCJhIjoiY2xneDZvdWV5MDJsajNmcHNldThjaHdhdiJ9.41XhV-y8wblddteXeAEJTA';
  
    // Define two tile layer variables
    var grayscale   = L.tileLayer(mbUrl, {id: 'mapbox/light-v9', tileSize: 512, zoomOffset: -1, attribution: mbAttr}),
    streets  = L.tileLayer(mbUrl, {id: 'mapbox/streets-v11', tileSize: 512, zoomOffset: -1, attribution: mbAttr});
  
    // Define map object
    var map = L.map('map', {
      center: latLng,
      zoom: 16,
      layers: [streets]
    });
    
    // Add tile layers to base layer object
    var baseLayers = {
      "Grayscale": grayscale,
      "Streets": streets
    };
  
    // Add to the map
    L.control.layers(baseLayers).addTo(map);
  
    // Add a marker with opo-up
    L.marker(latLng).addTo(map)
    .bindPopup("<b>UChicago<br>Campus</b>").openPopup();
  
  
  
    //Click event
    var popup = L.popup();
  
    function onMapClick(e) {
      popup
      .setLatLng(e.latlng)
      .setContent("You clicked the map at " + e.latlng.toString())
      .openOn(map);
    }
    map.on('click', onMapClick);
  }