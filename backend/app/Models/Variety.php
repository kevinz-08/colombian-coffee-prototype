<?php

namespace App\Models;

use PDO;
use App\Config\Database;
require_once __DIR__ . '/../Config/Database.php';

class Variety
{
    private $conn;

    public function __construct() {
        $this->conn = (new Database())->connect();
    }

    public function getAll() {
        $stmt = $this->conn->query("SELECT * FROM variedades");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getById($id) {
        $stmt = $this->conn->prepare("SELECT * FROM variedades WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function create($data) {
        $sql = "INSERT INTO variedades (nombre_comun, nombre_cientifico, descripcion) VALUES (?, ?, ?)";
        $stmt = $this->conn->prepare($sql);
        return $stmt->execute([
            $data['nombre_comun'],
            $data['nombre_cientifico'],
            $data['descripcion']
        ]);
    }

    public function update($id, $data) {
        $sql = "UPDATE variedades SET nombre_comun = ?, nombre_cientifico = ?, descripcion = ? WHERE id = ?";
        $stmt = $this->conn->prepare($sql);
        return $stmt->execute([
            $data['nombre_comun'],
            $data['nombre_cientifico'],
            $data['descripcion'],
            $id
        ]);
    }

    public function delete($id) {
        $stmt = $this->conn->prepare("DELETE FROM variedades WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
