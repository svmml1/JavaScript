

function falaOi(){
  return 'Oi';  
}

const vaiExecutar = 'Sergio'

console.log (vaiExecutar && falaOi())



const corUsuario1 = null
const corPadrao1 = corUsuario1 || 'Preto';

console.log(corPadrao1)


const corUsuario = 'Verde'
const corPadrao = corUsuario || 'Preto';

console.log(corPadrao)

const a = 0
const b = null
const c = 'false'
const d = false
const e = NaN

console.log( a || b || c || d || e)
