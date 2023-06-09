# Conversor WEB de Decimal para Binário

Este repositório contém um conversor web que permite converter números decimais para binários e vice-versa. Ele consiste em um arquivo HTML, um arquivo CSS e um arquivo JavaScript.

## HTML

O arquivo HTML (`index.html`) define a estrutura e o layout da página web. Ele inclui dois campos de entrada, um para o valor decimal e outro para o valor binário. Os valores convertidos são exibidos dinamicamente à medida que o usuário insere os dados. O arquivo HTML também faz referência a arquivos externos de CSS e JavaScript.

## CSS

O arquivo CSS (`index_styles.css`) contém os estilos e propriedades de layout para a página web. Ele define a cor de fundo, estilos de fonte, dimensões do container e vários outros estilos para criar uma interface visualmente atraente e amigável ao usuário.

## JavaScript

O arquivo JavaScript (`decimal_binary.js`) fornece a funcionalidade para a conversão de decimal para binário e a validação do input binário. Ele fica atento a alterações no campo de entrada decimal e atualiza automaticamente o campo de entrada binário com o valor binário correspondente. Da mesma forma, ele também fica atento a alterações no campo de entrada binário e atualiza o campo de entrada decimal se o valor for um número binário válido.

A função `binValidator` verifica se o número binário inserido é válido, garantindo que ele contenha apenas 0s e 1s.

## Como usar

1. Abra o arquivo `index.html` em um navegador web.
2. Insira um número decimal no campo "Decimal" para convertê-lo para binário. O equivalente binário será exibido no campo "Binário".
3. Insira um número binário no campo "Binário" para convertê-lo para decimal. O equivalente decimal será exibido no campo "Decimal".
4. Se um input binário inválido for inserido, uma mensagem de erro será exibida abaixo dos campos de entrada.

Sinta-se à vontade para explorar e utilizar este Conversor WEB de Decimal para Binário em seus próprios projetos ou para fins educacionais. Contribuições e melhorias são bem-vindas!
