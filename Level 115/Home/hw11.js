//11)შექმენი პატარა “მათემატიკური თამაში”:
//დააგენერირე შემთხვევითი რიცხვი 1-დან 10-მდე.
//მომხმარებელს შემოატანინე რიცხვი.
//თუ მომხმარებლის რიცხვი დაემთხვა დაგენერირებულს — გამოიტანე "სწორია!",
//სხვა შემთხვევაში "ცდები!".

let guess = Math.round(Math.random() * 10 + 1)

let users = Number(prompt('Guess number: '))

if (guess == users) {

    console.log(true)

}
else {

    console.log(false)

}