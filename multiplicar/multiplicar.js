const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('====================='.green);
    console.log(`tabla de ${base}===========`.green);
    console.log('====================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${base * i}\n`);
    }
}

crearArchivo = async(base, limite) => {

    if (!Number(base)) {
        throw new Error(`El valor introducido ${ base } no es un número`);
        return;
    }
    let data = '';

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base * i}\n`;
    }


    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) throw new Error(err);

    });
    return `tabla-${base}.txt`
}


module.exports = {
    crearArchivo,
    listarTabla
}