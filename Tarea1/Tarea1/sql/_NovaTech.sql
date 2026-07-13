-- phpMyAdmin SQL Dump
-- version 5.2.3
-- https://www.phpmyadmin.net/
--
-- Servidor: db
-- Tiempo de generación: 12-07-2026 a las 06:40:31
-- Versión del servidor: 8.0.46
-- Versión de PHP: 8.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

-- Base de datos: "NovaTech"
-- --------------------------------------------------------
-- Estructura para la tabla "contacto"

CREATE TABLE `contacto` (
  `id` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(150) NOT NULL,
  `telefono` varchar(20) NOT NULL,
  `asunto` varchar(100) NOT NULL,
  `mensaje` text NOT NULL,
  `fecha_envio` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Datos para la tabla "contacto"
--

INSERT INTO `contacto` (`id`, `nombre`, `correo`, `telefono`, `asunto`, `mensaje`, `fecha_envio`) VALUES
(1, 'Ashley Chavarria', 'achavacal05@ufide.ac.cr', '6290-1652', 'Consulta de clases', 'Quisiera saber cuando abren las inscripciones al proximo ciclo', '2026-07-12 06:30:56'),
(2, 'Samuel', 'samu07@ufide.ac.cr', '8800-9977', 'Precio materias', 'Me gustaria saber los precios por  materias y  descuentos', '2026-07-12 06:34:33'),
(3, 'Lucia Ortega', 'luciOrtega00@ufide.ac.cr', '2220-7799', 'Limite de campos', 'Me gustaria  saber cuales son los cupos por  cada materia', '2026-07-12 06:34:33'),
(4, 'Danny Obando', 'danObando@ufide.ac.cr', '0099-6565', 'Descuentos', 'Me podrian dar info sobre descuentos para nuevos estudiantes?', '2026-07-12 06:38:30'),
(5, 'Marta Martinez', 'marMartinez06@ufide.ac.cr', '7788-0909', 'Horarios', 'Podrian darme info sobre sus horarios para las materias de programacion?', '2026-07-12 06:38:30');

--
-- Indices de la tabla "contacto"
--

ALTER TABLE `contacto`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de la tabla "contacto"
--

ALTER TABLE `contacto`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

-- --------------------------------------------------------

--
-- Estructura para la tabla "cursos"
--

CREATE TABLE `cursos` (
  `id` int NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `categoria` varchar(100) NOT NULL,
  `duracion` varchar(50) NOT NULL,
  `precio` decimal(10,2) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `disponible` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Registros de prueba para la tabla "cursos"
--

INSERT INTO `cursos`
(`id`, `nombre`, `descripcion`, `categoria`, `duracion`, `precio`, `imagen`, `disponible`)
VALUES
(1, 'HTML5 Básico', 'Aprendé la estructura básica de una página web.', 'Desarrollo Web', '4 semanas', 35000.00, 'img/curso1.png', 1),
(2, 'CSS3 Básico', 'Aprendé estilos, colores y diseño.', 'Desarrollo Web', '5 semanas', 40000.00, 'img/curso2.png', 1),
(3, 'Bootstrap Inicial', 'Aprendé a construir diseños modernos con Bootstrap.', 'Desarrollo Web', '3 semanas', 30000.00, 'img/curso3.png', 1),
(4, 'JavaScript Básico', 'Aprendé programación para crear páginas dinámicas.', 'Programación', '6 semanas', 45000.00, 'img/curso4.png', 1),
(5, 'Python Inicial', 'Introducción práctica al lenguaje Python.', 'Programación', '8 semanas', 50000.00, 'img/curso6.jpg', 1),
(6, 'Java Fundamentos', 'Aprendé lógica de programación y programación orientada a objetos.', 'Programación', '8 semanas', 55000.00, 'img/curso5.png', 1);

--
-- Índice para la tabla "cursos"
--

ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para la tabla "cursos"
--

ALTER TABLE `cursos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;