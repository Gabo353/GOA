//.shift() - agdebs pirvels objects
//.unshift() - amatebs pirvel objects
//.pop() - agdebs bolo objects
//.push(1) - amatebs boloshi mititebul objects
//console.log(nums.indexOf(3)) - achvenebs objectis indexs


let nums = [1,2,3,4,5,6,7,8,9,10]

for (let i = 1; i < 10; i++) {

    console.log(nums[i])

}

let random = [20 , "giorgi" , 16 , 60.7 , "tbilisi" , "jora"]
let b = 0
while (b < 6) {

    console.log(random[b])
    b++

}

random[1] = 'irakli'
random[2] = 90
random[5] = 'givia'

let h = 0
while (h < 6) {

    console.log(random[h])
    h++

}