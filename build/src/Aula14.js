// Auka 14: Arrow Function ou Função de Seta em Typescript
// função anonima é utilizada sempre quando não quiser ou não precisar declarar uma função de callback pra uma outra função
test(); // pode ser lida antes da função
function test() {
    console.log("fala fi"); // onde se chama uma função nao importa, seja no topo do codigo ou embaixo ela vai automaticamente ser jogada p cima
}
const teste = (txt) => {
    console.log(txt);
};
teste("kkkkk"); // não pode ser lida antes da func
const sominha = (nu1, nu2) => {
    return nu2 - nu1;
};
console.log(sominha(68, 7));
const somaArray = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
let numeross = [10, 20, 30, 40];
console.log(somaArray(numeross));
export {};
