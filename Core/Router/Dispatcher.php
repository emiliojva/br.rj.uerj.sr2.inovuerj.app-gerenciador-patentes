<?php

namespace Core\Router;
class Dispatcher
{

  /**
   * representa as requisições web da aplicação
   * @var Request
   */
  private $_request;

  /**
   * Representa a coleção de rotas da aplicação
   * @var Router
   */
  private $_router;

  /**
   * Representa a rota atual na barra de endereço ou recurso
   * @var mixed|string
   */
  private $_active_route;

  public function __construct()
  {

    /**
     * Instancia de uma Requisição
     */
    $this->_request = new Request();

    /**
     * Instancia do roteador
     */
    $this->_router = new Router($this->_request);

    /**
     * Carregar Rotas
     */
    $this->_router->loadRoutes();

    /**
     * Rota atual da address bar
     */
    $this->_active_route = $this->_request->getPath();

  }

  /**
   * Instancia de um roteador
   * @return Router
   */
  public function getRouter()
  {
    return $this->_router;
  }

  /**
   * Executa o despachante mediante a captura do verbo http e array de rotas
   * Retornando `callback` e `params` encontrados
   * @return array
   */
  public function run()
  {
    $result = NULL;

    /**
     * Capturar o metodo(verbo http) atual.
     * GET, POST, PUT, DELETE, PATCH OU OPTIONS
     */
    $http_method = $this->_request->getMethod();

    /**
     * Pegar conjunto de rotas de acordo com metodo http atual
     */
    $arrayAllRoutesByMethod = Router::getAllByMethod($http_method);

    

    /**
     * Iterar por cada rota do metodo http atual
     * Checar se existe o path e seus params
     * Se encontrar, encerrar retornando `callback` e `params`.
     */
    $result = null;
    foreach ($arrayAllRoutesByMethod as $route) {

      $path = $route[0];
      $callback = $route[1];

      $result = $this->checkUrlPath($path);

      if ($result) {
        break(1); // interrompe todos os loops foreach caso encontre o resultado
      }

    }

    if($result){

      /**
       * Retorna função(controller/action) que deverá ser executado
       * E parametros ja processados por expressão regular nas rotas
       * http://localhost/usuario/{id}/editar
       */
      return [
        'callback' => $callback,
        'params' => $result['params']
      ];

    }

  }

  /**
   * Valida se é igual a rota da barra de endereço
   * Retorna resultado com a rota encontrada e parametros encontrados
   * @param $toFind
   * @return array
   */
  private function checkUrlPath($toFind)
  {

    /**
     * Escapando barra
     * Se não escapar as barras, a função preg_match
     * processa como expressão regular.
     * Não queremos isso!
     * Queremos comparar a string da rota atual, com uma expressao regular
     * que case com um item array de rotas
     */
    $toFind = str_replace('/', '\/', $toFind);

    /**
     * Verificar se a rota contem parametros
     * Aqui estamos verificando se cadastramos alguma rota com o padrão(pattern) /{id}/
     */
    $url_compilada = preg_replace('/\{[a-zA-Z]+\}/', '([a-zA-Z0-9_-]+)', $toFind);

    /**
     * Padrao que estamos procurando
     */
    $pattern = '/^' . $url_compilada . '$/';

    /**
     * rota atual do navegador
     */
    $subject = $this->_active_route;

    /**
     * Verificar passada casa com a rota atual do navegador
     */
    preg_match($pattern, $subject, $results);


    if($results){

      /**
       * Rota encontra é sempre o primeiro parametro encontrado pelo preg_match
       * Os demais serão os parametros na ordem da esquerda pra direita
       */
      $rota_encontrada = array_shift($results);
      $params = $results;

      return [
        'rota'=>$rota_encontrada,
        'params'=>$params
      ];

    }

  }

}
