//Aula 16 : Aprendendo sobre P.O.O. em Typescript

class Computador {
    nome: string = "";
    marca: string = "";
    ram: number = 0;
    cpu: number = 0;
    ligado: boolean = false;


    constructor(nome: string, ram: number, cpu: number, ligado: boolean) {
        this.nome = nome;
        this.ram = ram
        this.cpu = cpu
        this.ligado = ligado
        console.log("NOvo computador criado")
    }

    //metodo de informação
    info(): void {

        console.log(`Nome: ${this.nome}`)
        console.log(`ram: ${this.ram}`)
        console.log(`cpu: ${this.cpu}`)
        console.log(`ligado: ${this.ligado?"Sim":" Não "}`)
        console.log("------")

    }

    //metodo de ligar o pc
    ligar(): void {
        this.ligado=true
    }
    desligar(): void {
        this.ligado=false
    }

}
//Instanciar 
const comp1 = new Computador("lenovo", 64, 10, false);

const comp2 = new Computador("DELLG15", 32, 5, false );

const comp3 = new Computador("Legion", 128, 10, false);

comp1.ligar()


comp1.info();

comp2.info();

comp3.info()

