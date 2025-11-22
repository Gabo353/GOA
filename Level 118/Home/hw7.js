//7)შექმენით HTML გვერდი <div id="container"></div> და <button> ელემენტით.
//-----ყოველი დაჭერისას შექმენით ახალი <p> ელემენტი ტექსტით "Item X" (X = დამატებული ელემენტების რაოდენობა).
//-----დაამატეთ ახალი ელემენტი container-ში.

let div = document.getElementById('container')

let count = 0

function addP() {
    
    count++
    let p = document.createElement('p')
    p.innerText = 'paragraph' + ' ' + count
    div.appendChild(p)
    
}

document.getElementsByTagName('button')[0].addEventListener('click',addP)