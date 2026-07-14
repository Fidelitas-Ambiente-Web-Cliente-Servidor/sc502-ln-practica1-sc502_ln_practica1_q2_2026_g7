<?php

require_once __DIR__ . '/../config/database.php';

class IndexModel
{
    private PDO $db;

    public function __construct()
    {
        $this-> db = Database::getConnection();
    }

    public function getAll(): array
    {
        $stmt = $this->db->prepare(
            'SELECT
             id,
                nombre,
                descripcion,
                precio,
                categoria,
                disponible
             FROM cursos_destacados
             WHERE disponible = 1
             ORDER BY id ASC'
        );

        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}