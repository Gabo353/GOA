let keys = document.getElementsByClassName('key')
let brackets = document.getElementsByClassName('bracket_txt')
let give_word = document.getElementById('known')
let intro = document.getElementById('la')

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
    let guessedWord = words_which_guess[current_row];
    let correctWord = words[randomizer];

    if (guessedWord === correctWord) {
        intro.innerHTML = 'Congratulations'
        give_word.innerHTML = "You Win!";
        
        return;
    }

    else if (guessedWord !== correctWord && current_row == 4){

        intro.innerHTML = 'The Word Was:'
        give_word.innerHTML = correctWord;

    }
    current_row++;

    

    console.log(current_row)
})

keys[19].addEventListener('click', function () {

    if (words_which_guess[current_row].length === 0) return

    let lastIndex = words_which_guess[current_row].length - 1

    words_which_guess[current_row] = words_which_guess[current_row].slice(0, lastIndex)
        

    brackets[current_row * 5 + lastIndex].innerHTML = ''
})

let burger = document.getElementById('section')

burger.addEventListener('click', function () {

    if (document.getElementById("sideMenu")) {
        return
    }

    
    let div = document.createElement('div')
    div.id = 'sideMenu'
    let span_1 = document.createElement('span')

    let span_2 = document.createElement('a')

    let span_3 = document.createElement('a')
    let span_4 = document.createElement('a')
    let button = document.createElement('button')
    let img_wordle = document.createElement('img')
    let img_tic = document.createElement('img')
    let img_speed = document.createElement('img')

    img_wordle.src = "./icons/wordle_icon.png"
    img_wordle.style.width = "50px"
    img_wordle.style.borderRadius = "5px"
    img_wordle.style.position = "absolute"
    img_wordle.style.marginLeft = "220px"
    img_wordle.style.marginTop = "160px"

    img_tic.src = "./images/images.png"
    img_tic.style.width = "50px"
    img_tic.style.borderRadius = "5px"
    img_tic.style.position = "absolute"
    img_tic.style.marginLeft = "240px"
    img_tic.style.marginTop = "350px"

    img_speed.src = "./images/download (3).png"
    img_speed.style.width = "50px"
    img_speed.style.borderRadius = "5px"
    img_speed.style.position = "absolute"
    img_speed.style.marginLeft = "240px"
    img_speed.style.marginTop = "565px"

    div.style.backgroundColor = 'rgb(187, 2, 138)'
    div.style.height = '810px'
    div.style.width = '350px'
    div.style.position = 'fixed'
    div.style.top = '0'
    div.style.left = '0'
    div.style.transform = 'translateX(-100%)'   
    div.style.transition = 'transform 0.4s ease-in-out'  
    div.style.boxShadow = '2px 1px 6px 1px black'
    div.style.display = 'flex'
    div.style.flexDirection = 'column'


    span_1.innerText = 'Catalog'

    span_1.style.color = 'white'
    span_1.style.fontSize = '25px'
    span_1.style.fontWeight = '700'
    span_1.style.marginLeft = '120px'
    span_1.style.marginTop = '20px'

    span_2.innerText = 'Wordle'

    span_2.style.color = 'white'
    span_2.style.fontSize = '20px'
    span_2.style.fontWeight = '500'
    span_2.style.marginLeft = '90px'
    span_2.style.marginTop = '120px'
    span_2.href = './wordle.html'
    span_2.style.textDecoration = 'none'


    span_3.innerText = 'Tic-Tac-Toe'

    span_3.style.color = 'white'
    span_3.style.fontSize = '20px'
    span_3.style.fontWeight = '500'
    span_3.style.marginLeft = '90px'
    span_3.style.marginTop = '170px'
    span_3.href = './luka.html'
    span_3.style.textDecoration = 'none'

    span_4.innerText = 'Reaction Time'

    span_4.style.color = 'white'
    span_4.style.fontSize = '20px'
    span_4.style.fontWeight = '500'
    span_4.style.marginLeft = '90px'
    span_4.style.marginTop = '190px'
    span_4.href = './qetevan.html'
    span_4.style.textDecoration = 'none'

    button.innerText = 'close'

    button.style.width = '120px'
    button.style.height = '30px'
    button.style.backgroundColor = 'red'
    button.style.color = 'white'
    button.style.border = 'none'
    button.style.borderRadius = '15px'
    button.style.fontSize = '16px'
    button.style.fontWeight = '700'
    button.style.marginLeft = '90px'
    button.style.marginTop = '80px'

    button.addEventListener('click', function () {
        div.style.transform = 'translateX(-100%)';

        setTimeout(() => {
            div.remove();
        }, 400);
    })

    div.appendChild(span_1)
    div.appendChild(span_2)
    div.appendChild(img_wordle)
    div.appendChild(img_tic)
    div.appendChild(img_speed)
    div.appendChild(span_3)
    div.appendChild(span_4)
    div.appendChild(button)
    document.body.appendChild(div)
    setTimeout(() => {
        div.style.transform = 'translateX(0)';
    }, 10);
})   