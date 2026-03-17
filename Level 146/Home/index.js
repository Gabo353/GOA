//----------------------1--------------------
//მოცემულია მასივი const numbers = [3, 5, 7, 9]; შექმენი ახალი მასივი, სადაც ყველა რიცხვი *2 იქნება.
function HomeWork1() {

    const numbers = [3, 5, 7, 9]

    const newArr = numbers.map(num => num * 2)

    console.log(newArr)
}



//----------------------2--------------------
//გამოიყენე forEach() და იპოვე ყველა რიცხვის ჯამი. const numbers = [10, 20, 30, 40];
function HomeWork2() {

    let sum = 0
    const numbers = [10, 20, 30, 40];
    numbers.forEach(num => {

        sum += num

    })
    console.log(sum)
}


//----------------------3--------------------
//შექმენი ახალი მასივი, სადაც ყველა სახელი იქნება დიდი ასოებით.const names = ["nika", "ana", "gio"];
function HomeWork3() {

    const names = ["nika", "ana", "gio"];
    const newArr = names.map(name => name.toUpperCase())
    console.log(newArr)
}


//----------------------4--------------------
//გამოიყენე forEach() და დაბეჭდე თითოეული ელემენტი თავისი ინდექსით. const colors = ["red", "green", "blue"];
function HomeWork4() {

    const colors = ["red", "green", "blue"]
    colors.forEach((color_name, ind) => {

        console.log(color_name, ind)

    })

}


//----------------------5--------------------
//მოცემულია ობიექტების მასივი. შექმენი ახალი მასივი მხოლოდ სახელებით. 

function HomeWork5() {

    const users = [
        { name: "Nika", age: 20 },
        { name: "Ana", age: 25 },
        { name: "Gio", age: 17 }
    ]
    const newArr = users.map((names) => names.name)

    console.log(newArr)
}


//----------------------6--------------------
//გამოიყენე forEach() და დაბეჭდე მხოლოდ ის მომხმარებლები, რომლებიც 18 წელზე მეტის არიან. 

function HomeWork6() {

    const users = [
        { name: "Nika", age: 20 },
        { name: "Ana", age: 16 },
        { name: "Gio", age: 25 }
    ]

    users.forEach((person) => {

        if (person.age > 18) { console.log(person.name) }

    })

}


//----------------------7--------------------
//შექმენი ახალი მასივი, სადაც ყველა პროდუქტის ფასი 10%-ით შემცირებული იქნება.

function HomeWork7() {

    const products = [
        { name: "Phone", price: 1000 },
        { name: "Laptop", price: 2000 }
    ]

    const newArr = products.map(product_ind => `${product_ind.name}: ${product_ind.price * 10/100}`)
    console.log(newArr)
}