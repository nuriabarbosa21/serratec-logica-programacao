var prompt = require("prompt-sync")();
var pessoa = prompt("Qual numero de animal você sonhou ?");

function generaleatorio(max) {
  return Math.floor(Math.random() * max);
}

var animais = [];
animais[0] = "cavalo";
animais[1] = "cachorro";
animais[2] = "vaca";
animais[3] = "jacare";
animais[4] = "sapo";
animais[5] = "tigre";
animais[6] = "lagarto";
animais[7] = "cobra";
animais[8] = "dragao";
animais[9] = "urso";


do {
  var sonhoIgual = Iasonho == pessoa;
  var aleatorio = generaleatorio(9);
  var Iasonho = animais[aleatorio];
  console.log("A IA sonhou com " + Iasonho);
  pessoa = prompt("Qual o nome do animal que você sonhou ?");

  if (sonhoIgual) {
    console.log("Você acertou !!. A Ia sonhou com "+ Iasonho + " tambem.");
    break;
  } else {
    console.log("você errou, tente outra vez !!");
  }
} while (!sonhoIgual);