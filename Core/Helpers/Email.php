<?php


namespace Core\Helpers;


// Import PHPMailer classes into the global namespace
// These must be at the top of your script, not inside a function
use App\Models\Esporte;
use App\Models\Usuario;
use Inovuerj\Controller\Action;
use PHPMailer;
use PHPMailer\Exception;

class Email extends PHPMailer
{

    public function __construct()
    {

        parent::__construct(true);

        date_default_timezone_set('Etc/UTC');

        $this->Debugoutput = 'html';
        $this->setLanguage('pt-BR', getcwd() . '/../App/Models/Helpers/PHPMailer/langs/');

        $this->CharSet = 'utf-8';

        //Server settings
        $this->SMTPDebug = 2;                                       // Enable verbose debug output
        $this->isSMTP();                                            // Set mailer to use SMTP
        $this->SMTPSecure = 'tls';                                  // Enable TLS encryption, `ssl` also accepted
        $this->SMTPAuth = true;                                   // Enable SMTP authentication

        /**
         *  LOCALWEB EMUSEU@CONTATO.COM.BR
         */
//        $this->Host = 'smtp.emuseu.com.br';                             // Specify main and backup SMTP servers
//        $this->Port = 587;                                    // TCP port to connect to
//        $this->Username = 'contato@emuseu.com.br';                // SMTP username
//        $this->Password = 'Bgpx_23340017';                            // SMTP password


        /**
         *  EMILIO@SR2.UERJ.BR
         */
        $this->Host = 'smtp.gmail.com';                             // Specify main and backup SMTP servers
        $this->Port = 587;                                    // TCP port to connect to
        $this->Username = 'emilio@sr2.uerj.br';                // SMTP username
        $this->Password = 'paiamado81';                            // SMTP password


        //Recipients
        $this->setFrom('contato@emuseu.com.br', 'Emuseu Nacional do Esporte');
//        $this->addAddress('emilio@sr2.uerj.br', 'Emilio Vieira');     // Add a recipient
//        $this->addAddress('danshe@gmail.com', 'Sheila Perlingeiro');     // Add a recipient
//        $this->addAddress('ellen@example.com');                     // Name is optional
//        $this->addReplyTo('info@example.com', 'Information');
//        $this->addCC('cc@example.com');
//        $this->addBCC('emilio@sr2.uerj.br');

        // Attachments
//        $this->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//        $this->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

        // Content
        $this->isHTML(true);                                  // Set email format to HTML
        $this->Subject = 'Resposta automatica para sua solicitação';
        $this->Body = '<b>Emuseu Nacional do Esporte</b> Responde!';
        $this->AltBody = 'Emuseu do Esporte Responde';

    }

