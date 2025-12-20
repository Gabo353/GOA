let hour = document.getElementById('hr')
let dayss = document.getElementById('day')
let minutes = document.getElementById('min')
let seconds = document.getElementById('sec')

function timer() {

    let current = new Date()
    let new_year = new Date(2025,11,31,1,0,0)

    let difference = new_year - current

    let day = Math.floor(difference / (1000 * 60 * 60 * 24))
    let hou = Math.floor(difference / (1000 * 60 * 60) % 24)
    let mi = Math.floor(difference / (1000 * 60) % 60)
    let se = Math.floor((difference / 1000) % 60)

    dayss.innerHTML = day
    hour.innerHTML = hou
    minutes.innerHTML = mi
    seconds.innerHTML = se

}   
setInterval(timer,1000)