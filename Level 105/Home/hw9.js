let num1 = [1,2,3,6,8];

let num2 = [1,2,3,6,8,9];

let su = 0
function sumington(n1,n2,sume) {

    let both = n1.concat(n2)
    for (let i = 0; i < both.length; i++) {

        sume += both[i]

    }
    if (sume > 50 && sume % 2 === 0) {

        console.log('your number is big and its even')

    }
    else {

        console.log('sum is low and your sum is',sume)

    }

}

sumington(num1,num2,su)