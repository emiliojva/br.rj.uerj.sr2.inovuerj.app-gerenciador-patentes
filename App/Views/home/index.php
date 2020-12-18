<!--Definindo o caminho do template(layout principal) e passando uma variavel pra ele "title"-->
<?php $this->layout('main.template', ['title' => 'Editar Usuario']) ?>

<div class="corpo-home container" id="corpo-home">
  <div class="corpo-imagem">
    <img src="img/Sem Título-1.png">
  </div>
  <div class="corpo-home-forms">
    <div class="corpo-home-form1">
      <?php
      if (isset($_SESSION['nao_autenticado'])):
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
