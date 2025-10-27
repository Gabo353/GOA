//1) შექმენით 5 ელემენტიანი მასივი და splice გაუკეთეთ 1-დან 3 ელემენტამდე. ასევე slice-ში შეინახეთ 2-დან 3 ელემენტები. ამ ამოჭრილ slice-ში შენახულ ელემენტებში ჩაამატეთ splice-ით 2 ელემენტი

//2) შექმენით 6 ელემენტიანი მასივი, წაშალეთ მასში შუა 2 ელემენტი splice-ით და ჩაამატეთ მათი ადგილას ახალი 3 ელემენტი. მიღებული მასივიდან slice-ით ამოჭერით ბოლო 2 ელემენტი.

//3) შექმენით მასივი ['a', 'b', 'c', 'd', 'e'], splice-ით ამოიღეთ 'b', 'c' და შეინახეთ ცალკე ცვლადში. ამის შემდეგ ამ ცვლადში slice-ით ამოჭერით მხოლოდ 'c'. საბოლოოდ ამ ცვლადში ჩაამატეთ ორი ახალი სიმბოლო.

//4) შექმენით რიცხვების მასივი 10-დან 60-მდე 10-ის ნამატებით. ამოაჭერით 20 და 30 და ჩაამატეთ მათი ადგილას 25 და 27. შემდეგ შექმენით ახალი მასივი slice-ით 40-დან ბოლომდე.

//5) შექმენით 7 ელემენტიანი სტრინგების მასივი. splice-ით ამოაჭერით ელემენტები ინდექსებიდან 2-დან 4-მდე. მიღებული ამოჭრილი მასივი შეინახეთ და მასში slice-ით აიღეთ პირველი ორი ელემენტი და ჩაამატეთ მასში ახალი სტრინგი 'hello'.



//1
const jemal = [1,2,3,4,5]

let scuter = jemal.splice(1,3)
let cuter = scuter.slice(2,3)
cuter.splice(0,0,10,9)

console.log(cuter)

//2
const for_six = [1,2,3,4,5,6]

for_six.splice(2,2,9,8,7)
const after_six = for_six.slice(5,7)

console.log(for_six)
console.log(after_six)

console.log('------------------------------------')


// 3
const letters = ['a', 'b', 'c', 'd', 'e']

let cut = letters.splice(1,2)
let cutted = cut.slice(0,1)
cutted.splice(1,0,'b','l')

console.log(cutted)

console.log('------------------------------------')
// 4
const nums = [10,20,30,40,50,60]

nums.splice(1,2,25,27)
let cut_1 = nums.slice(3,6)

console.log(cut_1)
console.log(nums)


//5


const str = ['hi','i','am','Gabriel','and','i','code']

let rebrand = str.splice(2,4)
let cutting_edge = str.slice(0,2)
cutting_edge.push('hello')

console.log(cutting_edge)