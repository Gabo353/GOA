let body = document.body
let rules_btn = document.getElementById('rules_btn')
rules_btn.addEventListener('click', function () {

    let div = document.createElement('div')
    let button = document.createElement('div')
    let span = document.createElement('span')
    let img = document.createElement('img')

    div.id = 'rules_div'
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

    img.src = 'image-rules.svg'
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
let stick_1 = document.getElementById('stick_1')
let stick_2 = document.getElementById('stick_2')
let stick_3 = document.getElementById('stick_3')

let rock_src = rock.src
let paper_src = paper.src
let scisors_src = scisors.src

let notification = document.getElementById('noty')
let score = document.getElementById('score_num')
let score_num = 0
let me = document.getElementById('me')
let comp = document.getElementById('comp')

let computer_choice_str = ["rock", "paper", "scisors"]
let all_btn = [rock, paper, scisors]

let my_bid = ''
let computer_bid = computer_choice_str[computer_move]

function reset() {

    body.appendChild(rock)
    body.appendChild(paper)
    body.appendChild(scisors)
    body.appendChild(stick_1)
    body.appendChild(stick_2)
    body.appendChild(stick_3)

    me.innerText = ''
    comp.innerText = ''
    notification.innerText = ''

    let old_btn = document.getElementById('again')

    if (old_btn !== null) {
        old_btn.remove()
    }

    rock.src = rock_src
    paper.src = paper_src
    scisors.src = scisors_src
}

function game_simulation() {

    if (my_bid == computer_bid) { notification.innerHTML = 'draw' }
    else if (my_bid == 'paper' && computer_bid == 'scisors') { notification.innerText = 'You lose' }
    else if (my_bid == 'paper' && computer_bid == 'rock') { notification.innerText = 'You win'; score_num += 1; score.innerText = score_num }

    else if (my_bid == 'rock' && computer_bid == 'paper') { notification.innerText = ('You lose') }
    else if (my_bid == 'rock' && computer_bid == 'scisors') { notification.innerText = 'You win'; score_num += 1; score.innerText = score_num }
    else if (my_bid == 'scisors' && computer_bid == 'paper') { notification.innerText = ('You win'); score_num += 1; score.innerText = score_num }
    else if (my_bid == 'scisors' && computer_bid == 'rock') { notification.innerText = 'You lose' }

    console.log(my_bid, computer_bid)
}

paper.addEventListener('click', function () {

    my_bid = 'paper'
    me.innerText = 'Your Pick:'
    comp.innerText = 'Computers Pick:'

    if (my_bid === 'paper') {
        paper.src = paper_src
    }

    computer_move = Math.floor(Math.random() * 3)
    computer_bid = computer_choice_str[computer_move]

    if (computer_bid === 'rock') {
        scisors.src = rock_src
    } else if (computer_bid === 'paper') {
        scisors.src = paper_src
    } else if (computer_bid === 'scisors') {
        scisors.src = scisors_src
    }

    rock.remove()
    stick_1.remove()
    stick_2.remove()
    stick_3.remove()

    game_simulation()

    let play_btn = document.createElement('button')
    play_btn.id = 'again'
    play_btn.innerText = 'PLAY AGAIN'


    if (notification.innerText === 'You lose') {
        play_btn.style.color = 'red'
    } else {
        play_btn.style.color = 'green'
    }

    play_btn.addEventListener('click', function () {
        reset()
    })

    document.body.appendChild(play_btn)
})

rock.addEventListener('click', function () {

    my_bid = 'rock'
    me.innerText = 'Your Pick:'
    comp.innerText = 'Computers Pick:'

    if (my_bid === 'rock') {
        paper.src = rock_src
    }

    computer_move = Math.floor(Math.random() * 3)
    computer_bid = computer_choice_str[computer_move]

    if (computer_bid === 'rock') {
        scisors.src = rock_src
    } else if (computer_bid === 'paper') {
        scisors.src = paper_src
    } else if (computer_bid === 'scisors') {
        scisors.src = scisors_src
    }

    rock.remove()
    stick_1.remove()
    stick_2.remove()
    stick_3.remove()

    game_simulation()

    let play_btn = document.createElement('button')
    play_btn.id = 'again'
    play_btn.innerText = 'PLAY AGAIN'

    if (notification.innerText === 'You lose') {
        play_btn.style.color = 'red'
    } else {
        play_btn.style.color = 'green'
    }

    play_btn.addEventListener('click', function () {

        reset()

    })

    document.body.appendChild(play_btn)

})

scisors.addEventListener('click', function () {

    my_bid = 'scisors'
    me.innerText = 'Your Pick:'
    comp.innerText = 'Computers Pick:'

    if (my_bid === 'scisors') {
        paper.src = scisors_src
    }

    computer_move = Math.floor(Math.random() * 3)
    computer_bid = computer_choice_str[computer_move]

    if (computer_bid === 'rock') {
        scisors.src = rock_src
    } else if (computer_bid === 'paper') {
        scisors.src = paper_src
    } else if (computer_bid === 'scisors') {
        scisors.src = scisors_src
    }

    rock.remove()
    stick_1.remove()
    stick_2.remove()
    stick_3.remove()

    game_simulation()

    let play_btn = document.createElement('button')
    play_btn.id = 'again'
    play_btn.innerText = 'PLAY AGAIN'

    if (notification.innerText === 'You lose') {
        play_btn.style.color = 'red'
    } else {
        play_btn.style.color = 'green'
    }

    play_btn.addEventListener('click', function () {

        reset()

    })

    document.body.appendChild(play_btn)
})