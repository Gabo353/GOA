let users_num6 = Number(prompt('Your first number: '));
let users_num7 = Number(prompt('Your second number: '));
let high = 0

if (users_num6 > users_num7){

    high += users_num6

}
else {

    high += users_num7

}

if (high % 2 === 0) {

    console.log('highest number is even')

}
else {

    console.log('highest number is odd')


}
console.log(high)