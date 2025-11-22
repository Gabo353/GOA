//5)შექმენით HTML გვერდი <form> ელემენტით, რომელიც შეიცავს input ველს და submit ღილაკს.
//-----დაწერეთ JavaScript ფუნქცია, რომელიც ფორმის გაგზავნისას შეამოწმებს input ველს:
//----- თუ ველი ცარიელია → გამოჩნდება შეცდომის შეტყობინება input ველის გვერდით.
//-----თუ ველი არაა ცარიელი → გამოჩნდება alert ს Mensagem-ით "Form submitted!".


let form = document.getElementById('form1')

function check() {
    
    if (form[0].value === '') {

        let new_p = document.createElement('p')
        new_p.innerText = 'Error'
        form.appendChild(new_p)

    }
    else {

        alert("Form submitted!")

    }

}

document.getElementById('sub').addEventListener('click', check)
