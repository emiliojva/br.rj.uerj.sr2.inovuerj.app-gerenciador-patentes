<?php
/**
 * Created by PhpStorm.
 * User: Administrador
 * Date: 12/2/2020
 * Time: 10:00 PM
 */

use Core\Helpers\Debug;

/**
 * Princípio basico da PSR-4 - Autoloading
 *
 *
 * Responsável por importar todas as classes dependentes das outras.
 * @link https://www.php-fig.org/psr/psr-4/
 *
 * Sem isso, o desenvolvedor teria que importar manualmente cada classe que fosse instanciar, com o comando 'require'
 * como no exemplo abaixo:
 * https://www.php-fig.org/psr/psr-4/examples/
 *
 */
require_once '../vendor/autoload.php';

try {

  /**
   * Starts Config to .env engine
   */
  $dotenv = Dotenv\Dotenv::createImmutable(__DIR__.'/../');
  $dotenv->load();

  /**
   * Start Core Application with Engines Renderer and ControllerViewEngine Required
   */
  $renderer = new \Core\Renderer\PHPRenderer(); # Renderizador Web(text/html) ou Api(application/json)
  $controller_view_engine = new \Core\Controller\ControllerViewEngine('\League\Plates\Engine', '../App/Views'); # Controlador de Engine Views

  /**
   * Execucao do despachante.
   * Responsavel por captura e executacao das rotas encontradas
   * (new class())->method() - Forma alternativa de, auto instanciar e executar um método
   */
  (new \Core\App( $renderer, $controller_view_engine ) )->dispatcher();  

} 
catch ( \Dotenv\Exception\InvalidPathException $exception_dot_env) {
  $error_message = $exception_dot_env->getMessage();
  $msg = "Crie um arquivo .env a partir do .env.example e atualize conforme seu ambiente. \\n\\n Error: {$error_message} ";
  Debug::alert($msg);
}
catch (\Exception $e) {
  Debug::exception_to_alert($e);
}