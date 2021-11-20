function saudacao (nome){
    return `Bom dia ${nome}!`
}

saudacao('Sergio');
saudacao('Yana');

const variavel = saudacao('Rayer!');
console.log(variavel);

function soma(x, y){
    const resultado = x+y
    return resultado
}

console.log(soma(2, 2));
console.log(soma(1, 2));
console.log(soma(21, 2));

function soma(x, y){
    const resultado = x+y
    return resultado
}

const resultado = soma(5, 10)
console.log(resultado)

function soma(x, y){
    const resultado3 = x+y
    return resultado3
}

const resultado3 = soma('Sergio', ' Victor')
console.log(resultado3)

function soma(x= 1, y=2){
    const resultado4 = x+y
    return resultado4
}
const resultado4 = soma(4, 2)
console.log(resultado4)

const raiz = function (n) {
    return n ** 0.5
}

console.log(raiz(9))
console.log(raiz(16))
console.log(raiz(25))


const raiz2 = (n) => {
    return n ** 0.5
}

console.log(raiz(3))
console.log(raiz(16))
console.log(raiz(90))

const raiz3 = n => n ** 0.5

console.log(raiz(3))
console.log(raiz(16))
console.log(raiz(60))