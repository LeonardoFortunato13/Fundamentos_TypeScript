// Aula 12 : Aprendendo sobre Funções em Typescript #P1

// Nas funçoes em TS os tipos sao expecificados na criação da variavel, na parametrização e no retorno



function logar(user : string , password : string): void { // função sem retorno: somente chamo a função e passo os parametros
    
    console.log(`User: ${user}`)
    console.log(`Password: ${password}`)

}
logar("leozi","123")


function soma (n1:number , n2:number) : number { // função com retorno : chamo um consolelog com os parametros da func pra exibir o seu retorno (calculo)
 return n1 + n2
}
console.log(soma(10,34))

const n_res: number=soma(10,34)
console.log(n_res)

const s_res: string=soma(2,4).toString() // var que recebe o retorno da função soma do tipo number, e converte em tipo string, mudando seu seu valor
console.log(s_res)