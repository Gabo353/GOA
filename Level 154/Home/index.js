//--------------1---------------
// შექმენი ცარიელი Map
// დაამატე:
// "name" → "Goga"
// "age" → 20
// შემდეგ:
// გამოიტანე ორივე მნიშვნელობა შესაბამისი მეთოდით

function ClassWork1() {
    let map = new Map()
    map.set('name', 'goga')
    map.set('age', 20)
    console.log(map.get('name'))
    console.log(map.get('age'))
}



//--------------2---------------
// შეამოწმე:
// არის თუ არა "apple"
// არის თუ არა "orange"
// თუ არსებობს → დაწერე "არსებობს"
// თუ არა → "არ არსებობს"
// გამოიყენე ternary

function ClassWork2() {
    let map = new Map([
        ["apple", 2],
        ["banana", 3]
    ])

    map.has('apple') ? console.log('არის') : console.log('არ არის')
    map.has('orange') ? console.log('არის') : console.log('არ არის')

}



//--------------3---------------
// წაშალე "b"
// შემდეგ დაბეჭდე განახლებული Map

function ClassWork3() {
    let map = new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3]
    ]);

    map.delete('b')
    console.log(map)

}



//--------------4---------------
// შექმენი Map რამდენიმე ელემენტით
// გამოიყენე clear()
// გადაამოწმე:
// ცარიელია თუ არა (size)

function ClassWork4() {
    let map = new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3]
    ]);

    map.clear()
    map.size === 0 ? console.log('clear') : console.log('Not clear')

}


//--------------5---------------
// დაბეჭდე მხოლოდ:
// ყველა key (for...of ითაც და forEach() ით )
// ზემოთ მოცემული Map იდან:
// დაბეჭდე:
// ყველა value

function ClassWork5() {
    let map = new Map([
        ["x", 10],
        ["y", 20],
        ["z", 30]
    ]);

    //----keys-----
    for (const key of map.keys()) {
        console.log(key)
    }
    map.forEach((x, y) => console.log(y))

    console.log('-------------------------')

    //----values----
    for (const key of map.values()) {
        console.log(key)
    }
    map.forEach((x, y) => console.log(x))


}




//--------------6---------------
// forEach-ით:
// დაბეჭდე მხოლოდ ის ელემენტები, სადაც value > 4

function ClassWork6() {
    let map = new Map([
        ["apple", 5],
        ["banana", 2],
        ["orange", 8]
    ])
    map.forEach(x => {
        if (x > 4) {
            console.log(x)
        }
    })
}



//--------------7---------------
// ერთ ხაზში (chain-ით) შექმენი Map და დაამატე:
// "a" → 1
// "b" → 2
// "c" → 3

function ClassWork7() {
    let map = new Map()

    map.set('a', 1).set('b', 2).set('c', 3)
    console.log(map)
}



//--------------8---------------
// გაქვს Map
// დაწერე კოდი, რომელიც:
// ამოწმებს თუ Map-ში 3-ზე მეტი ელემენტია → "დიდია"
// წინააღმდეგ შემთხვევაში → "პატარაა"
// გამოიყენეთ ternary

function ClassWork8() {
    let map = new Map()
    map.size > 3 ? console.log('დიდია') : console.log("პატარაა")
    map.set('a', 1).set('b', 2).set('c', 3).set('d', 4)
    map.size > 3 ? console.log('დიდია') : console.log("პატარაა")
}



//--------------9---------------
// შექმენი ახალი Map, სადაც:
// დარჩება მხოლოდ ის მნიშვნელობათა წყვილი რომლის value > 4
// გამოიყენე:forEach

function ClassWork9() {
    let map = new Map([
        ["apple", 5],
        ["banana", 2],
        ["orange", 8]
    ])

    let new_map = new Map()
    map.forEach((x, y) => {
        if (x > 4) {
            new_map.set(y, x)
        }
    })
}



//--------------10---------------
// გაზარდე ყველა value +10
// გამოიყენე:
// forEach

function ClassWork10() {
    let map = new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
        ["d", 4]
    ])
    map.forEach((x, y) => {
        map.set(y, x + 10)
    })
    console.log(map)
}


//--------------11---------------
// იპოვე:
// ყველა value-ს საშვალო

function ClassWork11() {
    let map = new Map([
        ["a", 10],
        ["b", 20],
        ["c", 30]
    ]);

    let sum = 0
    map.forEach(x => sum += x)
    console.log(sum / map.size)
}



//--------------12---------------
// შექმენი Map, სადაც:
// key = ასო
// value = რამდენჯერ გვხვდება

function ClassWork12() {

    let word = 'javascript'
    let each = [...word]
    let map = new Map()
    for (const letter of word) {
        map.set(letter,0)
    }
    for (let i = 0; i < each.length; i++){
        if (map.has(each[i])){
            map.set(each[i], map.get(each[i])+1)
        }
    }
    console.log(map)
}   



//--------------13---------------
// შექმენი Map:
// key = "even" / "odd"
// value = შესაბამისი რიცხვების მასივი

function ClassWork13() {
    let numbers = [1,2,3,4,5,6,7,8,9,10];
    let map = new Map()
    map.set('even', [])
    map.set('odd', [])
    numbers.forEach(x => x % 2 == 0 ? map.get('even').push(x) : map.get('odd').push(x))
    console.log(map)
} 
ClassWork13()