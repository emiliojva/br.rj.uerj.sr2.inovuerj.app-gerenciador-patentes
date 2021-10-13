<?php

//phpinfo(); 
//exit;

$host = 'localhost';
$name = 'inovuerj_processos';
$user = 'matheus';
$pass = 'rocha';
$conn = new \PDO("mysql:host={$host};port=3306;dbname={$name};charset=utf8", $user, $pass);
var_dump($conn->beginTransaction()); die;