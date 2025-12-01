//1)გააკეტეთ ესეთი პროექტი:ტექსტის ფერის არჩევა, იყოს ფერების ჩამონათვალი დივების სახით, და ერთი ინფუთი, შემდეგ ამ ფერების დაჭერაზე ინფუთის წერის დროს მაგ  ფერის ტექსტი დაიწეროს, გამოიყენეთ event ობიუქტი

// let divs = document.getElementsByTagName('div')
// let input = document.getElementsByTagName('input')

// function blue() {

//     input[0].style.color = 'blue'

// }
// function red() {

//     input[0].style.color = 'red'

// }function yellow() {

//     input[0].style.color = 'yellow'

// }

// divs[1].addEventListener('click', blue)
// divs[2].addEventListener('click', red)
// divs[3].addEventListener('click', yellow)


let input = document.getElementById('in')

document.addEventListener('click', function(event) {
    if (event.target.id === 'blue') {
        input.style.color = 'blue'
    }   
    else if (event.target.id === 'red') {
        input.style.color = 'red'
    }else if (event.target.id === 'yellow') {
        input.style.color = 'yellow'
    }
})