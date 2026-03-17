// let nums = [1, 5, 10, 15, 20]

// nums.forEach(name => {

//     name >= 10 ? console.log('pass') : console.log('not pass')

// })

// let person = {

//     name : 'gabo',
//     surname : 'dumbadze',
//     age : 15

// }

// Object.keys(person).forEach(name => {console.log(name)})


// let names = ['gabo', 'jeko', 'erekle', 'ioane']

// let Upp = names.map(name => name.toUpperCase())
// console.log(Upp)

//-------------------filter()----------------

let nums = [1, 5, 10, 15, 20]

let even = nums.filter(each_num => {

    return each_num % 2 === 0

})

//---------------findindex()--------------------

let tester = ['alexnadre', 'michle', 'lacy', 'nancy', 'jim']

let index = tester.findIndex(letter_1 => {
    return letter_1[0] === 'j';
})

//---------------reduce()-----------------------

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let sum = numbers.reduce((ac, cur) => {return ac + cur})


//--------------ClassWork-----------------
// შექმენი სია სადაც მოთავსებული იქნება ადამიანის სახელები , დაახლოებით 10 სახელი
// თქბენიდ დავალებაა რომ filter მეთოდის დახმარებით შექმნათ ახალი სია სადაც ინქებიან მხოლოდ ის სახელები რომელშიც ასობის რაოდენობა იქნება 5 ზე მეტი და და იწყება g ასოზე
// ეს დავალება შეასრულეთ single line function ითაც და ჩვეულებრივ return keyword ის გამოყენებითაც

function ClassWork1() {


    let names = ['john', 'alexnadre', 'michle', 'lacy', 'nancy', 'jim', 'robert', 'perry', 'gabriel', 'jeko']

    let newArr = names.filter(each => {

        return each.length > 5 && each[0] === 'g'

    })

    let newArr_2 = names.filter(each_2 =>
        each_2.length > 5 && each_2[0] === 'g'
    )
    console.log(newArr_2, newArr)
}


// შექმენით სია სადაც მოათავსებთ რიცხვებს,შენიდ ავალებაა რომ გაიგო სიაშ პირველი შემხვედრი ელემენტის ინდექსი რომელიც დააკმაყოფილებს შემდეგ პირობას ==>
// თუ რიცხვი არის ლუწი ან (არის 50ზე მეტი და 100 ზე ნაკლები)

function ClassWork2(){


    let nums = [38, 49, 101]

    let index = nums.findIndex(num => {

        return 100 >= num >= 50 || num % 2 == 0 

    })
    
    let index_2 = nums.findIndex(num_2 => 100 >= num_2 >= 50 || num_2 % 2 == 0 )
    console.log(index, index_2)

}

let items = [{name : 'apple', type : 'fruit'}, {name : 'carrot', type : 'vegetable'}, {name : 'banana', type : 'fruit'}]

let product = items.reduce((acc, cur) => {
    let type = items.type
    if (!acc[type]){
        acc[items.type] = []
    }
    else{
        acc[items.name] = cur.name
    }

}, {})
console.log(product)