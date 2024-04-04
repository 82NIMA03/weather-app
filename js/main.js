const apiId = "&appid=8f848e860f36cd964e5a53a0ec597766";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

async function cheackedWeather(city) {
  const respons = await fetch(apiUrl + `&q=${city}` + apiId);
  if (respons.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await respons.json();
    const weatherIcon = document.querySelector(".weather-icon");
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + `°C`;
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + ` %`;
    document.querySelector(".wind").innerHTML = data.wind.speed + ` km/h`;
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    if (data.weather[0].main == "Clear") {
      weatherIcon.src = "./images/clear.png";
    } else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./images/clouds.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "./images/snow.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "./images/snow.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./images/mist.png";
    } else {
      weatherIcon.src = "./images/drizzle.png";
    }
  }
}
const searchInput = document.querySelector("input");
const searchBtn = document.querySelector("button");
searchInput.addEventListener("keypress", (event) => {
  if (event.code === "Enter") {
    cityName = searchInput.value;
    cheackedWeather(cityName);
    searchInput.value = "";
  }
});
searchBtn.addEventListener("click", () => {
  cityName = searchInput.value;
  cheackedWeather(cityName);
  searchInput.value = "";
});
