<?php
/**
 * Created by PhpStorm.
 * User: Administrador
 * Date: 12/8/2020
 * Time: 5:52 PM
 */

namespace Core\Helpers;

class Debug {

  public static function dump($any,$dump_title = ""){

    echo !$dump_title ? '' : $dump_title . ":<br>";
    print "<pre>";
    var_dump($any);
    print "<hr></pre>";
  }

  public static function dd($any){
    self::dump($any); die;
  }

}
