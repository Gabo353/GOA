let movie = {

    name : 'adolescence',
    genre : 'psycho horror',
    rating : 9.1

}

console.log('keys:')

for (let i = 0; i < Object.keys(movie).length; i++) {

    console.log(Object.keys(movie)[i])

}

console.log('----')

console.log('values:')

for (let i = 0; i < Object.values(movie).length; i++) {

    console.log(Object.values(movie)[i])

}

console.log('--------------------------')
