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


}
