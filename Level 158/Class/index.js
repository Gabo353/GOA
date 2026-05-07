function ClassWork1() {
  let acc = [
    {
      name: "name_1",
      surname: "surname_1",
      password: "1",
    },
    {
      name: "name_2",
      surname: "surname_2",
      password: "2",
    },
    {
      name: "name_3",
      surname: "surname_3",
      password: "3",
    },
  ];

  let date_Str = JSON.stringify(acc);
  localStorage.setItem("accs", date_Str);
  console.log(JSON.parse(date_Str));
}

function ClassWork2() {
  let acc = [
    {
      name: "name_1",
      surname: "surname_1",
      password: "1",
    },
    {
      name: "name_2",
      surname: "surname_2",
      password: "2",
    },
    {
      name: "name_3",
      surname: "surname_3",
      password: "3",
    },
  ];

  let date_Str = JSON.stringify(acc);
  console.log(date_Str);
  console.log(JSON.parse(date_Str));
}

let accs = JSON.parse(localStorage.getItem("Accs") || []);

function Create_acc(user_name, user_mail, user_password) {
  this.user_name = user_name;
  this.user_mail = user_mail;
  this.user_password = user_password;
}

const input_name = document.getElementById("name");
const input_mail = document.getElementById("mail");
const input_password = document.getElementById("password");
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  name = e.target.name.value;
  mail = e.target.mail.value;
  password = e.target.password.value;

  newAcc = new Create_acc(name, mail, password);
  accs.push(newAcc);
  localStorage.setItem("Accs", JSON.stringify(accs));
});

const dis_btn = document.getElementById("dis");
const p = document.getElementById("p");

dis_btn.addEventListener("click", function () {
  let date = JSON.parse(localStorage.getItem("Accs"));
  for (each of date){
    p.innerHTML += `<li>name : ${each.user_name} / E-mail : ${each.user_mail}</li>`
  }    
});
