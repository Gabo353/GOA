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
keyPad()

let firstNumber = ''
let secondNumber = ''
let operator = ''

class Calculator {
    constructor(old, current) {
        this.old = old
        this.current = current
    }
    plus() {
        return this.old + this.current
    }
    minus() {
        return this.old - this.current
    }
    divd() {
        return this.old / this.current
    }
    multi() {
        return this.old * this.current
    }
}

let res = 0

plus_btn.addEventListener('click', function () {
    firstNumber = Number(input_num.innerText)
    operator = '+'
    input_num.innerHTML = '+'
})
minus_btn.addEventListener('click', function () {
    firstNumber = Number(input_num.innerText)
    operator = '-'
    input_num.innerHTML = '-'
})
divide_btn.addEventListener('click', function () {
    firstNumber = Number(input_num.innerText)
    operator = '/'
    input_num.innerHTML = '/'
})
multi_btn.addEventListener('click', function () {
    firstNumber = Number(input_num.innerText)
    operator = '*'
    input_num.innerHTML = '*'
})

equal_btn.addEventListener('click', function () {
    let secondNumber = Number(input_num.innerText.slice(1,input_num.innerText.length))
    let func_calc = new Calculator(firstNumber, secondNumber)
    

    switch (operator) {
        case '+':
            res = func_calc.plus()
            break;
        case '-':
            res = func_calc.minus()
            break;
        case '/':
            res = func_calc.divd()
            break;
        case '*':
            res = func_calc.multi()
            break;
    }
    input_num.innerHTML = res
    console.log(res)
})
resete_btn.addEventListener('click', function () {
    input_num.innerHTML = ''
    res = 0
})
delete_btn.addEventListener('click', function(){
    input_num.innerHTML = input_num.innerText.slice(0,-1)
})