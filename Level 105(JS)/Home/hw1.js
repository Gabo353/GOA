let num_arr = [1,2,3,4,5,6,7,8,9,10];
let eve_sum = [];
let sum = 0;

function sumer(arr,bum,eum){

    for (let i = 0; i <= arr.length; i++) {
        
        if (arr[i] % 2 == 0) {

            eum.push(arr[i])

        }

    }
    for (let i = 0; i < eve_sum.length;i++) {

        bum += eve_sum[i]

    }
    console.log('sum of arr',bum)
    console.log('sum of even nums',eum)
}
sumer(num_arr,sum,eve_sum)

console.log('----------------------------------')