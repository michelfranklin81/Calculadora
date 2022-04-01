/* Modo use strict aponta erro caso não sejam aplicadas as boas práticas */
'use strict'

/* Função que deverá mostrar no display o número/operador digitado */
function insert(num){
let numero = document.getElementById('result').innerHTML; //incluo a tag em uma variável
document.getElementById('result').innerHTML = numero + num; // O que for digitado deverá mostrar no display
}

/* Função limpar o display */
function clean(){
  document.getElementById('result').innerHTML = "";
}

/* Função para apagar o último dígito */
function back(){
  let result = document.getElementById('result').innerHTML;
  document.getElementById('result').innerHTML = result.substring(0, result.length -1) //O método .substring vai ler todo o display 'resultado e reduzir -1 dígito a partir do início do cursor(0)
}

/* Função calcular ( = ) e se não houver dados a calcular deve apresentar msg de erro*/
function calcular(){
  let result = document.getElementById('result').innerHTML;
  if(result){
    document.getElementById('result').innerHTML = eval(result);
  }else { 
    document.getElementById('result').innerHTML = 'Error...'
  }
}
