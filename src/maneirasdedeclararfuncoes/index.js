function falaOi() {
    console.log('Oie')
}
falaOi()

const souUmDado = function(){
    console.log('Sou um dado')
}

function executaFuncao(funcao) {
    funcao()
}
executaFuncao(souUmDado)

const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow()