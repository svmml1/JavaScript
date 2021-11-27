for (let i = 0; i <= 15; i ++){
    
    const par = i % 2 === 0 ? 'Par' : 'Ímpar'
    console.log(i, par)
}


const frutas = ['Maça', 'Pera', 'Uva']
for ( let index in frutas){
    console.log(frutas[index])
}

const pessoa = {
    nome: 'Yana',
    sobrenome: 'Calheiros',
    idade: 33
}

for (let i in pessoa){
    console.log(i)
}
