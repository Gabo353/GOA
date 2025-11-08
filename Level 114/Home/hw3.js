//3)შექმენი ობიექტი book, რომელსაც ექნება "book title", "author name" და "page count".
//კონსოლში გამოიტანე "book title" და "author name".


let book = {

    "book title" : 'ფრანით მარბენალი',
    "author name" : 'ხალიდ ჰოსეინი',
    "page count" : 320

}

console.log('Key:',Object.keys(book)[0],',',Object.keys(book)[1])
console.log('Values:',book['book title'],',',book['author name'])

console.log('-------------------------')