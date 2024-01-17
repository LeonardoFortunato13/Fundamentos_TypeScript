//Aula 05, entendendo como funciona UNION TYPES em TypeScript
// basicamente são tipos diferentes em uma mesma variavel
let vteste : string|number|boolean
vteste ="Leozi"
vteste =4
vteste = true

let cursos : string[] = ["JavaScript", "TypeScript", "C#"];
let valores : number[] =[1,2,3,4,5]


cursos.push("Arduino")
valores.push(6)

console.log(cursos)
console.log(valores)
console.log(vteste)