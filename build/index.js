Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var resposta = await inquirer_1.default.prompt([
    {
        type: 'input',
        name: 'name',
        mssage: "messsge"
    }
]);
console.log(resposta);
export {};
