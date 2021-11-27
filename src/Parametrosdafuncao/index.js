function funcao(a, b, c) {
    let total = 0;
    for (let argumento of arguments){
        total += argumento;
    }
    console.log(total, a, b, c)
}

funcao('foi', 1,2,3,4,5,6,7,8,9,20,30,40,50)

function funcao2(a, b, c, d, e, f) {
    console.log(a,b,c,d,e,f)
}

funcao2(1,2,3,4,5,6,7)

function funcao3({nome, sobrenome, idade}) {
    console.log(nome, sobrenome, idade)
}
funcao3({ nome: 'Sergio', sobrenome: 'Victor', idade: 33})