let my_name = 'gabo'
function number_1(){

    return my_name

}   
console.log(number_1())

let my_second_name = 'gabo'
let my_age = 14
let my_home = 'batumi'
function number_2() {

    return `hello, i'm ${my_second_name}, i'm ${my_age} years old and i live in ${my_home} `

}
console.log(number_2())

function number_3(num1,num2){

    return num1 + num2

}
console.log(number_3(1,3))
console.log(number_3(4,17))
console.log(number_3(33,332))
console.log(number_3(-1,54))
console.log(number_3(67,56))


function number_4(num1){

    for (let i = 1; i < num1;i++) {

        console.log(i)

    }

}
number_4(1)
number_4(17)
number_4(33)
number_4(54)
number_4(67)