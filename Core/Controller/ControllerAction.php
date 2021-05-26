<?php
/**
 * Created by PhpStorm.
 * User: Administrador
 * Date: 12/22/2020
 * Time: 4:46 PM
 */

namespace Core\Controller;

use Core\App;

class ControllerAction
{

  /**
   * @property $template_engine \League\Plates\Engine
   */
  private $template_engine;
  public  $controller_name;


  public function __construct()
  {
    /**
     * Iniciando Nossa Engine de Templates - Plates (Nativo do PHP)
     * Conforme indicação da comunidade PHPTheRightWay.com
     */
    $this->getTemplateEngine();

    $this->controller_name = $this->getControllerName();
    
   
  }

  private function getControllerName(){
    $path = explode('\\',$this->controller_name);
    return array_pop($path); //return get_class($this); 
  }

  protected function getTemplateEngine()
  {
    return !$this->template_engine ? $this->template_engine = App::get('getTemplateEngine') : $this->template_engine;
  }

  public function setTemplateEngine($template_engine){
    $this->template_engine = $template_engine;
  }

  public static function view($view,array $params = [])
  {
    /**
     * Renderiza view incluindo parametros da rota
     */
    return (new static)->render($view,$params);
  }

  public function render($view,array $params = [])
  {
    

    /**
     * Permite usuario usar a notação "." (dot) para separar caminho das Views
     */
    $view = str_replace('.','/',$view);
    $templateEngine = $this->getTemplateEngine();
    // $ref = new \ReflectionClass($templateEngine);     // dd($ref);

    $array_data =  [
      'active_route'    => $this->active_route,
      'controllerName'  =>  $this->getControllerName()
    ]; 

    $templateEngine->addData($array_data + $params);

    return $templateEngine->render($view,$params);

  }

}