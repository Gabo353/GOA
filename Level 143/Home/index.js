// 15)დაწერე single-line arrow function, რომელიც იღებს name და age-ს და აბრუნებს ობიექტს ამ ველებით


// ----------------------------------1------------------------------
// მომხმარებელს შემოატანინე რიცხვი (1–7).
// switch–case გამოყენებით გამოიტანე შესაბამისი კვირის დღე.
// თუ სხვა რიცხვია → "არასწორი დღე".


function home_work_1() {
    let user_guess = prompt('Any number 1-7: ')
    switch (user_guess) {
        case '1':
            console.log('Monday')
            break;
        case '2':
            console.log('Tuesday')
            break;
        case '3':
            console.log('Wednesday')
            break;
        case '4':
            console.log('Thursday')
            break;
        case '5':
            console.log('Friday')
            break;
        case '6':
            console.log('Saturday')
            break;
        case '7':
            console.log('Sunday')
            break;
        default:
            console.log('wrong num')
    }

}

// ----------------------------------2------------------------------
// მომხმარებელს შემოატანინე თვის ნომერი (1–12).
// switch–case გამოყენებით განსაზღვრე სეზონი:

function home_work_2() {

    let user_guess_2 = prompt('Any number 1-12: ')
    switch (user_guess_2) {
        case '3':
            console.log('Spring')
            break;
        case '4':
            console.log('Spring')
            break;
        case '5':
            console.log('Spring')
            break;
        case '6':
            console.log('Summer')
            break;
        case '7':
            console.log('Summer')
            break;
        case '8':
            console.log('Summer')
            break;
        case '9':
            console.log('Autumn')
            break;
        case '10':
            console.log('Autumn')
            break;
        case '11':
            console.log('Autumn')
            break;
        case '12':
            console.log('Winter')
            break;
        case '1':
            console.log('Winter')
            break;
        case '2':
            console.log('Winter')
            break;
        default:
            console.log('wrong num')
    }

}


// ----------------------------------3------------------------------
// მომხმარებელს შემოატანინე:
// პირველი რიცხვი
// ოპერატორი (+, -, *, /)
// მეორე რიცხვი
// switch–case გამოყენებით შეასრულე ოპერაცია.
// თუ ოპერატორი არასწორია → "არასწორი ოპერატორი".

function home_work_3() {

    let num_1 = prompt('First number: ')
    let symbol = prompt('Mathematical operator: ')
    let num_2 = prompt('Second number: ')

    switch (symbol) {

        case '+':
            console.log(Number(num_1) + Number(num_2))
            break;
        case '-':
            console.log(Number(num_1) - Number(num_2))
            break;
        case '*':
            console.log(Number(num_1) * Number(num_2))
            break;
        case '/':
            console.log(Number(num_1) / Number(num_2))
            break;
        default:
            console.log('Wrong Symbol')
    }

}

// ----------------------------------4------------------------------
// მომხმარებელს შემოატანინე ქულა (0–100).
// switch(true) <--მოიძიეთ ///// გამოიყენე და დააბრუნე:
// 90–100 → A
// 80–89 → B
// 70–79 → C
// 60–69 → D
// <60 → F

function home_work_4() {

    let user_guess_score = prompt('Score: ')

    switch (true) {

        case (user_guess_score > 100):
            console.log('Invalid score')
            break;
        case (user_guess_score >= 90):
            console.log('A')
            break;
        case (user_guess_score >= 80):
            console.log('B')
            break;
        case (user_guess_score >= 70):
            console.log('C')
            break;
        case (user_guess_score >= 60):
            console.log('D')
            break;
        case (user_guess_score < 60):
            console.log('F')
            break;
    }

}


// ----------------------------------5------------------------------
//მომხმარებელს შემოატანინე ტექსტი:
// "car", "bus", "bike", "train"
// switch–case გამოყენებით დაბეჭდე შესაბამისი აღწერა.
// default შემთხვევაში → "უცნობი ტრანსპორტი".

function home_work_5() {

    let user_transport = prompt('Insert transport: ')

    switch (user_transport) {

        case 'taxi':
            console.log('Littel yellow car, but only for you!')
            break;
        case 'bus':
            console.log('A bit larger car, but for community. also is cheaper!')
            break;
        case 'bike':
            console.log('Two-wheeled transport and your the driver. only for you')
            break;
        case 'train':
            console.log('Very big transport. Used by largest amount of people amongs other transports!')
            break;
        default:
            console.log('some other transport')
    }

}

