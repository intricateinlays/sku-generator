<?php require '_helper.php';
header('Content-Type: application/json');
echo json_encode(array('sku' => $sku));
