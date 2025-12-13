let body = document.body
let btn_1 = document.getElementById('mood')
let btn_2 = document.getElementById('randomer')
let changed = document.getElementById('added')
let input = document.getElementById('opp')
let error = document.getElementById('err')
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
    for (let i in hex) {
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

            color = input.value
            changed.textContent = color
            body.style.backgroundColor = color
            btn_2.style.backgroundColor = color
            changed.style.color = color
            error.textContent = ' '
            error.style.backgroundColor = color

        }
        else if (input.value.length != 6 || input.value[0] !== '#') {

            error.textContent = 'you need # and afterwards 6 symbols'
            error.style.backgroundColor = 'rgb(44, 44, 44)'
            error.style.color = 'white'
            error.style.padding = '10px'
            error.style.borderRadius = '10px'

        }


        else if (hex.includes(input.value[i])) {

            
            color = input.value
            changed.textContent = color
            body.style.backgroundColor = color
            btn_2.style.backgroundColor = color
            changed.style.color = color
            error.textContent = ' '
            error.style.backgroundColor = color
        }
        else if (!hex.includes(input.value[i])) {

            error.textContent = 'you need to use "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"'
            error.style.backgroundColor = 'rgb(44, 44, 44)'
            error.style.color = 'white'
            error.style.padding = '10px'
            error.style.borderRadius = '10px'

        }
    }
})

