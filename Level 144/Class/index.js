


const newArr = ['salamandra', 'lezginka', 'seroja', 'kiseli', 'zviangi', 'isara', 'kibezefeximocurebadze']

const [name1, name2, name3, name4, name5, name6, name7] = newArr

console.log(name1, name3, name4, name6, name7)

const person = {

    name1: 'gabo',
    age: 15,

}

const { name, age, surnmae } = person

console.log(`me var ${name}. Var ${age} wlis`)



let object_arr = [

    {

        name: 'gabo',
        surname : 'dumbdaze'

    },

    {

        name: 'jeko',
        surname : 'nigaradze'

    },

    {

        name: 'beqa',
        surname : 'lomadze'

    }
]

const [object1, object2, object3] = object_arr

const person1 = [object1.name, object1.surname]
const person2 = [object2.name, object2.surname]
const person3 = [object3.name, object3.surname]

console.log(person1, person2, person3)