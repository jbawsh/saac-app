DROP DATABASE IF EXISTS saac;
CREATE DATABASE saac;

\c saac;

CREATE TABLE IF NOT EXISTS photos (
    id           BIGSERIAL,
    userId       BIGINT,
    url          TEXT,
    publishDate  timestamp default current_timestamp
  );

INSERT INTO photos (userId, url)
	VALUES (15, 'This is working');