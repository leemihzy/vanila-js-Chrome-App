const weather = document.querySelector('#weather span:first-child');;
const city = document.querySelector('#weather span:last-child');;

const API_KEY = "e74eec3bb6d35639807b1f7f6b6b8d83";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

  // url 응답 얻기(요청)
  fetch(url).then(response => response.json()).then(data => {
    city.innerText = data.name;
    weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  }) 
}

function onGeoError() {
  weather.innerText = "can't find you. No weather for you.";
  city.innerText = '';
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
