# PHP do jeito certo 

## Nosso melhores amigos

#### Principais Referências

- [PHP.net](https://www.php.net/manual/en/)
- [PHP the right way](https://phptherightway.com)
- [Padrões de Projeto](https://refactoring.guru/pt-br/design-patterns/php)

## Padronização de Codigo

Para melhor entendimento entre os desenvolvedores, o PHP possui uma comunidade reguladora, o php-fig.org. O qual criou as PSR's para lidar areas comuns do desenvolvimento (AUTOLOADING, INTERFACES, HTTP, CODING STYLES). 

Quando você segue essas recomendações, você está se ajudando, ajudando a comunidade e seus companheiros de projeto.

Os editores mais atuais conseguem corrigir em tempo real, o que está sendo codificado, utilizando-se de uma feature chamada PHP_CodeSniffer (No visual code e phpstorm já vem instalado)  


#### PSR ou PHP Standard Recommendation 

##### Principais Referências  

- [Comunidade PSR](https://www.php-fig.org/)
- [Style Code](https://phptherightway.com/#code_style_guide)


## Principais Paradigmas 

- Object-oriented Programming(OOP) ou Programação Orientada a Objeteos
- Functional Programming ou Programação Funcional (like Javascript) 


## Gerenciamento de Dependencias

Malandro é malandro e mané é mané. Não reinvente a roda! Vá de composer.

#### Dependency Management

- Dependencias podem ser pacotes de terceiros(bibliotecas, estruturas e componentes PHP) que irão dar poderes ao ecosistema do projeto
- Evitar recriar códigos que já foram testados e vastamente injetado nos principais projetos das web(google,facebook e outros)
- Existem várias bibliotecas, estruturas e componentes PHP para escolher. Seu projeto provavelmente usará vários deles - são dependências do projeto. Até recentemente, o PHP não tinha uma boa maneira de gerenciar essas dependências do projeto. Gerenciar manualmente é algo impossivel em grandes projetos, pensando nisso a comunidade PHP possui o Composer(ferramenta) que instala essas dependencias e um portal com todos os pacotes(dependêcias) disponiveis, o Packagist.org. 
- O que é e Como instalar o Composer neste link https://phptherightway.com/#composer_and_packagist


#### Instalação do Composer

##### Local - Via CLI (Command-line installation)

Para instalar rapidamente o Composer no diretório atual, execute o seguinte script em seu terminal. Para automatizar a instalação, use o guia de instalação do Composer programaticamente:
```
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '756890a4488ce9024fc62c56153228907f1545c228516cbf63f885e036d37e9a59d27d63f46af1d4d07ee0f76181c7d3') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

## Getting Started

##### Criando uma aplicação base com carregamento automatico do Composer 

1. Crie um arquivo na raiz com nome ```composer.json```
1. Seguindo a recomendação da PSR-4 e a documentação do composer, informe o diretorio e namespace base, conforme abaixo:
    ```
    "autoload": {
        "psr-4": {
          "App\\":"App/"
        }
      },
      "require": {
        "monolog/monolog": "1.*",
        "league/plates": "3.3.*"
      }
    ```
1. O ```Require``` dentro do ```compose.json``` é responsável por instalar pacotes de terceiros. Estamos nesse exemplo, instalando monolog(gerenciador de logs) e plates(Pacote com Engine de Templates) Não confundir com comando require do php, que inclui um arquivo externo ao contexto atual. 
1. Em seguida, para mapear sua aplicação e instalar possiveis dependencias, execute: 
    ```
    php composer.phar install
    ```
1. Agora para testar o App, crie um arquivo ```index.php```, dentro do diretorio ```/public```
1. Tudo que precisamos fazer é importar o ```autoload``` que está dentro da pasta ```vendor```.
    Em ```public/index.php``` digite: 
    ```
    require_once '../vendor/autoload.php';
    ```
1. Neste exemplo, incluiremos e instanciaremos o pacote ```monolog```, que serve para registrar logs da sua aplicação:
    ```
    // create a log channel
    $log = new Logger('name');
    $log->pushHandler(new StreamHandler('../#private/logs/your.log', Logger::WARNING));
    
    // add records to the log
    $log->warning('Foo');
    $log->error('Bar');
    
    echo "Ótimo, meu php já instanciou Monolog , sem que eu faça require em Logger e StreamHandler";
    ```

Em resumo, o que é importante até aqui :<br>
Entender que o PHP ou qualquer outra linguagem precisa ser informada(caminho/path) de quando terá que importar uma classe.<br> 
Não foquem no Monolog e sim na lógica de autocarregamento.<br>
Não fosse o autoload(psr-4), teriamos que ficar dando require pra tudo. Não queremos isso!   


# phpDocumentor
É a forma que documentamos nossas classes, funções e etc, no php. Os comentários ganham poderes!

exemplo: 
```
**
 * Função para testar se package monolog foi instanciado com sucesso e ja cria um log no caminho App/logs/your.log
 * @throws Exception
 * @link https://packagist.org/packages/monolog/monolog#1.25.5
 */
function testInstanceMonolog(){

  // create a log channel
  $log = new Logger('name');
  $log->pushHandler(new StreamHandler('../#private/logs/your.log', Logger::WARNING));

  // add records to the log
  $log->warning('Foo');
  $log->error('Bar');

  echo "Ótimo, meu php já instanciou Monolog , sem que eu faça require em Logger e StreamHandler";

}
```
No exemplo acima, explicamos o que nossa função faz, pra quem for utiliza-la ou para o autocomplete dos editores php 
[link](https://manual.phpdoc.org/HTMLSmartyConverter/HandS/phpDocumentor/tutorial_tags.link.pkg.html)


