let numbers_1 = document.getElementById('num_1')
let numbers_2 = document.getElementById('num_2')
let numbers_3 = document.getElementById('num_3')
let numbers_4 = document.getElementById('num_4')
let numbers_5 = document.getElementById('num_5')
let numbers_6 = document.getElementById('num_6')
let numbers_7 = document.getElementById('num_7')
let numbers_8 = document.getElementById('num_8')
let numbers_9 = document.getElementById('num_9')
let numbers_0 = document.getElementById('num_0')

let resete_btn = document.getElementById('resete')
let equal_btn = document.getElementById('equal')
let delete_btn = document.getElementById('delete')

let input_num = document.getElementById('input_span')
let key_pad = document.getElementById('main_key_pad')
let input_screen = document.getElementById('input')
let save = 0

for (let i = 0; i <= 1; i += 3) {

    numbers_0.addEventListener('click', function () {

        input_num.innerText += '0'

    })

    numbers_1.addEventListener('click', function () {

        input_num.innerText += '1'

    })

    numbers_2.addEventListener('click', function () {

        input_num.innerText += '2'

    })

    numbers_3.addEventListener('click', function () {

        input_num.innerText += '3'

    })

    numbers_4.addEventListener('click', function () {

        input_num.innerText += '4'

    })

    numbers_5.addEventListener('click', function () {

        input_num.innerText += '5'

    })

    numbers_6.addEventListener('click', function () {

        input_num.innerText += '6'

    })

    numbers_7.addEventListener('click', function () {

        input_num.innerText += '7'

    })

    numbers_8.addEventListener('click', function () {

        input_num.innerText += '8'

    })

    numbers_9.addEventListener('click', function () {

        input_num.innerText += '9'

    })
    
}

let switcher = document.getElementById('mini_ball')
let switcher_bg = document.getElementById('btn')
let count = 1
switcher.addEventListener('click', function(){

    count++
    if (count == 2){

        switcher.style.position = 'relative'
        switcher.style.left = '39%'
        document.body.style.backgroundColor = 'hsl(0, 0%, 90%)'
        key_pad.style.backgroundColor = 'hsl(0, 5%, 81%)'
        input_screen.style.backgroundColor = 'hsl(0, 0%, 93%)'
        input_screen.style.color = 'hsl(60, 10%, 19%)'
        btn.style.backgroundColor = 'hsl(0, 5%, 81%)'
        delete_btn.style.color = 'white'


    }
    else if (count == 3){

        switcher.style.position = 'relative'
        switcher.style.left = '70%'
        count = 0

    }
    else {

        switcher.style.position = 'relative'
        switcher.style.left = '5%'
        count = 1

    }
})