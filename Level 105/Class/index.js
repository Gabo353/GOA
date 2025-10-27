let arr = []

let users = Number(prompt('Your num:'));

for (let count = 1; count <= users;count += 3) {

    arr.push(count)


}

console.log(arr)

for (let num = 1;num <= arr.length; num ++) {

    if (arr[num] % 2 == 0) {

        console.log(arr[num],'even')
        
    }

}