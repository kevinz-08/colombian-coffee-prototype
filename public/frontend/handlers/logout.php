<?php 
require_once __DIR__ . '/../../backend/vendor/autoload.php';


use App\Auth\Auth;

Auth::logout();                    // Elimina la sesión
header('Location: login.php');    // Redirige al login
exit;
