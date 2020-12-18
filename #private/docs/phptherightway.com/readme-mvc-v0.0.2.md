# MVC

## Conceito

O Acronimo para Model, View e Controller é um:
Padrão de Projeto(Design pattern MVC) que tem como objetivo, organizar o código de uma aplicação web. O objetivo é dividir o projeto em três grandes partes:

- Model(Modelos): interage com o banco de dados. Ele recebe, armazena e recupera dados para o usuário.

- View (Renderização): exibe informações para o usuário e integra dados do controlador.

- Controller (Controlador): envia e recebe dados do modelo e passa para a visualização.

##### Fluxograma do MVC

![Fluxo circle MVC](https://miro.medium.com/max/1225/1*xnuMvzXzmAxYXcRrd1Wj5Q.png "Fluxograma do Pattern MVC")

## Estrutura

##### Arquitetura Global

![Fluxo circle MVC](https://miro.medium.com/max/1225/1*gRErOZyn7ptn373U9fv0Yg.png "Arquitetura Global")


O framework MVC será divido em três pastas (Models, Views, Controllers) e alguns outros itens: 

- A pasta 'public' é o único diretório acessível ao usuário. 

- Router.php(Rotas em /routes/web.php), dispatcher.php, request.php, .htaccess fazem parte do sistema de roteamento 

- Config (/config): toda a configuração necessária ao nosso site. Iremos recuperar então o arquivo db.php que é o único ponto de acesso ao nosso banco de dados (classe singleton).

 
#### Principais Referências

- [Conceito do MVC](https://pt.wikipedia.org/wiki/MVC)
- [Design Patterns](https://phptherightway.com/pages/Design-Patterns.html)
