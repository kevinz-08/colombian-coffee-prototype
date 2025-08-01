<?php

use Slim\App;
use App\Controllers\VarietyController;

return function (App $app) {
    $app->group('/api', function ($group) {
        // Obtener todas las variedades
        $group->get('/variedades', [VarietyController::class, 'index']);

        // Obtener una variedad por ID
        $group->get('/variedades/{id}', [VarietyController::class, 'show']);

        // Crear una nueva variedad
        $group->post('/variedades', [VarietyController::class, 'store']);

        // Actualizar una variedad por ID
        $group->put('/variedades/{id}', [VarietyController::class, 'update']);

        // Eliminar una variedad por ID
        $group->delete('/variedades/{id}', [VarietyController::class, 'destroy']);
    });
};
