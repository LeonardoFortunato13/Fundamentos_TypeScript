//Aula13:  Funções em Typescript #P2 Parâmetros Padrões e Opcionais

function somaa(n3:number = 0,n4:number = 0): number{ // aqui eh definido um valor padrao para os parametros, default
    return n3 +n4
}

console.log(somaa(5))

function novoUser(user:string, pass:string,nome?:string):void{ //para indicar que uj parametro é opcional ou nao, se coloca um ? depois da var
    console.log(`User:${user}`)
    console.log(`Pass:${pass}`)
    console.log(`Nome:${nome}`)
    //ou
    let dados = {user,pass,nome}
    console.log(dados)
}

novoUser("br","123")