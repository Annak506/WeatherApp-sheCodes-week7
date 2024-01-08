function showWeather(response){
    let temp = response.data.temperature.current
    let tempElement = document.querySelector("#current-temperature");
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windSpeedElement = document.querySelector("#wind-speed");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);

    tempElement.innerHTML = Math.round(temp);
    cityElement.innerHTML = response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
    humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
    windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
    timeElement.innerHTML = formatDate(date);
}

function formatDate(date){
   
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = ['Sunday', 'Monday', 'Tuedsay', 'Wednedsay', 'Thursday',
'Friday', 'Saturday']
 let day = days[date.getDay()];

 if (minutes < 10){
    minutes = `0${minutes}`
 }

    return `${day} ${hours}:${minutes}`
}
function searchCity(city){
    let apiKey = "2off2634b2833t319ae9fcf5abff3024";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}` 
    axios.get(apiUrl).then(showWeather)
}

function changeInfo(event){
    event.preventDefault();
    let searchElement = document.querySelector("#input-form-search");
    let cityInfo = document.querySelector("#city")
    cityInfo.innerHTML = searchElement.value
    
    searchCity(searchElement.value);
}

let submitElement = document.querySelector("#input-form");
submitElement.addEventListener("submit", changeInfo);

searchCity("Paris");