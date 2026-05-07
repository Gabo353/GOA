//----------------1---------------
// შექმენი ერთი ინფუთი,საბმით ღილაკი და ერთ პარაგრაფი
// მომხმარებელი წერს input-ში სახელს და აჭერს ღილაკს.ამის შემდეგ პარაგრაფში უნდა გამჩნდეს მომხმარებლის მიერ შეყვანილი მნიშნველობა
// დავალება:
// შეინახე ეს სახელი localStorage-ში და გვერდის გადატვირთვის შემდეგაც გამოჩნდეს.

let input = document.getElementById('input')
let form = document.getElementById('form')
let paragraph = document.getElementById('paragraph')
let submit = document.getElementById('submit')
let user = localStorage.getItem('user_name')
form.addEventListener('submit', function(e){
    e.preventDefault()
    if(input.value.length == 0){
        user = 'guest'
    }
    paragraph.innerHTML = `hello ${user}`
    localStorage.setItem('user_name', user)
    user = input.value
})
paragraph.innerHTML = `hello ${user}`