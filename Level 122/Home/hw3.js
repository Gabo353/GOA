//3) HTML - ში შექმენი სამი ინფუთი სახელისთვის, მეილისთვის და პაროლისთვის, ასევე შექმენი Button-ი რომელზე დაჭერის შემდეგ ამუშავდება კონსტრუქტორ ფუნქცია და შექმნის User ობიექტებს. ეს ობიექტები ჩაამატე ლისტში და გამოაკონსოლე თქვენი User-ების ობიექტები.

let input = document.getElementsByTagName('input')
let btn = document.getElementById('btn')

function User(name,emali,pass) {

    this.name = name
    this.emali = emali
    this.pass = pass

}

btn.addEventListener('click', function(){

    let arr = []
    let user1 = new User(input[0].value,input[1].value,input[2].value)

    arr.push(user1)
    console.log(arr)
})
