// 01 - Faça um programa que verifique se um número é par ou ímpar.
// 02 - Escreva um programa que determine se um ano é bissexto ou não.
// 03 - Crie um programa que identifique qual é o maior de três números dados.
// 04 - Faça um programa que determine se um triângulo é equilátero, isósceles ou escaleno, com base nos tamanhos dos seus lados.
// 05 - Escreva um programa que classifique a idade de uma pessoa em categorias: criança, adolescente, adulto ou idoso.
// 06 - Crie um programa que verifique se um número é positivo, negativo ou zero.
// 07 - Faça um programa que determine se um número é primo ou não.
// 08 - Escreva um programa que determine se uma pessoa pode votar ou não, com base na sua idade (considerando a idade mínima para votar).
// 09 - Crie um programa que determine se um ano é ou não um século bissexto.
// 10 - Faça um programa que classifique um estudante de acordo com a sua média de notas: Aprovado, Reprovado ou Recuperação.
function question01(num1) {
    if (num1 % 2 == 0) {
        (console.log(`o numero ${num1} é par`));
    }
    else {
        console.log(`o número ${num1} é impar`);
    }
}
function question02(ano) {
    if (ano % 4 == 0) {
        console.log(`O ano ${ano} é bissexto`);
    }
    else {
        console.log(`O ano ${ano} não é bissexto`);
    }
}
question02(1000);
export {};
