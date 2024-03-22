-- Creating the table
CREATE TABLE my_table (
	id bigserial PRIMARY KEY,
	name varchar (20) NOT NULL,
	parent_id integer,
	FOREIGN KEY (parent_id) REFERENCES my_table(id)
);

-- Inserting values to the table
INSERT INTO my_table (name, parent_id) VALUES
('Zaki', 2),
('Ilham', null),
('Irwan', 2),
('Arka', 3);

-- SELECT command as requested based on task
SELECT c.id, c.name, p.name AS parent_name
FROM my_table c
LEFT JOIN my_table p ON p.id = c.parent_id
ORDER BY c.id;