<?php
/**
 * Created by PhpStorm.
 * User: emilio
 * Date: 02/03/16
 * Time: 16:02
 */


namespace Core\Controller\Sessions;

use App\Models\Usuario;
use Inovuerj\ADO\TTransaction;
use Inovuerj\Controller\Action;
use Inovuerj\Helper\Util;

class SessionManipulation
{

    public static $url_base = "";

    private static $instance = null;

    private static $controller;

    // overide construtor
    protected function __construct()
    {
        // Abrir sessão
        @session_start();

        self::$url_base = Action::getBaseUrl();
    }

    /**
     * SingleTon Instance
     * @return SessionManipulation|null
     */
    public static function getInstance()
    {

        if (null === self::$instance) {
            self::$instance = new static();
        }

        return self::$instance;
    }


    /**
     * Abre uma sessao com configuracoes especificas do usuario e avatar
     * @param Action $controller
     * @return bool|null
     */
    public static function open(Action $controller)
    {

        self::getInstance();

        if (SessionManipulation::get()) {

            self::$controller = $controller;

            $url_avatar_logged = "";
            $dir_avatar_logged = "";
            if(isset($_SESSION['usuario']['multimedia']['avatar']['nome_do_arquivo'])){
                $url_avatar_logged = self::$controller->getBaseUrl() . "uploads/profiles/id_" . $_SESSION['usuario']['id'] . '/' . $_SESSION['usuario']['multimedia']['avatar']['nome_do_arquivo'];
                $dir_avatar_logged = self::$controller->getDirBase() . "/uploads/profiles/id_" . $_SESSION['usuario']['id'] . '/' . $_SESSION['usuario']['multimedia']['avatar']['nome_do_arquivo'];
            }

            self::$controller->setViewVar('url_imagem_avatar', $url_avatar_logged);
            self::$controller->setViewVar('dir_imagem_avatar', $dir_avatar_logged);

            return true;

        }

        return NULL;

    }

    public static function login(Usuario $usuario_dbal, $ajax = false)
    {


        $result = [];



        startTransaction('Login_'.$usuario_dbal->login);

        /**
         * @global $usuario_dbal Usuario
         * Se validar, Retorna um activeRecord com a dados do usuario e com seu ID Preenchido
         */

//        Util::mostrar($usuario_dbal);

        if ($usuario_dbal->validar_usuario()) {


            /**
             * Inciar e Gravar Sessao do usuario
             */
            $dataUser = $usuario_dbal->toArray();
            unset($dataUser['senha']);
            $_SESSION['usuario'] = $dataUser;
            $_SESSION['usuario']['logged'] = true;
//            $_SESSION['usuario']['pessoa'] = $usuario_dbal->getPessoa()->toArray();
//            $_SESSION['usuario']['tipo'] = $usuario_dbal->getTipo()->toArray();
//            $esportes_praticados = $usuario_dbal->getEsportesPraticados();
//            $_SESSION['usuario']['esportes_praticados'] = $usuario_dbal->getEsportesPraticados();

//            $_SESSION['usuario']['avatar_url'] = $usuario_dbal->getAvatar()->getPathUploadUrl();
//            $_SESSION['usuario']['avatar_dir'] = $usuario_dbal->getAvatar()->getPathUploadDir();
//            if( $usuario_dbal->getAvatar() ) {
//                $_SESSION['usuario']['multimedia']['avatar'] = $usuario_dbal->getAvatar()->toArray();
//            }

            commitTransaction('login de' . $_SESSION['usuario']['login']);

            $result = ['success'=>true,'message'=>'Usuário logado com sucesso','data'=>json_encode($_SESSION['usuario'])];

        } else {

            $result = ['success'=>false,'message'=>'Erro de login'];
            setFlashMessage('Login/Senha incorretos');
            rollbackTransaction('Erro de Login' . $usuario_dbal->login);


        }

        if($result['success']){

            if(!$ajax){
                self::redirectToHome();
            }

        } else {

            if(!$ajax){
                Util::js_redireciona(CAMINHO_SITE.'login');
            }

        }

        return $result;

        
//            throw new Exception('Usuário ou Senha incorretos <a href="' . $this->getBaseUrl() . 'dashboard/login" > Voltar</a > ');


    }

    public static function logout()
    {
        unset($_SESSION);
        session_destroy();
        self::redirectToHome();
    }

    public static function get()
    {

        self::getInstance();

//        $_SESSION['usuario']['instituicao_id'] || (bool)$_SESSION['usuario']['superuser']

        if (isset($_SESSION['usuario']['logged']) && is_numeric($_SESSION['usuario']['id'])) {
            return $_SESSION['usuario'];
        }

        return false;
//        throw new \Exception('Nenhuma sessao aberta');

    }

    public static function redirectToHome()
    {
        // pegar instancia da sessao e preeche url_base
        self::getInstance();

        $url = "";
        if (SessionManipulation::get()) {
//            $url = self::$url_base . 'admin/home';
            $url = self::$url_base . 'maine';

        } else {
            $url = self::$url_base;
        }

        Util::js_redireciona($url);

//        header('Location: ' . $url);

    }

}
