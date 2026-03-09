//----------------... - spread operator------------------

function object_spread() {

    const user = {

        name: 'gabo',
        city: 'batumi',
        age: 15

    }

    const { name, ...rest } = user

    console.log(name, rest)

}


function array_spread() {

    const numbers = [1, 2, 3, 4, 5]
    const [first, second, ...others] = numbers

    console.log(first, second, others)

}


//-------------ForEach----------------

// just goes over all object/ elements
function for_each() {


    const numbers_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    numbers_list.forEach((i, ind) => {
        if (i > 4) {
            console.log(i, ind)
        }
    })

}

//   პირველი პარამეტრი ინახავს უშუალოდ მასივის (ლისტის, ობიექტის) მნიშვნელობებს. მეორე პარამეტრი ინდექს.


//----------------map---------------------
//anaxlebs masisv

function map_test() {

    const users = ['ana', 'gabo', 'zaza']

    const changedArr = users.map(us => us.toUpperCase())
    console.log(changedArr)

}


//-------------------class work-----------------

function ClassWork1() {

    store = {
        name: "MegaShop",
        address: {
            city: "Batumi",
            location: {
                street: "Chavchavadze",
                number: 10
            }
        },
        products: [
            {
                name: "Laptop",
                price: 2500
            },
            {
                name: "Phone",
                price: 1200
            }
        ]
    }

    const { name, address: city, ...rest } = store

    console.log(name)
    console.log(city)
    console.log(rest)

}

//2) მოცემულია რიცხვების სია const numbers = [5, 10, 15, 20]; forEach  ფუნქციის გამოყენებით ეკრანზე გამოიტანე ლუწი რიცხვები კვადრატში აყვანილი

function ClassWork2() {

    const numbers = [5, 10, 15, 20]
    numbers.forEach((num) => {

        if (num % 2 == 0) {

            console.log(num ** 2)

        }

    })

}

//forEach ფუნქციის გამოყენებით გაარკვიე რამდენი წლის იქნება თითოეული იუზერი 15 წლის შემდეგ. ჯერ გამოიტანე მათი სახელები და გვერდით რამდენის წლის იქნებიან მომავალში.

function ClassWork3() {

    const users = [
        { name: "Nika", age: 20 },
        { name: "Ana", age: 25 },
        { name: "Gio", age: 17 }
    ];

    users.forEach((num) => {

        console.log(num.name, num.age + 15)

    })

}

//მოცემული მასივიდა map() ფუნქციის გამოყენებით თითოეული სახელი გადაიყვანე დიდ ასოებში და თითოეული ასაკი გაამრავლე ორზე

function ClassWork4() {

    const users = [
        { name: "Nika", age: 20 },
        { name: "Ana", age: 25 },
        { name: "Gio", age: 17 }
    ];

    const changedArr2 = users.map((user) => user.age * 2)
    console.log(changedArr2)
}
ClassWork4()