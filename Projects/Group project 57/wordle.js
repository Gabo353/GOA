let keys = document.getElementsByClassName('key')
let brackets = document.getElementsByClassName('bracket_txt')

const words = [
    //----------------easy-----------------------
    "apple",
    "house",
    "grape",
    "table",
    "smile",

    //---------------meadium---------------------
    "flame",
    "brave",
    "cloud",
    "pride",
    "stone",
    "track",
    "light",

    //---------------Hard😈---------------------
    "crypt",
    "nymph",
    "fjord"

]

let randomizer = Math.floor(Math.random() * 15)

let current_row = 0
let words_which_guess = ["", "", "", "", "", ""]


console.log(words[randomizer])

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener('click', function () {
        if (i == 19 || i == 27) { return }

        else {

            if (words_which_guess[current_row].length < 5) {
                words_which_guess[current_row] += keys[i].innerHTML.toLowerCase()
            }

            for (let j = 0; j < words_which_guess[current_row].length; j++) {
                brackets[current_row * 5 + j].innerHTML = words_which_guess[current_row][j]
                brackets[current_row * 5 + j].style.backgroundColor = ''
            }

        }

    })

}

keys[27].addEventListener('click', function () {
    if (words_which_guess[current_row].length !== 5) return;

    let comp_word = words[randomizer].split('')


    for (let i = 0; i < 5; i++) {
        if (words_which_guess[current_row][i] === comp_word[i]) {
            brackets[current_row * 5 + i].style.backgroundColor = 'lightgreen'
            comp_word[i] = null
        }
    }


    for (let i = 0; i < 5; i++) {
        if (brackets[current_row * 5 + i].style.backgroundColor !== 'lightgreen') {
            let index = comp_word.indexOf(words_which_guess[current_row][i])
            if (index !== -1) {
                brackets[current_row * 5 + i].style.backgroundColor = 'rgb(241, 205, 0)'
                comp_word[index] = null
            } else {
                brackets[current_row * 5 + i].style.backgroundColor = 'gray'
            }
        }
    }

    current_row++
})

keys[19].addEventListener('click', function(){

    for (let i = keys.length; i <= 0; i--){

        brackets[current_row].innerHTML = ''
        
    }
    
})