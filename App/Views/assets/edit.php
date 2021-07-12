<?php

use Core\Router\Request;

$this->layout('main.template', ['title' => 'Administrativo - Cadastro de Ativo']) ?>

<div class="caixa-botao grid-16">
	<button class="botao">Novo Ativo</button><br>
</div>

<div class="caixa grid-16" id="box-form-basic-information">
	<h2>Informações Básicas</h2>
	<form>

		<input type="hidden" id="intellectual_asset_id" name="data[intellectual_assets][id]" value='<?=$this->e($asset_instance->id)?>' ><br><br>

		<label for="nome_ativo">Nome do Ativo:</label><br>
		<input class="texto" type="text" id="nome_ativo" name="data[intellectual_assets][name]" value='<?=$this->e($asset_instance->name)?>'><br><br>

		<label for="resumo_ativo">Resumo do Ativo:</label><br>
		<input class="texto" type="text" id="resumo_ativo" name="data[intellectual_assets][summary]" value='<?=$this->e($asset_instance->summary)?>'><br><br>

		<label for="tipo_ativo">Tipo do Ativo:</label><br>
		<select name="data[intellectual_assets][intellectual_assets_types_id]">
			<?PHP foreach($types as $id=>$descrition): ?>
				<option value="<?=$id?>" <?=$asset_instance->intellectual_assets_types_id != $id ?: 'selected=true' ?>><?=$descrition?></option>
			<?PHP endforeach; ?>
		</select>
		<button class="menu">Cancelar</button>
		<button class="menu button-save">Salvar</button>	
	</form>
</div>

<div class="num_reg caixa grid-16" id="box-form-registration-number">
	<h2>Numero de Registro</h2>
	<form>

		<section class='control'>
			<label for="numero">Numero:</label><br>
			<input class="texto" type="text" name="data[intellectual_assets][registration_number]" id="numero" value='<?=$this->e($asset_instance->registration_number)?>' required><br><br>
		</section>

		<section class='control'>
			
			<label>Agencia de Proteção:</label><br><br>

			<input class="radio" type="radio" name="data[intellectual_assets][protection_agency_inpi]" value="inpi" <?=$asset_instance->protection_agency_inpi == 'inpi' ? 'checked=true' : '' ?>>
			<label class="radio_label" for="inpi">INPI</label>

			<input class="radio" type="radio" name="data[intellectual_assets][protection_agency_inpi]" value="bib_nacional" <?=$asset_instance->protection_agency_inpi == 'bib_nacional' ? 'checked=true' : '' ?>>
			<label class="radio_label" for="bib_nacional">Biblioteca Nacional</label>

		</section>

		<section class='actions'>
			<button class="menu">Cancelar</button>
			<button class="menu button-save">Salvar</button>	
		</section>

	</form>

</div>

