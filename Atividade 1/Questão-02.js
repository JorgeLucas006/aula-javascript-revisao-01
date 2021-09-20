/*
2) Criar uma função em javascript que receba três parâmetros numéricos valor A, valor B e valor C, validar se:

a) O (valor A  + valor C)  é maior que valorB

i) Se for, exibir no console os valores de valor A + Valor C e a soma deles.
ii) Se não for, exibir no console que os valores de valor A + Valor C é igual ao valor B.
*/

function verify(a, b, c){
  if( (a+c) > b){
    return (a+" + "+c+" = "+(a+c));
  }else{
    return (a+" + "+c+" <= "+b);
  }
}

console.log(verify(2,3,5));
console.log(verify(5,15,5));