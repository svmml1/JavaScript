
const tresHoras = 60 * 60 * 3 * 1000
const data = new Date(0 + tresHoras)

const data = new Date(2020, 3, 20, 14, 20, 20, 500)

console.log(data.toString());


const data = new Date('2020-10-21 20:20');
console.log('Dia', data.getDate())
console.log('Mês', data.getMonth()+ 1)
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Minuto', data.getMinutes())
console.log('Segundos', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia Semana', data.getDay())


console.log(data.toString());

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth());
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const dataBrasil = formataData(data)
console.log(dataBrasil)