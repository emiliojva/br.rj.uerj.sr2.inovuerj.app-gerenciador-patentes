<?php

namespace App\Models;

use Core\ADO\TTransaction;
use Core\Http\SessionManipulation;

class Usuario
{

  private $id;
  private $email;
  private $senha;
  private $ip_address;
  private $user_agent;
  private $init_activity;
  private $last_activity;


  /**
   * Acionar quando persistimos do banco um array.
   * @var $_from_array
   */
  private $_from_array = [];

  public function __construct()
  {
  }


  /**
   * @return bool
   */
  public function autenticar()
  {

    /**
     * Abre uma conexao com banco e executa comando de transação 'begin'
     */
    TTransaction::open();

    /**
     * @var $conexao \PDO
     */
    $conexao = TTransaction::get();

    $statement = $conexao->prepare("select id,email,senha from usuario where email = :email");

    $statement->execute(
      array(
        'email' => $this->email,
      )
    );

    $result = $statement->fetch(\PDO::FETCH_ASSOC);

    /**
     * Encerra bloco de transação entre o TTransaction::open e executa comando de encerramento de transação 'commit()'
     */
    TTransaction::close();

    /**
     * Valida se foi encontrado email no retorno da Transaction
     */
    if (!empty($result['email'])) {

      /**
       * Capturar hash de senha armazenado no banco
       */
      $hash = $result['senha'];

      /**
       * Remover conteudo da senha do array de retorno
       */
      unset($result['senha']);

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
        $this->senha = null;

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
   * Preenche os atributos do objeto atraves de um array compativel.
   * @param $array_row
   */
  public function fromArray($array_row){

    $this->_from_array = $array_row;

    foreach ($array_row as $col=>$value){
      $this->{$col} = $value;
    }

  }

  /**
   * @return mixed
   */
  public function toArray(){
    return $this->_from_array;
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
    if ($this->senha) {
      return password_verify($this->senha, $hash);
    }

  }

  public function setSenha($senha)
  {
    $this->senha = $senha;
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
