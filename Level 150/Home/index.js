// 4)შექმენი კლასი Product, რომელსაც ექნება:
// name, price, quantity
// მეთოდი getTotalPrice() → აბრუნებს მთლიან ფასს(ფასი გამრავლებული ოდენობაზე)
// 5)შექმენი კლასი BankAccount, რომელსაც ექნება:

// owner, balance
// მეთოდი deposit(amount) --> შეგვაქვს თანხა ანგარიშზე და ბეჭდავს განახლებულ ბალანსს
// მეთოდი withdraw(amount) --> გაგვაქვს თანხა ანგარიშიდან და ბეჭდავს დარჩენილ თანხას ანგარიშზე

// დააკონსოლლოგეთ ბოლოს მთლიანი ობიექტი რომ ნახოთ შეცვლილი ობიექტი

// 6)შექმენი კლასი Library, რომელსაც ექნება:

// books (მასივი)

// მეთოდები:

// addBook(book) ამატებს არგუმენტად გადაცემულ წიგნს სიის ბოლოში
// bookList() --- ბეჭდავს სიას იმის შემდეგ რაც წიგნი დაემატა

// 7)შექმენი კლასი Password

// ქონდეს მნიშვნელობა --> value


// მეთოდები:
// changePassword(newPass)
// checkPassword() --> გამოაქვს შეცვლილი პაროლი



//----------------1----------------
// შექმენი კლასი Car, რომელსაც ექნება:
// properties: brand, model, year
// მეთოდი getInfo(), რომელიც აბრუნებს სტრინგს მანქანის შესახებ

function ClassWork1() {
    class Car {

        constructor(brand, model, year) {
            this.brand = brand
            this.model = model
            this.year = year
        }

        getInfo() {
            console.log(`i have ${this.brand} ${this.model} and it came out in ${this.year}`)
        }

    }
    let car_info = new Car('BMW', 'm5', 2026)
    car_info.getInfo()
}


//----------------2--------------
// შექმენი კლასი User, რომელსაც ექნება:
// name, age
// მეთოდი changeName(newName) --> შეცვლის სახელს
// მეთოდი increaseAge() ---> გაზრდის ასაკს თქვენთვის სასურველი რიცხვით
// გამოიძახეთ ორივე ფუნქცია და ამის შემდეგ დააკონსოლლოგეთ მთლიანი ობიექტი

function ClassWork2() {
    class User {

        constructor(name, age) {
            this.name = name
            this.age = age
        }
        changeName(newName) {

            console.log(this.name = newName)

        }

        increaseAge(Age_plus) {
            console.log(this.age + Age_plus)
        }

    }
    let user_info = new User('Gabo', 14)
    user_info.changeName(prompt('Enter new name: '))
    user_info.increaseAge(Number(promp('Age to add: ')))
    console.log(user_info)
}


//----------------3--------------
// შექმენი კლასი Calculator, რომელსაც ექნება მეთოდები:
// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)

function ClassWork3() {
    
    class Calculator {
        constructor(first, second){
            this.first = first
            this.second = second
        }
    
        add(a, b){
            a = this.first
            b = this.second
            console.log(`add: ${a + b}`)
        }
        subtract(a, b){
            a = this.first
            b = this.second
            console.log(`subtract: ${a - b}`)
        }
        multiply(a, b){
            a = this.first
            b = this.second
            console.log(`multiply: ${a * b}`)
        }
        divide(a, b){
            a = this.first
            b = this.second
            console.log(`divide: ${a / b}`)
        }
    }
    let calc = new Calculator(Number(prompt('Num 1: ')), Number((prompt('Num 2: '))))
    calc.add()
    calc.subtract()
    calc.multiply()
    calc.divide()
}   



//----------------4--------------
// შექმენი კლასი Product, რომელსაც ექნება:
// name, price, quantity
// მეთოდი getTotalPrice() → აბრუნებს მთლიან ფასს(ფასი გამრავლებული ოდენობაზე)

function ClassWork4() {

    class Product {
        constructor(name, price, quantity){
            this.name = name
            this.price = price
            this.quantity = quantity
        }

        getTotalPrice(){
            console.log(`Total cost of ${this.name} is $${this.price * this.quantity}`)
        }

    }

    let product_info = new Product('banana', 30, 2.99)
    product_info.getTotalPrice()
} 
ClassWork4()