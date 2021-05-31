<?php

namespace App\Models;

use Core\ADO\TDatabase;
use Core\ADO\TModel;
use Core\ADO\TTransaction;

class User extends TModel
{
  protected $table = 'users';

  private $id;
  private $email;
  private $password;
  private $ip_address;
  private $user_agent;
  private $init_activity;
  private $last_activity;

  public function __construct()
  {
    parent::__construct();
  }

  /**
   * Realiza autenticação se encontrar o email no tabela users do banco
   * @return bool
   */
  public function auth()
  {

    $result = self::where('email',$this->email)->first();

    if($result){
      $result = $result->toArray();
    }

    /**
     * Valida se foi encontrado email no retorno da Transaction
     */
    if (!empty($result['email'])) {

      /**
       * Capturar hash de senha armazenado no banco
       */
      $hash = $result['password'];
      
      /**
       * Remover conteudo da senha do array de retorno
       */
      unset($result['password']);

      /**
       * Preencher os atributos do objeto atraves do array de retorno do banco
       */
      $this->fromArray($result);

      /**
       * Se a hash conseguir validar a senha fornecida, metodo autenticar retorna true!
       */
      if ($this->decrypt($hash)) {

        /*
         * Anular senha que veio da entrada do post após validar.
         */
        $this->password = null;

        /**
         * Informar que autenticou
         */
        return true;
        
      }

    }

    /**
     * Não foi autenticado com a senha fornecida para class Usuario
     */
    return false;

  }

  /**
   * Metodo para decodificar hash
   * retorna true, se hash passada conseguir casar com senha(string/texto) passado via post;
   *
   * @param $hash
   * @return bool
   */
  private function decrypt($hash)
  {
    if ($this->password) {
      return password_verify($this->password, $hash);
    }

  }

  public function setPassword($password)
  {
    $this->password = $password;
    return $this;
  }

  public function getEmail()
  {
    return $this->email;
  }

  public function setEmail($email)
  {
    $this->email = $email;
    return $this;
  }



  /**
   * Metodo para criptografar nosso password para o banco de dados.
   * Usando o Algoritimo BCRYPT
   *
   * @param $password
   * @return bool|string
   */
  public function crypt($password)
  {
    /**
     * Forma de fortificar a sua hash com options de custo ou loop
     */
    $hash_options = $this->crypt_options($password);

    /**
     * Gera o hash BCRYPT.
     *
     * @see Função php "password_hash()" cria um novo password hash usando um algoritmo forte de hash de via única.
     * password_hash() é compatível com crypt().
     * Por isso, os password hashes criados com crypt() podem ser utilizados com password_hash().
     */
    $hash = password_hash($password, PASSWORD_BCRYPT, $hash_options);

    return $hash;

  }

  /**
   * Metodo para gerar opcoes de custo de criptografia, para a funcao password_hash
   * @link https://www.php.net/manual/pt_BR/function.password-hash.php
   * @param $password
   */
  private function crypt_options($password)
  {
    # finding a good cost
    $timeTarget = 0.05; // 50 milliseconds
    $cost = 8;
    do {
      $cost++;
      $start = microtime(true);
      password_hash($password, PASSWORD_BCRYPT, ["cost" => $cost]);
      $end = microtime(true);
    } while (($end - $start) < $timeTarget);

    # Gerando hash com cost encontrado
    $options = array('cost' => $cost);

    return $options;
  }


}
