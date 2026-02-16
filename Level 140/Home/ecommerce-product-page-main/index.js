let cart_btn = document.getElementById('cart')

cart_btn.addEventListener('click', function () {

    let div = document.createElement('div')
    let span = document.createElement('span')
    let span_noty = document.createElement('span')

    div.id = 'added'
    span.id = 'cart_top'
    span.innerHTML = 'Cart'
    span_noty.id = 'empty'
    span_noty.innerHTML = 'Your cart is empty.'


    div.appendChild(span)
    div.appendChild(span_noty)
    document.body.appendChild(div)
})

let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let counter = document.getElementById('amount')

plus.addEventListener('click', function () {
    let num = Number(counter.innerHTML)
    counter.innerHTML = num += 1
})
minus.addEventListener('click', function () {
    let num = Number(counter.innerHTML)
    for (let i = 0; i <= 1; i++) {
        if (num == 1) { return; }
        else {
            counter.innerHTML = num += -1
        }
    }
})  

let main = document.getElementById('main_img')

let img_1 = document.getElementById('product_1')
let img_2 = document.getElementById('product_2')
let img_3 = document.getElementById('product_3')
let img_4 = document.getElementById('product_4')

img_4.addEventListener('click', function(){
    main.src = img_4.src
})
img_3.addEventListener('click', function(){
    main.src = img_3.src
})
img_2.addEventListener('click', function(){
    main.src = img_2.src
})
img_1.addEventListener('click', function(){
    main.src = img_1.src
})