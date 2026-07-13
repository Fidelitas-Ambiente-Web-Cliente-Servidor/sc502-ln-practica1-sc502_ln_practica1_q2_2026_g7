<?php

require_once __DIR__ . '/../models/CursoModel.php';

class CursosController
{
    private CursoModel $model;

    public function __construct()
    {
        $this->model = new CursoModel();
    }

    public function index(): void
    {
        $categoriaSeleccionada = trim($_GET['categoria'] ?? '');

        if ($categoriaSeleccionada !== '') {
            $cursos = $this->model->getByCategoria($categoriaSeleccionada);
        } else {
            $cursos = $this->model->getAll();
        }

        $todosLosCursos = $this->model->getAll();
        $categorias = [];

        foreach ($todosLosCursos as $curso) {
            $categoria = $curso['categoria'];

            if ($categoria !== '' && !in_array($categoria, $categorias, true)) {
                $categorias[] = $categoria;
            }
        }

        sort($categorias);

        require __DIR__ . '/../views/cursos/index.php';
    }
}