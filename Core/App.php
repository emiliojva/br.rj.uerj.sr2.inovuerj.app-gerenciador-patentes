<?php
/**
 * Created by PhpStorm.
 * User: Administrador
 * Date: 12/8/2020
 * Time: 3:34 PM
 */

namespace Core;

use Core\Helpers\Debug;

class App
{

  private $_dispatcher;

  public function __construct()
  {

    /**
     * Carregando Helpers Ajudantes
     */
    require_once 'Helpers/functions.helpers.php';

    /**
     * Manipulador da Camada Dispatcher()
     */
    $this->_dispatcher = new \Core\Dispatcher();

  }


  /**
   * Despachante para controladores
   */
  public function dispatcher()
  {
    /**
     * pega o retorno do dispatcher ja resolvido com callback e params da rota.
     */
    $result = $this->_dispatcher->run();

    if(!$result)
      exit('Rota não encontrada');


    $callback = $result['callback'];
    $params = $result['params'];

    /**
     *  Verifica se o conteúdo da variável pode ser chamado como função(callable)
     */
    if(is_callable($callback)){
      call_user_func_array($callback,$params);
    }

  }

}

