let starito = Number(prompt('Start:'));
let endirito = Number(prompt('End:'));
let odd_sumito = 0

function only_odd_sum(shakudush,skidish) {

    for (let z = shakudush; z <= skidish; z++) {

        if (z % 2 !== 0) {

            sum += z

        }

    }
    if (sum > 50) {

        console.log('Big sum')

    }
    else {

        console.log('small sum')

    }


}
only_odd_sum(starito,endirito)