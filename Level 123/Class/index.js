// function Student(name,surname,date) {

//     this.name = name
//     this.date = date
//     this.surname = surname
//     this.info = function(){

//         console.log(`Hi im ${name}, and my surname is ${surname}. And i joined GOA in ${date}!`)

//     }

// }

// let student_1 = new Student('Gabo','Dumbadze',2024)

// student_1.info()



// let inputs = document.getElementsByTagName('input')
// let btn = document.getElementsByTagName('button')
// let p = document.getElementById('p')
// let body = document.getElementById('body')

// btn[0].addEventListener('click', function () {

//     function Student(name, age) {
//         this.name = name
//         this.age = age
//         this.info = function () {

//             return `Hi I'm ${name}, and I'm ${age} years old`

//         }

//     }

//     let student_1 = new Student(inputs[0].value, inputs[1].value)

//     p.innerHTML = student_1.info()

//     body.appendChild(p)

// })


let inputs = document.getElementsByTagName('input')
let body = document.getElementById('body')
let btn = document.getElementsByTagName('button')
let p = document.getElementById('p')


btn[0].addEventListener('click', function () {

    function Travel(age, year) {

        this.age = age
        this.year = year
        this.calc = function () {

            return Number(age) + Number(year)

        }
        

    }
    let calculated = new Travel(inputs[0].value, inputs[1].value)

    p.innerHTML = calculated.calc()

    body.appendChild(p)
    
})