# [](#implementando-mvc-controllers)Controllers - Implementando o Controlador da Aplicação

> **Objetivos desta etapa:**
>
> *   Apresentar Camada Controller do MVC
> *   Implementar nosso Controller Default `PublicController`  
> *   Implementar classe da camada Controller no Core\Controller 

> 
> **Branch**: [controllers](https://)


## Apresentar Camada Controller do MVC

O Controlador exerce papel de capturar a lógica necessária do modelo e encaminhar um desfecho para nossa aplicação. 

Um Fluxo de Exemplo, nossa aplicação precisa processar e capturar informações do Formulário de autenticação, na home. Este fluxo será implementado no controller `Authentication`mais adiante.

Nosso controller, executará todas as funções necessárias para : 
    
- Capturar o `$_POST` com email e senha    
- Permitir uso de Sessões(requisição persistente). 
- Iniciar Sessions com função `session_start()`
- Instanciar um Model(modelo de negócio) da classe Usuario, com `new Usuario()`
- Executar o método `$usuario->autenticar()` para validar as informações
- E se a validação retornar true, preencher a sessão com os dados do usuário


A classes criadas no caminho `\App\Controllers\` que estenderem a classe `ControllerAction`, terão poderes para lidar com as `helpers`: 

- Sessions
- Requests
- Router
- Views 


## Implementar nosso Controller Default `PublicController`

Implementação do nosso controller Default `Public` **App\Controllers\PublicController**, usando a instrução `extends` para gerar a notação "é um' `controller` (conceito de herança): 

    <?php
    
    namespace App\Controllers;
    
    use Core\Controller\ControllerAction;
    
    class PublicController extends ControllerAction
    {
    
      public function home()
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
    
      public function about(){
        echo 'Estou na rota sobre';
      }
    
    }


## Implementar classe da camada Controller no Core\Controller

Nosso controller está localizado em `\Core\Controller\ControllerAction.php` e tem como objetivo ser estentido por outras classes, por se tratar de uma classe Abstrata.

Nosso controller é quem direciona todo o processamento para ser renderizado(views).
Portanto, instanciamos o nosso Template Engine(motor de renderização Plates) no método `templateEngine()`.

Possibilitamos a renderização pelo método `view`. Bastando fornecer o `nome` da view e um `array` com os `parametros` que você precisará. 

Estamos utilizando o motor de renderização nativo do PHP, que é fornecido através da classe
`\League\Plates\Engine`. Explicaremos no tópico `Views`. [Exemplo de template PHP com Plates](https://phptherightway.com/#plain_php_templates)  


Abaixo temos a implementação da classe abstrata `ControllerAction`:


    <?php
    
    namespace Core\Controller;
    
    use Core\Helpers\Debug;
    
    abstract class ControllerAction
    {
    
      /**
       * @var League\Plates\Engine
       */
      private static $template_engine;
    
      public function __construct()
      {
        /**
         * Iniciando Nossa Engine de Templates - Plates (Nativo do PHP)
         * Conforme indicação da comunidade PHPTheRightWay.com
         */
      }
    
      /**
       * @return League\Plates\Engine
       */
      public static function templateEngine()
      {
        if(!self::$template_engine){
          self::$template_engine = new \League\Plates\Engine('../App/Views');
        }
    
        return self::$template_engine;
      }
    
      public static function view($view,$params)
      {
        /**
         * Permite usuario usar a notação "." (dot) para separar caminho das Views
         */
        $view = str_replace('.','/',$view);
    
        /**
         * Renderiza view incluindo parametros da rota
         */
        echo self::templateEngine()->render($view,$params);
      }
    
    }


