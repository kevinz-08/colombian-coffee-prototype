<?php
require_once __DIR__ . '/../../../vendor/autoload.php';

use App\Config\Database;
use App\Auth\Auth;

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Muestra lo que está llegando por POST
    echo "<pre>";
    print_r($_POST);
    echo "</pre>";require_once __DIR__ . '/../../../vendor/autoload.php';

    $correo = $_POST['email'] ?? null;
    $contrasena = $_POST['password'] ?? null;

    if (!$correo || !$contrasena) {
        echo "Faltan campos.";
        exit;
    }

    $conn = (new Database())->connect();
    $stmt = $conn->prepare("SELECT * FROM usuarios WHERE correo = ?");
    $stmt->execute([$correo]);
    $usuario = $stmt->fetch(PDO::FETCH_ASSOC);

    if (!$usuario) {
        echo "Usuario no encontrado en la base de datos.";
        exit;
    }

    echo "<p>Usuario encontrado: " . htmlspecialchars($usuario['nombre']) . "</p>";

    // Mostrar la contraseña recibida y la de la BD
    echo "<p>Contraseña escrita: " . htmlspecialchars($contrasena) . "</p>";
    echo "<p>Hash en la BD: " . htmlspecialchars($usuario['contrasena']) . "</p>";

    if (password_verify($contrasena, $usuario['contrasena'])) {
        echo "¡Login exitoso!";
        // Auth::login($usuario);
        // header('Location: /frontend/admin/variedades/index.php');
        // exit;
    } else {
        echo "Contraseña incorrecta.";
    }
}
