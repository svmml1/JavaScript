{/* primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol) */}
{/* Referência (mutáveis) - array, object, function,  passados por referência) */}

let nome = 'Sergio';
nome[0] = 'R'
console.log(nome[0], nome) 

let a = 'A';
let b = a;
console.log(a, b) 

a = 'Outra coisa';
console.log(a, b)

let c  = [1,2,3];
let d = c;
console.log(c, d)

c.push(4)
console.log(c, d)

c.pop()
console.log(c, d)

const S = {
    nome: 'Sergio',
    sobrenome: 'Victor'
}

const Y = {...S}

S.nome = 'Yana'

console.log(S)
console.log(Y)