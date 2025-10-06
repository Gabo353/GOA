let long_string = 'ohwowthisislong';

let user_random_num = Number(prompt('Num:'));

let yoma = ''
function yo(str,num,boma) {

    for (let i = 0; i < num; i++) {

        boma += str[i]

    }
    console.log(boma)
}

yo(long_string,user_random_num,yoma)

console.log('----------------------------------')
