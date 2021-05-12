<?php
/**
 * Created by PhpStorm.
 * User: emili
 * Date: 02/02/2019
 * Time: 21:41
 */

namespace Core\CORS;

use Core\CORS\PHPCorsInterface;

class PHPCors implements PHPCorsInterface
{

    private $data;

    public function setData($data)
    {
        $this->data = $data;
    }

    public function run()
    {
        if(is_null($this->data)) {
            throw new \Exception('CONTROLLER retornando NULL. Verifique se deu RETURN no $this->render()');
        } else {

            if (is_string($this->data)) {
                @header('Content-type: text/html; charset=UTF-8');
                echo $this->data;
                exit;
            }

            if (is_array($this->data)) {
                @header('Content-type: application/json');
                echo json_encode($this->data);
                exit;
            }

            throw new \Exception('Route is invalid !');

        }
    }
}
