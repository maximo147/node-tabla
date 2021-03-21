const yargs = require('yargs')
                .options({
                    'b': {
                    alias: 'base',
                    type: 'number',
                    demandOption:  true,
                    describe: 'Es el numero de la multiplación'
                    },
                    'l': {
                        alias: 'listar',
                        type: 'boolean',
                        demandOption: false,
                        default: false,
                        describe: 'Muestra la tabla en consola'
                    },
                    'h': {
                        alias: 'hasta',
                        type: 'number',
                        demandOption: false,
                        default: 9,
                        describe: 'Establece hasta donde sera la tabla'
                    }
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                        throw 'La base debe ser numerica'
                    }else{
                        return true
                    }
                })
                .argv

module.exports = yargs