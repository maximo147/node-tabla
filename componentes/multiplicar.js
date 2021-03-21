const fs = require('fs');
require('colors')

const crearArchivo = async (base = 9, valor = false, hasta) => {
    try {
        let salida = '', consola = ''
        for (var i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`
        }

        if (valor) {
            console.log('======================'.red)
            console.log(`     Tabla del ${base}`)
            console.log('======================'.red)
            console.log(consola)
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)

        return (`tabla-${base}.txt`.rainbow)
    } catch (err) {
        throw err
    }

}


module.exports = {
    crearArchivo
}
