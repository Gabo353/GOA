let button = document.getElementsByTagName('button')[0]
let span = document.getElementsByTagName('span')[0]

// button.addEventListener('click', function() {

//     let data = new Date()
//     for (let i = 0;i <= 10; i++) {

//         span.innerHTML = `${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`

//     }

// })





function timer() {

    let time = new Date()
    span.innerHTML = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`

}
setInterval(timer,1000)