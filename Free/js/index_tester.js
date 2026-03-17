function first_exercise_map() {

    const numbers = [3, 5, 7, 9];
    const newArr = numbers.map(num => num * 2)
    console.log(newArr)
}

function second_exercise_map() {

    const names = ["alice", "bob", "charlie", "dave"];
    const newArr = names.map(name => name.toUpperCase())
    console.log(newArr)

}

function third_exercise_map() {

    const people = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 22 }
    ]

    const newArr = people.map(user => user.age)
    console.log(newArr)
}

function forth_exercise_map() {

    const people = [
        { name: "Alice", age: 25 },
        { name: "Bob", age: 30 },
        { name: "Charlie", age: 22 }
    ]

    const newArr = people.map(user => `${user.name} is ${user.age} years old`)
    console.log(newArr)
}


function fifth_exercise_map() {

    const nestedNumbers = [
        [1, 2, 3],
        [4, 5],
        [6, 7, 8, 9]
    ]

    const newArr = nestedNumbers.map(innermap => innermap.map(num => num * 2))
    console.log(newArr)
}


function sixth_exercise_map() {

    const students = [
        { name: "Alice", scores: [10, 20, 30] },
        { name: "Bob", scores: [15, 25, 35] },
        { name: "Charlie", scores: [12, 22, 32] }
    ]

    const newArr = students.map(student => ({
        name: student.name,
        scores: student.scores.map(score => score * 2)
    }))
    console.log(newArr)
}
sixth_exercise_map()