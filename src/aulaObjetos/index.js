let array = [ 1,2,3];
array.push(4);
array[0] = 'Sergio';
array = 'Yana';
console.log(array)


const nome01 = 'Sergio';
const sobrenome01 = 'Victor';
const idade01 = 25;
const nome02 = 'Yana';
const sobrenome02 = 'Larissa';
const idade02 = 25;

const pessoa1 = {
    nome: 'Sergio',
    sobrenome: 'Victor',
    idade: 25,
}
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)
console.log(pessoa1)

const pessoa2 = {
    nome: 'Yana',
    sobrenome: 'Calheiros',
    idade: 25,
}

console.log(pessoa2.nome)
console.log(pessoa2.sobrenome)
console.log(pessoa2.idade)
console.log(pessoa2)

console.log(pessoa1,pessoa2)

function criaPessoa(nome, sobrenome, idade){
    return {
        nome,
        sobrenome,
        idade
    }
}

const pessoa3 = criaPessoa('Sergio', 'lopes', 30 )
console.log(pessoa3)


const pessoa4 = {
    nome: 'Sergio',
    sobrenome: 'Victor',
    idade: 25,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi`)
    },
    incrementaIdade(){
        this.idade++
    }
}

pessoa4.fala()

const pessoa5 = {
    nome: 'Sergio',
    sobrenome: 'Victor',
    idade: 25,

    fala() {
        console.log(`minha idade atual é ${this.idade}`)
    },
    incrementaIdade(){
        this.idade++
    }
}

pessoa5.fala()
pessoa5.incrementaIdade()
pessoa5.fala()