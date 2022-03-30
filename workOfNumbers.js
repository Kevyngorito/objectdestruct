function calculaIdade (anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
};

const pessoa1 = {
    nome: 'João',
    idade: 32,
};

const pessoa2 = {
    nome: 'Camila',
    idade: 22,
};

const animal = {
    nome: 'Fiona',
    idade: 4,
    raca: 'Pug'
};
/* Utilizando o call, atribui as consts criadas ao nome, e dando o parâmetro de idade
faz o calculo e loga a idade que a pessoa terá em X anos informados abaixo */

console.log(calculaIdade.call(pessoa2, 30));