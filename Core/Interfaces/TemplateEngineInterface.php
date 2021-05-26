<?php 

namespace Core\Interfaces;

interface TemplateEngineInterface extends IGlobal {
 
  public function render($name, array $data = array());
  
}