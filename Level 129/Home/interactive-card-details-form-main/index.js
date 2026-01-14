let form = document.getElementsByTagName('form')[0]
let input_name = document.getElementById('inp_1')
let card_own = document.getElementById('card_owner')
let input_number = document.getElementById('card_long_num')
let spans = document.getElementsByClassName('span_card')
let num_val = document.getElementById('vald_num')
let name_val = document.getElementById('val_name')
let dates = document.getElementsByClassName('date_m')
let date_val = document.getElementById('val_yy')
let cvc_val = document.getElementById('cvc_val')

form.addEventListener('submit', function (e) {

    e.preventDefault()
    let check_num = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']

    let name = input_name.value


    let number = input_number.value
    
    for (let g = 0; g <= 10; g++) {

        if (name == '') {

            name_val.innerText = "This input must be filled"
            name_val.style.color = 'red'

        }
        else {
            
            name_val.innerHTML = name
            name_val.innerHTML = ''
            card_own.innerHTML = name
        }

    }
    if (number.length == 0) {

        num_val.innerText = 'This input must be fiiled'
        num_val.style.color = 'red'

    }

    for (let check in number) {
        if (!check_num.includes(number[check])) {

            num_val.innerText = "You can't use letters in this input"
            num_val.style.color = 'red'

        }
        else if (check != 15) {

            num_val.innerText = "You should use exactly 16"
            num_val.style.color = 'red'

        }

        else {

            num_val.remove()
            let first = ''
            for (let i = 0; i < 4; i++) {

                first += number[i]

            }
            spans[0].innerHTML = first

            let second = ''
            for (let b = 4; b < 8; b++) {

                second += number[b]

            }
            spans[1].innerHTML = second

            let third = ''
            for (let c = 8; c < 12; c++) {

                third += number[c]

            }
            spans[2].innerHTML = third

            let fourth = ''
            for (let d = 12; d < 16; d++) {

                fourth += number[d]

            }
            spans[3].innerHTML = fourth

        }

    }


    if (dates[0].value == '' || dates[1].value) {

        date_val.innerText = 'Both inputs must be filled'
        date_val.style.color = 'red'


    }
    else {

        date_val.innerHTML = ''

    }

})  