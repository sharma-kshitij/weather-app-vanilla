const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "2aedd83acbmsh1d1192c9e94ec54p15cc63jsn8d496cdda2b1",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com"
  }
};

const getweather = (city) => {
  cityName.innerHTML = city
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      humid.innerHTML = response.humidity
      temp2.innerHTML = response.temp
      temp.innerHTML = response.temp
      feels_like.innerHTML = response.feels_like
      humidity.innerHTML = response.humidity
      min_temp.innerHTML = response.min_temp
      max_temp.innerHTML = response.max_temp
      wind_speed2.innerHTML = response.wind_speed
      wind_speed.innerHTML = response.wind_speed
      wind_degrees.innerHTML = response.wind_degrees
      sunrise.innerHTML = response.sunrise
      sunset.innerHTML = response.sunset
    })
    .catch(err => console.error(err));
}


submit.addEventListener("click", (e) => {
  e.preventDefault()
  getweather(city.value)
})
getweather("Delhi")

const cities = ["Kanpur", "Lucknow", "Delhi"]


cities.map((city) => {
  document.getElementById(city).innerHTML = city

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  ).then(
    response => response.json()
  ).then(
    response => {

      document.getElementById(`${city}Feels`).innerHTML = response.feels_like
      document.getElementById(`${city}Humidity`).innerHTML = response.humidity
      document.getElementById(`${city}Max_temp`).innerHTML = response.max_temp
      document.getElementById(`${city}Min_temp`).innerHTML = response.min_temp
      document.getElementById(`${city}Sunrise`).innerHTML = response.sunrise
      document.getElementById(`${city}Sunset`).innerHTML = response.sunset
      document.getElementById(`${city}Temp`).innerHTML = response.temp

      document.getElementById(`${city}Wind_speed`).innerHTML = response.wind_speed
      document.getElementById(`${city}Wind_degrees`).innerHTML = response.wind_degrees
    }
  )
  return
})