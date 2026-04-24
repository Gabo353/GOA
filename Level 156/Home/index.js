// 1)შექმენი ერთი ინფუთი,საბმით ღილაკი და ერთ პარაგრაფი
// მომხმარებელი წერს input-ში სახელს და აჭერს ღილაკს.ამის შემდეგ პარაგრაფში უნდა გამჩნდეს მომხმარებლის მიერ შეყვანილი მნიშნველობა
// დავალება:
// შეინახე ეს სახელი localStorage-ში და გვერდის გადატვირთვის შემდეგაც გამოჩნდეს.

// 2)გვერდზე გაქვს ღილაკი "Toggle Theme"
// დავალება:
// დაჭერისას იცვლება background
// შეინახე არჩეული theme
// refresh-ის შემდეგ იგივე theme დარჩეს
// მინიშნება:
// შეინახე "dark" ან "light"

// 3)გვერდზე გაქვს ქუაუნთერი + -  და reset ღილაკებით
// დავალება:
// ყოველ დაჭერაზე counter იზრდება 1 ით
// მნიშვნელობა ინახება localStorage-ში
// refresh-ზე არ ნულდება

// 4)TODO app --- > input + add button
// დავალება:
// დაამატე task-ები სიაში
// შეინახე localStorage-ში
// refresh-ზე ყველა task დაბრუნდეს

// 5)წინა დავალებას დაამატე:
// დავალება:
// თითო task-ს ჰქონდეს delete ღილაკი
// წაშლისას localStorage-იც განახლდეს.



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
paragraph.innerHTML = `hello ${user}`
form.addEventListener('submit', function(e){

    e.preventDefault()
    if(input.value.length == 0){
        user = 'guest'
    }
    paragraph.innerHTML = `hello ${user}`
    localStorage.setItem('user_name', user)
    user = input.value
    

})

