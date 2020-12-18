<?php
/**
 * Created by PhpStorm.
 * User: Administrador
 * Date: 12/18/2020
 * Time: 8:18 PM
 */
function redirect($caminho){
  header("Location: {$caminho}");
}

/**
 * Helper(ajudante) para instanciar a engine de templates Plates
 * Renderizar para tela a view e seu template pai(layout)
 * @param $view
 * @param $params
 */
function view($view,$params){
  /**
   * Iniciando Nossa Engine de Templates - Plates (Nativo do PHP)
   * Conforme indicação da comunidade PHPTheRightWay.com
   */
  $templates = new League\Plates\Engine('../App/Views');

  /**
   * Permite usuario usar a notação "." (dot) para separar caminho das Views
   */
  $view = str_replace('.','/',$view);

  /**
   * Renderiza view incluindo parametros da rota
   */
  echo $templates->render($view,$params);
}


function dump(){
  call_user_func_array('\Core\Helpers\Debug::dump', func_get_args());
}

function dd(){
  call_user_func_array('\Core\Helpers\Debug::dd', func_get_args());
}



