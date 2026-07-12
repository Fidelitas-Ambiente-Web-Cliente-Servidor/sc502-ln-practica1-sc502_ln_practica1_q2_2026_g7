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


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: ` NovaTech`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

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
-- Volcado de datos para la tabla `contacto`
--

INSERT INTO `contacto` (`id`, `nombre`, `correo`, `telefono`, `asunto`, `mensaje`, `fecha_envio`) VALUES
(1, 'Ashley Chavarria', 'achavacal05@ufide.ac.cr', '6290-1652', 'Consulta de clases', 'Quisiera saber cuando abren las inscripciones al proximo ciclo', '2026-07-12 06:30:56'),
(2, 'Samuel', 'samu07@ufide.ac.cr', '8800-9977', 'Precio materias', 'Me gustaria saber los precios por  materias y  descuentos', '2026-07-12 06:34:33'),
(3, 'Lucia Ortega', 'luciOrtega00@ufide.ac.cr', '2220-7799', 'Limite de campos', 'Me gustaria  saber cuales son los cupos por  cada materia', '2026-07-12 06:34:33'),
(4, 'Danny Obando', 'danObando@ufide.ac.cr', '0099-6565', 'Descuentos', 'Me podrian dar info sobre descuentos para nuevos estudiantes?', '2026-07-12 06:38:30'),
(5, 'Marta Martinez', 'marMartinez06@ufide.ac.cr', '7788-0909', 'Horarios', 'Podrian darme info sobre sus horarios para las materias de programacion?', '2026-07-12 06:38:30');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contacto`
--
ALTER TABLE `contacto`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
