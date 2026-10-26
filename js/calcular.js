/*
Operadores aritméticos:
+ soma
- subtração 
* multiplicação 
/ divisão 

++ incremento (soma mais 1)
-- dicremento (subtrai menos 1)

Operadores de atribuição:
= igual
+= mais ou igual
-= menos ou igual
/= dividido ou igual 
*= multiplicado ou igual 

Operadores de sequência:
+ (serve para concatenar valores)
  string ou variáveis))
- (serve para subtrair valores)
  (string ou variáveis))

Operadores de comparação:
RETORNA TRUE (VERDADEIRO) OU FALSE (FALSO)

== (comparar dois valores)
=== (comparar valores e tipo de dado)
!= (diferente) de valores apenas
!== (comparar a diferença de valores e tipo de dado)

< menor     > maior
<= menor ou igual    >= maior ou igual
*/

function somar (){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value); 
    let resultado = n1 + n2;

    const corResultado = document.getElementById("resultado");
    corResultado.innerHTML = resultado;

    if (resultado < 0) {
        corResultado.style.color = "#d66a8a"; // vermelho fofo
        corResultado.style.backgroundColor = "#fde7ef"; // rosa clarinho
    } else {
        corResultado.style.color = "#8064a8"; // roxo
        corResultado.style.backgroundColor = "#faf7ff";
    }
}

function subtrair (){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value); 
    let resultado = n1 - n2;
    document.getElementById("resultado")
    .innerHTML = resultado;
}

function multiplicar (){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value); 
    let resultado = n1 * n2;
    document.getElementById("resultado")
    .innerHTML = resultado;
}

function dividir (){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value); 

    if(n2 === 0){
         document.getElementById("resultado").innerHTML = "Erro: divisão por 0";

    }

          
    else{
    let resultado = n1 / n2;
    document.getElementById("resultado")
    .innerHTML = resultado;
    const corResultado = document.getElementById("resultado");
    if(resultado < 0){
        corResultado.style.backgroundColor = "red";

    }
    else{
    corResultado.style.backgroundColor = "lightblue";    
    }
    }


}

function limpar (){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = ""; 
    document.getElementById("resultado").innerHTML = "---";
    document.getElementById("resultado").style.backgroundcolor= "lighblue"
}
