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

$dispatcher = new \Core\Dispatcher();
$dispatcher->run();