// ----------------------------------6------------------------------
// მომხმარებელს შემოატანინე რიცხვი.
// switch(true) გამოყენებით განსაზღვრე:
// თუ არის 0
// თუ არის ლუწი
// თუ არის კენტი

function home_work_6() {

    let user_guess_3 = Number(prompt('Enter number: '))

    switch (true) {

        case (user_guess_3 == 0):
            console.log('Num is Zero')
            break;
        case (user_guess_3 % 2 == 0):
            console.log('Num is Even')
            break;
        default:
            console.log('Num is odd')
    }

}


// ----------------------------------7------------------------------
// ცვლადი role:
// შეამოწმე თუ ცვლადში ინახება შემდეგი მნშვნელობები გამოიტანე შესაბამისი ტექსტი
// "admin"
// "user"
// "guest"
// switch–case-ით განსაზღვრე წვდომა.
// თუ სხვა მნიშვნელობაა -> default ->
// "როლი არ არის განსაზღვრული"

function home_work_7() {

    let role = prompt('Your Role: ')

    switch (role) {

        case 'admin':
            console.log('You are admin')
            break;
        case 'user':
            console.log('You are user')
            break;
        case 'guest':
            console.log('You are guest')
            break;
        default:
            console.log('stranger')
    }
}


// ----------------------------------8------------------------------
// მომხმარებელს შემოატანინე ფერი:
// "red", "green", "blue"

// switch–case-ით დაბეჭდე შესაბამისი ტექსტი.
// თუ სხვა ფერია → default →
// "ასეთი ფერი სისტემაში არ არის"

function home_work_8() {

    let color = prompt('Choose color: ')

    switch (color) {

        case 'red':
            console.log('You chose Red.We have red in our system.')
            break;
        case 'green':
            console.log('You chose Green.We have green in our system.')
            break;
        case 'blue':
            console.log('You chose Blue.We have blue in our system.')
            break;
        default:
            console.log('We do not have color that you selected in our system.')
    }
}


// ----------------------------------9------------------------------
// დაწერე single-line arrow function, რომელიც იღებს ორ რიცხვს და აბრუნებს მათ ჯამს.

function home_work_9() {

    let num1 = Number(prompt('Number_1: '))
    let num2 = Number(prompt('Number_2: '))

    const sum = (a, b) => a + b;

    console.log(sum(num1, num2))
}

// ----------------------------------10------------------------------
//დაწერე single-line arrow function, რომელიც იღებს რიცხვს და აბრუნებს:
// "ლუწი" თუ ლუწია
// "კენტი" თუ კენტია
// (გამოიყენე ternary)

function home_work_10() {

    let number_for_even_or_odd = Number(prompt('Number to check'))

    const even_or_odd = num => num % 2 == 0 ? console.log('Even') : console.log('odd')
    even_or_odd(number_for_even_or_odd)

}


// ----------------------------------11------------------------------
//დაწერე single-line arrow function, რომელიც აბრუნებს გადაცემული რიცხვის კვადრატს.


function home_work_11() {

    let number_in_square = Number(prompt('Number to Square'))

    const square = num => console.log(num ** 2)
    square(number_in_square)

}

// ----------------------------------12------------------------------
//დაწერე single-line arrow function, რომელიც იღებს ტექსტს და აბრუნებს მის სიგრძეს


function home_work_12() {

    let text_length = prompt('Text to check')

    const text_length_check = txt => console.log(txt.length)
    text_length_check(text_length)

}

// ----------------------------------13------------------------------
//დაწერე single-line arrow function, რომელიც ტექსტს აბრუნებს მთლიანად დიდი ასოებით.


function home_work_13() {

    let text_upper = prompt('Text to upper')

    const text_to_upper = txt => console.log(txt.toUpperCase())
    text_to_upper(text_upper)

}


// ----------------------------------14------------------------------
// 14)დაწერე single-line arrow function, რომელიც იღებს ასაკს და აბრუნებს
// "სრულწლოვანი" თუ >= 18
// "არასრულწლოვანი" თუ < 18


function home_work_14() {

    let age = Number(prompt('age'))

    const ageer = age => age >= 18 ? console.log('adult') : console.log('Not adult')
    ageer(age)

}

// ----------------------------------15------------------------------
// დაწერე single-line arrow function, რომელიც იღებს name და age-ს და აბრუნებს ობიექტს ამ ველებით

function home_work_15() {
    let person_acc = { 'name': 'age' }
    let name = prompt('Name: ')
    let age = prompt('Age: ')

    const personer = (newName, newAge) => {
        person_acc.name = newName 
        person_acc.age = newAge 
    }

    personer(name, age)
    console.log(person_acc)
}
