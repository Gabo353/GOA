let users_name_2 = prompt('Your name: ')
let users_age = Number(prompt('Your age: '))

if (users_age >= 18){

    console.log(`your name is ${users_name_2} and you are younger`)

}
else if (18 > users_age && users_age >= 11){

    console.log(`your name is ${users_name_2} and you are younger`)

}
else if (11 >= users_age && users_age >= 5){

    console.log("you have nice name but you are too young")

}
else{

    console.log('you are not born yet D')

}