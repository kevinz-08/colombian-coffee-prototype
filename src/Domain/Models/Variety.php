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

namespace App\Domain\Models;

use PDO;
use PDOException;
use App\Config\Database;

class Variety
{
    private $conn;
    private $table = 'variedades';

    public function __construct() {
        $this->conn = (new Database())->connect();
        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    // Obtener todas las variedades
    public function getAll() {
        try {
            $stmt = $this->conn->query("SELECT * FROM {$this->table}");
            return $stmt->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    // Obtener una variedad por ID
    public function getById($id) {
        try {
            $stmt = $this->conn->prepare("SELECT * FROM {$this->table} WHERE id = ?");
            $stmt->execute([$id]);
            return $stmt->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    // Crear una nueva variedad
    public function create($data) {
        try {
            $required = [
                'nombre_comun',
                'nombre_cientifico',
                'descripcion',
                'altitud_min',
                'altitud_max',
                'tiempo_cosecha',
                'maduracion',
                'nutricion',
                'densidad_siembra',
                'calidad_grano',
                'id_porte',
                'id_tamano_grano',
                'id_rendimiento',
                'id_grupo_genetico'
            ];

            foreach ($required as $field) {
                if (!isset($data[$field])) {
                    return ['error' => "Falta el campo obligatorio: $field"];
                }
            }

            $sql = "INSERT INTO {$this->table} 
                (nombre_comun, nombre_cientifico, descripcion, altitud_min, altitud_max, 
                 tiempo_cosecha, maduracion, nutricion, densidad_siembra, calidad_grano, 
                 id_porte, id_tamano_grano, id_rendimiento, id_grupo_genetico)
                VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

            $stmt = $this->conn->prepare($sql);

            $success = $stmt->execute([
                $data['nombre_comun'],
                $data['nombre_cientifico'],
                $data['descripcion'],
                $data['altitud_min'],
                $data['altitud_max'],
                $data['tiempo_cosecha'],
                $data['maduracion'],
                $data['nutricion'],
                $data['densidad_siembra'],
                $data['calidad_grano'],
                $data['id_porte'],
                $data['id_tamano_grano'],
                $data['id_rendimiento'],
                $data['id_grupo_genetico']
            ]);

            return $success;
        } catch (PDOException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    // Actualizar una variedad
    public function update($id, $data) {
        try {
            $sql = "UPDATE {$this->table} SET 
                nombre_comun = ?, 
                nombre_cientifico = ?, 
                descripcion = ?, 
                altitud_min = ?, 
                altitud_max = ?, 
                tiempo_cosecha = ?, 
                maduracion = ?, 
                nutricion = ?, 
                densidad_siembra = ?, 
                calidad_grano = ?, 
                id_porte = ?, 
                id_tamano_grano = ?, 
                id_rendimiento = ?, 
                id_grupo_genetico = ? 
                WHERE id = ?";

            $stmt = $this->conn->prepare($sql);

            $success = $stmt->execute([
                $data['nombre_comun'],
                $data['nombre_cientifico'],
                $data['descripcion'],
                $data['altitud_min'],
                $data['altitud_max'],
                $data['tiempo_cosecha'],
                $data['maduracion'],
                $data['nutricion'],
                $data['densidad_siembra'],
                $data['calidad_grano'],
                $data['id_porte'],
                $data['id_tamano_grano'],
                $data['id_rendimiento'],
                $data['id_grupo_genetico'],
                $id
            ]);

            return $success;
        } catch (PDOException $e) {
            return ['error' => $e->getMessage()];
        }
    }

    // Eliminar una variedad
    public function delete($id) {
        try {
            $stmt = $this->conn->prepare("DELETE FROM {$this->table} WHERE id = ?");
            $success = $stmt->execute([$id]);
            return $success;
        } catch (PDOException $e) {
            return ['error' => $e->getMessage()];
        }
    }
}
