<?php

namespace App\Domain\Models;

use PDO;
use PDOException;
use App\Config\Database;

class Porte
{
    private $conn;
    private $table = 'porte';

    public function __construct() {
        $this->conn = (new Database())->connect();
    }

    public function getAll() {
        try {
            $stmt = $this->conn->query("SELECT * FROM {$this->table}");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function getById($id) {
        try {
            $stmt = $this->conn->prepare("SELECT * FROM {$this->table} WHERE id = ?");
            $stmt->execute([$id]);
            return $stmt->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function create($data) {
        try {
            if (!isset($data['nombre'])) {
                return ['error' => 'Falta el campo nombre'];
            }
            $stmt = $this->conn->prepare("INSERT INTO {$this->table} (nombre) VALUES (?)");
            return $stmt->execute([$data['nombre']]);
        } catch (PDOException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function update($id, $data) {
        try {
            $stmt = $this->conn->prepare("UPDATE {$this->table} SET nombre = ? WHERE id = ?");
            return $stmt->execute([$data['nombre'], $id]);
        } catch (PDOException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    public function delete($id) {
        try {
            $stmt = $this->conn->prepare("DELETE FROM {$this->table} WHERE id = ?");
            return $stmt->execute([$id]);
        } catch (PDOException $e) {
            return ['error' => $e->getMessage()];
        }
    }
}
