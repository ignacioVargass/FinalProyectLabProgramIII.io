<?php
include 'conexion.php';

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['addBook'])) {
    // Capturar datos del formulario
    $title_id = $_POST['title_id'];
    $title = $_POST['title'];
    $pub_id = $_POST['pub_id'];
    $price = $_POST['price'];
    $pubdate = $_POST['pubdate'];

    // Insertar nuevo registro
    $stmt = $conn->prepare("INSERT INTO titles (title_id, title, pub_id, price, pubdate) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssds", $title_id, $title, $pub_id, $price, $pubdate);

    if ($stmt->execute()) {
        echo "<p>Libro agregado exitosamente.</p>";
    } else {
        echo "<p>Error al agregar el libro: " . $stmt->error . "</p>";
    }

    $stmt->close();
    $conn->close();

    // Redirigir para evitar re-envío del formulario
    header("Location: " . $_SERVER['PHP_SELF']);
    exit;
}
?>
