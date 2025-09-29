let sumery = 0
let for_summery = [1,2,3,4,5,6,7,8,9,10]

function average(arr) {

    for (let i = 1; i <= arr.length; i++) {

        sumery += i


    }
    return sumery / arr.length

}
console.log(average(for_summery))