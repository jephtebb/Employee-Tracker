INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES
('John', 'Favor', 1, 3),
('Matthew','Clime',2,3),
('Carlos', 'Perez', 3, 1),
('Nixon', 'Vladimir',4,2),
('John','Provenzano',6,1),
('Melloni','Smith',4,2),
('Esther','Rivera',7,NULL);

INSERT INTO departments(department_name)
VALUES
('Math'),
('Administration'),
('Social Studies'),
('Reading'),
('Writing'),
('Computer Science');


INSERT INTO roles(title, salary, department_id)
VALUES
('Teacher', 45000, 1),
('Secretary', 50000, 2),
("Assistant Principal", 84000, 2),
('Teacher', 48000, 3),
('Teacher', 52000, 4),
("Assistant Principal", 75000,2),
('Principal',124000,2);

