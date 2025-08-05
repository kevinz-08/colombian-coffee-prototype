<?php
require_once __DIR__ . '/../vendor/autoload.php';

use App\Config\Database;

try {
    $db = (new Database())->connect();
    echo "✅ Conexión a la base de datos exitosa.<br>";
} catch (PDOException $e) {
    echo "❌ Error al conectar con la base de datos: " . $e->getMessage();
    exit; // Detiene la ejecución si falla
}
$stmt = $db->query("SELECT DATABASE() AS db");
$dbName = $stmt->fetch(PDO::FETCH_ASSOC)['db'];
echo "Estás conectado a la base de datos: $dbName<br>";
// Conexión a la base de datos
$db = (new Database())->connect();

$stmt = $db->query("SHOW TABLES");
$tables = $stmt->fetchAll(PDO::FETCH_COLUMN);
print_r($tables);


$stmt = $db->query("DESCRIBE usuarios");
$columns = $stmt->fetchAll(PDO::FETCH_COLUMN);
print_r($columns);

// Nueva contraseña en texto plano
$newPassword = 'admin123';

// Generar el hash
$hashedPassword = password_hash($newPassword, PASSWORD_DEFAULT);
echo "Hash generado: $hashedPassword<br>";

// Usuario a actualizar
$email = 'admin@cafecolombia.com';

// Ejecutar actualización en la tabla correcta
$sql = "UPDATE usuarios SET password = ? WHERE `email` = ?";
$stmt = $db->prepare($sql);
$success = $stmt->execute([$hashedPassword, $email]);

if ($success) {
    echo "✅ Contraseña actualizada correctamente para $email.";
} else {
    echo "❌ Error al actualizar la contraseña.";
}


