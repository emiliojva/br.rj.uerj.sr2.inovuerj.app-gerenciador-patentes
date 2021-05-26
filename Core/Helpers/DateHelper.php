<?php
/**
 * Created by PhpStorm.
 * User: Administrador
 * Date: 11/5/2020
 * Time: 5:58 PM
 */

namespace Core\Helpers;


final class DateHelper
{

  /**
   * @return \DateTime
   * @throws \Exception
   */
  public static function getDateTimeLocalFixed()
  {
    $dt = new \DateTime();
//    $dt->modify('-4minutes+40seconds'); // fix to America/Rio Branco
    $dt->modify('-3hours-3minutes-20seconds');
    return $dt;
  }

  /**
   * retorna da corrigindo fuso horario no formato para persistir no banco
   * @return string
   * @throws Exception
   */
  public static function getDateTimeToDB()
  {
    return self::getDateTimeLocalFixed()->format('Y-m-d H:i:s');
  }



  /**
   * retorna da corrigindo fuso horario no formato para persistir no banco
   * @return string
   * @throws Exception
   */
  public static function getDateTimeFormatted()
  {
    return self::getDateTimeLocalFixed()->format('d-m-Y H:i:s');
  }

  public static function isDateIntervalOpen($data_inicial_string, $data_final_string)
  {
      $dt_now = self::dateTimeNow();

      $d1=new \DateTime($data_inicial_string); // portal aberto sexta às 18:00
      $d2=new \DateTime($data_final_string); // portal fechado segunda às 00:00

      return ( ($dt_now > $d1) && ($dt_now < $d2) );
  }

  /**
   * Retorna uma string com data e hora ATUAL, formato americano
   *
   * @return string Y-m-d H:i:s
   */
  public static function dateTimeNow() 
  {

      /**
       * Pegar data e hora via server world - NOT IMPLEMENTED
       */

      date_default_timezone_set('America/Sao_Paulo');
      $dt = new \DateTime('NOW');
      $dt->add( date_interval_create_from_date_string('-2 Hours + -2 Minutes') );
      return $dt->format('Y-m-d H:i:s');
  }

}
