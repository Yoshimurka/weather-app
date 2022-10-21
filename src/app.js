function displayTemperature (response) {
    let cityElement = document.querySelector("#city");
    let temperatureElement = document.querySelector("#temperature");
    let descriptionElement= document.querySelector ("#description");
    let humidityElement= document.querySelector ("#humidity");
    let windElement= document.querySelector ("#wind");

    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML= response.data.name;
    descriptionElement.innerHTML = response.data.weather[0].description;
    cityElement.innerHTML= response.data.name;
    humidityElement.innerHTML= response.data.main.humidity;
    windElement.innerHTML= Math.round(response.data.wind.speed);

}


let apiKey = "4814fb756a268f3ded7d52de5dd98133";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);