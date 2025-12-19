let body = document.body
let btn_1 = document.getElementById('dark_mode')
let btn_2 = document.getElementById('randomer')
let changed = document.getElementById('added')
let input = document.getElementById('opp')
let error = document.getElementById('err')
let header = document.getElementsByTagName('header')
let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]


let color = '#'
for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * hex.length)]
}

changed.textContent = color
body.style.backgroundColor = color
btn_2.style.backgroundColor = color
changed.style.color = color


btn_2.addEventListener('click', function () {

    if (input.value === '') {

        let color = "#"
        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * hex.length)]

        }

        changed.textContent = color
        body.style.backgroundColor = color
        btn_2.style.backgroundColor = color
        changed.style.color = color
        error.textContent = ' '
        error.style.backgroundColor = color
    }

    else if (input.value !== '' && input.value.length == 7 && input.value[0] === '#') {

        let checking = true

        for (let i = 1; i < 7; i++) {
            if (!hex.includes(input.value[i].toUpperCase())) {
                checking = false
            }
        }

        if (checking) {
            color = input.value
            changed.textContent = color
            body.style.backgroundColor = color
            btn_2.style.backgroundColor = color
            changed.style.color = color
            error.textContent = ' '
            error.style.backgroundColor = color
        } else {
            error.textContent = 'you need to use numbers from 0 to 9 or letters from A to F'
            error.style.backgroundColor = 'rgb(44, 44, 44)'
            error.style.color = 'white'
        }

    }
    else if (input.value.length != 6 || input.value[0] !== '#') {

        error.textContent = 'you need # and afterwards 6 symbols'
        error.style.backgroundColor = 'rgb(44, 44, 44)'
        error.style.color = 'white'
        error.style.padding = '10px'
        error.style.borderRadius = '10px'

    }



})

