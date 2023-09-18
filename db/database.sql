CREATE DATABASE IF NOT EXISTS db_node;

USE db_node;

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT, 
    name VARCHAR(45) DEFAULT NULL,
    salary INT DEFAULT NULL,
    PRIMARY KEY (id)
);


DESCRIBE employees;


-- INSERT INFORMATION ON THE EMPLOYEES TABLE

INSERT INTO employees VALUES
    (1, 'Carlos', 1000),
    (2, 'Melissa', 11000),
    (3, 'Nathan', 2000),
    (4, 'Lucas', 1500),
    (5, 'Grimes', 3000),
    (6, 'Dexon', 8000)