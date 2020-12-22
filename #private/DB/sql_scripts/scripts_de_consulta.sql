#CREATE DATABASE inovuerj_processos;
USE inovuerj_processos;

/**
SELECT DAS TABELAS DO SISTEMA
*/
SELECT * FROM usuario;
SELECT * FROM usuario_grupo;
SELECT * FROM municipio;
SELECT * FROM municipio_regiao;


# Colocar auto increment do id para 0
/**
alter table usuario auto_increment = 0;
alter table usuario_grupo auto_increment = 0;
*/