<?php
/**
 * Arquivos de Rotas da API REST
 */
use \Core\Router\Router;

/**
 * Controller Administrativo - Resources para Rotas dos Assets("Ativos", "Espólios")
 */
Router::post('/admin/ativo'             ,'Api\IntellectualAssetController@store'            );  # Post para Form Novo Ativo
Router::post('/admin/ativo/{id}/edit'   ,'Api\IntellectualAssetController@update'           );  # Post/Put para Form Editar Ativo
Router::post('/admin/ativo/{id}/author' ,'Api\IntellectualAssetController@associateAuthor'  );  # 



/**
 * Controller Administrativo - Resources para Rotas dos Authors("Autores")
 */
Router::post('/admin/autor'           ,'Api\AuthorController@store'  );  # Post para Form Novo Ativo
Router::post('/admin/autor/{id}/edit' ,'Api\AuthorController@update' );  # Post/Put para Form Editar Ativo



