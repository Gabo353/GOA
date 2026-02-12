//---------------------------------1----------------------------------
//კომენტარის სახით ახსენით თუ რა არის truthy და falsy მნშიშვნელობები

// Truthy - არის ელემენტი რომელიც ლოგიკურ ოპერატორში უდრი True ბულიანს.
// Falsy - არის ელემენტი რომელიც ლოგიკურ ოპერატორში უდრი False ბულიანს.



//---------------------------------2----------------------------------
//კომენტარის სახით ახსენით თუ რა არის truthy და falsy მნშიშვნელობები

//let values = [0, "0", "", "false", false, null, undefined, [], {}, NaN, 25];
// ამ სიიდან :
// ცალკე მასივში ჩაწერე truthy მნიშვნელობები
// ცალკე მასივში ჩაწერე falsy მნიშვნელობები
// გამოიყენე for of და სიის მეთოდი რომელიც ამატემს ელემენტებს სიაში
// დაბეჭდე ორივე

let values = [0, "0", "", "false", false, null, undefined, [], {}, NaN, 25]
let truthy = []
let falsy = []

for (let i = 0; i < values.length; i++){

    values[i] ? truthy.push(values[i]) : falsy.push(values[i])

}
console.log(truthy, falsy)


//---------------------------------3----------------------------------
//შექმენი ფუნქცია register(username, password) 
// თუ ორივე მნიშვნელობა truthy არის → დაბეჭდე "Registration successful"
// თუ რომელიმე falsy არის → დაბეჭდე "All fields are required"
// გამოიძახე ფუნქცია სხვადასხვა მნიშვნელობებით და შეამოწმე შედეგი.

function register(username, password){

    username && password ? console.log("Registration successful") : console.log("All fields are required")

}
register('gabo','gabo123') //true
register('gabo','') //flase



//---------------------------------4----------------------------------
// შექმენი ცვლადი
// userName = ""
// შემდეგ შექმენი ცვლადი და ამ ცვლადს მიენიჭოს --->
// თუ userName არის truthy მიენიჭოს მასში შენახული მნიშვნელობა და თუ userName არ არის truthy მიენიჭოს "guest"
// გამოიყენე || ოპერატორი

let userName = ""
let val = ''
userName ? val = userName : val = 'guest'
console.log(val)



//---------------------------------5----------------------------------
//ternary ოპერატორის გამოყენებით დააკონსოლლოგე:
// "Positive" თუ რიცხვი მეტია 0-ზე
// "Negative or Zero" სხვა შემთხვევაში

let num = 0
num > 0 ? console.log('Positive') : console.log('Negative or Zero')


//---------------------------------6----------------------------------
// ternary-ის გამოყენებით განსაზღვრე არის თუ არა რიცხვი ლუწი.
// გამოტანე:
// "Even" თუ ლუწია
// "Odd" თუ კენტია(სხვა შემთხვევაში)

let num_2 = 10

num_2 % 2 == 0 ? console.log('even') : console.log('odd')

//---------------------------------7----------------------------------
// შექმენი ცვლადი age.
// ternary-ის გამოყენებით:
// თუ ასაკი 18-ზე მეტია ან ტოლია → "Adult"
// სხვა შემთხვევაში → "Minor"

let age = 18

age >= 18 ? console.log('Adult') : console.log('Minor')


//---------------------------------8----------------------------------
// მოცემულია ქულა score.
// ternary-ის გამოყენებით დააბრუნე:
// "Excellent" თუ 90+
// "Good" თუ 70–89
// "Fail" სხვა შემთხვევაში

let score = 100
score >= 90 ? console.log('Excellent') : 70 < score < 90 ? console.log('Good') : console.log('Fail') 

