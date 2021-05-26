<?php
/**
 * Created by PhpStorm.
 * User: Administrador
 * Date: 12/2/2020
 * Time: 10:00 PM
 */

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

/**
 * Execucao do despachante.
 * Responsavel por captura e executacao das rotas encontradas
 *
 * (new class())->method() - Forma alternativa de, auto instanciar e executar um método
 */

$renderer = new \Core\Renderer\PHPRenderer(); # Renderizador Web(text/html) ou Api(application/json)
$controller_view_engine = new \Core\Controller\ControllerViewEngine('\League\Plates\Engine', '../App/Views'); # Controlador de Engine Views

/**
 * Start Core Application with Engines Renderer and ControllerViewEngine Required
 */
(new \Core\App( $renderer, $controller_view_engine ) )
  ->dispatcher();