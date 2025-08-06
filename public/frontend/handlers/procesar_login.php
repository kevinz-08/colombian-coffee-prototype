<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $correo = $_POST['email'] ?? '';
    $contrasena = $_POST['password'] ?? '';

    require_once __DIR__ . '/../../../src/config/Database.php';

    $db = (new \App\Config\Database())->connect();

    $stmt = $db->prepare("SELECT * FROM usuarios WHERE email = ?");
    $stmt->execute([$correo]);
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($usuario && password_verify($contrasena, $usuario['password'])) {
        $_SESSION['usuario'] = $usuario;
        header("Location: /frontend/pages/admin.html");
        exit();
    } else {
        header("Location: /frontend/pages/login.php?error=1");
        exit();
    }
}
?>
