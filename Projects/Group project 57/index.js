//wordle
//
let more_info = document.getElementById('tell_more')
let bye = document.getElementById('bye')
let chat_box = document.getElementById("chat_box_text")
let chat_box_div = document.getElementById('header_div')

more_info.addEventListener('click', function () {

    chat_box.innerText = 'Sure thing! In this website, you can play lots of entertaining game.Like: "rock, papaer, sciasours","wordle" and e.t.c'
    chat_box.style.textAlign = 'center'
    bye.style.marginLeft = '230px'
    this.remove()

})

bye.addEventListener('click', function () {

    chat_box.innerText = 'Have Fun!'
    chat_box.style.fontSize = '50px'
    chat_box.style.marginLeft = '150px'


    this.remove()
    more_info.remove()


})

let burger = document.getElementById('section')

burger.addEventListener('click', function () {

    if (document.getElementById("sideMenu")) {
        return
    }

    
    let div = document.createElement('div')
    div.id = 'sideMenu'
    let span_1 = document.createElement('span')

    let span_2 = document.createElement('a')

    let span_3 = document.createElement('a')
    let span_4 = document.createElement('a')
    let button = document.createElement('button')
    let img_wordle = document.createElement('img')
    let img_tic = document.createElement('img')

    img_wordle.src = "./icons/wordle_icon.png"
    img_wordle.style.width = "50px"
    img_wordle.style.borderRadius = "5px"
    img_wordle.style.position = "absolute"
    img_wordle.style.marginLeft = "220px"
    img_wordle.style.marginTop = "160px"

    img_tic.src = "./images/images.png"
    img_tic.style.width = "50px"
    img_tic.style.borderRadius = "5px"
    img_tic.style.position = "absolute"
    img_tic.style.marginLeft = "240px"
    img_tic.style.marginTop = "350px"

    div.style.backgroundColor = 'rgb(187, 2, 138)'
    div.style.height = '810px'
    div.style.width = '350px'
    div.style.position = 'fixed'
    div.style.top = '0'
    div.style.left = '0'
    div.style.transform = 'translateX(-100%)'   // START OFF SCREEN
    div.style.transition = 'transform 0.4s ease-in-out'  // ANIMATION
    div.style.boxShadow = '2px 1px 6px 1px black'
    div.style.display = 'flex'
    div.style.flexDirection = 'column'


    span_1.innerText = 'Catalog'

    span_1.style.color = 'white'
    span_1.style.fontSize = '25px'
    span_1.style.fontWeight = '700'
    span_1.style.marginLeft = '120px'
    span_1.style.marginTop = '20px'

    span_2.innerText = 'Wordle'

    span_2.style.color = 'white'
    span_2.style.fontSize = '20px'
    span_2.style.fontWeight = '500'
    span_2.style.marginLeft = '90px'
    span_2.style.marginTop = '120px'
    span_2.href = './wordle.html'
    span_2.style.textDecoration = 'none'


    span_3.innerText = 'Tic-Tac-Toe'

    span_3.style.color = 'white'
    span_3.style.fontSize = '20px'
    span_3.style.fontWeight = '500'
    span_3.style.marginLeft = '90px'
    span_3.style.marginTop = '170px'
    span_3.href = './luka.html'
    span_3.style.textDecoration = 'none'

    span_4.innerText = 'qetevanis archevani'

    span_4.style.color = 'white'
    span_4.style.fontSize = '20px'
    span_4.style.fontWeight = '500'
    span_4.style.marginLeft = '90px'
    span_4.style.marginTop = '190px'
    span_4.href = './qetevan.html'
    span_4.style.textDecoration = 'none'

    button.innerText = 'close'

    button.style.width = '120px'
    button.style.height = '30px'
    button.style.backgroundColor = 'red'
    button.style.color = 'white'
    button.style.border = 'none'
    button.style.borderRadius = '15px'
    button.style.fontSize = '16px'
    button.style.fontWeight = '700'
    button.style.marginLeft = '90px'
    button.style.marginTop = '80px'

    button.addEventListener('click', function () {
        div.style.transform = 'translateX(-100%)';

        setTimeout(() => {
            div.remove();
        }, 400);
    })

    div.appendChild(span_1)
    div.appendChild(span_2)
    div.appendChild(img_wordle)
    div.appendChild(img_tic)
    div.appendChild(span_3)
    div.appendChild(span_4)
    div.appendChild(button)
    document.body.appendChild(div)
    setTimeout(() => {
        div.style.transform = 'translateX(0)';
    }, 10);
})      

const signBtn = document.getElementById("Sign_btn")
const modal = document.getElementById("signModal")
const closeModal = document.getElementById("closeModal")

signBtn.addEventListener("click", () => {
    modal.classList.add("active")
})

closeModal.addEventListener("click", () => {
    modal.classList.remove("active")
})

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("active")
    }
})