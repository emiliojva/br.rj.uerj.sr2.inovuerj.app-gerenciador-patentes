<?php
/**
 * Arquivos de Rotas
 */

use \Core\Router\Router;

Router::get('/', function(){
  echo 'Estou na rota root';
});

Router::get('/home', function(){
  echo 'Estou na rota home';
});

Router::get('/sobre', function(){
  echo 'Estou na rota sobre';
});



//Router::get('/', 'HomeController@newMaine');
