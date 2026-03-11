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

// --------------------buttons--------------------------

let resete_btn = document.getElementById('resete')
let equal_btn = document.getElementById('equal')
let delete_btn = document.getElementById('delete')
let plus_btn = document.getElementById('plus')
let minus_btn = document.getElementById('minus')
let dot_btn = document.getElementById('dot')
let multi_btn = document.getElementById('multi')
let divide_btn = document.getElementById('divide')
// --------------------design--------------------------

let clac = document.getElementById('calc')
let theme = document.getElementById('theme_span')
let text_1_2_3 = document.getElementById('text')

// --------------------keyPad--------------------------

let input_num = document.getElementById('input_span')
let key_pad = document.getElementById('main_key_pad')
let input_screen = document.getElementById('input')


// let save = 0

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


let symblo = ''
let operatig_number = 0


plus_btn.addEventListener('click', function () {

    operatig_number = Number(input_num.innerText)
    symblo = '+'
    input_num.innerText = '+'

})

minus_btn.addEventListener('click', function () {

    operatig_number = Number(input_num.innerText)
    symblo = '-'
    input_num.innerText = '-'

})
divide_btn.addEventListener('click', function () {

    operatig_number = Number(input_num.innerText)
    symblo = '/'
    input_num.innerText = '/'

})
multi_btn.addEventListener('click', function () {

    operatig_number = Number(input_num.innerText)
    symblo = 'x'
    input_num.innerText = '*'

})
resete_btn.addEventListener('click', function () {

    operatig_number = 0
    input_num.innerText = ''

})
delete_btn.addEventListener('click', function () {

    input_num.innerText = input_num.innerText.slice(0, -1)

})
let dot_count = 0
dot_btn.addEventListener('click', function (event) {

    if (!input_num.innerText.includes('.')) {
        input_num.innerText += '.'
    } else {

        event.stopPropagation()
    }
})

equal_btn.addEventListener('click', function () {

    let new_opereting_num = Number(input_num.innerText.slice(1,input_num.innerText.length))
    
    if (symblo === '+') {

        input_num.innerText = operatig_number + new_opereting_num

    }
    else if (symblo === '-') {

        input_num.innerText = operatig_number - new_opereting_num

    }
    else if (symblo === 'x') {

        input_num.innerText = operatig_number * new_opereting_num

    }
    else if (symblo === '/') {

        input_num.innerText = operatig_number / new_opereting_num

    }
    else if (symblo === ' '){

        input_num.innerText

    }
})





