let min_nums = [3, 2, 1, 4, 5, 6, 7, 8, 9,10]

function findMax(arr) {
    if (arr.length === 0) {

        return 0

    }

    let new_min = arr[0]
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] < new_min) {

            new_min = arr[i]

        }


    }
    return new_min

}
console.log(findMax(min_nums))
