let max_nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11,10]

function findMax(arr) {
    if (arr.length === 0) {

        return 0

    }

    let new_max = arr[0]
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] > new_max) {

            new_max = arr[i]

        }


    }
    return new_max

}
console.log(findMax(max_nums))