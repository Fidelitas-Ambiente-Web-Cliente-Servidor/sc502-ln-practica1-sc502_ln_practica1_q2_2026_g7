
<?php require __DIR__ . '/layout/header.php'; ?>

    <main>

        <section id="encabezado">
            <h2>Contáctanos</h2>
            <p>
                Si deseas recibir más información, completa el siguiente formulario y nuestro equipo te responderá lo antes posible.
            </p>

            <div class="formulario">

                <h3>Formulario de Contacto</h3>
                <br>

                <form action="../controllers/ContactoController.php" method="POST">

                    <label for="nombre">Nombre Completo</label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        placeholder="Ingrese su nombre completo"
                        required>
                    <br><br>

                    <label for="correo">Correo Electrónico</label>
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        placeholder="ejemplo@correo.com"
                        required>
                    <br><br>

                    <label for="telefono">Teléfono</label>
                    <input
                        type="tel"
                        id="telefono"
                        name="telefono"
                        placeholder="88888888"
                        required>
                    <br><br>

                    <label for="asunto">Asunto</label>
                    <input
                        type="text"
                        id="asunto"
                        name="asunto"
                        placeholder="Ingrese el asunto"
                        required>
                    <br><br>

                    <label for="mensaje">Mensaje</label>
                    <textarea
                        id="mensaje"
                        name="mensaje"
                        rows="5"
                        placeholder="Escribe tu mensaje aquí..."
                        required></textarea>

                    <br><br>

                    <button type="submit">Enviar</button>

                </form>
            </div>
            <br>

            <div class="info-contacto">

                <h3>Nuestra Información de Contacto</h3>
                <br>

                <p>
                    <strong>Dirección:</strong><br>
                    Avenida Central, San José, Costa Rica.
                </p>

                <p>
                    <strong>Teléfono:</strong><br>
                    +506 2222-1234
                </p>

                <p>
                    <strong>WhatsApp:</strong><br>
                    +506 8888-5678
                </p>

                <p>
                    <strong>Correo:</strong><br>
                    contacto@novatech.ac.cr
                </p>

            </div>

        </section>

        <section class="mapa">

            <h2>Nuestra Ubicación</h2>

            <img src="../img/ubicacionContacto.png"
                 alt="Ubicación de Academia NovaTech en San José, Costa Rica">

        </section>

    </main>

<?php require __DIR__ . '/layout/footer.php'; ?>

