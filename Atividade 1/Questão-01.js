/* 
1) Exibir no console o resultado das seguintes validações, dado o valor da variável _numero:

a) Se o valor for menor que zero, mostrar: O valor número é um Número negativo.
b) Se o valor for maior ou igual a zero, mostrar: O valor número é um Número positivo.
*/

function positive(numero){
  if(numero < 0){
    return "O valor número é um Número negativo."
  }else if(numero === 0){
    return "O valor número é um Número neutro."
  }else {
    return "O valor número é um Número positivo."
  }
}
console.log(positive(-5));
console.log(positive(0));
console.log(positive(5));
