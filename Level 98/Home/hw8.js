const userss_name = String(prompt('What is your name: '));
const userss_age = Number(prompt('How old are you: '));

if (userss_age >= 18 && userss_name.toLocaleLowerCase() === 'nika'){

    console.log(`your name nika and you are adult`)

}
else if (userss_age < 18 && userss_name.toLocaleLowerCase() === 'dorblavaso'){

    console.log("You are dorbla and you are too young")

}
else{

    console.log(`your name is weird, ${userss_name} and you are ${userss_age} years old`)

}