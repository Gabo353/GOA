//6)შექმენი ობიექტი person, რომელსაც ექნება "name", "age" და "city".
//for...in ციკლით გამოიტანე თითოეული key და მისი value.

let person_2 = {

    'name' : 'გაბრიელ',
    'age' : 14,
    'city' : 'batumi'

}

for (let i in person_2) {

    console.log(i,':',person_2[i])

}

console.log('-------------------------')