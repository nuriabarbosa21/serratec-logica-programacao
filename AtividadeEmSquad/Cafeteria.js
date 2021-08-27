/* Uma cafeteria está implantando um novo software para que os seus clientes possam realizar os pedidos. Eles necessitam de um programa em que o cliente escolha o tipo de café (café preto, café duplo, café com leite ou cappuccino), informe a quantidade de unidades desejada e o valor total do pedido. */


console.log ("Olá, seja bem vindo(a)! Nossas opções de café são:\nCafé Preto - 3.00\nCafé Duplo - 4.00\nCafé com Leite - 4.50\nCappuccino - 6.80")

const prompt = require("prompt-sync")();
var cafes = ["1 - Café Preto",  "2 - Café Duplo",  "3 - Café com Leite",  "4 - Cappuccino" ];
var numero = prompt("Digite o número da opção desejada");

var preco = numero[cafes -1];
console.log ("Café escolhido: " + preco);


