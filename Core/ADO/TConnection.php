<?php

/*
 * classe TConnection
 *  gerencia conexes com bancos de dados,
 *  atravs de arquivos de configurao.
 */
namespace Core\ADO;

final class TConnection
{
    /*
     * mtodo __construct()
     *  No existiro instncias de TConnection
     *  por isto, estamos marcando-o como private
     */
    private function __construct()
    {
    }

    /*
     * mtodo open()
     *  recebe o nome do banco de dados,
     *  verifica se existe arquivo de configurao
     *  para ele, e instancia o objeto PDO correspondente
     */
    public static function open($name)
    {

        $path = getcwd() . "/../Config/database/{$name}.ini";
        // verifica se existe arquivo de configurao
        // para este banco de dados
        if (file_exists($path)) {
            // l o INI e retorna um array
            $db = parse_ini_file($path);
        } else {
            // se no existir, lana um erro
            throw new \Exception("Arquivo '$name' nao encontrado");
        }

        // l as informaes contidas no arquivo
        $user = $db['user'];
        $pass = $db['pass'];
        $name = $db['name'];
        $host = $db['host'];
        $type = $db['type'];


        try {
            // descobre qual o tipo (driver)
            // de banco de dados a ser utilizado
            switch ($type) {
                case 'pgsql':
                    $conn = new \PDO("pgsql:dbname={$name};user={$user}; password={$pass};host=$host");
                    break;
                case 'mysql':
                    $conn = new \PDO("mysql:host={$host};port=3306;dbname={$name};charset=utf8", $user, $pass);
                    // define para que o PDO lance excees na ocorrncia de erros
                    $conn->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
                    $conn->setAttribute(\PDO::MYSQL_ATTR_INIT_COMMAND, "SET NAMES 'utf8'");
                    $conn->setAttribute(\PDO::MYSQL_ATTR_INIT_COMMAND, 'SET character_set_connection=utf8');
                    $conn->setAttribute(\PDO::MYSQL_ATTR_INIT_COMMAND, 'SET character_set_client=utf8');
                    $conn->setAttribute(\PDO::MYSQL_ATTR_INIT_COMMAND, 'SET character_set_results=utf8');
                    break;
                case 'sqlite':
                    $conn = new \PDO("sqlite:{$name}");
                    break;
                case 'ibase':
                    $conn = new \PDO("firebird:dbname={$name}", $user, $pass);
                    break;
                case 'oci8':
                    $conn = new \PDO("oci:dbname={$name}", $user, $pass);
                    break;
                case 'mssql':
                    $conn = new \PDO("mssql:host={$host},1433;dbname={$name}", $user, $pass);
                    break;
                default :
                    throw new \Exception('Erro de Conexão');
                    break;
            };

            // retorna o objeto instanciado.
            return $conn;

        } catch (\Exception $exception) {

            throw $exception;

        }



    }
}
