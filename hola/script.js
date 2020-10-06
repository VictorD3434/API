function iniciarMap() {
  var cord = {lat: 19.6647152, lng: -99.8336528};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom:10,
    center: cord
  });

  var mar = new google.maps.Marker({
    position: cord,
    map: map
  });
}
