<!DOCTYPE html>
<html lang="es">
    <head>
        <title>Practica Semana 6 PHP </title>
    </head>
    <body>
        <?php
        const SALTO ="<br>";

        echo "<h2>1. Declaracion de Variables</h2>";

        $nombre = "Luis David";
        $apellido = "Averruz";
        $direccion = "La Fortuna, San Carlos";
        $hobbie = "Juegos en el Movil";
        $colorFavorito = "Verde";
        $leGustaLeer = false;

        echo "<ul>";
        echo "<li><b>Nombre:</b> $nombre</li>";
        echo "<li><b>Apellido:</b> $apellido</li>";
        echo "<li><b>Dirección:</b> $direccion</li>";
        echo "<li><b>Hobbie:</b> $hobbie</li>";
        echo "<li><b>Color Favorito:</b> $colorFavorito</li>";
        echo "<li><b>¿Le gusta leer?:</b> " . ($leGustaLeer ? "Sí" : "No") . "</li>";
        echo "</ul>";

        echo "<hr>";

        echo "<h2>2. Condicionales</h2>";
        $edadPersona = 20;
            if ($edadPersona >= 18) {
                echo "La persona es mayor de edad." . SALTO;
            } else {
                echo "La persona es menor de edad." . SALTO;
            }
            echo SALTO;
           
        $nota = 60;
            if ($nota > 90) {
                echo "Su nota es $nota: Calificación A" . SALTO;
            } elseif ($nota >= 70 && $nota <= 90) {
                echo "Su nota es $nota: Calificación B" . SALTO;
            } else {
                echo "Su nota es $nota: Calificación C" . SALTO;
            }
            echo SALTO;

        $operador = "*";
            $numero1 = 10;
            $numero2 = 5;

            switch ($operador) {
                case "+":
                    $resultado = $numero1 + $numero2;
                    echo "Operación: $numero1 + $numero2 = $resultado" . SALTO;
                    break;
                case "-":
                    $resultado = $numero1 - $numero2;
                    echo "Operación: $numero1 - $numero2 = $resultado" . SALTO;
                    break;
                case "*":
                    $resultado = $numero1 * $numero2;
                    echo "Operación: $numero1 * $numero2 = $resultado" . SALTO;
                    break;
                case "/":
                    if ($numero2 != 0) {
                        $resultado = $numero1 / $numero2;
                        echo "Operación: $numero1 / $numero2 = $resultado" . SALTO;
                    } else {
                        echo "Error: No se puede dividir entre cero." . SALTO;
                    }
                    break;
                default:
                    echo "Operador no válido." . SALTO;
                    break;
            }

            echo "<hr>";

            echo "<h2>3. Operadores</h2>";

            $n1 = 15;
            $n2 = 75;
            $n3 = 40;

                if ($n1 >= $n2 && $n1 >= $n3) {
                    echo "El número mayor de los tres es: $n1" . SALTO;
                } elseif ($n2 >= $n1 && $n2 >= $n3) {
                    echo "El número mayor de los tres es: $n2" . SALTO;
                } else {
                    echo "El número mayor de los tres es: $n3" . SALTO;
                }
                echo SALTO;

            $edadEvaluar = 66;
                if ($edadEvaluar >= 0 && $edadEvaluar <= 12) {
                    echo "Con $edadEvaluar años, la etapa es: Niños" . SALTO;
                } elseif ($edadEvaluar >= 13 && $edadEvaluar <= 17) {
                    echo "Con $edadEvaluar años, la etapa es: Adolescente" . SALTO;
                } elseif ($edadEvaluar >= 18 && $edadEvaluar <= 64) {
                    echo "Con $edadEvaluar años, la etapa es: Adulto" . SALTO;
                } else {
                    echo "Con $edadEvaluar años, la etapa es: Adulto Mayor" . SALTO;
                }
                echo SALTO;

            $pass1 = "Admin123";
            $pass2 = "Admin123";

                if ($pass1 === $pass2) {
                    echo "Las contraseñas coinciden de forma segura." . SALTO;
                } else {
                    echo "Las contraseñas no coinciden." . SALTO;
                }

                echo "<hr>";

            echo "<b>Pares del 1 al 20 (con while):</b>" . SALTO;
                $contadorPares = 0;
                $i = 1;
                while ($i <= 20) {
                    if ($i % 2 == 0) {
                        echo $i . " ";
                        $contadorPares++;
                    }
                    $i++;
                }
                echo SALTO . "Total de números pares encontrados: $contadorPares" . SALTO . SALTO;

                echo "<b>Tabla del 7 (con for):</b>" . SALTO;
                for ($j = 1; $j <= 10; $j++) {
                    echo "7 x $j = " . (7 * $j) . SALTO;
                }
                echo SALTO;

                echo "<b>Cuenta regresiva del 20 al 0 (con do-while):</b>" . SALTO;
                $cuentaRegresiva = 20;
                do {
                    echo $cuentaRegresiva . " ";
                    $cuentaRegresiva--;
                } while ($cuentaRegresiva >= 0);
                echo SALTO;

        ?>
    </body>
</html>