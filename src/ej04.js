process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"; //esto lo hizo chat porque por alguna razon se bloqueaba la conexion al api (o algo asi)
import axios from 'axios';

function obtenerPais(nombrePais) {
    fetch(`https://www.apicountries.com/name/${nombrePais}`)
        .then(response => response.json())
        .then(data => {
            let pais = data[0];

            console.log("País: " + pais.name);
            console.log("Capital: " + pais.capital);
            console.log("Región: " + pais.region);
            console.log("Población: " + pais.population);
        });
}

obtenerPais("Argentina");