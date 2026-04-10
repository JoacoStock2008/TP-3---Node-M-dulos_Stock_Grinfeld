import fs from 'fs'

function LeerArchivo() {
    return fs.readFileSync("C:/Users/devandroid/TP-3---Node-M-dulos_Stock_Grinfeld/productos.json", "utf-8");
}

function ConvertirArchivo() {
    const contenidoArchivo = LeerArchivo();
    let productos = JSON.parse(contenidoArchivo);
    let contenidoCsv = "nombre,precio\n";
    for (let i = 0; i < productos.length; i++) {
        contenidoCsv += `${productos[i].nombre},${productos[i].precio}\n`;
    }
    fs.writeFileSync('productos.csv', contenidoCsv);
    console.log("Archivo CSV generado correctamente");
}

ConvertirArchivo();