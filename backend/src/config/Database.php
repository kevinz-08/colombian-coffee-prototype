<?php
  namespace App\Config;
  use PDO;
  use PDOException;
  class Database {
      private $host = 'localhost';
      private $db_name = 'colombian_coffee';
      private $username = 'root';
      private $password = 'admin';
      private $conn;
      
      public function connect() {
          $this->conn = null;
          try{
              $dsn = "mysql:host={$this->host};dbname={$this->db_name};charset=utf8mb4";
              $this->conn = new PDO($dsn, $this->username, $this->password);
          $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
          } catch (PDOException $e) {
              echo 'Error de conexion: ' .$e->getMessage();
          }
          return $this->conn;
      }
  }