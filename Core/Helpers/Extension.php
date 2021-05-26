<?php
  /**
   * Created by PhpStorm.
   * User: Berguerians
   * Date: 6/4/2020
   * Time: 6:15 PM
   */

  namespace Core\Helpers;

class Extension
{
  static $EXTENSION = array();

  public static function check($name)
  {
    if(!isset(self::$EXTENSION[$name])){
      self::$EXTENSION[$name] = extension_loaded($name);
    }

    return self::$EXTENSION[$name];
  }

  public static function getAtivas()
  {
    return get_loaded_extensions();
  }

  public static function getFunctionsByExtension($module_name)
  {
      return get_extension_funcs($module_name);
  }

  public static function forceLoadModule($module_name)
  {
    return @dl($module_name);
  }

}

