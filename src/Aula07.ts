//Aula 07: Aprendendo sobre TUPLAS em Typescript

let coisas : (number|string)[] = [10]

// para tupla e preciso expecificar os tipos de dados pra cada posição e cada posição precisa receber corretamente o que foi definido
let coisass : [string,number,number,boolean] = ["corda",20,30,true] // segue a sequencia que foi presetada


coisass.push("kit medico", 5, true)//  nao vai ler, pois o indice do meu array so foi definido ate o 2 indice
console.log(coisass[0])