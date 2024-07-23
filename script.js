function initMap() {
  // Create a map centered on a specific location
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.373004, lng: -71.110253 },
    zoom: 18,
  })

  // Example of adding a marker
  new google.maps.Marker({
    position: { lat: 42.373004, lng: -71.110253 },
    map: map,
    title: "HUB",
  })
}
