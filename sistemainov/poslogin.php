<?php
include('verifica_login.php');
?>
<!DOCTYPE html>
<html lang="pt-br">
	<head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Projeto Novo</title>

		<link rel="stylesheet" href="css/reset.css">
        <link rel="stylesheet" href="css/grid.css">
        <link rel="stylesheet" href="css/style.css">
        <link rel="stylesheet" href="css/responsivo.css">
        

        
	</head>
	<body>

<!-- Header -->
<h2>Olá, <?php echo $_SESSION['usuario'];?></h2>
        <header class = "header"> 
            <div class = "header-texto container">
                <h1>Gerenciador de Processos e Ativos Intelectuais</h1>
            </div>
        </header>

<!-- Conteúdo -->
        <div class = "corpo-poslogin">
            <div id = "corpo-poslogin-titulo" class = "corpo-poslogin-titulo container">
                <div  id = "projetos" class = "corpo-poslogin-projetos">
                    <button class = "corpo-poslogin-titulo-button"><h2>Projetos <img src = "./img/icons8-collapse-arrow-24.png"></h2></button>
                </div>
                <div id = "ativosintelectuais" class = "corpo-poslogin-ativosintelectuais">
                    <button class = "corpo-poslogin-titulo-button"><h2>Ativos Intelectuais <img src = "./img/icons8-collapse-arrow-24.png"></h2></button>
                </div>
                <div class = "corpo-poslogin-menu" id = "corpo-poslogin-menu">
                    <ul>
                        <li id = "paraprojetos"><a href = "#">Projetos</a></li>
                        <li id = "paraativos"><a href = "#">Ativos Intelectuais</a></li>
                    </ul>
                </div>
            </div>
            <div class = "corpo-poslogin-conteudo container">
                <div class = "corpo-poslogin-conteudo-parte1">
                    <div id = "novoprojeto" class = "corpo-poslogin-conteudo-novo">
                        <button class = "corpo-poslogin-conteudo-button"><h3>Novo Projeto</h3></button>
                    </div>
                    <div id = "novoativo" class = "corpo-poslogin-conteudo-novo">
                        <button class = "corpo-poslogin-conteudo-button"><h3>Novo Ativo</h3></button>
                    </div>
                    <div class = "corpo-poslogin-conteudo-checkbox">
                        <input type = "checkbox" id = "emandamento" name = "opcoes" value = "emandamento">
                        <label for = "emandamento">Em Andamento</label></br>
                        <input type = "checkbox" id = "aprovados" name = "opcoes" value = "aprovados">
                        <label for = "aprovados">Aprovados</label></br>
                        <input type = "checkbox" id = "excluidos" name = "opcoes" value = "excluidos">
                        <label for = "excluidos">Excluídos</label></br>
                    </div>
                </div>
                <div class = "corpo-poslogin-conteudo-parte2"></div>
                <div class = "corpo-poslogin-conteudo-parte3">
                    <form action="enviar.php" method="post" name="form">
                        <input class = "corpo-poslogin-conteudo-parte3-pesquisa" type = "text" name = "busca" placeholder="Pesquise aqui"><br>
                        <input class = "corpo-poslogin-conteudo-parte3-buscar" type = "submit" name = "submit" value = "buscar">
                        <h2><a href="logout.php">Sair</a></h2>
                    </form>
                </div>
            </div>
        </div>
    
<!-- Footer -->

        <div class = "footer">
            <div class = "footer-div1">  
                <h1>Projeto Novo</h1>
                <p>Tels.: 2334-0017/ 2334-0018 - inovuerj@sr2.uerj.br</p> 
                <a href = "#">Universidade do Estado do Rio de Janeiro</a>
                <p>Rua São Francisco Xavier, 524 - Maracanã - Prédio anexo - Térreo</p>
                <p>CNPJ: 33.540.014/0001-57 - Inscrição estadual: 76003939 - Inscrição municipal: 0.189.106-5</p>
            </div>
            <div class = "footer-div2">
                <p>Copyright © INOVUERJ 2020</p>
            </div>
        </div>
    </body>
    <script src = "js/poslogin.js"></script>
</html>