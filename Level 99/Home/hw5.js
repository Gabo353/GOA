let users_num = prompt('Your number: ');
if (typeof users_num === Number) {

    for (let i = 1; i >= users_num; i++) {

        console.log(i)

    }
    
}
else{

    console.log('you entered string number, so you are wrong')

}