<?php
  $name = isset($_GET['name']) ? $_GET['name'] : '';
  $names = array();
  $names = explode(' ', $name);
  $sku = '';
  foreach ($names as $n) {
  	$sku .= strtoupper(substr($n, 0, 3));
  }
?>
