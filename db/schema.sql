DROP DATABASE IF EXISTS gripptrekk_db;
CREATE DATABASE gripptrekk_db;

USE gripptrekk_db;

CREATE TABLE bouldering (
  id INT NOT NULL AUTO_INCREMENT,
  route_name VARCHAR(50),
  route_description TEXT,
  rating VARCHAR(30),
  ascended VARCHAR(10)
  /* PRIMARY KEY (id) -if needed uncomment guys */
);

CREATE TABLE hiking (
  id INT NOT NULL AUTO_INCREMENT,
  trail_name VARCHAR(50),
  trail_description TEXT,
  rating VARCHAR(30),
  ascended VARCHAR(10)
);