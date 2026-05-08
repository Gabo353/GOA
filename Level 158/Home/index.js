const input_name = document.getElementById("name")
const input_mail = document.getElementById("mail")
const form = document.getElementById("form")
let arr = JSON.parse(localStorage.getItem("accs")) || []

function Saved_accs(name, email) {
  this.name = name
  this.email = email
}

function sign_up_phase() {
  let info = new Saved_accs(input_name.value, input_mail.value)
  if (info.name == "" || info.email == "") {
    return
  }
  arr.push(info)
  input_mail.value = ''
  input_name.value = ''
  localStorage.setItem("accs", JSON.stringify(arr))
  form.innerHTML = `<form> <p> Welcome, ${arr[arr.length - 1].name} <br> <br> </p></form>`
  form.style.color = "white"
}


form.addEventListener("submit", function (e) {
  e.preventDefault()
  sign_up_phase()
})
