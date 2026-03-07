





//--------------------------1-------------------------

// მოცემულია ობიექტი:
// const company = {
//   name: "TechCorp",
//   location: {
//     country: "Georgia",
//     city: {
//       name: "Tbilisi",
//       street: "Rustaveli"
//     }
//   },
//   employees: [
//     { name: "Nika", age: 22 },
//     { name: "Giorgi", age: 25 }
//   ]
// }
// დესტრუქციის გამოყენებით ერთ ლაინში გამოიტანე კონსოლში:
// company name
// country
// city name
// street
// პირველი employee-ს name
// მეორე employee-ს age

function HomeWork1() {

    const company = {
        name: "TechCorp",
        location: {
            country: "Georgia",
            city: {
                name: "Tbilisi",
                street: "Rustaveli"
            }
        },
        employees: [
            { name: "Nika", age: 22 },
            { name: "Giorgi", age: 25 }
        ]
    }

    const { name: company_name, location: { country, city: { name: city_name, street } }, employees: [{ name: name1, age: age1 }, { name: name2, age: age2 }] } = company

    console.log(company_name)
    console.log(city_name)
    console.log(street)
    console.log(country)
    console.log(name1)
    console.log(age2)

}

//--------------------------2-------------------------
// დესტრუქციის გამოყენებით გამოიტანე კონსოლში:
// university name
// faculty title
// head name
// student name
// math grade
// js grade

function HomeWork2() {

    const university = {
        name: "TSU",
        faculty: {
            title: "Computer Science",
            head: {
                name: "Irakli",
                age: 50
            }
        },
        students: [
            {
                name: "Ana",
                grades: {
                    math: 90,
                    js: 95
                }
            }
        ]
    }

    const { name: university_name, faculty: { title, head: { name: head_name, age: head_age } }, students: [{ name: student_name, grades: { math, js } }] } = university

    console.log(university_name)
    console.log(title)
    console.log(head_name)
    console.log(student_name)
    console.log(math)
    console.log(js)
}

//--------------------------3-------------------------

// store name
// city
// street
// first product name
// second product price

function HomeWork3() {

    const store = {
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

    const { name: store_name, address: { city, location: { street, number } }, products: [{ name: name1, price: price1 }, { name: name2, price: price2 }] } = store

    console.log(store_name)
    console.log(city)
    console.log(street, number)
    console.log(name1, price1)
    console.log(name2, price2)

}


//--------------------------4-------------------------

// დესტრუქციის გამოყენებით გამოიტანე:
// name
// surname
// country
// city name
// street

function HomeWork4() {

    const user = {
        name: "Nika",
        surname: "Beridze",
        address: {
            country: "Georgia",
            city: {
                name: "Tbilisi",
                street: "Pekini"
            }
        }
    }

    const { name, surname, address: { country, city: { name: city_name, street } } } = user

    console.log(name)
    console.log(surname)
    console.log(country)
    console.log(city_name)
    console.log(street)

}


//--------------------------5-------------------------

// დესტრუქციის გამოყენებით გამოიტანე:
// brand
// model
// engine type
// hp
// torque


function HomeWork5() {

    const car = {
        brand: "BMW",
        model: "M5",
        engine: {
            type: "V8",
            power: {
                hp: 600,
                torque: 750
            }
        }
    }

    const {brand, model, engine : {type, power : {hp, torque}}} = car

    console.log(brand)
    console.log(model)
    console.log(type)
    console.log(hp)
    console.log(torque)

}
