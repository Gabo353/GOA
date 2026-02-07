//wordle
//
let more_info = document.getElementById('tell_more')
let bye = document.getElementById('bye')
let chat_box = document.getElementById("chat_box_text")
let chat_box_div = document.getElementById('header_div')

more_info.addEventListener('click', function(){

    chat_box.innerText = 'Sure thing! In this website, you can play lots of entertaining game.Like: "rock, papaer, sciasours","wordle" and e.t.c'
    chat_box.style.textAlign = 'center'
    bye.style.marginLeft = '230px'
    this.remove()

})

bye.addEventListener('click', function(){

    chat_box.innerText = 'Have Fun!'
    chat_box.style.fontSize = '50px'
    chat_box.style.marginLeft = '150px'


    this.remove()
    more_info.remove()
    

})