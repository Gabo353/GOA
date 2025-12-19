let day = document.getElementById('day')
let hr = document.getElementById('hr')
let mine = document.getElementById('min')
let sece = document.getElementById('sec')
let h1 = document.getElementsByTagName('h1')[0]
let video = document.getElementsByTagName('video')[0]

function timer() {
    let current = new Date()
    let new_year = new Date('January 1, 2026 00:00:00')

    let different = new_year - current

    let days = Math.floor(different / (1000 * 60 * 60 * 24))
    let hours = Math.floor((different / (1000 * 60 * 60)) % 24)
    let minutes = Math.floor((different / (1000 * 60)) % 60)
    let seconds = Math.floor((different / 1000) % 60)

    day.innerHTML = days
    hr.innerHTML = hours
    mine.innerHTML = minutes
    sece.innerHTML = seconds

    if (different <= 0) {
        h1.innerHTML = 'Happy New Year'
        video.src = './4410188-hd_1920_1080_30fps.mp4' 
        video.play()
    }
}


setInterval(timer, 1000)