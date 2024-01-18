//Aula 08: Aprendendo sobre o tipo OBJECT em Typescript

//Object pode receber propriedades ou funções
let dados = {
    nome: "Chizuru" ,
    idade: 20, 
    status: "ativo",

    ola:()=>(console.log("hello")),
    info: (p:string)=>(console.log(p))
}


console.log(typeof(dados));
console.log(dados.ola);
dados.ola();
dados.info(dados.nome);