// Aula 06: Aprendendo mais sobre Array e Readonly Array em Typescript
let numeros = [20, 30, 40];
let num = [20, 30, 40]; //outras forma de declarar um array do tipo numbwe
let num1 = [20, 30, 40, "leozi"]; //esse array pode receber numeros ou strings
numeros.push(10); // metodo que adiciona um valor no final do array
numeros.unshift(10); // metodo que adiciona um valor no inicio do array
numeros.pop(); // metodo que retira o ultimo elemento do array
numeros.shift(); // metodo que retira o primeiro elemento do array
console.log(numeros);
//Read only,funciona somente para a leirura mas nao dispensa tipagem
let numeros_ro = [100, 200, 300];
export {};
