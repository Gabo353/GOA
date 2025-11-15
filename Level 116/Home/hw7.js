//7)შექმენი 6 ცალი პარაგრაფი,წამოიღე ყველა პარაგრაფი tagName ის გამოყენებით და შეინახე ცვალადში,შემდეგ დააკონსოლლოგე იმ სიის სიგრძე რომელშიც ინახავ ყველა პარაგრაფს////ასევე ამ სიას გადაუარე for ციკლით და გამოიტანე თითოეული ელემენტის textContent ცალ ცალკე

let paragraph_3 = document.getElementsByTagName("p")

console.log(paragraph_3.length)

for (let i = 0; i < paragraph_3.length; i++) {

    console.log(paragraph_3[i].textContent)

}