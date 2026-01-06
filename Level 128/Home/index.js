let black_btn = document.getElementById('black')
let red_btn = document.getElementById('red')
let blue_btn = document.getElementById('blue')
let purple_btn = document.getElementById('purple')
let clock_div = document.getElementById('clock')
let p_timee = document.getElementById('p_time')
let buy_btn = document.getElementById('buy')
let body_wannabe = document.getElementById('page_inner')

let heart_btn = document.getElementById('hrt_beat')
let time_btn = document.getElementById('time')

function time() { 
    
    let timee = new Date() 
    let hr = timee.getHours() 
    let min = timee.getMinutes() 
    let sec = timee.getSeconds() 
    if (sec < 10) { sec = `0${sec}` } 
    if (min < 10) { min = `0${min}`} 
    if (hr < 10) { hr = `0${hr}` } 
    p_timee.innerHTML = `${hr}:${min}:${sec}` 

}



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




buy_btn.addEventListener('click', function () {

    let buy_div = document.createElement('div')
    let p_for_buy_div = document.createElement('span')
    let p_for_buy_div_2 = document.createElement('span')
    let btn_out = document.createElement('button')

    document.body.appendChild(buy_div)
    buy_div.appendChild(p_for_buy_div)
    buy_div.appendChild(p_for_buy_div_2)
    buy_div.appendChild(document.createElement('br'))
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

//თქვენი დავალებაა, რომ დაასრულოთ დღევანდელი პროექტი თავიდან ბოლომდე,ასევე თქვენს პროექტს დაუმატეთ responsive ,ასევე დაუმატეთ რომ ფულის ცემის მაჩვენებელი შეიცვალოს ყოველ 20 წამში ეთხელ რაიმე რენდომ მთელი რიცხვით 60 დან 110 მდე, და რომ დააჭერ buy now ღილაკს ეკრანის შუაში გამოჩნდეს რაიმე დივი სადაც ეწერება ტექსტი ==> You bought new wach,congratulations





