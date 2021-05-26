<?php

namespace Core\Controller;

use Core\Interfaces\TemplateEngineInterface;

class ControllerViewEngine implements TemplateEngineInterface
{

  private $template_engine = null;
  private $path_views = "";
  private $template_engine_instance = null;

  public function __construct($template_engine, $path_views)
  {
    $this->template_engine = $template_engine;
    $this->path_views = $path_views;

    $this->template_engine_instance = new $this->template_engine($this->path_views);

    if(method_exists($this->template_engine_instance,'render')===FALSE){
      throw new \Exception('Objeto não possui metodo render()');
    }
    
  }

  public function render($name, array $data = array())
  {
    $this->template_engine_instance->render($name, $data);
  }

  public function getTemplateEngineInstance()
  {
    return $this->template_engine_instance;
  }
}