let alphabet = ['before me is','the first letter','aftre me','is the last letter'];

let my_arr = ['hi','im gabo'];

function all(not_my,mine) {

    console.log('before')
    console.log(not_my)

    console.log('this is mid process')
    not_my.unshift('a')
    not_my.push('z')
    console.log(not_my)

    console.log('this is after removal')
    not_my.pop()
    not_my.shift()
    console.log(not_my)

    console.log('this is after addings')
    let both = not_my.concat(mine)
    console.log(both)

    console.log('finnal stats:')
    console.log(`this it finnal length: ${both.length}. And this is array its self`,both)

}

all(alphabet,my_arr)

console.log('-----------------------------------------')
