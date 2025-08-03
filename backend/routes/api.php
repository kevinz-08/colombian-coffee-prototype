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
use App\Controllers\PorteController;
use App\Controllers\TamanoGranoController;
use App\Controllers\RendimientoController;
use App\Controllers\GrupoGeneticoController;

return function (App $app) {
    $app->group('/api', function (RouteCollectorProxy $group) {
        // Variedades
        $group->get('/variedades', [VarietyController::class, 'index']);
        $group->get('/variedades/{id}', [VarietyController::class, 'show']);
        $group->post('/variedades', [VarietyController::class, 'store']);
        $group->put('/variedades/{id}', [VarietyController::class, 'update']);
        $group->delete('/variedades/{id}', [VarietyController::class, 'destroy']);

        // Porte
        $group->get('/porte', [PorteController::class, 'index']);
        $group->get('/porte/{id}', [PorteController::class, 'show']);
        $group->post('/porte', [PorteController::class, 'store']);
        $group->put('/porte/{id}', [PorteController::class, 'update']);
        $group->delete('/porte/{id}', [PorteController::class, 'destroy']);

        // Tamaño grano
        $group->get('/tamano_grano', [TamanoGranoController::class, 'index']);
        $group->get('/tamano_grano/{id}', [TamanoGranoController::class, 'show']);
        $group->post('/tamano_grano', [TamanoGranoController::class, 'store']);
        $group->put('/tamano_grano/{id}', [TamanoGranoController::class, 'update']);
        $group->delete('/tamano_grano/{id}', [TamanoGranoController::class, 'destroy']);

        // Rendimiento
        $group->get('/rendimiento', [RendimientoController::class, 'index']);
        $group->get('/rendimiento/{id}', [RendimientoController::class, 'show']);
        $group->post('/rendimiento', [RendimientoController::class, 'store']);
        $group->put('/rendimiento/{id}', [RendimientoController::class, 'update']);
        $group->delete('/rendimiento/{id}', [RendimientoController::class, 'destroy']);

        // Grupo Genético
        $group->get('/grupo_genetico', [GrupoGeneticoController::class, 'index']);
        $group->get('/grupo_genetico/{id}', [GrupoGeneticoController::class, 'show']);
        $group->post('/grupo_genetico', [GrupoGeneticoController::class, 'store']);
        $group->put('/grupo_genetico/{id}', [GrupoGeneticoController::class, 'update']);
        $group->delete('/grupo_genetico/{id}', [GrupoGeneticoController::class, 'destroy']);
    });
};
