//9)დააგენერირე 5 შემთხვევითი მთელი რიცხვი 1-დან 100-მდე და იპოვე ამ რიცხვებიდან
//მინიმალური და მაქსიმალური მნიშვნელობა Math.random(), Math.floor(), Math.min() და Math.max()-ის გამოყენებით.

let check = []

for (let i = 0; i <= 5; i++) {

    check.push(Math.random(1,100))

}

for (let i in check) {

    Math.floor('Min:',Math.min(check[i]),'Max:',Math.max(check[i]))
    

}

console.log('----------------------------')