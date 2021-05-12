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
function view(){
  return call_user_func_array('\Core\Controller\ControllerAction::view', func_get_args());
}

if (!function_exists('dump')) {
  function dump(){
    call_user_func_array('\Core\Helpers\Debug::dump', func_get_args());
  }
}

if (!function_exists('dd')) {
  function dd(){
    call_user_func_array('\Core\Helpers\Debug::dd', func_get_args());
  }
}

/**
 * Busca um valor em um array muldimensional atraves de um array unidimensional fornecido como segundo parametro
 *
 * @param [type] $data_arr
 * @param [type] $data_arr_call
 * @return void
 */
function flatCall($data_arr, $data_arr_call){
  $current = $data_arr;
  foreach($data_arr_call as $key){
      $current = $current[$key];
  }
  return $current;
}

/**
 * Remove spaces and converts empty string to NULL
 *
 * @param string $x
 * @return void
 */
function sanitize($x){
  if(strlen($x)==0){   $x = NULL;  } else {    
    $x = filter_var($x,FILTER_SANITIZE_STRING);
    $x = trim($x);  
  }  
  return $x;
}


