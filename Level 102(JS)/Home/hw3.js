let users_password = prompt('Your password:');
let re_enter = prompt('Re-neter:');
function password(stats){

    
    users_password = stats
    while (users_password != re_enter){

        re_enter = prompt('Wrong! Try again: ')

    }
    console.log('You got it!')

}
password(users_password)