<?php

namespace App\Controllers;

use App\Domain\Models\GrupoGenetico;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class GrupoGeneticoController
{
    public function index(Request $request, Response $response, array $args): Response {
        $model = new GrupoGenetico();
        $data = $model->getAll();
        $response->getBody()->write(json_encode($data));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function show(Request $request, Response $response, array $args): Response {
        $model = new GrupoGenetico();
        $data = $model->getById($args['id']);
        $response->getBody()->write(json_encode($data));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function store(Request $request, Response $response, array $args): Response {
        $input = $request->getParsedBody();
        $model = new GrupoGenetico();
        $success = $model->create($input);
        $response->getBody()->write(json_encode(['success' => $success]));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function update(Request $request, Response $response, array $args): Response {
        $input = $request->getParsedBody();
        $model = new GrupoGenetico();
        $success = $model->update($args['id'], $input);
        $response->getBody()->write(json_encode(['success' => $success]));
        return $response->withHeader('Content-Type', 'application/json');
    }

    public function destroy(Request $request, Response $response, array $args): Response {
        $model = new GrupoGenetico();
        $success = $model->delete($args['id']);
        $response->getBody()->write(json_encode(['success' => $success]));
        return $response->withHeader('Content-Type', 'application/json');
    }
}
