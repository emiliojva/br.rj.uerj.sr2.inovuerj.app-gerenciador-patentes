<?php
/**
 * Arquivos de Rotas
 */

use \Core\Router\Router,
    \Core\Helpers\Debug;

/**
 * Rota raiz(root) /
 */
Router::get('/', function(){
  redirect('/home');
});

Router::get('/home', function(){
  session_start();

  /**
   * Uso do ponto para melhorar a aparencia da hierarquida de pastas
   * Neste exemplo a nossa view está no caminho App/Views/usuario/editar.php
   */
  return view('home.index',[]);

});

Router::get('/sobre', function(){
  echo 'Estou na rota sobre';
});

Router::get('/usuario/{id}/editar', function($id){

  /**
   * Uso do ponto para melhorar a aparencia da hierarquida de pastas
   * Neste exemplo a nossa view está no caminho App/Views/usuario/editar.php
   */
  return view('usuario.editar',['id'=>$id]);

});

/**
 * Exemplo de rotas combinada com de parametros com limit de resultados setado pra 10
 * http://127.0.0.1/processos/tipo/1/limit/10
 */
Router::get('/processos/tipo/{tipo}/limit/{quantidade}', function($tipo,$quantidade){

  Debug::dump($tipo);
  Debug::dump($quantidade);
  echo "Processos do tipo {$tipo} limitados a {$quantidade}";
});


/**
 * Uso de Controllers (em implementação)
 */
//Router::get('/', 'HomeController@newMaine');




