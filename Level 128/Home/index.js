let p = document.getElementsByTagName('p')[0]
let black_btn = document.getElementById('black')
let red_btn = document.getElementById('red')
let blue_btn = document.getElementById('blue')
let purple_btn = document.getElementById('purple')
let clock_div = document.getElementById('clock')
let heart = document.getElementById('hrt_beat')
let time_btn = document.getElementById('time')
let p_timee = document.getElementById('p_time')
let img = document.getElementById('heartImg')
let buy_btn = document.getElementById('buy')
let body_wannabe = document.getElementById('page_inner')

function time() {

    let timee = new Date()
    let hr = timee.getHours()
    let min = timee.getMinutes()
    let sec = timee.getSeconds()

    if (sec < 10) {

        sec = `0${sec}`

    }

    if (min < 10) {

        min = `0${min}`

    }
    if (hr < 10) {

        hr = `0${hr}`

    }

    p.innerHTML = `${hr}:${min}:${sec}`

}
setInterval(time, 1000)


red_btn.addEventListener('click', function () {

    clock_div.style.backgroundImage = "url(./red.png)"

})

black_btn.addEventListener('click', function () {

    clock_div.style.backgroundImage = "url(./black.png)"

})
blue_btn.addEventListener('click', function () {

    clock_div.style.backgroundImage = "url(./blue.png)"

})
purple_btn.addEventListener('click', function () {

    clock_div.style.backgroundImage = "url(./purple.png)"

})

heart.addEventListener('click', function () {

    let imagine = "<img id='heartImg' src='./heart.png'>"
    let random_heart_beat = Math.floor(Math.random() * 50 + 70)
    let new_p = document.createElement('p')
    p = new_p

    clock_div.innerHTML = imagine
    new_p.innerHTML = random_heart_beat
    clock_div.appendChild(new_p)
    clock_div.style.display = 'flex'
    clock_div.style.alignContent = 'center'
    clock_div.style.flexDirection = 'column'
    new_p.style.position = 'relative'
    new_p.style.bottom = '20px'
    new_p.style.fontSize = '30px'

    imagine.ani
})

time_btn.addEventListener('click', function () {

    let img = document.getElementById('heartImg');
    if (img !== '') {

        img.remove()

    }

    p.style.position = 'relative'

    let timee = new Date()
    let hr = timee.getHours()
    let min = timee.getMinutes()
    let sec = timee.getSeconds()

    if (sec < 10) {

        sec = `0${sec}`

    }

    if (min < 10) {

        min = `0${min}`

    }
    if (hr < 10) {

        hr = `0${hr}`

    }

    p.innerHTML = `${hr}:${min}:${sec}`


})


buy_btn.addEventListener('click', function () {

    let buy_div = document.createElement('div')
    let p_for_buy_div = document.createElement('span')
    let p_for_buy_div_2 = document.createElement('span')
    let btn_out = document.createElement('button')

    document.body.appendChild(buy_div)
    buy_div.appendChild(p_for_buy_div)
    buy_div.appendChild(p_for_buy_div_2)
    buy_div.appendChild(btn_out)

    buy_div.style.border = '3px solid blue'
    buy_div.style.borderRadius = '6px'
    buy_div.style.textAlign = 'center'
    buy_div.style.height = '120px'
    buy_div.style.width = '280px'
    buy_div.style.display = 'flex'
    buy_div.style.flexDirection = 'column'

    buy_div.style.justifyContent = 'center'
    buy_div.style.alignItems = 'center'
    buy_div.style.backgroundColor = 'grey'
    buy_div.style.color = 'white'
    buy_div.style.position = 'absolute'
    buy_div.style.left = '39%'
    buy_div.style.bottom = '41%'

    btn_out.style.backgroundColor = 'red'
    btn_out.style.color = 'white'
    btn_out.style.border = 'none'
    btn_out.style.borderRadius = '8px'
    btn_out.style.width = '100px'
    btn_out.style.height = '30px'
    btn_out.innerHTML = 'Close'
    btn_out.style.fontSize = '15px'
    btn_out.style.fontWeight = '500'



    p_for_buy_div.textContent = 'You bought new watch'
    p_for_buy_div_2.textContent = 'congratulations'

    p_for_buy_div.style.fontSize = '18px'
    p_for_buy_div_2.style.fontSize = '18px'


    body_wannabe.style.filter = 'blur(5px)'
    buy_div.style.filter = 'none'

    btn_out.addEventListener('click', function () {

        buy_div.remove()
        body_wannabe.style.filter = 'none'


    })
})

