<?php
  /**
   * Created by PhpStorm.
   * User: Berguerians
   * Date: 6/4/2020
   * Time: 6:15 PM
   */

  namespace Core\Helpers;

class Number
{

  public static function stringToFloat($value)
  {
    $fmt = new \NumberFormatter('pt_BR', \NumberFormatter::DECIMAL);
    return $fmt->format($value);
  }

}

