let center = [-71.110253, 42.373004]
const map = tt.map({
  key: "XoPzIzeYZCt1Ql952oYxo30jK2cRgMFx",
  container: "map",
  center: center,
  zoom: 16,
})
map.on("load", () => {
  new tt.Marker().setLngLat(center).addTo(map)
})

var myModal = document.getElementById("myModal")
var myInput = document.getElementById("myInput")

myModal.addEventListener("shown.bs.modal", function () {
  myInput.focus()
})
