let string_number_arr = [1,'string',2,'another string',3]

function replace(arr) {

    for (let i = 1; i <= arr.length; i++) {

        if (typeof arr[i] === 'string') {

            arr[i] = true

        }

    }
    return arr
}   
console.log(replace(string_number_arr))