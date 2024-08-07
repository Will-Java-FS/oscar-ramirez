SET SEARCH_PATH TO pairedproject;
-- DROP TABLE IF EXISTS car;
-- DROP TABLE IF EXISTS dealership;

create table dealership(
	dealership_id SERIAL PRIMARY KEY,
	name varchar(50) UNIQUE NOT NULL,
	city varchar(50),
	state varchar(50)
);

create table car(
	car_id SERIAL PRIMARY KEY,
	make varchar(50) NOT NULL,
	model varchar(50) NOT NULL,
	year int,
	dealership_fk int REFERENCES dealerships(dealership_id) ON DELETE SET NULL
);

ALTER TABLE car
	ADD CONSTRAINT cars_dealership_fk 
	FOREIGN KEY (dealership_fk)
	REFERENCES dealerships(dealership_id) ON DELETE SET NULL;

INSERT INTO dealership VALUES
	(DEFAULT, 'Auto Haven', 'Brooklyn', 'New York'),
	(DEFAULT, 'Motor Mania', 'Bronx', 'New York');

	
INSERT INTO car VALUES
	(DEFAULT, 'Acura', 'MDX', 2024, 1),
	(DEFAULT, 'Acura', 'RDX', 2024, 1),
	(DEFAULT, 'Alfa Romeo', 'Stelvio', 2024, 2),
	(DEFAULT, 'Alfa Romeo', 'Tonale', 2024, 2);
	
SELECT * FROM car;
SELECT * FROM dealership;