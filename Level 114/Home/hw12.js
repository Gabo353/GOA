//12)შექმენი ობიექტი book, რომელსაც ექნება "title", "author", "genre", "lang".
//ყველა მიანიჭე სტრინგი.
//for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომლებიც შეიცავენ ასო "o"-ს.

let book_2 = {

    'title': 'Me, my Grandma, ilia and ilarion',
    'author': 'Nodar dumbadze',
    'genre': 'comedy',
    'lang': 240

}


for (let key in book_2) {
    if (String(book_2[key]).includes("o")) {

        console.log(book_2[key]);

    }

}

console.log('-------------------------')