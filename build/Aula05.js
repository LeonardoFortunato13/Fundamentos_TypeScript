"use strict";
//Aula 05, entendendo como funciona UNION TYPES em TypeScript
// basicamente são tipos diferentes em uma mesma variavel
let vteste;
vteste = "Leozi";
vteste = 4;
vteste = true;
let cursos = ["JavaScript", "TypeScript", "C#"];
let valores = [1, 2, 3, 4, 5];
cursos.push("Arduino");
valores.push(6);
console.log(cursos);
console.log(valores);
console.log(vteste);
