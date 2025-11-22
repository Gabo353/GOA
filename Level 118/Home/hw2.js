//2)შექმენით HTML გვერდი <button> ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც გამოძახებისას შეცვლის <button> ელემენტის ფონს წითლად და ტექსტის ფერს – თეთრად.

let btn = document.getElementById('btn')

function bgchange() {

    btn.innerHTML += '<style>#btn{background-color: red; color: white;}</style>'

}

btn.addEventListener('click', bgchange)