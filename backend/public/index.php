<?php

require __DIR__ . '/../vendor/autoload.php';

use Slim\Factory\AppFactory;

$app = AppFactory::create();

// Cargar rutas separadas
(require __DIR__ . '/../app/Routes/api.php')($app);

$app->run();
