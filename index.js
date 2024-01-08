

function changeInfo(event){
    event.preventDefault();
    let searchElement = document.querySelector("#input-form-search");
    let cityInfo = document.querySelector("#city")
    cityInfo.innerHTML = searchElement.value
    console.log(searchElement.value)

}

let submitElement = document.querySelector("#input-form");
submitElement.addEventListener("submit", changeInfo);
