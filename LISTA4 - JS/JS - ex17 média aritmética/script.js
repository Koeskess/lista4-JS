let nota1=parseFloat(prompt("Informe a primeira nota: "));
let nota2=parseFloat(prompt("Informe a segunda nota: "));
let media = (nota1 + nota2)/2;

if (media >= 6){
 alert("A média do(a) aluno(a) é: " + media + "." + " Aprovado!");
} 
else{
 alert("A média do(a) aluno(a) é: " + media + "." + " Reprovado!");
}