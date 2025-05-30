CREATE DATABASE banco;
use banco;
CREATE TABLE usuario (
    id INT PRIMARY KEY,
    nome VARCHAR(100),
    email VARCHAR(100)
);

CREATE TABLE tarefa (
    id INT PRIMARY KEY,
    descricao VARCHAR(100),
    setor VARCHAR(100),
    status VARCHAR(100),
    prioridade VARCHAR(100),
    fk_usuario_id INT
);
 
ALTER TABLE tarefa ADD CONSTRAINT FK_tarefa_2
    FOREIGN KEY (fk_usuario_id)
    REFERENCES usuario (id)
    ON DELETE CASCADE;