    /**
     * @param Usuario $usuario_dbal
     * @return bool|string
     * @throws phpmailerException
     */
    public static function enviarEmailConvite(Usuario $usuario_dbal)
    {

        /**
         * Enviar email para Confederação
         */

        $collection_esportes = $usuario_dbal->getEsportesPraticados();
        $esporte_dbal = NULL;

        $caminho_path_url = Action::getBaseUrl();
        $nome = $usuario_dbal->getPessoa()->nome;

        $esportes_array = $usuario_dbal->getEsportesPraticados();
        /**
         * @global $esporte_dbal Esporte
         */
        $esporte_dbal = new Esporte($esportes_array[0]['id']);
        $collection_confederacaos = $esporte_dbal->getConfederacoes();
        $confederacao_dbal = null;
        if (is_array($collection_confederacaos)) {
            $confederacao_dbal = $collection_confederacaos[0];
        } else {
            $confederacao_dbal = $collection_confederacaos;
        }

        $confederacao = $confederacao_dbal->getPessoa()->nome;

//        register/activation/emiliojva@gmail.com/f4552671f8909587cf485ea990207f3b
        $link = Action::getBaseUrl() . 'register/activation/' . $usuario_dbal->email . '/f4552671f8909587cf485ea990207f3b';

        $msg_html_solicitante = nl2br("Parabéns, <strong>{$nome}</strong>

Você é o mais novo atleta do portal eMuseu.

A Confederação {$confederacao} liberou acesso ao seu painel de controle do e-Museu!

Clique no link para <a href='{$link}' target='_blank'>ativação</a>
        

Equipe do eMuseu.");

        $body = <<<EOF
                    <div>
                        <div style="background: #fafafa;margin: 0px auto;text-align: center;align-items: center;">
                            <img src="{$caminho_path_url}libs/images/header_email.png">    
                        </div>
                        <div style="background: #ecf0f1;padding: 60px;">
                            <p style="display: block;margin: 0px auto;align-items: center; width: max-content;">
                                {$msg_html_solicitante}        
                                <br>   
                            </p>
                        </div>
                    </div>  
EOF;


        $email_dbal = new Email();
        $email_dbal->setFrom('noreply@emuseu.com.br');
        $email_dbal->SMTPDebug = 0;
        $email_dbal->addAddress($usuario_dbal->email);
        $email_dbal->Subject = 'Emuseu do Esporte - Convite do Portal eMuseu';
        $email_dbal->Body = $body;
        $email_dbal->AltBody = 'Emuseu do Esporte - Convite do Portal eMuseu';

        /*Tentar enviar*/
        if ($email_dbal->send()) {

            // limpar enderecos anteriores da class Email
            $email_dbal->clearAddresses();

            return $msg_html_solicitante;

        }

        return false;

    }

    /**
     * @param Usuario $usuario_dbal
     * @return bool|string
     * @throws phpmailerException
     */
    public static function enviarEmailRespostaSolicitacao(Usuario $usuario_dbal)
    {

        /**
         * Enviar email para Confederação
         */

        $collection_esportes = $usuario_dbal->getEsportesPraticados();
        $esporte_array = $collection_esportes[0];


        $caminho_path_url = Action::getBaseUrl();
        $nome = $usuario_dbal->getPessoa()->nome;

        $msg_html_solicitante = nl2br("Ola, <strong>{$nome}</strong>

Obrigado pela sua solicitação de cadastro no eMuseu, a plataforma colaborativa
criada para resgatar a memória do esporte nacional e que reúne acervos do esporte
e de atletas brasileiros de todos os tempos. Seu pedido de cadastro já foi enviado
para sua Confederação, que irá avaliar as informações recebidas, Em breve
entraremos em contato com você.

Obrigado,

Equipe do eMuseu.");

        $body = <<<EOF
                    <div>
                        <div style="background: #fafafa;margin: 0px auto;text-align: center;align-items: center;">
                            <img src="{$caminho_path_url}libs/images/header_email.png">    
                        </div>
                        <div style="background: #ecf0f1;padding: 60px;">
                                {$msg_html_solicitante}        
                                <br>   
                            </p>
                        </div>
                    </div>  
EOF;


//            echo $body; die;
        $email_dbal = new Email();
        $email_dbal->SMTPDebug = 0;
        $email_dbal->addAddress($usuario_dbal->email);
        $email_dbal->Subject = 'Resposta automatica para sua solicitação de ingresso ao Portal eMuseu';
        $email_dbal->Body = $body;
        $email_dbal->AltBody = 'Emuseu do Esporte - Resposta automática';

//        Util::mostrar($esporte_array); die;

        /*Tentar enviar*/
        if ($email_dbal->send()) {

            // limpar enderecos anteriores da class Email
            $email_dbal->clearAddresses();


            /**
             * Enviar email para Confederação
             */
            $msg_html_confederacao = nl2br("Olá!
O Cadastro de <strong>{$nome}</strong> está pendente para aprovação no seu painel.
Acesse <a href='{$caminho_path_url}dashboard'>http://emuseu.com.br/dashboard</a>

Dados do atleta:
<strong>{$nome}</strong> 
<strong>{$usuario_dbal->email}</strong>
<strong>{$esporte_array['nome']}</strong> 

Obrigado, 

Equipe do e-Museu");

            $body = <<<EOF
                    <div>
                        <div style="background: #fafafa;margin: 0px auto;text-align: center;align-items: center;">
                            <img src="{$caminho_path_url}libs/images/header_email.png">    
                        </div>
                        <div style="background: #ecf0f1;padding: 60px;">
                            <p style="display: block;margin: 0px auto;align-items: center;width: 43%;">
                                {$msg_html_confederacao}        
                                <br>   
                            </p>
                        </div>
                    </div>  
EOF;


//            $email_confederacao = "emilioamaral@outlook.com";
            $email_confederacao = "contato@emuseu.com.br";
            $email_dbal->addAddress($email_confederacao); // email da confederacao;
            $email_dbal->Subject = 'Resposta automatica de nova solicitação de ingresso ao Portal eMuseu';
            $email_dbal->Body = $body;
            $email_dbal->AltBody = 'Emuseu do Esporte - Resposta automática para confederação';
            $email_dbal->send();


            return $msg_html_solicitante;

        }

        return false;

    }


    /**
     * @param Usuario $usuario_dbal
     * @return bool|string
     * @throws phpmailerException
     */
    public static function enviarEmailRespostaAprovacao(Usuario $usuario_dbal)
    {

        /**
         * Enviar email para Confederação
         */

        $collection_esportes = $usuario_dbal->getEsportesPraticados();
        $esporte_dbal = NULL;

        $caminho_path_url = Action::getBaseUrl();
        $nome = $usuario_dbal->getPessoa()->nome;

        $esportes_array = $usuario_dbal->getEsportesPraticados();
        /**
         * @global $esporte_dbal Esporte
         */
        $esporte_dbal = new Esporte($esportes_array[0]['id']);
        $collection_confederacaos = $esporte_dbal->getConfederacoes();
        $confederacao_dbal = null;
        if (is_array($collection_confederacaos)) {
            $confederacao_dbal = $collection_confederacaos[0];
        } else {
            $confederacao_dbal = $collection_confederacaos;
        }

        $confederacao = $confederacao_dbal->getPessoa()->nome;

//        register/activation/emiliojva@gmail.com/f4552671f8909587cf485ea990207f3b
        $link = Action::getBaseUrl() . 'register/activation/' . $usuario_dbal->email . '/f4552671f8909587cf485ea990207f3b';

        $msg_html_solicitante = nl2br("Ola, <strong>{$nome}</strong>

A Confederação {$confederacao} liberou acesso ao seu painel de controle do e-Museu!

Clique no link para <a href='{$link}' target='_blank'>ativação</a>
        

Equipe do eMuseu.");

        $body = <<<EOF
                    <div>
                        <div style="background: #fafafa;margin: 0px auto;text-align: center;align-items: center;">
                            <img src="{$caminho_path_url}libs/images/header_email.png">    
                        </div>
                        <div style="background: #ecf0f1;padding: 60px;">
                            <p style="display: block;margin: 0px auto;align-items: center;width: max-content;">
                                {$msg_html_solicitante}        
                                <br>   
                            </p>
                        </div>
                    </div>  
EOF;


        $email_dbal = new Email();
        $email_dbal->setFrom('noreply@emuseu.com.br');
        $email_dbal->SMTPDebug = 0;
        $email_dbal->addAddress($usuario_dbal->email);
        $email_dbal->Subject = 'Emuseu do Esporte - Aprovação de acesso ao Portal eMuseu';
        $email_dbal->Body = $body;
        $email_dbal->AltBody = 'Emuseu do Esporte - Aprovação de acesso ao Portal eMuseu';

        /*Tentar enviar*/
        if ($email_dbal->send()) {

            // limpar enderecos anteriores da class Email
            $email_dbal->clearAddresses();

            return $msg_html_solicitante;

        }

        return false;

    }


}