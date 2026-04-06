import fs from 'fs'

function agregarProducto(nombre, precio) {
    let contenido = fs.readFileSync("productos.json", "utf-8");

    let productos = JSON.parse(contenido);

    let nuevoProducto = {
        nombre: nombre,
        precio: precio
    };

    productos.push(nuevoProducto);

    fs.writeFileSync("productos.json", JSON.stringify(productos));
if(productos.leght >0){
    console.log("Producto agregado correctamente");}

    else{
        console.log("El producto no se pudo agregar correctamente")
    }
}

agregarProducto("Monitor", 120000);