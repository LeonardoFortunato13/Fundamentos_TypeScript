// Aula 15: Aprendendo sobre parâmetros REST com SPREAD

//REST- espalhador, serve para espalhar os valores

 const fsoma = (a: number , b: number ): number => a + b // spread, Permite expandir uma expressão em um local que receba múltiplos argumentos ou elementos.
  
    const val: number[] =[100,50]

//console.log(fsoma(...val))


const primeirosItens = [ 1, 2 , 3 ] // spread, Permite expandir uma expressão em um local que receba múltiplos argumentos ou elementos.

  const outrosItens = [ ...primeirosItens, 4, 5, 6 ]

  console.log(outrosItens) // [ 1, 2 , 3, 4, 5, 6 ]



function ffsoma(...n: number[]): number{ // no tipo de parametro rest , ele pega todos os tipos de valores, não eh necessario escolher um numero fixo
    let s: number =0

    for (let eN of n){
        s+= eN
    }

    // n.forEach((eN)=>{
    //     s+= eN
    // })
    return s
}

console.log(fsoma(11,11))

console.log(ffsoma(11,11,33, 359, 444))