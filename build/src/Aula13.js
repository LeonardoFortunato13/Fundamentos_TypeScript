"use strict";
//Aula13:  Funções em Typescript #P2 Parâmetros Padrões e Opcionais
function somaa(n3 = 0, n4 = 0) {
    return n3 + n4;
}
console.log(somaa(5));
function novoUser(user, pass, nome) {
    console.log(`User:${user}`);
    console.log(`Pass:${pass}`);
    console.log(`Nome:${nome}`);
    //ou
    let dados = { user, pass, nome };
    console.log(dados);
}
novoUser("br", "123");
