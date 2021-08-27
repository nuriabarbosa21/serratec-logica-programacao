/* O programa "Número aleatório" mostra no console 6 números aleatórios entre 1 e 100, um embaixo do outro, em sequência. */


var numero = [];
while(numero.length < 6){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) numero.push(r);
}
console.log(arr);