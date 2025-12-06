// let form = document.getElementById('form')
// let p = document.getElementsByTagName('p')
// document.addEventListener('submit', function (e) {

//     e.preventDefault()

//     for (let i in arr) {
//         if (arr[i] == '') {
//             p[i].innerText = 'Error'
//             p[i].style.color = 'red'

//         }
//     }

// })

// function Animal(name,age) {

//     this.name = name
//     this.age = age

// }

// let animal_1 = new Animal('frog',2)
// let animal_2 = new Animal('lion',19)
// let animal_3 = new Animal('elephant',64)
// let animal_4 = new Animal('tiger',34)


let  btn = document.getElementById('btn')
let list = []

function User(name,pass) {

    this.name = username
    this.pass = password

}

btn.addEventListener('click', function (){

    let username = prompt('Enter user: ')
    let pass = prompt('Enter password: ')
    let user1 = new User(username,pass);
    list.push(user1)
    console.log(list)

})