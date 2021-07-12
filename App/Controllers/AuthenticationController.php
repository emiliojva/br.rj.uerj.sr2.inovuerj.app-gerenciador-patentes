<?php

namespace App\Controllers;

use App\Models\User;
use Core\ADO\TDatabase;
use Core\Controller\ControllerAction;
use Core\Router\Request;

class AuthenticationController extends ControllerAction
{

  public function index()
  {

    session_start();

    /**
     * Uso do ponto para melhorar a aparencia da hierarquida de pastas
     * Neste exemplo a nossa view está no caminho App/Views/usuario/editar.php, definido no primeiro parametro
     *
     * As variaveis que serão visiveis a view são passadas por array no segundo parametro
     */
    return view('home.index', []);

  }

  /**
   * Metodo de Autenticação
   * Action para lidar com post de dados enviado pelo formulario de login(/home)
   */
  public function login(Request $request)
  {

    /**
     * Declaração de variaveis locais.
     * Variaveis para dados do post do formulario
     */
    $email = null;
    $senha = null;
   
    /**
     * Verifica se a variavel global POST possui os campos usuario e senha preechidos
     */
    if (empty($_POST['usuario']['email']) || empty($_POST['usuario']['senha'])) {
      header('Location: index.php');
      exit();
    }

    /**
     * Extrai chaves associativas do arrays para variaveis locais (ex: $email, $senha)
     */
    extract($_POST['usuario']);

    /**
     * Inicia uma session
     */
    session_start();

    /**
     * Abre uma conexao db e executa o comando begin do banco de dados escolhido (ex: mysql)
     */
    // TTransaction::open();
    TDatabase::begin();

    /**
     * Instancia de um objeto usuario
     */
    $usuario = new User();
    $usuario->setEmail($email);
    $usuario->setPassword($senha);
    

    /**
     * Valida se usuario foi autenticado
     */
    if ($usuario->auth()) {

      /**
       * Capturar uma instancia da sessão
       */
      $session = $request->session();

      /**
       * Usar o metodo user da Classe SessionManipulation para settar um usuario autenticado.
       *
       * O nosso objeto "$usuario" agora possui novos dados persistidos pelo método "autenticar()"
       *
       * o método toArray() de $usuario compactam as propriedades do objeto para um Array
       *
       */
      $session->user( $usuario->toArray() );


      /**
       * Usar nossa helper redirect para leva para a rota /admin da aplicação
       */
      return redirect('/admin'); // No futuro iremos construir uma classe para lidar com redirects

    } else {


      /**
       * Usar nossa helper redirect para retornar para pagina origem. Caso autenticação falhar.
       */
      return redirect('/');

    }


    /**
     * Executa o comando commit de um banco de dados selecioado(ex: mysql) e encerra uma conexao db;
     */
    TDatabase::commit();

  }

  /**
   * Action para criar uma senha CRYPTB
   * @return string
   */
  public function gerarSenha()
  {
    try {


      $senha = null;

      /**
       * Extrai variaveis de um array associativo
       * Ex: $_POST['senha'] = 'fulano@email.com';
       * Resultado: Criação de variavel $senha com conteúdo 'fulano@email.com';
       *
       * por padrão esse comando sobrescreve o valor da variavel caso ocorra duplicidade.
       */
      extract($_POST, EXTR_OVERWRITE);

      if (is_null($senha)) {
        throw new \Exception('Password invalido');
      }

      $objUsuario = new User();

      echo "<pre>";
      echo "=================================================";
      echo "=================================================";
      echo "PASSWORD POST";
      echo "=================================================";
      echo "=================================================";

      dump($senha);

      echo "=================================================";
      echo "=================================================";
      echo "PASSWORD GENERATED";
      echo "=================================================";
      echo "=================================================";

      dump($objUsuario->crypt($senha));

      echo "</pre>";

      return "";

    } catch (\Exception $e) {

      echo $e->getMessage();

    }

  }

}
