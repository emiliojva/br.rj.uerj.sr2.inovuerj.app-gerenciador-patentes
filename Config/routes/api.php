<?php
/**
 * Arquivos de Rotas
 */

use \Core\Router\Router,
    \Core\Helpers\Debug;

/**
 * Controller Administrativo - Resources para Rotas dos Assets("Ativos", "Espólios")
 */
Router::post('/admin/ativo','Api\IntellectualAssetController@store'); # Post/Put para Form Novo Ativo