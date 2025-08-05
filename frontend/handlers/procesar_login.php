<?php
require_once __DIR__ . '/../../backend/vendor/autoload.php';

use App\Config\Database;
use App\Auth\Auth;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $correo = $_POST['email'];
    $contrasena = $_POST['password'];

    $conn = (new Database())->connect();
    $stmt = $conn->prepare("SELECT * FROM usuarios WHERE correo = ?");
    $stmt->execute([$correo]);
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($usuario && password_verify($contrasena, $usuario['contrasena'])) {
        Auth::login($usuario); // Este método deberías tenerlo en una clase Auth para iniciar sesión
        header('Location: /public/admin/dashboard.php');
        exit;
    } else {
        echo "Credenciales inválidas";
    }
}
