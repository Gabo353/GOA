//15)შექმენი ობიექტი student, რომელსაც ექნება "firstName", "lastName" და ფუნქცია სახელად getFullName(),
//რომელიც დააბრუნებს შემდეგნაირ ტექსტს --> `ჩემი სახელია ... და ჩემი გვარია ...` ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი

let student_4 = {

    'firstName' : 'Gabriel',
    'lastName' : 'Dumbadze',
    func : function getFullName() {

        console.log(`my name is ${this.firstName} and me last name is ${this.lastName}`)

    }

}

student_4.func()

console.log('-------------------------')