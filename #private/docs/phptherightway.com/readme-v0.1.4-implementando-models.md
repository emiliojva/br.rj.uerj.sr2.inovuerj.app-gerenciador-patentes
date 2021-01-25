# [](#implementando-mvc-models)Models - Implementando camada Model da Aplicação

> **Objetivos desta etapa:**
>
> *   Apresentar Camada Model do MVC 
> *   Apresentar Classes do Core para lidar com Models
> *   Implementar nosso primeiro Model
> *   Implementação do Controller de autenticação utilizando `Model` Usuario    
> *   Apresentar conclusão da documentação    


> 
> **Branch**: [models](https://)


## Apresentar Camada Model do MVC

A responsabilidade dos models é representar o negócio. Também é responsável pelo acesso e manipulação dos dados na sua aplicação. 

O Model ou Modelo, exerce papel de armazenar as regras de negócios da aplicação. 

Regras de negócios seriam dados restritos a uma base de dados ou fonte de informações que precisam de um cuidado maior. Exemplo, a integridade do nosso banco de dados MySQL (SGBD).
A classes de modelo, serão a representação exata de cada entidade ou tabela do banco.



## Implementar nosso primeiro Model

Nosso Primeiro Modelo(model) é classe Usuario. <br>
Está classe irá lidar diretamente com a entidade/tabela `usuario` do nosso banco.<br>
Utilizaremos a classe do Core\ADO, `TTransaction` para abrir um conexão e também iniciar um bloco de transações.  <br>
Uma `transaction` é um bloco, tal qual como uma estrutura de um `try/catch`, que só executa tudo, caso todas instruções(statements) executadas no banco, não FALHEM!. <br>

Portanto, temos algumas funções de banco, para lidar com isso. São elas: 

> * Begin - Inicia uma transação de banco  
> * Rollback - Defaz todas transações executadas no bloco abaixo do comando `begin` iniciado.
> * Commit - Ordena o banco a persistir todas as instruções do bloco envolvido pelo `begin`.


Em resumo, podemos controlar atividades comuns do nosso sistema, quando este está manipulado sentenças de banco. 

Exemplo: temos uma loja virtual, e o usuário ja fez cadastro pessoal, informou dados bancários, mas no fim, ao processar pedido, a administradora do cartão recusou! 
Temos aqui, um `rollback`. Caso fosse aprovado, um `commit`.

Nossa classe `Usuario` está preparada para lidar com : 

- conceito de bean - getters and setters. Setar ou retornar um email e senha. 
- Criptografia - Consegue com o algoritmo BCRYPT, criptogragar ou descriptografar hashs, usando funções do php `password_hash` e `password_verify`. 
- Implementação seguindo manual do PHP https://www.php.net/manual/pt_BR/book.password.php
  


        <?php
        
        namespace App\Models;
        
        use Core\ADO\TTransaction;
        
        class Usuario
        {
        
          private $email;
          private $senha;
        
          public function __construct()
          {
          }
        
        
          /**
           * @return bool
           */
          public function autenticar()
          {
        
            /**
             * Abre uma conexao com banco e executa comando de transação 'begin'
             */
            TTransaction::open();
        
            /**
             * @var $conexao \PDO
             */
            $conexao = TTransaction::get();
        
            $statement = $conexao->prepare("select email,senha from usuario where email = :email");
        
            $statement->execute(
              array(
                'email' => $this->email,
              )
            );
        
            $result = $statement->fetch(\PDO::FETCH_ASSOC);
        
            /**
             * Encerra bloco de transação entre o TTransaction::open e executa comando de encerramento de transação 'commit()'
             */
            TTransaction::close();
        
            /**
             * Valida se foi encontrado email no retorno da Transaction
             */
            if (!empty($result['email'])) {
        
              /**
               * Captura hash de senha armazenado no banco
               */
              $hash = $result['senha'];
        
              /**
               * Se a hash conseguir validar a senha fornecida, metodo autenticar retorna true!
               */
              if ($this->decrypt($hash)) {
                return true;
              }
        
            }
        
            /**
             * Se conseguir chegar aqui, nao foi autenticado com a senha fornecida para class Usuario
             */
            return false;
        
          }
        
          /**
           * Metodo para decodificar hash
           * retorna true, se hash passada conseguir casar com senha(string/texto) passado via post;
           *
           * @param $hash
           * @return bool
           */
          private function decrypt($hash)
          {
            if ($this->senha) {
              return password_verify($this->senha, $hash);
            }
        
          }
        
          public function setSenha($senha)
          {
            $this->senha = $senha;
            return $this;
          }
        
          public function getEmail()
          {
            return $this->email;
          }
        
          public function setEmail($email)
          {
            $this->email = $email;
            return $this;
          }
        
          /**
           * Metodo para criptografar nosso password para o banco de dados.
           * Usando o Algoritimo BCRYPT
           *
           * @param $password
           * @return bool|string
           */
          public function crypt($password)
          {
            /**
             * Forma de fortificar a sua hash com options de custo ou loop
             */
            $hash_options = $this->crypt_options($password);
        
            /**
             * Gera o hash BCRYPT.
             *
             * @see Função php "password_hash()" cria um novo password hash usando um algoritmo forte de hash de via única.
             * password_hash() é compatível com crypt().
             * Por isso, os password hashes criados com crypt() podem ser utilizados com password_hash().
             */
            $hash = password_hash($password, PASSWORD_BCRYPT, $hash_options);
        
            return $hash;
        
          }
        
          /**
           * Metodo para gerar opcoes de custo de criptografia, para a funcao password_hash
           * @link https://www.php.net/manual/pt_BR/function.password-hash.php
           * @param $password
           */
          private function crypt_options($password)
          {
            # finding a good cost
            $timeTarget = 0.05; // 50 milliseconds
            $cost = 8;
            do {
              $cost++;
              $start = microtime(true);
              password_hash($password, PASSWORD_BCRYPT, ["cost" => $cost]);
              $end = microtime(true);
            } while (($end - $start) < $timeTarget);
        
            # Gerando hash com cost encontrado
            $options = array('cost' => $cost);
        
            return $options;
          }
        
        
        }




## Apresentar Classes do Core para lidar com Models

Em um caso de uso do nossa aplicação Final. 
<br>Para autenticarmos nosso usuário, precisaremos de classes.<br> 
Conceitos de banco de dados como conexões e transações implementados nas classes listadas :

> * `Core/ADO/TConnection` - Responsável pela conexão com nosso banco de dados
> * `Core/ADO/TTransaction` - Transações ou Transactions

**obs: O 'T' contido inicialmente nos nomes das classes significa Table ou seja Table > Transaction == TTransaction, isto é apenas uma convenção do nosso framework**  

O CORE de `TConnection` baseia-se na classe `PDO`, nativa do PHP.
PDO é o acronimo para PHP Database Objects.

![Exemplo conexão de banco com PDO](/%23private/docs/phptherightway.com/imagens/models-banco-conexao-pdo.png "Exemplo de uma conexão com banco, usando classe PDO do PHP"). 


Nossa aplicação está sendo feita orientada a objetos. Nossos melhores amigos para isto, são os `Objects`, e a classe `PDO` nos ajuda muito bem com isso. 

Vejam os métodos utilizados pela classe `TConection` e explorem a documentação do PDO, em caso de dúvidas. 

[Link documentação PDO](https://www.php.net/manual/pt_BR/pdo.connections.php)


## Implementação do Controller de autenticação utilizando `Model` Usuario    

Nossa aplicação precisa processar e capturar informaçõs do Formulário de autenticação, na home.<br>

Nosso controller, executará todas as funções necessárias para este
Fluxo de autenticação:
    
- Capturar o `$_POST` com email e senha    
- Permitir uso de Sessões(requisição persistente). 
- Iniciar Sessions com função `session_start()`
- Instanciar um Model(modelo de negócio) da classe Usuario, com `new Usuario()`
- Executar o método `$usuario->autenticar()` para validar as informações
- E se a validação retornar true, preencher a sessão com os dados do usuário

##### Implementação do nosso controller de autenticações **App\Controllers\AuthenticationController**, usando a instrução `extends` para gerar a notação "é um' `controller` (conceito de herança): 

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
    } 






---

**IMPORTANTE!!!** 

> OLHAR A DOCUMENTAÇÃO DO PHP PDO.
> ENTENDER O CONCEITO DE TRANSAÇÕES DE UM SGBD (SISTEMA GERENCIADOR DE BANCO DE DADOS)
ESTAMOS CONSTRUINDO UMA APLICAÇÃO HANDS ON, A QUAL PRECISAMOS SER PESQUISADORES, PARA MELHOR USO DA LINGUAGEM E FERRAMENTA. 

SEGUE MANUAL DE REFERêNCIA DO PDO PHP - https://www.php.net/manual/pt_BR/pdo.connections.php 


 


> **Conclusão:**
>
> *   A introdução ao conceito de models - [link]( https://www.treinaweb.com.br/blog/o-que-e-mvc/#:~:text=O%20MVC%20%C3%A9%20um%20padr%C3%A3o%20de%20arquitetura%20de%20software.&text=O%20princ%C3%ADpio%20b%C3%A1sico%20do%20MVC,camada%20de%20controle%20(controller))  
> *   Implementação da primeira classe Model para lidar com usuario  
> *   Usamos o informações e técnicas de Criptografia nativos do php - [link](https://www.php.net/manual/pt_BR/function.password-hash.php)    
> *   Deixamos aplicação autenticando de forma muito básica e salvando em uma session    
