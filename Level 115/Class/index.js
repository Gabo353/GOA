// math - object

//write a code which return maximum and minimum of 5 numbers

console.log(Math.min(10,-20,67,5.4,10.156))
console.log(Math.max(10,-20,67,5.4,10.156))

console.log('------------round,ceil,floor------------')

//use Math.round , Math.ceil() and Math.floor() for next number: 4.7, 9.1, -3.6

console.log('Round:',Math.round(4.7),Math.round(9.1),Math.round(-3.6))
console.log('Celi:',Math.ceil(4.7),Math.ceil(9.1),Math.ceil(-3.6))
console.log('Floor:',Math.floor(4.7),Math.floor(9.1),Math.floor(-3.6))


console.log('-----------pow-------------')

//calculate 3 * 3 * 3 * 3 , 5 * 5 , 2**1

console.log(Math.pow(3,4))
console.log(Math.pow(5,2))
console.log(Math.pow(2,1))

console.log('------------sqrt/round------------')

//calculate square root of this numbers: 25, 144, 2

let multi = Math.sqrt(25) * Math.sqrt(144) * Math.sqrt(2)
console.log(Math.round(multi))


console.log('-----------abs-------------')

//return positive numbers of: -8.3 and 5 - 12

console.log(Math.abs(-8.3))
console.log(Math.abs(5 - 12))

console.log('-----------calculate-------------')

// write a function calculate(num), which:
//         1) makes number in square
//         2) takes square root of it
//         3) and make it integer


function calculate(num) {

    let poww = Math.pow(num,2)
    
    let sqrtt = Math.sqrt(poww,2)

    return Math.round(sqrtt)

}

console.log(calculate(6.7))


console.log('-----------pythagor-------------')

//write pythagores theorem

function pythagores(a, b) {

    let first = Math.pow(a,2)
    let second = Math.pow(b,2)
    let sum = first + second
    let answer = Math.sqrt(sum)
    return answer

}

console.log(pythagores(3,4))