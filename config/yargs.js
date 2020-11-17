const options = {
    base: {
        alias: 'b',
        demandOption: true,
        description: 'Numero base para los multiplos',
    },
    limite: {
        alias: 'l',
        default: 10,
        description: 'Numero limite para los multiplos',
    }
}

const argv = require('yargs')
        .command('listar', 'Imprime en la consola la tabla de multpilicar'.yellow.bold, options)
        .command('crear', 'Crear un archivo con la tabla de multiplos'.yellow.bold, options)
        .help()
        .argv;

module.exports = {
    argv
}
