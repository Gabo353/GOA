let hour = document.getElementById('hr')
let dayss = document.getElementById('day')
let minutes = document.getElementById('min')
let seconds = document.getElementById('sec')
let h1 = document.getElementsByTagName('h1')[0]
let video = document.getElementsByTagName('video')[0]
let inputs = document.getElementsByTagName('input')
let form = document.getElementById('form')
let span_error = document.getElementById('error')

let new_year = new Date('2026-01-01')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    let now = new Date()

    let my_date = new Date(inputs[1].value)
    if (my_date - now <= 0) {

        span_error.style.color = 'red'
        span_error.innerHTML = 'Your time has passed'

    }
    else {

        new_year = new Date(inputs[1].value)
        h1.innerHTML = inputs[0].value

    }
    

})

function timer() {
    let now = new Date()

    let difference = new_year - now
    

    if (difference <= 0) {
        h1.innerHTML = 'Happy New Year 🎉'
        video.src = './4410188-hd_1920_1080_30fps.mp4'

    }

    let day = Math.floor(difference / (1000 * 60 * 60 * 24))
    let hou = Math.floor((difference / (1000 * 60 * 60)) % 24)
    let mi = Math.floor((difference / (1000 * 60)) % 60)
    let se = Math.floor((difference / 1000) % 60)

    if (Math.floor(difference / (1000 * 60 * 60 * 24)) < 10) {

        day = `0${Math.floor(difference / (1000 * 60 * 60 * 24))}`

    }
    
    if (Math.floor((difference / (1000 * 60 * 60)) % 24) < 10) {

        hou = `0${Math.floor((difference / (1000 * 60 * 60)) % 24)}`

    }
    if (Math.floor((difference / (1000 * 60)) % 60) < 10) {

        mi = `0${Math.floor((difference / (1000 * 60)) % 60)}`

    }
    if (Math.floor((difference / 1000) % 60) < 10) {

        se = `0${Math.floor((difference / 1000) % 60)}`

    }

    

    


    dayss.innerHTML = day
    hour.innerHTML = hou - 4
    minutes.innerHTML = mi
    seconds.innerHTML = se

}

setInterval(timer, 1000)

// function timer_2(e){

//     e.preventDefault()
//     let now_time = new Date()

//     let my_data = new Date(inputs[1].value)
//     let difference = my_data - now_time


//     let day = Math.floor(difference / (1000 * 60 * 60 * 24))
//     let hou = Math.floor(difference / (1000 * 60 * 60) % 24)
//     let mi = Math.floor(difference / (1000 * 60) % 60)
//     let se = Math.floor((difference / 1000) % 60)

//     dayss.innerHTML = day
//     hour.innerHTML = hou
//     minutes.innerHTML = mi
//     seconds.innerHTML = se

// }
// form.addEventListener('submit',timer_2())

setInterval(timer, 1000)