const API_KEY = window.ENV_CONFIG.WEATHER_API_KEY;

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  const geoUrl = `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${API_KEY}`;

  fetch(weatherUrl)
    .then((response) => response.json())
    .then((data) => {
      //   const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");

      //   city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp.toFixed(1)} °C`;
    });

  fetch(geoUrl)
    .then((res) => res.json())
    .then((geoData) => {
      const cityName = geoData[0].name;
      const citySpan = document.querySelector("#weather span:first-child");
      citySpan.innerText = cityName;
    });
}

function onGeoError() {
  alert("Can't find you. No Weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
