const newMap = new Map()

newMap.set('username', 'gabo')
newMap.set('surname', 'dumbadze')

newMap.set('username', 'jamal')


console.log(newMap)
console.log(newMap.size)


const newMap_2 = new Map([

    ['apple', 400],
    ['banana', 500],
    ['jamala', 600]

])

console.log(newMap_2.clear())

console.log(newMap_2.size)
console.log(newMap_2)