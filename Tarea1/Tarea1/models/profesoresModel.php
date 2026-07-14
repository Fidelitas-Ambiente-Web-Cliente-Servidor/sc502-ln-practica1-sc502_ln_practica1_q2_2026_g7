<?php
/**
 * MODELO: ProfesorModel.php
 * Maneja las consultas SQL para la tabla profesores.
 */
class ProfesorModel {
    private $db;

    public function __construct() {
        // Se asume que database.php expone una conexión PDO o una clase Database
        // Ajusta esto según cómo el grupo maneje la conexión global
        require_once __DIR__ . '/../config/database.php';
        $this->db = Connection::connect(); // Ejemplo común de llamado a la conexión
    }

    /**
     * Devuelve todos los profesores activos
     */
    public function getAll() {
        $sql = "SELECT * FROM profesores WHERE activo = 1";
        $stmt = $this->db->prepare($sql);
        $stmt->execute();
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    /**
     * Devuelve un profesor específico por su ID
     */
    public function getById($id) {
        $sql = "SELECT * FROM profesores WHERE id = :id AND activo = 1";
        $stmt = $this->db->prepare($sql);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC);
    }
}