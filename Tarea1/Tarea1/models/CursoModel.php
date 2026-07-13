<?php

require_once __DIR__ . '/../config/database.php';

class CursoModel
{
    private PDO $db;

    public function __construct()
    {
        $this->db = Database::getConnection();
    }

    public function getAll(): array
    {
        $stmt = $this->db->prepare(
            'SELECT
                id,
                nombre,
                descripcion,
                categoria,
                duracion,
                precio,
                imagen,
                disponible
             FROM cursos
             ORDER BY nombre ASC'
        );

        $stmt->execute();

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }

    public function getByCategoria(string $cat): array
    {
        $stmt = $this->db->prepare(
            'SELECT
                id,
                nombre,
                descripcion,
                categoria,
                duracion,
                precio,
                imagen,
                disponible
             FROM cursos
             WHERE categoria = :categoria
             ORDER BY nombre ASC'
        );

        $stmt->execute([
            ':categoria' => $cat
        ]);

        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    }
}