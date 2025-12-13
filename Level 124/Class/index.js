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


    if (input.value === '') {

        let color = "#"
        for (let i = 0; i < 6; i++) {
            color += hex[Math.floor(Math.random() * hex.length)]
        }

        changed.textContent = color
        body.style.backgroundColor = color
        btn_2.style.backgroundColor = color
        changed.style.color = color

    }
    else if (input.value.length != 6){

        error.textContent = 'you need # and after wards 6 symbols'

    }
    else {

        color = input.value
        changed.textContent = color
        body.style.backgroundColor = color
        btn_2.style.backgroundColor = color
        changed.style.color = color
    }   
})  

