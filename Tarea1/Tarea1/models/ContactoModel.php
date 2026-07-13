<?php

require_once __DIR__ . '/../config/database.php';

class ContactoModel
{
    private PDO $db;

    public function __construct()
    {
        $this->db = Database::getConnection();
    }

    public function create(array $data): bool
    {
          $stmt = $this->db->prepare(
            'INSERT INTO contacto (nombre, correo, telefono, asunto, mensaje, fecha_envio)
                VALUES (:nombre, :correo, :telefono, :asunto, :mensaje)';

 
        return $stmt->execute([
            ':nombre'   => $data['nombre'],
            ':correo'   => $data['correo'],
            ':telefono' => $data['telefono'],
            ':asunto'   => $data['asunto'],
            ':mensaje'  => $data['mensaje'],
        ]);
    }

    public function getAll(): array
    {
        $stmt = $this->db->query(
            'SELECT * FROM contacto ORDER BY fecha_envio ASC');
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}