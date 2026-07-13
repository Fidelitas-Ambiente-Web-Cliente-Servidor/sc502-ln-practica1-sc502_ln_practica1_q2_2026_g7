<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contacto | Academia NovaTech</title>
    <link rel="stylesheet" href="css/contacto.css">
</head>
<body>

    <header>
        <nav>
            <h1>Academia NovaTech</h1>
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a class="activo" href="contacto.html">Contacto</a></li>
            </ul>
        </nav>
    </header>

    <main>

        <section id="encabezado">
            <h2>Contáctanos</h2>

            <p>
                Si deseas recibir más información, completa el siguiente formulario y nuestro equipo te responderá lo antes posible.
            </p>

            <div class="formulario">

                <h3>Formulario de Contacto</h3><br>

                <form>

                    <label for="nombre">Nombre Completo</label>
                    <input type="text" id="nombre" placeholder="Ingrese su nombre completo"><br>

                    <br>

                    <label for="correo">Correo Electrónico</label>
                    <input type="email" id="correo" placeholder="ejemplo@correo.com"><br>

                    <br>

                    <label for="telefono">Teléfono</label>
                    <input type="tel" id="telefono" placeholder="88888888"><br>

                    <br>

                    <label for="asunto">Asunto</label>
                    <input type="text" id="asunto" placeholder="Ingrese el asunto">
                    <br>

                    <label for="mensaje">Mensaje</label>
                    <textarea id="mensaje" rows="5" placeholder="Escribe tu mensaje aquí..."></textarea>
                    <button type="submit">Enviar</button><br>
                    <br>

                </form>

            </div>
            <br>

            <div class="info-contacto">

                <h3>Nuestra Información de Contacto</h3><br>

                <p><strong>Dirección:</strong><br>
                Avenida Central, San José, Costa Rica.</p>

                <p><strong>Teléfono:</strong><br>
                +506 2222-1234</p>

                <p><strong>WhatsApp:</strong><br>
                +506 8888-5678</p>

                <p><strong>Correo:</strong><br>
                contacto@novatech.ac.cr</p>

            </div>

        </section>

        <section class="mapa">

            <h2>Nuestra Ubicación</h2>
            <img src="img/ubicacionContacto.png" alt="Ubicación de Academia NovaTech en San José, Costa Rica">

        </section>

    </main>

    <footer>
        <p>Academia NovaTech</p>
        <p>Facebook | Instagram | TikTok</p>
    </footer>

    <script src="js/contacto.js"></script>

</body>
</html>

