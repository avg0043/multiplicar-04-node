const argv = require('./config/yargs').argv;
const { crearArchivo, listarTable } = require('./multiplicar/multiplicar');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTable(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(archivo)))
            .catch(error => console.log(error));
        break;
    default:
        console.log('Comando no reconocido');
}