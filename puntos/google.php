<?php
  include_once('conexion.php');
  class Google extends Model{
    public function __construct(){
      parent:: __construct();
    }
    public function get_lat_lng($value){
      $sql = $db->query("SELECT t_latitud, t_longitud FROM tienda where id = '$value' LIMIT 1");
      $lat = 0;
      $lng = 0;
      foreach ($sql as $key) {
        $lat = $key['t_latitud'];
        $lng = $key['t_longitud'];
      }
      $array = array('lat' => $lat, 'lng' => $lng);
      return $array;
    }

    public function get_stores(){
      $sql = $db->query("SELECT id, t_nombre FROM tienda ORDER BY t_nombre");
      $option = '';
      foreach ($sql as $key) {
        $id = $key['id'];
        $name = $key['t_nombre'];
        $option = '<option value="'.$id.'"> '.$name.'- B</option>';
      }
      return $option;
    }
  }
  if(isset($_POST['value'])){
    $class = new Google;
    $run = $class->get_lat_lng($_POST['value']);
    exit(json_encode($run));
  }
 ?>
