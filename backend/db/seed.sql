USE colombian_coffee;

-- 🔹 Porte
INSERT INTO porte (nombre) VALUES
('Bajo'), ('Medio'), ('Alto');

-- 🔹 Tamaño del grano
INSERT INTO tamano_grano (nombre) VALUES
('Pequeño'), ('Mediano'), ('Grande');

-- 🔹 Potencial de rendimiento
INSERT INTO potencial_rendimiento (nivel) VALUES
('Bajo'), ('Medio'), ('Alto');

-- 🔹 Grupo genético
INSERT INTO grupo_genetico (obtentor, familia, grupo) VALUES
('Cenicafé', 'Catimor', 'Castillo'),
('Cenicafé', 'Híbrido', 'Cenicafé 1'),
('Cenicafé', 'Typica x Bourbon', 'Tabi'),
('Cenicafé', 'Catimor', 'Colombia'),
('Centroamérica', 'Catimor', 'Catimor'),
('Brasil', 'Bourbon', 'Bourbon'),
('Colombia', 'Bourbon mutado', 'Caturra'),
('Etiopía', 'Typica', 'Typica'),
('Etiopía', 'Geisha', 'Geisha'),
('Brasil', 'Typica mutado', 'Maragogipe');

-- 🔹 Variedades
INSERT INTO variedades (
    nombre_comun, nombre_cientifico, descripcion, altitud_min, altitud_max,
    tiempo_cosecha, maduracion, nutricion, densidad_siembra, calidad_grano,
    id_porte, id_tamano_grano, id_rendimiento, id_grupo_genetico
) VALUES
('Castillo', 'Coffea arabica var. Castillo', 'Alta resistencia a roya, buena producción.', 1200, 2000, 'Principal: Sep-Dic, Mitaca: Abr-Jun', '5-6 meses', 'Alta en fósforo y potasio.', '5,000 plantas/ha', 'Muy buena', 2, 2, 3, 1),
('Cenicafé 1', 'Coffea arabica var. Cenicafé 1', 'Alta calidad y resistente a enfermedades.', 1300, 2100, 'Sep-Nov y Mar-May', '6 meses', 'Balanceada en micronutrientes.', '5,000 plantas/ha', 'Excelente', 2, 2, 3, 2),
('Tabi', 'Coffea arabica var. Tabi', 'Resistente a roya, excelente taza.', 1400, 2000, 'Mar-May y Sep-Nov', '6-7 meses', 'Alta en nitrógeno.', '4,500 plantas/ha', 'Excelente', 3, 3, 3, 3),
('Colombia', 'Coffea arabica var. Colombia', 'Cruce con Catimor, buena resistencia.', 1200, 2000, 'Todo el año según región', '5 meses', 'Alta en materia orgánica.', '5,000 plantas/ha', 'Buena', 2, 2, 3, 4),
('Catimor', 'Coffea arabica var. Catimor', 'Alta producción pero menor calidad.', 1000, 1800, 'Abr-Jun y Oct-Dic', '4-5 meses', 'Alta en potasio.', '5,000 plantas/ha', 'Media', 2, 1, 3, 5),
('Bourbon', 'Coffea arabica var. Bourbon', 'Alta calidad en taza, menos resistente.', 1200, 2000, 'Mar-May y Sep-Nov', '6 meses', 'Enriquecida con calcio.', '4,000 plantas/ha', 'Excelente', 3, 3, 2, 6),
('Caturra', 'Coffea arabica var. Caturra', 'Mutación natural de Bourbon, buena producción.', 1000, 1800, 'Feb-Abr y Sep-Nov', '5 meses', 'Alta en nitrógeno.', '5,000 plantas/ha', 'Buena', 1, 2, 2, 7),
('Typica', 'Coffea arabica var. Typica', 'Buena calidad pero baja resistencia.', 1000, 1800, 'Todo el año', '6 meses', 'Fértil y bien drenado.', '3,500 plantas/ha', 'Muy buena', 3, 3, 1, 8),
('Geisha', 'Coffea arabica var. Geisha', 'Exótica y muy valorada por su perfil floral.', 1400, 2100, 'Mar-May', '7 meses', 'Rica en materia orgánica.', '3,000 plantas/ha', 'Excelente', 3, 3, 2, 9),
('Maragogipe', 'Coffea arabica var. Maragogipe', 'Grano gigante, menor producción.', 1000, 1700, 'Abr-Jun y Oct-Dic', '6-7 meses', 'Requiere suelos ricos.', '3,000 plantas/ha', 'Buena', 3, 3, 1, 10);

-- 🔹 Enfermedades
INSERT INTO enfermedades (nombre) VALUES
('Roya'),
('Antracnosis'),
('Ojo de gallo');

-- 🔹 Niveles de resistencia
INSERT INTO niveles_resistencia (nivel) VALUES
('Susceptible'),
('Tolerante'),
('Resistente');

-- 🔹 Variedad - resistencia
INSERT INTO variedad_resistencia (id_variedad, id_enfermedad, id_resistencia) VALUES
(1, 1, 3), -- Castillo - Roya - Resistente
(2, 1, 3), -- Cenicafé 1 - Roya - Resistente
(3, 1, 3), -- Tabi - Roya - Resistente
(4, 1, 3), -- Colombia - Roya - Resistente
(5, 1, 2), -- Catimor - Roya - Tolerante
(6, 1, 1), -- Bourbon - Roya - Susceptible
(7, 2, 2), -- Caturra - Antracnosis - Tolerante
(8, 1, 1), -- Typica - Roya - Susceptible
(9, 3, 2), -- Geisha - Ojo de gallo - Tolerante
(10, 1, 1); -- Maragogipe - Roya - Susceptible

-- 🔹 Imágenes asociadas
INSERT INTO imagenes_variedad (id_variedad, url_imagen) VALUES
(1, 'https://upload.wikimedia.org/wikipedia/commons/6/60/Cafe_castillo.jpg'),
(2, 'https://www.cenicafe.org/uploads/Cenicafe_1.jpg'),
(3, 'https://www.cenicafe.org/uploads/Tabi.jpg'),
(4, 'https://upload.wikimedia.org/wikipedia/commons/3/38/Cafe_colombia_variedad.jpg'),
(5, 'https://upload.wikimedia.org/wikipedia/commons/4/48/Cafe_catimor.jpg'),
(6, 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Cafe_bourbon.jpg'),
(7, 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Cafe_caturra.jpg'),
(8, 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Cafe_typica.jpg'),
(9, 'https://upload.wikimedia.org/wikipedia/commons/a/ad/Geisha_coffee.jpg'),
(10, 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Cafe_maragogipe.jpg');