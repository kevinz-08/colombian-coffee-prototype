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
namespace App\Controllers;

use App\Domain\Models\Variety;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class VarietyController
{
    // Obtener todas las variedades
    public function index(Request $request, Response $response, array $args): Response {
        $variety = new Variety();
        $data = $variety->getAll();

        $response->getBody()->write(json_encode($data));
        return $response->withHeader('Content-Type', 'application/json');
    }

    // Obtener una variedad por ID
    public function show(Request $request, Response $response, array $args): Response {
        $id = $args['id'];
        $variety = new Variety();
        $data = $variety->getById($id);

        if ($data) {
            $response->getBody()->write(json_encode($data));
            return $response->withHeader('Content-Type', 'application/json');
        } else {
            $response->getBody()->write(json_encode(['error' => 'Variedad no encontrada']));
            return $response->withStatus(404)->withHeader('Content-Type', 'application/json');
        }
    }

    // Crear una nueva variedad
    public function store(Request $request, Response $response, array $args): Response {
        $input = $request->getParsedBody();
        $variety = new Variety();
        $success = $variety->create($input);

        $response->getBody()->write(json_encode(['success' => $success]));
        return $response->withHeader('Content-Type', 'application/json');
    }

    // Actualizar una variedad existente
    public function update(Request $request, Response $response, array $args): Response {
        $id = $args['id'];
        $input = $request->getParsedBody();
        $variety = new Variety();
        $success = $variety->update($id, $input);

        $response->getBody()->write(json_encode(['success' => $success]));
        return $response->withHeader('Content-Type', 'application/json');
    }

    // Eliminar una variedad
    public function destroy(Request $request, Response $response, array $args): Response {
        $id = $args['id'];
        $variety = new Variety();
        $success = $variety->delete($id);

        $response->getBody()->write(json_encode(['success' => $success]));
        return $response->withHeader('Content-Type', 'application/json');
    }
}
