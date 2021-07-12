# [](#projeto)Projeto Inovuerj Processos

> **Bio do Projeto:**
> 
> *   Nome: (preencher)
> *   Objetivo: (preencher)
> *   (algo mais importante ...)
> *   Seguindo etapas do ["PHP The right way"](https://leanpub.com/phptherightway/read)
> 
> **Branch**: [master](https://)

<br>

## Executando apliacação localmente

- Requisitos
    - PHP (https://www.php.net/manual/en/install.php ou https://linuxize.com/post/how-to-install-php-on-ubuntu-18-04/)
    - NPM (https://nodejs.org/en/download/ ou https://www.makeuseof.com/install-node-js-npm-windows/)
    - MySQL (https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04-pt)
    - MySQL Workbench (https://dev.mysql.com/downloads/workbench/)

- Instalar as dependencias do FrontEnd (Node Package Manager necessário)
    - ```npm install``` 
- Instalar dependencias do backend (PHP instalado)
    - ```php composer.phar install```
- Importar arquivo dump do banco de dados no mysql workbench
    - abrir workbench e via menu -> server -> data import -> marcar opção "import from self-contained file" no caminho ```./#private/DB/dumps/Dump20210526.sql```
- Acessar aplicação no navegador 
    - caminho: ```http://localhost:8000```
    - login: ```inovuerj@sr2.uerj.br```
    - senha: ```feudodoinov```

<br>

## Criação da Aplicação

1. [Introdução a aplicação em PHP](/%23private/docs/phptherightway.com/readme-v0.0.1-intro.md)

2. [Gerenciamento de Dependências com Composer](/%23private/docs/phptherightway.com/readme-v0.0.2-gerenciamento-de-dependencias.md)

3. [Rotas](/%23private/docs/phptherightway.com/readme-v0.0.3-rotas.md)

4. [MVC - Arquitetura Global](/%23private/docs/phptherightway.com/readme-v0.1.0-mvc.md)

    4.1 [Implementando Core do MVC](/%23private/docs/phptherightway.com/readme-v0.1.1-implentando-mvc.md)
    
    4.2 [Implementando Controllers](/%23private/docs/phptherightway.com/readme-v0.1.2-implentando-controllers.md)
    
    4.3 [Implementando Views](/%23private/docs/phptherightway.com/readme-v0.1.3-implentando-views.md)
    
    4.4 [Implementando Models](/%23private/docs/phptherightway.com/readme-v0.1.4-implementando-models.md)

5. [Sessions - Autenticação](/%23private/docs/phptherightway.com/readme-v0.2.0-sessions.md)
