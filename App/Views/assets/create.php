<?php $this->layout('main.template', ['title' => 'Administrativo - Cadastro de Ativo']) ?>

<div class="caixa-botao grid-16">
			<button class="botao">Novo Ativo</button><br>
		</div>
		<div class="caixa grid-16">
			<h2>Informações Básicas</h2>
			<form id="form-informacoes-basicas" method="post" action="/admin/ativo" name="data[intellectual_assets]">
				<label for="nome_ativo">Nome do Ativo:</label><br>
				<input class="texto" type="text" id="nome_ativo" name="data[intellectual_assets][name]"><br><br>

				<label for="resumo_ativo">Resumo do Ativo:</label><br>
				<input class="texto" type="text" id="resumo_ativo" name="data[intellectual_assets][summary]"><br><br>

				<label for="tipo_ativo">Tipo do Ativo:</label><br>
				<select name="data[intellectual_assets][intellectual_assets_types_id]">
					<option value="1">Patente</option>
					<option value="2">Modelo de Utilidade</option>
					<option value="3">Desenho Industrial</option>
					<option value="4">Programa de Computador</option>
					<option value="5">Direito Autoral</option>
					<option value="6">Marca</option>
				</select>
			</form>
			<button class="menu">Cancelar</button>
			<button class="menu" onclick="$('#form-informacoes-basicas').submit();">Salvar</button>
		</div>
		<div class="num_reg caixa grid-16">
			<h2>Numero de Registro</h2>
			<form >
				<label for="numero">Numero:</label><br>
				<input class="texto" type="number" name="numero" id="numero"><br><br>

				<label>Agencia de Proteção:</label><br><br>

				<input class="radio" type="radio" name="ag_protecao" value="inpi">
				<label class="radio_label" for="inpi">INPI</label>

				<input class="radio" type="radio" name="ag_protecao" value="bib_nacional">
				<label class="radio_label" for="bib_nacional">Biblioteca Nacional</label>
			</form>
			<button class="menu">Cancelar</button>
			<button class="menu">Salvar</button>
		</div>
		<div class="autores caixa grid-16">
			<h2>Autores</h2>
			<form>
				<label for="nome_autor">Nome:</label><br>
				<input class="texto" type="text" name="nome_autor" id="nome_autor"><br><br>

				<label for="email_autor">Email:</label><br>
				<input class="texto" type="email" name="email_autor" id="email_autor"><br><br>

				<label for="tel_autor">Telefone:</label><br>
				<input class="texto" type="number" name="tel_autor" id="tel_autor"><br><br>

				<label for="rg_autor">RG:</label><br>
				<input class="texto" type="number" name="rg_autor" id="rg_autor"><br><br>

				<label for="cpf_autor">CPF:</label><br>
				<input class="texto" type="number" name="cpf_autor" id="cpf_autor"><br><br>

				<label for="end_autor">Endereço:</label><br>
				<input class="texto" type="text" name="end_autor" id="end_autor"><br><br>

				<label for="centro_autor">Centro:</label><br>
				<input class="texto" type="text" name="centro_autor" id="centro_autor"><br><br>

				<label for="ua_autor">Unidade Academica:</label><br>
				<input class="texto" type="text" name="ua_autor" id="ua_autor"><br><br>

				<label for="mat_autor">Matricula:</label><br>
				<input class="texto" type="number" name="mat_autor" id="mat_autor"><br><br>

				<label>Tipo de Vinculo:</label><br>
				<select>
					<option value="serv_docente">Servidor Docente</option>
					<option value="serv_tecnico">Servidor Técnico</option>
					<option value="aluno">Aluno</option>
					<option value="bolsista">Bolsista</option>
					<option value="outros">Outros</option>
				</select><br><br>

				<label for="tit_autor">Titulação:</label><br>
				<input class="texto" type="text" name="tit_autor" id="tit_autor"><br><br>
			</form>
			<button class="botao_2">Inserir Anexos</button><br>
			<button class="botao_2">Adicionar Autor</button><br>

			<button class="menu">Cancelar</button>
			<button class="menu">Salvar</button>
		</div>
		<div class="titularidade caixa grid-16">
			<h2>Titularidade e Co-Titularidade</h2>
			<form>
				<input class="texto" type="text" name="fixo" value="UERJ"><br><br>
				
				<label for="cnpj1">CNPJ:</label><br>
				<input class="texto" type="number" name="cnpj1" id="cnpj1"><br><br>

				<label for="proc">Procurador:</label><br>
				<input class="texto" type="text" name="proc" id="proc"><br><br>

				<label>Possui Co-Titular?</label><br>
				<select>
					<option value="sim">Sim</option>
					<option value="nao">Não</option>
				</select><br><br>
				<div class="cotit grid-16">
					<label for="nome_inst">Nome da Instituição:</label><br>
					<input class="texto" type="text" name="nome_inst" id="nome_inst"><br><br>

					<label for="cnpj2">CNPJ:</label><br>
					<input class="texto" type="number" name="cnpj2" id="cnpj2"><br><br>

					<label for="proc_uerj">Número do Processo UERJ:</label><br>
					<input class="texto" type="number" name="proc_uerj"><br><br>

					<label for="prot_ext">Número do Protocolo Externo:</label><br>
					<input class="texto" type="number" name="prot_ext"><br><br>
				</div>
			</form>
			<button class="botao_2">Adicionar Co-titular</button><br>
			<button class="menu">Cancelar</button>
			<button class="menu">Salvar</button>
		</div>
		<div class="pagamento caixa grid-16">
			<h2>Guias de Pagamento</h2>
			<div class="caixa interna grid-16">
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
				<button class="botao_2">Inserir Anexos</button><br>
				<button class="botao_2">Adicionar Nova Guia</button><br>				
			</div>
			<button class="menu">Cancelar</button>
			<button class="menu">Salvar</button><br><br>
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