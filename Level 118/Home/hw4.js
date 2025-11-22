//4)შექმენით HTML გვერდი <button> ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც მაშინ გამოიძახება, როცა ღილაკზე დააჭერენ, და აჩვენებს alert ს Mensagem-ით "Button clicked!".

let btn = document.getElementsByTagName('button')[0]

function alerte() {

    alert("Button clicked!")

}

btn.addEventListener('click', alerte)