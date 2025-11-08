//8)შექმენი ობიექტი student, რომელსაც ექნება "age", "grade", "height", "score" ყველა მათგანს ვალუებად მიანიჭეთ მხოლოდ ნამბერ ტიპის მონაცემები.
//for...in ციკლით გადაუარე ამ ობიექტს და კონსოლში გამოიტანე მხოლოდ ის ვალუები რომელიც მეტია 50 ზე 

let student_2 = {

    'age' : 14,
    'grade' : 9,
    'height' : 168,
    'score' : 10

}

for (let i in student_2) {

    if (student_2[i] > 50) {

        console.log(student_2[i])

    }

}

console.log('-------------------------')