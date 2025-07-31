<?php

use App\Controllers\VarietyController;

require_once __DIR__ . '/../app/Controllers/VarietyController.php';

$uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$method = $_SERVER['REQUEST_METHOD'];

$controller = new VarietyController();

switch ($uri) {
    case '/variedades':
        if ($method === 'GET') {
            $controller->index();
        } elseif ($method === 'POST') {
            $controller->store();
        }
        break;

    case (preg_match('/\/variedades\/(\d+)/', $uri, $matches) ? true : false):
        $id = $matches[1];
        if ($method === 'GET') {
            $controller->show($id);
        } elseif ($method === 'PUT') {
            $controller->update($id);
        } elseif ($method === 'DELETE') {
            $controller->destroy($id);
        }
        break;

    default:
        http_response_code(404);
        echo json_encode(['error' => 'Ruta no encontrada']);
        break;
}
