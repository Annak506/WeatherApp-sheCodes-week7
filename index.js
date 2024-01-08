function showWeather(response){
    let temp = response.data.temperature.current
    let tempElement = document.querySelector("#current-temperature");
    let cityElement = document.querySelector("#city");
    tempElement.innerHTML = Math.round(temp);
    cityElement.innerHTML = response.data.city;
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