-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 26-03-2024 a las 18:19:57
-- Versión del servidor: 8.2.0
-- Versión de PHP: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `desafio_ceibal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lentes`
--

DROP TABLE IF EXISTS `lentes`;
CREATE TABLE IF NOT EXISTS `lentes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `activo` tinyint(1) DEFAULT '1',
  `creado` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Volcado de datos para la tabla `lentes`
--

INSERT INTO `lentes` (`id`, `nombre`, `activo`, `creado`) VALUES
(1, 'Ojo de gato', 1, '2024-03-26 12:46:27'),
(2, 'Mariposa', 1, '2024-03-26 12:46:27'),
(3, 'Aviador', 1, '2024-03-26 12:46:51'),
(4, 'Redondeado', 1, '2024-03-26 12:46:51');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitudes`
--

DROP TABLE IF EXISTS `solicitudes`;
CREATE TABLE IF NOT EXISTS `solicitudes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `opcion` int NOT NULL,
  `creado` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
