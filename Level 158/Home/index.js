//1) ააწყოთ register და login გვერდები თავისი ფუნქციონალით კარგი დიზაინით და + localstorage

const input_name = document.getElementById("name")
const input_mail = document.getElementById("mail")
const form = document.getElementById("form")

function Saved_accs(name, email) {
  this.name = name
  this.email = email
}

let arr = JSON.parse(localStorage.getItem("accs")) || []

form.addEventListener("submit", function (e) {
  e.preventDefault()
  let info = new Saved_accs(input_name.value, input_mail.value)
  if (info.name == '' || info.email == '') {
    console.log('nah')
    return;
  }
  
  arr.push(info)
  localStorage.setItem("accs", JSON.stringify(arr))
  form.innerHTML = `<form> <p> Welcome, ${arr[arr.length - 1].name} </p></form>`
  form.style.color = "white"

  
})
