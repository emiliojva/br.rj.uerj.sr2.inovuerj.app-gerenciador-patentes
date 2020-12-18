<!--Definindo o caminho do template(layout principal) e passando uma variavel pra ele "title"-->
<?php $this->layout('main.template', ['title' => 'Editar Usuario']) ?>

<h1>Editar Usuario</h1>
<p>Estou na tela para editar o usuario <?=$this->e($id)?></p>


