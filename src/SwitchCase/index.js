function getDiaSemanaTexto(diaSemana){
    let diaSemanaTexto;

    switch (diaSemana){
        case 0:
            diaSemanaTexto = 'Domingo'
            return diaSemanaTexto
        case 1:
                diaSemanaTexto = 'Segunda'
                return diaSemanaTexto
        case 2:
            diaSemanaTexto = 'Terça'
            return diaSemanaTexto
        case 3:
            diaSemanaTexto = 'Quarta'
            return diaSemanaTexto
        case 4:
            diaSemanaTexto = 'Quinta'
            return diaSemanaTexto
        case 5:
            diaSemanaTexto = 'Sexta'
            return diaSemanaTexto
        case 6:
            diaSemanaTexto = 'Sábado'
            return diaSemanaTexto
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto
    }  
}


const data = new Date('2020-04-23');
const diaSemana = data.getDay();
const diaSemanaTexto = getDiaSemanaTexto(diaSemana)




console.log(diaSemana, diaSemanaTexto)

if(diaSemana === 0){
    diaSemanaTexto = 'Domingo'
}if(diaSemana === 1){
    diaSemanaTexto = 'Segunda'
}if(diaSemana === 2){
    diaSemanaTexto = 'Terça'
}if(diaSemana === 3){
    diaSemanaTexto = 'Quarta'
}if(diaSemana === 4){
    diaSemanaTexto = 'Quinta'
}if(diaSemana === 5){
    diaSemanaTexto = 'Sexta'
}if(diaSemana === 6){
    diaSemanaTexto = 'Sábado'
}else {
    diaSemanaTexto = '' 
}

