//9)დააგენერირე 5 შემთხვევითი მთელი რიცხვი 1-დან 100-მდე და იპოვე ამ რიცხვებიდან
//მინიმალური და მაქსიმალური მნიშვნელობა Math.random(), Math.floor(), Math.min() და Math.max()-ის გამოყენებით.

let check = [];

for (let i = 0; i <= 5; i++) {
    check.push(Math.random() * 100 + 1);
}

const min = Math.min(...check)
const max = Math.max(...check)

console.log("Min:", Math.floor(min))
console.log("Max:", Math.floor(max))

console.log('----------------------------')