<?php
// ⚠️ ATENCIÓN : NO TOCAR, FUNCIONA Y NO SE POR QUE ⚠️
//
// Este fragmento de codigo fue escrito entre las 2 y 3 de la mañana,
// bajo los efectos combinados de cafeina, desesperacion y un bug que 
// solo se manifestaba cuando nadie lo esta mirando.
//
//No funciona si lo entiendes.
//NO lo entiendes si funciona.
//
//Cualquier intento de refactorizar esto ha resultado en la invocacion
//de problemas dimencionales, loops infinitos y un extraño parpadeo en el
//monitor que aun no puedo explicart.
//
// si necesitas cambiar esto, primero reza, luego haz una copia de seguridad,
//y por ultimo... SUERTE.

namespace App\Config;

use PDO;
use PDOException;

class Database {
    private $host = 'localhost';            // Dirección del host (localhost para Docker con puerto expuesto)
    private $port = '3310';                 // Puerto mapeado desde Docker
    private $db_name = 'colombian_coffee';  // Nombre de la base de datos
    private $username = 'root';             // Usuario
    private $password = 'cafe123';          // Contraseña
    private $conn;

    public function connect() {
        $this->conn = null;

        try {
            // DSN = cadena de conexión para PDO
            $dsn = "mysql:host={$this->host};port={$this->port};dbname={$this->db_name};charset=utf8mb4";

            $this->conn = new PDO($dsn, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

            return $this->conn;
        } catch (PDOException $e) {
            // Muestra mensaje en desarrollo (puedes registrarlo en logs en producción)
            die("❌ Error de conexión: " . $e->getMessage());
        }
    }
}

