// Aula 11 Aprendendo sobre Type Assertion e Typecast em Typescript
// é basicamente uma afirmação de tipos
// seu uso ocorre quando é preciso afirmar que um tipo desconhecido é de um tipo conhecido

let nvalor : number ;
let svalor : string ;
let uvalor : unknown ;

uvalor = 10
svalor ="20"

nvalor = Number.parseInt(svalor) // Aqui nvalor do tipo number recebeu o valor 20 do svalor do tipo string, atraves da conversao usando a interface Number

nvalor= <number> uvalor //afirmando que a variavel uvalor é do tipo number e nao unknwon

svalor = <string> uvalor
console.log(typeof(uvalor)) //typeof indica o tipo da variavel determinada
console.log(uvalor)

console.log(typeof(nvalor)) 
console.log(nvalor)