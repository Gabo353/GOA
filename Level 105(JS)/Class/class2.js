let users_opinion = Number(prompt('Any number from 1-10:'));

b = users_opinion

if (users_opinion % 2 == 0) {

    for (let i = users_opinion; i <= 50; i++) {

        if (i % 2 == 0) {

            console.log(i, 'even')

        }

    }

}

else {

    while (b <= 50) {
        
        if (b % 2 != 0) {
            
            
            console.log(b, 'odd')

        }
        b++

    }


}