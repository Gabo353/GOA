//9)შექმენი ობიექტი movie, რომელსაც ექნება "title", "genre", "rating", "year" და ყველას მიანიჭეთ სტრინგ ტიპის მონაცემი.
//for...in ციკლით გადაუარეთ ობიექტს და გამოიტანეთ მხოლოდ ის სტრინგები რომელთა სიგრძე ნაკლებია 4 ზე

let movie_2 = {

    'title' : 'Green book',
    'genre' : 'comedy',
    'rating' : '9.1',
    'year' : '2011'

}

for (let i in movie_2) {

    if (movie_2[i].length < 4) {

        console.log(movie_2[i])

    }

}

console.log('-------------------------')