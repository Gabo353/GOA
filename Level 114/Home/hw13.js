//13)შექმენი ობიექტი person, რომელსაც ექნება "name" და "age".
//ობიექტში დაამატე ფუნქცია სახელად showInfo, რომელიც კონსოლში გამოიტანს:`ჩემი სახელია ... და მე ვარ ... წლის ,გამოიყენე this keyword ი` ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი

let person_3 = {

    'name' : 'Gabo',
    'age' : 14,
    func : function showInfo() {

        console.log(`my name is ${this.name} and I am ${this.age} years old`)

    }

}

person_3.func()

console.log('-------------------------')