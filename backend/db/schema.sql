-- Active: 1754433512160@@127.0.0.1@3306
CREATE DATABASE IF NOT EXISTS colombian_coffee;
USE colombian_coffee;

-- Tabla: porte
CREATE TABLE porte (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL
);

-- Tabla: tamaño del grano
CREATE TABLE tamano_grano (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(20) NOT NULL
);

-- Tabla: potencial de rendimiento
CREATE TABLE potencial_rendimiento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nivel VARCHAR(30) NOT NULL
);

-- Tabla: grupo genético
CREATE TABLE grupo_genetico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    obtentor VARCHAR(100),
    familia VARCHAR(100),
    grupo VARCHAR(100)
);

SELECT * FROM variedades;
-- Tabla: variedades (central)
CREATE TABLE variedades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre_comun VARCHAR(100) NOT NULL,
    nombre_cientifico VARCHAR(150),
    descripcion TEXT,
    altitud_min INT,
    altitud_max INT,
    tiempo_cosecha VARCHAR(100),
    maduracion VARCHAR(100),
    nutricion TEXT,
    densidad_siembra VARCHAR(50),
    calidad_grano ENUM('Baja','Media','Buena','Muy buena','Excelente'),

    id_porte INT,
    id_tamano_grano INT,
    id_rendimiento INT,
    id_grupo_genetico INT,

    FOREIGN KEY (id_porte) REFERENCES porte(id),
    FOREIGN KEY (id_tamano_grano) REFERENCES tamano_grano(id),
    FOREIGN KEY (id_rendimiento) REFERENCES potencial_rendimiento(id),
    FOREIGN KEY (id_grupo_genetico) REFERENCES grupo_genetico(id)
);

-- Tabla: enfermedades
CREATE TABLE enfermedades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

-- Tabla: niveles de resistencia
CREATE TABLE niveles_resistencia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nivel VARCHAR(20) NOT NULL -- Susceptible, Tolerante, Resistente
);

-- Tabla intermedia: resistencia por variedad
CREATE TABLE variedad_resistencia (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_variedad INT,
    id_enfermedad INT,
    id_resistencia INT,

    FOREIGN KEY (id_variedad) REFERENCES variedades(id) ON DELETE CASCADE,
    FOREIGN KEY (id_enfermedad) REFERENCES enfermedades(id),
    FOREIGN KEY (id_resistencia) REFERENCES niveles_resistencia(id)
);

-- Tabla: imágenes asociadas a variedades
CREATE TABLE imagenes_variedad (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_variedad INT,
    url_imagen VARCHAR(255) NOT NULL,

    FOREIGN KEY (id_variedad) REFERENCES variedades(id) ON DELETE CASCADE
);

ALTER TABLE imagenes_variedad
MODIFY url_imagen TEXT;


SHOW TABLES;

select * FROM variedad_resistencia;

USE colombian_coffee;

DROP TABLE IF EXISTS usuarios;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
SELECT * FROM usuarios;

DESCRIBE usuarios;
