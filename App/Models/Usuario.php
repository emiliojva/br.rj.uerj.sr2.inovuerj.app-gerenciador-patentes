<?php

namespace App\Models;

use Core\ADO\TTransaction;

class Usuario
{

  private $email;
  private $senha;

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

    $statement = $conexao->prepare("select email,senha from usuario where email = :email");

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
       * Captura hash de senha armazenado no banco
       */
      $hash = $result['senha'];

      /**
       * Se a hash conseguir validar a senha fornecida, metodo autenticar retorna true!
       */
      if ($this->decrypt($hash)) {
        return true;
      }

    }

    /**
     * Se conseguir chegar aqui, nao foi autenticado com a senha fornecida para class Usuario
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
