//Aula 03, explica como funcionam as configurações de compilação no arquivo tsconfig(arquivo raiz) e suas especificações
class Curso {
    canal = null;
    curso = null;
    constructor(canal: any,curso: any){
        this.canal = canal
        this.curso = curso
    }
    
}
let c1 = new Curso ("CBFCursos", "TypeScript");
console.log(c1.canal)
console.log(c1.curso)