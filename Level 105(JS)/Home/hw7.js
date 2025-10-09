let ten = [1,2,3,4,5,6,7,8,9,10];

let speci = []

let spe_sum = 0

function tening(tin,spe,sume) {

    for (let i = 0; i <= tin.length; i++) {

        if (i % 2 == 0 && i % 5 == 0) {

            spe.push(spe[i])

        }

    }

    for (let i = 0; i < spe.length; i++) {

        sume += spe[i]

    }
    console.log(sume)
}   

tening(ten,speci,spe_sum)

console.log('----------------------------------')
