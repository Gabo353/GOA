//8)შექმენი 5 ცალი i თეგი და მოათავსე რაიმე ტექსტი შიგნით,შენი დავცალებაა რომ წამოიღო ყველა i თეგი და შეინახო ცვლადში,შენი დავალებააა რომ ყველა i თეგში მყოფი ტექსტი textContent ის გამოყენებით შეცვალო --> "viri" ით /გამოიყენე while loop/for loop ორივე

let ies = document.getElementsByTagName("i")

for (let b of ies) {

    b.textContent = 'virir'
    
}

let count = 0
//while (count < ies.length) {

//    ies[count].textContent = 'virir'
//    count += 1

//}