<div class="autores caixa grid-16" id="box-form-author">

	<h2>Autores</h2>

	<!-- Box Hide - Show list with authors if exists array data -->
	<div class='box-list-author' <?php if(count($intellectuals_authors)==0) echo "style='display:none'" ?>>
		<table class="table">
			<thead>
				<tr>
					<th scope="col">#</th>
					<th scope="col">Nome</th>
					<th scope="col">Titulação</th>
					<th scope="col">Unidade Academica</th>
				</tr>
			</thead>
			<tbody>
				<!-- Iterate into table associaded intellectuals_authors -->
				<?php foreach ($intellectuals_authors as $instance): ?>
					<tr>
						<th scope="row"><?=$instance->author->id ?></th>
						<td><?=$instance->author->individual->name ?></td>
						<td><?=$instance->author->titration ?></td>
						<td><?=$instance->author->academic_unit ?></td>
					</tr>
				<?php endforeach; ?>
				<!-- space reserved to list authores by typescript flow in /admin/assets/create.page.ts -->
			</tbody>
		</table>
	</div>

	<!-- Modal autores-->
	<div class="modal fade" id="box-form-author-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Adicionar Autor</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
				
					<form>
						<label for="nome_autor">Nome:</label><br>
						<input class="texto" type="text" name="data[author][individual][name]" id="nome_autor" required><br><br>

						<label for="email_autor">Email:</label><br>
						<input class="texto" type="email" name="data[author][individual][email]" id="email_autor" required><br><br>

						<label for="tel_autor">Telefone:</label><br>
						<input class="texto phone" type="tel" name="data[author][individual][phone]" id="tel_autor" 
       placeholder="(21)999999999" pattern="\([0-9]{2}\)[0-9]{8,9}" value='21 ' required><br><br>

						<label for="rg_autor">RG:</label><br>
						<input class="texto rg" type="text" name="data[author][individual][document_number_rg]" id="rg_autor" pattern="[0-9]{8,14}" required><br><br>

						<label for="cpf_autor">CPF:</label><br>
						<input class="texto cpf" type="text" name="data[author][individual][document_number_cpf]" id="cpf_autor" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" \
			title="CPF xxx.xxx.xxx-xx" required><br><br>

						<label for="end_autor">Endereço:</label><br>
						<input class="texto" type="text" name="data[author][individual][address]" id="end_autor" required><br><br>

						<label for="centro_autor">Centro:</label><br>
						<input class="texto" type="text" name="data[author][center]" id="centro_autor"><br><br>

						<label for="ua_autor">Unidade Academica:</label><br>
						<input class="texto" type="text" name="data[author][academic_unit]" id="ua_autor"><br><br>

						<label for="mat_autor">Matricula:</label><br>
						<input class="texto" type="number" name="data[author][registration]" id="mat_autor" required><br><br>

						<label>Tipo de Vinculo:</label><br>
						<select name="data[author][authors_bond_types_id]" required>
							<option value="1">Servidor Docente</option>
							<option value="2">Servidor Técnico</option>
							<option value="3">Aluno</option>
							<option value="4">Bolsista</option>
							<option value="5">Outros</option>
						</select><br><br>

						<label for="tit_autor">Titulação:</label><br>
						<input class="texto" type="text" name="data[author][titration]" id="tit_autor"><br><br>

					</form>
					
				</div>
				<div class="modal-footer">
					<button type="button" class="menu" data-bs-dismiss="modal">Cancelar</button>
					<button class="menu button-save">Salvar</button>
					<!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
					<!-- <button type="button" class="btn btn-primary">Save changes</button> -->
				</div>
			</div>
		</div>
	</div>

	<!-- Modal anexos-->
	<div class="modal fade" id="box-form-author-attach-modal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Adicionar Anexo</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
				
					<p>Show a file-select field which allows multiple files:</p>
					
					<form action="/action_page.php">

						<div class='container'>
							
							<div class='dropzone'>

								<label for="myfile">Select files:</label>
								<input type="file" id="file-selector"  name="data[author][attachments]"  accept=".jpg, .jpeg, .png, .svg, .pdf" multiple><br><br>

								<div class='dropzone-list'>
									<ul>
									</ul>
								</div>

							</div>

						</div>

					</form>
					
				</div>
				<div class="modal-footer">
						<button type="button" class="menu" data-bs-dismiss="modal">Cancelar</button>
					<button class="menu button-save">Salvar</button>
					<!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
					<!-- <button type="button" class="btn btn-primary">Save changes</button> -->
				</div>
			</div>
		</div>
	</div>

	<button class="botao_2" id="add-author" type="button" data-bs-toggle="modal" data-bs-target="#box-form-author-modal">Adicionar Autor</button><br>
	<button class="botao_2" id="add-author-attachment" type="button" data-bs-toggle="modal" data-bs-target="#box-form-author-attach-modal">Inserir Anexos</button><br>

</div>

