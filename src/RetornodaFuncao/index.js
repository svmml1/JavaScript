function criaPessoa(nome, sobrenome) {
    return { nome, sobrenome};
}

const p1 = criaPessoa('Sergio', 'Victor');
const p2 = {
    nome: 'Sergio',
    sobrenome: 'Lopes'
};

console.log(p1)
console.log(p2)

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto
}

const olaMundo = falaFrase('Olá')
console.log(olaMundo('mundo!'))