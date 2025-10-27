let array = ['hi','im','gabo','and','i','will','try','to','make','this long']

array.pop()
array.push('taxi')
array.shift()
array.unshift('iremi')

console.log(array)


console.log('----------------------------------------------')

let str_arr = ['str1','str2','str3','str4','str5','str6','str7','str8','str9','str10']

function get_info(arr) {

    console.log(arr.length)
    console.log(arr.slice(3,8))
    console.log(arr.splice(4,3))

}

let num = [1,2,3,45]
let str = ['1212','abdabds']
function breed(arr1,arr2) {

    let both = arr1.concat(arr2)
    console.log(both)

}

get_info(str_arr)
breed(num,str)