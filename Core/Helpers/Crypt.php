<?php


namespace Core\Helpers;


use Inovuerj\ADO\TTransaction;
use Inovuerj\Helper\Util;

/**
 * https://www.php.net/manual/pt_BR/function.openssl-encrypt.php
 * Class Crypt
 * @package App\Models\Helpers
 */
class Crypt
{
    public static function my_simple_crypt( $string, $action = 'e' ) {

        // you may change these values to your own
        $secret_key = 'my_simple_secret_key';
        $secret_iv = 'my_simple_secret_iv';

        $output = false;
        $encrypt_method = "AES-256-CBC";
        $key = hash( 'sha256', $secret_key );
        $iv = substr( hash( 'sha256', $secret_iv ), 0, 16 );

        if( $action == 'e' ) {
            $output = base64_encode( openssl_encrypt( $string, $encrypt_method, $key, 0, $iv ) );
        }
        else if( $action == 'd' ){
            $output = openssl_decrypt( base64_decode( $string ), $encrypt_method, $key, 0, $iv );
        }

        return $output;
    }
}