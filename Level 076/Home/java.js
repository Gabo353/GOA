
//✅ დავალება 5: მასივის ელემენტები სიტყვად გადააკეთე join() მეთოდით
//js
//კოპირება
//ჩასწორება
//const letters = ["H", "e", "l", "l", "o"];
// გამოიყენე join() რომ მიიღო სიტყვა: "Hello"
//🧠 მიზანი: ისწავლო join-ის როლი ტექსტების შეერთებაში.


//1
const names = ["nika", "luka", "mari"];
let [name1, name2, name3] = names
console.log(name1,name2,name3)


//2
const points = [10, 30, 5, 2, 99];
points.push()
points.pop()
points.shift()
points.unshift()
console.log(points)


//3
const fruits = ["apple", "banana", "mango"];
let [fruit1,fruit2,fruit3] = fruits


//4
const a = [9, 3, 1];
const b = [4, 6, 5];
let con = a.concat(b)
console.log(con.sort())


//5
const letters = ["H", "e", "l", "l", "o"];
console.log(letters.join())