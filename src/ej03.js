import dayjs from 'dayjs'

function mostrarDias(){
    const fechaCompleta = dayjs();
    let fechaActual = fechaCompleta.format('DD/MM/YYYY') //la función dayjs de la librería trae  la información de la hora actual --> se puede formatear
    console.log(`La fecha del día de hoy es: " + ${fechaActual}`)
    let horaActual = fechaCompleta.format('HH:mm:ss')
    console.log(`La hora actual es: ${horaActual}`)
    console.log(`La fecha completa y la hora actual es: ${fechaCompleta.format('YYYY-MM-DD/HH:mm:ss')}`)
}
mostrarDias();