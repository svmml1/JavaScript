

try {
    console.log(oioi)
} catch (error) {
    console.log('Errado!')
}

function soma(x, y) {
    if (
        typeof x !== 'number' || 
        typeof y !== 'number'
        ){
        throw ('X e Y, precisam ser números.')
    }
    return x + y
}

try {
    console.log(soma(1, 2))
    console.log(soma('1', 2))    
} catch (error) {
    console.log('error')
}


try {
    console.log(a)
    console.log('abri um arquivo')
    console.log('manipulou o arquivo e gerou erro')
    console.log('fechei o arquivo')
} catch (error) {
    console.log('tratando o erro')
}finally{
    console.log('Eu sempre sou executado!')
}

function retornaHora(data) {
    if(data && !(data  instanceof Date)){
       throw new TypeError('Esperando error')
    }
    if(!data){
        data = new Date()
    }
    return data.toLocaleTimeString('pt-BR',{

    })
}

const hora = retornaHora()
console.log(hora)


