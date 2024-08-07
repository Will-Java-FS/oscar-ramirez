SELECT * FROM employee;
SELECT * FROM album;
SELECT * FROM customer;
SELECT * FROM genre;

-- 2.1 
SELECT * FROM employee WHERE last_name = 'King';
SELECT * FROM employee WHERE first_name = 'Andrew';
SELECT * FROM employee WHERE first_name = 'Andrew' AND reports_to = NULL;

-- 2.2
SELECT * FROM album ORDER BY title desc;
SELECT first_name FROM customer ORDER BY city asc;

-- 2.3
INSERT INTO genre VALUES (DEFAULT, 'Drum & Bass'), (DEFAULT, 'Breakcore');

-- 2.4

-- 2.5