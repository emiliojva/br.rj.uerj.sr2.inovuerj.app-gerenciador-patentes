<?php
/**
 * Created by PhpStorm.
 * User: Administrador
 * Date: 12/2/2020
 * Time: 10:00 PM
 */

use Monolog\Logger;
use Monolog\Handler\StreamHandler;


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

testInstanceMonolog();

/**
 * Função para testar se package monolog foi instanciado com sucesso e ja cria um log no caminho App/logs/your.log
 * @throws Exception
 * @link https://packagist.org/packages/monolog/monolog#1.25.5
 */
function testInstanceMonolog(){

  // create a log channel
  $log = new Logger('name');
  $log->pushHandler(new StreamHandler('../#private/logs/your.log', Logger::WARNING));

  // add records to the log
  $log->warning('Foo');
  $log->error('Bar');

  echo "Ótimo, meu php já instanciou Monolog , sem que eu faça require em Logger e StreamHandler";


}
