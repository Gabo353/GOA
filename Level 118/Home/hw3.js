//3)შექმენით HTML გვერდი ცარიელი <div> ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც გამოძახებისას შექმნის ახალ <p> ელემენტს ტექსტით "New paragraph" და დაამატებს მას <div>-ის შიგნით.

let div = document.getElementsByClassName('free')[0]

let new_p = document.createElement('p')

new_p.innerText = 'New paragraph'

div.appendChild(new_p)