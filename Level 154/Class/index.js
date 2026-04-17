function CLassWork1() {
    const user_info = new Map([

        ['name', 'gabo'],
        ['surname', 'dumbadze'],
        ['age', 14],
        ['school', 'monparnasi'],

    ])

    user_info.set('adress', 'Batumi').set('age', 15)
    user_info.size
    user_info.delete('school')
    user_info.has('name')

    let keys_user = user_info.keys()
    let values_user = user_info.values()

    keys_user.forEach(x => console.log(x))
    values_user.forEach(x => console.log(x))

    user_info.forEach((value, key) => {
        console.log(key, value);
    });


}



// გაქვს მასივი:

let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

// შექმენი Map, სადაც:

// key = ელემენტი
// value = რამდენჯერ გვხვდება

// საბოლოოდ უნდა მიიღო მსგავსი:

// apple → 3
// banana → 2
// orange → 1

let res = new Map()


arr.forEach(x => res.set(x, 1))
arr.forEach(x => {
    if (res.has(x)){
        res.set(x, res.get(i) + 1)
    }
})

console.log(res)