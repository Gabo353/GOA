//1)შექმენი სიას სადაც შეინახავ რამდენიმე ობიექტს, ყველა ობიექტში იყოს მსგავსი კიები მაგ: name ,surname , email , შენი დავალებაა რომ მოახდინო სიის დესტრუქცია შემდეგ თითოეული ობიექტის 
// დესტრუქცია და მათი მნიშვნელოობების დაბეჭდვა,სიაში იყოს მინიმუმ 3 ობიექტ


function ClassWork1() {

    let object_arr = [
        {
            name: 'gabo',
            surname: 'dumbadze',
        },
        {
            name: 'jeko',
            surname: 'puthko',
        },
        {
            name: 'erkele',
            surname: 'phutkoradze',
        },
    ]
    const [user1, user2, user3] = object_arr
    const { name: name1, surname: surname1 } = user1
    const { name: name2, surname: surname2 } = user2
    const { name: name3, surname: surname3 } = user3
    console.log(name1, surname1)
    console.log(name2, surname2)
    console.log(name3, surname3)

}

let name_inp = document.getElementById('name')
let surnmae = document.getElementById('surname')
let btn = document.getElementById('btn')

function ClassWork2() {

    const person = {

    }

    const { name = name_inp.value, surname = surnmae.value, age = 34, email = 'NoneOfOurBusness@gmail.com' } = person
    console.log(name, surname, age, email)

}
btn.addEventListener('click', ClassWork2)



const user = [{
    name: "nika",
    surname: "nishnianidze",
    address: {
        city: {
            street: "beliashvili"
        },
        country: "Georgia"
    }
}]


const [{name, surname, address, address : {city, city : {street},country}}] = user

console.log(name)
console.log(surname)
console.log(address)
console.log(city)
console.log(country)
console.log(street)