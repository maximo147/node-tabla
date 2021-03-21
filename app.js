const {crearArchivo} = require('./componentes/multiplicar')
const yargs = require('./yargs/yargs')

console.clear()
// const base = 3


// const [, , h3 = 'base=2'] = process.argv
// const [,base = 2] = h3.split('=')

const valorListar = yargs.listar
crearArchivo(yargs.base, valorListar, yargs.h)
    .then(x => console.log(x, 'creado'))
    .catch(err => console.log(err))