let users_num = Number(prompt('Your number:'));
let sum = 0
for (let i = 1; i <= users_num; i++) {

    sum += i
    

}

let avarege = sum / users_num

if (avarege >= 20 && avarege % 2 == 0) {

    console.log("good mark")

}
else if (avarege < 20 && avarege % 2 != 0) {

    console.log('bad mark')

}