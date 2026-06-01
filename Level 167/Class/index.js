let city_name = document.getElementById('city')
let buton = document.getElementById('btn')
function weather() {
  let http = new XMLHttpRequest();
  let http_for_flags = new XMLHttpRequest();
  let city = city_name.value
  
  http.onreadystatechange = function () {
    if (http.readyState === 4) {
      if (http.status === 200) {
        let data = JSON.parse(http.responseText);
        let data_2 = JSON.parse(http_for_flags.responseText)
        let img = document.createElement('img')

        console.log(http_for_flags)

        let div = document.querySelector('.search')
        let city = document.createElement("li");
        city.textContent = `City: ${data.location.name}`;
        let temp = document.createElement("li");
        temp.textContent = `Temperature: ${data.current.temp_c}°C`;
        let condition = document.createElement("li");
        condition.textContent = `Condition: ${data.current.condition.text}`;
        div.append(city, temp, condition,img);
      } else {
        let li = document.createElement('li')
        let div = document.querySelector('.search')
        li.innerText = "Request failed:" + http.status
        div.append(li)
      }
    }
  };
  http.open(
    "GET",
    `https://api.weatherapi.com/v1/current.json?key=21ec1c25c740414eb4b172132260106&q=${city}&aqi=no`,
  );
  http_for_flags.open('GET', `https://restcountries.com/v3.1/name/france`)
  http.send();
  http_for_flags.send()
}
buton.addEventListener('click', function(){
    weather()
})