# [](#sessions)Sessions - Entendendo e Implementando uma classe para Sessões 

> **Objetivos desta etapa:**
>
> *   Apresentar Sessões (sessions)
> *   Implementar classe para lidar com sessions 
> *   Implementar nossa autenticação com sessions


> 
> **Branch**: [models](https://)


## Apresentar Sessões (sessions)

Uma sessão é uma maneira de armazenar informações (em variáveis) a serem usadas em várias páginas. Ao contrário de um cookie, as informações não são armazenadas no computador do usuário.


### O que é uma sessão PHP? 

Ao trabalhar com um aplicativo, você o abre, faz algumas alterações e, em seguida, fecha-o. Isso é muito parecido com uma sessão. O computador sabe quem você é. Ele sabe quando você inicia e quando você termina o aplicativo. Mas na internet há um problema: o servidor web não sabe quem você é ou o que você faz, porque o endereço HTTP não mantém o estado. As variáveis ​​de sessão resolvem esse problema armazenando informações do usuário para serem usadas em várias páginas (por exemplo, nome de usuário, cor favorita etc.). Por padrão, as variáveis ​​de sessão duram até que o usuário feche o navegador. Assim; As variáveis ​​de sessão contêm informações sobre um único usuário e estão disponíveis para todas as páginas em um aplicativo.



#### Iniciar uma sessão PHP 

Uma sessão é iniciada com a função session_start (). Variáveis ​​de sessão são definidas com a variável global PHP: $ _SESSION. Agora, vamos criar uma nova página chamada "demo_session1.php". Nesta página, iniciamos uma nova sessão PHP e definimos algumas variáveis ​​de sessão:

![Exemplo - Iniciando uma sessão PHP](/%23private/docs/phptherightway.com/imagens/start_a_session.PNG "Iniciando uma Sessão em PHP"). 



## Implementar classe para lidar com sessions

Criamos no caminho ```Core\Http\ ``` a classe ```SessionManipulation``` que possui métodos importantes : 

- `setUser()` para armazenar um usuario autenticado.
- `put()` para inclui novos campos(colunas) na sessão. 
- `user()` para retorna um usuario autenticado, ou para incluirmos(set) um novo.

Ela também possui uma particularidade trivial. Sessions permanecem Íntegras por todo o fluxo da aplicação. Portanto precisamos ter APENAS uma instância de objeto da classe `SessionManipulation`. O nome desse padrão em orientação a objetos chama-se `singleton`(pesquisar). Sempre teremos apenas uma instância do objeto para lida com sessões.

Nosso construtor ou `contructor` por conta disso, sempre irá validar se já existe uma instância em aberto. Isto é feito através de um método convencional chamado de `getInstance()`. 


    <?php
    
    namespace Core\Http;
    
    final class SessionManipulation
    {
    
      private static $instance = null;
    
      private function __construct()
      {
    
        /**
         * Verifica se a aplicação ja possui uma session aberta(session_start()).
         * Se não houver, inicia uma.
         *
         * Constantes do PHP para sessions
         * ===============================
         * PHP_SESSION_DISABLED se as sessões estiverem desabilitadas.
         * PHP_SESSION_NONE se as sessões estiverem habilitadas, mas nenhuma existir.
         * PHP_SESSION_ACTIVE se as sessões estiverem habilitadas, e uma existir.
         *
         */
        if(session_status() === PHP_SESSION_NONE){
          // Abrir sessão
          session_start();
        }
    
      }
    
      /**
       * SingleTon Instance
       * @return SessionManipulation|null
       */
      public static function getInstance()
      {
    
        if (null === self::$instance) {
          self::$instance = new static();
        }
    
        return self::$instance;
      }
    
    ?>
    
Observem que o construtor é privado e o objeto só pode ser acessado pelo método `getInstance()`. Geralmente esse padrão é utilizado para lidar com questões de integridade do sistema como, conexões de banco, transações e atividades que não se multiplicam na aplicação. Sessão é uma atividade singular no sistema, ela sempre fornecerá dados da requisição atual do agente(usuário).


## Implementar nossa autenticação com sessions


Por convenção, nossa autênticação é realizada no controlador `App\Controllers\AuthenticationController`. Ele se utilizará da classe que lida com usuários da aplicação (`Models\Usuario`), e também com uma nova dependência chamada `Request`. 

Implementamos uma instancia automática de `Request` como parametro, para qualquer método do controlador. Sendo assim, temos a nosso favor métodos que lidam com sessions, http e etc. Em nosso fluxo podemos observar o parameto `$request` do método `login`. Ele consegue acessa o objeto `SessionManipulation` e seus métodos. Após capturmos o usuário do banco conseguimos passa como array para o método `->user()` e assim deixa-lo permanentemente na sessão.

    <?php
    
    namespace App\Controllers;
    
    use App\Models\Usuario;
    use Core\Controller\ControllerAction;
    use Core\Router\Request;
    
    class AuthenticationController extends ControllerAction
    {
    
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
        TTransaction::close();
    
      } 


---

**IMPORTANTE!!!** 

> OLHAR A DOCUMENTAÇÃO DO PHP SESSIONS.
> ENTENDER O CONCEITO DE SESSÕES PHP OU NÃO (PYTHON, JAVA OU OUTRO)
ESTAMOS CONSTRUINDO UMA APLICAÇÃO HANDS ON, A QUAL PRECISAMOS SER PESQUISADORES, PARA MELHOR USO DA LINGUAGEM E FERRAMENTA. 

SEGUE MANUAL DE REFERêNCIA DO PDO PHP - https://www.php.net/manual/pt_BR/book.session.php



** REFERÊNCIAS

- https://www.php.net/manual/pt_BR/book.session.php
- https://www.w3schools.com/php/php_sessions.asp
- https://laravel.com/docs/5.8/session
 


> **Conclusão:**
>
> *   A introdução ao conceito de SESSIONS
> *   Implementação da classe SessionManipulation com pattern singleton  
> *   Deixamos aplicação autenticando e redirecionando para o administrativo.
