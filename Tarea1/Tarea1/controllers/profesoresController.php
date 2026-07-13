<?php
/**
 * CONTROLADOR: ProfesoresController.php
 */
require_once __DIR__ . '/../models/ProfesorModel.php';

class ProfesoresController {
    private $model;

    public function __construct() {
        $this->model = new ProfesorModel();
    }

    /**
     * Acción por defecto: Carga la lista completa de profesores
     */
    public function index() {
        // Obtener los datos del modelo
        $profesores = $this->model->getAll();
        // Cargar la vista pasándole los datos
        include __DIR__ . '/../views/profesores.php';
    }

    /**
     * Acción show: Devuelve los detalles de un único profesor en formato JSON 
     * para que tu Modal de Bootstrap lo renderice sin recargar la página.
     */
    public function show() {
        $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
        $profesor = $this->model->getById($id);

        // Devolvemos la respuesta como JSON para que el modal la capture de forma asíncrona
        header('Content-Type: application/json');
        echo json_encode($profesor);
        exit;
    }
}