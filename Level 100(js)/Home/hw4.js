let users_score = Number(prompt('Your score: '));
if (users_score < 50) {

    console.log('You failed')

}
else if (users_score > 50 && users_score < 69) {

    console.log('avarege')

}
else if (users_score > 70 && users_score < 89) {

    console.log('good')

}
else if (users_score > 90 && users_score < 100) {

    console.log('very good')

}
else{

    console.log('incorrect score')

}