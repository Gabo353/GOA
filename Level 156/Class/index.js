const num = document.getElementById('num')
const min = document.getElementById('min')
const plus = document.getElementById('plus')

let counter = localStorage.getItem('counter')
num.innerHTML = counter
plus.addEventListener('click', function(){
    counter++
    num.innerHTML = counter
    localStorage.setItem('counter',counter)
})
