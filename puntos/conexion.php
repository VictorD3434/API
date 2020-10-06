<?php
  include_once('conf.php');
  class Model{
    protected $db;
    public function __construct(){
      $db = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
      if($db->connect_errno){
        exit();
      }
      $db->set_charset(DB_CHARSET);
    }
  }
 ?>
