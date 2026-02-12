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
        if (words_which_guess[current_row].length < 5) {
            words_which_guess[current_row] += keys[i].innerHTML.toLowerCase();
        }

        for (let j = 0; j < words_which_guess[current_row].length; j++) {
            brackets[current_row * 5 + j].innerHTML = words_which_guess[current_row][j];
            brackets[current_row * 5 + j].style.backgroundColor = '';
        }
    });
}

keys[27].addEventListener('click', function () {
    if (words_which_guess[current_row].length !== 5) return; // only submit full word

    let comp_word = words[randomizer].split('');

    // Green pass
    for (let i = 0; i < 5; i++) {
        if (words_which_guess[current_row][i] === comp_word[i]) {
            brackets[current_row * 5 + i].style.backgroundColor = 'green';
            comp_word[i] = null;
        }
    }

    // Yellow/Gray pass
    for (let i = 0; i < 5; i++) {
        if (brackets[current_row * 5 + i].style.backgroundColor !== 'green') {
            let index = comp_word.indexOf(words_which_guess[current_row][i]);
            if (index !== -1) {
                brackets[current_row * 5 + i].style.backgroundColor = 'yellow';
                comp_word[index] = null;
            } else {
                brackets[current_row * 5 + i].style.backgroundColor = 'gray';
            }
        }
    }

    current_row++; // move to next row
});

// let my_word = 'hello'
// let my_guess = prompt('Guess: ')

// for (let g = 0; g < my_word.length; g ++){

//     if (my_guess[g] === my_word[g]){

//         console.log('wow you guessed the place and letter')

//     }
//     else if (my_word.includes(my_guess[g])){

//         console.log('you guessed letter')

//     }

//     else {

//         console.log('looser')

//     }
// }

// words_which_guess[0] += keys[i].innerHTML
// words_which_guess[0] = words_which_guess[0].slice(0, 5)
// console.log(words_which_guess[0])

// for (let b = 0; b < words_which_guess[0].length; b++) {
//     brackets[b].innerHTML = words_which_guess[0][b]

//     if (words_which_guess[0][b].toLocaleLowerCase() === words[randomizer][b]) {
//         brackets[b].style.backgroundColor = 'green';
//     }

//     else if (words[randomizer].includes(words_which_guess[0][b].toLocaleLowerCase())) {
//         brackets[b].style.backgroundColor = 'yellow';
//     }
// }