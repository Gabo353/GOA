let users_identified_number = prompt('Just your number(not phone number): ');

while (users_identified_number !== "0") {

    if (users_identified_number > 0){

        console.log('Your number is possitive')
        users_identified_number = prompt('okay,Try again: ')

    }
    else if (users_identified_number < 0){
        
        console.log('Your number is neagtive')
        users_identified_number = prompt('okay,Try again: ')

    }
}

console.log('Nice you got it. It was zero!');