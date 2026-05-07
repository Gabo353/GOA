//----------------3---------------
// გვერდზე გაქვს ქუაუნთერი + - და reset ღილაკებით
// დავალება:
// ყოველ დაჭერაზე counter იზრდება 1 ით
// მნიშვნელობა ინახება localStorage-ში
// refresh-ზე არ ნულდება


let p = document.getElementById('p')
let button = document.getElementsByClassName('button')

let counter = localStorage.getItem('counter')
p.innerHTML = counter
for (let i = 0; i < 3; i++) {
    button[i].addEventListener('click', function () {

        if (button[i].innerHTML === '+') {
            counter++
        }
        else if (button[i].innerHTML === '-') {
            counter--
        }
        else if (button[i].innerHTML === 'Refresh') {
            counter = 0
        }
        localStorage.setItem('counter', counter)
        p.innerHTML = counter
    })
}