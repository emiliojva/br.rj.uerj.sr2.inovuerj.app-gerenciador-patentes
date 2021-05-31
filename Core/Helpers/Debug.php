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

  public static function exception_to_alert(\Exception $e){

    $error_message = $e->getMessage();
    $line = $e->getLine();
    $file = $e->getFile();
  
    $array_error_trace = $e->getTrace()[0];
  
    $msg = "Error: {$error_message}\\n\\n";
    foreach ($array_error_trace as $col=>$value){
      $value = addslashes($value);
      $msg .= "\\t{$col}: {$value}\\n";
    }
  
    self::alert($msg);
  }

  public static function alert($msg){
    print "
    <script>
      alert(\"{$msg}\");
    </script>";
  }

}
