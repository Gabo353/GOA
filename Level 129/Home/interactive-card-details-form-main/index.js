let form = document.getElementsByTagName('form')[0]
let input_name = document.getElementById('inp_1')
let card_own = document.getElementById('card_owner')
let input_number = document.getElementById('card_long_num')
let spans = document.getElementsByClassName('span_card')
let exp_date = document.getElementsByClassName('date_m')
let data = document.getElementById('exp_date')

form.addEventListener('submit', function (e) {

    e.preventDefault()
    
    let name = input_name.value
    card_own.innerHTML = name

    let number = input_number.value
    
    let first = ''
    for (let i = 0; i < 4; i++) {

        first += number[i]

    }
    spans[0].innerHTML = first

    let second = ''
    for (let b = 4; b < 8; b++) {

        second +=  number[b]

    }
    spans[1].innerHTML = second

    let third = ''
    for (let c = 8; c < 12; c++) {

        third +=  number[c]

    }
    spans[2].innerHTML = third

    let fourth = ''
    for (let d = 12; d < 16; d++) {

        fourth +=  number[d]

    }
    spans[3].innerHTML = fourth

    let data_first = ''

    for (let f = 0; f < 2; f++) {

        console.log(data[f])

    }
})