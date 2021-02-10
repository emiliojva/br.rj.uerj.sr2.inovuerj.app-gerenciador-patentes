<?php

namespace Core\DI;

/**
 * Resolver dependencias
 *
 *
 * Os parametros dos construtores de classe quando objetos, não são instanciado automaticamente.
 * Para isso, usamos uma padrão de projeto chamado Dependency Injection(Injeção de Dependencia).
 * Isto garante que todos os Objetos sejam gerados ou "resolvidos" (new Class()).
 *
 * Class Resolver
 * @package Core\DI
 * @url https://php-di.org/doc/understanding-di.html
 *
 */
class Resolver
{
  private $dependencies;

  public function closure($method, array $dependencies = [])
  {
    $this->dependencies = $dependencies;

    $info = new \ReflectionFunction($method);         // metodo a ser resolvido. Trás informações de uma function

    $parameters = $info->getParameters();

    $parameters = $this->resolveParameters($parameters);

    return call_user_func_array($info->getClosure(), $parameters);
  }

  /**
   * Retorna dependencias resolvidas de um método de classe
   *
   * @param $class
   * @param $method
   * @return array
   * @throws \ReflectionException
   */
  public function method($class,$method){

    $r = new \ReflectionMethod($class,$method);
    $parameters = $r->getParameters();

    $dependencies = [];
    foreach ($parameters as $parameter){
      $reflectionNamedType = $parameter->getType();

      if( $reflectionNamedType->getName() === "Core\Router\Request" ){
        $dependencyClassName = (string)$reflectionNamedType->getName();
        $dependencies[] = new $dependencyClassName();
      }

    }

    return $dependencies;
  }

  public function byClass($class, array $dependencies = [])
  {
    $this->dependencies = $dependencies;

    // Pega informacoes da class
    $class = new \ReflectionClass($class);

    if (!$class->isInstantiable()) {
      throw new \Exception("{$class} is not instantiable");
    }

    $constructor = $class->getConstructor();

    if (!$constructor) {
      return new $class->name;
    }

    $parameters = $constructor->getParameters();
    $parameters = $this->resolveParameters($parameters);

    return $class->newInstanceArgs($parameters);
  }

  private function resolveParameters($parameters)
  {
    $dependencies = [];
    foreach ($parameters as $parameter) {
      $dependency = $parameter->getClass();

      if ($dependency) {
        $dependencies[] = $this->class($dependency->name, $this->dependencies);
      } else {
        $dependencies[] = $this->getDependencies($parameter);
      }
    }

    return $dependencies;
  }

  private function getDependencies($parameter)
  {
    if (isset($this->dependencies[$parameter->name])) {
      return $this->dependencies[$parameter->name];
    }

    if ($parameter->isDefaultValueAvailable()) {
      return $parameter->getDefaultValue();
    }

    throw new \Exception("{parameter->name} not receive a valid value");
  }
}
