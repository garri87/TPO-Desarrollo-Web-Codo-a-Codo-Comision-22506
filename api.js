const APIKEY = "296c45f58268f11f61c05793440065cf"
const UBICACION = {
    mendoza:[-32.89,-68.84],
    buenosAires:[-34.61,-58.37]
}
let provincia = 'mendoza'
const ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?lat=${UBICACION[provincia][0]}&lon=${UBICACION[provincia][1]}&appid=${APIKEY}`


async function getTiempoMeteorologico(url) {
    const peticion = await fetch (url)
        .then((tiempo) => tiempo.json())
        .catch((error) => console.log(error))
        console.log(peticion);
    const temperaturaHtml = document.getElementById("temperatura")
    temperaturaHtml.innerText = Math.round(peticion.main.temp -273)+"°C"
    const humedadHtml = document.getElementById("humedad")
    humedadHtml.innerText = peticion.main.humidity+"%"
    const iconoMeteorologico =  document.getElementById("iconoMeteorologico")
    iconoMeteorologico.src = `http://openweathermap.org/img/w/${peticion.weather[0].icon}.png`
    iconoMeteorologico.alt = peticion.weather[0].description
    const localidadHtml = document.getElementById("localidad")
    localidadHtml.innerText = peticion.name
}


getTiempoMeteorologico(ENDPOINT) 

function cambiarLocalidad() {
    if (provincia == "mendoza") {
        provincia = "buenosAires"
    } else {
        provincia = "mendoza"
    }
    const ENDPOINT = `https://api.openweathermap.org/data/2.5/weather?lat=${UBICACION[provincia][0]}&lon=${UBICACION[provincia][1]}&appid=${APIKEY}`

    getTiempoMeteorologico(ENDPOINT)
}









