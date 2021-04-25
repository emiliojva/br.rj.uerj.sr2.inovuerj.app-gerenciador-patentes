<?php

/*
 * classe TTransaction
 *  Esta classe prov os mtodos
 *  necessrios manipular transaes
 */

namespace Core\ADO;

final class TTransaction
{
  /**
   * @var PDO
   */
  private static $conn;     // conexao ativa

  /*
   * metodo __construct()
   * Esta declarado como private para
   * Impedir que se crie instncias de TTransaction
   */
  private function __construct()
  {
  }

  /*
   * mtodo open()
   *  Abre uma transao e uma conexo ao BD
   *  @param $database = nome do banco de dados
   */
  public static function open($database = 'my_db')
  {
    // abre uma conexao PDO e mantem uma instancia unica na aplicação (singleTon)
    if (empty(self::$conn)) {
      try {
        self::$conn = TConnection::open($database);  
        // inicia a transao
        self::$conn->beginTransaction();
      } catch (\Exception $e) {
        dd($e->getMessage());
      }
    }
  }

  /**
   * Metodo get()
   * Retorna a conexo ativa da transacao
   * @return PDO
   */
  public static function get()
  {
    // retorna a conexo ativa
    return self::$conn;
  }

  /*
   * metodo rollback()
   * Desfaz todas operaes realizadas na transao
   */
  public static function rollback()
  {
    if (self::$conn) {
      // Desfaz as operacoes realizadas pelo metodo open;
      self::$conn->rollback();
      self::$conn = NULL;
    }
  }

  /*
   * metodo close()
   *  Aplica todas operaes realizadas e fecha a transao
   */
  public static function close()
  {
    if (self::$conn) {
      // aplica as operaes realizadas
      // durante a transao
      $commit = self::$conn->commit();
      self::$conn = NULL;

      return $commit;
    }
  }

}
