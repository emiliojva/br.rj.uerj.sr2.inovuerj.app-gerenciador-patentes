<?php
/**
 * Created by PhpStorm.
 * User: Administrador
 * Date: 12/22/2020
 * Time: 4:46 PM
 */

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
//    echo $templates->render($view,$params);
  }



}
