//6)შექმენით HTML გვერდი 3 <button> ელემენტით, თითოეული განსხვავებული id-ით (btn1, btn2, btn3).
//-----დაწერეთ JavaScript, რომელიც თითოეული ღილაკის დაჭერისას:
//-----შეცვლის <h2> ელემენტის ტექსტს "Button X clicked!" (X = 1,2,3)
//-----შეცვლის <h2> ფონს განსხვავებულ ფერად, რაც დამოკიდებულია დაჭერილ ღილაკზე.

let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')

function btn1func() {

    document.body.innerHTML += '<style>body{background-color: red;}</style>'
    console.log('button 1 pressed')

}
function btn2func() {

    document.body.innerHTML += '<style>body{background-color: blue;}</style>'
    console.log('button 2 pressed')
    
}
function btn3func() {

    document.body.innerHTML += '<style>body{background-color: yellow;}</style>'
    console.log('button 3 pressed')
    
}

btn1.addEventListener('click',btn1func)
btn2.addEventListener('click',btn2func)
btn3.addEventListener('click',btn3func)