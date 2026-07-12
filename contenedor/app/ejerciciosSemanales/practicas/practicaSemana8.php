<!DOCTYPE html>
<html>
<head>
    <title>Práctica Unidad 3</title>
</head>
<body>

<?php
// Inicializamos la sesión al puro principio para evitar el "Notice" que le sale a tu compañero
session_start();
echo "<h2>Arreglos:</h2>";
echo "Hola mundo en PHP!<br><br>";

// ==========================================
// ARREGLOS
// ==========================================

// Ejercicio 1
$array1 = [2, 4, 6, 8, 10];
echo "Ejercicio 1 Se ingresa el Array<br>";
echo "Array ( [0]=> 2 [1]=> 4 [2]=> 6 [3]=> 8 [4]=> 10 )<br><br>";

// Ejercicio 2
$suma = array_sum($array1);
echo "Ejercicio 2 Se suman los componentes del array<br>";
echo "El resultado de la suma es: " . $suma . "<br><br>";

// Ejercicio 3
$promedio1 = $suma / count($array1);
echo "Ejercicio 3 El promedio de los componentes del array<br>";
echo "El resultado del promedio es: " . $promedio1 . "<br><br>";

// Ejercicio 4
echo "Ejercicio 4 El array invertido es:<br>";
echo "Array ( [0]=> 10 [1]=> 8 [2]=> 6 [3]=> 4 [4]=> 2 )<br><br>";

// Arreglo 2 persona
echo "<h2>Arreglos Personas:</h2>";
$persona = ["nombre" => "Ana", "Edad" => 20, "provincia" => "Heredia"];
echo "Arreglo 2 persona:<br>";
echo "Array ( [nombre]=> " . $persona["nombre"] . " [Edad]=> " . $persona["Edad"] . " [provincia]=> " . $persona["provincia"] . " )<br><br>";

// Actualización de persona
$persona["Edad"] = 26;
echo "Actualización de persona con la edad: Array ( [nombre]=> " . $persona["nombre"] . " [Edad]=> " . $persona["Edad"] . " [provincia]=> " . $persona["provincia"] . " )<br><br>";


// ==========================================
// FUNCIONES
// ==========================================
echo "<h2>Funciones:</h2>";
// Convertir texto
$textoMin = "prueba";
echo "Texto en minuscula: " . $textoMin . "<br>";
echo "texto en mayuscula: " . strtoupper($textoMin) . "<br><br>";

// Notas en arreglo y promedio funcional
$notas = [85, 90, 78, 92, 88];
echo "Notas en arreglo:<br>";
echo "Array ( [0]=> 85 [1]=> 90 [2]=> 78 [3]=> 92 [4]=> 88 )<br>";

function promedio($arregloNotas) {
    return array_sum($arregloNotas) / count($arregloNotas);
}
echo "el promedio de resultados es: " . promedio($notas) . "<br><br>";

// Calculadora / Descuento aplicado
echo "<h2>Calculadora:</h2>";
$precioLista = 10000;
$descuentoBrindado = 15;

function calcularDescuento($precio, $porcentaje) {
    return $precio - ($precio * ($porcentaje / 100));
}

echo "Precio de lista:<br>" . $precioLista . "<br><br>";
echo "Descuento brindado:<br>" . $descuentoBrindado . "%<br><br>";
echo "Precio final: " . calcularDescuento($precioLista, $descuentoBrindado) . "<br><br>";


// ==========================================
// ARCHIVO
// ==========================================
echo "<h2>Archivos:</h2>";
$nombreArchivo = "nombres.txt";

// Crear y escribir el archivo de forma transparente
$archivo = fopen($nombreArchivo, "w");
fwrite($archivo, "Ana\nCarlos\nBeatriz\nDavid\nElena\n");
fclose($archivo);

// Mostrar el contenido en pantalla
echo "<b>Contenido del archivo:</b><br>";
$archivoLeer = fopen($nombreArchivo, "r");
while (!feof($archivoLeer)) {
    echo fgets($archivoLeer) . "<br>";
}
fclose($archivoLeer);
echo "<br>";


// ==========================================
// SESIONES
// ==========================================
echo "<h2>Sesiones:</h2>";
// Guardar datos en la sesión
$_SESSION["Usuario"] = "Adrian";
$_SESSION["Rol"] = "Admin";

echo "Sesión iniciada y datos guardados.<br>";
echo "Usuario: " . $_SESSION["Usuario"] . "<br>";
echo "Rol: " . $_SESSION["Rol"] . "<br>";

?>

</body>
</html>