//let list = document.getElementById('list')
//let li = document.createElement('li')
//list.appendChild(li)
//list.removeChild(li)

//  1) js ში createElement ის დახმარებით შექმენით div, p, button შემდეგ p და button ჩაამატეთ div ში, ამ დივს დაამატებთ dom ში

let body = document.getElementById('bb')

let div = document.createElement('div')
let p = document.createElement('p')
let button = document.createElement('button')

div.appendChild(p)
div.appendChild(button)

body.appendChild(div)


let count = 0
let count_last = 0
let btn = document.getElementById('btn')


function big() {
    
    count++
    console.log('clicked',count)
    
}


btn.addEventListener('click',big)