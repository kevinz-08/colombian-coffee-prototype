<?php
session_start();

// Si ya hay una sesión iniciada, redirigir al panel
if (isset($_SESSION['usuario'])) {
    header("Location: /frontend/pages/login.php"); // o el archivo correcto
    exit();
}

// Procesar login
$error = '';
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
        header("Location: /frontend/pages/admin.html"); // <-- redirige al panel si todo está bien
        exit();
    } else {
        $error = "Correo o contraseña incorrectos";
    }
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Iniciar Sesión</title>
    <link rel="stylesheet" href="/frontend/assets/css/login.css">
</head>
<body>
    <div class="background">
        <img src="/frontend/assets/Images/7d9c3508-9d2f-4242-aa48-cbaa665c8fb4.png" alt="">
    </div>
    <div class="container">
        <div class="container-form">
            <form class="sign-in" method="POST" action="">
                <h2>Iniciar Sesión</h2>
                <div class="social-networks">
                    <ion-icon name="logo-twitch"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-tiktok"></ion-icon>
                </div>
                <span>Use su correo y contraseña</span>

                <?php if (!empty($error)): ?>
                    <p style="color: red; font-weight: bold;"><?= htmlspecialchars($error) ?></p>
                <?php endif; ?>

                <div class="container-input">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="text" name="email" placeholder="Email" required>
                </div>
                <div class="container-input">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" name="password" placeholder="Password" required>
                </div>
                <a href="#">¿Olvidaste tu contraseña?</a>
                <button type="submit" class="button1">INICIAR SESIÓN</button>
            </form>
        </div>

        <div class="container-form">
            <form class="sign-up" method="POST" action="/ruta/registro.php">
                <h2>Registrarse</h2>
                <div class="social-networks">
                    <ion-icon name="logo-twitch"></ion-icon>
                    <ion-icon name="logo-twitter"></ion-icon>
                    <ion-icon name="logo-instagram"></ion-icon>
                    <ion-icon name="logo-tiktok"></ion-icon>
                </div>
                <span>Use su correo electrónico para registrarse</span>
                <div class="container-input">
                    <ion-icon name="person-outline"></ion-icon>
                    <input type="text" name="nombre" placeholder="Nombre" required>
                </div>
                <div class="container-input">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input type="email" name="email" placeholder="Correo electrónico" required>
                </div>
                <div class="container-input">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" name="password" placeholder="Password" required>
                </div>
                <button class="button2" type="submit">REGISTRARSE</button>
            </form>
        </div>

        <div class="container-welcome">
            <div class="welcome-sign-up welcome">
                <h3>¡Bienvenido!</h3>
                <p>Ingrese sus datos personales para usar todas las funciones del sitio</p>
                <button class="button" id="btn-sign-up">Registrarse</button>
            </div>
            <div class="welcome-sign-in welcome">
                <h3>¡Hola!</h3>
                <p>Regístrese con sus datos personales para usar todas las funciones del sitio</p>
                <button class="button" id="btn-sign-in">Iniciar Sesión</button>
            </div>
        </div>
    </div>

    <script src="/frontend/assets/js/login.js"></script>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>
