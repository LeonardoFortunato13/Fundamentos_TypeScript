"use strict";
//Aula 16 : Aprendendo sobre P.O.O. Classes #P1 em Typescript
class Computador {
    nome = "";
    marca = "";
    ram = 0;
    cpu = 0;
    ligado = false;
    constructor(nome, ram, cpu, ligado) {
        this.nome = nome;
        this.ram = ram;
        this.cpu = cpu;
        this.ligado = ligado;
        console.log("NOvo computador criado");
    }
}
//Instanciar 
const comp1 = new Computador("lenovo", 64, 10, true);
const comp2 = new Computador("DELLG15", 32, 5, false);
const comp3 = new Computador("Legion", 128, 10, true);
console.log(comp1);
console.log(comp2);
console.log(comp3);
