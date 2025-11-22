//1)შექმენით HTML გვერდი <p> ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც გამოძახებისას შეცვლის <p> ელემენტის ტექსტს და დააწერს "Hello, DOM!".

let p = document.getElementsByTagName('p')

p[0].innerHTML = "Hello, DOM!"