DROP DATABASE IF EXISTS saac;
CREATE DATABASE saac;

\c saac;

CREATE TABLE IF NOT EXISTS photos (
    id           BIGSERIAL,
    userId       BIGINT,
    url          TEXT,
    points       INT,
    name         TEXT,
    publishDate  timestamp default current_timestamp
  );

CREATE TABLE IF NOT EXISTS users (
	id           BIGSERIAL,
	userId       BIGINT,
	points       BIGINT,
	name         TEXT
  );