<?php
/**
 * Arquivos de Rotas da API REST
 */
use \Core\Router\Router;

/**
 * Controller Administrativo - Resources para Rotas dos Assets("Ativos", "Espólios")
 */
Router::post('/admin/ativo'           ,'Api\IntellectualAssetController@store'  );  # Post para Form Novo Ativo
Router::post('/admin/ativo/{id}/edit' ,'Api\IntellectualAssetController@update' );  # Post/Put para Form Editar Ativo