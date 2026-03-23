//-------------------1-----------------
// გამოიყენე filter რათა შექმნა ახალი მასივი, რომელიც შეიცავს მხოლოდ 18 წლის ან უფრო უფროს სტუდენტებს.
// გამოიყენე მხოლოდ ერთი ხაზის ფუნქცია
function ClassWork1() {

    const students = [
        { name: "ანა", age: 17, grade: 9 },
        { name: "ლაშა", age: 20, grade: 12 },
        { name: "მარიამი", age: 18, grade: 11 },
        { name: "გიორგი", age: 16, grade: 10 }
    ];

    let newArr = students.filter(each => each.age >= 18)
    console.log(newArr)
}


//-------------------2-----------------
// შექმენი მასივი პოსტების ობიექტებით:
// გამოიყენე filter, რათა გამოარჩიო მხოლოდ ის პოსტები, რომლებმაც 100-ზე მეტი ლაიქი მიიღო.
// თითოეული ობიექტი შენახე ახალი მასივში და დაბეჭდე.
function ClassWork2() {

    const posts = [
        { id: 1, title: "JavaScript Basics", likes: 150 },
        { id: 2, title: "CSS Tricks", likes: 75 },
        { id: 3, title: "React Guide", likes: 200 },
        { id: 4, title: "Node.js Tips", likes: 50 }
    ]

    let newArr = posts.filter(each => each.likes > 100)
    console.log(newArr)

}


//-------------------3-----------------
// შექმენი მასივი სტატიის ობიექტებით:
// გამოიყენე filter, რათა გამოყო მხოლოდ ის სტატია, რომელიც შეიცავს სიტყვას "JavaScript".
// სიტყვა არ არის case-sensitive.

function ClassWork3() {

    const articles = [
        { id: 1, content: "Learning JavaScript is fun" },
        { id: 2, content: "CSS animations are cool" },
        { id: 3, content: "Advanced JavaScript techniques" },
        { id: 4, content: "HTML basics" }
    ]

    let newArr = articles.filter(each => each.content.includes('JavaScript'))
    console.log(newArr)
}



//-------------------4-----------------
// შექმენი მასივი პროდუქტების ობიექტებით.
// მოითხოვე:
// შექმენი მასივი, რომელიც შეიცავს მხოლოდ ხილის ტიპის პროდუქტებს.
// დაამატე დამატებითი პირობა: ფასი უნდა იყოს 2-ზე მეტი.

function ClassWork4() {

    const products = [
        { name: "ვაშლი", type: "ხილი", price: 2 },
        { name: "სტაფილო", type: "ბოსტნეული", price: 1 },
        { name: "ბანანი", type: "ხილი", price: 3 },
        { name: "კარტოფილი", type: "ბოსტნეული", price: 2 },
        { name: "მანგო", type: "ხილი", price: 5 }
    ]

    let newArr = products.filter(each => each.type === 'ხილი' && each.price > 2)
    console.log(newArr)
}


//-------------------5-----------------
// შექმენი მასივი თანამშრომელთა ობიექტებით.
// მოითხოვე:
// გამოიყენე filter, რათა გამოარჩიო IT დეპარტამენტის თანამშრომლები, რომელთა ანაზღაურება 1500-ზე ნაკლებია და ასაკი 30-ზე ნაკლებია.
// დაბეჭდე მხოლოდ მათი სახელები.
// გამოგადგებათ map იც

function ClassWork5() {

    const employees = [
        { name: "მარიამი", age: 25, department: "IT", salary: 1300 },
        { name: "გიორგი", age: 30, department: "HR", salary: 900 },
        { name: "ანა", age: 22, department: "IT", salary: 1000 },
        { name: "ლაშა", age: 28, department: "Finance", salary: 1500 },
        { name: "ნინო", age: 35, department: "IT", salary: 2000 }
    ]

    let newArr = employees.filter(each => each.department === 'IT' && each.salary < 1500 && each.age < 30).map(per => per.name)
    console.log(newArr)
}


//-------------------6-----------------
// დავალება:
// გამოიყენე findIndex, რათა იპოვო პირველი თანამშრომელი IT დეპარტამენტში, რომლის ანაზღაურება 1500-ზე ნაკლებია და ასაკი 30-ზე ნაკლებია.
// დაბეჭდე index და იმ თანამშრომლის ობიექტიც.

function ClassWork6() {

    const employees = [
        { name: "მარიამი", age: 25, department: "IT", salary: 1200 },
        { name: "გიორგი", age: 30, department: "HR", salary: 900 },
        { name: "ანა", age: 22, department: "IT", salary: 1000 },
        { name: "ლაშა", age: 28, department: "Finance", salary: 1500 },
        { name: "ნინო", age: 35, department: "IT", salary: 2000 }
    ]

    let newArr = employees.findIndex(ind => ind.department === 'IT' && (ind.salary < 1500 && ind.age < 30))
    let newInfo = employees.filter(each => each.department === 'IT' && (each.salary < 1500 && each.age < 30))
    console.log(newArr, newInfo[0])

}



