function analizarTexto(texto)
{
    texto = texto.toLowerCase();
    const caracteres = texto.length;
    let cantPalabras = 0
    let vocales = 0
    let consonantes =0
    for (let i = 0; i < texto.length; i++)
    {
        if(texto[i] == "a" || texto[i] == "e"|| texto[i] == "i" || texto[i] == "o" || texto[i] == "u"){
            vocales++
        }

        else if(texto[i] == " "){
            cantPalabras++
        }   
        else{
            consonantes++
        }
    }
}