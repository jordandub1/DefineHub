var origin = "Brazil";

window.onload = function () {
  L.mapquest.key = "MxMEt0lAXnEnzLPH7q3pPeMkwmaa422h";

  L.mapquest.geocoding().geocode(origin, createMap);

  function createMap(error, response) {
    var location = response.results[0].locations[0];
    var latLng = location.displayLatLng;
    var map = L.mapquest.map("map", {
      center: latLng,
      layers: L.mapquest.tileLayer("map"),
      zoom: 14,
    });

    var customIcon = L.mapquest.icons.circle({
      primaryColor: "#3b5998",
    });

    L.marker(latLng, { icon: customIcon }).addTo(map);
  }
};
