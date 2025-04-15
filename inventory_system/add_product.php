<?php
include 'config.php';
$data = json_decode(file_get_contents("php://input"));

$name = $data->name;
$quantity = $data->quantity;
$price = $data->price;

$sql = "INSERT INTO products (name, quantity, price) VALUES ('$name', $quantity, $price)";
$conn->query($sql);
?>
