const tiempoTotal = 10
const timepoIntervalo = 1;
let i;

function contaTiempo(i) {
    setInterval(() => {
        i++;
        if (i < 10) {
            console.log(i);
            contaTiempo(i);
        }
    }, timepoIntervalo * 1000)
}

function contador() {
    i = 0;
    contaTiempo(i);
    setTimeout(() => {
        console.log("Fin del contador")
    }, tiempoTotal * 1000)

}
// contador() --> con recursión(hay que ver cómo hacer para que funcione de esta manera)
function contador2() {
    i = 0;
    setTimeout(() => {
        console.log("Fin del contador")
    }, 10100)

    if (i < 10) {
        let intervalo = setInterval(() => {
            i++;
            console.log(i);

            if (i == 10) {
                clearInterval(intervalo)
            }
        }, 1000)

    }
}
contador2()