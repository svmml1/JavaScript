{/*

    Operadors lógicos 

    &&  e   => todas as expressões precisam ser verdadeiras para retornar verdadeiro
    || Ou 
    > maior que 
    >= maior que ou iual 
    < menor que
    <= menor ou iguak
    === igual estrito (valor e tipo)
    !== diferente estrito (valor e tipo)
 */}

 const Expressaofalse = true && true && true && false
console.log(Expressaofalse)

const Expressaotrue = true && true && true
console.log(Expressaotrue)

const ExpressaoOr = true || false

console.log(ExpressaoOr)


const usuario = 'Sergio'
const senha = '123456'

const vailogar = usuario === 'Sergio' && senha === '123456';
console.log(vailogar)

const num1 = 10;  //number
const num2 = 10;  //number
const comp = num1 !== !num2;

console.log(comp)



