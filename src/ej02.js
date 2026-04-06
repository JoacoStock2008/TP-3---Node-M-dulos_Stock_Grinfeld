import fs from 'fs'

function agregarProducto(nombre, precio) {
    let contenido = fs.readFileSync("C:/Users/48795975/TP-3---Node-M-dulos_Stock_Grinfeld/productos.json", "utf-8");
    console.log(contenido)
    let productos = JSON.parse(contenido);

    let nuevoProducto = {
        nombre: nombre,
        precio: precio
    };

    productos.push(nuevoProducto);

    console.log(productos)

    fs.writeFileSync("C:/Users/48795975/TP-3---Node-M-dulos_Stock_Grinfeld/productos.json", JSON.stringify(productos, null, 2));
    if (productos.length > 2) {
        console.log("Producto agregado correctamente");
    }

    else {
        console.log("El producto no se pudo agregar correctamente")
    }
}

agregarProducto("Monitor", 120000);