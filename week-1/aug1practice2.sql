SET SEARCH_PATH TO aug1practice;
CREATE TABLE actors(
	a_id serial PRIMARY KEY,
	name varchar(50) UNIQUE NOT NULL,
	age smallint CHECK (age>=0),
	worth int
);

INSERT INTO actors VALUES (DEFAULT, 'Chris Evans', 50,30000000);
INSERT INTO actors VALUES (DEFAULT, 'Scarlett Johannson',30,31000000);
INSERT INTO actors VALUES (DEFAULT, 'Elizabeth Olsen',35,32000000);

SELECT * FROM actors;
SELECT a_id FROM actors;
SELECT name FROM actors;
SELECT age FROM actors;
SELECT worth FROM actors;
SELECT * FROM actors WHERE age<40 AND worth>3000000;
SELECT * FROM actors WHERE age BETWEEN 30 AND 35;
SELECT * FROM actors WHERE age IN (30, 33, 36, 39);

UPDATE actors SET age = 31 WHERE age = 30;
UPDATE actors SET worth=32000000 WHERE worth<32000000;
UPDATE actors SET worth=33000000 WHERE name='Elizabeth Olsen';

SELECT * FROM actors WHERE name = 'Elizabeth';
SELECT * FROM actors WHERE name LIKE 'Elizabeth%';
SELECT * FROM actors WHERE name LIKE '%Evans';
SELECT * FROM actors WHERE lower(name) like '%e%';
SELECT * FROM actors WHERE name like '%e%';
SELECT lower(name) FROM actors WHERE lower(name) like '%e';