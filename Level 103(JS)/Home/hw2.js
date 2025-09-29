let numbers_arr = [1,2,3,4,5,6,7,8,9,10]
let even = 0
let odd = 0
function countEvenOdd(arr){

    for (let i = 1; i <= arr.length;i++) {

        if (i % 2 === 0) {

            even += 1

        }
        else {

            odd += 1

        }
    }
    console.log('there are this many even number',even)
    console.log('there are this many odd number',odd)

}
countEvenOdd(numbers_arr)