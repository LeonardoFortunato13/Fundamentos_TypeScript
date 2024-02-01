"use strict";
//Aula 09: Aprendendo sobre ENUM em Typescript
//basicamente os enumeradores são um conjunto de dados que é possivel utilizar ou classifiar por valores numerais ou textuais. Chave e valor
var dias;
(function (dias) {
    dias[dias["domingo"] = 0] = "domingo";
    dias[dias["segunda"] = 1] = "segunda";
    dias[dias["terca"] = 2] = "terca";
    dias[dias["quarta"] = 3] = "quarta";
    dias[dias["quinta"] = 4] = "quinta";
    dias[dias["sexta"] = 5] = "sexta";
    dias[dias["sabado"] = 6] = "sabado";
})(dias || (dias = {}));
console.log(dias.domingo);
console.log(dias["domingo"]);
console.log(dias[1]);
const d = new Date();
console.log(dias[d.getDate()]);
var cores;
(function (cores) {
    cores["branco"] = "ffff";
    cores["preto"] = "000";
    cores["vermelho"] = "f00";
    cores["verde"] = "0f0";
    cores["azul"] = "00f";
})(cores || (cores = {}));
console.log(cores.preto);
var usuario;
(function (usuario) {
    usuario[usuario["user"] = 0] = "user";
    usuario[usuario["admin"] = 1] = "admin";
    usuario[usuario["super"] = 2] = "super";
})(usuario || (usuario = {}));
//tambem eh posssivel definir um enum como tipo
const tp = usuario.super;
console.log(tp);
