<?php

namespace Core\Http;

final class SessionManipulation
{

  private static $instance = null;

  private function __construct()
  {

    /**
     * Verifica se a aplicação ja possui uma session aberta(session_start()).
     * Se não houver, inicia uma.
     *
     * Constantes do PHP para sessions
     * ===============================
     * PHP_SESSION_DISABLED se as sessões estiverem desabilitadas.
     * PHP_SESSION_NONE se as sessões estiverem habilitadas, mas nenhuma existir.
     * PHP_SESSION_ACTIVE se as sessões estiverem habilitadas, e uma existir.
     *
     */
    if(session_status() === PHP_SESSION_NONE){
      // Abrir sessão
      session_start();
    }

  }

  /**
   * SingleTon Instance
   * @return SessionManipulation|null
   */
  public static function getInstance()
  {

    if (null === self::$instance) {
      self::$instance = new static();
    }

    return self::$instance;
  }

  public function get($key)
  {

    if (!isset($_SESSION[$key])) {
      return null;
    }

    return $_SESSION[$key];
  }

  public function put($key,$value)
  {

    $_SESSION[$key] = $value;

    return self::getInstance();

  }

  /**
   * Retornar ou settar um usuario autenticado na sessão
   * @param null $array_data_user
   * @return array|object
   */
  public function user($array_data_user = NULL, $with_array = false){

    if($array_data_user){
      self::setUser($array_data_user);
    }

    /**
     * Armazenando usuario na Session da Aplicação
     */
    return self::getUser($with_array);

  }


  /**
   * Retornar um usuario autenticado
   * @return array
   */
  public static function getUser($with_array = false)
  {

    $array_user_data = [];

    if (isset($_SESSION['user_data']['logged']) && is_numeric($_SESSION['user_data']['id'])) {
      $array_user_data = $_SESSION['user_data'];
    }

    return !$with_array ? (object)$array_user_data : $array_user_data ;

  }

  /**
   * Adiciona o usuario autenticado(persistido do banco) no array da session, com nome 'user_data'
   *
   * @param array $user_data
   * @return SessionManipulation|null
   */
  public static function setUser(array $user_data)
  {

    /**
     * apenas registro o usuario na sessão se o array contiver id e email
     */
    if(isset($user_data['id']) && isset($user_data['email'])){

      $user_data = array(
        'id'            => $user_data['id'],
        'email'         => $user_data['email'],
        'logged'        => TRUE,
        'ip_address'    => $_SERVER['REMOTE_ADDR'],
        'user_agent'    => $_SERVER['HTTP_USER_AGENT'],
        'init_activity' => time(),
        'last_activity' => isset($_SESSION['init_activity']) ? $_SESSION['init_activity'] + time() : time()
      );

      return self::getInstance()->put('user_data',$user_data);

    }

  }


  /**
   * Métodos Serão implementados mais a frente
   */

  public function all(){

  }

  public function has(){

  }

  public function push(){

  }

  public function pull(){

  }

  public function flash()
  {

  }

  public function regenerate()
  {

  }


}
