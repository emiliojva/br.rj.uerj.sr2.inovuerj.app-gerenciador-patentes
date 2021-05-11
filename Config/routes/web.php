<?php
/**
 * Arquivos de Rotas
 */

use \Core\Router\Router,
    \Core\Helpers\Debug;

/**
 * O nosso sistema de rotas suporta dois metodos de execução.
 *
 * Callable(function) - Functions/Callbacks. Executa uma função diretamente com seus parametros.
 * Exemplo:
 * Router::get('/', function(){
 *  redirect('/home');
 * });
 *
 * OU
 *
 * String - Respeitando o padrão(pattern) NomeDaClasse'Controller'@'nome_do_metodo', exemplo: 'PublicController@home'.
 *
 * PublicController - Classe definida no caminho App/Controllers/. Chamos de Controller
 * @ - Apenas divisor para facilitar o Core na extração do (controller e action)
 * home - Método da Classe PublicController que  executa toda lógica da aplicação. Chamos de Action!
 *
 * Exemplo:
 * Router::get('/home', 'PublicController@home');
 *
 *
 *
 *
 */

/**
 * Rota raiz(root) /
 */
Router::get('/', function(){
  redirect('/home');
});

Router::get('/home', 'PublicController@home');

Router::post('/auth', 'AuthenticationController@login');

//Router::get('/auth', 'AuthenticationController@login');

Router::get('/sobre','PublicController@about');

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
 * Controller Administrativo - AdminController
 */
Router::get('/admin','AdminController@index');

/**
 * Controller Administrativo - Resources para Rotas dos Bootys("Ativos", "Espólios")
 */
// Router::get('/admin/ativo','BootyController@index');              # Listagem
Router::get('/admin/ativo/create','BootyController@create');         # Formulario Novo Ativo
Router::post('/admin/ativo','BootyController@store');                # Post/Put para Form Novo Ativo
// Router::get('/admin/ativo/{id}','BootyController@show');          # Formulario Editar Ativo
// Router::get('/admin/ativo/{id}/edit','BootyController@edit');     # Formulario Editar Ativo
// Router::post('/admin/ativo/{id}/edit','BootyController@update');  # Post/Put para Form Editar Ativo
// Router::post('/admin/ativo/{id}','BootyController@destroy');      # Deletar/Destroy Ativo

# UsuarioController gerador de senha.
Router::post('/admin/usuarios/gerarPassword/?', 'AuthenticationController@gerarSenha');