let form = document.getElementsByTagName('form')[0]
let input_name = document.getElementById('inp_1')
let card_own = document.getElementById('card_owner')
let input_number = document.getElementById('card_long_num')
let spans = document.getElementsByClassName('span_card')
let num_val = document.getElementById('vald_num')
let name_val = document.getElementById('val_name')

let date_by_year = document.getElementById('date_yy')
let date_by_month = document.getElementById('date_mm')
let val_for_date = document.getElementById('val_date')
let data_into_card = document.getElementById('exp_date')

let cvc_val = document.getElementById('cvc_val')
let cvc = document.getElementById('cvcc')
let cvc_into_card = document.getElementById('for_cvc')

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

    // --------------------cvc-----------------------

    if (cvc.value == '') {

        cvc_val.innerText = 'Fill this'
        cvc_val.style.color = 'red'

    }
    else if (cvc.value.length != 3) {

        cvc_val.innerText = 'Use exaclty 3 numbers'
        cvc_val.style.color = 'red'
        
    }
    else {

        cvc_val.innerHTML = ' '
        cvc_into_card.innerText = cvc.value

    }

    // --------------------date-----------------------

    if (date_by_year.value == '' && date_by_month.value == '') {

        val_for_date.innerText = 'Both inputs must be filled'
        val_for_date.style.color = 'red'

    }
    else if (date_by_year.value != '' && date_by_month.value == '') {

        val_for_date.innerText = 'Both inputs must be filled'
        val_for_date.style.color = 'red'

    }
    else if (date_by_year.value == '' && date_by_month.value != '') {

        val_for_date.innerText = 'Both inputs must be filled'
        val_for_date.style.color = 'red'

    }
    else if (date_by_year.value.length != 2) {

        val_for_date.innerText = 'Write two numbers in each'
        val_for_date.style.color = 'red'

    }
    else if (date_by_month.value.length != 2) {

        val_for_date.innerText = 'Write two numbers in each'
        val_for_date.style.color = 'red'

    }
    else {

        val_for_date.innerText = ''
        data_into_card.innerHTML = `${date_by_month.value}/${date_by_year.value}`

    }

})  