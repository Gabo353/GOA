let users_passowrd = prompt('Enter your password: ');
let saved_password = users_passowrd.valueOf();
let re_asked_password = prompt('Re-Enter password: ');

while (re_asked_password !== saved_password) {

    re_asked_password = prompt('Wrong,Try agin: ')
    
}       

console.log('Permisson granted!(They guessed password)');