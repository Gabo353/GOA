let numberito = [1,2,3,4,5,6,7,8,9,10]

let even_count = 0
let odd_count = 0
function even_odd_count(arr) {

    for (let i = 1; i <= arr.length; i++) {

        if (arr[i] % 2 === 0) {

            even_count += 1

        }
        else {

            odd_count += 1

        }
    }   
    return `There are ${even_count} even numbers, and ${odd_count} odd nuumbers`
}
console.log(even_odd_count(numberito))