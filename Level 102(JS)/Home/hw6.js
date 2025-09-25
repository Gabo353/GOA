let choose_start = Number(prompt('Wow another start:'));
let choose_end = Number(prompt('Wow another end:'));
let sum = 0
function strate(starte, ende) {

    for (b = starte; b <= ende; b++) {

        sum += b

    }
    if (sum > 100) {

        console.log('Big sum')

    }
    else {

        console.log('small sum')

    }
}

strate(choose_start, choose_end);
