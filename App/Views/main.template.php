<!DOCTYPE html>
<html lang="pt-br">

  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!--    <title>Projeto Novo</title>-->
    <title><?= $this->e($title) ?></title>

    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/css/grid.css">
    <link rel="stylesheet" href="/css/style.css">
    <link rel="stylesheet" href="/css/responsivo.css">

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


    <!-- JavaScript -->
    <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
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
