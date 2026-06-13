let city_name = document.getElementById("city");
let buton = document.getElementById("btn");
let icon_weather_img = document.getElementById("changeble_img");
let icon_weather_span = document.getElementById("weather_type");
let humma = document.getElementById("huma_span");
let cloudd = document.getElementById("cloud_span");
let windd = document.getElementById("wind_span");
let temp_max_span = document.getElementById("max_span");
let temp_min_span = document.getElementById("min_span");
let location_span = document.getElementById("idk");

let left_city_name = document.getElementById("name_of_city");
let left_temp_c = document.getElementById("short_c");
let left_weather_icon = document.getElementById("bigger_icon");

let time_1 = document.getElementById("time");
let time_2 = document.getElementById("time_2");

function weather() {
  let http = new XMLHttpRequest();
  let city = city_name.value;

  http.onreadystatechange = function () {
    if (http.readyState === 4) {
      if (http.status == 400) {
        city_name.innerHTML = "Not Found";
        city_name.style.color = "red";
      }
      else if (http.status === 200) {
        let data = JSON.parse(http.responseText);
        let city = data.location.name;
        let country = data.location.country;
        let huma = data.current.humidity;
        let temp_max = data.current.temp_c;
        let temp_min = data.current.temp_f;
        let cloud = data.current.cloud;
        let wind = data.current.wind_kph;
        let icon_weather = data.current.condition.icon;

        let time_hr = data.current.last_updated;
        city_name.style.color = 'grey'

        icon_weather_img.src = icon_weather;
        left_weather_icon.src = icon_weather;
        icon_weather_span.innerText = data.current.condition.text;

        humma.innerText = `${huma}%`;
        cloudd.innerText = `${cloud}%`;
        windd.innerText = `${wind}km/h`;
        temp_max_span.innerText = `${temp_max}°`;
        temp_min_span.innerText = `${temp_min}°`;

        location_span.innerText = `Weather Details about: ${city} in ${country}`;
        left_city_name.innerText = city;
        left_temp_c.innerText = `${temp_max}°`;

        let arr_for_time = [...time_hr];
        let hr = arr_for_time.splice(11, arr_for_time.length);
        time_1.innerText = `${hr.join("")} - Monday, `;

        let date_year = arr_for_time.splice(2, 2);
        let year = date_year.join("");

        let date_day = arr_for_time.splice(6, 6);
        let exact_date_day = date_day.pop();
        let day = date_day.join("");
        if (day[0] == "0") {
          day = day[1];
        }

        let date_month = arr_for_time.splice(3, 4);
        let exact_date_month = date_month.pop();
        let month = date_month.join("");

        switch (month) {
          case "01":
            month = "Jan";
            break;
          case "02":
            month = "Feb";
            break;
          case "03":
            month = "Mar";
            break;
          case "04":
            month = "Apr";
            break;
          case "05":
            month = "May";
            break;
          case "06":
            month = "June";
            break;
          case "07":
            month = "July";
            break;
          case "08":
            month = "Aug";
            break;
          case "09":
            month = "Sep";
            break;
          case "10":
            month = "Oct";
            break;
          case "11":
            month = "Nov";
            break;
          case "12":
            month = "Dec";
            break;
          default:
        }

        let day_of_week = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        let today = new Date().getDay();

        time_1.innerText = `${hr.join("")} - ${day_of_week[today]}, ${day} ${month} '${year}`;

        console.log(data);
        let weather = data.current.condition.text;
        let check_weather = weather.toLowerCase();
        if (check_weather.includes("cloudy")) {
          document.body.style.backgroundImage = "url(./Img/cludy_bg.jfif)";
        } else if (check_weather.includes("sunny")) {
          document.body.style.backgroundImage = "url(./Img/sunny_bg.jpg)";
        } else if (check_weather.includes("thunder")) {
          document.body.style.backgroundImage = "url(./Img/thunder.avif)";
        } else if (check_weather.includes("rain")) {
          document.body.style.backgroundImage = "url(./Img/rain_bg.avif)";
        } else if (check_weather.includes("clear")) {
          document.body.style.backgroundImage = "url(./Img/clear.jpg)";
        }
      }
    }
  };
  http.open(
    "GET",
    `https://api.weatherapi.com/v1/current.json?key=21ec1c25c740414eb4b172132260106&q=${city}&aqi=no`,
  );
  http.send();
}
buton.addEventListener("click", function () {
  weather();
});
city_name.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    weather();
  }
});
