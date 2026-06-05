let city_name = document.getElementById('city')
let buton = document.getElementById('btn')
let icon_weather_img = document.getElementById('changeble_img')
let icon_weather_span = document.getElementById('weather_type')
let humma = document.getElementById('huma_span')
let cloudd = document.getElementById('cloud_span')
let windd = document.getElementById('wind_span')
let temp_max_span = document.getElementById('max_span')
let temp_min_span = document.getElementById('min_span')
let location_span = document.getElementById('idk')

function weather() {
  let http = new XMLHttpRequest();
  let city = city_name.value
  
  http.onreadystatechange = function () {
    if (http.readyState === 4) {
      if (http.status === 200) {
        let data = JSON.parse(http.responseText);
        let city = data.location.name
        let country = data.location.country
        let huma = data.current.humidity
        let temp_max = data.current.temp_c
        let temp_min = Number(data.current.temp_c) - 4
        let cloud = data.current.cloud
        let wind = data.current.wind_kph
        let icon_weather = data.current.condition.icon

        icon_weather_img.src = icon_weather
        icon_weather_span.innerText = data.current.condition.text

        humma.innerText = `${huma}%`
        cloudd.innerText = `${cloud}%`
        windd.innerText = `${wind}km/h`
        temp_max_span.innerText = `${temp_max}°`
        temp_max_span.innerText = `${temp_min}°`

        location_span.innerText = `Weather Details about: ${city} in ${country}`

        console.log(city,cloud,wind)
        console.log(data)
      } 
    }
  };
  http.open(
    "GET",
    `https://api.weatherapi.com/v1/current.json?key=21ec1c25c740414eb4b172132260106&q=${city}&aqi=no`,
  );
  http.send();
}
buton.addEventListener('click', function(){
    weather()
})