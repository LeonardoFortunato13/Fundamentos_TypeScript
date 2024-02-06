//Aula 16 : Aprendendo sobre P.O.O. em Typescript
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
    //metodo de informação
    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`ram: ${this.ram}`);
        console.log(`cpu: ${this.cpu}`);
        console.log(`ligado: ${this.ligado ? "Sim" : " Não "}`);
        console.log("------");
    }
    //metodo de ligar o pc
    ligar() {
        this.ligado = true;
    }
    desligar() {
        this.ligado = false;
    }
}
//Instanciar 
const comp1 = new Computador("lenovo", 64, 10, false);
const comp2 = new Computador("DELLG15", 32, 5, false);
const comp3 = new Computador("Legion", 128, 10, false);
comp1.ligar();
comp1.info();
comp2.info();
comp3.info();
export {};
