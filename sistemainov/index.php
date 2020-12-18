<?php
session_start();
?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Projeto Novo</title>

    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/grid.css">
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/responsivo.css">



</head>

<body>

    <!-- Header -->

    <header class="header">
        <div class="header-texto container">
            <h1>Gerenciador de Processos e Ativos Intelectuais</h1>
        </div>
    </header>

    <!-- Conteúdo -->


    <div class="corpo-home container" id="corpo-home">
        <div class="corpo-imagem">
            <img src="img/Sem Título-1.png">
        </div>
        <div class="corpo-home-forms">
            <div class="corpo-home-form1">
                <?php
                if(isset($_SESSION['nao_autenticado'])):
                ?>
                <div class="notification is-danger">
                    <p>ERRO: Usuário ou senha inválidos.</p>
                </div>
                <?php
                endif;
                unset($_SESSION['nao_autenticado']);
                ?>
                <form action="login.php" method="POST">
                    <h2>Usuário</h2>
                    <input class="form1-input" name="usuario" type="text" placeholder="Insira seu nome de usuário" autofocus="">
                    <h2>Senha</h2>
                    <input class="form1-input form1-password" type="password" name="senha"
                        placeholder="Insira sua senha"><br>
                    </br><a href="#">Esqueceu sua senha?</a></br>
                    <input class="form1-login" type="submit" name="submit" value="login"><br>
                </form>
            </div>
            <div class="corpo-home-forms-separador"></div>
            <div class="corpo-home-form2">
                <h1>Faça seu login ou pesquise em nosso site</h1>
                <form action="enviar.php" method="post" name="form">
                    <input class="form2-input" type="text" name="busca" placeholder="Pesquise aqui"><br>
                    <input class="form2-buscar" type="submit" name="submit" value="buscar">
                </form>
            </div>
        </div>
    </div>
    <!-- Footer -->

    <div class="footer">
        <div class="footer-div1">
            <h1>Projeto Novo</h1>
            <p>Tels.: 2334-0017/ 2334-0018 - inovuerj@sr2.uerj.br</p>
            <a href="#">Universidade do Estado do Rio de Janeiro</a>
            <p>Rua São Francisco Xavier, 524 - Maracanã - Prédio anexo - Térreo</p>
            <p>CNPJ: 33.540.014/0001-57 - Inscrição estadual: 76003939 - Inscrição municipal: 0.189.106-5</p>
        </div>
        <div class="footer-div2">
            <p>Copyright © INOVUERJ 2020</p>
        </div>





        <!-- <div class = "parceiros">
            <img src = "img/Inovuerj.png" id = "inovuerj">
            <img src = "img/ITECS.png" id = "itecs">
            <img src = "img/sebrae-logo.png" id = "sebrae">
        </div>
        <div class = "sep"></div>
        <div class = "footer-conteudo">
            <div class = "footer-conteudo-texto">
                <p>© IME - UERJ Todos os direitos autorais reservados. 2019<!--<?php echo date('Y') ?> - Tecnologia da Informação nas Escolas</p>
            </div>
            <div class = "footer-conteudo-logos">
                <img src= "img/uerj.png" id = "uerj">
                <img src = "img/ime.png" id = "ime">
            </div>
        </div>

    </div>
    </div>
<!-- JavaScript 
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
    <script>window.jquery || document.write('<script src="js/libs/jquery-3.4.1.min.js"><\/script>')</script>
    <script src = "js/plugins.js"></script>
    <script src = "js/index.js"></script>
    <script src = "js/responsivo.js"></script>
    <script>
        $(function() {
            $(".rslides").responsiveSlides();
        });
    </script>
</body>-->

</html>