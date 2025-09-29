let bara = [1,2,true,'hey','bey',4,'ga']
let suma = 0
let str_count = 0

function str(arr) {

    for (let i = 0; i < arr.length; i++){

        if (typeof(arr[i]) === 'string') {

            str_count += 1

        }
        else if (typeof(arr[i]) === 'number') {

            suma += arr[i]
            
        }
    }
    return `sum is ${suma} and string count is ${str_count}`

}
console.log(str(bara))