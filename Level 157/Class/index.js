function ClassWork1() {
    let btn_plus = document.getElementById('plus')
    let btn_minus = document.getElementById('minus')
    let p = document.getElementById('p')

    let counter = localStorage.getItem('counter') || 0

    btn_minus.addEventListener('click', function () {
        counter--
        p.innerText = counter
        localStorage.setItem('counter', counter)
    })
    btn_plus.addEventListener('click', function () {
        counter++
        p.innerText = counter
        localStorage.setItem('counter', counter)
    })
    p.innerHTML = counter
}


let input = document.getElementById('input_name')
let p = document.getElementById('p2')
let btn = document.getElementById('btn')
let savedName = localStorage.getItem('user_name_2')
if (savedName) {
    p.innerText = `welcome ${savedName}`
}
btn.addEventListener('click', function () {
    let name = input.value.trim()
    if (name.length === 0) {
        p.innerText = `welcome guest!`
        localStorage.setItem('user_name_2', 'guest')
    } else {
        p.innerText = `welcome ${name}`
        localStorage.setItem('user_name_2', name)
    }
})