import fs from 'fs'

function buscarProducto(nombre) {
    let contenido = fs.readFileSync('productos.json', "utf-8")
    let productos = JSON.parse(contenido)
    let productoSolicitado = elProductoExiste(productos, nombre)
    if (productoSolicitado != undefined)
        console.log(`Producto encontrado\nNombre: ${productoSolicitado.nombre}\nPrecio: ${productoSolicitado.precio}`)
    else console.log("Producto no encontrado")
}
const elProductoExiste = (productos, nombre) => productos.find((producto) => producto.nombre == nombre)

buscarProducto("Mouse")