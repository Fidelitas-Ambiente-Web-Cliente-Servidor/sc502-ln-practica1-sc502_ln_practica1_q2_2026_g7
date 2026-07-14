<?php require __DIR__ . '/../layout/header.php'; ?>

<main>

    <section id="principal">

        <h2>Aprendé tecnología de forma práctica</h2>

        <p>
            Cursos básicos para estudiantes que desean aprender desarrollo web,
            diseño y programación desde cero.
        </p>

        <a
            class="boton"
            href="index.php?controller=cursos&action=index"
        >
            Ver cursos
        </a>

    </section>


    <section>

        <h2>Cursos destacados</h2>

        <div class="grupo-cursos">

            <?php if (empty($cursos)): ?>

                <p>
                    No hay cursos destacados disponibles.
                </p>

            <?php else: ?>

                <?php foreach ($cursos as $curso): ?>

                    <article class="curso">

                        <img
                            src="./img/curso<?= $curso['id'] ?>.png"
                            alt="<?= htmlspecialchars(
                                $curso['nombre'],
                                ENT_QUOTES,
                                'UTF-8'
                            ) ?>"
                        >

                        <h3>
                            <?= htmlspecialchars(
                                $curso['nombre'],
                                ENT_QUOTES,
                                'UTF-8'
                            ) ?>
                        </h3>

                        <h4>
                            <?= htmlspecialchars(
                                $curso['categoria'],
                                ENT_QUOTES,
                                'UTF-8'
                            ) ?>
                        </h4>

                        <p>
                            <?= htmlspecialchars(
                                $curso['descripcion'],
                                ENT_QUOTES,
                                'UTF-8'
                            ) ?>
                        </p>

                        <p>
                            <strong>Precio:</strong>

                            ₡<?= number_format(
                                (float) $curso['precio'],
                                2,
                                ',',
                                '.'
                            ) ?>
                        </p>

                        <a
                            class="boton"
                            href="index.php?controller=cursos&action=index"
                        >
                            Ver más
                        </a>

                    </article>

                <?php endforeach; ?>

            <?php endif; ?>

        </div>

    </section>


    <section>

        <h2>Estadisticas</h2>

        <div class="grupo-estadisticas">

            <div class="dato">

                <h3>500+</h3>

                <p>Estudiantes</p>

            </div>


            <div class="dato">

                <h3>25</h3>

                <p>Profesores</p>

            </div>


            <div class="dato">

                <h3>30</h3>

                <p>Cursos</p>

            </div>

        </div>

    </section>


    <section>

        <h2>Testimonios</h2>

        <div class="grupo-testimonios">

            <article class="testimonio">

                <p>
                    "Los cursos son faciles de entender y muy prácticos"
                </p>

                <h4>Ashley</h4>

            </article>


            <article class="testimonio">

                <p>
                    "Aprendi HTML y CSS desde cero con ejemplos sencillos"
                </p>

                <h4>Luis David</h4>

            </article>

        </div>

    </section>

</main>

<?php require __DIR__ . '/../layout/footer.php'; ?>