<?php

$host = 'localhost';
$name = 'inovuerj_processos';
$user = 'emilio';
$pass = '1234';
$conn = new \PDO("mysql:host={$host};port=3306;dbname={$name};charset=utf8", $user, $pass);
var_dump($conn->beginTransaction()); die;