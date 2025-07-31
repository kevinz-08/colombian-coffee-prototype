<?php
// namespace App\Config;

// use PDO;
// use PDOException;

// class Database {
//     private $host = 'localhost';
//     private $db_name = 'cafe';
//     private $username = 'root';
//     private $passwoerd = '';
//     private $conn;

//     public function connect() {
//         $this->conn = null;

//         try{
//             $dsn = "mysql:host={$this->host};dbname={$this->db_name};charset=utf8mb4";
//             $this->conn = new PDO($dsn, $this->username, $this->password);

//         $this->conn->setAtribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXEPTION);
//         } catch (PDOExeption $e) {
//             echo 'Error de conexion: ' .$e->getMessage();
//         }
//         return $this->conn;
//     }
// }