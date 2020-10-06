function findMe(){
  var put = document.getElementById('men');
  if(navigator.geolocation){
    put.innerHTML = "<p>Bien</p>";
  }else {
    put.innerHTML = "<p>Mal</p>";
  }
  function localizacion(pos) {
    var lat = pos.coords.latitude;
    var long = pos.coords.longitude;
    put.innerHTML = "<p>Latitud: "+lat+"<br>longitud: "+long+"</p>";
    var cord = {lati: lat, longi: long};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom:10,
      center: cord
    });
    var mar = new google.maps.Marker({
      position: cord,
      map: map
    });
  }
  function error() {
    put.innerHTML = "<p>Error de localizacion</p>";
  }
  navigator.geolocation.getCurrentPosition(localizacion,error);
}
