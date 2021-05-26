<?php


namespace Core\Helpers;


use Inovuerj\ADO\TTransaction;
use Inovuerj\Helper\Util;

class Collation
{
    public static function convertCollationTables($charset = 'utf8mb4', $collation = NULL){


        TTransaction::open($GLOBALS['banco']);

        /**
         * @global \PDO $con
         */
        $con = TTransaction::get();

        if (!$con) {
            echo "Cannot connect to the database ";
            die();
        }

        /**
         * @global \PDOStatement $result
         */
        $result = $con->query('show tables');

        while ($tables = $result->fetch()) {
            foreach ($tables as $key => $value) {

                echo "ALTER TABLE {$value} CONVERT TO CHARACTER SET {$charset} <br>";

                if(!is_null($collation)){
                    $con->exec("ALTER TABLE {$value} CONVERT TO CHARACTER SET {$charset} COLLATE {$collation}");
                } else {

                    $con->exec("ALTER TABLE {$value} CONVERT TO CHARACTER SET {$charset}");
                }

            }
//            ALTER TABLE `emuseu`.`usuario_tem_permissao` CHARACTER SET = utf8mb4 ;

//            ALTER TABLE emuseu.esporte CONVERT TO CHARACTER SET utf8mb4;
        }

        die;
        echo "The collation of your database has been successfully changed!";


    }
}