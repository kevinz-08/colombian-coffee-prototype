<?php

namespace App\Domain\Models;

use PDO;
use PDOException;
use App\Config\Database;

class GrupoGenetico
{
    private $conn;
    private $table = 'grupo_genetico';

    public function __construct() {
        $this->conn = (new Database())->connect();
    }

    public function getAll() {
        $stmt = $this->conn->query("SELECT * FROM {$this->table}");
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getById($id) {
        $stmt = $this->conn->prepare("SELECT * FROM {$this->table} WHERE id = ?");
        $stmt->execute([$id]);
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }

    public function create($data) {
        $stmt = $this->conn->prepare("INSERT INTO {$this->table} (nombre) VALUES (?)");
        return $stmt->execute([$data['nombre']]);
    }

    public function update($id, $data) {
        $stmt = $this->conn->prepare("UPDATE {$this->table} SET nombre = ? WHERE id = ?");
        return $stmt->execute([$data['nombre'], $id]);
    }

    public function delete($id) {
        $stmt = $this->conn->prepare("DELETE FROM {$this->table} WHERE id = ?");
        return $stmt->execute([$id]);
    }
}