let switcher = document.getElementById('mini_ball')
let switcher_bg = document.getElementById('btn')
let count = 1
switcher.addEventListener('click', function () {

    count++
    if (count == 2) {

        switcher.style.position = 'relative'
        switcher.style.left = '39%'
        document.body.style.backgroundColor = 'hsl(0, 0%, 90%)'
        key_pad.style.backgroundColor = 'hsl(0, 5%, 81%)'
        input_screen.style.backgroundColor = 'hsl(0, 0%, 93%)'
        input_screen.style.color = 'hsl(60, 10%, 19%)'
        btn.style.backgroundColor = 'hsl(0, 5%, 81%)'
        delete_btn.style.color = 'white'
        delete_btn.style.backgroundColor = 'hsla(185, 46%, 41%, 0.76)'
        resete_btn.style.backgroundColor = 'hsla(185, 46%, 41%, 0.76)'
        clac.style.color = 'black'
        clac.style.fontWeight = '700'
        theme.style.color = 'black'
        theme.style.fontWeight = '500'
        text_1_2_3.style.color = 'black'
        text_1_2_3.style.fontWeight = '500'


    }
    else if (count == 3) {

        switcher.style.position = 'relative'
        switcher.style.left = '70%'
        count = 0
        document.body.style.backgroundColor = 'hsl(268, 75%, 9%)'
        key_pad.style.backgroundColor = ' hsl(268, 71%, 12%)'
        input_screen.style.backgroundColor = ' hsl(268, 71%, 12%)'
        input_screen.style.color = 'hsl(52, 100%, 62%)'
        btn.style.backgroundColor = ' hsl(268, 71%, 12%)'
        delete_btn.style.color = 'white'
        clac.style.color = 'hsl(52, 100%, 62%)'
        clac.style.fontWeight = '700'
        theme.style.color = 'hsl(52, 100%, 62%)'
        theme.style.fontWeight = '500'
        text_1_2_3.style.color = 'hsl(52, 100%, 62%)'
        text_1_2_3.style.fontWeight = '500'

        numbers_0.style.backgroundColor = 'hsl(268, 47%, 21%)'
        numbers_0.style.color = 'hsl(52, 100%, 62%)'
        numbers_0.style.boxShadow = '0px 2px 3px hsl(290, 70%, 36%)'

        numbers_1.style.backgroundColor = 'hsl(268, 47%, 21%)'
        numbers_1.style.color = 'hsl(52, 100%, 62%)'
        numbers_1.style.boxShadow = '0px 2px 3px hsl(290, 70%, 36%)'

        numbers_2.style.backgroundColor = 'hsl(268, 47%, 21%)'
        numbers_2.style.color = 'hsl(52, 100%, 62%)'
        numbers_2.style.boxShadow = '0px 2px 3px hsl(290, 70%, 36%)'

        numbers_3.style.backgroundColor = 'hsl(268, 47%, 21%)'
        numbers_3.style.color = 'hsl(52, 100%, 62%)'
        numbers_3.style.boxShadow = '0px 2px 3px hsl(290, 70%, 36%)'

        numbers_4.style.backgroundColor = 'hsl(268, 47%, 21%)'
        numbers_4.style.color = 'hsl(52, 100%, 62%)'
        numbers_4.style.boxShadow = '0px 2px 3px hsl(290, 70%, 36%)'

        numbers_5.style.backgroundColor = 'hsl(268, 47%, 21%)'
        numbers_5.style.color = 'hsl(52, 100%, 62%)'
        numbers_5.style.boxShadow = '0px 2px 3px hsl(290, 70%, 36%)'

        numbers_6.style.backgroundColor = 'hsl(268, 47%, 21%)'
        numbers_6.style.color = 'hsl(52, 100%, 62%)'
        numbers_6.style.boxShadow = '0px 2px 3px hsl(290, 70%, 36%)'

        numbers_7.style.backgroundColor = 'hsl(268, 47%, 21%)'
        numbers_7.style.color = 'hsl(52, 100%, 62%)'
        numbers_7.style.boxShadow = '0px 2px 3px hsl(290, 70%, 36%)'

        numbers_8.style.backgroundColor = 'hsl(268, 47%, 21%)'
        numbers_8.style.color = 'hsl(52, 100%, 62%)'
        numbers_8.style.boxShadow = '0px 2px 3px hsl(290, 70%, 36%)'

        numbers_9.style.backgroundColor = 'hsl(268, 47%, 21%)'
        numbers_9.style.color = 'hsl(52, 100%, 62%)'
        numbers_9.style.boxShadow = '0px 2px 3px hsl(290, 70%, 36%)'

        plus_btn.style.backgroundColor = 'hsl(268, 47%, 21%)'
        plus_btn.style.color = 'hsl(52, 100%, 62%)'
        plus_btn.style.boxShadow = '0px 2px 3px hsl(290, 70%, 36%)'

        minus_btn.style.backgroundColor = 'hsl(268, 47%, 21%)'
        minus_btn.style.color = 'hsl(52, 100%, 62%)'
        minus_btn.style.boxShadow = '0px 2px 3px hsl(290, 70%, 36%)'

        dot_btn.style.backgroundColor = 'hsl(268, 47%, 21%)'
        dot_btn.style.color = 'hsl(52, 100%, 62%)'
        dot_btn.style.boxShadow = '0px 2px 3px hsl(290, 70%, 36%)'

        divide_btn.style.backgroundColor = 'hsl(268, 47%, 21%)'
        divide_btn.style.color = 'hsl(52, 100%, 62%)'
        divide_btn.style.boxShadow = '0px 2px 3px hsl(290, 70%, 36%)'

        multi_btn.style.backgroundColor = 'hsl(268, 47%, 21%)'
        multi_btn.style.color = 'hsl(52, 100%, 62%)'
        multi_btn.style.boxShadow = '0px 2px 3px hsl(290, 70%, 36%)'

        delete_btn.style.backgroundColor = 'hsl(281, 89%, 26%)'
        delete_btn.style.color = 'white'
        delete_btn.style.boxShadow = '0px 2px 3px hsl(290, 70%, 36%)'

        resete_btn.style.backgroundColor = 'hsl(281, 89%, 26%)'
        resete_btn.style.color = 'white'
        resete_btn.style.boxShadow = '0px 2px 3px hsl(290, 70%, 36%)'

        equal_btn.style.backgroundColor = 'hsl(176, 100%, 44%)'
        equal_btn.style.color = 'black'
        equal_btn.style.boxShadow = '0px 2px 3px hsl(177, 92%, 70%)'

        switcher.style.backgroundColor = 'hsl(176, 100%, 44%)'

    }

    else {

        switcher.style.position = 'relative'
        switcher.style.left = '5%'
        count = 1

        btn.style.backgroundColor = 'hsl(223, 31%, 20%)'
        document.body.style.backgroundColor = 'hsl(222, 26%, 31%)'
        key_pad.style.backgroundColor = 'hsl(223, 31%, 20%)'
        input_screen.style.backgroundColor = 'hsl(224, 36%, 15%)'
        input_screen.style.color = 'white'
        delete_btn.style.color = 'white'
        delete_btn.style.backgroundColor = 'hsla(185, 46%, 41%, 0.76)'
        resete_btn.style.backgroundColor = 'hsla(185, 46%, 41%, 0.76)'
        clac.style.color = 'white'
        clac.style.fontWeight = '700'
        theme.style.color = 'white'
        theme.style.fontWeight = '500'
        text_1_2_3.style.color = 'white'
        text_1_2_3.style.fontWeight = '500'

        numbers_0.style.backgroundColor = 'hsl(0, 0%, 90%)'
        numbers_0.style.color = 'black'
        numbers_0.style.boxShadow = '0px 2px 3px grey '

        numbers_1.style.backgroundColor = 'hsl(0, 0%, 90%)'
        numbers_1.style.color = 'black'
        numbers_1.style.boxShadow = '0px 2px 3px grey '

        numbers_2.style.backgroundColor = 'hsl(0, 0%, 90%)'
        numbers_2.style.color = 'black'
        numbers_2.style.boxShadow = '0px 2px 3px grey '

        numbers_3.style.backgroundColor = 'hsl(0, 0%, 90%)'
        numbers_3.style.color = 'black'
        numbers_3.style.boxShadow = '0px 2px 3px grey '

        numbers_4.style.backgroundColor = 'hsl(0, 0%, 90%)'
        numbers_4.style.color = 'black'
        numbers_4.style.boxShadow = '0px 2px 3px grey '

        numbers_5.style.backgroundColor = 'hsl(0, 0%, 90%)'
        numbers_5.style.color = 'black'
        numbers_5.style.boxShadow = '0px 2px 3px grey '

        numbers_6.style.backgroundColor = 'hsl(0, 0%, 90%)'
        numbers_6.style.color = 'black'
        numbers_6.style.boxShadow = '0px 2px 3px grey '

        numbers_7.style.backgroundColor = 'hsl(0, 0%, 90%)'
        numbers_7.style.color = 'black'
        numbers_7.style.boxShadow = '0px 2px 3px grey '

        numbers_8.style.backgroundColor = 'hsl(0, 0%, 90%)'
        numbers_8.style.color = 'black'
        numbers_8.style.boxShadow = '0px 2px 3px grey '

        numbers_9.style.backgroundColor = 'hsl(0, 0%, 90%)'
        numbers_9.style.color = 'black'
        numbers_9.style.boxShadow = '0px 2px 3px grey '

        plus_btn.style.backgroundColor = 'hsl(0, 0%, 90%)'
        plus_btn.style.color = 'black'
        plus_btn.style.boxShadow = '0px 2px 3px grey'

        minus_btn.style.backgroundColor = 'hsl(0, 0%, 90%)'
        minus_btn.style.color = 'black'
        minus_btn.style.boxShadow = '0px 2px 3px grey'

        dot_btn.style.backgroundColor = 'hsl(0, 0%, 90%)'
        dot_btn.style.color = 'black'
        dot_btn.style.boxShadow = '0px 2px 3px grey'

        divide_btn.style.backgroundColor = 'hsl(0, 0%, 90%)'
        divide_btn.style.color = 'black'
        divide_btn.style.boxShadow = '0px 2px 3px grey'

        multi_btn.style.backgroundColor = 'hsl(0, 0%, 90%)'
        multi_btn.style.color = 'black'
        multi_btn.style.boxShadow = '0px 2px 3px grey'

        delete_btn.style.backgroundColor = 'hsl(225, 21%, 49%)'
        delete_btn.style.color = 'white'
        delete_btn.style.boxShadow = '0px 2px 3px hsl(224, 24%, 38%)'

        resete_btn.style.backgroundColor = 'hsl(225, 21%, 49%)'
        resete_btn.style.color = 'white'
        resete_btn.style.boxShadow = '0px 2px 3px hsl(224, 24%, 38%)'

        equal_btn.style.backgroundColor = 'hsl(6, 63%, 50%)'
        equal_btn.style.color = 'white'
        equal_btn.style.boxShadow = '0px 2px 3px hsl(6, 70%, 32%)'

        switcher.style.backgroundColor = 'hsl(6, 63%, 50%)'

    }
})

