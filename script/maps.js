//https://developers.google.com/maps/documentation/javascript/overview#maps_map_simple-javascript
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("googlemaps"), {
    center: { lat: 59.405, lng: 13.581 },
    zoom: 16,
  });
}

window.initMap = initMap;