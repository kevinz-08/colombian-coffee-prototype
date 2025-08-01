<?php

namespace App\Models;

use PDO;
use PDOException;
use App\Config\Database;

require_once __DIR__ . '/../Config/Database.php';

class Variety
{
    private $conn;
    private $table = 'variedades'; // Optional: Make table name a class property

    public function __construct() {
        // Enable PDO to throw exceptions on errors
        $this->conn = (new Database())->connect();
        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    // Get all varieties
    public function getAll() {
        try {
            $stmt = $this->conn->query("SELECT * FROM {$this->table}");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            // Log or handle error
            return ['error' => $e->getMessage()];
        }
    }

    // Get a variety by its ID
    public function getById($id) {
        try {
            $stmt = $this->conn->prepare("SELECT * FROM {$this->table} WHERE id = ?");
            $stmt->execute([$id]);
            return $stmt->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            // Log or handle error
            return ['error' => $e->getMessage()];
        }
    }

    // Create a new variety
    public function create($data) {
        try {
            $sql = "INSERT INTO {$this->table} (nombre_comun, nombre_cientifico, descripcion) VALUES (?, ?, ?)";
            $stmt = $this->conn->prepare($sql);
            $success = $stmt->execute([
                $data['nombre_comun'],
                $data['nombre_cientifico'],
                $data['descripcion']
            ]);
            return $success;
        } catch (PDOException $e) {
            // Log or handle error
            return ['error' => $e->getMessage()];
        }
    }

    // Update a variety
    public function update($id, $data) {
        try {
            $sql = "UPDATE {$this->table} SET nombre_comun = ?, nombre_cientifico = ?, descripcion = ? WHERE id = ?";
            $stmt = $this->conn->prepare($sql);
            $success = $stmt->execute([
                $data['nombre_comun'],
                $data['nombre_cientifico'],
                $data['descripcion'],
                $id
            ]);
            return $success;
        } catch (PDOException $e) {
            // Log or handle error
            return ['error' => $e->getMessage()];
        }
    }

    // Delete a variety
    public function delete($id) {
        try {
            $stmt = $this->conn->prepare("DELETE FROM {$this->table} WHERE id = ?");
            $success = $stmt->execute([$id]);
            return $success;
        } catch (PDOException $e) {
            // Log or handle error
            return ['error' => $e->getMessage()];
        }
    }
}
