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



//----------------2---------------
// გვერდზე გაქვს ღილაკი "Toggle Theme"
// დავალება:
// დაჭერისას იცვლება background
// შეინახე არჩეული theme
// refresh-ის შემდეგ იგივე theme დარჩეს
// მინიშნება:
// შეინახე "dark" ან "light"

let button = document.getElementById('button')
let theme = localStorage.getItem('theme')

function bg_change(theme){
    if (theme === 'white'){
        document.body.style.background = 'white'
        button.style.background = 'black'
        button.style.color = 'white'
    }
    else{
        document.body.style.background = 'black'
        button.style.background = 'white'
        button.style.color = 'black'
    }
}
bg_change(theme)
button.addEventListener('click', function(){

    switch (theme){
        case 'white':
            theme = 'black'
            break;
        case 'black':
            theme = 'white'
            break;
    }
    bg_change(theme)
    localStorage.setItem('theme', theme)
})  