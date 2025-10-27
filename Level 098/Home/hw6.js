const users_num = Number(prompt('Type in number: '))
if (users_num > 50 && users_num % 2 === 0){

    console.log("more than 50 and Even")

}
else if (users_num < 50 && users_num % 2 != 0 && users_num > 0){

    console.log("This number is less than 50 and more than 0 and is also Odd")

}
else if (users_num < 50 && users_num % 2 === 0 && users_num > 0){

    console.log("This number is less than 50 and more than 0 and is also even")

}
else if (users_num > 50 && users_num % 2 === 0){

    console.log("This number is more than 50 is even")

}
else if (users_num > 50 && users_num % 2 != 0){

    console.log("This number is more than 50 is odd")

}

else{

    console.log("this number is negative")

}




