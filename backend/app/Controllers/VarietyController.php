<?php

namespace App\Controllers;

use App\Models\Variety;
require_once __DIR__ . '/../Models/Variety.php';

class VarietyController
{
    public function index() {
        $variety = new Variety();
        $data = $variety->getAll();
        echo json_encode($data);
    }

    public function show($id) {
        $variety = new Variety();
        $data = $variety->getById($id);
        echo json_encode($data);
    }

    public function store() {
        $input = json_decode(file_get_contents('php://input'), true);
        $variety = new Variety();
        $success = $variety->create($input);
        echo json_encode(['success' => $success]);
    }

    public function update($id) {
        $input = json_decode(file_get_contents('php://input'), true);
        $variety = new Variety();
        $success = $variety->update($id, $input);
        echo json_encode(['success' => $success]);
    }

    public function destroy($id) {
        $variety = new Variety();
        $success = $variety->delete($id);
        echo json_encode(['success' => $success]);
    }
}
