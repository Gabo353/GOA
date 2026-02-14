




//-----------------------------1--------------------------------

function checkNumber(num){

    num > 0 ? console.log('positive') : num == 0 ? console.log('zero') : console.log('Negative')

}
checkNumber(10)
checkNumber(0)
checkNumber(-10)


//-----------------------------2--------------------------------

function GradeCategory(score){

    score >= 90 && score < 100 ? console.log('Excellent') : score <= 89 && score >= 75 ? console.log('Good') : score <= 74 && score >= 50 ? console.log('Averege') : score <= 49 && score > 0 ? console.log('Fail') :  console.log('Invalid')

}

GradeCategory(97)
GradeCategory(86)
GradeCategory(73)
GradeCategory(41)


GradeCategory(-10)
GradeCategory(101)


//-----------------------------3--------------------------------

function TriangleType(a, b ,c){

    a === b && b === c  ? console.log('Equilateral') :  a === b || a === c || b === c ? console.log("Isosceles") : console.log('Scalene')
}
TriangleType(1,1,1)

TriangleType(1,1,2)

TriangleType(1 ,2 ,3)

//-----------------------------4--------------------------------

function numberStatus(num){

    num > 0 && num % 2 == 0 ? console.log('Positive and Even') : num < 0 && num % 2 == 0 ? console.log('Negative and Even') : num > 0 && num % 2 != 0 ? console.log('Positive and odd') : console.log('Negative and odd')

}
numberStatus(10)

numberStatus(-10)

numberStatus(11)

numberStatus(-11)

//-----------------------------5--------------------------------

let name = 'adam'
let pass = '1234'

function login(username, password){

    username = prompt('Enter username: ')
    password = prompt('Enter password: ')

    username === name && password === pass ? console.log('Welcome') : username === name && password !== pass ? console.log('Wrong password') : username !== name && password === pass ? console.log('Wrong username') : console.log('Access denied')

}   

login()