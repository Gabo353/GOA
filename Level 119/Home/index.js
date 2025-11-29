//1) ააწყვეთ counter, თუ რიცხვი იქნება 0ზე მეტი მაშინ მისი ფერი იყოს მწვანე, თუ 0ზე ნაკლები მისი ფერი იყოს წითელი, თუ 0 მაშინ თეთრი
let span = document.getElementById('span')
let btn_minus = document.getElementById('btn_minus')
let btn_plus = document.getElementById('btn_plus')
let btn_restart = document.getElementById('btn_restart')


function btn_min() {
    span.textContent -= 1
    if (span.textContent > 0) {
        span.style.color = 'green'
    }
    else if (span.textContent < 0) {
        span.style.color = 'red'
    }
    else {
        span.style.color = 'white'
    }
}
function btn_plu() {
    span.textContent -= -1
    if (span.textContent > 0) {
        span.style.color = 'green'
    }
    else if (span.textContent < 0) {
        span.style.color = 'red'
    }
    else {
        span.style.color = 'white'
    }
}
function btn_res() {
    span.textContent = 0
    if (span.textContent > 0) {
        span.style.color = 'green'
    }
    else if (span.textContent < 0) {
        span.style.color = 'red'
    }
    else {
        span.style.color = 'white'
    }
}
btn_minus.addEventListener('click', btn_min)
btn_plus.addEventListener('click', btn_plu)
btn_restart.addEventListener('click', btn_res)