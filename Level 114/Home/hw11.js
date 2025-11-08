//11)შექმენი ობიექტი student, რომელსაც ექნება "firstName", "lastName", "class", "id".
//ყველა იყოს სტრინგი.
//for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომელთა სიგრძე ტოლია 3-ის.

let student_3 = {

    'firstName' : 'Gab',
    'lastName' : 'Dumabdze',
    'class' : '9-A',
    'id' : '147892',

}

for (let i in student_3) {

    if (student_3[i].length == 3) {

        console.log(student_3[i])

    }

}

console.log('-------------------------')