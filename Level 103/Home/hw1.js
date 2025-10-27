let arr = [1,2,3,5,6,7,8,9,10]
let summington = 0
function sumsumArray() {

    for (let i = 1; i <= arr.length+1;i++) {

        summington += i

    }
    console.log(summington)
}
sumsumArray(arr)