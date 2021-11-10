<!--Definindo o caminho do template(layout principal) e passando uma variavel pra ele "title"-->
<?php $this->layout('main.template', ['title' => 'Administrativo']) ?>

<!-- Header -->
<h2 class="container">Olá, <?php echo $usuario_autenticado['email']; ?></h2>

<!-- Conteúdo -->
<div class="corpo-poslogin">
  <div id="corpo-poslogin-titulo" class="corpo-poslogin-titulo container">
    <div id="projetos" class="corpo-poslogin-projetos">
      <button class="corpo-poslogin-titulo-button"><h2>Processos <img src="./images/icons8-collapse-arrow-24.png"></h2>
      </button>
    </div>
    <div id="ativosintelectuais" class="corpo-poslogin-ativosintelectuais">
      <button class="corpo-poslogin-titulo-button"><h2>Ativos Intelectuais <img src="./images/icons8-collapse-arrow-24.png"></h2>
      </button>
    </div>
    <div class="corpo-poslogin-menu" id="corpo-poslogin-menu">
      <ul>
        <li id="paraprojetos"><a href="#">Processos</a></li>
        <li id="paraativos"><a href="#">Ativos Intelectuais</a></li>
      </ul>
    </div>
  </div>
  <div class="corpo-poslogin-conteudo container">
    <div class="corpo-poslogin-conteudo-parte1">
      <div id="novoprojeto" class="corpo-poslogin-conteudo-novo">
        <button class="corpo-poslogin-conteudo-button"><h3>Novo Processo</h3></button>
      </div>
      <div id="novoativo" class="corpo-poslogin-conteudo-novo">
        <button class="corpo-poslogin-conteudo-button" onclick="window.location.href='/admin/ativo/create'"><h3>Novo Ativo</h3></button>
      </div>
      <div class="corpo-poslogin-conteudo-checkbox">
        <input type="checkbox" id="emandamento" name="opcoes" value="emandamento">
        <label for="emandamento">Em Andamento</label></br>
        <input type="checkbox" id="aprovados" name="opcoes" value="aprovados">
        <label for="aprovados">Aprovados</label></br>
        <input type="checkbox" id="excluidos" name="opcoes" value="excluidos">
        <label for="excluidos">Excluídos</label></br>
      </div>
    </div>
    <div class="corpo-poslogin-conteudo-parte2"></div>
    <div class="corpo-poslogin-conteudo-parte3">
      <form action="enviar.php" method="post" name="form">
        <input class="corpo-poslogin-conteudo-parte3-pesquisa" type="text" name="busca" placeholder="Pesquise aqui"><br>
        <input class="corpo-poslogin-conteudo-parte3-buscar" type="submit" name="submit" value="buscar">
      </form>
    </div>
    <h2><a href="logout.php">Sair</a></h2>
  </div>
</div>