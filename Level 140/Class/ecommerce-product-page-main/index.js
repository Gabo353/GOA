let cart_btn = document.getElementById('cart')
let toRemove_Add_Cart = 0

//-----------------------------cart_btn-----------------------------------

function created() {

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

}



let run = true

cart_btn.addEventListener('click', function () {
    
    if (run){ 
        created() 
        run = false
    }    
    
})


//-----------------------------plus_minus_btn-----------------------------------

let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let counter = document.getElementById('amount')

plus.addEventListener('click', function () {
    let num = Number(counter.innerHTML)
    counter.innerHTML = num += 1
})
minus.addEventListener('click', function () {
    let num = Number(counter.innerHTML)
    for (let i = 0; i <= 0; i++) {
        if (num == 1) { return; }
        else {
            counter.innerHTML = num -= 1
        }
    }
})


//-----------------------------img_change-----------------------------------

let main = document.getElementById('main_img')

let img_1 = document.getElementById('product_1')
let img_2 = document.getElementById('product_2')
let img_3 = document.getElementById('product_3')
let img_4 = document.getElementById('product_4')

let images = [img_1, img_2, img_3, img_4]

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
        main.src = this.src
        for (let j = 0; j < images.length; j++) {
            images[j].classList.remove('selected')
        }
        this.classList.add('selected')

    })
}


//-----------------------------Scroll_img-----------------------------------

main.addEventListener('click', function () {


    let img_add = document.createElement('img')
    let div_bg = document.createElement('div')
    let button_left = document.createElement('button')
    let button_right = document.createElement('button')
    let img_right = document.createElement('img')
    let img_left = document.createElement('img')
    let img_remove = document.createElement('img')
    let remove_btn = document.createElement('button')


    img_right.src = './images/icon-next.svg'
    img_left.src = './images/icon-next.svg'
    img_remove.src = './images/close_40dp_WHITE_FILL0_wght400_GRAD0_opsz40.png'

    img_add.src = main.src
    img_add.className = 'new_main'
    div_bg.classList = 'grey_bg'
    button_right.classList = 'right_btn'
    button_left.classList = 'left_btn'

    button_right.appendChild(img_right)
    button_left.appendChild(img_left)


    document.body.appendChild(img_add)
    document.body.appendChild(div_bg)
    document.body.appendChild(button_right)
    document.body.appendChild(button_left)

    let img_2_1 = document.createElement('img')
    let img_2_2 = document.createElement('img')
    let img_2_3 = document.createElement('img')
    let img_2_4 = document.createElement('img')

    img_2_1.src = img_1.src
    img_2_2.src = img_2.src
    img_2_3.src = img_3.src
    img_2_4.src = img_4.src

    img_2_1.id = 'product_1'
    img_2_2.id = 'product_2'
    img_2_3.id = 'product_3'
    img_2_4.id = 'product_4'

    img_2_1.style.width = '80px'
    img_2_2.style.width = '80px'
    img_2_3.style.width = '80px'
    img_2_4.style.width = '80px'

    img_2_1.style.position = 'absolute'
    img_2_1.style.left = '37.5%'
    img_2_1.style.bottom = '2%'
    img_2_1.style.borderRadius = '8px'

    img_2_2.style.position = 'absolute'
    img_2_2.style.left = '44.5%'
    img_2_2.style.bottom = '2%'
    img_2_2.style.borderRadius = '8px'

    img_2_3.style.position = 'absolute'
    img_2_3.style.left = '51.5%'
    img_2_3.style.bottom = '2%'
    img_2_3.style.borderRadius = '8px'

    img_2_4.style.position = 'absolute'
    img_2_4.style.left = '58.5%'
    img_2_4.style.bottom = '2%'
    img_2_4.style.borderRadius = '8px'

    remove_btn.id = 'remove_btn'

    remove_btn.appendChild(img_remove)

    document.body.appendChild(img_2_1)
    document.body.appendChild(img_2_2)
    document.body.appendChild(img_2_3)
    document.body.appendChild(img_2_4)
    document.body.appendChild(remove_btn)

    //---------------------buttons-----------------------------

    remove_btn.addEventListener('click', function () {

        div_bg.remove()
        button_right.remove()
        button_left.remove()
        img_add.remove()
        img_2_1.remove()
        img_2_2.remove()
        img_2_3.remove()
        img_2_4.remove()

    })

    let list = [img_2_1, img_2_2, img_2_3, img_2_4]
    let starter = 0
    for (let i = 0; i < list.length; i++) {

        list[i].addEventListener('click', function () {

            img_add.src = list[i].src
            starter = i

        })


    }
    button_left.addEventListener('click', function () {
        starter--
        if (starter < 0) {
            starter = list.length - 1
        }
        img_add.src = list[starter].src
    })
    button_right.addEventListener('click', function () {
        starter++
        if (starter >= list.length) {
            starter = 0
        }
        img_add.src = list[starter].src
    })
})