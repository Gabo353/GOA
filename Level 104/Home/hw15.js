let last = [1,2,3,4,5,'last','hw']

let of = [5,6,7]
function lasting(an,ah) {

    an.unshift('Start')
    an.push('End')

    an.shift()
    an.pop()

    let both = an.concat(ah)
    console.log(an)

    for (let yey = 1;yey <= both.length; yey++) {

        console.log(yey)

    }
    console.log(`the length of array is ${both.length}`)

}

lasting(last,of)