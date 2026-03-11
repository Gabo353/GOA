let body = document.body

let main_btn = document.getElementById('roll_btn')
let main_img = document.getElementById('toChange')

let images = ['./images/1.png','./images/2.png','./images/3.png','./images/4.png','./images/5.png','./images/6.png']
let count = 1

main_btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * 6)
    main_img.src = images[random]
    console.log(random)
    

    let div = document.createElement('div')
    let span = document.createElement('span')
    let img = document.createElement('img')

    div.className = 'new_div'
    span.innerHTML = `Roll ${count}:`
    span.classList = 'new_span' 
    img.className = 'new_img'
    img.src = images[random]

    body.appendChild(div)
    div.appendChild(span)
    div.appendChild(img)
    count++
})