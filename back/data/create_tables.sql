BEGIN;

DROP TABLE IF EXISTS "users","boards", "columns", "tasks", "subtasks" ;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(255) NOT NULL,
    lastname VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);


CREATE TABLE boards (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);


CREATE TABLE columns (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    board_id INT REFERENCES boards(id) ON DELETE CASCADE
);


CREATE TABLE tasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(50),
    column_id INT REFERENCES columns(id) ON DELETE CASCADE
);


CREATE TABLE subtasks (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    is_completed BOOLEAN DEFAULT FALSE,
    task_id INT REFERENCES tasks(id) ON DELETE CASCADE
);

COMMIT;