DROP DATABASE IF EXISTS lifty_db;

CREATE DATABASE lifty_db;

USE lifty_db;

CREATE TABLE workout (
  id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
  exercise varchar(255) NOT NULL,
  weight int (3),
  reps int (3),
  sets int (3),
  totalReps int (4),
	workoutTime DATETIME,
	PRIMARY KEY (id)
);
