function getData() {
  let http = new XMLHttpRequest();
  http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
      let date = http.responseText;
      let parse_date = JSON.parse(date);
      for (let i = 0; i <= parse_date.length - 1; i++) {
        let accaunts = document.createElement("li");
        accaunts.innerHTML = JSON.stringify(parse_date[i].title)
        document.body.append(accaunts)
      }
    }
  };
  http.open("GET", "https://jsonplaceholder.typicode.com/todos");
  http.send();
}
getData();
