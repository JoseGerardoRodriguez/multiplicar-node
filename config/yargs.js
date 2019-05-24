const opt = {

    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }

}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar',
        opt
    )
    .command('crear', 'Creaa un archivo txt con la tabla de multiplicar en referencia a la base y limite',
        opt
    )
    .help()
    .argv;


module.exports = {
    argv
}