const api = {
    key: '8dfa1a22da59d4cbbfce76c4c1bb5599',
    url: `https://api.openweathermap.org/data/2.5/weather`
};

const tempCaba= document.getElementById("tempcaba");
const tiempoCaba= document.getElementById("tiempocaba");
const amplCaba= document.getElementById("amplcaba");
const tempPlata= document.getElementById("tempplata");
const tiempoPlata= document.getElementById("tiempoplata");
const amplPlata= document.getElementById("amplplata");
const tempCord= document.getElementById("tempcord");
const tiempoCord= document.getElementById("tiempocord");
const amplCord= document.getElementById("amplcord");
const tempRos= document.getElementById("tempros");
const tiempoRos= document.getElementById("tiemporos");
const amplRos= document.getElementById("amplros");
const tempTuc= document.getElementById("temptuc");
const tiempoTuc= document.getElementById("tiempotuc");
const amplTuc= document.getElementById("ampltuc");
const tempPar= document.getElementById("temppar");
const tiempoPar= document.getElementById("tiempopar");
const amplPar= document.getElementById("amplpar");
const fecha= document.getElementById("fecha");

const ciudades= ['Ciudad Autonoma de Buenos Aires','La Plata','Cordoba','Rosario','Tucuman','Parana'];

//arrow function que segun la ciudad carga los datos
const ciudad = (lugar, data) =>{
    switch (lugar) {
        case 'Ciudad Autonoma de Buenos Aires':
            tempCaba.innerHTML = `${toCelsius(data.main.temp)}c`;
            tiempoCaba.innerHTML = data.weather[0].description;
            amplCaba.innerHTML = `${toCelsius(data.main.temp_min)}c / ${toCelsius(data.main.temp_max)}c`;
            break;
        case 'La Plata':
            tempPlata.innerHTML = `${toCelsius(data.main.temp)}c`;
            tiempoPlata.innerHTML = data.weather[0].description;
            amplPlata.innerHTML = `${toCelsius(data.main.temp_min)}c / ${toCelsius(data.main.temp_max)}c`;
            break;
        case 'Cordoba':
            tempCord.innerHTML = `${toCelsius(data.main.temp)}c`;
            tiempoCord.innerHTML = data.weather[0].description;
            amplCord.innerHTML = `${toCelsius(data.main.temp_min)}c / ${toCelsius(data.main.temp_max)}c`;
            break;
        case 'Rosario':
            tempRos.innerHTML = `${toCelsius(data.main.temp)}c`;
            tiempoRos.innerHTML = data.weather[0].description;
            amplRos.innerHTML = `${toCelsius(data.main.temp_min)}c / ${toCelsius(data.main.temp_max)}c`;
            break;
        case 'Tucuman':
            tempTuc.innerHTML = `${toCelsius(data.main.temp)}c`;
            tiempoTuc.innerHTML = data.weather[0].description;
            amplTuc.innerHTML = `${toCelsius(data.main.temp_min)}c / ${toCelsius(data.main.temp_max)}c`;
            break;
        case 'Parana':
            tempPar.innerHTML = `${toCelsius(data.main.temp)}c`;
            tiempoPar.innerHTML = data.weather[0].description;
            amplPar.innerHTML = `${toCelsius(data.main.temp_min)}c / ${toCelsius(data.main.temp_max)}c`;
            break;
    
        default:
            break;
    }
    
};

//recorremos el array de las ciudades
for (const ciudadd of ciudades) {
    search(ciudadd);
    async function search(city) {
        try {
            //peticion
            const response = await fetch(`${api.url}?q=${city}&appid=${api.key}&lang=es`);
            const data = await response.json();
            fecha.innerHTML = (new Date()).toLocaleDateString();
            setTimeout(ciudad(city, data),10);
        } catch (err) {
            console.log(err);
            alert('Hubo un error');
        }
    }
}

function toCelsius(kelvin) {
    return Math.round(kelvin - 273.15);
}


