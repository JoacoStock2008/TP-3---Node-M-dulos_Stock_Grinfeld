import fs from 'fs'

const ARCHIVO_ENTRADA = 'C:/Users/48795975/TP-3---Node-M-dulos_Stock_Grinfeld/productos.json';

const leerArchivo = () => {
    const contenidoArchivo = fs.readFileSync(ARCHIVO_ENTRADA, 'utf-8')
    console.log(contenidoArchivo)
}

export { leerArchivo }