<?php
/**
 * Arquivos de Rotas
 */

use \Core\Router\Router,
    \Core\Helpers\Debug;

/**
 * Controller Administrativo - Resources para Rotas dos Bootys("Ativos", "Espólios")
 */
Router::post('/admin/ativo','Api\BootyController@store');                # Post/Put para Form Novo Ativo