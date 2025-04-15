<?php
include 'config.php';

$result = $conn->query("SELECT * FROM products");
$products = array();

while ($row = $result->fetch_assoc()) {
    $products[] = $row;
}

echo json_encode($products);
?>
