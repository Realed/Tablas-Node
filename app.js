const crearArchivo = require('./multiplicar/multiplicar')
const listarArchivo = require('./multiplicar/listar');
const colors = require('colors')
const argv = require('./config/yargs').argv

let comando = argv._[0]
switch (comando) {
    case 'listar':
        listarArchivo(argv.base, argv.limite).catch(error =>{
            console.log(error);
        })
        break;

    case 'crear':
        if(argv.base !== true && argv.base !== false){
            crearArchivo(argv.base)
                .then( archivo => console.log(`\n> Archivo creado: ${archivo}\n`.bold.green) )
                .catch(error => console.log(error))
        } else{
            console.log('\n[ERROR] - Has de intruducir un valor en --base\n'.bold.underline.red);
        }
        break;

    default:
        console.log('\n[ERROR] - Comando desconocido\n'.bold.underline.red);
        break;
}