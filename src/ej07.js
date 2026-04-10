function mostrarFin(segundos){
    setTimeout(() => {
        console.log("Fin del contador");
    }, segundos*1000)
}
mostrarFin(10);

function incrementar(contador){
    contador++;
}
function mostrarContador(segundos){
    let contador = 1;
    const intervalo = setInterval(() => {
        console.log(contador);
        incrementar(contador);
        if(contador == 10) {clearInterval(intervalo); console.clear()}
    }, 1000)
}
mostrarContador(10);
mostrarFin(10);
//Seguir el ej7 y terminar el 8 y 9 HOY