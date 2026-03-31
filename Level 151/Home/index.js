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
let plus_btn = document.getElementById('plus')
let minus_btn = document.getElementById('minus')
let multi_btn = document.getElementById('multi')
let divide_btn = document.getElementById('divide')

let input_num = document.getElementById('input_span')


function keyPad() {

    for (let i = 0; i <= 1; i += 3) {
        numbers_0.addEventListener('click', function () {
            input_num.innerText += '0'
            operator = ' '
        })
        numbers_1.addEventListener('click', function () {
            input_num.innerText += '1'
            operator = ' '
        })
        numbers_2.addEventListener('click', function () {
            input_num.innerText += '2'
            operator = ' '
        })

        numbers_3.addEventListener('click', function () {
            input_num.innerText += '3'
            operator = ' '
        })

        numbers_4.addEventListener('click', function () {
            input_num.innerText += '4'
            operator = ' '
        })

        numbers_5.addEventListener('click', function () {
            input_num.innerText += '5'
            operator = ' '
        })

        numbers_6.addEventListener('click', function () {
            input_num.innerText += '6'
            operator = ' '
        })

        numbers_7.addEventListener('click', function () {
            input_num.innerText += '7'
            operator = ' '
        })

        numbers_8.addEventListener('click', function () {
            input_num.innerText += '8'
            operator = ' '
        })

        numbers_9.addEventListener('click', function () {
            input_num.innerText += '9'
            operator = ' '
        })
    }
}

keyPad()

let sum = 0
class Calculator {
    constructor() {
    }

    plus_add(a) {
        sum += Number(a)
        console.log(sum)
    }

}
function calculate() {

    let calc_class = new Calculator()
    plus_btn.addEventListener('click', function () {
        calc_class.plus_add(input_num.value)
    })

}
calculate()