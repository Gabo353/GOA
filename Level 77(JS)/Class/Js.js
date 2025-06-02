let fruit = ['mango', 'apple', 'banana', 'pear', 'watermelon']
fruit.splice(1, 3, 'ananas', 'melon')
const newList = fruit.slice('ananas', 'melon', 'grape')
console.log(newList)
console.log(fruit)


const fruits = ["1", "2", "3", "4"];
fruits.copyWithin(3, 2);
console.log(fruits)


const human = {

    gender: 'man',
    race: 'Africa',
    hair: 'Black',

    fullname : function(){

        return `gender : ${human.gender} `

    }
}
human.eye = 'green'
human.height = '6F'
console.log(human.gender)
console.log(human.hair)
console.log(human.eye)
console.log(human.height)
console.log(human['race'])
