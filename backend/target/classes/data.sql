-- Insert admin user
INSERT INTO users (username, email, password, created_at, updated_at)
VALUES (
    'admin',
    'admin@mail.com',
    '$2a$10$IDSvCX8CDidWDrRvlj.lN.Y3iXMUMz6TqYC3AaeXhUYw9uJPQOPJm',
    CURRENT_TIMESTAMP(),
    CURRENT_TIMESTAMP()
); 