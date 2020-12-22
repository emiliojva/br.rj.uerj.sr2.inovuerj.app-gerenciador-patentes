# [](#rotas)Rotas 

> **Objetivos desta etapa:**
> 
> *   apresentar o conceito de rotas
> *   demonstrar a utilização de rotas para apresentação de componentes
> *   demonstrar a utilização de parâmetros de rota
> 
> **Branch**: [rotas](https://)

## [](#rotas)Conceito

Uma rota está diretamente relacionada a URL, ou seja, também funciona como um localizador de um recurso. A diferença é que acrescenta a possibilidade de utilizar **parâmetros de rota**. Por exemplo: considere um site de notícias **noticias.to** que permite acessar a notícia "Governo paga salarios de servidores", cujo identificador é 7899, está na categoria "política" e foi publicada em 20/12/2017, por meio do URL:

    https://noticias.to/noticias/politica/2017/12/20/governo-paga-salarios-de-servidores/7899

Há informações no URL que pertencem à notícia e mudam de uma notíca para outra:

*   **categoria:** politica
*   **ano:** 2017
*   **mês:** 12
*   **dia:** 20
*   **titulo:** governo-paga-salarios-de-servidores
*   **identificador:** 7899

Analisando URLs de outras notícias alguém poderia chegar à conclusão de que há um padrão:

    /noticias/categoria/ano/mes/dia/titulo/identificador

Independentemente de possuir parâmetros de rota, uma rota é um **padrão**. Cada uma dessas informações (categoria, ano, mes, dia, titulo, identificador), que muda de uma notícia para outra, pode ser representada como um **parâmetro de rota**.

A implementação desse conceito pode variar entre frameworks, mas provavelmente as mesmas funcionalidades estão disponíveis:

*   definir uma rota (e, opcionalmente, usar parâmetros de rota)
*   identificar valores dos parâmetros de rota

Além disso, como URLs são localizadores de recursos, rotas também servem para esse propósito, ou seja, uma rota está associada algum recurso e é uma forma de acessá-lo.


## [](#uri-url-e-urn)URI, URL e URN

**URI** (_Uniform Resource Identifier_) é um identificador de um recurso. A sintaxe desse identificador é:

    scheme:[//[user[:password]@]host[:port]][/path][?query][#fragment]

Onde os elementos entre **[]** são opcionais e:

*   **scheme**: representa o protocolo ou o contexto;
*   **user** e **password**: representam as credenciais do usuário;
*   **host**: representa o identificador do dispositivo que contém o recurso;
*   **port**: representa o número da porta do dispositivo;
*   **path**: representa o caminho do recurso;
*   **query**: uma cadeia de caracteres que representa parâmetros de URL, um conjunto de pares `chave=valor` separados por `&`; e
*   **fragment**: uma cadeia de caracteres com formato dependente do contexto.

A figura a seguir ilustra um URI e a sua composição:

![](https://jacksongomesbr.gitbooks.io/desenvolvimento-web-front-end-com-angular/content/assets/ilustracao-uri-url.png)

O URI identifica um recurso disponível na internet, mais especificamente um repositório do Github. Provavelmente você já conhece isso e pode ser que use os termos **endereço** e **URL**. Você não está errado. URL é a forma mais comum de URI na internet. **URL** (_Uniform Resource Locator_) é um endereço de um recurso na internet. Além disso, URL é a forma mais comum de criar _links _entre páginas web e incorporar uma imagem em uma página web, por exemplo.

**URN** (_Uniform Resource Name_) é o nome de um recurso em um contexto específico. Por exemplo: o ISBN (_International Standard Book Number_) de uma edição de "Romeu e Julieta", de William Shakespeare, é 0-486-27557-4; seu URN poderia ser **urn:isbn:0-486-2557-4**.

Voltando para URL e o contexto da internet, os browsers geralmente fornecem uma **barra de endereço**, por meio da qual o usuário indica qual URL deseja acessar, por exemplo a URL de uma página web. A partir do momento que o browser acessa uma página web ele passa a armazenar o primeiro endereço acessado e os demais endereços que forem acessados por meio de cliques em _links_.

Esse é, provavelmente, o formato mais intuitivo e o mais utilizado para acessar páginas web. Justamente por isso é necessário repensar a forma como o aplicativo desenvolvido não apenas entrega conteúdo para o usuário mas também como permite que o usuário o acesse.


## [](#estrutura-do-software)Estrutura do software


## [](#rotas-no-php)Rotas

Em nosso microframework, definimos no `\Core\Router` que os caminhos das rotas estão em `Config\routes\web.php`, para rotas que serão chamadas via barra de endereço.
Mais adiante, implementaremos no `Core`, Rotas que lidam com apis(api.php) e outros serviços(service.php). Definição de uma rota:

    Router::get('/sobre', function(){
          echo 'Estou na rota sobre';
        });

### [](#parâmetros-de-rota)Parâmetros de rota

A rota `disciplinas/{id}`, possui um **parâmetro de rota** chamado `id`. Obter o valor desse identificador da disciplina na URL é uma tarefa importante desse processo de lidar com rotas. Para fazer isso, o componente `EditorDeDisciplinaCompone, como mostra o trecho de código a seguir.

    Router::get('/usuario/{id}/editar', function($id){
    
        //abrindo sessões (conceito a ser explicado)
        session_start();
      
        // Emitindo mensagem com parametro capturado
        echo "Estamos printando o parametro id - {$id}";
      
    });

Como ocorre:

*   **identificar o valor do parâmetro de rota**: isso é feito por meio de uma chamada para o método `route.snapshot.paramMap.get()`. O parâmetro para o método `get()` é o nome do parâmetro de rota desejado
*   **tratar o valor do parâmetro de rota**: o valor retornado por `get()` é do tipo `string`. Se o valor do parâmetro de rota for igual a `'cadastrar'` então o componente opera no modo de cadastro de disciplina; caso contrário, o código faz uma chamada ao método `disciplinasService.encontrar()`, passando como parâmetro o valor do parâmetro de rota convertido para o tipo `number`, usando a função `parseInt()`, então o componente entra no modo de edição de uma disciplina.

### [](#navegação)Navegação

A navegação é o recurso que permite mudar de uma rota para outra. Isso pode ser feito por meio de uma ação do usuário (por exemplo, quando ele clica em um link) ou via código.

A navegação por meio de link utiliza o elemento `a` e o atributo `href`, como mostrado abaixo:

    <h2>Gerenciador de dados escolares</h2>
    <p>
        <a href="/disciplinas" class="btn btn-primary">
            Gerenciar disciplinas
        </a>
    </p>

O atributo `href` tem o valor `/disciplinas`, o que significa que quando o usuário clicar no link ocorrerá uma navegação para a rota `disciplinas`. É importante destacar que, embora a definição da rota não inclua uma barra no início do caminho, o mesmo não acontece aqui, com o link. É como determinar que o link sempre considera a raiz do site (usando um caminho absoluto).

## [](#padrão-de-trabalho-workflow)Padrão de trabalho (workflow)

Lidar com rotas é um processo simples, mas que aumenta de complexidade de acordo com a arquitetura do software. Entretanto, lidar com esse processo contém alguns passos padrão (supondo que o projeto já tenha iniciado e adote a mesma estrutura):

1.  **definir rotas**: defina as rotas;
2.  **implementar a lógica de negócio**: Como ou quem irá controlar o fluxo do sistema(redirecionamentos,sessões e render)

Adotar esse padrão de trabalho pode tornar o desenvolvimento mais simples e rápido, bem como reduzir a quantidade de erros e permitir a identificação dos erros de forma mais ágil.

> **Resumo do capítulo**
> 
> *   Rotas servem como recurso para integrar componentes ao mecanismo de navegação do browser, que já é conhecido pelos usuários
> *   É possível identificar valores dos parâmetros de rota utilizando `{:nome_do_parametro}`
> *   É possível fazer navegação entre as rotas usando o atributo `href` dos <a>nchors html

#### Principais Referências

- [Conceito de rotas](https://pt.wikipedia.org/wiki/URL)
- [Conceito de rotas 2](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier)
- [rota padrão](https://pt.wikipedia.org/wiki/Rota_padr%C3%A3o)
- [repositorio do jackson](https://jacksongomesbr.gitbooks.io/desenvolvimento-web-front-end-com-angular/content/rotas.html)
