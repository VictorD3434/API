function iniciarMap() {
  var lt = document.getElementsByName('lati')[0].value;
  var ln = document.getElementsByName('long')[0].value;
  var g = parseFloat(lt);
  var n = parseFloat(ln);
  var cordA = {lat: 19.6647152, lng: -99.8336528};
  var cordB = {lat: g, lng: n};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom:10,
    center: cordA
  });

//dibujar puntos en el mapa
  var puntoA = new google.maps.Marker({
    position: cordA,
    map: map
  });
  var puntoB = new google.maps.Marker({
    position: cordB,
    map: map
  });

//dibujar ruta entre los dos puntos
  var confRender = {
    map: map
  };
  var directionsDisplay = new google.maps.DirectionsRenderer(confRender);
  var directionsService = new google.maps.DirectionsService();
  var my_lat = 19.6647152;
  var my_lng = -99.8336528;
  var start = new google.maps.LatLng(my_lat,my_lng);
  var end = new google.maps.LatLng(g,n);


  var request = {
    origin: start,
    destination: end,
    travelMode: google.maps.TravelMode.DRIVING
  };
  var dis = google.maps.geometry.spherical.computeDistanceBetween(start,end);
  var km = parseInt(dis,10)/1000;
  $('#kilo').val(km);
  directionsService.route(request, ruta);

  function ruta(resultado, status) {
    if(status == 'OK'){
      directionsDisplay.setDirections(resultado);
      alert('Rusta correcta '+resultado);
    }else {
      alert('Error '+status);
    }
  }
}
