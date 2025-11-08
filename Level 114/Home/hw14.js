//14)შექმენი ობიექტი car, რომელსაც ექნება "brand" და "model".
//ობიექტში დაამატე ფუნქცია სახელად fullName, რომელიც დააბრუნებს შემდეგნაირ ტიპის ტექსტს ---> `მე მყავს ... რომლის მოდელიც არის ...` ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი

let car_3 = {

    'brand' : 'Toyoya',
    'model' : 'Supra',
    func : function fullName() {

        console.log(`I have ${this.brand} which model is ${this.model}`)

    }

}

car_3.func()

console.log('-------------------------')