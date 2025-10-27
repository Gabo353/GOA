number = [1,2,3,4,5,7,12,56];

arr_even = []
arr_odd = []

for (let i = 0; i < number.length;i++) {

    if (number[i] % 2 === 0) {

        arr_even.push(number[i])

    }
    else if(number[i] % 2 !== 0){

        arr_odd.push(number[i])

    }
}
console.log(arr_even,arr_odd)