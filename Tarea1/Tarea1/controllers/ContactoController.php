<?php

require_once __DIR__ . '/../models/ContactoModel.php';

class ContactoController
{
    private ContactoModel $model;

    public function __construct()
    {
        $this->model = new ContactoModel();
    }

    public function index(): void
    {
        $mensajeEnviado = isset($_GET['enviado']) && $_GET['enviado'] === '1';
        $errores = [];
        require __DIR__ . '/../views/contacto/index.php';
    }

    public function store(): void
    {
        $mensajeEnviado = false;

        $nombre   = trim($_POST['nombre'] ?? '');
        $correo   = trim($_POST['correo'] ?? '');
        $telefono = trim($_POST['telefono'] ?? '');
        $asunto   = trim($_POST['asunto'] ?? '');
        $mensaje  = trim($_POST['mensaje'] ?? '');

        $errores = [];

        if ($nombre === '') {
            $errores[] = 'El nombre es obligatorio.';
        }
        if ($correo === '' || !filter_var($correo, FILTER_VALIDATE_EMAIL)) {
            $errores[] = 'El correo electrónico no es válido.';
        }
        if ($mensaje === '') {
            $errores[] = 'El mensaje es obligatorio.';
        }

        if (!empty($errores)) {
            require __DIR__ . '/../views/contacto/index.php';
            return;
        }

        $guardado = $this->model->create([
            'nombre'   => $nombre,
            'correo'   => $correo,
            'telefono' => $telefono,
            'asunto'   => $asunto,
            'mensaje'  => $mensaje,
        ]);

        if ($guardado) {
            header('Location: index.php?controller=contacto&action=index&enviado=1');
            exit;
        }

        $errores[] = 'Ocurrió un error al guardar el mensaje. Intentá nuevamente.';
        require __DIR__ . '/../views/contacto/index.php';
    }
}