//-------------------7-----------------
// ზემოთ მოცემულ ობიექტში ==> .
// იპოვე პირველი თანამშრომელი, რომლის ასაკი < 25.
// დაბეჭდე თანამშრომლის ობიექტი და ინდექსი.

function ClassWork7() {

    const employees = [
        { name: "მარიამი", age: 25, department: "IT", salary: 1200 },
        { name: "გიორგი", age: 30, department: "HR", salary: 900 },
        { name: "ანა", age: 22, department: "IT", salary: 1000 },
        { name: "ლაშა", age: 28, department: "Finance", salary: 1500 },
        { name: "ნინო", age: 35, department: "IT", salary: 2000 }
    ]

    let newArr = employees.filter(each => each.age < 25)
    let newInd = employees.findIndex(each => each.age < 25)

    console.log(newArr, newInd)
}


//-------------------8-----------------
// იპოვე პირველი თანამშრომელი, რომელიც მუშაობს Finance დეპარტამენტში და ასაკი > 25.
// დაბეჭდე ინდექსი.

function ClassWork8() {

    const employees = [
        { name: "მარიამი", age: 25, department: "IT", salary: 1200 },
        { name: "გიორგი", age: 30, department: "HR", salary: 900 },
        { name: "ანა", age: 22, department: "IT", salary: 1000 },
        { name: "ლაშა", age: 28, department: "Finance", salary: 1500 },
        { name: "ნინო", age: 35, department: "IT", salary: 2000 }
    ]

    let newInd = employees.findIndex(each => each.age > 25 && each.department === 'Finance')

    console.log(newInd, employees[newInd])

}


//-------------------9-----------------
// იპოვე პირველი თანამშრომელი, რომლის ანაზღაურება > 1500.
// დაბეჭდე მისი სახელი და ანაზღაურება.

function ClassWork9() {

    const employees = [
        { name: "მარიამი", age: 25, department: "IT", salary: 1200 },
        { name: "გიორგი", age: 30, department: "HR", salary: 900 },
        { name: "ანა", age: 22, department: "IT", salary: 1000 },
        { name: "ლაშა", age: 28, department: "Finance", salary: 1500 },
        { name: "ნინო", age: 35, department: "IT", salary: 2000 }
    ]

    let newArr = employees.findIndex(each => each.salary > 1500)
    let name = employees[newArr].name
    let salary = employees[newArr].salary
    console.log({ name, salary })

}


//-------------------10-----------------
// იპოვე პირველი თანამშრომელი, რომელიც IT დეპარტამენტშია, ასაკი < 30, ანაზღაურება < 1500, სახელი იწყება “ა” ასოთი.
// დაბეჭდე ინდექსი და ობიექტი.

function ClassWork10() {

    const employees = [
        { name: "მარიამი", age: 25, department: "IT", salary: 1200 },
        { name: "გიორგი", age: 30, department: "HR", salary: 900 },
        { name: "ანა", age: 22, department: "IT", salary: 1000 },
        { name: "ლაშა", age: 28, department: "Finance", salary: 1500 },
        { name: "ნინო", age: 35, department: "IT", salary: 2000 }
    ]

    let newArr = employees.filter(each => each.department === 'IT' && each.age < 30 && each.salary < 1500 && each.name.startsWith('ა'))
    let index = employees.findIndex(each => each.department === 'IT' && each.age < 30 && each.salary < 1500 && each.name.startsWith('ა'))
    console.log(index, newArr)

}


//-------------------11-----------------
// მოცემულია მასივი:
// const numbers = [5, 10, 15, 20];
// გამოიყენე reduce, რათა გამოითვალოს ყველა რიცხვის ჯამი.
// დაბეჭდე შედეგი.

function ClassWork11() {

    const numbers = [5, 10, 15, 20];

    let sum = numbers.reduce((acc, cur) => acc + cur)
    console.log(sum)

}

//-------------------12-----------------
// მოცემულია მასივი პროდუქტების ობიექტებით:
// გამოიყენე reduce, რათა გამოითვალოს პროდუქტების საერთო ფასი.
// დაბეჭდე შედეგი.

function ClassWork12() {

    const products = [
        { name: "ვაშლი", price: 2 },
        { name: "ბანანი", price: 3 },
        { name: "სტაფილო", price: 1 }
    ]

    let sum = products.reduce((acc, cur) => acc + cur.price, 0)
    console.log(sum)

}

//-------------------13-----------------
// მოცემულია მასივი სტუდენტების სახელებით:
// გამოიყენე reduce, რათა შექმნა ერთი სტრინგი, სადაც ყველა სახელი იქნება ხაზით -.
// შედეგი უნდა იყოს: "ანა-ლაშა-გიორგი-ნინო".

function ClassWork13() {

    const students = ["ანა", "ლაშა", "გიორგი", "ნინო"];

    let all = students.reduce((acc, cur) => acc +'-'+ cur)
    console.log(all)

}
