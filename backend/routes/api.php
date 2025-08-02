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
use Slim\App;
use Slim\Routing\RouteCollectorProxy;
use App\Controllers\VarietyController;

return function (App $app) {
    $app->group('/api', function (RouteCollectorProxy $group) {
        $group->get('/variedades', [VarietyController::class, 'index']);
        $group->get('/variedades/{id}', [VarietyController::class, 'show']);
        $group->post('/variedades', [VarietyController::class, 'store']);
        $group->put('/variedades/{id}', [VarietyController::class, 'update']);
        $group->delete('/variedades/{id}', [VarietyController::class, 'destroy']);
    });
};
