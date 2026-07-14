<?php require __DIR__ . '/../layout/header.php'; ?>


<main>

    <section id="encabezado">

        <h2>Catálogo de Cursos</h2>

        <p>
            Explorá nuestros cursos y desarrollá habilidades en tecnología.
        </p>

        <form
            action="index.php"
            method="GET"
            class="formulario-filtro"
        >
            <input
                type="hidden"
                name="controller"
                value="cursos"
            >

            <input
                type="hidden"
                name="action"
                value="index"
            >

            <label for="categoria">
                Filtrar por categoría
            </label>

            <select
                id="categoria"
                name="categoria"
            >
                <option value="">
                    Todas las categorías
                </option>

                <?php foreach ($categorias as $categoria): ?>

                    <option
                        value="<?= htmlspecialchars(
                            $categoria,
                            ENT_QUOTES,
                            'UTF-8'
                        ) ?>"
                        <?= $categoriaSeleccionada === $categoria
                            ? 'selected'
                            : '' ?>
                    >
                        <?= htmlspecialchars(
                            $categoria,
                            ENT_QUOTES,
                            'UTF-8'
                        ) ?>
                    </option>

                <?php endforeach; ?>
            </select>

            <button type="submit">
                Filtrar
            </button>
        </form>

    </section>

    <section>

        <h2>Cursos disponibles</h2>

        <div class="grupo-cursos">

            <?php if (empty($cursos)): ?>

                <p class="mensaje-sin-resultados">
                    No se encontraron cursos para la categoría seleccionada.
                </p>

            <?php else: ?>

                <?php foreach ($cursos as $curso): ?>

                    <article class="curso">

                        <img
                            src="<?= htmlspecialchars(
                                $curso['imagen'],
                                ENT_QUOTES,
                                'UTF-8'
                            ) ?>"
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
                            <strong>Duración:</strong>

                            <?= htmlspecialchars(
                                $curso['duracion'],
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

                        <p>
                            <strong>Estado:</strong>

                            <?= (int) $curso['disponible'] === 1
                                ? 'Disponible'
                                : 'No disponible' ?>
                        </p>

                    </article>

                <?php endforeach; ?>

            <?php endif; ?>

        </div>

    </section>

</main>

<?php require __DIR__ . '/../layout/footer.php'; ?>