DROP TABLE IF EXISTS villes;


CREATE TABLE villes(
    id SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    ville VARCHAR(30) NOT NULL,
    pays VARCHAR(30) NOT NULL,
    continent VARCHAR (20) NOT NULL,
    population VARCHAR (40),
    PRIMARY KEY (id)
)CHARSET=utf8 COLLATE utf8_general_ci;


INSERT INTO villes (ville, pays, continent, population) 
VALUES ('Madrid', 'Espagne', 'Europe', '10'),
        ('Paris', 'France', 'Europe', '20'),
        ('Tokyo', 'Japon', 'Asie', '30');