<div class="titularidade caixa grid-16">

	<h2>Titularidade e Co-Titularidade</h2>

	<input class="texto" type="text" name="fixo" value="UERJ"><br><br>
					
	<label for="cnpj1">CNPJ:</label><br>
	<input class="texto cnpj" type="text" name="cnpj1" id="cnpj1"><br><br>

	<label for="proc">Procurador:</label><br>
	<input class="texto" type="text" name="proc" id="proc"><br><br>

	<label>Possui Co-Titular?</label><br>
	<select>
		<option value="sim">Sim</option>
		<option value="nao">Não</option>
	</select>
	<br><br>

	<!-- Modal autores-->
	<div class="modal fade" id="titularesModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Adicionar Titularidade e Co-Titularidade</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
				
				<form>
					
				

					<!-- <div class="cotit grid-16"> -->
						<label for="nome_inst">Nome da Instituição:</label><br>
						<input class="texto" type="text" name="nome_inst" id="nome_inst"><br><br>

						<label for="cnpj2">CNPJ:</label><br>
						<input class="texto cnpj" type="number" name="cnpj2" id="cnpj2"><br><br>

						<label for="proc_uerj">Número do Processo UERJ:</label><br>
						<input class="texto" type="number" name="proc_uerj"><br><br>

						<label for="prot_ext">Número do Protocolo Externo:</label><br>
						<input class="texto" type="number" name="prot_ext"><br><br>
					<!-- </div> -->
				</form>
					
				</div>
				<div class="modal-footer">
					<button type="button" class="menu" data-bs-dismiss="modal">Cancelar</button>
					<button class="menu">Salvar</button>
					<!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
					<!-- <button type="button" class="btn btn-primary">Save changes</button> -->
				</div>
			</div>
		</div>
	</div>

	<button class="botao_2" id="add_titular" type="button" data-bs-toggle="modal" data-bs-target="#titularesModal">Adicionar Co-titular</button><br>

	<button class="menu">Cancelar</button>
	<button class="menu">Salvar</button>
</div>

<div class="pagamento caixa grid-16">
	
	<h2>Guias de Pagamento</h2>

	<!-- Modal titularidade-->
	<div class="modal fade" id="guiasModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Adicionar Autor</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				
				<div class="modal-body">
							
					<form>

						<label for="num_pag">Numero:</label><br>
						<input class="texto" type="number" name="num_pag" id="num_pag"><br><br>

						<label for="data_pag">Data de Pagamento/Vencimento:</label><br>
						<input class="texto" type="date" name="data_pag"><br><br>

						<label for="valor">Valor:</label><br>
						<input class="texto" type="number" name="valor"><br><br>

						<input class="radio" type="radio" name="pago" value="sim">
						<label class="radio_label" for="pago">Pago</label>

						<input class="radio" type="radio" name="pago" value="nao">
						<label class="radio_label" for="nao">A Pagar</label>

					</form>
				
				</div>

				<div class="modal-footer">

					<!-- <div class="caixa interna grid-16"> -->
						<button type="button" class="menu" data-bs-dismiss="modal">Cancelar</button>
						<button class="menu">Salvar</button>
					<!-- </div> -->
					<!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
					<!-- <button type="button" class="btn btn-primary">Save changes</button> -->
				</div>
			</div>
		</div>
	</div>

	<!-- Modal anexos-->
	<div class="modal fade" id="anexosGuiasModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title" id="exampleModalLabel">Adicionar Anexo</h5>
					<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
				</div>
				<div class="modal-body">
				
					<p>Show a file-select field which allows multiple files:</p>
					<form action="/action_page.php">
						<label for="myfile">Select files:</label>
						<input type="file" id="myfile" name="myfile" multiple><br><br>
					</form>
					
				</div>
				<div class="modal-footer">
					<button type="button" class="menu" data-bs-dismiss="modal">Cancelar</button>
					<button class="menu">Salvar</button>
					<!-- <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> -->
					<!-- <button type="button" class="btn btn-primary">Save changes</button> -->
				</div>
			</div>
		</div>
	</div>

	<button class="botao_2" id="add_pay" type="button" data-bs-toggle="modal" data-bs-target="#guiasModal">Adicionar Nova Guia</button><br>
	<button class="botao_2" id="add_attachment_pay" type="button" data-bs-toggle="modal" data-bs-target="#anexosGuiasModal">Inserir Anexos</button><br>
	
</div>

<div class="situacao caixa grid-16">
	<h2>Situação</h2>
	<select>
		<option value="preparo">Em Preparo</option>
		<option value="analise">Em Analise Pelos Orgãos de Proteção</option>
		<option value="deferida">Deferida</option>
		<option value="indeferida">Indeferida</option>
		<option value="arquivada">Arquivada</option>
		<option value="anulada">Anulada</option>
	</select><br>
	<button class="menu">Cancelar</button>
	<button class="menu">Salvar</button>
</div>

<button class="final">Cancelar</button>
<button class="final">Salvar</button>

<!-- <script src="<?php echo Request::baseUrl() ?>node_modules/jquery/dist/jquery.min.js"></script> -->