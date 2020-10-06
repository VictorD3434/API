<?php
  include_once('conf.php');
  include_once('google.php');
?>
<html>
  <head>
    <title>Ruta</title>
    <link rel="stylesheet" type="text/css" href="estilo.css">
    <script type="text/javascript" src="jquery.js"></script>
    <script type="text/javascript" src="function.js"></script>
  </head>
  <body>
    <div class="container">
      <table>
        <tr>
          <td>
            <input type="button" value="Ubicacion - A" onclick="get_location();">
          </td>
          <td>
            <input type="text" placeholder="Latitud" id="my_lat" readonly>
          </td>
          <td>
            <input type="text" placeholder="Longitud" id="my_lng" readonly>
          </td>
          <td>
            <select class="txt" onchange="draw_rute(this.value)">
              <option value="0">Dibujar ruta con </option>
              <?=$google->get_stores();?>
            </select>
          </td>
        </tr>
      </table>
    </div>
    <div class="map" id="map">

    </div>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYbwbfs6drkqIxCvll78pKb2eF7VDWdh4&callback=start_map"></script>
  </body>
</html>
