# [](#implementando-mvc-views)Views - Implementando camada View da Aplicação

> **Objetivos desta etapa:**
>
> *   Apresentar Camada View do MVC 
> *   Apresentar Motor de Renderização - Template Engine
> *   Implementar primeira View com Plates   
> *   Apresentar conclusão da documentação    


> 
> **Branch**: [views](https://)

## Apresentar Camada View do MVC

A View ou Visão exerce papel final de renderizar tudo que foi processado pelo `Controller`, capturar parametros e plotar nas tags HTML ou Funcões do Engine Template, da nossa aplicação. 


## Apresentar Motor de Renderização - Template Engine 

Um template engine é um padrão utilizado pelos frameworks, com finalidade de separar camadas lógicas(controllers e Models) de Camadas de Visão, tais como HTML, Javascript ou qualquer outra saída para o usuário.

Estamos utilizando o template engine `Plates`, que é nativo da linguagem php.
Desenvolvido a parte com o pacote `\League\Plates\Engine` para seguir a finco as diretrizes da comunidade PHP-FIG.  


Seguindo as boas práticas da comunidade phptherightway.com, abaixo na imagem, um exemplo de uma view básica, estendendo um layout chamado `template`. Referencia: [phpdojeitocerto.com](https://phptherightway.com/#plain_php_templates):

![Exemplo View com Plates](/%23private/docs/phptherightway.com/imagens/views-template-engine-plain.png "Exemplo de um template e view utilizando o Plates"). 


Abaixo temos, como iniciar e utilizar o Plates no PHP:


    <?php
    
       $template_engine_plates = new \League\Plates\Engine('../App/Views');
       
       $template_engine_plates->render('minha_view',array('param_nome'=>'usuario');
       
    ?>

O que estamos fazendo aqui. 

Primeiro, instanciamos a classe que representa o motor de renderização Plates. 
No seu construtor, informamos o caminho onde ele deve procurar as views, por nome(exemplo `'minha_view'`).

Segundo, usamos o método `render` para exibir para a view(html) do arquivo `minha_view` e fornecemos um `array` com todas variaveis que serão visiveis ao template/view.





---

**IMPORTANTE!!!** 

OLHAR A DOCUMENTAÇÃO DO PLATES.
ESTAMOS CONSTRUINDO UMA APLICAÇÃO HANDS ON, A QUAL PRECISAMOS SER PESQUISADORES, PARA MELHOR USO DA LINGUAGEM E FERRAMENTA. 

SEGUE MANUAL DE REFERêNCIA DO PLATES - http://platesphp.com/ 


  


> **Conclusão:**
>
> *   A introdução de templates engine - [link](https://www.treinaweb.com.br/blog/o-que-e-template-engine/)  
> *   Aqui encontramos orientações de uso do nosso template engine, plates -  [link](http://platesphp.com/)
> *   Usamos o informações e técnicas de layouts - [link](http://platesphp.com/templates/layouts/
      )    
> *   E adaptamos ao nosso projeto o `simple example` -   [link](http://platesphp.com/getting-started/simple-example/)    
