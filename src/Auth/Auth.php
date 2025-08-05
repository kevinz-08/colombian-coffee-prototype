<?php
namespace App\Auth;

class Auth
{
    public static function login($usuario)
    {
        session_start();
        $_SESSION['usuario'] = $usuario;
    }

    public static function logout()
    {
        session_start();
        session_destroy();
    }

    public static function usuario()
    {
        session_start();
        return $_SESSION['usuario'] ?? null;
    }

    public static function check()
    {
        session_start();
        return isset($_SESSION['usuario']);
    }
}
