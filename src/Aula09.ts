//Aula 09: Aprendendo sobre ENUM em Typescript
//basicamente os enumeradores são um conjunto de dados que é possivel utilizar ou classifiar por valores numerais ou textuais. Chave e valor

enum dias{
    domingo=0,
    segunda=1,
    terca=2,
    quarta=3,
    quinta=4,
    sexta=5,
    sabado=6
}

console.log(dias.domingo)
console.log(dias["domingo"])
console.log(dias[1])

const d = new Date();
console.log(dias[d.getDate()]);

enum  cores {
    branco = "ffff",
    preto = "000",
    vermelho = "f00",
    verde = "0f0",
    azul = "00f"
}

console.log(cores.preto)

enum usuario {
    user,
    admin,
    super
}

//tambem eh posssivel definir um enum como tipo


const tp: usuario = usuario.super

console.log(tp)

