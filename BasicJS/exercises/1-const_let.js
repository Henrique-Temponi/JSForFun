/*
[nome] tem [idade], pesa [peso]
tem [altura] de altura e seu IMC e' de [calculoimc]
[nome] nasceu em [anoNacimento]
*/

const nome = "Zuikaku";
const surName = "CV";
const idade = 89;
const peso = 4000;
const altura = 250;
let imc = peso / (altura * altura);
let anoNacimento = 2020 - idade;

console.log(nome, surName, "tem", idade, "anos, pesa", peso, "Kg tem", altura, "metros de altura e seu IMC e' de", imc, nome, surName,
    "nasceu em", anoNacimento);

console.log("");

// usando template strings
console.log(`${nome} ${surName} tem ${idade} anos, pesa ${peso} Kg`);
console.log(`tem ${altura} metros de altura e seu IMC e' de ${imc}`);
console.log(`${nome} ${surName} nasceu em ${anoNacimento}`);



