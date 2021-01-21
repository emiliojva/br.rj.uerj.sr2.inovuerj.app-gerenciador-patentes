<?php

namespace App\Controllers;

use App\Models\Usuario;
use Core\ADO\TTransaction;
use Core\Controller\ControllerAction;
use Core\Helpers\Debug;

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
  public function login()
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
    TTransaction::open();

    /**
     * Instancia de um objeto usuario
     */
    $usuario = new Usuario();
    $usuario->setEmail($email);
    $usuario->setSenha($senha);




    /**
     * Valida se usuario foi autenticado
     */
    if ($usuario->autenticar()) {

      $_SESSION['user_data'] = array(
        'email' => $usuario->getEmail(),
        'autenticado' => TRUE
      );

      dd('Autenticado');

      $_SESSION['usuario'] = $usuario;
      header('Location: poslogin.php');
      exit();

    } else {

      dd('erro nao autenticação');
      header('Location: /');
      exit();

    }


    /**
     * Executa o comando commit de um banco de dados selecioado(ex: mysql) e encerra uma conexao db;
     */
    TTransaction::close();

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

      $objUsuario = new Usuario();

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
