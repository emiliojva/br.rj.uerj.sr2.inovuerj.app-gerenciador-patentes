<!DOCTYPE html>
<html lang="pt-br" data-controller="<?=$this->e($controllerName)?>" data-active-route="<?=$this->e($active_route)?>">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--    <title>Projeto Novo</title>-->
    <title><?= $this->e($title) ?></title>

  </head>

  <body>

    <!-- Header -->
    <header class="header">
      <div class="header-texto container-16">
        <h1>Gerenciador de Processos e Ativos Intelectuais</h1>
      </div>
    </header>

    <!-- Conteúdo -->
    <div class="corpo-home  container-16" id="corpo-home">
        <?= $this->section('content') ?>
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
    </div>

    <script src="<?php echo siteUrl(); ?>dist/bundle.js"></script>

    <!-- JavaScript -->
    <!-- Carregamento no módulo requireJS -->
    <!-- <script data-main="/js/app" src="js/lib/require.min.js"></script>  -->
    <!-- https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js Ou -> https://requirejs.org/docs/release/2.3.6/minified/require.js -->
    
    <!--https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js Ou -> https://requirejs.org/docs/release/2.3.6/minified/require.js -->
    <!-- <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script> -->
    <!--    <script>window.jquery || document.write('<script src="/js/libs/jquery-3.4.1.min.js"><\/script>')</script>-->
    <!--    <script src="/js/plugins.js"></script>-->
    <!--    <script src="/js/index.js"></script>-->
    <!--    <script src="/js/responsivo.js"></script>-->
    <script>
        // $(function () {
        //     $(".rslides").responsiveSlides();
        // });
    </script>

  </body>

</html>
