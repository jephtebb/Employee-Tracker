DROP DATABASE IF EXISTS employeeTrackerDatabase;
CREATE DATABASE employeeTrackerDatabase;
SET SQL_SAFE_UPDATES = 0;
USE employeeTrackerDatabase;

CREATE TABLE departments(
id INT AUTO_INCREMENT PRIMARY KEY NOT NULL,
department_name VARCHAR(30) NOT NULL
);

CREATE TABLE roles(
id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
title VARCHAR(50) NOT NULL,
salary INTEGER NOT NULL,
department_id INTEGER
);

CREATE TABLE employees(
id INTEGER AUTO_INCREMENT PRIMARY KEY NOT NULL,
first_name VARCHAR(50) NOT NULL,
last_name VARCHAR(50) NOT NULL,
manager_id INTEGER NULL,
role_id INTEGER
);


