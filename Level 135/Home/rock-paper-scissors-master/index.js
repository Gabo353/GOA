let body = document.body

let rules_btn = document.getElementById('rules_btn')

rules_btn.addEventListener('click', function () {

    let div = document.createElement('div')
    let button = document.createElement('div')
    let span = document.createElement('span')
    let img = document.createElement('img')
    
    div.style.height = '450px'
    div.style.width = '450px'
    div.style.backgroundColor = 'white'
    div.style.position = 'absolute'
    div.style.left = '36%'
    div.style.borderRadius = '8px'

    button.innerText = 'close'
    button.style.backgroundColor = 'white'
    button.style.width = '50px'
    button.style.border = '1px solid white'
    button.style.position = 'relative'
    button.style.left = '85%'
    button.style.top = '9%'
    button.style.color = 'grey'
    button.id = 'close_btn'

    span.innerText = 'RULES'
    span.style.fontSize = '30px'
    span.style.fontWeight = '700'
    span.style.position = 'absolute'
    span.style.left = '7%'
    span.style.top = '6%'

    img.src = './image-rules.svg'
    img.style.width = "50px"
    img.style.position = "absolute"
    img.style.top = "50%"
    img.style.left = "50%"

    div.appendChild(img)
    div.appendChild(span)
    div.appendChild(button)
    body.appendChild(div)
    close_btn.addEventListener('click', function () {

        div.remove()

    })
})

//------------------------------Game-------------------------------------

let computer_move = Math.floor(Math.random() * 3)
let paper = document.getElementById('choose_paper')
let rock = document.getElementById('choose_rock')
let scisors = document.getElementById('choose_sci')

let computer_choice = [rock,paper,scisors]

