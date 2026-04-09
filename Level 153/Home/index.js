//-----------------Map methods--------------------
const map_1 = new Map([

    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]

])



// 1) Map.get() - გვაძლევს ნებას გავიგოთ map - ის ნებისმიერი ket - ს value.

console.log(map_1.get('bananas')) // გამოიტანს 300


// 2) Map.set() - გვაძლევს ნებას დავამატოთ map - ში ნებისმიერი ელემენტი.

map_1.set('mango', 100) // არსებულ map - ს დაემატება

const map_2 = new Map() // მუშაობს ცარიელ map - ზეც
map_2.set('name', 'mamuka')


// 3) Map.size - გამოაქვს თუ რამდენი ელემენტია map - ში

console.log(map_1.size) // გამოიტანს 4.

// 4) Map.delete() - გვაძლევს ნებას მოვაშოროთ ნებისმიერი ელემნტი map - იდან.

map_1.delete('mango') // მოაშორებს 'mango' - ს  map - იდან.

// 5) Map.clear() - გვაძლევს ნებას მოვაშოროთ ყველა ელემენტი map - იდან.

map_2.clear() // აშორებს ყველა ელემენტს.

// 6) Map.has() - გვაძლევს ნებას გავიკოთ აქვს თუ არა map - ს კონკრეტული ელემენტი.

map_1.has('apples') // გამოიტანს true
map_1.has('watermelon') // გამოიტანს false

// 7) Map.forEach() - გვაძლევს ნებას მივწვდეთ ყველა ელემენტის keys - ს და value - ს სათითაოდ.

let keys = "";
let values = "";
map_1.forEach (function(value, key) {
  keys += key;
  values += value;
})
console.log(keys)
console.log(values)

// 8) Map.entries() - გვაძლევს ნებას მივწვდეთ ყველა ელემენტის keys - ს და value - ს ერთად.
let object = ''
for (let x of map_1.entries()){
    object += '/' + x
}
console.log(object)

// 9) Map.keys() - გვაძლევს ნებას მივწვდეთ map - ის ყველა ელემენტის keys.
map_1.keys() //გამოიტანს { 'apples', 'bananas', 'oranges' }

// 10) Map.values() - გვაძლევს ნებას მივწვდეთ map - ის ყველა ელემენტის values.
map_1.values() //გამოიტანს { 500, 300, 200 }


// 11) Map.groupBy() - გვაძლევს ნებას დავაჯგუფოთ ელემენტები.

const student_info = [

    {name:'gabo', grade:100},
    {name:'jeko', grade:80},
    {name:'io', grade:70}

]

function category({grade}){
    return Number(grade) > 80 ? 'A' : 'B'
}
const result = Map.groupBy(student_info,category)
console.log(result)