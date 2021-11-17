CREATE TABLE IF NOT EXISTS tasks(
  id SERIAL PRIMARY KEY,
  title VARCHAR(155) NOT NULL,
  DESCRIPTION VARCHAR(255) NOT NULL,
  created_on TIMESTAMP with time zone default Current_Timestamp
  );

INSERT INTO tasks (title, description) VALUES ('Task 1', 'Description 1');