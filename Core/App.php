<?php
/**
 * Created by PhpStorm.
 * User: Administrador
 * Date: 12/8/2020
 * Time: 3:34 PM
 */

namespace Core;

class App
{

  private $_dispatcher;

  public function __construct()
  {
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
    $this->_dispatcher->run();
  }

}

