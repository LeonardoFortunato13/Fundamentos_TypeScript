// 1 - Soma de elementos: Escreva uma função que recebe um array de números e retorna a soma de todos os elementos.
// 2 - Maior elemento: Escreva uma função que recebe um array de números e retorna o maior elemento.
// 3 - Média dos elementos: Escreva uma função que recebe um array de números e retorna a média de todos os elementos.
// 4 - Duplicados: Escreva uma função que recebe um array e retorna um novo array sem elementos duplicados.
// 5 - Filtrar pares/ímpares: Escreva uma função que recebe um array de números e retorna um novo array contendo apenas os números pares ou ímpares, conforme especificado.
// 5 - Reverso: Escreva uma função que recebe um array e retorna um novo array com os elementos na ordem reversa.
// 6 - Maior e menor: Escreva uma função que recebe um array de números e retorna um array contendo o maior e o menor elemento.
// 7 - Ordenação: Escreva uma função que recebe um array de números e retorna um novo array ordenado em ordem crescente ou decrescente.
// 8 - Buscar elemento: Escreva uma função que recebe um array e um valor e retorna true se o valor estiver presente no array, ou false caso contrário.
// 9 - Interseção de arrays: Escreva uma função que recebe dois arrays e retorna um novo array contendo apenas os elementos que estão presentes em ambos os arrays.
function question1(somaArray) {
    var suma = 0;
    for (var i = 0; i < somaArray.length; i++) {
        suma += somaArray[i];
    }
    return suma;
}
var numd = [1, 2, 3, 4, 5];
console.log(question1(numd));
