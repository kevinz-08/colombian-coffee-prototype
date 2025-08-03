<?php

namespace App\Controllers;

use App\Domain\Models\Porte;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class PorteController
{
    public function index(Request $request, Response $response, array $args): Response {
        $porte = new Porte();
        $data = $porte->getAll();
        $response->getBody()->write(json_encode($data));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function show(Request $request, Response $response, array $args): Response {
        $porte = new Porte();
        $data = $porte->getById($args['id']);
        $response->getBody()->write(json_encode($data));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function store(Request $request, Response $response, array $args): Response {
        $input = $request->getParsedBody();
        $porte = new Porte();
        $result = $porte->create($input);
        $response->getBody()->write(json_encode(['success' => $result]));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function update(Request $request, Response $response, array $args): Response {
        $id = $args['id'];
        $input = $request->getParsedBody();
        $porte = new Porte();
        $result = $porte->update($id, $input);
        $response->getBody()->write(json_encode(['success' => $result]));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function destroy(Request $request, Response $response, array $args): Response {
        $porte = new Porte();
        $result = $porte->delete($args['id']);
        $response->getBody()->write(json_encode(['success' => $result]));
        return $response->withHeader('Content-Type', 'application/json');
    }
}
