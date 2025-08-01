<?php

namespace App\Controllers;

use App\Models\Variety;
use Exception;

require_once __DIR__ . '/../Models/Variety.php';

class VarietyController
{
    public function index() {
        try {
            $variety = new Variety();
            $data = $variety->getAll();
            http_response_code(200);
            echo json_encode($data);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function show($id) {
        try {
            $variety = new Variety();
            $data = $variety->getById($id);

            if (!$data) {
                http_response_code(404);
                echo json_encode(['error' => 'Variety not found']);
                return;
            }

            http_response_code(200);
            echo json_encode($data);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function store() {
        $input = json_decode(file_get_contents('php://input'), true);

        // Optional: Add validation
        if (!isset($input['name']) || empty($input['name'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Name is required']);
            return;
        }

        try {
            $variety = new Variety();
            $success = $variety->create($input);

            if ($success) {
                http_response_code(201); // Created
                echo json_encode(['success' => true]);
            } else {
                http_response_code(500);
                echo json_encode(['error' => 'Failed to create variety']);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function update($id) {
        $input = json_decode(file_get_contents('php://input'), true);

        // Optional: Add validation
        if (!isset($input['name']) || empty($input['name'])) {
            http_response_code(400);
            echo json_encode(['error' => 'Name is required']);
            return;
        }

        try {
            $variety = new Variety();
            $success = $variety->update($id, $input);

            if ($success) {
                http_response_code(200);
                echo json_encode(['success' => true]);
            } else {
                http_response_code(404);
                echo json_encode(['error' => 'Variety not found']);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }

    public function destroy($id) {
        try {
            $variety = new Variety();
            $success = $variety->delete($id);

            if ($success) {
                http_response_code(200);
                echo json_encode(['success' => true]);
            } else {
                http_response_code(404);
                echo json_encode(['error' => 'Variety not found']);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode(['error' => $e->getMessage()]);
        }
    }
}