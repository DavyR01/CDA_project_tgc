-- CREATE TABLE addd
-- (
-- 	id INTEGER PRIMARY KEY AUTOINCREMENT,
-- 	title TEXT NOT NULL,
-- 	description TEXT,
-- 	owner TEXT NOT NULL,
-- 	price INT,
--     createdAt TEXT,
--     picture TEXT,
--     ville TEXT,
--     categorie TEXT
-- );

INSERT INTO addd (title, description, owner, price, location, category_id)
 VALUES
('Boat to sell', 'My Boat is red, working fine.','Boat.seller@gmail.com', 140000, 'Bordeaux', 3),
 ('Plane to sell', '"My Plane is blue, working fine.', 'Plane.seller@gmail.com', 100000000, 'Lyon', 1),
 ('Car to sell', 'My Car is red, working fine.','Car.seller@gmail.com', 12000, 'Bordeaux', 2)
 ;

-- SELECT * FROM addd;

/* SELECT * FROM addd
WHERE ville Like "Lyon";*/

/*DELETE FROM addd
WHERE price > 40;*/

/*
UPDATE addd
SET price = 0
WHERE createdAt = '01/09$';
*/

/*
SELECT AVG(price) FROM addd
WHERE ville LIKE "Paris";
*/

/* #BONUS#
SELECT ville, AVG(price)
FROM addd
GROUP BY ville;
*/