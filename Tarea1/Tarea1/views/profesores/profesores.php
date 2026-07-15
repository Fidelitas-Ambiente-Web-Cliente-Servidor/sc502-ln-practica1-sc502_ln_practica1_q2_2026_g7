<?php
/*
 * VISTA: profesores.php
 * Módulo de Profesores 
 */
$pageTitle = 'Listado de Profesores';
$depth = 0; 
require __DIR__ . '/../layout/header.php';
?>


<link rel="stylesheet" href="../css/profesores.css">

<link rel="stylesheet" href="../css/style.css">

<main>
  <!-- Sección Principal -->
  <section id="principal">
    <h2>Profesores</h2>
    <p>Nuestra academia cuenta con los siguientes profesores.</p>
  </section>

  <!-- Contenedor de Tarjetas Generadas por PHP -->
  <section>
    <div id="contenedor-profesores" class="grupo-profesores">
      <?php if (empty($profesores)): ?>
        <p>No se encontraron profesores disponibles en este momento.</p>
      <?php else: ?>
        <?php foreach ($profesores as $profe): ?>
          <article class="profesor" data-id-profesor="<?= $profe['id'] ?>">
            <!-- Las URL de imágenes externas no requieren htmlspecialchars, pero las propiedades de texto sí -->
            <img src="<?= $profe['foto'] ?>" alt="Foto de <?= htmlspecialchars($profe['nombre']) ?>">
            <h4><?= htmlspecialchars($profe['nombre']) ?></h4>
            <h3><?= htmlspecialchars($profe['especialidad']) ?></h3>
            
            <?php 
              
              $bioLimpia = htmlspecialchars($profe['bio']);
              $bioCorta = (strlen($bioLimpia) > 85) ? substr($bioLimpia, 0, 85) . '...' : $bioLimpia;
            ?>
            <p><?= $bioCorta ?></p>
            <button class="boton">Ver más</button>
          </article>
        <?php endforeach; ?>
      <?php endif; ?>
    </div>
  </section>

  <!-- Sección de Identidad Institucional -->
  <section class="seccion-identidad">
    <article class="tarjeta-identidad">
      <h2>Misión</h2>
      <p>
        Ofrecer educación tecnológica accesible y de alta calidad, empoderando a nuestros 
        estudiantes con las habilidades digitales más demandadas para impulsar su 
        desarrollo profesional y transformar su entorno.
      </p>
    </article>

    <article class="tarjeta-identidad">
      <h2>Visión</h2>
      <p>
        Ser la academia líder en formación online de habla hispana, reconocida por la 
        excelencia de nuestros profesores, la innovación de nuestros métodos de aprendizaje 
        y el éxito laboral de nuestros egresados.
      </p>
    </article>
  </section>
</main>

<!-- Mensajes informativos del DOM -->
<div id="mensaje-sistema" style="padding: 10px; text-align: center; font-weight: bold; min-height: 20px;"></div>

<!-- Estructura del Modal Personalizado -->
<div class="modal fade" id="modalProfesor" tabindex="-1" aria-labelledby="modalProfesorLabel" aria-hidden="true" style="display: none; background: rgba(0, 0, 0, 0.5);">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="modalProfesorLabel">Detalle del Profesor</h5>
        <button type="button" class="btn-close" id="btnCerrarModal" aria-label="Close"></button>
      </div>
      <div class="modal-body" id="modal-cuerpo-detalle">
        <!-- Se llena de forma asíncrona mediante Fetch API -->
      </div>
    </div>
  </div>
</div>

<!-- Lógica interactiva JS colocada de forma limpia antes del cierre del layout -->
<script src="../js/profesores.js"></script>

<?php require __DIR__ . '/layout/footer.php'; ?>