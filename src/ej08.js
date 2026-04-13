function analizarTexto(texto) {
    let textoL = texto.toLowerCase();
    const caracteres = texto.length;
    let cantPalabras = 1
    let vocales = 0
    let consonantes = 0
    for (let i = 0; i < textoL.length; i++) {
        if (textoL[i] == "a" || textoL[i] == "e" || textoL[i] == "i" || textoL[i] == "o" || textoL[i] == "u") {
            vocales++
        }

        else if (textoL[i] == " ") {
            cantPalabras++
        }
        else {
            consonantes++
        }
    }

    console.log(texto);
    console.log("Caracteres: " + caracteres);
    console.log("Cantidad de palabras: " + cantPalabras);
    console.log("Cant de vocales: " + vocales);
    console.log("Cant de consonantes: " + consonantes);
}

analizarTexto("Que buen trabajo hizo urito");